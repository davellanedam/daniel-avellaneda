import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import '@/plugins/vuetify'
import '@/plugins/common'
import App from '@/App.vue'
import { store } from '@/store'
import '@mdi/font/css/materialdesignicons.min.css'
import i18n from '@/i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueScrollTo from 'vue-scrollto'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.config.productionTip = false

// Use Google Analytics only in production mode
if (process.env.NODE_ENV === 'production') {
  Vue.use(VueAnalytics, {
    id: 'UA-137710319-1'
  })
}

Vue.use(VueScrollTo)

Vue.use(VueObserveVisibility)

new Vue({
  store,
  i18n,
  render: h => h(App),
  created() {
    store.dispatch('setLocale', store.getters.locale)
    AOS.init()
  }
}).$mount('#app')
