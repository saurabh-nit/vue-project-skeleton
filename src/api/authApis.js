import config from './config'
import apiCall from './apiUtils/makeApiCall.js'

export default {
  getUser (callback, fail) {
    apiCall.makeGetRequest(config.auth.user, callback, fail)
  }
}
