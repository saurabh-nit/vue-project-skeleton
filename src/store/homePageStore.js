import api from '@/api/homePageApis'
import errorHandler from '../api/apiUtils/errorHandler'

export default {
  state: {
    deviceList: []
  },
  getters: {
    getDeviceList (state) {
      return state.eventList
    }
  },
  mutations: {
    setDeviceList (state, value) {
      state.eventList = value
    }
  },
  actions: {
    getDeviceList ({ commit, dispatch }, { success, fail } = {}) {
      api.getDeviceList((response) => {
        if (response.data.code === '200') {
          if (response.data.errors === null) {
            commit('setDeviceList', response.data.data)
          } else {
            dispatch('setErrorPopup', {
              isErrorPopupVisible: true,
              errorList: response.data.errors
            })
          }
        }
      }, (error) => { errorHandler.handleErrors(dispatch, error) })
    }
  }
}
