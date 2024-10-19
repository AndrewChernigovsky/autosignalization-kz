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
  border: 1px solid $white-grey;
  border-radius: 5px;
  background: linear-gradient(180.00deg, $black-btn-bg,$red-btn-bg);
  color: $white;
  font-family: DIN Pro;
  font-size: 36px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0px;
  text-transform: uppercase;
  padding: 18px 60px;

  &:hover {
    background: linear-gradient(180.00deg, $black-btn-hover,$red-btn-hover);
    border-color: none;
  }

  &:focus {
    box-sizing: border-box;
    border-color: $white-grey;
    border-radius: 5px;
    background: linear-gradient(180.00deg, $black-btn-hover,$red-btn-hover);
  }

  &:active {
    background: linear-gradient(180.00deg, $red-btn-active,$black-btn-active);
  }

  &:disabled {
    background: linear-gradient(180.00deg, $gray-btn-disabled,$black-btn-disabled);
}}

.secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:$gray-light;
  max-width: 100%;
  border: 1px solid $white;
  border-radius: 5px;
  color: $white;
  background-color: $black-link-bg;
  font-family: DIN Pro;
  font-size: 36px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0px;
  text-transform: uppercase;
  padding: 18px 60px;
  
  
  &:hover {
    border-radius: 5px;
    background: linear-gradient(180.00deg, $black-link-hover-1,$black-link-hover-2);
  }

  &:focus {
    border: 1px solid $white;
    border-radius: 5px;
    background: linear-gradient(180.00deg, $black-link-hover-1,$black-link-hover-2);
  }

  &:active {
    border: 1px solid $white;
    border-radius: 5px;
    background: linear-gradient(180.00deg,$black-link-active-1,$black-link-active-2);
  }
}

.disabled {
  opacity: 0.5;
}
</style>
