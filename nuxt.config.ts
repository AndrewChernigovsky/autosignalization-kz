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
  plugins: ['~/plugins/global-components.ts'],
  components: {
    global: true,
    dirs: ['~/components/UI'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/styles.scss";', // Автоматически импортировать переменные в каждый компонент
        },
      },
    },
  },
})
