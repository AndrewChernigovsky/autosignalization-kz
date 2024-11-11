<template>
  <div>sobaka {{ route.params.id }}</div>
</template>
<script setup lang="ts">
const route = useRoute()
</script>
<style scoped lang="scss">
div {
  color: red;
}
</style>
