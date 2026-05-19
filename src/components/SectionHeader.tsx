import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

interface Props {
  section: string
  field: string
  mono?: string
  className?: string
}

export default function SectionHeader({ section, field, mono, className = '' }: Props) {
  const { t } = useTranslation()
  const text = t(`${section}.${field}`)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-10 md:mb-14 ${className}`}
    >
      {mono && (
        <span className="mb-3 block font-mono text-xs uppercase tracking-[0.25em] text-teal">
          {mono}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-normal">
        {text}
      </h2>
    </motion.div>
  )
}
