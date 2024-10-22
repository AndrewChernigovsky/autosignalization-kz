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
}

.geo-list {
  display: flex;
  flex-direction: column;
}

.geo-link {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::before {
    content: '';
    display: block;
    mask-image: url('@/assets/icons/geo.svg');
    width: 30px;
    height: 30px;
    mask-repeat: no-repeat;
    mask-size: 30px;
    mask-position: center;
    background-color: #ff0000;
  }
}
</style>
