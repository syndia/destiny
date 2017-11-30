/**
 * External dependencies
 */
import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

/**
 * Internal dependencies
 */
import createStore from './src/state/create-store'

exports.onRouteUpdate = function({ location }) {
  // Don't track while developing
  if (process.env.NODE_ENV === `production` && typeof ga === `function`) {
    ga(`set`, `page`, (location || {}).pathname)
    ga(`send`, `pageview`)
  }
}

exports.replaceRouterComponent = ({ history }) => {
  const store = createStore()

  const ConnectedRouteWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouteWrapper
}
