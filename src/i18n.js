import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueI18n from 'vue-i18n'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueAnalytics, {
  id: 'UA-137710319-1'
})
Vue.use(VueI18n)
Vue.use(VueScrollTo)

function loadLocaleMessages() {
  const locales = require.context(
    './locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  )
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})
