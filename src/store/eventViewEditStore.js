import api from '@/api/eventViewEdit'
import errorHandler from '../api/apiUtils/errorHandler'

export default {
  state: {
    eventDetails: {},
    eventDetailsLoading: false,
    isErrorPopupVisible: false,
    errorList: []
  },
  getters: {
    getEventDetail (state) {
      return Object.assign({}, state.eventDetails, {eventDetailsLoading: state.eventDetailsLoading})
    },
    getErrorState (state) {
      return {
        isErrorPopupVisible: state.isErrorPopupVisible,
        errorList: state.errorList
      }
    }
  },
  mutations: {
    setEventDetail (state, value) {
      state.eventDetails = value
      state.eventDetailLoading = true
    }
  },
  actions: {
    setErrorPopup (state, value) {
      state.isErrorPopupVisible = value.isErrorPopupVisible
      state.errorList = value.errorList
    },
    removeErrorPopup (state, value) {
      state.isErrorPopupVisible = value.isErrorPopupVisible
      state.errorList = value.errorList
    },
    getEventDetail ({commit, dispatch}, {payload}) {
      api.getEventDetail(response => {
        if (response.data.code === '200') {
          if (response.data.errors === null) {
            commit('setEventDetail', response.data.data)
          } else {
            dispatch('setErrorPopup', {
              isErrorPopupVisible: true,
              errorList: response.data.errors
            })
          }
        }
      }, (error) => { errorHandler.handleErrors(dispatch, error) }, payload)
    },
    updateSpgPersonnel ({commit, dispatch}, {payload, params, success}) {
      api.updateSpgPersonnels(response => {
        if (response.data.code === '200') {
          if (response.data.errors === null) {
            success()
          } else {
            dispatch('setErrorPopup', {
              isErrorPopupVisible: true,
              errorList: response.data.errors
            })
          }
        }
      }, (error) => { errorHandler.handleErrors(dispatch, error) }, payload, params)
    },
    validateMessageTitle ({commit, dispatch}, {params, success}) {
      api.checkIfMessageTitleExist(response => {
        if (response.data.code === '200') {
          commit('setMessageTitleValidity', response.data.data)
          success()
        }
      }, (error) => { errorHandler.handleErrors(dispatch, error) }, params)
    },
    createEvent ({ commit, dispatch }, { payload, success, fail } = {}) {
      api.createNewEvent((response) => {
        if (response.data.code === '200') {
          if (response.data.errors === null) {
            dispatch('setNotificationMessage', {
              payload: {
                isVisible: true,
                text: 'Event has been created'
              }
            })
          } else {
            dispatch('setErrorPopup', {
              isErrorPopupVisible: true,
              errorList: response.data.errors
            })
          }
        }
      }, (error) => { errorHandler.handleErrors(dispatch, error) }, payload)
    }
  }
}
