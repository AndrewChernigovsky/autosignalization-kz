<template>
  <input type="search" placeholder="Поиск" name="Поиск" v-model="value" />
  <ul class="result">
    <li v-for="res in searchStore.getSearchRes()" :key="res.name">
      {{ res.name }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSearchStore } from '~/stores/searchStore'

const searchStore = useSearchStore()
const value = ref<string>('')

// Синхронизируем значение input с searchString в хранилище
watch(value, (newVal) => {
  searchStore.setSearch(newVal)
})

// Синхронизируем searchString с value (если это необходимо)
watch(
  () => searchStore.searchString,
  (newVal) => {
    value.value = newVal
  },
)
</script>

<style lang="scss" scoped>
.result {
  color: $white;
}
</style>
