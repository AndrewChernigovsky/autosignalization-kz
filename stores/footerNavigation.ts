// stores/footerNavigation.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { FooterLinksType } from '@/types/FooterLinksType'

export const useFooterNavigationStore = defineStore('footerNavigation', () => {
    const footerLinks = ref<FooterLinksType[]>([
        {
            title: 'Автосигнализации',
            path: '#',
            subLinks: [
                {
                title: 'Автосигнализации с автозапуском',
                path: '#',
                },
                {
                title: 'Автосигнализации с GSM',
                path: '#',
                subLinks: [
                    {
                        title: 'Name',
                        path: '#'
                    }
                ]
                }
        ]
        },
        {
            title: 'Парковочные системы',
            path: '#',
            subLinks: [{
                title: 'name',
                path: '#',
                subLinks: [{
                    title: 'pizda',
                    path: 'ss'
                }]
            }]
        }
])

    function setFooterLink(newLink:FooterLinksType) {
        footerLinks.value.push(newLink);
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