<template>
  <button
    :class="[buttonClass, customClass]"
    :type="typeButton ? typeButton : 'button'"
    v-if="btn"
    :ytype="ytype"
    :disabled="states.disabled"
    @click="handleClick"
  >
    <slot />
  </button>
  <a :href="path" v-if="btn === false"><slot /></a>
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
  border: 1px solid $white-grey;
  border-radius: 5px;
  background: linear-gradient(180deg, $black-btn-bg, $red-btn-bg);
  color: $white;
  font-family: DIN Pro;
  font-size: 36px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0px;
  text-transform: uppercase;
  padding: 18px 60px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, $black-btn-hover, $red-btn-hover);
    border-color: none;
  }

  &:focus {
    box-sizing: border-box;
    border-color: $white-grey;
    border-radius: 5px;
    background: linear-gradient(180deg, $black-btn-hover, $red-btn-hover);
  }

  &:active {
    background: linear-gradient(180deg, $red-btn-active, $black-btn-active);
  }

  &:disabled {
    background: linear-gradient(
      180deg,
      $gray-btn-disabled,
      $black-btn-disabled
    );
  }
}

.secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $gray-light;
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
  cursor: pointer;

  &:hover {
    border-radius: 5px;
    background: linear-gradient(
      180deg,
      $black-link-hover-1,
      $black-link-hover-2
    );
  }

  &:focus {
    border: 1px solid $white;
    border-radius: 5px;
    background: linear-gradient(
      180deg,
      $black-link-hover-1,
      $black-link-hover-2
    );
  }

  &:active {
    border: 1px solid $white;
    border-radius: 5px;
    background: linear-gradient(
      180deg,
      $black-link-active-1,
      $black-link-active-2
    );
  }
}
.count-button {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100px;
  min-height: 80px;
  font-size: 82px;
  color: white;
  border-radius: 22px;
  background: rgb(66, 64, 64);
  border: none;

  &::after {
    content: '';
    min-width: 80px;
    min-height: 8px;
    background-color: white;
    z-index: 100;
  }

  &:last-child::before {
    content: '';
    position: absolute;
    min-width: 8px;
    min-height: 80px;
    background-color: white;
    z-index: 100;
  }

}
.disabled {
  opacity: 0.5;
}
</style>
