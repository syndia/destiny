/**
 * Internal dependencies
 */
import {
  MEMBERSHIPS_FOR_CURRENT_USER_FETCH,
  MEMBERSHIPS_FOR_CURRENT_USER_FETCH_FAILED,
  MEMBERSHIPS_FOR_CURRENT_USER_FETCH_SUCCESS,
  SET_CURRENT_USER_ID,
} from '../action-types'
import { getMembershipsForCurrentUser } from '../../services/bungie-net/api/user'

export const receiveMembershipsForCurrentUser = data => ({
  type: MEMBERSHIPS_FOR_CURRENT_USER_RECEIVE,
  ...data,
})

export const fetchMembershipsForCurrentUser = () => dispatch => {
  dispatch({
    type: MEMBERSHIPS_FOR_CURRENT_USER_FETCH,
  })

  getMembershipsForCurrentUser()
    .then(data => {
      const { bungieNetUser } = data

      dispatch({
        type: MEMBERSHIPS_FOR_CURRENT_USER_RECEIVE,
        bungieNetUser,
      })
      dispatch({
        type: SET_CURRENT_USER_ID,
        id: bungieNetUser.membershipId,
      })
      dispatch({
        type: MEMBERSHIPS_FOR_CURRENT_USER_FETCH_SUCCESS,
      })
    })
    .catch(error => {
      dispatch({
        type: MEMBERSHIPS_FOR_CURRENT_USER_FETCH_FAILED,
        error,
      })
    })
}
