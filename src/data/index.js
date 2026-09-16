import newsData from './content/news.json'
import jobsData from './content/jobs.json'
// 产品线数据：id 对应 i18n products.items 的 key；image 为旧站设备图（已 2x 放大+锐化增强，源分辨率 435x288）
// yk3e 与码垛机、yk-bending 与汽车轻量化的对应关系 TODO 待确认
export const products = [
  { id: 'ykLine', icon: 'Setting', image: 'images/products/yk6-alu-line.webp' },
  { id: 'compositeLine', icon: 'Box', image: 'images/products/ykfc-composite-line.webp' },
  { id: 'palletizer', icon: 'Sort', image: 'images/products/yk3e-palletizer.webp' },
  { id: 'loader', icon: 'Upload', image: 'images/products/ykal-loader.webp' },
  { id: 'vision', icon: 'View', image: 'images/products/ykol-vision.webp' },
  { id: 'auto', icon: 'Van', image: 'images/products/yk-bending-auto.webp' },
]

// 首页业务分类卡片的配图
export const businessImages = {
  line: 'images/products/yk6-line-alt.webp',
  palletizing: 'images/products/ykal-loader.webp',
  vision: 'images/products/ykol-vision.webp',
}

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


// 合作伙伴：旧站仅提供 logo 图片，公司名未公开列出（TODO: 待用户提供正式授权名单后替换）
export const partners = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  logo: `images/partners/partner-${String(i + 1).padStart(2, '0')}.png`,
}))

// CMS 可编辑内容（JSON）
export const newsList = newsData.items
export const jobs = jobsData.jobs
