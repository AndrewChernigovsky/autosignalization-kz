<template>
  <div class="dropdown">
    <button class="drop-button" type="button" @click="toggleList">
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

watch(isOpened, (newValue: string) => {
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
}

.list {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-in-out;
}

.is-open {
  max-height: none;
}

.drop-button {
  width: 48px;
  height: 48px;
  position: relative;
  border: 1px solid $white-c9c9c9;
  border-radius: 5px;
  background: linear-gradient(180.00deg, $black-280000-6, $red-ff0000-99);

  &::after {
    content: '';
    position: absolute;
    min-width: 18px;
    min-height: 2px;
    background-color: $white;
    right: 8px;
    transform: rotate(-45deg) translate(-2%, 0);
  }

  &::before {
    content: '';
    position: absolute;
    min-width: 18px;
    min-height: 2px;
    background-color: $white;
    left: 8px;
    transform: rotate(45deg) translate(2%, 0);
  }

  &:hover {
    background: linear-gradient(180deg, $black-070101-6, $red)
  }

  &:focus {
    border: 4px solid $white-c9c9c9;

    &::after {
      min-width: 18px;
      right: 5px;
    }

    &::before {
      min-width: 18px;
      left: 5px;
    }
  }
}
</style>
