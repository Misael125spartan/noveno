export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  // ESTA LÍNEA ES LA QUE CARGA TU LLUVIA:
  css: ['~/assets/css/main.css'],
  
  // Agrega esta nueva línea para registrar VueUse:
  modules: [
    '@vueuse/nuxt'
  ]
})