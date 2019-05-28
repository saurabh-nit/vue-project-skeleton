import config from '../config' // AuthUitls

export default {
  handleErrors (dispatch, err) {
    const errObject = err.response ? err.response.data : {}
    console.log('err:', err)

    if (errObject.status === 500) {
      if (errObject.path.includes('/image-upload')) {
        const errors = [{
          message: 'Image upload failed. Please try again.'// errObject.message
        }]
        dispatch('setErrorPopup', {
          isErrorPopupVisible: true,
          errorList: errors
        })
      } else {
        const errors = [{
          message: errObject.message
        }]
        dispatch('setErrorPopup', {
          isErrorPopupVisible: true,
          errorList: errors
        })
      }
    }
    if (errObject.status === 401 || errObject.code === '401' || errObject.code === 401) {
      location.href = config.auth.login
    }
  }
}
