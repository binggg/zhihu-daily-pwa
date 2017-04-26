import axios from 'axios'

const API_HOST = 'https://zh.zhaobing.site/api/zhihu'

export const fetchStartImg = (width = 1080, height = 1920) => {
  return axios.get(`${API_HOST}/4/start-image/${width}*${height}`)
    .then((res) => res.data)
}

export const fetchLatestNews = () => {
  return axios.get(`${API_HOST}/4/news/latest`)
    .then((res) => res.data)
}

export const fetchStoryDetail = (id) => {
  return axios.get(`${API_HOST}/4/news/${id}`)
    .then((res) => res.data)
}
