import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueI18n from 'vue-i18n'
import VueScrollTo from 'vue-scrollto'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueAnalytics, {
  id: 'UA-137710319-1'
})
Vue.use(VueI18n)
Vue.use(VueScrollTo)
Vue.use(VueObserveVisibility)

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

console.log(navigator.language.slice(0, 2))

export default new VueI18n({
  locale: navigator.language.slice(0, 2) || 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages()
})
