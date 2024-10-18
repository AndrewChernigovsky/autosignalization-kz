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
    <div>
      <ul>
        <FooterLink 
        v-for="link in navLinks"
        :key="link.path"
        :link="link"
        />
      </ul>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { FooterLinksType } from '@/types/FooterLinksType';
import { useFooterNavigationStore } from '@/stores/footerNavigation'
import FooterLink  from '@/components/FooterLink.vue'


const navLinks = ref<FooterLinksType[]>([])
const navigationStore = useFooterNavigationStore()

const getNavLinks = () => {
  return navigationStore.getLinks()
}
onMounted(async () => {
  navLinks.value = getNavLinks()
  console.log(navLinks.value, 'navlinks')
})

</script>
<style lang="scss">
  
</style>