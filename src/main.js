import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'

Vue.use(VueRouter)
Vue.use(VueI18n)

// i18n
import en_translation from './i18n/en.json' // 存放英文翻譯
import tc_translation from './i18n/tc.json' // 存放繁體中文翻譯
import sc_translation from './i18n/sc.json' // 存放簡體中文翻譯

/* webpack config 檔不給寫 comment QQ */
/* 記得在 package.json 檔加上這行設定，--host 192.168.0.110，否則 mobile 連不進去 */
/* 但一般還是維持原設定即可 0.0.0.0 */

import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import HowItWorks from './pages/HowItWorks.vue'

// console.log(App.components.HeaderComponent.data)

// Ready translated locale messages
const messages = {
  en: {
    message: en_translation
  },
  tc: {
    message: tc_translation
  },
  sc: {
    message: sc_translation
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'tc', // set locale
  messages // set locale messages
})

const router = new VueRouter({
  // 使用 HTML 5 模式
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/en/about',
      name: 'en.about',
      component: About
    },
    {
      path: '/tc/about',
      name: 'tc.about',
      component: About
    },
    {
      path: '/sc/about',
      name: 'sc.about',
      component: About
    },
    {
      path: '/en/how-it-works',
      name: 'en.howItWorks',
      component: HowItWorks
    },
    {
      path: '/tc/how-it-works',
      name: 'tc.howItWorks',
      component: HowItWorks
    },
    {
      path: '/sc/how-it-works',
      name: 'sc.howItWorks',
      component: HowItWorks
    },
    // 似乎會有引入順序的關係，
    // 不存在的路由將會導入到 /hello 這個 component
    {
      path: '/*',
      redirect: '/'
    }
  ],
  // 切換頁面時會無法滾動到最上面
  // Vue-router 已經提供官方解決辦法
  // https://router.vuejs.org/en/advanced/scroll-behavior.html
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

var vm = new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
