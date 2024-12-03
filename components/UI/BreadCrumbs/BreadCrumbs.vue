<template>
  <nav class="breadcrumbs" id="breadcrumbs" aria-label="Breadcrumb">
    <ol class="list-style-none">
      <!-- <li>
        <NuxtLink to="/">Главная</NuxtLink>
      </li> -->
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <NuxtLink :to="breadcrumb.path">
          {{ breadcrumb.title }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import routes from '~/routes'

const router = useRouter()
const route = useRoute()
const getRoutes = router.getRoutes()
const breadcrumbs = ref<{ title: string; path: string }[]>([])

function createBreadcrumbs() {
  const currentPath = route.path
}
watch(route, createBreadcrumbs)
onMounted(() => createBreadcrumbs())
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
