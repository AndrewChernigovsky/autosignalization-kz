interface Route {
  path: string
  title: string
}

const routes: Route[] = [
  {
    path: '/',
    title: 'Главная',
  },
  {
    path: '/popular-products',
    title: 'Популярные товары',
  },
  {
    path: '/services',
    title: 'Услуги',
  },
]

export default routes
