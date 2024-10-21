<template>
  <div>
    <Header />
    <main class="main">
      <slot />
    </main>
    <!-- <Footer/> -->
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/layouts/Header/Header'
// import Footer from '@/components/layouts/Footer/Footer';
</script>
