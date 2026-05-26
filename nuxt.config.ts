import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
   modules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      'Nunito': [900]
    }
  },



  compatibilityDate: '2026-05-25',
  devtools: { enabled: true },

  css: ['~/assets/css/tailwind.css'],

  alias: {
    '@': '/app'
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/fonts'
  ],

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true
    },
    optimizeDeps: {
      include: ['@lucide/vue', 'reka-ui']
    }
  }
   
  
})