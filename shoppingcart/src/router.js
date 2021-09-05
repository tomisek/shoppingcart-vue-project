import { createRouter, createWebHashHistory } from 'vue-router'
import CartList from './views/CartList.vue';
import ProductList from './views/ProductList.vue';

const routes = [
  {
    path: '/inventory',
    component: ProductList
  },
  {
    path: '/cart',
    component: CartList
  },
  {
    path: '/',
    redirect: '/inventory'
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router