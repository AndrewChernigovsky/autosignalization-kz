<template>
  <section class="section">
    <h2 class="section-title">Форма обратной связи</h2>
    <form action="#" method="POST">
      <div>
        <h3 class="title">Марка:</h3>
        <ul class="list list-style-none">
          <li class="item" v-for="image in brandsImages">
            <label class="label">
              <input type="radio" name="brand" />
              <CarsBrandItem
                :image="image"
                class="image"
                :width="240"
                :height="240"
              />
            </label>
          </li>
        </ul>
      </div>
    </form>
  </section>
</template>
<script setup lang="ts">
import CarsBrandItem from '@/components/CarsBrand/CarsBrandItem.vue'
import { images } from '@/components/sections/CarsBrand/carsBrand'

const brandsImages = images
</script>
<style scoped lang="scss"></style>
