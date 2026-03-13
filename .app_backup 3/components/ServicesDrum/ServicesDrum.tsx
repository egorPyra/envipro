'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './ScrollDrum.module.css';
import { scrollDrumData, type ScrollDrumCard } from './servicesData';

type ScrollDrumProps = {
  items?: ScrollDrumCard[];
};

const RESTORE_SCROLL_DELAY_MS = 430;

export default function ScrollDrum({ items = scrollDrumData }: ScrollDrumProps) {
  const cards = useMemo(() => items, [items]);
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});
  const restoreScrollTimerRef = useRef<number | null>(null);
  const openedScrollYRef = useRef(0);

  const [activeId, setActiveId] = useState<string>(cards[0]?.id ?? '');
  const [openedId, setOpenedId] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.add('scrollDrumSnapRoot');
    return () => {
      document.body.classList.remove('scrollDrumSnapRoot');
    };
  }, []);

  useEffect(() => {
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (openedId) return;

        let nextActiveId = activeId;
        let bestDistance = Number.POSITIVE_INFINITY;

        for (const entry of entries) {
          const id = (entry.target as HTMLElement).dataset.cardId;
          if (!id || !entry.isIntersecting) continue;

          const rect = entry.boundingClientRect;
          const cardCenter = rect.top + rect.height / 2;
          const viewportCenter = window.innerHeight / 2;
          const distanceToCenter = Math.abs(cardCenter - viewportCenter);

          if (distanceToCenter < bestDistance) {
            bestDistance = distanceToCenter;
            nextActiveId = id;
          }
        }

        if (nextActiveId !== activeId) {
          setActiveId(nextActiveId);
        }
      },
      {
        root: null,
        threshold: [0.35, 0.5, 0.65, 0.8],
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    cards.forEach((card) => {
      const node = cardRefs.current[card.id];
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [activeId, cards, openedId]);

  useEffect(
    () => () => {
      if (restoreScrollTimerRef.current) {
        window.clearTimeout(restoreScrollTimerRef.current);
      }
    },
    []
  );

  const openCard = (id: string) => {
    openedScrollYRef.current = window.scrollY;
    setOpenedId(id);
    setActiveId(id);
  };

  const closeCard = () => {
    const restoreTo = openedScrollYRef.current;
    setOpenedId(null);

    if (restoreScrollTimerRef.current) {
      window.clearTimeout(restoreScrollTimerRef.current);
    }

    restoreScrollTimerRef.current = window.setTimeout(() => {
      window.scrollTo({ top: restoreTo, behavior: 'auto' });
    }, RESTORE_SCROLL_DELAY_MS);
  };

  return (
    <section className={styles.section} aria-label="Услуги">
      <div className={styles.stack}>
        {cards.map((card) => {
          const isActive = card.id === activeId;
          const isOpen = card.id === openedId;

          return (
            <article
              key={card.id}
              data-card-id={card.id}
              ref={(node) => {
                cardRefs.current[card.id] = node;
              }}
              className={`${styles.card} ${isActive ? styles.cardActive : ''} ${isOpen ? styles.cardOpen : ''}`.trim()}
            >
              <button
                type="button"
                className={styles.coverButton}
                onClick={() => openCard(card.id)}
                aria-expanded={isOpen}
                aria-controls={`scroll-drum-detail-${card.id}`}
              >
                <span
                  className={styles.coverImage}
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.14), rgba(0,0,0,0.38)), url(${card.coverImage})`,
                  }}
                />
                <span className={styles.coverLabel}>{card.title}</span>
              </button>

              <div
                id={`scroll-drum-detail-${card.id}`}
                className={styles.detailReveal}
                aria-hidden={!isOpen}
              >
                <div className={styles.detailPanel}>
                  <div className={styles.detailTopBar}>
                    <button
                      type="button"
                      className={styles.closeButton}
                      onClick={closeCard}
                      aria-label="Закрыть"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                    <h3 className={styles.detailTitle}>{card.title}</h3>
                  </div>

                  <div className={styles.detailBody}>
                    <div className={styles.detailImages}>
                      {card.detailImages.slice(0, 2).map((src, imageIndex) => (
                        <div
                          key={`${card.id}-${imageIndex}`}
                          className={styles.detailImage}
                          style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.12), rgba(0,0,0,0.34)), url(${src})`,
                          }}
                        />
                      ))}
                    </div>

                    {(card.text || card.secondaryText) && (
                      <div className={styles.detailTextBlock}>
                        {card.text && <p className={styles.detailText}>{card.text}</p>}
                        {card.secondaryText && (
                          <p className={styles.detailSecondaryText}>{card.secondaryText}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
