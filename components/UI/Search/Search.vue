<template>
  <button class="button" type="button" :types="types ? types : ''" v-if="isLink == false">
    <slot/>
  </button>
  <a class="link" :href="link.path" v-if="isLink" :types="types ? types : ''">{{ link.name }}</a>
</template>
<script setup lang="ts">
import { ButtonsEnum } from '@/enums/ButtonsEnum';

const props = defineProps({
  link: {
    type: Object,
    default: () => ({}),
  },
  isLink: {
    type: Boolean,
    default:  false,
  },
  types: {
    type: String,
    default: () => Object.keys(ButtonsEnum).join(', ')
  }
})
</script>
<style lang="scss"  scoped>
  // ТЫ РАБОТАЕШЬ ТУТ
</style>