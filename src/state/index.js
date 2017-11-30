/**
 * External dependencies
 */
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

/**
 * Internal dependencies
 */
import oauth from './oauth/reducer'
import user from './user/reducer'

const reducers = {
  oauth,
  user,
}

export const reducer = combineReducers(reducers)

export default function configureStore(initialState = {}) {
  const isBrowser = typeof window === `object`

  const middlewares = [thunkMiddleware]

  const enhancers = [
    isBrowser &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.window.__REDUX_DEVTOOLS_EXTENSION__(),
  ].filter(Boolean)

  return compose(...enhancers)(createStore)(reducer, initialState)
}
