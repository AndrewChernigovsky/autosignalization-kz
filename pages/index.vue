<template>
  <ClientOnly>
    <div class="container">
      <YButton :ytype="ButtonsEnum.secondary">Подробнее</YButton>
      <YButton :ytype="ButtonsEnum.primary">sdfsdfsdf</YButton>
      <CountButton
        :quantity="5"
        @get-quantity="(quantity: number) => console.log(quantity)"
      />
    </div>
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
