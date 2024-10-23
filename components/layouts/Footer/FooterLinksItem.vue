<template>
  <li class="item grid-template-col wrapper" v-for="(link, index) in links">
    <button
      class="btn"
      type="button"
      @click="toggleActive(index)"
      :class="{ active: activeStates[index] }"
    >
      <span class="visually-hidden">Открыть меню</span>
    </button>
    <h2 class="item-title m-0">{{ link.title }}</h2>
    <SubLinks class="sub-link" :links="link.links" isSubLink />
  </li>
</template>
<script setup>
import SubLinks from '@/components/layouts/Footer/SubLinks.vue'
import { ref } from 'vue'

const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
})

const activeStates = ref(Array(props.links.length).fill(false))

const toggleActive = (index) => {
  activeStates.value[index] = !activeStates.value[index]
}
</script>
<style scoped lang="scss">
.wrapper {
  row-gap: 24px;
  align-items: center;
  font-family: 'DINPRO', 'Arial', sans-serif;
  font-size: 16px;
  line-height: 20px;
}

.item-title {
  font-size: 24px;
  line-height: 30px;
  margin-left: -30px + 8px;
  grid-column: 2/ -1;

  @media screen and (min-width: 768px) {
    grid-column: 2 / 4;
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
}

.sub-link {
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;

  @media screen and (min-width: 768px) {
    grid-column: 1 / 4;
  }
}
</style>
