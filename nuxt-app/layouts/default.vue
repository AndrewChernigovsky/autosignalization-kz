<template>
  <div>
    <Header/>
    <main class="main">
      <slot />
    </main>
    <Footer/>
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
</script>