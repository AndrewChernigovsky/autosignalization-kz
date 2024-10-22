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
          path: '',
          subLinks: [
            {
              link: 'Автосигнализации с автозапуском',
              path: '',
            },
            {
              link: 'Автосигнализации с GSM',
              path: '',
            },
            {
              link: 'Автосигнализации без автозапуска',
              path: '',
            },
            {
              link: 'Каталог автосигнализаций Starline',
              path: '',
            },
            {
              link: 'Пульты и аксессуары',
              path: '',
            },
          ],
        },
        {
          link: 'Парковочные системы',
          path: '',
        },
        {
          link: 'Прайс на материал и установку',
          path: '',
        },
      ],
    },
    {
      title: 'УСТАНОВОЧНЫЙ ЦЕНТР',
      links: [
        {
          link: 'Установка и ремонт сигнализаций',
          path: '',
        },
        {
          link: 'Ремонт центрозамков',
          path: '',
        },
        {
          link: 'Установка систем паркинга',
          path: '',
        },
        {
          link: 'Услуги автоэлектрика',
          path: '',
        },
        {
          link: 'Русификация авто и чиптюнинг',
          path: '',
        },
        {
          link: 'Отключение сигнализации',
          path: '',
        },
        {
          link: 'Установка видеорегистраторови антирадаров',
          path: '',
        },
        {
          link: 'Прайс на услуги',
          path: '',
        },
      ],
    },
    {
      title: 'КЛИЕНТУ',
      links: [
        {
          link: 'Специальные предложения',
          path: '',
        },
        {
          link: 'Корзина заказа',
          path: '',
        },
        {
          link: 'Оставить отзыв',
          path: '',
        },
        {
          link: 'Галерея выполненных работ',
          path: '',
        },
        {
          link: 'Как к нам добраться',
          path: '',
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
