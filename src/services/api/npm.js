import axios from 'axios'
import { format } from 'date-fns'

const today = format(new Date(), 'YYYY-MM-DD')

export default {
  getApiDownloads() {
    return axios.get(
      `https://api.npmjs.org/downloads/point/2016-01-01:${today}/node-express-mongodb-jwt-rest-api-skeleton`
    )
  },
  getFrontendDownloads() {
    return axios.get(
      `https://api.npmjs.org/downloads/point/2016-01-01:${today}/vue-skeleton-mvp`
    )
  }
}
