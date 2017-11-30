export const CLIENT_ID = process.env.CLIENT_ID
export const CLIENT_SECRET = process.env.CLIENT_SECRET

export const BUNGIENET_API_KEY = process.env.BUNGIENET_API_KEY
export const BUNGIENET_BASE_URL = `https://www.bungie.net`
export const BUNGIENET_AUTHORIZATION_URL = `${
  BUNGIENET_BASE_URL
}/en/OAuth/Authorize`
export const BUNGIENET_API_ROOT_URL = `${BUNGIENET_BASE_URL}/Platform`
export const BUNGIENET_TOKEN_URL = `${BUNGIENET_API_ROOT_URL}/App/OAuth/token/`
