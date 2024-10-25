<template>
    <div class="select" :data-state="isActive ? 'active' : ''">
        <div class="select__title" :style="{ borderRadius: isActive ? '20px 20px 0 0' : '20px' }" @click="toggleMenu">
            {{ selectedLabel }}
        </div>
        <div class="select__menu" v-if="isActive">
            <div class="select__label" v-for="(label, index) in labels" :key="index" @click="selectLabel(label)">
                {{ label }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref(false);
const selectedLabel = ref('Выберите опцию');
const labels = ref(['Главная', 'Услуги', 'Контакты']);
const emit = defineEmits(['option'])


const toggleMenu = (evt: any) => {
    // console.log(evt.target.textContent)
    isActive.value = !isActive.value;
};


const selectLabel = (label: string) => {
    selectedLabel.value = label;
    isActive.value = false;
    emit('option', label)
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
    text-align: center;


    border-radius: 20px;

    &:hover {
        background-color: $white-6b6767-05;
        font-weight: 700;
    }

    &:focus {
        border: 1px solid $white;
        background-color: $black-1f1a1a-05;
        font-weight: 700;
    }
}

.select__menu {
    width: 203px;
    position: absolute;
    background-color: $white-c4c4c4-05;
    color: $white;
    border-radius: 0 0 20px 20px;
    cursor: pointer;
}

.select__label {
    padding: 10px;

    &:hover {
        background-color: $black-4d4b4b;

        &:last-child {
            border-radius: 0 0 20px 20px;
        }
    }
}
</style>