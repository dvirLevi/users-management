import Vue from 'vue'
import Vuex from 'vuex'
import postService from '../middleware/postService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: true,
    allUsers: []
  
  
  },
  mutations: {
    pushUserId(state, el) {
      state.userId = el
    },
    pushAllUsers(state, el) {
      state.allUsers = el
    },
  },
  actions: {
    createAccount(store, obj) {
      return new Promise(async (resolve, reject) => {
        try {
          let res = await postService.post(obj, "/createNewAdmin");
          store.commit('pushUserId', res);
          resolve(res)
        } catch (err) {
          reject(err)
        }
      })
    },
    addUser(store, obj) {
      return new Promise(async (resolve, reject) => {
        try {
          let res = await postService.post(obj, `/account/${store.state.userId}/user`);
          store.commit('pushUserId', res);
          resolve(res)
        } catch (err) {
          reject(err)
        }
      })
    },
    getAllUsers(store) {
      return new Promise(async (resolve, reject) => {
        try {
          let res = await postService.get(`/account/${store.state.userId}/user/getAllUsers`);
          store.commit('pushAllUsers', res);
          resolve(res)
        } catch (err) {
          reject(err)
        }
      })
    },
  },
  modules: {}
})