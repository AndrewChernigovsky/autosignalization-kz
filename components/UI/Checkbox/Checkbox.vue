<template>
  <div class="checkbox-block">
    <input
      class="checkbox"
      type="checkbox"
      :name="props.item.name"
      :id="props.item.id"
      :disabled="props.item.disabled"
    />
    <div class="box">
      <div class="box--checked"></div>
    </div>
    <label :for="props.item.id" class="label">{{ props.item.text }}</label>
  </div>
</template>
<script setup lang="ts">
import type { CheckboxType } from '~/types/CheckboxType'

const props = defineProps({
  item: {
    type: Object as () => CheckboxType,
    default: {
      type: 'checkbox',
      id: 'checkbox',
      name: 'checkbox',
      disabled: false,
    },
  },
})
</script>
<style lang="scss" scoped>
.checkbox-block {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
}

.box {
  position: absolute;
  left: 10px;
  width: 30px;
  height: 30px;

  &--checked {
    width: inherit;
    height: inherit;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0px;
      width: 30px;
      height: 30px;
      border: 1px solid $white;
      background-color: $black-2f2f2f;
    }

    &::after {
      content: '';
      width: 30px;
      height: 30px;
      position: absolute;
      left: 30px;
      transform: translate(-50%, -50%);
      background-color: $white;
      clip-path: polygon(
        8% 92%,
        3% 75%,
        0 77%,
        6% 100%,
        6% 100%,
        98% 6%,
        96% 2%
      );
      display: none;
    }
  }
}

.label {
  color: $white;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0;
  margin: 0;
  min-height: 30px;
  align-items: center;
  padding-left: 60px;
  color: $white;
  text-transform: uppercase;
}

.checkbox {
  appearance: none;
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:not(:checked):hover + .box + .label {
    opacity: 0.8;
  }

  &:checked:hover + .box + .label {
    opacity: 0.8;
  }

  &:checked + .box .box--checked::before {
    background-color: $black-2f2f2f;
  }

  &:checked + .box .box--checked::after {
    display: block;
  }

  &:active + .box .box--checked::after {
    display: block;
  }

  &:active:focus + .box .box--checked::before {
    background-color: $black-2f2f2f;
  }

  &:focus-visible + .box .box--checked::before {
    background-color: $red-B40036;
  }

  &:active:focus + .box .box--checked::before {
    background-color: transparent;
  }

  &:disabled + .box .box--checked::after {
    display: none;
  }

  &:disabled + .box .box--checked::before {
    opacity: 0.11;
  }

  &:disabled + .box + .label {
    opacity: 0.11;
  }

  &:disabled:hover + .box + .label {
    // color: $white;
    // color: #000;
    opacity: 0.11;
  }
}
</style>
