import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import HeroBanner from '../components/HeroBanner'
import SectionHeader from '../components/SectionHeader'
import FAQAccordion from '../components/FAQAccordion'
import AnimatedPieChart from '../components/AnimatedPieChart'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
}

type InfoCard = {
  label: string
  value: string
}

type AboutTrack = {
  title: string
  body: string
}

type TextCard = {
  title: string
  body: string
}

type ChartAsset = {
  title: string
  slices: {
    label: string
    value: number
  }[]
}

function SectionShell({
  id,
  children,
  tone = 'warm',
}: {
  id: string
  children: React.ReactNode
  tone?: 'warm' | 'light' | 'dark'
}) {
  const toneClass =
    tone === 'dark'
      ? 'bg-navy text-white'
      : tone === 'light'
        ? 'bg-surface-alt'
        : 'bg-warm'

  return (
    <section id={id} className={`${toneClass} scroll-mt-24`}>
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">{children}</div>
    </section>
  )
}

export default function Home() {
  const { t } = useTranslation()
  const aboutTracks = t('about.tracks', { returnObjects: true }) as AboutTrack[]
  const infoCards = t('eventInfo.cards', { returnObjects: true }) as InfoCard[]
  const rewardItems = t('rewards.items', { returnObjects: true }) as TextCard[]
  const reviewStats = t('review.stats', { returnObjects: true }) as TextCard[]
  const charts = t('review.charts', { returnObjects: true }) as ChartAsset[]

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1)
      if (!id) return

      requestAnimationFrame(() => {
        const target = document.getElementById(id)
        if (!target) return

        const top = target.getBoundingClientRect().top + window.scrollY - 88
        document.documentElement.scrollTop = top
        document.body.scrollTop = top
      })
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  return (
    <>
      <HeroBanner />

      <SectionShell id="about">
        <SectionHeader section="about" field="heading" mono="2" />
        <motion.div {...fadeUp} className="max-w-3xl">
          <p className="text-base leading-relaxed text-slate/90 md:text-lg">{t('about.body')}</p>
        </motion.div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {aboutTracks.map((track, index) => (
            <motion.article
              key={track.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.08 }}
              className={`rounded-lg border p-6 md:p-8 ${
                index === 0
                  ? 'border-navy/20 bg-navy/[0.03]'
                  : 'border-teal/20 bg-teal/[0.04]'
              }`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                {index === 0 ? 'Track 01' : 'Track 02'}
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-navy">{track.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate/75 md:text-base">{track.body}</p>
            </motion.article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="event-info">
        <SectionHeader section="eventInfo" field="heading" mono="3" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {infoCards.map((card, index) => (
            <motion.article
              key={card.label}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.04 }}
              className="rounded-lg border border-border/70 bg-surface p-5"
            >
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{card.label}</p>
              <p className="mt-3 font-medium leading-relaxed text-navy">{card.value}</p>
            </motion.article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="rewards" tone="dark">
        <SectionHeader section="rewards" field="heading" mono="4" className="[&_h2]:text-white" />
        <div className="grid gap-5 md:grid-cols-2">
          {rewardItems.map((item, index) => (
            <motion.article
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.05 }}
              className="rounded-lg border border-white/10 bg-white/[0.06] p-6"
            >
              <h3 className="font-display text-2xl font-bold leading-tight text-teal-light">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="review" tone="light">
        <SectionHeader section="review" field="heading" mono="5" />
        <div className="grid gap-5 lg:grid-cols-3">
          {reviewStats.map((item, index) => (
            <motion.article
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.06 }}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <h3 className="font-display text-xl font-bold leading-tight text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate/75">{item.body}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {charts.map((chart, index) => (
            <AnimatedPieChart key={chart.title} title={chart.title} slices={chart.slices} index={index} />
          ))}
        </div>
      </SectionShell>

      <SectionShell id="faq">
        <SectionHeader section="faq" field="heading" mono="6" />
        <FAQAccordion items={t('faq.items', { returnObjects: true }) as { q: string; a: string }[]} />
      </SectionShell>
    </>
  )
}
