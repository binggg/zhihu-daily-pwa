import Vue from 'vue'
import VueResource from 'vue-resource'

const API_HOST = '//zh.zhaobing.site/api/zhihu'

Vue.use(VueResource)

export const fetchStartImg = (width = 1080, height = 1920) => {
  return Vue.http.get(`${API_HOST}/4/start-image/${width}*${height}`)
    .then((res) => res.data)
}

export const fetchLatestNews = () => {
  return Vue.http.get(`${API_HOST}/4/news/latest`)
    .then((res) => res.data)
}

export const fetchStoryDetail = (id) => {
  return Vue.http.get(`${API_HOST}/4/news/${id}`)
    .then((res) => res.data)
}
