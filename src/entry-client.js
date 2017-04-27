import 'es6-promise/auto'
import main from './main'
import 'material-design-lite/dist/material'

const { app, store, router } = main

require('offline-plugin/runtime').install()

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

// wait until router has resolved all async before hooks
// and async components...
router.onReady(() => {
  // actually mount to DOM
  app.$mount('#app')
})
