<template>
  <div class="dropdown">
    <div class="down-block">
      <button
        class="drop-button"
        :class="{ 'active-down': isOpened }"
        type="button"
        @click="toggleList"
      >
        <span class="visually-hidden">{{ text }}</span>
      </button>
      <span class="title-display" v-if="props.title">{{ title }}</span>
    </div>
    <div class="bottom-line">
      <span class="bottom-circle"></span>
    </div>
    <ul class="list" :class="{ 'is-open': isOpened }" ref="dropdownList">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, nextTick } from 'vue'

const isOpened = ref<boolean>(false)
const items = ref<number[]>([1, 1, 2, 2])

const props = defineProps({
  title: {
    type: String,
  },
})

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

<style lang="scss" scoped>
.dropdown {
  position: relative;
}

.down-block {
  display: flex;
  gap: 10px;
  margin-bottom: 17px;
  padding-left: 10px;
}

.title-display {
  display: flex;
  align-items: center;
  color: $white;
  font-family: $primary-font;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: left;
  text-transform: uppercase;
}

.bottom-line {
  position: relative;
  width: 242px;
  height: 4px;
  margin-left: 10px;
  background: $white;
}

.bottom-circle {
  width: 14px;
  height: 14px;
  position: absolute;
  background-color: $white;
  top: -5px;
  left: 0;
  border-radius: 50%;
}

.list {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-in-out;
  background-color: transparent;
  color: $white;
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
  background: linear-gradient(180deg, $black-280000-6, $red-ff0000-99);
  flex-shrink: 0;

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
    background: linear-gradient(180deg, $black-070101-6, $red);
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

  &:active {
    &::after {
      min-width: 18px;
      right: 8px;
      transform: rotate(45deg) translate(-2%, 0);
    }

    &::before {
      min-width: 18px;
      left: 8px;
      transform: rotate(-45deg) translate(2%, 0);
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
}

.active-down {
  &.drop-button {
    &::after {
      min-width: 18px;
      right: 8px;
      transform: rotate(45deg) translate(-2%, 0);
    }

    &::before {
      min-width: 18px;
      left: 8px;
      transform: rotate(-45deg) translate(2%, 0);
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
}
</style>
