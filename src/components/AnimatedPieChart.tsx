import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

type Slice = {
  label: string
  value: number
}

type Props = {
  title: string
  slices: Slice[]
  index?: number
}

const COLORS = ['#0d9488', '#2563eb', '#8b5cf6', '#f59e0b', '#ef4444', '#14b8a6', '#64748b']

function polarToCartesian(cx: number, cy: number, radius: number, angle: number) {
  const radians = ((angle - 90) * Math.PI) / 180
  return {
    x: cx + radius * Math.cos(radians),
    y: cy + radius * Math.sin(radians),
  }
}

function describeArc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, radius, endAngle)
  const end = polarToCartesian(cx, cy, radius, startAngle)
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

  return [
    `M ${cx} ${cy}`,
    `L ${start.x} ${start.y}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
    'Z',
  ].join(' ')
}

export default function AnimatedPieChart({ title, slices, index = 0 }: Props) {
  const { t } = useTranslation()
  const total = slices.reduce((sum, slice) => sum + slice.value, 0)
  const segments = slices.reduce<
    {
      color: string
      endAngle: number
      percent: number
      slice: Slice
      startAngle: number
    }[]
  >((items, slice, sliceIndex) => {
    const startAngle = items.at(-1)?.endAngle ?? 0
    const percent = total ? slice.value / total : 0
    const endAngle = startAngle + percent * 360

    return [
      ...items,
      {
        color: COLORS[sliceIndex % COLORS.length],
        endAngle,
        percent,
        slice,
        startAngle,
      },
    ]
  }, [])

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-lg border border-border bg-surface p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-bold leading-tight text-navy">{title}</h3>
        <span className="rounded-full border border-teal/20 bg-teal/5 px-3 py-1 font-mono text-xs font-bold text-teal-dark">
          {t('review.totalPeople', { count: total })}
        </span>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] sm:items-center">
        <svg
          viewBox="0 0 100 100"
          role="img"
          aria-label={title}
          className="mx-auto aspect-square w-full max-w-[250px] overflow-visible"
        >
          {segments.map(({ color, endAngle, slice, startAngle }, sliceIndex) => {
            return (
              <motion.path
                key={slice.label}
                d={describeArc(50, 50, 43, startAngle, endAngle)}
                fill={color}
                stroke="#ffffff"
                strokeWidth="1"
                initial={{ opacity: 0, scale: 0.72 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.035 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08 + sliceIndex * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ transformOrigin: '50px 50px' }}
              />
            )
          })}
        </svg>

        <ul className="space-y-2.5">
          {slices.map((slice, sliceIndex) => {
            const percent = total ? Math.round((slice.value / total) * 1000) / 10 : 0

            return (
              <motion.li
                key={slice.label}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08 + sliceIndex * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 text-sm"
              >
                <span
                  className="mt-1 h-3 w-3 rounded-full"
                  style={{ backgroundColor: COLORS[sliceIndex % COLORS.length] }}
                />
                <span className="font-medium leading-snug text-slate/80">{slice.label}</span>
                <span className="font-mono text-xs text-muted">
                  {slice.value} / {percent}%
                </span>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </motion.article>
  )
}
