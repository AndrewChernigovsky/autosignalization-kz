<template>
  <nav class="breadcrumbs" id="breadcrumbs" aria-label="Breadcrumb">
    <ol class="list-style-none">
      <li>
        <NuxtLink to="/">Главная</NuxtLink>
      </li>
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <NuxtLink :to="breadcrumb.path">
          {{ breadcrumb.name }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'

const route = useRoute()
const router = useRouter()

const breadcrumbs = ref([])

const routes = router.getRoutes()

const createBreadcrumbs = () => {
  const fullPath = route.path
  const pathSegments = fullPath.split('/').filter((segment) => segment !== '')

  breadcrumbs.value = pathSegments
    .map((segment, index) => {
      // Формируем путь до текущего сегмента
      const path = '/' + pathSegments.slice(0, index).join('/')

      // Находим маршрут по пути
      const matchedRoute = routes.find((route) => route.path === path)

      // Возвращаем объект с именем и путем
      return matchedRoute
        ? { name: matchedRoute.meta.title || segment, path }
        : null
    })
    .filter(Boolean) // Удаляем null значения

  // Устанавливаем заголовок страницы на основе мета-данных последнего маршрута
  if (pathSegments.length > 0) {
    const lastSegmentPath = '/' + pathSegments.join('/')
    const lastMatchedRoute = routes.find(
      (route) => route.path === lastSegmentPath,
    )
    if (lastMatchedRoute && lastMatchedRoute.meta.title) {
      useHead({ title: lastMatchedRoute.meta.title })
    }
  }
}

// Вызываем функцию для создания хлебных крошек
createBreadcrumbs()
</script>
<style lang="scss" scoped>
.breadcrumbs ol {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  li {
    color: $white;
    position: relative;

    &:not(:first-of-type) {
      padding-left: 20px;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -20px;
        width: 20px;
        height: 10px;
        background-image: url('@/assets/arrow-slider-next.svg');
        background-position: left center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      a {
        color: $white;
        text-decoration: none;
      }
    }
  }
}
</style>
