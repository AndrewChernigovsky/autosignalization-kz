<template>
  <div :class="menuClasses">
    <button type="button" :class="btnMenuClasses" @click="toggleMenu">
      <span class="visually-hidden">Открыть меню</span>
    </button>
    <transition-fade name="slide-fade">
      <div class="menu-wrapper" v-if="isVisible">
        <div class="menu-btns">
          <Search />
        </div>
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item" v-for="link in navLinks" :key="link.path">
              <nuxt-link
                class="nav-link"
                :to="link.path"
                active-class="active"
                exact-active-class="exact-active"
              >
                {{ link.name }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="contacts">
          <Geo :width="30" :height="30" />
          <Phone />
        </div></div
    ></transition-fade>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useNavigationStore } from '@/stores/navigation'
import type { NavigationLinksType } from '~/types/NavigationLinksType'
import Geo from '@/components/Geo/Geo.vue'
import Phone from '@/components/Phone/Phone.vue'
import { TransitionFade } from '@morev/vue-transitions'
const navLinks = ref<NavigationLinksType[]>([])
const isVisible = ref<Boolean>(false)
const emit = defineEmits(['isVisible'])

const btnMenuClasses = computed(() =>
  isVisible.value ? 'menu-btn menu-btn--closed' : 'menu-btn',
)
const menuClasses = computed(() =>
  isVisible.value ? 'menu menu--opened' : 'menu',
)

const navigationStore = useNavigationStore()

const getNavLinks = () => {
  return navigationStore.getNavigationLinks()
}

function toggleMenu() {
  isVisible.value = !isVisible.value
  emit('isVisible', isVisible.value)
}

onMounted(async () => {
  navLinks.value = getNavLinks()
})
</script>
<style lang="scss">
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    transform 0.8s ease,
    opacity 0.8s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave {
  transform: translateX(0);
  opacity: 1;
}

.nav {
  padding-right: 10px;
  flex-grow: 1;
}

.nav-list {
  display: grid;
  gap: 10px;
  justify-content: flex-end;
  list-style-type: none;
  max-width: inherit;
  text-align: right;
}

.nav-link {
  color: $white;
  text-decoration: none;
  text-transform: uppercase;
  padding-bottom: 5px;
  transition: 0.3s ease-in-out;
  &:hover {
    border-bottom: 1px solid $white;
  }
}

.active {
  font-weight: bold;
}

.exact-active {
  border-bottom: 1px solid $white;
}

.menu {
  &--opened {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    min-height: 100vh;
    min-width: 100%;
    overflow-y: scroll;

    .menu-wrapper {
      padding: 10px;
    }

    .menu-btn {
      margin-top: 25px;
    }
  }
}

.menu-wrapper {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.menu-btn {
  width: 50px;
  height: 50px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  margin-left: auto;

  &::after {
    content: '';
    position: absolute;
    bottom: 23px;
    left: 10px;
    height: 3px;
    width: 30px;
    background-color: $red;
    box-shadow:
      0 6px 0 $red,
      0 -6px 0 $red;
    z-index: 10;
  }

  &--closed {
    align-self: flex-start;

    &::after {
      box-shadow: none;
      transform: rotate(-45deg);
      background-color: $white;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: 23px;
      left: 11px;
      height: 3px;
      width: 30px;
      background-color: $white;
      transform: rotate(45deg);
      z-index: 10;
    }
  }
}

.menu-btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.menu-wrapper {
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(#272020, #09090b);
  position: absolute;
  top: 0;
  left: 0;
}
</style>
