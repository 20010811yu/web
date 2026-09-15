// 产品线数据：id 对应 i18n products.items 的 key
export const products = [
  { id: 'ykLine', icon: 'Setting', image: 'http://yinkaiweb.oss-cn-shanghai.aliyuncs.com/images/banner/banner1.jpg' },
  { id: 'compositeLine', icon: 'Box', image: 'http://yinkaiweb.oss-cn-shanghai.aliyuncs.com/images/banner/banner2.jpg' },
  { id: 'palletizer', icon: 'Sort', image: '' },
  { id: 'loader', icon: 'Upload', image: '' },
  { id: 'vision', icon: 'View', image: '' },
  { id: 'auto', icon: 'Van', image: '' },
]

// 发展历程：year 为展示键，textKey 对应 i18n history
export const history = [
  { year: 2004, textKey: 'h2004' },
  { year: 2017, textKey: 'h2017' },
  { year: 2018, textKey: 'h2018' },
  { year: 2019, textKey: 'h2019' },
  { year: 2020, textKey: 'h2020' },
  { year: 2021, textKey: 'h2021' },
  { year: 2022, textKey: 'h2022' },
  { year: 2023, textKey: 'h2023' },
  { year: 2024, textKey: 'h2024' },
]

// 新闻列表
export const newsList = [
  { id: 'n1', titleKey: 'n1' },
  { id: 'n2', titleKey: 'n2' },
]

// 职位列表
export const jobs = [
  { id: 'mech' },
  { id: 'elec' },
  { id: 'vision' },
  { id: 'sales' },
]

// 合作伙伴：旧站仅提供 logo 图片，公司名未公开列出，此处用 logo 直链
// TODO: 待用户提供正式授权的合作商名单后替换
export const partners = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  logo: `http://yinkaiweb.oss-cn-shanghai.aliyuncs.com/images/logo/${17 + i}.png`,
}))
