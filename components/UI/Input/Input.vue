<template>
  <div class="input" :style="{ width: width, height: height }">
    <label class="input-label">
      <span class="input-title">{{ text || label }}</span>
      <div class="input-container">
        <input class="input-login" :class="validation ? 'valid' : 'invalid'" :type="textType || 'text'"
          :ytype="InputEnums.login" :required="required" :placeholder="placeholder" />
        <div class="input-checkbox"></div>
      </div>
    </label>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import {
  InputEnums,
  type InputEnumKeys,
  SizeTypes,
  type SizeEnumKeys,
} from '~/enums/InputEnums'

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
  width: {
    type: Object as () => { size: number | string; type: SizeEnumKeys },
    default: () => ({
      size: 100,
      type: 'auto',
    }),
  },
  height: {
    type: Object as () => { size: number | string; type: SizeEnumKeys },
    default: () => ({
      size: 100,
      type: 'auto',
    }),
  },
})

const validation = ref<boolean>(false)

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

const width = computed(() => {
  let numericValue =
    typeof props.width.size === 'string'
      ? parseFloat(props.width.size) // Convert string to number if it's a percentage or other unit
      : props.width.size

  let unit =
    typeof props.width.size === 'string'
      ? props.width.size.replace(/[0-9.]+/, '') // Extract unit from string
      : SizeTypes[props.width.type] // Get unit from enum if it's a number

  switch (SizeTypes[props.width.type]) {
    case SizeTypes.auto:
      return 'auto' // Return 'auto' directly
    case SizeTypes.inherit:
      return 'inherit' // Return 'inherit' directly
    default:
      return `${numericValue}${unit}` // Return combined width for other cases
  }
})

const height = computed(() => {
  let numericValue =
    typeof props.height.size === 'string'
      ? parseFloat(props.height.size) // Convert string to number if it's a percentage or other unit
      : props.height.size

  let unit =
    typeof props.height.size === 'string'
      ? props.height.size.replace(/[0-9.]+/, '') // Extract unit from string
      : SizeTypes[props.height.type] // Get unit from enum if it's a number

  switch (SizeTypes[props.height.type]) {
    case SizeTypes.auto:
      return 'auto' // Return 'auto' directly
    case SizeTypes.inherit:
      return 'inherit' // Return 'inherit' directly
    default:
      return `${numericValue}${unit}` // Return combined width for other cases
  }
})
</script>
<style lang="scss" scoped>
.input-label {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: inherit;
}

.input-title {
  color: $white;
  font-family: $primary-font;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0px;
  text-align: left;
  width: max-content;
}

.input-container {
  position: relative;
  width: max-content;
}

.input-checkbox {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  right: 0px;
  transform: translate(-50%, -50%);
  border-radius: 3px;
}


.input-login {
  width: inherit;
  height: 30px;
  background-color: $black-2f2f2f;
  border: none;
  outline: 6px solid $white;
  border-radius: 1px;
  font-family: $primary-font;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: left;
  padding: 0;
  padding-left: 8px;
  padding-right: 40px;
  color: $white-05;


  &:valid {

    &:focus,
    &:not(:placeholder-shown) {
      outline: none;
      box-shadow: 0 0 8px $green-3eff00;

      &+.input-checkbox {
        mask-image: url('@/assets/icons/aprove.svg');
        background-color: $green-3eff00;
        mask-position: center;
        mask-repeat: no-repeat;
        mask-size: cover;
      }
    }
  }

  &:invalid {

    &:focus,
    &:not(:placeholder-shown) {
      outline: none;
      box-shadow: 0 0 8px $red-ff0000-99;

      &+.input-checkbox {
        mask-image: url('@/assets/icons/aprove.svg');
        background-color: $red-ff0000-99;
        mask-position: center;
        mask-repeat: no-repeat;
        mask-size: cover;
      }
    }
  }
}
</style>
