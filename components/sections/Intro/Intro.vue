<template>
  <section class="intro">
    <div class="container">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide>
          <h1>
            АВТОСИГНАЛИЗАЦИИ <br />
            АВТОЗАПУСК GSM GPS
          </h1>
          <br />
          <ul>
            <li>ПРОДАЖА</li>
            <li>УСТАНОВКА</li>
            <li>РЕМОНТ</li>
          </ul>
          <YButton :ytype="ButtonsEnum.simple">Подробнее</YButton>
        </SwiperSlide>
        <SwiperSlide>
          <h2>
            АВТОСИГНАЛИЗАЦИИ1 <br />
            АВТОЗАПУСК GSM GPS1
          </h2>
          <br />
          <ul>
            <li>ПРОДАЖА</li>
            <li>УСТАНОВКА</li>
            <li>РЕМОНТ</li>
          </ul>
          <YButton :ytype="ButtonsEnum.simple">Подробнее</YButton>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Autoplay } from 'swiper/modules'
import { ButtonsEnum } from '~/enums/ButtonsEnum'
const modules = [Autoplay]
</script>
<style lang="scss">
h1,
h2,
li {
  color: $white;
}
</style>
