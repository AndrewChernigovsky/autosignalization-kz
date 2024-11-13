// app/router.options.ts
import type { RouterConfig } from '@nuxt/schema'

export default {
  routes: () => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/index.vue'),
      meta: { title: 'Главная страница' },
    },
    {
      name: 'popular-products',
      path: '/popular-products',
      component: () => import('~/pages/popular-products/index.vue'),
      meta: { title: 'Популярные товары' },
    },
  ],
} satisfies RouterConfig
