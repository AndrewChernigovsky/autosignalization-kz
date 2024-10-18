<template>
  <header class="header">
    <nav class="nav">
      <ul>
        <li v-for="link in navLinks" :key="link.path">
          <nuxt-link :to="link.path">{{ link.name }}</nuxt-link>
        </li>
      </ul>
    </nav>
    <ul>
      <li v-for="phone in phones" :key="phone">
        <YButton :btn="false" :path="'tel:' + phone">{{ phone }}</YButton>
      </li>
    </ul>
  </header>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useNavigationStore } from '@/stores/navigation'
import { useContactsStore } from '@/stores/contacts'
import type { NavigationLinksType } from '~/types/NavigationLinksType'
import type { ContactsType } from '~/types/ContactsType'

const navLinks = ref<NavigationLinksType[]>([])
const contacts = ref<ContactsType[]>([])
const phones = ref<String[]>([])
const navigationStore = useNavigationStore()
const contactsStore = useContactsStore()

const getNavLinks = () => {
  return navigationStore.getNavigationLinks()
}

const getContacts = () => {
  return contactsStore.getContacts()
}

onMounted(async () => {
  navLinks.value = getNavLinks()
  contacts.value = getContacts()
  phones.value = contacts.value.map((contact) => contact.tel).flat()
  console.log(phones.value)
})
</script>
<style lang="scss"></style>
