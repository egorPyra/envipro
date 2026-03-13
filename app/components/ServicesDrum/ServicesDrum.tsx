"use client"

import { useEffect, useRef, useState, type MouseEvent } from "react"
import styles from "./ServicesDrum.module.css"
import { services } from "./servicesData"
import HeroMain from "../HeroMain/HeroMain"

export default function ServicesDrum() {
  const PAUSE_BEFORE_SNAP_MS = 220
  const SNAP_THRESHOLD_PX = 18
  const SNAP_DURATION_MS = 520

  const [openId, setOpenId] = useState<string | null>(null)
  const [isClosing, setIsClosing] = useState(false)
  const [isHeroMainOpen, setIsHeroMainOpen] = useState(false)
  const [isHeroMainClosing, setIsHeroMainClosing] = useState(false)
  const [activeId, setActiveId] = useState<string>(services[0]?.id ?? "")

  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const sectionRef = useRef<HTMLElement | null>(null)
  const activeIdRef = useRef(activeId)
  const openIdRef = useRef<string | null>(openId)

  const stopTimerRef = useRef<number | null>(null)
  const autoAlignUnlockRef = useRef<number | null>(null)
  const heroMainCloseTimerRef = useRef<number | null>(null)
  const isAutoAligningRef = useRef(false)

  const lastScrollYRef = useRef(0)

  useEffect(() => {
    activeIdRef.current = activeId
  }, [activeId])

  useEffect(() => {
    openIdRef.current = openId
    if (openId !== null || isHeroMainOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [openId, isHeroMainOpen])

  useEffect(() => {
    return () => {
      if (heroMainCloseTimerRef.current) {
        window.clearTimeout(heroMainCloseTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const alignAfterStop = () => {
      if (openIdRef.current !== null) return
      const sectionNode = sectionRef.current
      if (!sectionNode) return

      const sectionRect = sectionNode.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const isViewportCenterInsideSection =
        viewportCenter >= sectionRect.top && viewportCenter <= sectionRect.bottom

      if (!isViewportCenterInsideSection) {
        return
      }

      const currentActiveId = activeIdRef.current
      const node = cardRefs.current[currentActiveId]
      if (!node) return

      const rect = node.getBoundingClientRect()
      const cardCenter = rect.top + rect.height / 2
      const centerDelta = cardCenter - viewportCenter

      if (Math.abs(centerDelta) < SNAP_THRESHOLD_PX) {
        return
      }

      isAutoAligningRef.current = true
      node.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      })

      if (autoAlignUnlockRef.current) {
        window.clearTimeout(autoAlignUnlockRef.current)
      }

      autoAlignUnlockRef.current = window.setTimeout(() => {
        isAutoAligningRef.current = false
      }, SNAP_DURATION_MS)

    }

    const handleScroll = () => {
      if (openIdRef.current !== null) return
      if (isAutoAligningRef.current) return
      const sectionNode = sectionRef.current
      if (!sectionNode) return

      const sectionRect = sectionNode.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const isViewportCenterInsideSection =
        viewportCenter >= sectionRect.top && viewportCenter <= sectionRect.bottom

      if (!isViewportCenterInsideSection) {
        return
      }

      const currentY = window.scrollY
      lastScrollYRef.current = currentY

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

      if (autoAlignUnlockRef.current) {
        window.clearTimeout(autoAlignUnlockRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let nextActive = activeIdRef.current
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

        if (nextActive !== activeIdRef.current) {
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
  }, [])

  const handleClose = () => {
    setIsClosing(true)

    window.setTimeout(() => {
      setOpenId(null)
      setIsClosing(false)
    }, 420)
  }

  const handleHeroBubbleClick = (event: MouseEvent<HTMLButtonElement>) => {
    // Keep hero bubbles independently clickable on cover.
    event.stopPropagation()
    setIsHeroMainClosing(false)
    setIsHeroMainOpen(true)
  }

  const handleHeroMainClose = () => {
    setIsHeroMainClosing(true)
    if (heroMainCloseTimerRef.current) {
      window.clearTimeout(heroMainCloseTimerRef.current)
    }
    heroMainCloseTimerRef.current = window.setTimeout(() => {
      setIsHeroMainOpen(false)
      setIsHeroMainClosing(false)
    }, 420)
  }

  const active = services.find((s) => s.id === openId)
  const activeIndex = services.findIndex((service) => service.id === activeId)

  return (
    <section ref={sectionRef} className={styles.section}>
      {isHeroMainOpen && (
        <div className={`${styles.heroMainOverlay} ${isHeroMainClosing ? styles.heroMainOverlayClosing : ""}`}>
          <HeroMain onClose={handleHeroMainClose} />
        </div>
      )}

      <div className={styles.cards}>
        {services.map((service, index) => {
          const isHero = service.id === "welcome"
          const shouldPrioritizeCover = activeIndex >= 0 && Math.abs(index - activeIndex) <= 1

          return (
            <div
              key={service.id}
              ref={(node) => {
                cardRefs.current[service.id] = node
              }}
              data-service-id={service.id}
              className={`${styles.card} ${service.coverHeight === "hero" ? styles.cardHero : ""} ${activeId === service.id ? styles.cardActive : ""}`}
              onClick={() => setOpenId(service.id)}
            >
              {!isHero && (
                <img
                  src={service.cover}
                  className={styles.cover}
                  alt={service.title}
                  loading={shouldPrioritizeCover ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={shouldPrioritizeCover ? "high" : "low"}
                />
              )}

              {isHero && (
                <div className={styles.heroDecor}>
                  <button
                    className={`${styles.heroBubbleBtn} ${styles.heroBubblePrimary}`}
                    type="button"
                    aria-label="Hero button 1"
                    onClick={handleHeroBubbleClick}
                  >
                    <span className={styles.heroMenuIcon} aria-hidden="true">
                      <span className={styles.heroMenuLine} />
                      <span className={styles.heroMenuLine} />
                      <span className={styles.heroMenuLine} />
                    </span>
                  </button>

                  <img
                    className={`${styles.heroPhoto} ${styles.heroPhotoOne}`}
                    src="/logoBlackRus.png"
                    alt=""
                    aria-hidden="true"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                  <img
                    className={`${styles.heroPhoto} ${styles.heroPhotoTwo}`}
                    src="/Savee.png"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                  <span className={styles.heroSmallDot} aria-hidden="true" />
                  <span className={styles.heroCornerRing} aria-hidden="true" />
                </div>
              )}

              {/* <div className={styles.cardTitle}>{service.title}</div> */}
            </div>
          )
        })}
      </div>

      {active && (
        <div className={`${styles.panel} ${isClosing ? styles.panelClosing : ""}`}>
          <div className={styles.panelHeader}>
            <button className={styles.close} onClick={handleClose}>✕</button>
          </div>

          <div className={styles.panelBody}>
            <img
              src={active.images[0]}
              className={styles.detailImage}
              alt={active.title}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />

            <img
              src={active.images[1]}
              className={styles.detailImage}
              alt={`${active.title} detail`}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />

            <div className={styles.panelText}>{active.text}</div>
          </div>
        </div>
      )}
    </section>
  )
}
