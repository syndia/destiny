/**
 * External dependencies
 */
import { get } from 'lodash'

export default function getCurrentUserId(state) {
  return get(state, [`currentUser`, `id`])
}
