<template>
  <header class="header">
    <nav class="nav">
      <ul>
        <li v-for="link in navLinks" :key="link.path"><nuxt-link :to="link.path">{{ link.name }}</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useNavigationStore } from "@/stores/navigation";
import type { NavigationLinksType } from "~/types/NavigationLinksType";

const navLinks = ref<NavigationLinksType[]>([]); 
const navigationStore = useNavigationStore();

const getNavLinks = () => {
  return navigationStore.getNavigationLinks();
};

onMounted(async () => {
  console.log(getNavLinks());
  navLinks.value = getNavLinks();
})
</script>
<style lang="scss">
  
</style>