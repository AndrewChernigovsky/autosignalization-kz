// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  runtimeConfig: {
    DB_NAME: process.env.DB_NAME,
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
})
