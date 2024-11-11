<template>
  <div class="page-container">
    <div class="container wrapper">
      <section class="autosygnals">
        <h1 class="main-title m-0">Автосигнализации</h1>
        <ul class="list list-style-none" v-if="autosygnalsTypes">
          <li class="item" v-for="item in autosygnalsTypes">
            <h2 class="item-title">{{ item.title }}</h2>
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

              <div class="item-btns">
                <p class="count">{{ item.product.length }}</p>
                <YButton
                  link
                  :ytype="ButtonsEnum.primary"
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
.wrapper {
  padding: 0 10px;
}

.item-img {
  object-fit: cover;
}
</style>
