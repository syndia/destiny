/**
 * External dependencies
 */
import { combineReducers } from 'redux'
import { get } from 'lodash'

/**
 * Internal dependencies
 */
import {
  MEMBERSHIPS_FOR_CURRENT_USER_FETCH,
  MEMBERSHIPS_FOR_CURRENT_USER_FETCH_FAILED,
  MEMBERSHIPS_FOR_CURRENT_USER_FETCH_SUCCESS,
  MEMBERSHIPS_FOR_CURRENT_USER_RECEIVE,
} from '../action-types'
import { createReducer } from '../utils'

const isFetching = createReducer(false, {
  [MEMBERSHIPS_FOR_CURRENT_USER_FETCH]: () => true,
  [MEMBERSHIPS_FOR_CURRENT_USER_FETCH_FAILED]: () => false,
  [MEMBERSHIPS_FOR_CURRENT_USER_FETCH_SUCCESS]: () => false,
})

const fetchError = createReducer(null, {
  [MEMBERSHIPS_FOR_CURRENT_USER_FETCH]: () => null,
  [MEMBERSHIPS_FOR_CURRENT_USER_FETCH_FAILED]: (state, { error }) => error,
  [MEMBERSHIPS_FOR_CURRENT_USER_FETCH_SUCCESS]: () => null,
})

const fetchSuccess = createReducer(null, {
  [MEMBERSHIPS_FOR_CURRENT_USER_FETCH]: () => null,
  [MEMBERSHIPS_FOR_CURRENT_USER_FETCH_FAILED]: () => false,
  [MEMBERSHIPS_FOR_CURRENT_USER_FETCH_SUCCESS]: () => true,
})

export const data = createReducer(null, {
  [MEMBERSHIPS_FOR_CURRENT_USER_RECEIVE]: (
    state,
    { bungieNetUser, destinyMemberships }
  ) => ({
    ...state,
    bungieNetUser,
    destinyMemberships,
  }),
})

export default combineReducers({
  data,
  isFetching,
  fetchError,
  fetchSuccess,
})
