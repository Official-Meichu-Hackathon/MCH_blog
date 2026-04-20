import { motion } from 'framer-motion'

interface Props {
  quote: string
  author?: string
}

export default function QuoteBlock({ quote, author }: Props) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative my-12 md:my-16 border-l-3 border-teal pl-6 md:pl-8"
    >
      <p className="font-display text-xl md:text-2xl font-semibold text-navy/90 italic leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      {author && (
        <cite className="mt-3 block text-sm text-muted not-italic font-mono">
          &mdash; {author}
        </cite>
      )}
    </motion.blockquote>
  )
}