<template>
  <ul class="social-list list-style-none">
    <li class="social-item" v-for="link in links">
      <SocialLink :link="link" :style="link.imgUrl" :to="link.path">
        <span class="visually-hidden">{{ link.title }}</span>
      </SocialLink>
    </li>
  </ul>
</template>
<script setup>
import { useSocialLinks } from '@/stores/socialLinks'
import SocialLink from './FooterSocialLink.vue'

const { getSocialLinks } = useSocialLinks()
const links = getSocialLinks()
</script>
<style scoped lang="scss">
.social-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
