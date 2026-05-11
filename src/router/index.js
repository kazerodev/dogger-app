import { createRouter, createWebHistory } from 'vue-router'
import BreedOverview from '../views/BreedOverview.vue'
import BreedDetail from '../views/BreedDetail.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: BreedOverview },
    { path: '/breed/:name', component: BreedDetail }
  ]
})
