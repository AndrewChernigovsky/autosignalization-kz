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
  background-color: $red;
}

.secondary {
  background-color: $gray;
}

.disabled {
  opacity: 0.5;
}
</style>
