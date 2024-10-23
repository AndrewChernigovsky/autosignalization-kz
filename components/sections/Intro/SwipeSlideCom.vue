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
      <source
        v-for="(source, index) in video.src"
        :key="index"
        :src="source"
        :type="video.type[index]"
      />
      Ваш браузер не поддерживает тег video.
    </video>
    <div class="container content">
      <h1 v-if="isVisible && props.content">
        {{ props.content[videoIndex].title }}
      </h1>
      <br />
      <TransitionScale :scale="0.8" origin="top right" name="slide-scale">
        <ul
          class="list-slide list-style-none"
          v-if="isVisible && props.content"
        >
          <li
            v-for="(item, index) of props.content[videoIndex].list"
            :key="item + index"
          >
            {{ item }}
          </li>
        </ul>
      </TransitionScale>
      <div v-for="btn of 3">
        <YButton :ytype="ButtonsEnum.primary">Подробнее</YButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { SlideType } from '~/types/SlideType'
import { ButtonsEnum } from '~/enums/ButtonsEnum'
import { TransitionScale } from '@morev/vue-transitions'

const emits = defineEmits(['updateVisibility'])

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

onMounted(() => {
  if (videoPlayer.value) {
    isVisible.value = !isVisible.value
    videoPlayer.value.play()
  }
})

onUnmounted(() => {
  if (videoPlayer.value) {
    videoPlayer.value.pause()
  }
})

watch(
  () => props.activeSlideIndex,
  (newIndex) => {
    if (newIndex === props.videoIndex) {
      update()
    }
  },
)
function update() {
  isVisible.value = !isVisible.value
}
</script>

<style lang="scss" scoped>
.slide-scale-enter-active,
.slide-scale-leave-active {
  transition: all 2.5s ease;
}

.slide-scale-enter,
.slide-scale-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.content {
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: inherit;
  gap: 10px;
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
  box-shadow: inset 60px -120px 100px black;
}

.swiper-slide video {
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
</style>
