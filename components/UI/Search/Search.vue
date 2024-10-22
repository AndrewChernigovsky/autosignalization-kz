<template>
  <div class="search">
    <input
      type="search"
      placeholder="Поиск..."
      name="Поиск"
      v-model="value"
      @keydown.enter="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useSearchStore } from '~/stores/searchStore'

const props = defineProps({
  handleFunction: {
    type: Function,
  },
})

const searchStore = useSearchStore()
const value = ref<string>('')
function handleSearch() {
  if (props.handleFunction) props.handleFunction()
}
watch(value, (newVal) => {
  searchStore.setSearch(newVal)
})
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  min-height: 40px;
  padding: 0 10px 0 30px;
  background-color: $white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  min-width: inherit;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
    left: 6px;
    z-index: 1;
    background-position: center;
    mask-image: url('@/assets/icons/search.svg');
    background-color: $black;
    background-repeat: no-repeat;
    mask-size: cover;
  }

  input {
    border-radius: 30px;
    min-height: 32px;
    background-color: $red-64001E;
    display: flex;
    color: $white;
    min-width: 100%;
    padding: 0 10px;
    border: 1px solid $black;
    font-family: $secondary-font;
    transition: 0.3s ease-in-out;
    font-size: 18px;

    &:hover,
    &:focus {
      background-color: $red-B40036;
    }

    &:autofill {
      background-color: $red-B40036;
    }
  }
}
</style>
