import {
  fetchStartImg
} from '../../api'
import * as types from '../mutation-types'

// initial state
// shape: [{ text, img }]
const state = {
  text: '',
  img: ''
}

// getters
// const getters = {
//   checkoutStatus: state => state.checkoutStatus
// }

// actions
const actions = {
  fetchStartImg ({commit, state}, {width, height}) {
    return fetchStartImg(width, height)
      .then(({img, text}) => commit(types.FETCH_START_IMG_SUCCESS, {img, text}))
  }
}

// mutations
const mutations = {
  [types.FETCH_START_IMG_SUCCESS] (state, {img, text}) {
    state.img = img
    state.text = text
  }
}

export default {
  state,
  // getters,
  actions,
  mutations
}
