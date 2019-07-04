import * as types from '@/store/mutation-types'
import api from '@/services/api/github'

const getters = {
  apiStars: state => state.apiStars,
  frontendStars: state => state.frontendStars
}

const actions = {
  getApiStargazers({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .getApiStargazers()
        .then(response => {
          if (response.status === 200) {
            commit(types.API_STARGAZERS, response.data.stargazers_count)
            resolve()
          }
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => {
          commit(types.API_STARGAZERS, 0)
          reject()
        })
    })
  },
  getFrontendStargazers({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .getFrontendStargazers()
        .then(response => {
          if (response.status === 200) {
            commit(types.FRONTEND_STARGAZERS, response.data.stargazers_count)
            resolve()
          }
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => {
          commit(types.FRONTEND_STARGAZERS, 0)
          reject()
        })
    })
  }
}

const mutations = {
  [types.API_STARGAZERS](state, stars) {
    state.apiStars = stars
  },
  [types.FRONTEND_STARGAZERS](state, stars) {
    state.frontendStars = stars
  }
}

const state = {
  apiStars: 0,
  frontendStars: 0
}

export default {
  state,
  getters,
  actions,
  mutations
}
