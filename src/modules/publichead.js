/**
 * publichead vuex
 */
import head from '../api/PublicHead'
import * as types from './modules-type';
// initial state
const state = {
  all:[],
}

// getters
const getters = {
  allNav: state => state.all
}

// mutations
const mutations = {
  [types.PUBLIC_HEAD] (state, { products }) {
    state.all = products
  },
  [types.PUBLIC_ACTIVE] (state, {index}) {
    for(let i = 0; i<state.all.length;i++){
      state.all[i].active = false
    }
    state.all[index].active = !state.all[index].active
  },
}

// actions
const actions = {
  getAllNav ({ commit }) {
    head.getProducts(products => {
      commit(types.PUBLIC_HEAD, { products })
    })
  },
  getActive({commit},index){
    commit(types.PUBLIC_ACTIVE,{ index })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
