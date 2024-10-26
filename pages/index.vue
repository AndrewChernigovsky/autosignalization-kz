<template>
  <ClientOnly>
    <Intro />
    <Services />
    <PresentVideo />
    <Advantages />
    <h2>Index</h2>
    <h1>Пользователи</h1>
    <ul>
      <li v-for="user in userStore.users" :key="user.id">
        {{ user.firstName }} {{ user.lastName }}
      </li>
    </ul>
    <button @click="fetchUsers">Загрузить пользователей</button>
    <YButton :ytype="ButtonsEnum.secondary">Подробнее</YButton>
    <YButton :ytype="ButtonsEnum.primary">Подробнее</YButton>
    <YButton :ytype="ButtonsEnum.tabButton">Подробнее</YButton>
    <CountButton
      :quantity="5"
      @get-quantity="(quantity: number) => console.log(quantity)"
    />
    <Dropdown :title="'Магазин'" />
    <Checkbox
      :item="{
        type: 'checkbox',
        name: 'checkbox',
        id: 'checkbox',
        disabled: false,
        text: 'управление с телефона',
      }"
    />
    <Checkbox
      :item="{
        type: 'checkbox',
        name: 'checkbox1',
        id: 'checkbox1',
        disabled: true,
        text: 'управление с телефона',
      }"
    />

    <Range />
    <Input :ytype="InputEnums.email" placeholder="Введите ваш адрес" />
  </ClientOnly>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { ButtonsEnum } from '~/enums/ButtonsEnum'
import Intro from '~/components/sections/Intro/Intro.vue'
import Advantages from '~/components/sections/Advantages/Advantages.vue'
import Services from '~/components/sections/Services/Services.vue'
import PresentVideo from '~/components/sections/PresentVideo/PresentVideo.vue'
import { InputEnums } from '~/enums/InputEnums'

const userStore = useUserStore()

const fetchUsers = () => {
  userStore.fetchUsers()
}

onMounted(async () => {
  fetchUsers()
})
</script>
<style lang="scss" scoped></style>
