<template>
  <div class="phone-container">
    <ul class="phone-list list-style-none">
      <li class="phone-item" v-for="phone in phones">
        <NuxtLink
          class="phone-link link"
          :path="'tel:' + phone.replace(/\s+/g, '')"
          >{{ phone }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useContactsStore } from '@/stores/contacts'

const { getContacts } = useContactsStore()

const contacts = getContacts()
const phones = contacts.map((contact) => contact.tel).flat()
</script>
<style scoped lang="scss">
.phone-container {
  grid-column: 2/ -1;
  justify-self: flex-end;
  grid-row: 2 /3;
}

.phone-list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  font-weight: 700;
}

.phone-link {
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-color: red;
    mask-image: url('@/assets/icons/phone-no-border.svg');
    margin-right: 19px;
  }
}
</style>
