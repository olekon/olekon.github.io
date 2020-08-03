export default {
    /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
    mode: 'universal',
    /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
    target: 'static',
    /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
    head: {
        title: 'Oleg Kondrakhanov - full stack developer',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
  ** Global CSS
  */  
    css: [
        '~/assets/styles/app.scss'
    ],
    /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
    plugins: [
        '~/plugins/i18n.js',
        '~/plugins/carousel.client.js',
    ],
    /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
    components: true,
    /*
  ** Nuxt.js dev-modules
  */
    buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
  ** Nuxt.js modules
  */
    modules: [
    // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        ['nuxt-i18n', {
            locales: [{
                name: 'Русский',
                code: 'ru',
                iso: 'ru-RU',
                file: 'ru-RU.js'
            },                {
                name: 'English',
                code: 'en',
                iso: 'en-US',
                file: 'en-US.js'
            }],
            vuex: {
                moduleName: 'i18n',
                syncLocale: true,                        
                syncMessages: false,          
            },
            lazy: true,
            langDir: 'lang/',
            strategy: 'prefix_except_default',
            defaultLocale: 'en'
        }]
    ],
    /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
    axios: {},
    /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
    build: {
        transpile: [
            'vue-markdown'
        ],
        extend(config, ctx) {
            if (ctx && ctx.isClient) {
                config.optimization.splitChunks.maxSize = 204800;
            }
            if (ctx.isDev) {
                config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map';
            }
        }
    }
};
