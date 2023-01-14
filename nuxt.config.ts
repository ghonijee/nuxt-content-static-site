// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: 'bg-slate-900 text-gray-100'
      }
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    [
      'nuxt-content-git',
      {
        createdAt: 'gitCreatedAt',
        updatedAt: 'gitUpdatedAt'
      }
    ]
  ]
})
