/**
 * Internal dependencies
 */
import {
  MEMBERSHIPS_FOR_CURRENT_USER_FETCH,
  MEMBERSHIPS_FOR_CURRENT_USER_FETCH_FAILED,
  MEMBERSHIPS_FOR_CURRENT_USER_FETCH_SUCCESS,
  MEMBERSHIPS_FOR_CURRENT_USER_RECEIVE,
} from '../action-types'
import { setCurrentUserId } from '../current-user/actions'
import { getMembershipsForCurrentUser } from '../../services/bungie-net/api/user'

export const receiveMembershipsForCurrentUser = data => (
  dispatch,
  getState
) => {
  const { bungieNetUser, destinyMemberships } = data

  dispatch({
    type: MEMBERSHIPS_FOR_CURRENT_USER_RECEIVE,
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

      dispatch(receiveMembershipsForCurrentUser(data))
      dispatch(setCurrentUserId(bungieNetUser.membershipId))

      dispatch({
        type: MEMBERSHIPS_FOR_CURRENT_USER_FETCH_SUCCESS,
      })
    })
    .catch(error => {
      console.error(error)

      dispatch({
        type: MEMBERSHIPS_FOR_CURRENT_USER_FETCH_FAILED,
        error,
      })
    })
}
