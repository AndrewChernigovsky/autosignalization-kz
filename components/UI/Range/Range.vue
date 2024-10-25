<template>
  <div class="range-container">
    <p class="range-name">стоимость</p>
    <input class="range-input" type="range" id="myRange" min="19999" max="999999" v-model="value" />
    <div class="range-value">
      <input class="range-min-value" type="number" id="minValue" value="19999" min="19999" max="999999" />
      <input class="range-max-value" type="number" id="maxValue" :value="value" min="19999" max="999999" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<number>(999999)

// const rangeInput = document.getElementById('myRange');
//     const minValueInput = document.getElementById('minValue');
//     const maxValueInput = document.getElementById('maxValue');

//     // Обновление значений при изменении ползунка
//     rangeInput.addEventListener('input', () => {
//         const value = rangeInput.value;
//         minValueInput.value = Math.max(0, value - 10); // Пример для минимального значения
//         maxValueInput.value = Math.min(100, parseInt(value) + 10); // Пример для максимального значения
//     });

//     // Обновление ползунка при изменении полей
//     minValueInput.addEventListener('input', () => {
//         rangeInput.value = Math.max(minValueInput.value, 0);
//     });

//     maxValueInput.addEventListener('input', () => {
//         rangeInput.value = Math.min(maxValueInput.value, 100);
//     });
</script>
<style lang="scss" scoped>
.range-container {
  display: flex;
  width: 300px;
  flex-direction: column;
  gap: 12px;
  padding-left: 10px;
}

.range-name {
  color: $white;
  margin: 0;
  font-family: $secondary-font;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
  text-transform: uppercase;
}

.range-value {
  display: flex;
  gap: 20px;

  .range-min-value,
  .range-max-value {
    display: flex;
    align-items: center;
    justify-content: start;
    flex: 1;
    min-height: 34px;
    padding: 0;
    padding-left: 8px;
    color: $white;
    background-color: $black-2f2f2f;
    border: 1px solid $white;
    font-family: $primary-font;
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0%;
    border-radius: 0;
  }

  .range-min-value::-webkit-outer-spin-button,
  .range-min-value::-webkit-inner-spin-button,
  .range-max-value::-webkit-outer-spin-button,
  .range-max-value::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .range-min-value:focus,
  .range-max-value:focus {
    background-color: $black-5a5a5a;
    outline: none;
  }


  .range-min-value:hover,
  .range-max-value:hover {
    background-color: $black-5a5a5a;
  }

}

.range-input {
  margin: 0;
  appearance: none;
  height: 2px;
  background-color: $white-c4c4c4;
  accent-color: $white;

  &::-webkit-slider-thumb {
    appearance: none;
    background-color: $white;
    border-radius: 50%;
    width: 11px;
    height: 11px;
    transition:
      width 0.2s,
      height 0.2s;
  }

  &:hover {
    outline: none;
  }


  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
    box-shadow: 0 0 5px $white-c9c9c9;
  }
}
</style>
