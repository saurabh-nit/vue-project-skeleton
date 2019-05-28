import axios from 'axios'
import { serializeQueryParams } from './apiUtils'

export default {
  makeGetRequest (path, callback, fail, params) {
    path += serializeQueryParams(params)
    axios.get(path, {withCredentials: true})
      .then(callback)
      .catch(fail)
  },
  makePostRequest (path, callback, fail, payload, params) {
    path += serializeQueryParams(params)
    axios.post(path, payload, {withCredentials: true})
      .then(callback)
      .catch(fail)
  },
  makeDeleteRequest (path, callback, fail) {
    axios.delete(path, {withCredentials: true})
      .then(callback)
      .catch(fail)
  },
  makePutRequest (path, callback, fail, payload, params) {
    path += serializeQueryParams(params)
    axios.put(path, payload, {withCredentials: true})
      .then(callback)
      .catch(fail)
  },
  uploadFile (path, callback, fail, payload, params) {
    path += serializeQueryParams(params)
    axios.post(path, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'
      },
      withCredentials: true
    }).then(callback)
      .catch(fail)
  }
}
