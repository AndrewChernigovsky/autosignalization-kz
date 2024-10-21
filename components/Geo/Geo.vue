<template>
  <div class="geo">
    <Geo />
    <address>
      {{ address }}
    </address>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useContactsStore } from '@/stores/contacts'
import type { ContactsType } from '~/types/ContactsType'
const contacts = ref<ContactsType[]>([])
const address = ref<String>('')
const contactsStore = useContactsStore()

const getContacts = () => {
  return contactsStore.getContacts()
}

onMounted(async () => {
  contacts.value = getContacts()
  console.log(contacts.value)
  contacts.value.forEach((contact) => {
    if (contact.address) {
      address.value = contact.address // Assuming you want the last address or a specific one
    }
  })
})
</script>
<style lang="scss"></style>
