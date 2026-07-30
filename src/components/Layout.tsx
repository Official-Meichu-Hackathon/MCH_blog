import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'

type NavItem = {
  label: string
  href: string
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation()
  const navItems = t('nav.items', { returnObjects: true }) as NavItem[]

  useEffect(() => {
    document.documentElement.lang = i18n.language === 'zh' ? 'zh-TW' : 'en'
  }, [i18n.language])

  return (
    <div className="relative min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-warm/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <a
            href="#home"
            className="font-display text-xl font-bold text-navy tracking-normal transition-colors hover:text-teal"
          >
            {t('nav.brand')}
          </a>
          <div className="flex items-center gap-3">
            <nav aria-label={t('nav.summary')} className="hidden items-center gap-5 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate/70 transition-colors hover:text-teal"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <LanguageToggle />
          </div>
        </div>
        <nav
          aria-label={t('nav.summary')}
          className="mx-auto flex max-w-5xl gap-4 overflow-x-auto px-6 pb-3 lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 text-sm font-medium text-slate/70 transition-colors hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="relative z-10 bg-warm pt-[104px] lg:pt-[68px]">{children}</main>
      <div className="h-[390px] md:h-[320px]" aria-hidden="true" />

      <footer className="fixed inset-x-0 bottom-0 z-0 flex h-[390px] items-center border-t border-border/60 bg-surface py-10 md:h-[320px]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">{t('footer.heading')}</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  {t('footer.emailLabel')}
                </p>
                <a
                  href={`mailto:${t('footer.email')}`}
                  className="mt-1 block font-medium text-navy transition-colors hover:text-teal"
                >
                  {t('footer.email')}
                </a>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  {t('footer.siteLabel')}
                </p>
                <a
                  href="https://2026.meichuhackathon.org/"
                  className="mt-1 block font-medium text-navy transition-colors hover:text-teal"
                >
                  {t('footer.officialSite')}
                </a>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  {t('footer.socialLabel')}
                </p>
                <div className="mt-2 flex flex-col gap-1">
                  <a
                    href="https://www.facebook.com/HackMeiChu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate/70 transition-colors hover:text-teal"
                  >
                    {t('footer.facebook')}
                  </a>
                  <a
                    href="https://www.instagram.com/mc_hackathon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate/70 transition-colors hover:text-teal"
                  >
                    {t('footer.instagram')}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-10 border-t border-border/60 pt-6 font-mono text-xs text-muted/70">
            {t('footer.madeWith')}
          </p>
        </div>
      </footer>
    </div>
  )
}
