<template>
  <div class="input">
    <label>
      <span>{{ text || label }}</span>
      <input
        :type="textType || 'text'"
        :ytype="InputEnums.login"
        :required="required"
        :placeholder="placeholder"
      />
    </label>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { InputEnums, type InputEnumKeys } from '~/enums/InputEnums'

const props = defineProps({
  required: {
    type: Boolean,
  },
  ytype: {
    type: String as () => InputEnumKeys,
    default: InputEnums.login,
  },
  label: {
    type: String,
  },
  text: {
    type: String,
  },
  placeholder: {
    type: String,
  },
})

const labels = {
  [InputEnums.login]: 'Ваш логин1',
  [InputEnums.password]: 'Ваш пароль',
  [InputEnums.email]: 'Ваш  email',
  [InputEnums.phone]: 'Ваш телефон',
  [InputEnums.textarea]: 'Ваш комментарий',
}

const inputType = {
  [InputEnums.login]: 'text',
  [InputEnums.password]: 'password',
  [InputEnums.email]: 'email',
  [InputEnums.phone]: 'phone',
  [InputEnums.textarea]: 'text',
}

const label = computed(() => {
  return labels[props.ytype] || 'Ваш логин'
})
const textType = computed(() => {
  return inputType[props.ytype] || 'Ваш логин'
})
</script>
<style lang="scss"></style>
