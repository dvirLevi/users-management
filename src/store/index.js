import Vue from 'vue'
import Vuex from 'vuex'
import postService from '../middleware/postService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    createAccount(store, obj) {
      return new Promise(async (resolve, reject) => {
        try {
          let res = await postService.post(obj, "/createNewAdmin");
          // store.commit('', res);
          console.log(res)
          resolve(res)
        } catch (err) {
          reject(err)
        }
      })
    },
  },
  modules: {
  }
})
