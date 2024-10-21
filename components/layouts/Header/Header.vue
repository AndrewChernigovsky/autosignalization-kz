<template>
  <header class="header">
    <div class="container">
      <div class="header-head">
        <Logo />
        <div class="menu">
          <Geo link :width="30" :height="30" v-if="!isVisibleRef" />
          <Cart v-if="!isVisibleRef" />
          <Menu @is-visible="(state) => isVisible(state)" />
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

const contacts = ref<ContactsType[]>([])
const phones = ref<String[]>([])
const isVisibleRef = ref<Boolean>(false)
const contactsStore = useContactsStore()

const getContacts = () => {
  return contactsStore.getContacts()
}

function isVisible(state: boolean) {
  isVisibleRef.value = state
}

onMounted(async () => {
  contacts.value = getContacts()
  phones.value = contacts.value.map((contact) => contact.tel).flat()
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

  img {
    width: 30px;
    height: 30px;
  }
}

header {
  background: linear-gradient(#010308, #000208);
}
</style>
