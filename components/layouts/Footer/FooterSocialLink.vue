<template>
  <a
    class="social-link link"
    :href="link.path"
    :style="{ 'mask-image': `url(${link.imgUrl})` }"
  >
    <template v-if="link.title">
      <span class="visually-hidden">{{ link.title }}</span>
    </template>
    <template v-else>
      <slot />
    </template>
  </a>
</template>
<script setup lang="ts">
const props = defineProps({
  link: {
    type: Object,
    required: true,
  },
})
</script>
<style scoped lang="scss">
.social-link {
  display: block;
  width: 20px;
  height: 20px;
  mask-repeat: no-repeat;
  mask-size: 20px;
  mask-position: center;
  background-color: #ff0000;

  @media screen and (min-width: 1440px) {
    width: 50px;
    height: 50px;
    mask-size: 50px;
  }
}
</style>
