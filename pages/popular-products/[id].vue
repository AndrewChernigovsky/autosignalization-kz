<template>
  <Mobile v-if="viewportWidth < 1024" />
  <Desktop v-if="viewportWidth > 1024" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Mobile from './Mobile.vue'
import Desktop from './Desktop.vue'

const viewportWidth = ref<number>(window.innerWidth)

onMounted(() => {
  window.addEventListener('resize', () => {
    viewportWidth.value = window.innerWidth
  })
})
</script>
