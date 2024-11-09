<template>
  <nav class="breadcrumbs">
    <ol class="list-style-none">
      <li>
        <NuxtLink to="/"> Главная </NuxtLink>
      </li>
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <NuxtLink v-if="index < breadcrumbs.length" :to="crumb.path">
          {{ crumb.label }}
        </NuxtLink>
        <span v-else>{{ crumb.label }}</span>
      </li>
    </ol>
  </nav>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Id from '~/pages/popular-products/[id].vue'

const route = useRoute()

const props = defineProps({
  id: {
    type: Number,
  },
})

const translations = {
  'popular-products': 'Популярные товары',
  contact: 'Контакты',
  products: 'Продукты',
}

const productTitles = {
  'popular-products': {
    2: 'StarLine S96 V2 BT 2CAN2LIN GSM',
  },
}

const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter((path) => path)

  return pathArray.map((path: number, index) => {
    let translatedLabel =
      translations[path] || path.charAt(0).toUpperCase() + path.slice(1)
    if (
      pathArray[index - 1] === 'popular-products' &&
      productTitles['popular-products'][props.id]
    ) {
      translatedLabel = productTitles['popular-products'][props.id]
    }

    return {
      label: translatedLabel,
      path: '/' + pathArray.slice(0, index + 1).join('/'),
    }
  })
})
</script>
<style lang="scss" scoped>
.breadcrumbs ol {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  li {
    color: $white;
    position: relative;
    padding-left: 20px;

    &:not(:first-of-type)::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -20px;
      width: 20px;
      height: 10px;
      background-image: url('@/assets/arrow-slider-next.svg');
      background-position: left center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    a {
      color: $white;
      text-decoration: none;
    }
  }
}
</style>
