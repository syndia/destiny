export const BUNGIENET_API_KEY =
  process.env.BUNGIENET_API_KEY || '86b6e48e1025410ca5b273b1303211ba'
export const BUNGIENET_BASE_URL = 'https://bungie.net'
export const BUNGIENET_AUTHORIZATION_URL = `${BUNGIENET_BASE_URL}/en/OAuth/Authorize`
export const BUNGIENET_API_ROOT_URL = `${BUNGIENET_BASE_URL}/Platform`
export const BUNGIENET_TOKEN_URL = `${BUNGIENET_API_ROOT_URL}/App/OAuth/token/`