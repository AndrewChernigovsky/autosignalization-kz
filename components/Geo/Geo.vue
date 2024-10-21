<template>
  <div class="geo">
    <a
      href="https://maps.app.goo.gl/72eQCZUbxVCKh43PA"
      class="geo-image"
      :style="sizesImage"
    >
      <Geo />
    </a>
    <address v-if="!link">
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

const props = defineProps({
  link: {
    type: Boolean,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
})

const getContacts = () => {
  return contactsStore.getContacts()
}

const sizesImage = computed(() => ({
  width: props.width ? `${props.width}px` : 'auto',
  height: props.height ? `${props.height}px` : 'auto',
}))

onMounted(async () => {
  contacts.value = getContacts()
  contacts.value.forEach((contact) => {
    if (contact.address) {
      address.value = contact.address // Assuming you want the last address or a specific one
    }
  })
})
</script>
<style lang="scss">
.geo {
  display: flex;
  align-items: center;
  gap: 10px;

  address {
    color: $white;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    max-width: 50%;
  }
}
</style>
