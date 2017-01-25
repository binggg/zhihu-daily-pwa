import * as types from './mutation-types'

export default {
  [types.SET_APP_TITLE] (state, title) {
    state.title = title
  },

  [types.SET_APP_ACTIONS] (state, actions) {
    state.actions = actions
  }
}
