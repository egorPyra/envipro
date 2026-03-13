"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./ServicesDrum.module.css"
import { services } from "./servicesData"

export default function ServicesDrum() {
  const PAUSE_BEFORE_SNAP_MS = 260
  const SNAP_THRESHOLD_PX = 10
  const SNAP_DURATION_MS = 620

  const [openId, setOpenId] = useState<string | null>(null)
  const [isClosing, setIsClosing] = useState(false)
  const [activeId, setActiveId] = useState<string>(services[0]?.id ?? "")

  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const stopTimerRef = useRef<number | null>(null)
  const snapAnimationRef = useRef<number | null>(null)
  const isAutoAligningRef = useRef(false)

  const lastScrollYRef = useRef(0)
  const gestureStartIdRef = useRef<string | null>(null)
  const gestureDeltaRef = useRef(0)
  const gestureDirectionRef = useRef<1 | -1 | 0>(0)

  useEffect(() => {
    if (openId !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [openId])

  useEffect(() => {
    if (openId !== null) return

    const animateSnapBy = (delta: number) => {
      if (Math.abs(delta) < SNAP_THRESHOLD_PX) return

      if (snapAnimationRef.current) {
        window.cancelAnimationFrame(snapAnimationRef.current)
      }

      isAutoAligningRef.current = true

      const startY = window.scrollY
      const targetY = startY + delta
      const startTime = performance.now()

      const step = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / SNAP_DURATION_MS, 1)
        const eased = 1 - Math.pow(1 - progress, 3)

        window.scrollTo({
          top: startY + (targetY - startY) * eased,
          behavior: "auto",
        })

        if (progress < 1) {
          snapAnimationRef.current = window.requestAnimationFrame(step)
          return
        }

        isAutoAligningRef.current = false
        snapAnimationRef.current = null
      }

      snapAnimationRef.current = window.requestAnimationFrame(step)
    }

    const alignAfterStop = () => {
      let targetId = activeId

      const startId = gestureStartIdRef.current
      const direction = gestureDirectionRef.current
      const hasGesture = Math.abs(gestureDeltaRef.current) >= 2

      // If user made a short scroll but didn't switch active card yet,
      // nudge to next/prev card by scroll direction.
      if (startId && startId === activeId && direction !== 0 && hasGesture) {
        const currentIndex = services.findIndex((service) => service.id === activeId)
        if (currentIndex >= 0) {
          const nextIndex = currentIndex + direction
          if (nextIndex >= 0 && nextIndex < services.length) {
            targetId = services[nextIndex].id
          }
        }
      }

      const node = cardRefs.current[targetId]
      if (!node) return

      const rect = node.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const cardCenter = rect.top + rect.height / 2
      const delta = cardCenter - viewportCenter

      animateSnapBy(delta)

      gestureStartIdRef.current = null
      gestureDeltaRef.current = 0
      gestureDirectionRef.current = 0
    }

    const handleScroll = () => {
      if (isAutoAligningRef.current) return

      const currentY = window.scrollY
      const deltaY = currentY - lastScrollYRef.current
      lastScrollYRef.current = currentY

      if (!gestureStartIdRef.current) {
        gestureStartIdRef.current = activeId
        gestureDeltaRef.current = 0
        gestureDirectionRef.current = 0
      }

      gestureDeltaRef.current += deltaY
      if (Math.abs(deltaY) >= 0.5) {
        gestureDirectionRef.current = deltaY > 0 ? 1 : -1
      }

      if (stopTimerRef.current) {
        window.clearTimeout(stopTimerRef.current)
      }

      stopTimerRef.current = window.setTimeout(() => {
        alignAfterStop()
      }, PAUSE_BEFORE_SNAP_MS)
    }

    lastScrollYRef.current = window.scrollY
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)

      if (stopTimerRef.current) {
        window.clearTimeout(stopTimerRef.current)
      }

      if (snapAnimationRef.current) {
        window.cancelAnimationFrame(snapAnimationRef.current)
      }
    }
  }, [activeId, openId])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let nextActive = activeId
        let bestDistance = Number.POSITIVE_INFINITY

        for (const entry of entries) {
          if (!entry.isIntersecting) continue

          const id = (entry.target as HTMLElement).dataset.serviceId
          if (!id) continue

          const rect = entry.boundingClientRect
          const center = rect.top + rect.height / 2
          const viewportCenter = window.innerHeight / 2
          const distance = Math.abs(center - viewportCenter)

          if (distance < bestDistance) {
            bestDistance = distance
            nextActive = id
          }
        }

        if (nextActive !== activeId) {
          setActiveId(nextActive)
        }
      },
      {
        root: null,
        threshold: [0.35, 0.5, 0.7],
        rootMargin: "-18% 0px -18% 0px",
      }
    )

    for (const service of services) {
      const node = cardRefs.current[service.id]
      if (node) observer.observe(node)
    }

    return () => observer.disconnect()
  }, [activeId])

  const handleClose = () => {
    setIsClosing(true)

    setTimeout(() => {
      setOpenId(null)
      setIsClosing(false)
    }, 420)
  }

  const active = services.find((s) => s.id === openId)

  return (
    <section className={styles.section}>
      <div className={styles.cards}>
        {services.map((service) => (
          <div
            key={service.id}
            ref={(node) => {
              cardRefs.current[service.id] = node
            }}
            data-service-id={service.id}
            className={`${styles.card} ${service.coverHeight === "hero" ? styles.cardHero : ""} ${activeId === service.id ? styles.cardActive : ""}`}
            onClick={() => setOpenId(service.id)}
          >
            <img src={service.cover} className={styles.cover} />

            <div className={styles.cardTitle}>{service.title}</div>
          </div>
        ))}
      </div>

      {active && (
        <div className={`${styles.panel} ${isClosing ? styles.panelClosing : ""}`}>
          <div className={styles.panelHeader}>
            <button className={styles.close} onClick={handleClose}>✕</button>
          </div>

          <img src={active.images[0]} className={styles.detailImage} />

          <img src={active.images[1]} className={styles.detailImage} />

          <div className={styles.panelText}>{active.text}</div>
        </div>
      )}
    </section>
  )
}
