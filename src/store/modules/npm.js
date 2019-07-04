import * as types from '@/store/mutation-types'
import api from '@/services/api/npm'

const getters = {
  apiDownloads: state => state.apiDownloads,
  frontendDownloads: state => state.frontendDownloads
}

const actions = {
  getApiDownloads({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .getApiDownloads()
        .then(response => {
          if (response.status === 200) {
            commit(types.API_DOWNLOADS, response.data.downloads)
            resolve()
          }
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => {
          commit(types.API_DOWNLOADS, 0)
          reject()
        })
    })
  },
  getFrontendDownloads({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .getFrontendDownloads()
        .then(response => {
          if (response.status === 200) {
            commit(types.FRONTEND_DOWNLOADS, response.data.downloads)
            resolve()
          }
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => {
          commit(types.FRONTEND_DOWNLOADS, 0)
          reject()
        })
    })
  }
}

const mutations = {
  [types.API_DOWNLOADS](state, downloads) {
    state.apiDownloads = downloads
  },
  [types.FRONTEND_DOWNLOADS](state, downloads) {
    state.frontendDownloads = downloads
  }
}

const state = {
  apiDownloads: 0,
  frontendDownloads: 0
}

export default {
  state,
  getters,
  actions,
  mutations
}
