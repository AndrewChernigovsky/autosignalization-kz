<template>
    <li>
        <nuxt-link :to="links.path">{{links.title}}</nuxt-link>
        <ul v-if="links.subLinks && links.subLinks.length">
            <FooterLink 
            v-for="sublink in links.subLinks"
            :key="sublink.path"
            :link="sublink"
            />
        </ul>
    </li>
</template>
<script setup>

const link = defineProps({
    link: {
        type: Object,
        required: true
    }
})

const links = link.link;

console.log(links, 'link');


</script>
<style>
    
</style>