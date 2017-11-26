/**
 * Internal dependencies
 */
import {
  CLIENT_ID,
  BUNGIENET_BASE_URL,
  LOCAL_STORAGE_STATE_TOKEN,
  LOCAL_STORAGE_AUTH_TOKEN,
} from './constants'
import {
  getAccessTokenFromCode,
  getAccessTokenFromRefreshToken,
} from './api/app'
import store from './local-storage'

const LOCAL_STORAGE_AUTH = `$auth`

export const makeAuthorizeRequestUri = (client_id, state) => {
  const searchParams = new URLSearchParams()

  searchParams.set(`response_type`, `code`)
  searchParams.set(`client_id`, client_id)
  searchParams.set(`state`, state)

  return `${BUNGIENET_BASE_URL}/en/oauth/authorize?${searchParams.toString()}`
}

export const handleAuthorizeCallback = () => {
  const url = new URL(window.location.href)

  if (url.searchParams.has(`state`) && url.searchParams.has(`code`)) {
    const authCode = url.searchParams.get(`code`)
    const authState = url.searchParams.get(`state`)

    if (authState !== store.get(LOCAL_STORAGE_AUTH).state) {
      console.error(
        `State parameter did not match submitted state token. Possible CSRF attack or other shenanigans`
      )
    }

    getAccessTokenFromCode(authCode).then(authData => {})
  }
}

export const authorizeWithBungieNet = () => {
  const state = Math.random()
    .toString(36)
    .slice(2)

  store.set(LOCAL_STORAGE_AUTH, { state }).then(() => {
    let uri = makeAuthorizeRequestUri(CLIENT_ID, state)

    window.location.href = uri
    Promise.resolve(uri)
  })
}

function handleNewAuthData(data) {
  const accessTokenExpiry = new Date()
  const refreshTokenExpiry = new Date()

  accessTokenExpiry.setSeconds(
    accessTokenExpiry.getSeconds() + data.accessToken.expires
  )
  refreshTokenExpiry.setSeconds(
    refreshTokenExpiry.getSeconds() + data.refreshToken.expires
  )

  const authData = {
    accessToken: data.accessToken.value,
    accessTokenExpiry,
    refreshToken: data.refreshToken.value,
    refreshTokenExpiry,
  }

  store.set(LOCAL_STORAGE_AUTH, authData)

  window.AUTH_DATA = authData

  return Promise.resolve()
}

export default callback => {
  const now = Date.now()
  const url = new URL(window.location.href)
  const searchParams = url.searchParams

  const previousAuthData = store.get(LOCAL_STORAGE_AUTH)

  const accessTokenIsValid =
    previousAuthData && now < new Date(previousAuthData.accessTokenExpiry)
  const refreshTokenIsValid =
    previousAuthData && now < new Date(previousAuthData.refreshTokenExpiry)

  console.log({ previousAuthData, accessTokenIsValid, refreshTokenIsValid })

  if (accessTokenIsValid) {
    console.log(`Access token is valid`)
    window.AUTH_DATA = previousAuthData
    callback(true, null)
  } else if (!accessTokenIsValid && refreshTokenIsValid) {
    console.info(`Access token has expired, but refresh token is still valid`)
    console.log(`Using refresh token to get a new access token`)

    getAccessTokenFromRefreshToken(previousAuthData.refreshToken)
      .then(handleNewAuthData)
      .then(() => callback(true, null))
      .catch(error => {
        console.log(`Failed to get new access token`)
        handleAuthError(error, callback)
      })
  } else if (searchParams.has(`code`) && searchParams.has(`state`)) {
    window.history.replaceState({}, `foo`, `/`)

    getAccessTokenFromCode(searchParams.get(`code`))
      .then(handleNewAuthData)
      .then(() => callback(true, null))
      .catch(error => handleAuthError)
  }

  callback(false, null)
}
