/**
 * Internal dependencies
 */
import { getMembershipsForCurrentUser } from '../../services/bungie-net/api/user'

const receiveUserData = data => ({
  type: 'RECEIVE_BUNGIENET_USER_DATA',
  status: `success`,
  data,
})

export const fetchBungieNetUser = () => dispatch => {
  getMembershipsForCurrentUser()
    .then(memberships => {
      const { bungieNetUser } = memberships

      const destinyMemberships = Promise.all(
        memberships.destinyMemberships.map(destinyMembership =>
          getGroupsForMember({
            ...destinyMembership,
            filter: 0,
            groupType: 1,
          }).then(groups => ({
            destinyMembership,
            groups,
          }))
        )
      )

      dispatch(
        receiveUserData({
          bungieNetUser,
          destinyMemberships,
        })
      )
    })
    .catch(error => console.error(error))
}
