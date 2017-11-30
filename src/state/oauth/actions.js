/**
 * Internal dependencies
 */
import { logout } from '../../services/bungie-net/auth'

export const setLoggedIn = () => ({
  type: 'LOG_IN',
})

export const setLoggedOut = () => {
  logout()

  return {
    type: 'LOG_OUT',
  }
}
