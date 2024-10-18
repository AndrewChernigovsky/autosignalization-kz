// stores/footerNavigation.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { LinksType } from '@/types/FooterLinksType'

export const useFooterNavigationStore = defineStore('footerNavigation', () => {
    const footerLinks = ref<LinksType[]>([
        {
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
                }
        ]
        }
])

    function getLinks() {
        return footerLinks.value
    }

    return {
        footerLinks,
        getLinks
    }
})