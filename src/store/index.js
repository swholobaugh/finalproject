import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: '',
    idToken: '',
  },
  getters: {
    getUser: state => state.user,
    getIdToken: state => state.idToken,
  },
  mutations: {
    settingUser: (state, user) => (state.user = user),
    settingIdToken: (state, idToken) => (state.idToken = idToken),
  },
  actions: {
    setUser: ({ commit }, user) => commit('settingUser', user),
    setIdToken: ({ commit }, idToken) => commit('settingIdToken', idToken),
  },
})

export default store;