import Vue from 'vue'
import VueRouter from 'vue-router'
import StoryListView from '../views/StoryListView.vue'
import FavStoryListView from '../views/FavStoryListView.vue'
import StoryDetailView from '../views/StoryDetailView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: StoryListView },
  { path: '/favorites/', component: FavStoryListView },
  { path: '/story/:id', component: StoryDetailView }
]

export default new VueRouter({
  mode: 'history',
  routes,
  beforeEach (from, to, next) {
    Vue.nextTick(() => {
      document.querySelector('main.mdl-layout__content').scrollTop = 0
    })
    next()
  }
})
