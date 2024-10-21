<template>
  <footer class="footer">
    <div class="container grid-template-col">
      <div class="logo-container">
        <a class="logo-link link" href="#">
          <img class="logo-img" src="@/assets/images/logo.png"
          alt="Логотип Auto security"
          width="122"
          height="84" />
          <p class="logo-text m-0">AUTO
            <br><span class="logo-text-special">SECURITY</span>
          </p>
        </a>        
      </div>
      <div class="social-container">
        <p class="social-description m-0">Социальные сети</p>
        <ul class="social-list list-style-none">
          <li class="social-item">
            <a class="social-link social-link-instagramm link" href="#">
              <svg width="20" height="20" aria-hidden="true">
                <use href="~/assets/sprite/sprite.svg#instagramm-icon"/>
              </svg>
              <span class="visually-hidden">Instagramm</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="phone-container">
        <ul class="phone-list list">
          <li class="phone-item">
            <a class="phone-link link" href="tel:77077478212">+7 707 747 8212</a>
          </li>
          <li class="phone-item">
            <a class="phone-link link" href="tel:77017478212">+7 701 747 8212</a>
          </li>
        </ul>
      </div>
      <div class="email-container">
        <ul class="email-list list">
          <li class="email-item">
            <a class="email-link link" href="email:autosecurity.kz@mail.ru">autosecurity.kz@mail.ru</a>
          </li>
        </ul>
      </div>
      <div class="home-container">
        <a class="home-link link" href="#">www.autosecurity.kz</a>
      </div>
      <div class="geo-container">
        <a class="geo-link link" href="#">Казахстан, Алматы, Щепеткова, 122</a>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { FooterLinksType } from '@/types/FooterLinksType';
import { useFooterNavigationStore } from '@/stores/footerNavigation'

const navLinks = ref<FooterLinksType[]>([])
const navigationStore = useFooterNavigationStore()

const getNavLinks = () => {
  return navigationStore.getLinks()
}
onMounted(async () => {
  navLinks.value = getNavLinks()
  console.log(navLinks.value, 'navlinks')
})

</script>
<style lang="scss">
  .footer {
    padding: 10px 0;
    color: #ffffff;
    background-image: linear-gradient(180deg, #121010 0, #0E0C0C 100%);
  }

  .logo-container {
    justify-self: center;
    grid-column: 1/ -1;
  }

  .logo-link {
    display: flex;
    column-gap: 11px;
    font-size: 34px;
    line-height: 42px;
    font-weight: 700;
  }

  .logo-text-special {
    color: #D10000;
  }

  .social-container {
    grid-column: 1/ 3;
  }

  .social-description {
    margin-bottom: 10px;
    font-family: 'Oswald', 'Arial', sans-serif;
    font-size: 16px;
    line-height: 22px;
    font-weight: 700;
  }

  .social-list {
    display: flex;
    flex-wrap: wrap;
  }
  
  .social-link {
    display: block;
  }
  
</style>