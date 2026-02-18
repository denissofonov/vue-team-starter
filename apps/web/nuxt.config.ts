export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/fonts', 'reka-ui/nuxt'],

  fonts: {
    defaults: {
      preload: true,
    },
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500] },
    ],
  },

  css: ['@vue-team-starter/tokens/index.css'],

  typescript: {
    strict: true,
    typeCheck: true,
  },

  compatibilityDate: '2025-01-01',
})
