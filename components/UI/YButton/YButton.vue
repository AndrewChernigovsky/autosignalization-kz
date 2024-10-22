<template>
  <button :class="[buttonClass, customClass]" :type="typeButton ? typeButton : 'button'" v-if="btn" :ytype="ytype"
    :disabled="states.disabled" @click="handleClick">
    <slot />
  </button>
  <a :href="path" v-if="btn === false">
    <slot />
  </a>
</template>
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
    default: ButtonsEnum.primary,
  },
  disabled: {
    type: Boolean,
  },
  customClass: { // Добавьте этот prop
    type: String,
    default: ''
  },
})
const emit = defineEmits()
function handleClick(event: MouseEvent) {
  emit('click', event)
}
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
  border: 1px solid $white-c9c9c9;
  border-radius: 5px;
  background: linear-gradient(180deg, $black-280000-6, $red-ff0000-99);
  color: $white;
  font-family: 'DINPRO';
  font-size: 36px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0px;
  text-transform: uppercase;
  padding: 18px 60px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, $black-070101-6, $red-790505-99);
    border-color: none;
  }

  &:focus {
    border-color: $white-c9c9c9;
    background: linear-gradient(180deg, $black-070101-6, $red-790505-99);
  }

  &:active {
    background: linear-gradient(180deg, $red-ff0909-6, $black-000000-99);
  }

  &:disabled {
    background: linear-gradient(180deg,
        $black-ff090900-6,
        $black-000000-99);
  }
}

.secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $black-2f2f2f;
  max-width: 100%;
  border: 1px solid $white;
  border-radius: 5px;
  color: $white;
  font-family: 'DINPRO';
  font-size: 36px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0px;
  text-transform: uppercase;
  padding: 18px 60px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg,
        $black-170f0f-6,
        $black-2a2424-100);
  }

  &:focus {
    border: 1px solid $white;
    background: linear-gradient(180deg,
        $black-170f0f-6,
        $black-2a2424-100);
  }

  &:active {
    border: 1px solid $white;
    background: linear-gradient(180deg,
        $black-161313-6,
        $black-454040-100);
  }
}

.disabled {
  opacity: 0.5;
}
</style>
