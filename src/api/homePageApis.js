import config from './config'
import apiCall from './apiUtils/makeApiCall.js'

export default {
  getDeviceList (callback, fail) {
    apiCall.makeGetRequest(config.api.getDeviceList, callback, fail)
  }
}
