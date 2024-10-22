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
}

.social-title {
  font-size: 16px;
  line-height: 22px;
}
</style>
