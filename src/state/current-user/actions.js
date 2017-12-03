/**
 * Inernal dependencies
 */
import { CURRENT_USER_ID_SET } from '../action-types'

export function setCurrentUserId(userId) {
  return {
    type: CURRENT_USER_ID_SET,
    userId,
  }
}
