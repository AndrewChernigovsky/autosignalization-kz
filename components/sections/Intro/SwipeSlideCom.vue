<template>
  <div class="swiper-slide">
    <video
      preload="auto"
      autoplay
      loop
      muted
      :poster="video.poster"
      ref="videoPlayer"
    >
      <template v-if="viewportWidth < 768">
        <source :src="video.srcMob" :type="video.type[0]" />
      </template>
      <template v-else>
        <source
          v-for="(source, index) in video.src"
          :key="index"
          :src="source"
          :type="video.type[index]"
        />
      </template>

      Ваш браузер не поддерживает тег video.
    </video>
    <div class="container content">
      <TransitionScale
        :scale="0.8"
        name="slide-scale"
        :duration="1500"
        :easing="{
          enter: 'cubic-bezier(0.6, 0, 0.4, 2)',
          leave: 'ease-out',
        }"
      >
        <h2 v-if="isVisible && props.content">
          {{ props.content[videoIndex].title }}
        </h2>
      </TransitionScale>
      <ul class="list-slide list-style-none" v-if="props.content">
        <li v-for="(item, index) in props.content[videoIndex].list">
          <TransitionScale
            :scale="0.8"
            :duration="1000 * index"
            :easing="{
              enter: 'cubic-bezier(0.6, 0, 0.4, 2)',
              leave: 'ease-out',
            }"
            name="left-to-right"
            mode="out-in"
          >
            <span class="advantages-text" v-if="isVisible">{{ item }}</span>
          </TransitionScale>
        </li>
      </ul>
      <div class="button">
        <YButton :ytype="ButtonsEnum.simple" :btn="false" :path="'#'"
          >Подробнее</YButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import type { SlideType } from '~/types/SlideType'
import { ButtonsEnum } from '~/enums/ButtonsEnum'
import { TransitionScale } from '@morev/vue-transitions'

const props = defineProps({
  video: {
    type: Object,
    required: true,
  },
  content: {
    type: Array as () => SlideType[],
  },
  videoIndex: {
    type: Number,
    required: true,
  },
  activeSlideIndex: {
    type: Number,
  },
})

const isVisible = ref(false)
const videoPlayer = ref<HTMLVideoElement | null>(null)
const viewportWidth = ref(0)
const updateViewportWidth = () => {
  viewportWidth.value = window.innerWidth
}

onMounted(() => {
  if (videoPlayer.value) {
    isVisible.value = !isVisible.value
    videoPlayer.value.play()
  }
  updateViewportWidth()
  window.addEventListener('resize', updateViewportWidth)
})

onUnmounted(() => {
  if (videoPlayer.value) {
    isVisible.value = true
    videoPlayer.value.pause()
  }
  window.removeEventListener('resize', updateViewportWidth)
})

watch(
  () => props.activeSlideIndex,
  (newIndex) => {
    if (newIndex === props.videoIndex) {
      isVisible.value = true
    } else {
      isVisible.value = false // Hide when this slide is not active
    }
  },
)
</script>

<style lang="scss" scoped>
.advantages-text {
  font-size: 24px;
  font-weight: 700;
  position: relative;
  padding-left: 50px;

  @media screen and (min-width: $desktop-min) {
    font-size: 48px;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url('@/assets/icons/aprove.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media screen and (min-width: $desktop-min) {
      width: 40px;
      height: 40px;
    }
  }
}

.button {
  position: absolute;
  bottom: 100px;
  z-index: 1;
  pointer-events: auto;
}

.content {
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 100px;
  width: inherit;
  gap: 10px;

  @media screen and (min-width: $desktop-min) {
    justify-content: center;
    margin-top: -50px;
    gap: 20px;
  }

  @media screen and (min-width: $desktop) {
    margin-top: -100px;
  }
}

.swiper-slide::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  top: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(black, #170f0f52);
  box-shadow: inset 60px -120px 100px rgba(47, 47, 47, 1);
}

.swiper-slide video {
  // filter: blur(5px);
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

h1,
h2,
li {
  color: $white;
}

.list-slide {
  min-height: 150px;
  display: grid;
  align-content: center;
  justify-items: flex-start;

  @media screen and (min-width: $desktop-min) {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
}

h2 {
  font-size: 24px;
  margin: 0;

  @media screen and (min-width: $desktop-min) {
    font-size: 64px;
  }
}
</style>
