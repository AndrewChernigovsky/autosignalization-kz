<template>
  <header class="header">
    <div class="container">
      <div class="header-head">
        <Logo v-if="!isVisibleRef && isDesktop < 1024" />
        <div class="menu">
          <Geo
            link
            :width="30"
            :height="30"
            v-if="!isVisibleRef && isDesktop < 1024"
          />
          <Cart v-if="!isVisibleRef && isDesktop < 1024" />
          <Menu
            @is-visible="(state) => isVisible(state)"
            v-if="isDesktop < 1024"
          />
          <MenuDesktop v-if="isDesktop >= 1024" />
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useContactsStore } from '@/stores/contacts'
import type { ContactsType } from '~/types/ContactsType'
import Cart from '@/components/Cart/Cart.vue'
import Menu from '@/components/Menu/Menu.vue'
import Geo from '@/components/Geo/Geo.vue'
import MenuDesktop from '~/components/Menu/MenuDesktop.vue'

const contacts = ref<ContactsType[]>([])
const phones = ref<string[]>([])
const isDesktop = ref<number>(window.innerWidth)
const isVisibleRef = ref<boolean>(false)
const contactsStore = useContactsStore()

const getContacts = () => {
  return contactsStore.getContacts()
}

const updateScreenSize = () => {
  isDesktop.value = window.innerWidth
}

function isVisible(state: boolean) {
  isVisibleRef.value = state
}

onMounted(async () => {
  contacts.value = getContacts()
  phones.value = contacts.value.map((contact) => contact.tel).flat()
  window.addEventListener('resize', updateScreenSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenSize)
})
</script>
<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  gap: 10px;
}
.header-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

header {
  background: linear-gradient(#010308, #000208);
}
</style>
