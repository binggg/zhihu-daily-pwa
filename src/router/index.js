import Vue from 'vue'
import VueRouter from 'vue-router'
import StoryListView from '../views/StoryListView'
import StoryDetailView from '../views/StoryDetailView'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: StoryListView },
  { path: '/story/:id', component: StoryDetailView }
]

export default new VueRouter({
  routes
})
