// 图片路径解析：兼容 GitHub Pages 子路径部署（BASE_URL=/web/）
// CMS 写入的路径以 / 开头（含 base），项目内置资源用相对路径
export function imgSrc(p) {
  if (!p) return p
  if (/^https?:\/\//.test(p)) return p
  if (p.startsWith('/')) return p
  return import.meta.env.BASE_URL + p
}
