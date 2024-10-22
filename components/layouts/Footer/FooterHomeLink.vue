<template>
  <div class="home-container">
    <ul class="home-list list-style-none">
      <li class="home-item">
        <NuxtLink class="home-link link" to="#">www.autosecurity.kz</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.home-container {
  grid-column: 1/ 4;
  grid-row: 4 / 5;
  padding-right: 16px;
}

.home-list {
  display: flex;
  flex-direction: column;
}

.home-link {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: '';
    display: block;
    mask-image: url('@/assets/icons/home-icon.svg');
    width: 20px;
    height: 20px;
    mask-repeat: no-repeat;
    mask-size: 20px;
    mask-position: center;
    background-color: #ff0000;
  }
}
</style>
