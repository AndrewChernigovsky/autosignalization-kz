<template>
  <li
    class="item grid-template-col wrapper"
    v-for="(link, index) in links"
    :key="index"
  >
    <div class="wrapper-title">
      <button
        class="btn"
        type="button"
        @click="toggleActive(index)"
        :class="{ active: activeStates[index].isActive }"
      >
        <span class="visually-hidden">Открыть меню</span>
      </button>
      <h2 class="item-title m-0">{{ link.title }}</h2>
    </div>

    <SubLinks
      v-if="activeStates[index].isActive || isWideScreen"
      class="sub-link"
      :links="link.links"
      isSubLink
    />
  </li>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SubLinks from '@/components/layouts/Footer/SubLinks.vue'

const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
})

const activeStates = ref(props.links.map(() => ({ isActive: false })))
const isWideScreen = ref(false) // Состояние для ширины экрана

const toggleActive = (index) => {
  activeStates.value[index].isActive = !activeStates.value[index].isActive
}

const updateScreenSize = () => {
  isWideScreen.value = window.innerWidth >= 768
}

onMounted(() => {
  updateScreenSize() // Установить начальное значение
  window.addEventListener('resize', updateScreenSize) // Добавить слушатель события изменения размера
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenSize) // Удалить слушатель при размонтировании
})
</script>
<style scoped lang="scss">
.wrapper {
  row-gap: 24px;
  align-items: center;
  font-family: 'DINPRO', 'Arial', sans-serif;
  font-size: 16px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 30px;
    display: block;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 14px;
      height: 14px;
      background-color: #fff;
      right: -45px;
      top: 0;
      border-radius: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      width: 4px;
      height: 100%;
      background-color: #fff;
      top: 0px;
      right: -40px;
    }

    &:last-child {
      &::after,
      &::before {
        content: none;
      }
    }
  }
}

.wrapper-title {
  grid-column: 1/ -1;
  display: grid;
  grid-template-columns: 48px repeat(3, minmax(48px, 70px));
  column-gap: 10px;
  align-items: center;
  position: relative;

  &::after,
  &::before {
    content: '';
    position: absolute;
    background-color: #ffffff;
  }

  &::after {
    width: 256px;
    height: 4px;
    bottom: -17px;
  }

  &::before {
    width: 14px;
    height: 14px;
    bottom: -22px;
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    &::after,
    &::before {
      content: none;
    }

    &::after {
      width: 4px;
      height: 100%;
      top: 0;
      right: -27px;
    }

    &::before {
      width: 14px;
      height: 14px;
      bottom: -22px;
      border-radius: 50%;
    }
  }
}

.item-title {
  font-size: 24px;
  line-height: 30px;
  grid-column: 2/ -1;

  @media screen and (min-width: 768px) {
    grid-column: 1/ -1;
    margin-bottom: 20px;
  }
}

.btn {
  display: block;
  width: 48px;
  height: 48px;
  background-image: linear-gradient(180deg, #280000 0, #ff0000 100%);
  border-radius: 5px;
  border: 1px solid #c9c9c9;
  position: relative;
  padding: 0;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    mask-image: url('@/assets/arrow.svg');
    mask-size: 27px 15px;
    mask-repeat: no-repeat;
    mask-position: center;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  &.active::before {
    transform: rotate(180deg);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
}

.sub-link {
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  position: relative;

  @media screen and (min-width: 768px) {
    grid-column: 1 / 4;
  }
}

/* Анимация */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease; /* Плавный переход */
}
.fade-enter, .fade-leave-to /* .fade-leave-active в <2.1.8 */ {
  opacity: 0; /* Начальное состояние */
}
</style>
