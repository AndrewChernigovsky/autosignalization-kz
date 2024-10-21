<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item" v-for="link in navLinks" :key="link.path">
        <nuxt-link
          class="nav-link"
          :to="link.path"
          active-class="active"
          exact-active-class="exact-active"
          >{{ link.name }}</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useNavigationStore } from '@/stores/navigation'
import type { NavigationLinksType } from '~/types/NavigationLinksType'

const navLinks = ref<NavigationLinksType[]>([])
const navigationStore = useNavigationStore()

const getNavLinks = () => {
  return navigationStore.getNavigationLinks()
}

onMounted(async () => {
  console.log(getNavLinks())
  navLinks.value = getNavLinks()
})
</script>
<style lang="scss">
.nav-list {
  display: grid;
  gap: 10px;
  justify-content: flex-end;
}
.nav-link {
  color: $white;
  text-decoration: none;
  text-transform: uppercase;
}
.active {
  font-weight: bold;
}
.exact-active {
  padding-bottom: 5px;
  border-bottom: 1px solid $white;
}
</style>
