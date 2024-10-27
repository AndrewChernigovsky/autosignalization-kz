<template>
  <section class="section">
    <div class="container">
      <h2 class="section-title m-0">Форма обратной связи</h2>
      <form class="form" action="#" method="POST">
        <div class="brands">
          <h3 class="title m-0">Марка:</h3>
          <ul class="brand-list list-style-none">
            <li class="brand-item" v-for="image in brandsImages">
              <input
                class="brand-input m-0"
                type="radio"
                name="brand"
                :id="image.id"
              />
              <label class="brand-label" :for="image.id">
                <CarsBrandItem class="brand-image" :image="image" />
                <span class="visually-hidden">{{ image.id }}</span>
              </label>
            </li>
          </ul>
        </div>
        <div class="inputs-container">
          <ul class="list list-style-none">
            <li class="inupt-item" v-for="input in inputs">
              <label class="item-label" :for="input.id">{{
                input.title
              }}</label>
              <div class="input-wrapper">
                <input
                  class="input-form"
                  type="text"
                  :id="input.id"
                  :placeholder="input.placeholder"
                />
              </div>
            </li>
          </ul>
        </div>
        <div class="text-area-container">
          <label class="item-label" for="form-text-aria">
            Ваша сообщение:
          </label>
          <textarea class="form-text-aria" id="form-text-aria">
Вы купили автомобиль и желаете защитить его, установив сигнализацию?  Вы любите комфорт и хотите установить автозапуск на Ваше авто?  Вам необходимо отслеживать Ваш транспорт по GPS?  Обращайтесь к нам, и мы поможем Вам решить эти задачи!
          </textarea>
        </div>
        <button class="form-btn" type="submit">Отправить заявку</button>
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
    placeholder: 'Vesta',
  },
  {
    id: 'Год',
    title: 'Год выпуска:',
    placeholder: '2024',
  },
  {
    id: 'Имя',
    title: 'Имя:',
    placeholder: 'Ivanov Ivan Ivanovich',
  },
  {
    id: 'Телефон',
    title: 'Телефон:',
    placeholder: '+7 (777) 77 77 777',
  },
]
</script>
<style scoped lang="scss">
.section {
  padding: 30px 0;
  background-color: #000000;
  color: #ffffff;
}

.section-title {
  font-family: 'Oswald', 'Arial', sans-serif;
  text-align: center;
  font-size: 24px;
  line-height: 34px;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.title {
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 10px;
}

.brand-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.brand-item {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  min-height: 40px;
  padding: 5px;
  max-width: 50px;
  max-height: 50px;
  background-color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
}

.brand-input {
  appearance: none;
  position: absolute;
  width: 100%;
  height: 100%;

  & + .brand-label {
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  &:checked + .brand-label {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
}

.brand-image {
  width: 40px;
  height: 40px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.inupt-item {
  display: flex;
  flex-direction: column;
}

.item-label {
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 10px;
}

.input-wrapper {
  padding: 10px;
  width: 100%;
  background-color: #141212;
  border-radius: 20px;
}

.input-form {
  font-size: 24px;
  line-height: 30px;
  width: 100%;
  padding: 10px;
  border: 0;
  background-color: #363535;
  border-radius: 20px;
  color: #ffffff;
}

.form-btn {
  min-height: 48px;
  font-size: 20;
  line-height: 26px;
  font-weight: 700;
  background-image: linear-gradient(180deg, #280000 0%, #ff0000 100%);
  border: 0;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  padding: 0;
  text-align: center;
  color: #fff;
}

.form-text-aria {
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  min-height: 340px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  color: #fff;
  background-color: #424242;
}
</style>
