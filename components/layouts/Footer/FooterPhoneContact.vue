<template>
  <div class="phone-container">
    <ul class="phone-list list-style-none">
      <li class="phone-item" v-for="phone in phones">
        <a class="phone-link link" :href="'tel:' + phone.replace(/\s+/g, '')">{{
          phone
        }}</a>
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

  @media screen and (min-width: 768px) {
    grid-column: 7 / -1;
    grid-row: 1 / 4;
    align-self: center;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 46px;
    align-self: center;
  }
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
    mask-repeat: no-repeat;
    mask-size: 20px;
    mask-position: center;
    margin-right: 19px;
  }

  @media screen and (min-width: 1440px) {
    &::before {
      width: 40px;
      height: 40px;
      mask-size: 40px;
    }
  }
}
</style>
