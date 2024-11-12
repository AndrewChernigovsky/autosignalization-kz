<template>
  <nav class="breadcrumbs" id="breadcrumbs" aria-label="Breadcrumb">
    <ol class="list-style-none">
      <li>
        <NuxtLink to="/" :aria-current="ariaCurrent(-1)">Home</NuxtLink>
      </li>
      <li v-for="(breadcrumb, index) in getBreadcrumbs()" :key="index">
        <NuxtLink :to="breadcrumb.path" :aria-current="ariaCurrent(index)">
          {{ breadcrumb.name }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { RouteRecordNormalized } from 'vue-router'

const route = useRoute()
const router = useRouter()
const getBreadcrumbs = (): RouteRecordNormalized[] => {
  const fullPath = route.path
  const requestPath = fullPath.startsWith('/')
    ? fullPath.substring(1)
    : fullPath
  console.log(requestPath, 'PATH')
  const crumbs = requestPath.split('/')
  const breadcrumbs: RouteRecordNormalized[] = []
  let path = ''
  crumbs.forEach((crumb) => {
    if (crumb) {
      path = `${path}/${crumb}`
      const breadcrumb: RouteRecordNormalized | undefined = router
        .getRoutes()
        .find((r) => r.path === path)
      if (breadcrumb) {
        console.log(breadcrumb, 'breadcrumb')
        breadcrumbs.push(breadcrumb)
      }
    }
  })
  return breadcrumbs
}
const ariaCurrent = (index: number) =>
  index === getBreadcrumbs().length - 1 ? 'page' : 'false'
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
