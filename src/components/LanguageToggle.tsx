import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const isZh = i18n.language === 'zh'

  return (
    <button
      onClick={() => i18n.changeLanguage(isZh ? 'en' : 'zh')}
      className="group relative flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm font-medium transition-all hover:border-teal hover:text-teal cursor-pointer"
    >
      <span className={`transition-opacity ${isZh ? 'opacity-100 font-bold' : 'opacity-40'}`}>
        中
      </span>
      <span className="text-muted">/</span>
      <span className={`transition-opacity ${!isZh ? 'opacity-100 font-bold' : 'opacity-40'}`}>
        EN
      </span>
    </button>
  )
}