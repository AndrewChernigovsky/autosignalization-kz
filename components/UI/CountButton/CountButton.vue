<template>
  <div class="button">
    <YButton @click="minusCount" :disabled="isMinusDisabled">-</YButton>
    <div class="counter">
      <span>{{ count }}</span>
    </div>
    <YButton @click="plusCount">+</YButton>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const emit = defineEmits(['getQuantity'])
const props = defineProps({
  disabled: {
    type: Boolean,
  },
  quantity: {
    type: Number,
    default: 1,
    requaried: true,
  },
})

const count = ref(props.quantity)

const isMinusDisabled = computed(() => {
  return count.value <= 1 || props.disabled
})

function minusCount() {
  count.value -= 1
}

function plusCount() {
  count.value += 1
}

watch(count, (newValue) => {
  emit('getQuantity', newValue)
})
</script>
<style lang="scss">
// ТВОИ Стили
</style>
