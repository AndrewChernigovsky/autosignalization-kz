<template>
  <div class="marquee">
    <ul class="marquee-content list">
      <li
        class="image-container item"
        v-for="(image, index) in images"
        :key="index"
      >
        <div class="flex">
          <NuxtPicture format="avif, webp" :src="image.image" loading="lazy" />
        </div>
      </li>
      <li
        class="image-container item"
        v-for="(image, index) in images"
        :key="'duplicate-' + index"
      >
        <div class="flex">
          <NuxtPicture format="avif, webp" :src="image.image" loading="lazy" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  images: {
    type: Array as () => {
      id: string
      image: string
      title: string
    }[],
    required: true,
  },
})
</script>

<style scoped>
.list {
  display: flex;
  gap: 30px;
  overflow: hidden;
}

.item {
  background-color: white;
  padding: 30px;
  border-radius: 30px;
  min-width: 200px;
  min-height: 200px;
  max-width: 300px;
  max-height: 300px;

  @media screen and (min-width: 768px) {
    min-width: 300px;
    min-height: 300px;
    & .image {
      width: 240px;
      height: 240px;
    }
  }
}
.marquee {
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
}

.marquee-content {
  display: inline-block;
  animation: marquee 120s linear infinite;
}

.image-container {
  display: inline-block;
  margin-right: 20px;
}

@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
