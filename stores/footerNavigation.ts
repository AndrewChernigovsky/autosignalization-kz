// stores/footerNavigation.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { FooterLinksType } from '@/types/FooterLinksType'

export const useFooterNavigationStore = defineStore('footerNavigation', () => {
    const footerLinks = ref<FooterLinksType[]>([
        {
        title: 'МАГАЗИН',
        path: '#',
        subLinks: [{
            title: 'Автосигнализации',
            path: '#',
            subLinks: [
                {
                title: 'Автосигнализации с автозапуском',
                path: '#'
            },
                {
                title: 'Автосигнализации с GSM',
                path: '#'
            },
        ]
        },
        {
            title: 'Парковочные системы',
            path: '#'
        },
        {
            title: 'Прайс на материал и установку',
            path: '#'
        },
    ]
    },
        {
        title: 'УСТАНОВОЧНЫЙ ЦЕНТР',
        path: '#',
        subLinks: [{
            title: 'Установка и ремонт сигнализаций',
            path: '#',
        },
        {
            title: 'Ремонт центрозамков',
            path: '#'
        },
        {
            title: 'Установка автозвука и мультимедиа',
            path: '#'
        },
        {
            title: 'Установка систем паркинга',
            path: '#'
        },
    ]
    }
]) 
})