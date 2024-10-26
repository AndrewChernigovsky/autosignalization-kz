<template>
  <section class="advantages">
    <div class="container">
      <h3>ДОСТУПНАЯ СТОИМОСТЬ ПРОДУКЦИИ И УСЛУГ</h3>
      <h3>ПРЕДОСТАВЛЯЕМ КЛИЕНТАМ НАИЛУЧШЕЕ КАЧЕСТВО ТОВАРОВ И СЕРВИСА</h3>
      <h3>ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ</h3>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.container {
  display: grid;
  gap: 20px;

  @media screen and (min-width: $tablet) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: flex-start;
  }
}

.advantages {
  background-color: $black-000000-99;
  padding: 20px 0;

  @media screen and (min-width: $tablet) {
    padding: 60px 0;
    border-bottom: 1px solid $white;
    border-top: 1px solid $white;
  }

  &:before,
  &:after {
    content: '';
    display: block2;
    width: 100%;
    height: 2px;
    background-color: $white;

    @media screen and (min-width: $tablet) {
      display: none;
    }
  }
}

h3 {
  font-size: 16px;
  color: $white;
  text-align: center;
  font-family: $secondary-font;
  text-transform: uppercase;
  font-style: italic;
  flex-basis: 30%;

  @media screen and (min-width: $tablet) {
    font-size: 18px;
  }

  @media screen and (min-width: $desktop-min) {
    font-size: 28px;
  }
}
</style>
