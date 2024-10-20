// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/svg-sprite'],
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
        drop: ['console'], // This will remove console logs in production
      },
    },
  },
  features: {
    devLogs: false, // Disable development logs
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
          api: 'modern',
          silenceDeprecations: ['import', 'global-builtin'],
          additionalData: '@use "@/assets/styles/_variables.scss" as *;',
        },
      },
    },
  },
})
