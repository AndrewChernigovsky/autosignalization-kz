<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, onUnmounted, defineProps } from 'vue'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

const props = defineProps<{
  options?: Record<string, any>
}>()

const container = ref<HTMLElement | null>(null)

onMounted(() => {
  if (container.value) {
    Fancybox.bind(container.value, '[data-fancybox]', {
      ...(props.options || {}),
    })
  }
})

onUpdated(() => {
  if (container.value) {
    Fancybox.unbind(container.value)
    Fancybox.close()

    Fancybox.bind(container.value, '[data-fancybox]', {
      ...(props.options || {}),
    })
  }
})

onUnmounted(() => {
  Fancybox.destroy()
})
</script>

<style scoped></style>
