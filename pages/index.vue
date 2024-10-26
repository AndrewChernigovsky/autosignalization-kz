<template>
  <ClientOnly>
    <Intro />
    <Services />
    <PresentVideo />
    <Advantages />
    <Sertificates />
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
<<<<<<< HEAD
    <CountButton
      :quantity="5"
      @get-quantity="(quantity: number) => console.log(quantity)"
    />
    <Dropdown
      :title="'Магазин sdfsdfsdfsd dfsssssssssssss sssssssssssssss sssssssssssssssssssss sssssssssssssssssssssssssss'"
    />
=======
    <CountButton :quantity="5" @get-quantity="(quantity: number) => console.log(quantity)" />
    <Dropdown :title="'Магазин'" />
<<<<<<< HEAD
    <Checkbox
      :item="{ type: 'checkbox', name: 'checkbox', id: 'checkbox', disabled: false, text: 'управление с телефона' }" />
    <Checkbox
      :item="{ type: 'checkbox', name: 'checkbox1', id: 'checkbox1', disabled: true, text: 'управление с телефона' }" />
>>>>>>> 7c513de884e56e1fc58cd115ec700c37986b5226
=======
    <Checkbox :item="{
      type: 'checkbox',
      name: 'checkbox',
      id: 'checkbox',
      disabled: false,
      text: 'управление с телефона',
    }" />
    <Checkbox :item="{
      type: 'checkbox',
      name: 'checkbox1',
      id: 'checkbox1',
      disabled: true,
      text: 'управление с телефона',
    }" />

    <Range />
    <Input :ytype="InputEnums.email" placeholder="Введите ваш адрес" />
    <Select @click="select" />
>>>>>>> 44b304cfd9a7d878b6add3ab71917507a3eb0361
  </ClientOnly>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { ButtonsEnum } from '~/enums/ButtonsEnum'
import Intro from '~/components/sections/Intro/Intro.vue'
<<<<<<< HEAD
import Breadcrumbs from '@/components/Breadcrumbs.vue'
=======
import Advantages from '~/components/sections/Advantages/Advantages.vue'
import Services from '~/components/sections/Services/Services.vue'
import Sertificates from '~/components/sections/Sertificates/Sertificates.vue'
import PresentVideo from '~/components/sections/PresentVideo/PresentVideo.vue'
import { InputEnums } from '~/enums/InputEnums'
>>>>>>> 44b304cfd9a7d878b6add3ab71917507a3eb0361

const userStore = useUserStore()
const select = (evt: any) => console.log(evt.target.textContent);


const fetchUsers = () => {
  userStore.fetchUsers()
}

onMounted(async () => {
  fetchUsers()
})

</script>
<style lang="scss" scoped></style>
