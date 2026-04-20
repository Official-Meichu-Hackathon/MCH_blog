import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const YEARS = ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025']

export default function Timeline() {
  const { t } = useTranslation()

  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal/0 via-teal/30 to-teal/0 md:-translate-x-px" />

      <div className="space-y-8 md:space-y-12">
        {YEARS.map((year, i) => {
          const isLeft = i % 2 === 0
          const data = t(`timeline.years.${year}`, { returnObjects: true }) as { title: string; desc: string }

          return (
            <motion.div
              key={year}
              initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className={`relative flex items-start gap-6 md:gap-0 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div
                className={`shrink-0 w-8 h-8 rounded-full border-2 border-teal bg-warm z-10 flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2 ${
                  year === '2025' ? 'border-teal bg-teal text-white' : ''
                }`}
              >
                <span className="text-[10px] font-mono font-bold">{year.slice(2)}</span>
              </div>

              <div
                className={`flex-1 md:w-[calc(50%-2rem)] ${
                  isLeft ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                <div className="rounded-lg border border-border/60 bg-surface p-5 transition-shadow hover:shadow-md">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="font-mono text-xs text-muted">{year}</span>
                    <h3 className="font-display text-lg font-bold text-navy">
                      {data.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate/80">{data.desc}</p>
                </div>
              </div>

              <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}