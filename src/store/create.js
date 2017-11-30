/**
 * External dependencies
 */
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

/**
 * Internal dependencies
 */
import reducer from '../state/reducers'

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger())
)

export default store
