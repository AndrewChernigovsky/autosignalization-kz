<template>
  <div class="tabs" v-if="tabs">
    <ul class="tabs-list list-style-none">
      <li class="tabs-item" v-for="(tab, index) in tabsNames.value">
        <YButton
          :ytype="ButtonsEnum.tabButton"
          :activeTab="activeTab === index"
          @click="() => toggleTab(index)"
          >{{ tab }}</YButton
        >
      </li>
    </ul>
    <ul class="tabs-list-content list-style-none">
      <li
        class="tabs-item-content"
        v-for="(tab, index) in tabsNames.value"
        :key="tab"
      >
        <template v-if="tab === 'описание' && index === tabHeadIndex">
          <ul class="list-style-none">
            <li v-for="item in tabs.descriptions" :key="item.title">
              <div>
                <img :src="item.img" alt="" />
                <p>{{ item.title }}</p>
                <p>{{ item.desc }}</p>
              </div>
            </li>
          </ul>
        </template>
        <template v-if="tab === 'характеристики' && index === tabHeadIndex">
          <table>
            <tbody>
              <tr>
                <th>Функции</th>
                <td>
                  <div v-if="tabs.characters">
                    <span
                      v-for="(func, index) in tabs.characters.functions"
                      :key="func"
                    >
                      {{ func
                      }}<span
                        v-if="index < tabs.characters.functions.length - 1"
                        >,
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>Категории</th>
                <td>
                  <div v-if="tabs.characters">
                    <span
                      v-for="(category, index) in tabs.characters.categories"
                      :key="category"
                    >
                      {{ category
                      }}<span
                        v-if="index < tabs.characters.categories.length - 1"
                        >,
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </template>
        <template v-if="tab === 'гарантии' && index === tabHeadIndex">
          <p v-if="tabs.garanties">{{ tabs.garanties[0].text }}</p>
        </template>
        <template
          v-if="tab === 'соответсвтующие товары' && index === tabHeadIndex"
        >
          <Swiper class="similar-slider" :space-between="10" :slidesPerView="3">
            <SwiperSlide v-for="product in tabs.similar" :key="product.id">
              <div class="popularProduct" v-if="product">
                <div class="wrapper">
                  <div class="images">
                    {{ console.log(product, 'product') }}
                    <PopularProductGallery :product="product" />
                  </div>
                  <h3>{{ product.name }}</h3>
                  <p class="price">
                    <span>{{ product.price }}</span>
                    <span class="currency"> {{ product.currency }}</span>
                  </p>
                </div>
                <div class="buttons">
                  <YButton
                    :ytype="ButtonsEnum.dark"
                    :link="true"
                    :btn="false"
                    :path="`/popular-products/${product.id}`"
                    >Подробнее</YButton
                  >
                  <YButton
                    v-if="statusCartButton"
                    :ytype="ButtonsEnum.primary"
                    @click="() => product && addProduct(product)"
                  >
                    Купить
                  </YButton>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </template>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { TabsType } from '~/types/PopularProductsType'
import { ButtonsEnum } from '~/enums/ButtonsEnum'
import PopularProductGallery from '~/components/sections/PopularProducts/PopularProductGallery.vue'
import { useCartStore } from '@/stores/useCartStore'
import type { PopularProductsType } from '@/types/PopularProductsType'

const props = defineProps({
  tabs: {
    type: Object as () => TabsType,
    required: true,
  },
})
const cartStore = useCartStore()

const tabsCounts = ref<string[]>([])
const tabHeadIndex = ref<number>(0)
const activeTab = ref<number>(0)

const tabsNames = computed(() => {
  tabsCounts.value = []

  Object.keys(props.tabs).forEach((tab) => {
    switch (tab) {
      case 'descriptions':
        tabsCounts.value.push('описание')
        break
      case 'characters':
        tabsCounts.value.push('характеристики')
        break
      case 'garanties':
        tabsCounts.value.push('гарантии')
        break
      case 'similar':
        tabsCounts.value.push('соответсвтующие товары')
        break
    }
  })
  return tabsCounts
})

function toggleTab(index: number) {
  tabHeadIndex.value = index
  activeTab.value = index
}

const statusCartButton = ref<boolean>(true)

function addProduct(product: PopularProductsType) {
  cartStore.addCartProduct(product)
  statusCartButton.value = false
}
</script>
<style lang="scss" scoped>
.similar-slider {
  width: 100%;
}

.tabs-list {
  width: 100%;
  display: flex;
  gap: 10px;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;

    li {
      width: inherit;

      :deep(button) {
        width: inherit;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    display: grid;

    li {
      :deep(button) {
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;

    li {
      :deep(button) {
        width: 100%;
      }
    }
  }

  li {
    :deep(button) {
      font-size: 16px;
      line-height: 16px;
    }
  }
}

.tabs-item-content ul {
  display: grid;
  gap: 10px;
  color: $white;

  @media screen and (min-width: $desktop-min) {
    grid-template-columns: 1fr 1fr;
  }
}

.popularProduct {
  padding-bottom: 30px;
  padding-left: 20px;
  display: grid;
  gap: 30px;

  .wrapper {
    background-position: 0px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: $black-424040;
    position: relative;
    padding: 10px;
    border-radius: 20px;
  }

  .images {
    background-color: $white;
    border-radius: 20px;
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: $desktop-min) {
      height: 380px;
    }
  }
}

h3 {
  font-size: 24px;
  text-align: center;
  color: $white;

  @media screen and (min-width: $desktop-min) {
    font-size: 24px;
  }
}

.price {
  font-size: 24px;
  text-align: center;
  color: $white;
  font-weight: 700;
  font-family: $secondary-font;
  font-style: italic;
  display: flex;
  gap: 20px;
  margin: 0;
  display: flex;
  align-items: center;

  @media screen and (min-width: $desktop-min) {
    font-size: 48px;
  }
}

.currency {
  font-family: $primary-font;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  color: $red-B40036;
}

.buttons {
  display: grid;
  justify-content: stretch;
  margin: 0 auto;
  gap: 10px;
  max-width: calc(100% - 100px);
  width: 100%;

  @media screen and (max-width: $tablet) {
    :deep(a),
    :deep(button) {
      height: 50px;
      min-width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }
  }

  @media screen and (min-width: $desktop-min) {
    display: grid;
    justify-content: center;
  }
}
</style>
