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
  site: {
    url: 'https://teekkarienautokerho.fi',
    name: 'Teekkarien Autokerho'
  },
  app: {
    head: {
      title: "Teekkarien Autokerho",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'description', name: 'description', content: 'Autokerholla rakennetaan ja korjataan jäsenistön autoja, tehdään excursioita, saunotaan millä-milloin-missäkin, järjestetään tapahtumia ja osallistutaan opiskelijarientoihin.' },
        { key: 'og-title', property: 'og:title', content: 'Teekkarien Autokerho'},
        { key: 'og-type', property: 'og:type', content: 'website' },
        { key: 'og-image', property: 'og:image', content: '/TAK_og_image.jpg'},
        { key: 'og-description', property: 'og:description', content: 'Autokerholla rakennetaan ja korjataan jäsenistön autoja, tehdään excursioita, saunotaan millä-milloin-missäkin, järjestetään tapahtumia ja osallistutaan opiskelijarientoihin.'},
        { key: 'og-locale', property: 'og:locale', content: 'fi_FI' },
        { key: 'og-url', property: 'og:url', content: 'https://teekkarienautokerho.fi/' },
        { key: 'og-logo', property: 'og:logo', content:'/tak_logo.svg'}
      ],
    }
  },
  modules: ['@nuxtjs/sanity', '@nuxt/fonts', '@nuxtjs/sitemap'],
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