// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Ahmad Yunus Blog|Portofolio',
      // favicon: '~/public/favicon.svg',
      bodyAttrs: {
        class: 'bg-slate-900 text-gray-100'
      }
    }
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/robots', 'nuxt-simple-sitemap']
})
