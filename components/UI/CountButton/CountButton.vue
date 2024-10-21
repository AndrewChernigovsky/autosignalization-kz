<template>
  <div class="button">
    <YButton :ytype="ButtonsEnum.countButton" @click="minusCount" :disabled="isMinusDisabled" customClass="count-button"><span class="visually-hidden">Отнять</span></YButton>
    <div class="counter">
      <span>{{ count }}</span>
    </div>
    <YButton :ytype="ButtonsEnum.countButton" @click="plusCount" customClass="count-button"><span class="visually-hidden">Прибавить</span></YButton>
  </div>
</template>
<script setup lang="ts">
import { CountButton } from '#build/components';
import { ref, computed, watch } from 'vue';
import { ButtonsEnum } from '~/enums/ButtonsEnum';
import YButton from '../YButton/YButton.vue';

const emit = defineEmits(['getQuantity'])
const props = defineProps({
  disabled: {
    type: Boolean,
  },
  quantity: {
    type: Number,
    default: 1,
    requaried: true,
  },
})

const count = ref(props.quantity)

const isMinusDisabled = computed(() => {
  return count.value <= 1 || props.disabled
})

function minusCount() {
  count.value -= 1
}

function plusCount() {
  count.value += 1
}

watch(count, (newValue:Number) => {
  emit('getQuantity', newValue)
})
</script>
<style lang="scss" scoped>
  .button {
    padding: 0 36px;
    max-width: 440px;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    border-radius: 130px;
    background: rgb(66, 64, 64);

    &:hover, .counter {
    background: linear-gradient(180.00deg, rgb(69, 11, 11),rgb(33, 0, 0) 100%);

      .counter {
        border: 1px solid white;

        &:hover .count-button:hover {
        background: linear-gradient(180.00deg, rgb(69, 11, 11),rgb(33, 0, 0) 100%);
      }
      }

     
  }
  }
  .count-button {
    display: none;
  }
  .counter {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    font-family: DIN Pro;
    font-size: 48px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: center;
    max-width: 100px;
    min-width: 100px;
    min-height: 100px;
    border-radius: 79px;
    background: linear-gradient(180.00deg, rgba(40, 0, 0, 0.3) 18.235%,rgba(245, 0, 0, 0.3) 100%);

    

  }

</style>
