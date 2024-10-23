<template>
  <div class="checkbox-block">
    <span class="box">
      <input class="checkbox" type="checkbox" :name="props.item.name" :id="props.item.id"
        :disabled="props.item.disabled" />
      <label :for="props.item.id" class="label">{{ props.item.text }}</label>
    </span>

  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { CheckboxType } from '~/types/CheckboxType'


const props = defineProps({
  item: {
    type: Object as () => CheckboxType,
    default: {
      type: 'checkbox',
      id: 'checkbox',
      name: 'checkbox',
      disabled: false,
    }
  }
})
// 1 написать тип для объекта item  @/types/
// 2 написать пропс для объекта item @/components/UI/YButton для примера можешь взять
// 3 пропс для состояния disabled
</script>
<style lang="scss" scoped>
.checkbox-block {
  display: flex;
  align-items: center;
  min-height: 44px;

}

.box {
  position: relative;
  margin-left: 20px;

}

.checkbox {
  appearance: none;
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:not(:checked):hover+.label {
    color: $red-7e2222;
  }

  &:not(:checked):focus+.label {
    color: $white;

    &.label::before {
      background-color: transparent;
    }
  }



  &:focus+.label::before {
    background-color: $red-8b1b1b;
  }



  &:focus+.label {
    color: $red-b20606;
  }

  &:checked:focus+.label {
    color: $white;
  }

  &:focus:checked {
    color: $white;
  }

  &:checked+.label::before {
    background-color: transparent;
  }

  &:checked+.label::after {
    display: block;
    color: $white;
  }



  &:disabled+.label::before {
    opacity: 0.11;
    ;
  }


  &:not(:checked):disabled+.label {
    color: $white;
    opacity: 0.11;
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
  padding-left: 47px;
  color: $white;
  text-transform: uppercase;

  &::before {
    content: '';
    position: absolute;
    left: 10px;
    width: 30px;
    height: 30px;
    border: 1px solid $white;
    background-color: $white;
  }

  &::after {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    left: 40px;
    transform: translate(-50%, -50%);
    background-color: $white;
    clip-path: polygon(8% 92%, 3% 75%, 0 77%, 6% 100%, 6% 100%, 98% 6%, 96% 2%);
    display: none;
  }

}
</style>
