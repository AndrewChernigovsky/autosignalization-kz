<template>
	<div class="container">
		<Header />
		<main class="main">
			<NuxtPage />
		</main>
		<Footer />
		<h2>wewe</h2>
	</div>
</template>
<script setup>
import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue';
</script>
<style lang="scss">
@use '~/assets/scss/main.scss';
</style>
