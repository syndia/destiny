/**
 * Inernal dependencies
 */
import {
  CURRENT_USER_ID_SET,
  CURRENT_USER_MEMBERSHIPS_RECEIVE,
} from 'state/action-types';

export const setCurrentUserId = userId => ({
  type: CURRENT_USER_ID_SET,
  userId,
});

export const setCurrentUserMemberships = memberships => ({
  type: CURRENT_USER_MEMBERSHIPS_RECEIVE,
  memberships,
});
