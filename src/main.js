// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'material-design-icons/iconfont/material-icons.css'
import './assets/material.css'
import VueLazyload from 'vue-lazyload'

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'static/ring.gif',
  attempt: 1
})

const app = new Vue({
  router,
  store,
  render: h => h(App)
})

export default {
  app, store, router
}
