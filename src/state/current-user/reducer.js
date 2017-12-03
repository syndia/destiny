/**
 * External dependencies
 */
import { combineReducers } from 'redux'

/**
 * Internal dependencies
 */
import { CURRENT_USER_ID_SET } from '../action-types'
import { createReducer } from '../utils'

export const id = createReducer(null, {
  [CURRENT_USER_ID_SET]: (state, action) => action.userId,
})

export default combineReducers({
  id,
})
