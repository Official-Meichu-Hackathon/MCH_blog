import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Item {
  q: string
  a: string
}

export default function FAQAccordion({ items }: { items: Item[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <div className="divide-y divide-border/60">
      {items.map((item, i) => {
        const isOpen = openIdx === i
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="flex w-full items-center justify-between py-5 text-left cursor-pointer group"
            >
              <span className="text-base font-medium text-navy pr-4 group-hover:text-teal transition-colors">
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 text-xl text-muted font-light"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm leading-relaxed text-slate/70">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}