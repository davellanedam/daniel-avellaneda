import Vue from 'vue'
import '@/plugins/vuetify'
import '@/plugins/common'
import App from '@/App.vue'
import { store } from '@/store'
import '@mdi/font/css/materialdesignicons.min.css'
import i18n from '@/i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  render: h => h(App),
  created() {
    store.dispatch('setLocale', store.getters.locale)
    AOS.init()
  }
}).$mount('#app')
