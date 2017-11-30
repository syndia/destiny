/**
 * External dependencies
 */
import React from 'react'
import { Provider } from 'react-redux'

/**
 * Internal dependencies
 */
import store from './src/store/create'

exports.onRouteUpdate = function({ location }) {
  // Don't track while developing
  if (process.env.NODE_ENV === `production` && typeof ga === `function`) {
    ga(`set`, `page`, (location || {}).pathname)
    ga(`send`, `pageview`)
  }
}

exports.wrapRootComponent = ({ Root }) => {
  return () => (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}
