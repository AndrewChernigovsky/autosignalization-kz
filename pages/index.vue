<template>
  <ClientOnly>
    <Intro />
    <CarsBrand />
    <PopularProducts />
    <Services />
    <PresentVideo />
    <Advantages />
    <Sertificates />
    <FeedbackForm />
    <YButton :ytype="ButtonsEnum.simple">КНОПКА</YButton>
  </ClientOnly>
</template>
<script lang="ts" setup>
import { ButtonsEnum } from '~/enums/ButtonsEnum'
import Intro from '~/components/sections/Intro/Intro.vue'
import Advantages from '~/components/sections/Advantages/Advantages.vue'
import Services from '~/components/sections/Services/Services.vue'
import Sertificates from '~/components/sections/Sertificates/Sertificates.vue'
import PopularProducts from '~/components/sections/PopularProducts/PopularProducts.vue'
import PresentVideo from '~/components/sections/PresentVideo/PresentVideo.vue'
import CarsBrand from '~/components/sections/CarsBrand/CarsBrand.vue'
import FeedbackForm from '~/components/sections/FeedbackForm/FeedbackForm.vue'
</script>
<style lang="scss" scoped></style>
