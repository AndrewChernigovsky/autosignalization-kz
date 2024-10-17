<template>
  <button class="button" type="button"  v-if="!islink">
    {{ test }}
    <!-- <slot/> -->
  </button>
  <a class="link" :href="link.path" v-if="islink">{{ link.name }}</a>
</template>
<script setup lang="ts">
import { ButtonsEnum } from '@/enums/ButtonsEnum';

const props = defineProps({
  link: {
    type: Object,
    default: () => ({}),
  },
  islink: {
    type: Boolean,
    default:  false,
  },
  test: {
    type: String,
  }
  // types: {
  //   type: String,
  //   default: () => Object.keys(ButtonsEnum).join(', ')
  // }
})

</script>
<style lang="scss"  scoped>
  // ТЫ РАБОТАЕШЬ ТУТ
</style>