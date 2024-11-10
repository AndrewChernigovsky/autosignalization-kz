<template>
  <div class="page-container">
    <div class="container">
      <section class="autosygnals">
        <h1 class="main-title m-0">Автосигнализации</h1>
        <ul class="list" v-if="autosygnalsTypes">
          <li class="item" v-for="item in autosygnalsTypes">
            <h2 class="item-title">{{ item.name }}</h2>
            <p class="count">{{ item.count }}</p>
            <button class="btn" type="button">В раздел</button>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">


const autosygnalsTypes = ref()

onMounted(async () => {

})
</script>
<style lang="scss"></style>
