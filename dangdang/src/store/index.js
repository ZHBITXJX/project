/**
 * Created by zhuzi on 2017/10/2.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import goods from './modules/goods'

Vue.use(Vuex)
export default new Vuex.Store({
  mutations,
  actions,
  modules: {
    goods,
  }
})
