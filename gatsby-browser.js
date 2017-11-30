/**
 * External dependencies
 */
import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { rehydrate } from 'glamor'

/**
 * Internal dependencies
 */
import configureStore from './src/state'

exports.onClientEntry = () => {
  if (window._glamor) {
    rehydrate(window._glamor)
  }
}

exports.onRouteUpdate = function({ location }) {
  // Don't track while developing
  if (process.env.NODE_ENV === `production` && typeof ga === `function`) {
    ga(`set`, `page`, (location || {}).pathname)
    ga(`send`, `pageview`)
  }
}

exports.replaceRouterComponent = ({ history }) => {
  const store = configureStore()

  const ConnectedRouteWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouteWrapper
}
