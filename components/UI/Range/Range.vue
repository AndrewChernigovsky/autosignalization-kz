<template>
  <div>
    <input type="range" id="myRange" min="100" max="900000" v-model="value" />
    <span>100</span>
    <span>{{ value }}</span>
    <span>90000</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<number>(100)

console.log(value.value)
</script>
<style lang="scss"></style>
