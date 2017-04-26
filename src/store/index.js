import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as actions from './actions'
import mutations from './mutations'
import startImg from './modules/start-img'
import news from './modules/news'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
let plugins = []

if (typeof window !== 'undefined') {
  plugins.push(createPersistedState())
}

export default new Vuex.Store({
  actions,
  mutations,
  state: {
    title: '',
    actions: [
    ]
  },
  modules: {
    startImg,
    news
  },
  strict: debug,
  plugins
})
