<template>
  <ClientOnly>
    <h2>Index</h2>
    <h1>Пользователи</h1>
    <ul>
      <li v-for="user in userStore.users" :key="user.id">
        {{ user.firstName }} {{ user.lastName }}
      </li>
    </ul>
    <!-- <button @click="fetchUsers">Загрузить пользователей</button> -->
    <YButton :ytype="ButtonsEnum.secondary">Подробнее</YButton>
    <YButton :ytype="ButtonsEnum.primary">sdfsdfsdf</YButton>
    <!-- <Search test="TEST" /> -->
  </ClientOnly>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { ButtonsEnum } from '~/enums/ButtonsEnum'

const userStore = useUserStore()

const fetchUsers = () => {
  userStore.fetchUsers()
}

onMounted(async () => {
  fetchUsers()
})
</script>
<style lang="scss" scoped></style>
