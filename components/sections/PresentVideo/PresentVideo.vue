<template>
  <div class="present-video">
    <video muted loop autoplay class="first">
      <source :src="videoWebm" type="video/webm" />
      <source :src="video" type="video/mp4" />
    </video>
    <video muted loop autoplay class="second">
      <source :src="videoWebm" type="video/webm" />
      <source :src="video" type="video/mp4" />
    </video>
    <div class="text">
      <div class="container">
        <h3>
          АВТОРИЗИРОВАННЫЙ ПАРТНЕР <br />
          | STARLINE
        </h3>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import video from '@/assets/videos/present-video.mp4'
import videoWebm from '@/assets/videos/present-video.webm'
</script>
<style lang="scss" scoped>
.present-video {
  position: relative;
  display: flex;
  justify-content: center;
  background-image: url('@/assets/videos/screen-present.png');

  video {
    width: 100%;
    @media screen and (min-width: $desktop-min) {
      width: 60%;
    }
  }

  .first {
    position: relative;
    z-index: 1;
  }

  .second {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    object-fit: cover;
    filter: blur(10px);
  }
}
.text {
  position: absolute;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 100px;
  display: grid;
  align-items: center;
  background: linear-gradient(black, rgba(0, 0, 0, 0.5));

  @media screen and (min-width: $desktop-min) {
    height: 200px;
  }

  h3 {
    color: $white;
    position: relative;
    padding-left: 60px;
    font-family: $primary-font;
    font-weight: 400;

    @media screen and (min-width: $desktop-min) {
      padding-left: 160px;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 60px;
      height: 60px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url('@/assets/icons/shield.svg');

      @media screen and (min-width: $desktop-min) {
        width: 150px;
        height: 150px;
      }
    }
  }
}
</style>
