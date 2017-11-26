/**
 * Internal dependencies
 */
import { CLIENT_ID } from '../constants'
import fetch from '../fetch'

/**
 * Bungie.net oAuth API
 *
 * @see https://github.com/Bungie-net/api/wiki/OAuth-Documentation
 */
const API_PATH = `/App`

export const getAccessTokenFromCode = authCode => {
  const body = new URLSearchParams()
  body.set(`grant_type`, `authorization_code`)
  body.set(`client_id`, CLIENT_ID)
  body.set(`code`, authCode)

  return fetch(`${API_PATH}/OAuth/token/`, { method: `POST`, body })
}

export const getAccessTokenFromRefreshToken = refreshToken => {
  const body = new URLSearchParams()
  body.set(`grand_type`, `refresh_token`)
  body.set(`client_id`, CLIENT_ID)
  body.set(`refresh_token`, refreshToken)

  return fetch(`${API_PATH}/OAuth/token/`, { method: `POST`, body })
}
