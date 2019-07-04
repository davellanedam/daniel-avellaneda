import * as types from '@/store/mutation-types'
import i18n from '@/i18n'

const getters = {
  locale: state => state.locale,
  changedLocale: state => state.changedLocale
}

const actions = {
  setLocale({ commit }, payload) {
    commit(types.CHANGED_LOCALE, false)
    i18n.locale = payload
    window.localStorage.setItem('locale', JSON.stringify(payload))
    commit(types.SET_LOCALE, payload)
    setTimeout(() => {
      commit(types.CHANGED_LOCALE, true)
    }, 100)
  }
}

const mutations = {
  [types.SET_LOCALE](state, value) {
    state.locale = value
  },
  [types.CHANGED_LOCALE](state, value) {
    state.changedLocale = value
  }
}

const state = {
  locale:
    JSON.parse(localStorage.getItem('locale')) ||
    navigator.language.slice(0, 2) ||
    'en',
  changedLocale: true
}

export default {
  state,
  getters,
  actions,
  mutations
}
