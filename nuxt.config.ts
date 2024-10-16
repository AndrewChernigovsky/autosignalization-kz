// https://nuxt.com/docs/api/configuration/nuxt-config
import svgomgConfig from "./svgomg.config"

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/svg-sprite'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  svgSprite: {
    input: '~/assets/images/sprites',
    output: '~/assets/images/sprite',
    defaultSprite: 'sprite',
    svgo: svgomgConfig,
  },
  runtimeConfig: {
    DB_NAME: process.env.DB_NAME,
  },
  // plugins: ['~/plugins/global-components.ts'],
  components: {
    global: true,
    dirs: ['~/components/UI'],
  },
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_variables.scss" as *;',
        },
      },
    },
  },
})
