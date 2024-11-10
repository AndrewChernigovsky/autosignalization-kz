// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/svg-sprite',
    '@morev/vue-transitions/nuxt',
    'nuxt-swiper',
    '@nuxt/image',
    '@nuxt/image-edge',
  ],
  swiper: {
    modules: ['autoplay', 'effect-fade', 'navigation', 'pagination', 'thumbs'],
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
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    formats: ['avif', 'webp'],
    lazy: true,
    dir: 'public/images',
    domains: ['andrey-andreevich.ru'],
    provider: 'ipx',
  },
})
