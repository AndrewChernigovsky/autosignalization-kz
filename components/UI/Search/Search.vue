<template>
  <input type="search">{{ test }}</input>
</template>
<script setup lang="ts">

const props = defineProps({
test: {
  type: String
}
})
</script>
<style lang="scss"  scoped>
  // ТЫ РАБОТАЕШЬ ТУТ
</style>