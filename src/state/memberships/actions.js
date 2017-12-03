/**
 * Internal dependencies
 */
import {
  MEMBERSHIPS_FOR_CURRENT_USER_FETCH,
  MEMBERSHIPS_FOR_CURRENT_USER_FETCH_FAILED,
  MEMBERSHIPS_FOR_CURRENT_USER_FETCH_SUCCESS,
} from '../action-types'
import { setCurrentUserId } from '../current-user/actions'
import { getMembershipsForCurrentUser } from '../../services/bungie-net/api/user'

export const receiveMembershipsForCurrentUser = data => (
  dispatch,
  getState
) => {
  dispatch({
    type: MEMBERSHIPS_FOR_CURRENT_USER_RECEIVE,
  })

  const { bungieNetUser, destinyMemberships } = data

  dispatch({
    type: MEMBERSHIPS_FOR_CURRENT_USER_FETCH_SUCCESS,
    bungieNetUser,
    destinyMemberships,
  })
}

export const fetchMembershipsForCurrentUser = () => dispatch => {
  dispatch({
    type: MEMBERSHIPS_FOR_CURRENT_USER_FETCH,
  })

  getMembershipsForCurrentUser()
    .then(data => {
      const { bungieNetUser } = data

      dispatch({
        type: MEMBERSHIPS_FOR_CURRENT_USER_RECEIVE,
        data,
      })
      dispatch(setCurrentUserId(bungieNetUser.membershipId))
    })
    .catch(error => {
      dispatch({
        type: MEMBERSHIPS_FOR_CURRENT_USER_FETCH_FAILED,
        error,
      })
    })
}
