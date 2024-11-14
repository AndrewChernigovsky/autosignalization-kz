<template>
  <div class="service-container">
    <div class="container wrapper">
      <BreadCrumbs />
      <div class="service-item" v-if="service">
        <!-- <NuxtPicture
          v-for="image of service.imageUrl"
          format="avif,webp"
          :src="image.url"
          :alt="image.description"
          :imgAttrs="{ class: 'service-id-img' }"
          sizes="(min-width: 1480px) 1440px 720px"
          width="300"
          height="300"
        /> -->

        <picture>
          <!-- <img :src="image.url" alt="" /> -->
        </picture>

        <h1 class="m-0 service-title">{{ service.title }}</h1>
        <div class="content">
          <div class="description">
            {{ service.description }}
          </div>
          <div class="about">
            <p class="text service-text m-0">Мы предлагаем:</p>
            <ul class="list-service-disc list-style-none">
              <li
                class="service-disc-item"
                v-for="item of service.serviceDesciption"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <p class="serices-text m-0">
            Стоимость услуг необходимо уточнять у мастера
          </p>
          <p class="serices-text m-0">
            Насладитесь комфортом с прекрасно установленным и настроенным нами
            оборудованием!
          </p>
          <Share />
          <p class="price-container m-0">
            <span>ЦЕНА:</span><span class="price">{{ service.price }}</span>
          </p>
          <div class="service-btn-container">
            <YButton :ytype="ButtonsEnum.primary"
              ><span class="primary-btn">Заказать</span></YButton
            >
          </div>
        </div>
      </div>
      <Shop />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { ServiceType } from '@/types/ServiceType'
import { ButtonsEnum } from '~/enums/ButtonsEnum'
import { useServiceStore } from '@/stores/service'
import Shop from '@/components/sections/Shop/Shop.vue'

const route = useRoute()

const serviceStore = useServiceStore()
const service = ref<ServiceType>()

onMounted(() => {
  service.value = serviceStore
    .getService()
    .find((post) => post.id === +route.params.id)
})
</script>
<style scoped lang="scss">
.service-container {
  width: 100vw;
  background-image: linear-gradient(#010308, #000208);
}

.wrapper {
  padding: 0;
  color: #fff;

  @media screen and (min-width: 768px) {
    padding: 60px 20px;
  }
}

.service-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: #2b2b2b;
  border-radius: 20px;

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
}

.service-title {
  font-size: 24px;
  line-height: 34px;
  font-family: 'Oswald', 'Arial', sans-serif;
  text-align: center;

  @media screen and (min-width: 1024px) {
    font-size: 64px;
    line-height: 86px;
  }
}

.content {
  @media screen and (min-width: 1024px) {
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 10px;
  }
}

.description {
  padding: 10px;
  background-color: #424242;
  border-radius: 20px;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 10px;

  @media screen and (min-width: 1024px) {
    font-size: 36px;
    line-height: 46px;
  }
}

.service-text {
  font-size: 36px;
  line-height: 46px;
  font-family: 'Oswald', 'Arial', sans-serif;
  margin-bottom: 10px;
}

.about {
  margin-bottom: 10px;
}

.list-service-disc {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 700px));
    column-gap: 20px;
  }
}

.service-disc-item {
  display: flex;
  column-gap: 10px;
  font-size: 16px;
  line-height: 20px;

  &::before {
    margin-top: 5px;
    display: block;
    content: '';
    min-width: 20px;
    min-height: 20px;
    background-image: url('./../../assets/icons/checkbox-mark-icon.svg');
    background-repeat: no-repeat;
    background-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 36px;
    line-height: 46px;

    &::before {
      min-width: 40px;
      min-height: 40px;
      background-size: 40px;
    }
  }
}

.serices-text {
  display: none;

  @media screen and (min-width: 1024px) {
    font-size: 36px;
    line-height: 46px;
    text-align: center;
    display: block;
    margin-bottom: 10px;
  }
}

.price-container {
  display: flex;
  gap: 10px;
  font-weight: 700;
  font-size: 34px;
  line-height: 48px;
  font-family: 'Oswald', 'Arial', sans-serif;

  .price {
    display: flex;

    &::after {
      content: '';
      display: block;
      width: 25px;
      height: 30px;
      margin: auto 0;
      margin-left: 4px;
      background-image: url('./../../assets/icons/tenge-icon.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
    }
  }

  @media screen and (min-width: 1024px) {
    font-size: 36px;
    line-height: 46px;
    justify-content: center;
    align-items: end;
    font-weight: 400;

    .price {
      font-size: 64px;
      line-height: 70px;

      &::after {
        width: 40px;
        height: 50px;
      }
    }
  }
}
</style>

<style lang="scss">
.service-id-img {
  border-radius: 15px;
  width: 100%;
  max-width: 1440px;
  max-height: 720px;
  object-fit: cover;

  @media screen and (min-width: 1480px) {
    min-height: 720px;
  }
}

.service-btn-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;

  button {
    min-width: 240px;
    min-height: 48px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 20px;
  }
}
</style>
