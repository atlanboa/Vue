import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count : 0,
    loginstate : 0,
    session : null
  },
  mutations: {
    increment (state) {
      state.count++
    },
    login (state){
      state.loginstate = 1;
    },
    
    logout (state){
      state.loginstate = 0;
    },

    insertSession(state, session){
      state.session = session;
    }
    //this.$store.commit('insertSession', response.data)
  },
  actions: {
  },
  modules: {
  }
})
