/**
 * External dependencies
 */
import { combineReducers } from 'redux'

/**
 * Internal dependencies
 */
import {
  CURRENT_USER_ID_SET,
  CURRENT_USER_MEMBERSHIPS_RECEIVE,
} from '../action-types'
import { createReducer } from '../utils'

export const id = createReducer(null, {
  [CURRENT_USER_ID_SET]: (state, { userId }) => userId,
})

export const memberships = createReducer(
  {},
  {
    [CURRENT_USER_MEMBERSHIPS_RECEIVE]: (state, { memberships }) => memberships,
  }
)

export default combineReducers({
  id,
  memberships,
})
