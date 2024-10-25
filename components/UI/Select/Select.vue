<template>
    <div class="select" :data-state="isActive ? 'active' : ''">
        <div class="select__title" @click="toggleMenu"><span>{{ selectedLabel }}</span>
            <div class="select__menu" v-if="isActive">
                <div class="select__label" v-for="(label, index) in labels" :key="index" @click="selectLabel(label)">
                    {{ label }}
                </div>
            </div>
        </div>


    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const isActive = ref(false);
const selectedLabel = ref('Выберите опцию');
const labels = ref(['Главная', 'Услуги', 'Контакты']);

// Функция для переключения состояния меню
const toggleMenu = () => {
    isActive.value = !isActive.value;
};

// Функция для выбора опции
const selectLabel = (label: string) => {
    selectedLabel.value = label;
    isActive.value = false; // Закрываем меню после выбора
};

</script>

<style lang="scss" scoped>
.select {
    position: relative;
}

.select__title {
    width: 203px;
    height: 27px;
    cursor: pointer;
    padding-top: 3px;
    padding-bottom: 2px;
    padding-left: 12px;
    padding-right: 28px;
    background-color: $white-c4c4c4-05;
    color: $white;
    font-family: $pimary-font;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: center;
    border-radius: 20px;

    &:hover {
        background-color: $white-6b6767-05;
        font-weight: 700;
    }

    &:focus {
        border: 1px solid rgb(255, 255, 255);
        background-color: $black-1f1a1a-05;
        font-weight: 700;
    }

}

.select__menu {
    width: inherit;
    left: 0;
    position: absolute;
    background-color: $white-c4c4c4-05;
    color: $white;
    border-radius: 0 0 20px 20px;
    cursor: pointer;
    font-weight: 700;
}

.select__label {
    padding: 10px;
}

.select__label:hover {
    background-color: rgb(77, 75, 75);

    &:last-child {
        border-radius: 0 0 20px 20px;
    }
}
</style>