<template>
  <footer class="footer">
    <div class="container grid-template-col footer-wrapper">
      <FooterContacts />
      <FooterLinks />
    </div>
  </footer>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { FooterLinksListType } from '~/types/FooterLinksListType.ts'
import { useFooterNavigationStore } from '@/stores/footerNavigation'
import FooterContacts from '@/components/layouts/Footer/FooterContacts.vue'
import FooterLinks from '~/components/layouts/Footer/FooterLinksList.vue'

const navLinks = ref<FooterLinksListType[]>([])
const navigationStore = useFooterNavigationStore()

const getNavLinks = () => {
  return navigationStore.getLinks()
}
onMounted(async () => {
  navLinks.value = getNavLinks()
})
</script>
<style scoped lang="scss">
.footer {
  background-image: linear-gradient(180deg, #121010 0%, #0e0c0c 100%);
}

.footer-wrapper {
  padding: 10px 10px;
  row-gap: 10px;
  font-family: 'Oswald', 'Arial', sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding: 60px 20px 20px;
  }
}
</style>
