<template>
  <div class="phone">
    <Phone />
    <ul>
      <li v-for="(phone, index) in phones" :key="phone[0] + index">
        <YButton
          :ytype="false"
          :btn="false"
          :path="'tel:' + phone.replace(/\s+/g, '')"
          >{{ phone }}</YButton
        >
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useContactsStore } from '@/stores/contacts'
import type { ContactsType } from '~/types/ContactsType'
const contacts = ref<ContactsType[]>([])
const contactsStore = useContactsStore()

const phones = ref<String[]>([])

const getContacts = () => {
  return contactsStore.getContacts()
}

onMounted(async () => {
  contacts.value = getContacts()
  console.log(contacts.value)
  contacts.value.forEach((contact) => {
    if (contact.tel) {
      phones.value.push(...contact.tel)
    }
  })
})
</script>
<style lang="scss">
.phone {
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 20px;
    height: 20px;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    padding-bottom: 5px;
    &:not(:first-of-type) {
      padding-top: 5px;
      border-top: 2px solid $white;
    }
  }
  a {
    color: $white;
    text-decoration: none;
  }
}
</style>
