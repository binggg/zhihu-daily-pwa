// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'material-design-icons/iconfont/material-icons.css'
import './assets/material.css'

const app = new Vue({
  router,
  store,
  render: h => h(App)
})

export default {
  app, store, router
}
