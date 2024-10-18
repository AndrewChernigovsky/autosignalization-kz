<template>
  <footer class="footer">
    <div class="container">
      <nav class="nav">
        <ul>
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="/about">О сайте</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { LinksType } from '@/types/FooterLinksType';
import { useFooterNavigationStore } from '@/stores/footerNavigation'


const navLinks = ref<LinksType[]>([])
const navigationStore = useFooterNavigationStore()

const getNavLinks = () => {
  return navigationStore.getLinks()
}
onMounted(async () => {
  console.log(getNavLinks())
  navLinks.value = getNavLinks()
  console.log(navLinks.value)
})

</script>
<style lang="scss">
  
</style>