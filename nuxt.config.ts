// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/svg-sprite',
    '@morev/vue-transitions/nuxt',
    'nuxt-swiper',
  ],
  swiper: {
    modules: ['autoplay', 'effect-fade'],
  },
  vueTransitions: {
    componentDefaultProps: {
      TransitionExpand: {
        duration: 500,
      },
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  svgSprite: {
    input: '~/assets/icons',
    output: '~/assets/sprite',
    defaultSprite: 'sprite',
  },
  runtimeConfig: {
    DB_NAME: process.env.DB_NAME,
    nitroLoggingEnabled: false,
  },
  logLevel: 'silent',
  nitro: {
    esbuild: {
      options: {
        drop: ['console'],
      },
    },
  },
  features: {
    devLogs: false,
  },
  plugins: ['~/plugins/global-components.ts'],
  components: {
    global: true,
    dirs: ['~/components/UI'],
  },
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          silenceDeprecations: ['import', 'global-builtin'],
          additionalData: '@use "@/assets/styles/_variables.scss" as *;',
        },
      },
    },
  },
})
