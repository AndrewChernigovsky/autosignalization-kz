<template>
  <footer class="footer">
    <div class="container grid-template-col footer-wrapper">
      <FooterContacts />
      <FooterLinks />
      <div class="copyright">© 2024 Auto Security. Все права защищены</div>
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
  justify-self: center;

  @media screen and (min-width: 768px) {
    padding: 60px 20px 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 33px;
    row-gap: 0;
  }
}

.copyright {
  grid-column: 1 / -1;
  text-align: center;
  padding-top: 29px;
  font-weight: 700;

  @media screen and (min-width: 1440px) {
    padding-top: 150px;
    font-size: 34px;
    line-height: 46px;
    position: relative;

    &::after {
      content: '';
      width: 100vw;
      height: 4px;
      position: absolute;
      background-color: #ffffff;
      bottom: 86px;
      right: 50%;
      transform: translateX(50%);
    }
  }
}
</style>
