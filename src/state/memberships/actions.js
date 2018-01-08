/**
 * Internal dependencies
 */
import {
  MEMBERSHIPS_FOR_CURRENT_USER_FETCH,
  MEMBERSHIPS_FOR_CURRENT_USER_FETCH_FAILED,
  MEMBERSHIPS_FOR_CURRENT_USER_FETCH_SUCCESS,
} from '../action-types';
import {
  setCurrentUserId,
  setCurrentUserMemberships,
} from '../current-user/actions';
import {
  CHARACTERS,
  CHARACTER_PROGRESSIONS,
  PROFILES,
  PROFILE_CURRENCIES,
} from '../../services/bungie-net/constants/destiny-component-type';
import {getMembershipsForCurrentUser} from '../../services/bungie-net/api/user';
import {getProfile} from '../../services/bungie-net/api/destiny-2';

const COMPONENTS = [
  CHARACTERS,
  CHARACTER_PROGRESSIONS,
  PROFILES,
  PROFILE_CURRENCIES,
];

export const fetchMembershipsForCurrentUser = () => dispatch => {
  dispatch({
    type: MEMBERSHIPS_FOR_CURRENT_USER_FETCH,
  });

  getMembershipsForCurrentUser()
    .then(data => {
      const {bungieNetUser, destinyMemberships} = data;

      dispatch(setCurrentUserMemberships(data));
      dispatch(setCurrentUserId(bungieNetUser.membershipId));

      dispatch({
        type: MEMBERSHIPS_FOR_CURRENT_USER_FETCH_SUCCESS,
      });

      return Promise.all(
        destinyMemberships.map(membership =>
          getProfile(membership, COMPONENTS),
        ),
      );
    })
    .then(profiles => {
      console.log('profiles:', profiles);
    })
    .catch(error => {
      console.error(error);

      dispatch({
        type: MEMBERSHIPS_FOR_CURRENT_USER_FETCH_FAILED,
        error,
      });
    });
};
