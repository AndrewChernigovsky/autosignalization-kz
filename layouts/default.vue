<template>
  <div>
    <Header />
    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/layouts/Header/Header.vue'
import Footer from '@/components/layouts/Footer/Footer.vue'
</script>
