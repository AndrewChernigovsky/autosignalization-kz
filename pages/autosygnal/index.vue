<template>
  <div class="page-container">
    <div class="container wrapper">
      <section class="autosygnals">
        <h1 class="main-title m-0">Автосигнализации</h1>
        <ul class="list list-style-none" v-if="autosygnalsTypes">
          <li class="item" v-for="item in autosygnalsTypes">
            <!-- <NuxtPicture
              format="avif, webp"
              :src="item.img"
              loading="lazy"
              width="300"
              height="350"
              :alt="item.title"
              sizes="(min-width: 320px) 300px 350px, (min-width: 1024px) 640px 554px"
            >
              <source :srcset="`${item.img} 320w`" />
            </NuxtPicture> -->
            <div class="item-conatiner">
              <h2 class="item-title m-0">{{ item.title }}</h2>
              <picture class="item-picture">
                <source
                  source
                  type="image/jpeg"
                  media="(min-width: 1024px)"
                  width="640"
                  height="554"
                  :srcset="item.img"
                />
                <img
                  class="item-img"
                  :src="item.img"
                  :alt="item.title"
                  width="300"
                  height="350"
                />
              </picture>

              <div class="item-wrapper">
                <p class="count m-0">
                  {{ item.product.length }}
                  <span v-if="item.product.length === 1"> товар</span>
                  <span
                    v-else-if="
                      item.product.length >= 2 && item.product.length <= 4
                    "
                  >
                    товара</span
                  >
                  <span v-else-if="item.product.length > 4"> товаров</span>
                </p>
                <YButton
                  link
                  :ytype="ButtonsEnum.primary"
                  :customClass="'btn-item'"
                  :btn="false"
                  :path="`/autosygnal/${item.id}`"
                  >В раздел</YButton
                >
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAutosygnalType } from '@/stores/autosygnalTypesStore'
import { ButtonsEnum } from '@/enums/ButtonsEnum'

const autosygnalsTypes = ref()

onMounted(async () => {
  autosygnalsTypes.value = useAutosygnalType().getData()
})
</script>
<style scoped lang="scss">
.page-container {
  background-image: linear-gradient(180deg, #121010, #0e0c0c);
}

.wrapper {
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
}

.autosygnals {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  color: #fff;

  @media screen and (min-width: 1024px) {
    padding: 60px 0;
  }
}

.main-title {
  text-align: center;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 34px;
  font-family: 'Oswald', 'Arial', sans-serif;

  @media screen and (min-width: 1024px) {
    font-size: 64px;
    line-height: 88px;
    margin-bottom: 30px;
  }
}

.list {
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 10px;
    max-width: 730px;
  }

  @media screen and (min-width: 1024px) {
    min-width: auto;
    max-width: 500px * 2;
    gap: 40px;
  }

  @media screen and (min-width: 1400px) {
    gap: 40px;
    max-width: 1320px;
  }
}

.item-conatiner {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  max-width: 350px;

  @media screen and (min-width: 1024px) {
    max-width: none;
    position: relative;
  }
}

.item-title {
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 34px;
  font-family: 'Oswald', 'Arial', sans-serif;

  @media screen and (min-width: 1024px) {
    font-size: 48px;
    line-height: 66px;
    max-width: 530px;
  }
}

.count {
  text-align: center;
  padding: 10px;
  background-image: linear-gradient(#010308, #000208);
  border-radius: 5px;
  box-shadow: inset 0 0 0 1px rgb(201, 201, 201);
  font-family: 'Oswald', 'Arial', sans-serif;
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.item-img {
  width: 100%;
  max-width: 350px;
  border-radius: 25px;
  object-fit: cover;

  @media screen and (min-width: 1024px) {
    min-width: 400px;
    max-width: 485px;
  }

  @media screen and (min-width: 1400px) {
    max-width: none;
  }
}

.item-wrapper {
  min-width: 240px;

  @media screen and (min-width: 1024px) {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
}

:deep(.btn-item) {
  font-size: 20px;
  line-height: 28px;
  padding: 10px;
  font-family: 'Oswald', 'Arial', sans-serif;
}
</style>
