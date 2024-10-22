<template>
  <NuxtLink
    class="social-link link"
    to="link.path"
    :style="{ 'mask-image': `url(${link.imgUrl})` }"
    ><slot></slot
  ></NuxtLink>
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
}
</style>
