<template>
  <div>
    <h1>Dynamic Auto Page: {{ route.params.slug }}</h1>
    <!-- You can add more logic based on the slug -->
    <nuxt-link :to="`/auto/${route.params.slug}`">Go to this slug</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
/* Your styles here */
</style>
