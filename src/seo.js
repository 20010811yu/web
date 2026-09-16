// SEO：每路由中英 title/description；由 router afterEach 与 setLocale 调用
import i18n from './i18n'

const t = (k) => i18n.global.t(k)

const SITE = '上海寅铠精密机械制造有限公司'

const routeMeta = {
  Home: () => ({
    title: `${SITE}`,
    desc: t('hero.subtitle'),
  }),
  Products: () => ({
    title: `${t('products.title')} - ${SITE}`,
    desc: t('products.subtitle'),
  }),
  About: () => ({
    title: `${t('about.hero')} - ${SITE}`,
    desc: t('home.about.summary'),
  }),
  News: () => ({
    title: `${t('news.title')} - ${SITE}`,
    desc: t('news.subtitle'),
  }),
  NewsDetail: () => ({
    title: `${t('news.title')} - ${SITE}`,
    desc: t('news.subtitle'),
  }),
  Contact: () => ({
    title: `${t('contact.title')} - ${SITE}`,
    desc: t('contact.subtitle'),
  }),
  Careers: () => ({
    title: `${t('careers.title')} - ${SITE}`,
    desc: t('careers.subtitle'),
  }),
}

function setMeta(title, desc) {
  document.title = title
  let el = document.querySelector('meta[name="description"]')
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', 'description')
    document.head.appendChild(el)
  }
  el.setAttribute('content', desc)
}

export function applyRouteSeo(route) {
  const factory = routeMeta[route.name]
  if (factory) {
    const { title, desc } = factory()
    setMeta(title, desc)
  }
}

export function applyNewsSeo(id, title, summary) {
  setMeta(`${title} - ${SITE}`, summary)
}
