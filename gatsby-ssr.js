/**
 * External dependencies
 */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

/**
 * Internal dependencies
 */
import createStore from './src/state/create-store'

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const store = createStore()

  const ConnectedBody = () => <Provider store={store}>{bodyComponent}</Provider>
  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}
