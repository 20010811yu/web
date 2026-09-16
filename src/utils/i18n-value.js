// 双语值取值：字符串原样返回，对象按当前语言返回
import { i18n } from '../i18n'

export function tv(v) {
  if (v == null) return ''
  return typeof v === 'string' ? v : v[i18n.global.locale.value] ?? v.zh
}
