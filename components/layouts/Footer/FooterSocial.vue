<template>
  <div class="social-container">
    <h2 class="social-title m-0">Социальные сети</h2>
    <SocialList />
  </div>
</template>
<script setup>
import SocialList from './FooterSocialList.vue'
</script>
<style scoped lang="scss">
.social-container {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  grid-column: 1 / 3;
  grid-row: 2 /3;

  @media screen and (min-width: 768px) {
    grid-column: 4 / 7;
    grid-row: 1 / 2;
    justify-self: center;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    grid-column: 5 / 9;
    padding-bottom: 20px;
  }
}
</style>
