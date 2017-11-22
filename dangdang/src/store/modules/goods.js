/**
 * Created by newuser on 2017/10/3.
 */
import * as types from '../mutation-types'
const state = {
  index: 0,
  timer: 1,
  length: 0,
  newIndex:0,
}
const getters = {
  currentIndex : state => state.newIndex,
}

const mutations = {
  [types.RECEIVE_LENGTH](state, length) {
    state.length = length
  },
  [types.RECEIVE_STATE](state, index) {
    state.index=index
    state.index--
  }
}

// 计时器开始轮播图
const actions = {
  startHeaderTransition({commit, state}, obj) {
    clearInterval(state.timer)
    state.index=-1
    state.timer = setInterval(() => {
      state.index++
      state.newIndex=state.index
      commit(types.ADD_TRANSITION, {obj})
      let offsetX= -state.index * (obj.offsetWidth/(state.length+1)) + 'px'
      commit(types.SET_TRANSLATE, {x: offsetX, y: 0, z: 0, obj})
    }, 1500)

  }
}

export default {
  state,
  mutations,
  actions,
  getters,
}
