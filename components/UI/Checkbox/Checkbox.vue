<template>
  <div class="checkbox">
    <input
      type="checkbox"
      :name="props.item.name"
      :id="props.item.id"
      :disabled="props.disabled"
    />
    <span class="text">{{ props.item.text }}</span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({})
// 1 написать тип для объекта item  @/types/
// 2 написать пропс для объекта item @/components/UI/YButton для примера можешь взять
// 3 пропс для состояния disabled
</script>
<style lang="scss" scoped></style>
