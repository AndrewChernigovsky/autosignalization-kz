// stores/footerNavigation.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { FooterLinksListType } from '~/types/FooterLinksListType'

export const useFooterNavigationStore = defineStore('footerNavigation', () => {
  const footerLinks = ref<FooterLinksListType[]>([
    {
      title: 'МАГАЗИН',
      links: [
        {
          link: 'Автосигнализации',
          path: 'autosygnales',
          subLinks: [
            {
              link: 'Автосигнализации с автозапуском',
              path: `autosygnales/auto-start`,
            },
            {
              link: 'Автосигнализации с GSM',
              path: 'autosygnales/auto-gsm',
            },
            {
              link: 'Автосигнализации без автозапуска',
              path: 'autosygnales/no-auto-start',
            },
            {
              link: 'Каталог автосигнализаций Starline',
              path: 'autosygnales/catalog-starline',
            },
            {
              link: 'Пульты и аксессуары',
              path: 'autosygnales/accessories',
            },
          ],
        },
        {
          link: 'Парковочные системы',
          path: 'park-system',
        },
        {
          link: 'Прайс на материал и установку',
          path: 'autosygnales-price',
        },
      ],
    },
    {
      title: 'УСТАНОВОЧНЫЙ ЦЕНТР',
      links: [
        {
          link: 'Установка и ремонт сигнализаций',
          path: 'deploy-autosingals',
        },
        {
          link: 'Ремонт центрозамков',
          path: 'fix-locks',
        },
        {
          link: 'Установка систем паркинга',
          path: 'deploy-parksystem',
        },
        {
          link: 'Услуги автоэлектрика',
          path: 'service-electric',
        },
        {
          link: 'Русификация авто и чиптюнинг',
          path: 'russification-auto',
        },
        {
          link: 'Отключение сигнализации',
          path: 'shutdown-signals',
        },
        {
          link: 'Установка видеорегистраторови антирадаров',
          path: 'deploy-video-registration',
        },
        {
          link: 'Прайс на услуги',
          path: 'service-price',
        },
      ],
    },
    {
      title: 'КЛИЕНТУ',
      links: [
        {
          link: 'Специальные предложения',
          path: 'special',
        },
        {
          link: 'Корзина заказа',
          path: 'cart',
        },
        {
          link: 'Оставить отзыв',
          path: 'feedback',
        },
        {
          link: 'Галерея выполненных работ',
          path: 'gallery',
        },
        {
          link: 'Как к нам добраться',
          path: 'location',
        },
      ],
    },
  ])

  function setFooterLink(newLink: FooterLinksListType) {
    footerLinks.value.push(newLink)
  }

  function getLinks() {
    return footerLinks.value
  }

  return {
    footerLinks,
    getLinks,
    setFooterLink,
  }
})
