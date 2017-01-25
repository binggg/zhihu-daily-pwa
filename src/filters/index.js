import {
  padStr
} from '../utils'

export const imgURLFilter = (url) => {
  const domains = [
    'pic1.zhimg.com',
    'pic2.zhimg.com',
    'pic3.zhimg.com',
    'pic4.zhimg.com'
  ]
  const pattern = /https?:\/\/([^/]+)([^"']*)/g

  return url.replace(pattern, function (match, domain, path) {
    if (match && domains.includes(domain)) {
      return `//zh.zhaobing.site/api/${domain}${path}`
    } else {
      return match
    }
  })
}

export const dateHeadingFilter = (dateStr) => {
  const date = new Date(dateStr.substr(0, 4), dateStr.substr(4, 2), dateStr.substr(6, 2))
  const now = new Date()
  const weekday = [
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '日'
  ]
  const delta = now - date

  if (delta < 24 * 3600) {
    return '今日热闻'
  }

  return `${padStr(date.getMonth() + 1, 2, '0')}月${padStr(date.getDate(), 2, '0')}日 星期${weekday[date.getDay()]}`
}
