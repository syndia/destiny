/**
 * External dependencies
 */
import store from 'store'

/**
 * Internal dependencies
 */
import { CLIENT_ID, BUNGIENET_BASE_URL } from './constants'
import { getAccessTokenFromCode } from './api/app'

const LOCAL_STORAGE_AUTH = `$auth`

export const makeAuthorizationRequestUri = (client_id, state) => {
  const searchParams = new URLSearchParams()

  searchParams.set(`response_type`, `code`)
  searchParams.set(`client_id`, client_id)
  searchParams.set(`state`, state)

  return `${BUNGIENET_BASE_URL}/en/OAuth/Authorize?${searchParams.toString()}`
}

export const signInWithBungieNet = () => {
  const state = Math.random()
    .toString(36)
    .slice(2)

  store.set(LOCAL_STORAGE_AUTH, { state })

  let uri = makeAuthorizationRequestUri(CLIENT_ID, state)
  window.location.href = uri
  return
}

function handleError(error, callback) {
  console.error(`Authorization error:`)
  console.error(error)
  store.remove(LOCAL_STORAGE_AUTH)
  callback(false, error)
}

function handleAccessTokenResponse({ access_token, expires_in }) {
  const accessTokenExpiry = new Date()
  accessTokenExpiry.setSeconds(accessTokenExpiry.getSeconds() + expires_in)

  const authData = {
    accessToken: access_token,
    accessTokenExpiry,
  }

  store.set(LOCAL_STORAGE_AUTH, authData)
  window.AUTH_DATA = authData

  return Promise.resolve()
}

export const authorizeWithBungieNet = callback => {
  const now = Date.now()
  const url = new URL(window.location.href)
  const searchParams = url.searchParams
  const previousAuthData = store.get(LOCAL_STORAGE_AUTH)

  const accessTokenIsValid =
    previousAuthData && now < new Date(previousAuthData.accessTokenExpiry)

  if (accessTokenIsValid) {
    window.AUTH_DATA = previousAuthData

    callback(true, null)
  } else if (searchParams.has(`code`) && searchParams.has(`state`)) {
    const code = searchParams.get(`code`)
    const state = searchParams.get(`state`)

    if (state !== previousAuthData.state) {
      console.error(
        `State parameter did not match submitted state token. Possible CSRF attack.`
      )
      callback(false, null)
    } else {
      window.history.replaceState({}, `foo`, `/`)

      getAccessTokenFromCode(code)
        .then(handleAccessTokenResponse)
        .then(() => callback(true, null))
        .catch(error => handleError(error, callback))
    }
  } else {
    callback(false, null)
  }
}
