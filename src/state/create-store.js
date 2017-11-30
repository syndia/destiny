/**
 * External dependencies
 */
import { applyMiddleware, createStore as reduxCreateStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

/**
 * Internal dependencies
 */
import reducer from '../state/reducers'

const createStore = () =>
  reduxCreateStore(reducer, applyMiddleware(thunkMiddleware, createLogger()))

export default createStore
