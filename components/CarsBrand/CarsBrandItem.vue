<template>
  <img :src="image.src" :alt="image.title ? image.title : ''" />
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
<style scoped lang="scss"></style>
