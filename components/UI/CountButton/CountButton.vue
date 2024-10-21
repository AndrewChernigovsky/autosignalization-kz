<template>
  <div class="button">
    <button type="button" class="button-custom" @click="minusCount" :disabled="isMinusDisabled"><span
        class="visually-hidden">Отнять</span></button>
    <div class="counter">
      <span>{{ count }}</span>
    </div>
    <button type="button" class="button-custom" @click="plusCount"><span
        class="visually-hidden">Прибавить</span></button>
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

watch(count, (newValue: Number) => {
  emit('getQuantity', newValue)
})
</script>
<style lang="scss" scoped>
.button-custom {
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100px;
  min-height: 80px;
  color: white;
  border-radius: 22px;
  background: rgb(66, 64, 64);
  border: none;

  &::after {
    content: '';
    min-width: 70px;
    min-height: 8px;
    background-color: white;
    z-index: 100;
  }

  &:last-child::before {
    content: '';
    position: absolute;
    min-width: 8px;
    min-height: 70px;
    background-color: white;
    z-index: 100;
  }


}


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

  &:hover {
    background: linear-gradient(180.00deg, rgb(69, 11, 11), rgb(33, 0, 0) 100%);

    .counter {
      border: 1px solid white;
      background: linear-gradient(180.00deg, rgba(40, 0, 0, 0.3) 18.235%, rgba(245, 0, 0, 0.3) 100%);
    }

    .button-custom {
      background: linear-gradient(rgb(83, 25, 25), rgb(83, 25, 25), rgb(38, 32, 32));
    }


  }

  &:focus {
    background: linear-gradient(180.00deg, rgb(27, 24, 24) 100%);

    .counter {
      border: 1px solid white;
      background: linear-gradient(180.00deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) 100%, rgba(245, 0, 0, 0.3) 100%);
    }

    .button-custom {
      background: linear-gradient(rgb(38, 32, 32), rgb(38, 32, 32));
    }


  }


  &:active {

    .counter {
      border: 1px solid white;

    }

    .button-custom:active {
      background: rgb(47, 0, 0);
    }
  }
}



.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  border: 1px solid white;
  font-family: 'DINPRO';
  font-size: 48px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: center;
  max-width: 100px;
  min-width: 100px;
  min-height: 100px;
  border-radius: 79px;
  background: linear-gradient(180.00deg, rgba(40, 0, 0, 0.3) 18.235%, rgba(245, 0, 0, 0.3) 100%);
}
</style>
