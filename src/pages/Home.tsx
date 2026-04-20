import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import HeroBanner from '../components/HeroBanner'
import SectionHeader from '../components/SectionHeader'
import QuoteBlock from '../components/QuoteBlock'
import Timeline from '../components/Timeline'
import HighlightCard from '../components/HighlightCard'
import FAQAccordion from '../components/FAQAccordion'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <HeroBanner />

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 pt-20 md:pt-28">
        <motion.div {...fadeUp}>
          <SectionHeader section="intro" field="heading" mono="001" />
          <p className="text-lg md:text-xl leading-relaxed text-slate/90">{t('intro.body')}</p>
          <p className="mt-4 font-display text-lg font-semibold text-teal">{t('intro.highlight')}</p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(['years', 'participants', 'companies', 'projects'] as const).map((key, i) => (
            <HighlightCard
              key={key}
              value={t(`stats.${key}`)}
              label={t(`stats.${key}Label`)}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* What Is */}
      <section className="mx-auto max-w-3xl px-6 py-12 md:py-20">
        <SectionHeader section="whatIs" field="heading" mono="002" />

        <div className="space-y-8">
          <motion.div {...fadeUp} className="grid grid-cols-2 gap-6">
            <div className="rounded-lg border border-teal/20 bg-teal/5 p-6">
              <span className="font-display text-3xl font-bold text-teal">{t('whatIs.mei.title')}</span>
              <p className="mt-1 text-sm font-medium text-navy">{t('whatIs.mei.school')}</p>
              <p className="mt-1 text-xs text-muted">{t('whatIs.mei.origin')}</p>
            </div>
            <div className="rounded-lg border border-teal/20 bg-teal/5 p-6">
              <span className="font-display text-3xl font-bold text-teal">{t('whatIs.chu.title')}</span>
              <p className="mt-1 text-sm font-medium text-navy">{t('whatIs.chu.school')}</p>
              <p className="mt-1 text-xs text-muted">{t('whatIs.chu.origin')}</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="rounded-lg border border-border/60 bg-surface p-6 md:p-8">
            <h3 className="font-display text-xl font-bold text-navy mb-3">{t('whatIs.hackathon.title')}</h3>
            <div className="space-y-2 text-sm text-slate/80">
              <p><span className="font-mono text-teal text-xs mr-2">HACK</span>{t('whatIs.hackathon.hack')}</p>
              <p><span className="font-mono text-teal text-xs mr-2">MARATHON</span>{t('whatIs.hackathon.marathon')}</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <p className="text-base leading-relaxed text-slate/80">{t('whatIs.philosophy')}</p>
          </motion.div>

          <motion.div {...fadeUp} className="flex flex-wrap gap-3">
            {(['innovation', 'efficiency', 'teamwork', 'exchange'] as const).map((val) => (
              <span
                key={val}
                className="rounded-full border border-teal/30 bg-teal/5 px-4 py-1.5 text-sm font-medium text-teal-dark"
              >
                {t(`whatIs.values.${val}`)}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Origin */}
      <section className="mx-auto max-w-3xl px-6 py-12 md:py-20">
        <SectionHeader section="origin" field="heading" mono="003" />
        <motion.div {...fadeUp}>
          <p className="text-base leading-relaxed text-slate/80">{t('origin.story')}</p>
        </motion.div>
        <QuoteBlock quote={t('origin.quote')} author={t('origin.quoteAuthor')} />
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-4xl px-6 py-12 md:py-20">
        <SectionHeader section="timeline" field="heading" mono="004" />
        <Timeline />
      </section>

      {/* Tracks */}
      <section className="mx-auto max-w-4xl px-6 py-12 md:py-20">
        <SectionHeader section="tracks" field="heading" mono="005" />

        <div className="grid md:grid-cols-2 gap-6">
          {(['hacker', 'maker'] as const).map((track) => (
            <motion.div
              key={track}
              {...fadeUp}
              className={`rounded-lg border p-6 md:p-8 ${
                track === 'hacker'
                  ? 'border-navy/20 bg-navy/[0.03]'
                  : 'border-teal/20 bg-teal/[0.03]'
              }`}
            >
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-display text-xl font-bold text-navy">{t(`tracks.${track}.title`)}</h3>
                <span className="font-mono text-xs text-muted">{t(`tracks.${track}.subtitle`)}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate/70">{t(`tracks.${track}.desc`)}</p>
              <ul className="mt-4 space-y-1.5">
                {(
                  t(`tracks.${track}.features`, { returnObjects: true }) as string[]
                ).map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-slate/80">
                    <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${track === 'hacker' ? 'bg-navy' : 'bg-teal'}`} />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mascot */}
      <section className="mx-auto max-w-3xl px-6 py-12 md:py-20">
        <SectionHeader section="mascot" field="heading" mono="006" />
        <motion.div {...fadeUp} className="rounded-lg border border-border/60 bg-surface p-6 md:p-8">
          <p className="text-base leading-relaxed text-slate/80">{t('mascot.desc')}</p>
          <div className="mt-6 rounded border border-teal/20 bg-teal/5 px-4 py-3">
            <p className="text-sm text-slate/70">
              <span className="font-mono text-xs text-teal mr-2">SIGNATURE</span>
              {t('mascot.gesture')}
            </p>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-12 md:py-20">
        <SectionHeader section="faq" field="heading" mono="007" />
        <FAQAccordion
          items={
            t('faq.items', { returnObjects: true }) as { q: string; a: string }[]
          }
        />
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold">{t('hero.title')}</h2>
            <p className="mt-4 text-white/60">{t('hero.subtitle')}</p>
            <a
              href="https://www.meichuhackathon.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full border-2 border-teal px-8 py-3 font-medium text-teal transition-colors hover:bg-teal hover:text-white"
            >
              {t('footer.official')} &rarr;
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}