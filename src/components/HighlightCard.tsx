import { motion } from 'framer-motion'

interface Props {
  value: string
  label: string
  index: number
}

export default function HighlightCard({ value, label, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="flex flex-col items-center rounded-lg border border-border/60 bg-surface px-6 py-8 text-center"
    >
      <span className="font-display text-4xl md:text-5xl font-bold text-teal">{value}</span>
      <span className="mt-2 text-sm text-muted">{label}</span>
    </motion.div>
  )
}