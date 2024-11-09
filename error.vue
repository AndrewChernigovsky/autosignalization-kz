<template>
  <div class="container">
    <h2>Страница не найдена</h2>
    <nuxt-link to="/">Вернуться на главную</nuxt-link>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.container {
  display: grid;
  align-content: center;
  text-align: center;
  min-height: 100vh;
  color: $white;

  a {
    color: $white;
    text-decoration: none;
  }
}
</style>
