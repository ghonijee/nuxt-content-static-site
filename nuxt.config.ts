// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      title: 'Ahmad Yunus Afghoni',
      meta: [{ name: 'description', content: 'Personal site blog and portofolio. Sharing terkait dunia software engineer dan teknologi dalam pengembangan aplikasi, baik mobile, web, maupun backend.' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      bodyAttrs: {
        class: 'bg-slate-900 text-gray-100'
      }
    }
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/robots', 'nuxt-simple-sitemap'],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
