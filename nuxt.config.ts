// https://nuxt.com/docs/api/configuration/nuxt-config
/*
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/sanity']
})
*/

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'robots', content: 'noindex' }
      ],
      title: "Teekkarien Autokerho",
    }
  },
  modules: [
    '@nuxtjs/sanity',
    /*
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: [500, 700, 800],
          'Racing Sans One': [400, 700],
          download: true,
          inject: true,
        },
      },
    ],
    */
    '@nuxt/fonts',
    
  ],
  nitro: {
    prerender: {
      ignore: ["/404"],
    },
  },
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    useCdn: false, 
    apiVersion: process.env.NUXT_SANITY_API_VERSION || '2024-03-15',
    visualEditing: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL || 'http://localhost:3333',
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      stega: true,
    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
      'postcss-nested': {},
    },
  },
  compatibilityDate: '2024-12-17',
})