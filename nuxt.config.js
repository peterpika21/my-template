module.exports = {
  // 'universal': 同構架構(Isomorphic)，有SSR+CSR(包含 client-side navigation)
  // 'spa': 僅有 CSR (包含 client-side navigation)
  mode: 'spa',
  // head 配置
  head: {
    titleTemplate: '自我練習',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '自我練習'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      }
    ]
  },
  // 預設 loading 進度條
  loading: {
    color: '#51b9ca'
  },
  // 项目里要使用的 SCSS 文件
  css: ['@/assets/css/main.scss'],
  // Nuxt.js 擴展
  modules: ['@nuxtjs/axios', 'nuxt-fontawesome'],

  // 客製化配置 nuxt 應用路由
  router: {
    // 配合 github deploy 用 /nuxt/ 記得改成專案資料夾名稱才能 deploy
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/nuxt/' : '',

    mode: 'history',
    routes: [
      {
        path: '*',
        component: '~/layouts/error.vue'
      }
    ]
  },
  // 配置 vue 插件
  // 預設是 SSR + CSR 環境都起作用，若你只需要 Browser 端執行，把 ssr 註記關掉
  plugins: [
    {
      src: '~/plugins/axios.js',
      ssr: false
    },
    {
      src: '~/plugins/font-awesome.js',
      ssr: false
    }
  ],
  fontawesome: {
    // icon 的標籤使用 <fa>，這邊不設定就會依照 plugin 裡的設定<font-awesome-icon>
    component: 'fa',
    imports: [
      // 引入 fas 所有的icon
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  // 專案建立時設定
  // this is necessary
  build: {
    extractCSS: true,
    /*
     ** 您可以在这里扩展webpack配置
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
