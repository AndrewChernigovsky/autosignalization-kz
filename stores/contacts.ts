import { defineStore } from 'pinia'
import type { ContactsType } from '@/types/ContactsType'
import { ref } from 'vue'

export const useContactsStore = defineStore('contact', () => {
  const contacts = ref<ContactsType[]>([
    {
      tel: ['+7 707 747 8212', '+7 701 747 8212'],
      address: 'Казахстан, г.Алматы, ул.Абая 145/г, бокс №15.',
    },
  ])

  function setContacts(newContacts: ContactsType[]) {
    contacts.value = newContacts
  }

  function getContacts() {
    return contacts.value
  }

  return {
    contacts,
    setContacts,
    getContacts,
  }
})
