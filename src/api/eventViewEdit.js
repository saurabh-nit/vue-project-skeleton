import config from './config'
import apiCall from './apiUtils/makeApiCall.js'

export default {
  getEventDetail (callback, fail, payload) {
    apiCall.makeGetRequest(config.api.getEventDetailByCode, callback, fail, payload)
  },
  updateSpgPersonnels (callback, fail, payload, params) {
    apiCall.makePutRequest(config.api.updateSpgPersonnel, callback, fail, payload, params)
  },
  checkIfMessageTitleExist (callback, fail, params) {
    apiCall.makeGetRequest(config.api.validateMessageTitle, callback, fail, params)
  },
  createNewEvent (callback, fail, payload) {
    apiCall.makePostRequest(config.api.createEvent, callback, fail, payload)
  }
}
