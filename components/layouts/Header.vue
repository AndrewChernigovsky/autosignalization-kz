<template>
  <header class="header">
    <div class="container">
      <Logo />
      <Menu />
      <Search />
      <a href="https://maps.app.goo.gl/FwrjA4jjWrHHzazk8">
        <img src="" alt="" />
      </a>
      <Geo />
      <Cart />
      <Phone />
      <ul>
        <li v-for="phone in phones" :key="phone">
          <YButton :btn="false" :path="'tel:' + phone.replace(/\s+/g, '')">{{
            phone
          }}</YButton>
        </li>
      </ul>
    </div>
  </header>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useNavigationStore } from '@/stores/navigation'
import { useContactsStore } from '@/stores/contacts'
import type { NavigationLinksType } from '~/types/NavigationLinksType'
import type { ContactsType } from '~/types/ContactsType'
import Cart from '@/components/Cart/Cart.vue'
import Menu from '@/components/Menu/Menu.vue'

const contacts = ref<ContactsType[]>([])
const phones = ref<String[]>([])
const navigationStore = useNavigationStore()
const contactsStore = useContactsStore()

const getContacts = () => {
  return contactsStore.getContacts()
}

onMounted(async () => {
  contacts.value = getContacts()
  phones.value = contacts.value.map((contact) => contact.tel).flat()
})
</script>
<style lang="scss">
header {
  background: linear-gradient(#010308, #000208);
}
</style>
