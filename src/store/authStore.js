import api from '@/api/authApis'

export default {
  state: {
    user: {}
  },

  getters: {
    getUser (state) {
      return state.user
    }
  },

  mutations: {
    setUser (state, {value, success, to}) {
      state.user = value.user

      if (state.user) {
        success(state.user)
      } else {
        this.$router.push('/')
      }
    },
    clearUser (state, value) {
      state.user = {}
    }
  },

  actions: {
    getUser ({ commit, dispatch }, { success, fail, to } = {}) {
      api.getUser((response) => {
        commit('setUser', {value: response.data, success, to})
      }, fail)
    },
    clearUser ({commit, dispatch}) {
      commit('clearUser')
    }
  }
}
