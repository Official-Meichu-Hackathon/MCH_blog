import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function HeroBanner() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #0d9488 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1a1a2e 0%, transparent 40%), radial-gradient(circle at 60% 80%, #0d9488 0%, transparent 30%)',
          }}
        />
      </div>

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative mx-auto max-w-5xl px-6 py-28 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-light mb-6">
            {t('hero.tagline')}
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-lg font-light leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex items-center gap-2 text-white/30"
        >
          <span className="text-xs font-mono tracking-widest uppercase">{t('hero.scroll')}</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="animate-bounce">
            <path d="M8 4L8 20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />
    </section>
  )
}