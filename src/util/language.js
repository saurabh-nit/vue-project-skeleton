export default {
  getUserLanguage () {
    if (window) {
      return window.localStorage.getItem('userlang') || 'id'
    }
  },
  setUserLanguage (lang) {
    if (window) {
      window.localStorage.setItem('userlang', lang)
    }
  }
}
