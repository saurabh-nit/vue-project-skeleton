const API_BASE_PATH = '/app-backend/'

export default {
  auth: {
    logout: API_BASE_PATH + '/logout',
    login: API_BASE_PATH + '/login'
  },
  api: {
    getDeviceList: API_BASE_PATH + '/device/list'
  }
}
