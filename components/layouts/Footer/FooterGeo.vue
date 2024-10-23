<template>
  <div class="geo-container">
    <ul class="geo-list list-style-none">
      <li class="geo-item" v-for="geo in geoLocations">
        <a class="geo-link link" :href="geo.locationUrl">{{ geo.addreses }}</a>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useGeoLocationStore } from '@/stores/geo'

const { getGeo } = useGeoLocationStore()

const geoLocations = getGeo()
</script>
<style scoped lang="scss">
.geo-container {
  grid-column: 1 / -1;

  @media screen and (min-width: 768px) {
    grid-column: 4 / 7;
    align-self: center;
  }

  @media screen and (min-width: 1440px) {
    grid-column: 5 / 9;
    grid-row: 2 / 3;
    align-self: center;
  }
}

.geo-list {
  display: flex;
  flex-direction: column;
}

.geo-link {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::before,
  &::after {
    display: block;
    mask-image: url('@/assets/icons/geo.svg');
    width: 30px;
    height: 30px;
    mask-repeat: no-repeat;
    mask-size: 30px;
    mask-position: center;
    background-color: #ff0000;
  }

  &::before {
    content: '';
  }

  @media screen and (min-width: 1440px) {
    &::after {
      content: '';
      width: 40px;
      height: 40px;
      mask-size: 40px;
    }

    &::before {
      content: none;
    }
  }
}
</style>
