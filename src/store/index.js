import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import startImg from './modules/start-img'
import news from './modules/news'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
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
  plugins: [createPersistedState()]
})
