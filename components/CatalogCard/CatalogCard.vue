<template>
  <div class="card-item">
    <div class="content">
      <div class="picture-container">
        <NuxtPicture />
      </div>
      <h1 class="title m-0">{{}}</h1>
      <p class="price">{{}}</p>
      <div class="buttons-container">
        <YButton :link="true" :btn="false" :path="'/catalog'">{{}}</YButton>
        
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: () => '',
  },
})
</script>
<style lang="scss"></style>
