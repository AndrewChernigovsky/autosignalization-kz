<template>
  <button
    :class="buttonClass"
    :type="typeButton ? typeButton : 'button'"
    v-if="btn"
    :ytype="ytype"
    :disabled="states.disabled"
  >
    <slot />
  </button>
  <a :href="path" v-if="btn === false"><slot /></a>
</template>
<script lang="ts">
function isButtonsEnum(value: unknown): value is ButtonsEnum {
  if (Object.values(ButtonsEnum).includes(value as ButtonsEnum)) {
    return true
  } else {
    console.error('Error: значение не соответствует ButtonsEnum')
    throw new Error('Error: значение не соответствует ButtonsEnum')
  }
}
</script>
<script setup lang="ts">
import { computed } from 'vue'
import { ButtonsEnum } from '~/enums/ButtonsEnum'

const props = defineProps({
  path: {
    type: String,
  },
  btn: {
    type: Boolean,
    default: true,
  },
  typeButton: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button',
  },
  ytype: {
    type: String,
    validator: (value) => isButtonsEnum(value),
  },
  disabled: {
    type: Boolean,
  },
})

const buttonClass = computed(() => {
  return ['base', props.ytype || '', { disabled: props.disabled }]
})

const states = computed(() => {
  return {
    disabled: props.disabled ? true : false,
  }
})
</script>
<style lang="scss" scoped>
// ТЫ РАБОТАЕШЬ ТУТ
.primary {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  box-sizing: border-box;
  border: 1px solid rgb(201, 201, 201);
  border-radius: 5px;
  background: linear-gradient(180.00deg, $black-light,$red-light);
  color: rgb(255, 255, 255);
  font-family: DIN Pro;
  font-size: 36px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0px;
  text-transform: uppercase;
  padding: 18px 60px;

  &:hover {
    background: linear-gradient(180.00deg, rgb(7, 1, 1) 5.644%,rgb(121, 5, 5) 98.575%);
    border: 1px solid rgb(121, 5, 5) 98.575%;
  }

  &:focus {
    box-sizing: border-box;
    border: 1px solid rgb(201, 201, 201);
    border-radius: 5px;
    background: linear-gradient(180.00deg, rgb(7, 1, 1) 5.644%,rgb(121, 5, 5) 98.575%);
  }

  &:active {
    background: linear-gradient(180.00deg, rgb(255, 9, 9) 5.644%,rgb(0, 0, 0) 98.575%);
  }

  &:disabled {
    background: linear-gradient(180.00deg, rgba(255, 9, 9, 0) 5.644%,rgb(0, 0, 0) 98.575%);
}}

.secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:$gray-light;
  max-width: 100%;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 5px;
  color: rgb(255, 255, 255);
  font-family: DIN Pro;
  font-size: 36px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0px;
  text-transform: uppercase;
  padding: 18px 60px;
  
  
  &:hover {
    border-radius: 5px;
    background: linear-gradient(180.00deg, rgb(23, 15, 15) 5.644%,rgb(42, 36, 36) 100%);
  }

  &:focus {
    border: 1px solid rgb(255, 255, 255);
    border-radius: 5px;
    background: linear-gradient(180.00deg, rgb(23, 15, 15) 5.644%,rgb(42, 36, 36) 100%);
  }

  &:active {
    border: 1px solid rgb(255, 255, 255);
    border-radius: 5px;
    background: linear-gradient(180.00deg, rgb(22, 19, 19) 5.644%,rgb(69, 64, 64) 100%);
  }
}

.disabled {
  opacity: 0.5;
}
</style>
