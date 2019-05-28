import config from '../config'

export default {
  goToLogin () {
    location.href = config.auth.login
  },
  goToLogout () {
    location.href = config.auth.logout
  }
}
