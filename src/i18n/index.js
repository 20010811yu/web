import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'

const LOCALE_KEY = 'yinkai-locale'

function loadLocale() {
  const saved = localStorage.getItem(LOCALE_KEY)
  if (saved === 'zh' || saved === 'en') return saved
  return 'zh' // 默认中文；用户手动切换后经 localStorage 记忆
}

const i18n = createI18n({
  legacy: false,
  locale: loadLocale(),
  fallbackLocale: 'zh',
  messages: { zh, en },
})

export function setLocale(locale) {
  i18n.global.locale.value = locale
  localStorage.setItem(LOCALE_KEY, locale)
  document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
}

export default i18n
export { i18n }
