<template>
  <img v-if="image.imageWeb" :src="image.imageWeb" alt="" />
  <img v-else :src="image.image" alt="" />
</template>
<script setup lang="ts">
const props = defineProps({
  image: {
    type: Object,
    reqierid: false,
    default: () => {},
  },
})
</script>
<style scoped lang="scss">
img {
  display: block;
}
</style>
