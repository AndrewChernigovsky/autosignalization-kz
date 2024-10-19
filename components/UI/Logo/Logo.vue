<template>
  <div class="logo">
    <img
      :src="Logo"
      alt="Логотип компании Auto Security. Мы защитим вашу машину от угона."
      width="122"
      height="84"
    />
    <div class="text">
      <p>Auto</p>
      <p>Security</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from '@/assets/icons/logo.png'
</script>
<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 20px;
}

p {
  font-size: 20px;
  text-transform: uppercase;
}
</style>
