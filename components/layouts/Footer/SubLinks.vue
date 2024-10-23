<template>
  <ul class="list list-style-none">
    <li class="item" v-for="link in links">
      <NuxtLink class="link" to="link.path">{{ link.link }}</NuxtLink>
      <SubLinks
        class="sub-link"
        :links="link.subLinks"
        v-if="isSubLink && link.subLinks"
        :class="{ 'sub-link-active': isSubLink }"
      />
    </li>
  </ul>
</template>
<script setup>
const props = defineProps({
  links: {
    type: Object,
    required: false,
  },
  isSubLink: {
    type: Boolean,
    default: false,
  },
})
</script>
<style scoped lang="scss">
.sub-link-active {
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  margin-left: 39px - 8px - 4px;
  border-left: 4px solid #ffffff;
  position: relative;

  &::after,
  &::before {
    content: '';
    position: absolute;
  }

  &::after {
    width: 14px;
    height: 14px;
    top: -5px;
    left: -29px;
    background-color: #ffffff;
    border-radius: 50%;
  }

  &::before {
    width: 26px;
    height: 4px;
    top: 0;
    left: -29px;
    background-color: #ffffff;
  }
}

.item {
  display: flex;
  flex-direction: column;
}

.item .link {
  padding-bottom: 10px;
}
</style>
