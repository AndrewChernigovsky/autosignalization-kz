import { defineNuxtPlugin } from '#app'
import * as components from '~/components/UI/index'

export default defineNuxtPlugin((nuxtApp) => {
  Object.entries(components).forEach(([name, component]) => {
    nuxtApp.vueApp.component(name, component)
  })
})
