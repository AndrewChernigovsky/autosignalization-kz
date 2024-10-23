<template>
  <div class="footer-links">
    <ul class="list list-style-none">
      <FooterLinksItem :links="links" />
    </ul>
  </div>
</template>
<script setup>
import { useFooterNavigationStore } from '@/stores/footerNavigation'
import FooterLinksItem from '@/components/layouts/Footer/FooterLinksItem.vue'

const { getLinks } = useFooterNavigationStore()

const links = getLinks()
</script>
<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 150px;
  }
}

.footer-links {
  grid-column: 1 / -1;
}
</style>
