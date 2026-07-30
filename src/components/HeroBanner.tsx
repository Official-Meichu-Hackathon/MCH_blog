import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'

const HERO_IMAGES = [
  '/hero/hero-01.jpg',
  '/hero/hero-02.jpg',
  '/hero/hero-03.jpg',
  '/hero/hero-04.jpg',
  '/hero/hero-05.jpg',
  '/hero/hero-06.jpg',
  '/hero/hero-07.jpg',
  '/hero/hero-08.jpg',
  '/hero/hero-09.jpg',
  '/hero/hero-10.jpg',
  '/hero/hero-11.jpg',
]

export default function HeroBanner() {
  const { t } = useTranslation()
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % HERO_IMAGES.length)
    }, 2600)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-104px)] overflow-hidden bg-navy text-white lg:min-h-[calc(100svh-68px)]"
    >
      <div className="absolute inset-0 bg-navy">
        <AnimatePresence initial={false}>
          <motion.div
            key={HERO_IMAGES[activeImage]}
            className="absolute inset-0 bg-cover bg-center [will-change:transform]"
            style={{ backgroundImage: `url(${HERO_IMAGES[activeImage]})` }}
            initial={{ x: '100%', scale: 1.02 }}
            animate={{ x: '0%', scale: 1 }}
            exit={{ x: '-100%', scale: 1.01 }}
            transition={{
              duration: 0.58,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,26,46,0.96)_0%,rgba(26,26,46,0.82)_48%,rgba(26,26,46,0.42)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100svh-104px)] max-w-5xl flex-col justify-center px-6 py-14 md:py-16 lg:min-h-[calc(100svh-68px)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal-light">
            {t('hero.sectionLabel')}
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-normal md:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://2026.meichuhackathon.org/"
              className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-light"
            >
              {t('hero.signupCta')}
            </a>
            <a
              href="#event-info"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-teal-light hover:text-teal-light"
            >
              {t('hero.primaryCta')}
            </a>
            <a
              href="https://www.instagram.com/mc_hackathon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-teal-light hover:text-teal-light"
            >
              {t('hero.secondaryCta')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
