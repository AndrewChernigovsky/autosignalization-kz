<template>
  <div class="page-container">
    <div class="container wrapper">
      <div class="loading" v-if="isLoading">Loading...</div>
      <section v-else-if="dataType" class="catalog">
        <h1 class="title m-0">{{ dataType.title }}</h1>
        <ul class="list list-style-none">
          <li class="item" v-for="data in dataProducts">
            <div class="img-container">
              <picture>
                <source
                  type="image/png"
                  media="(min-width: 1024px)"
                  width="300"
                  height="202"
                  :srcset="data.imagesSrc[0]"
                />
                <img
                  class="item-img item-img-active"
                  :src="data.imagesSrc[0]"
                  :alt="data.title"
                  width="260"
                  height="202"
                />
              </picture>
            </div>
            <h2 class="item-title m-0">{{ data.title }}</h2>
            <p class="price m-0">{{ data.price }}</p>
            <div class="btn-container">
              <YButton :customClass="'btn-more'">Подробнее</YButton>
              <YButton :customClass="'btn-buy'">Купить</YButton>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAutosygnalType } from '@/stores/autosygnalTypesStore'
import { useAutosygnalStore } from '@/stores/autosygnalProducts'
import YButton from '~/components/UI/YButton/YButton.vue'
const route = useRoute()

const isLoading = ref(false)

const dataType = ref()
const dataProducts = ref()

onMounted(async () => {
  isLoading.value = true
  dataType.value = await useAutosygnalType()
    .getData()
    .find((a) => <number>a.id === Number(route.params.id))
  dataProducts.value = await useAutosygnalStore()
    .getProducts()
    .filter((el) =>
      [...dataType.value.product].some(
        (el2) => el.id === el2.id && el.title === el2.title,
      ),
    )
  isLoading.value = false
})
</script>
<style scoped lang="scss">
.page-container {
  background: linear-gradient(#010308, #000208);
}

.wrapper {
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
}

.catalog {
  color: #fff;
  padding: 10px 0;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(12, minmax(60px, 120px));
  }

  @media screen and (min-width: 1024px) {
    column-gap: 10px;
  }
}

.title {
  font-size: 24px;
  line-height: 34px;
  font-family: 'Oswald', 'Arial', sans-serif;
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    grid-column: 1 / -1;
  }

  @media screen and (min-width: 1024px) {
    font-size: 64px;
    line-height: 88px;
  }
}

.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 20px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    grid-column: 1 / -1;
    justify-self: center;
    max-width: 940px;
  }

  @media screen and (min-width: 1024px) {
    grid-column: 3 / -1;
    justify-content: start;
    justify-self: flex-end;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1090px;
  }
}

.item {
  background-color: #424040;
  border-radius: 25px;
  padding-bottom: 10px;
  max-width: 300px;

  @media screen and (min-width: 768px) {
    max-width: 300px;
  }

  @media screen and (min-width: 1400px) {
    max-width: 340px;
  }
}

.img-container {
  background-color: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-bottom: 10px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 88%, 0% 100%);

  .item-img {
    display: block;
  }
}

.item-title {
  font-size: 34px;
  line-height: 42px;
  text-align: end;
}

.price {
  text-align: center;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  padding: 6px 0;
  justify-content: center;
  font-size: 48px;
  line-height: 66px;
  font-weight: 700;
  font-family: 'Oswald', 'Arial', sans-serif;

  &::after {
    display: block;
    content: '';
    width: 40px;
    height: 50px;
    mask-image: url('@/assets/icons/tenge-icon.svg');
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: 40px 50px;
    background-color: #d10000;
  }
}

.btn-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

:deep(.btn-more) {
  padding: 10px;
  min-width: 230px;
  text-align: center;
}
</style>
