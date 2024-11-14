<template>
  <div class="tabs" v-if="tabs">
    <ul class="tabs-list list-style-none">
      <li class="tabs-item" v-if="tabs.descriptions">
        <YButton :ytype="ButtonsEnum.tabButton">Описание</YButton>
      </li>
      <li class="tabs-item" v-if="tabs.characters">
        <YButton :ytype="ButtonsEnum.tabButton">Характеристики</YButton>
      </li>
      <li class="tabs-item" v-if="tabs.garanties">
        <YButton :ytype="ButtonsEnum.tabButton">Гарантии</YButton>
      </li>
      <li class="tabs-item" v-if="tabs.similar">
        <YButton :ytype="ButtonsEnum.tabButton">Сопутствующие товары</YButton>
      </li>
    </ul>
    <ul class="tabs-list-content list-style-none">
      <li class="tabs-item-content" v-if="tabs.descriptions">
        <ul>
          <li v-for="item in tabs.descriptions" :key="item.title">
            <div>
              <img :src="item.img" alt="" />
              <p>{{ item.title }}</p>
              <p>{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </li>
      <li class="tabs-item-content" v-if="tabs.characters">
        <table>
          <tbody>
            <tr>
              <th>Функции</th>
              <td>
                <div>
                  <span
                    v-for="(func, index) in tabs.characters.functions"
                    :key="index"
                  >
                    {{ func
                    }}<span v-if="index < tabs.characters.functions.length - 1"
                      >,
                    </span>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <th>Категории</th>
              <td>
                <div>
                  <span
                    v-for="(category, index) in tabs.characters.categories"
                    :key="index"
                  >
                    {{ category
                    }}<span v-if="index < tabs.characters.categories">, </span>
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </li>
      <li class="tabs-item-content" v-if="tabs.garanties"></li>
      <li class="tabs-item-content" v-if="tabs.similar"></li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { TabsType } from '/types/PopularProductsType'
import { ButtonsEnum } from '/enums/ButtonsEnum'
const props = defineProps({
  tabs: {
    type: Object as () => TabsType,
    required: true,
  },
})
</script>
<style lang="scss"></style>
