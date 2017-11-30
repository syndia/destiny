/**
 * External dependencies
 */
import React from 'react'
import { Provider } from 'react-redux'

/**
 * Internal dependencies
 */
import store from './src/state/store'

exports.wrapRootComponent = ({ Root }) => {
  return () => (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}
