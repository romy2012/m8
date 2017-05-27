import Vuex from 'vuex';
import Vue from 'vue';
import publicHead from '../modules/publichead'

Vue.use(Vuex);


export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    publicHead
  }
});
