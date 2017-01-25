import {
  fetchLatestNews,
  fetchStoryDetail
} from '../../api'
import {
  imgURLFilter
} from '../../filters'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  top: [],
  stories: {},
  date: {},
  storyDetails: {}
}

// getters
const getters = {
  topStories: state => state.top.map((id) => state.stories[id]),
  latestStories: state => Object.keys(state.date)
    .sort((a, b) => new Date(a) - new Date(b))
    .map(date => ({date, stories: state.date[date].map((id) => state.stories[id])}))
}

// actions
const actions = {
  fetchLatestNews ({ commit, state }) {
    return fetchLatestNews()
      .then(({ date, stories, top_stories }) => {
        commit(types.FETCH_LATEST_NEWS_SUCCESS, { date, stories, top_stories })
      })
  },
  fetchStoryDetail ({ commit, state }, { id }) {
    return fetchStoryDetail(id)
      .then(detail => {
        commit(types.FETCH_STORY_DETAIL_SUCCESS, { id, detail })
      })
  }
}

// mutations
const mutations = {
  [types.FETCH_LATEST_NEWS_SUCCESS] (state, { date, stories, top_stories }) {
    const primaryKeyify = (arr) => arr.reduce((p, c) => {
      p[c.id] = c
      return p
    }, {})
    const topStories = primaryKeyify(top_stories)
    const todayStories = primaryKeyify(stories)

    state.stories = Object.assign({}, state.stories, todayStories, topStories)
    state.top = Object.keys(topStories)
    state.date = Object.assign({}, state.date, {
      [date]: Object.keys(todayStories)
    })
  },

  [types.FETCH_STORY_DETAIL_SUCCESS] (state, { id, detail }) {
    state.storyDetails = Object.assign({}, state.storyDetails, {
      [id]: Object.assign({}, detail, {
        body: imgURLFilter(detail.body)
      })
    })
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
