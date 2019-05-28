import Vue from 'vue'
import Vuex from 'vuex'
import homePageStore from './homePageStore'
import authStore from './authStore'
import eventViewEditStore from './eventViewEditStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authStore: authStore,
    eventViewEditStore: eventViewEditStore,
    homePageStore: homePageStore
  }
})
