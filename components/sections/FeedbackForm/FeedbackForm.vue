<template>
  <section class="section">
    <div class="container">
      <h2 class="section-title m-0">Форма обратной связи</h2>
      <form class="form" action="#" method="POST">
        <div class="brands">
          <h3 class="title m-0">Марка:</h3>
          <ul class="list list-style-none">
            <li class="item" v-for="image in brandsImages">
              <input
                class="input m-0"
                type="radio"
                name="brand"
                :id="image.id"
              />
              <label class="label" :for="image.id">
                <CarsBrandItem
                  class="image"
                  :image="image"
                  :width="90"
                  :height="90"
                />
                <span class="visually-hidden">{{ image.id }}</span>
              </label>
            </li>
          </ul>
        </div>
        <div class="inputs-container">
          <ul class="list list-style-none">
            <li class="inupt-item" v-for="input in inputs">
              <label class="title">{{ input.title }}</label>
              <input class="input-form" type="text" :id="input.id" />
            </li>
          </ul>
        </div>
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
import CarsBrandItem from '@/components/CarsBrand/CarsBrandItem.vue'
import { images } from '@/components/sections/CarsBrand/carsBrand'

const brandsImages = images

const inputs = [
  {
    id: 'Модель',
    title: 'Модель автомобиля:',
  },
  {
    id: 'Год',
    title: 'Год выпуска:',
  },
  {
    id: 'Имя',
    title: 'Имя:',
  },
  {
    id: 'Телефон',
    title: 'Телефон:',
  },
]
</script>
<style scoped lang="scss">
.section {
  background-color: #000;
  padding: 60px 0;
}

.section-title {
  margin-bottom: 30px;
}

.form {
  display: grid;
  grid-template-columns: repeat(12, 102px);
  column-gap: 16px;
  row-gap: 20px;
}

.title {
  font-family: 'DINPRO', 'Arial', sans-serif;
  font-size: 48px;
  line-height: 60px;
  margin-bottom: 10px;
}

.brands {
  grid-column: 1 / -1;
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
}

.item {
  position: relative;
}

.label {
  display: flex;
  min-width: 150px;
  min-height: 150px;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  transition: all 0.3s ease;
  background-color: #fff;
  border-radius: 20px;
}

.input {
  appearance: none;
  position: absolute;

  &:hover + .label {
    transition: all 0.3s ease;
    border-radius: 20px;
    opacity: 1;
    box-shadow: inset 0 0 0 6px #000;
  }

  &:checked + .label {
    transition: all 0.3s ease;
    border-radius: 20px;
    opacity: 1;
    box-shadow: inset 0 0 0 6px #000;
  }
}
</style>
