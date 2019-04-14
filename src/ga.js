import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

// Use Google Analytics only in production mode
export default () => {
  if (process.env.NODE_ENV === 'production') {
    Vue.use(VueAnalytics, {
      id: 'UA-137710319-1'
    })
  }
}
