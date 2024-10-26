<template>
  <img src="#" />
</template>
<script setup lang="ts">
const props = defineProps({
  image: {
    type: Object,
    reqierid: false,
    default: () => {},
  },
})

console.log(props.image)
</script>
<style scoped lang="scss"></style>
