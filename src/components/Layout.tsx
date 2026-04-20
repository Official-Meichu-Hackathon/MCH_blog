import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-warm/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a
            href="https://www.meichuhackathon.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xl font-bold text-navy tracking-tight hover:text-teal transition-colors"
          >
            MCH
          </a>
          <LanguageToggle />
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/60 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex gap-6">
              <a
                href="https://www.meichuhackathon.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-teal transition-colors"
              >
                {t('footer.official')}
              </a>
              <a
                href="https://www.instagram.com/meichu.hackathon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-teal transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/MeiChuHackathon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-teal transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://medium.com/meichu-hackathon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-teal transition-colors"
              >
                Medium
              </a>
            </div>
            <p className="text-xs text-muted">{t('footer.tagline')}</p>
            <p className="font-mono text-xs text-muted/60">{t('footer.madeWith')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}