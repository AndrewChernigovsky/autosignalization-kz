<template>
  <div class="dropdown">
    <button type="button" @click="toggleList">
      <span class="visually-hidden">{{ text }}</span>
    </button>
    <ul class="list" :class="{ 'is-open': isOpened }" ref="dropdownList">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, nextTick } from 'vue'

const isOpened = ref<boolean>(false)
const items = ref<number[]>([1, 1, 2, 2])

const text = computed(() => {
  return isOpened.value ? 'Закрыть список' : 'Раскрыть список'
})

function toggleList() {
  isOpened.value = !isOpened.value
}

const dropdownList = ref<HTMLElement | null>(null)

onMounted(() => {
  nextTick(() => {
    if (dropdownList.value) {
      dropdownList.value.style.maxHeight = isOpened.value
        ? `${dropdownList.value.scrollHeight}px`
        : '0px'
      dropdownList.value.style.transition = 'max-height 0.3s ease-in-out'
    }
  })
})

watch(isOpened, (newValue: boolean) => {
  if (dropdownList.value) {
    dropdownList.value.style.maxHeight = newValue
      ? `${dropdownList.value.scrollHeight}px`
      : '0px'
  }
})
</script>

<style lang="scss">
.dropdown {
  position: relative;
  max-width: 100px;
}

.list {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-in-out;
}

.is-open {
  max-height: none;
}
</style>
