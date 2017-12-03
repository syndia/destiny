/**
 * External dependencies
 */
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

/**
 * Internal dependencies
 */
// import auth from './auth/reducer'
import currentUser from './current-user/reducer'
import memberships from './memberships/reducer'

const reducers = {
  // auth,
  currentUser,
  memberships,
}

const reducer = combineReducers(reducers)

export default function configureStore(initialState = {}) {
  const isBrowser = typeof window === `object`
  const isProduction = process.env.NODE_ENV === `production`

  const middlewares = [thunkMiddleware]

  const enhancers = [
    applyMiddleware(...middlewares),
    isBrowser &&
      !isProduction &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.window.__REDUX_DEVTOOLS_EXTENSION__(),
  ].filter(Boolean)

  const store = compose(...enhancers)(createStore)(reducer, initialState)

  if (module.hot) {
    module.hot.accept(reducer)
    const nextRootReducer = reducer
    store.replaceReducer(nextRootReducer)
  }

  return store
}
