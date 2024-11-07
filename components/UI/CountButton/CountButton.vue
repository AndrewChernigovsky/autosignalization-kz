<template>
  <div class="button">
    <button
      type="button"
      class="button-custom"
      @click="minusCount"
      :disabled="isMinusDisabled"
    >
      <span class="visually-hidden">Отнять</span>
    </button>
    <div class="counter">
      <span>{{ count }}</span>
    </div>
    <button type="button" class="button-custom" @click="plusCount">
      <span class="visually-hidden">Прибавить</span>
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useCartStore } from '@/stores/useCartStore'
import type { ProductType } from '@/types/ProductType'
import type { PopularProductsType } from '~/types/PopularProductsType'

const cartStore = useCartStore()

const emit = defineEmits(['getQuantity'])
const props = defineProps({
  disabled: {
    type: Boolean,
  },
  product: {
    type: {} as () => PopularProductsType,
    required: true,
  },
})

const count = ref(props.product.quantity)

const isMinusDisabled = computed(() => {
  return count.value <= 1 || props.disabled
})

function minusCount() {
  count.value -= 1
  cartStore.removeCartProduct(props.product)
}

function plusCount() {
  count.value += 1
  cartStore.addCartProduct(props.product)
}

watch(count, (newValue: Number) => {
  emit('getQuantity', newValue)
})
</script>
<style lang="scss" scoped>
.button-custom {
  padding: 5px; //8px
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 40px; //100px
  min-height: 40px; //80px
  color: $white;
  border-radius: 12px;
  background: $black-454040-100;
  border: none;

  &::after {
    content: '';
    min-width: 35px; //80px
    min-height: 4px;
    background-color: $white;
  }

  &:last-child::before {
    content: '';
    position: absolute;
    min-width: 4px;
    min-height: 35px; //80px
    background-color: $white;
  }

  &:first-child:disabled {
    background: $black-1b1818-100;

    &::after {
      opacity: 0.5;
    }
  }
}

.button {
  padding: 0 36px;
  max-width: 200px; //440px
  min-height: 50px; //50px
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 19px;
  border-radius: 130px;
  background: $black-454040-100;

  &:hover {
    background: linear-gradient(180deg, $red-450b0b, $black-210000);

    .counter {
      border: 1px solid $white;
      background: linear-gradient(
        180deg,
        $black-2800004d-19,
        $red-f500004d-100
      );
    }

    .button-custom {
      background: linear-gradient($red-531919, $red-531919, $black-262020);
    }

    .button-custom:first-child:disabled {
      background: $black-2f0000;
    }
  }

  &:focus {
    background: linear-gradient(180deg, $black-1b1818-100);

    .counter {
      border: 1px solid $white;
      background: linear-gradient(
        180deg,
        $black-0000004d,
        $black-0000004d,
        $red-f500004d-100
      );
    }

    .button-custom {
      background: linear-gradient($black-262020, $black-262020);
    }
  }

  &:active {
    .counter {
      border: 1px solid $white;
    }

    .button-custom:active {
      background: $black-2f0000;
    }
  }
}

.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white;
  border: 1px solid $white;
  font-family: $primary-font;
  font-size: 24px; //24px
  font-weight: 700;
  line-height: 32px; //18px
  letter-spacing: 0%;
  text-align: center;
  max-width: 50px; //50px
  min-width: 50px; //50px
  min-height: 50px; //50px
  border-radius: 79px;
  background: linear-gradient(180deg, $black-2800004d-19, $red-f500004d-100);
}

@media screen and (min-width: $desktop-min) {
  .button-custom {
    padding: 8px;
    border-radius: 22px;
    max-width: 100px; //100px
    min-height: 80px; //80px

    &::after {
      min-width: 75px;
      min-height: 8px;
    }

    &:last-child::before {
      min-width: 8px;
      min-height: 75px;
    }
  }

  .button {
    max-width: 440px;
    min-height: 100px;
  }

  .counter {
    font-size: 48px;
    line-height: 18px;
    max-width: 100px;
    min-width: 100px;
    min-height: 100px;
  }
}
</style>
