export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'VoteApp',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/moment-filter.js',
    '@/plugins/common.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
  ],

  axios: {
    baseURL: process.env.API_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment'
  ],

  moment: {
    locales: ['ja']
  },
  

  //これ不要かも
  publicRuntimeConfig: {
    apiURL: process.env.API_URL|| "http://localhost:3000",
  }
}
