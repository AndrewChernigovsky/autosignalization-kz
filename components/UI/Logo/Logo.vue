<template>
  <div class="logo">
    <img
      :src="Logo"
      alt="Логотип компании Auto Security. Мы защитим вашу машину от угона."
      width="122"
      height="84"
    />
    <div class="text">
      <p class="text-main">Auto</p>
      <p class="text-secondary">Security</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from '@/assets/images/logo.png'
</script>
<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 58px;
    height: 40px;
  }
}

p {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
}

.text-main {
  color: $white;
}
.text-secondary {
  color: $red;
}

.text {
  p {
    margin: 0;
    font-weight: 700;
  }
}
</style>
