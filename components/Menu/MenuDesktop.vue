<template>
  <div class="menu-desktop">
    <div class="logo">
      <Logo />
    </div>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item" v-for="link in navLinks" :key="link.path">
          <nuxt-link
            class="nav-link"
            :to="link.path"
            active-class="active"
            exact-active-class="exact-active"
          >
            {{ link.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="contacts">
      <Geo link :width="50" :height="50" />
      <Cart />
    </div>
    <div class="menu-btns">
      <Search />
      <Phone />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useNavigationStore } from '@/stores/navigation'
import type { NavigationLinksType } from '~/types/NavigationLinksType'
import Geo from '@/components/Geo/Geo.vue'
import Phone from '@/components/Phone/Phone.vue'
import Cart from '@/components/Cart/Cart.vue'

const navLinks = ref<NavigationLinksType[]>([])

const navigationStore = useNavigationStore()

const getNavLinks = () => {
  return navigationStore.getNavigationLinks()
}

onMounted(async () => {
  navLinks.value = getNavLinks()
})
</script>
<style lang="scss" scoped>
.menu-desktop {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.logo {
  grid-column: 1/2;
}
.nav {
  grid-column: 3/12;
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.contacts {
  display: flex;
  grid-column: 12/13;
}

.menu-btns {
  display: flex;
  align-items: center;
  grid-column: 1/13;
  justify-content: center;
  gap: 10%;
}
</style>
