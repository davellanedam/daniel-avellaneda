import axios from 'axios'

export default {
  getApiStargazers() {
    return axios.get(
      'https://api.github.com/repos/davellanedam/node-express-mongodb-jwt-rest-api-skeleton'
    )
  },
  getFrontendStargazers() {
    return axios.get(
      'https://api.github.com/repos/davellanedam/vue-skeleton-mvp'
    )
  }
}
