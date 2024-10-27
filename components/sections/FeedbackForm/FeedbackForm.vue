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
          <label class="item-label label-message" for="form-text-aria">
            Ваша сообщение:
          </label>
          <textarea class="form-text-aria" id="form-text-aria">
Вы купили автомобиль и желаете защитить его, установив сигнализацию?  Вы любите комфорт и хотите установить автозапуск на Ваше авто?  Вам необходимо отслеживать Ваш транспорт по GPS?  Обращайтесь к нам, и мы поможем Вам решить эти задачи!</textarea
          >
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

  @media screen and (min-width: 1024px) {
    font-size: 68px;
    line-height: 88px;
  }
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

  @media screen and (min-width: 1024px) {
    font-size: 48px;
    line-height: 60px;
  }
}

.brand-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
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
  position: relative;

  @media screen and (min-width: 1024px) {
    min-width: 150px;
    min-height: 150px;
    padding: 30px;
    border-radius: 20px;
    max-width: 150px;
    max-height: 150px;
  }
}

.brand-input {
  appearance: none;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;

  & + .brand-label {
    opacity: 0.5;
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

  @media screen and (min-width: 1024px) {
    width: 90px;
    height: 90px;
  }
}

.list {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.inupt-item {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    min-width: 680px;
  }
}

.item-label {
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  margin-bottom: 10px;

  @media screen and (min-width: 1024px) {
    font-size: 48px;
    line-height: 60px;
  }
}

.input-wrapper {
  padding: 10px;
  width: 100%;
  background-color: #141212;
  border-radius: 20px;

  @media screen and (min-width: 1024px) {
    padding: 20px;
  }
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

  @media screen and (min-width: 102px) {
    font-size: 36px;
    line-height: 45px;
  }
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

  @media screen and (min-width: 102px) {
    margin-top: 40px;
    font-size: 36px;
    line-height: 46px;
    min-height: 71px;
  }
}

.label-message {
  @media screen and (min-width: 1024px) {
    display: block;
    text-align: center;
    width: 100%;
  }
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

  @media screen and (min-width: 1024px) {
    font-size: 42px;
    line-height: 46px;
    border-radius: 20px;
  }
}
</style>
