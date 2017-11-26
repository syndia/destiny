/**
 * Internal dependencies
 */
const { BUNGIENET_API_KEY, BUNGIENET_API_ROOT_URL } = require('./constants')

/**
 * High-level function to coordinate fetching data from Bungie.net site.
 */
function fetchFromBungieNet(path, options) {
  const url = new URL(`${BUNGIENET_API_ROOT_URL}${path}`)
  const headers = new Headers()
  const searchParams = new URLSearchParams()

  headers.set(`Content-Type`, `application/json; charset=utf-8`)
  headers.set(`X-API-Key`, BUNGIENET_API_KEY)
  headers.set(`Accept-Language`, `en-us`)
  headers.set(`Connection`, `keep-alive`)

  if (window.AUTH_DATA) {
    headers.set(`Authorization`, `Bearer ${window.AUTH_DATA.accessToken}`)
  }

  if (options.method === `POST`) {
    headers.set(`Content-Type`, `application/x-www-form-urlencoded`)
  }

  let init = {
    ...options,
    headers,
    mode: `cors`,
    cache: `default`,
  }

  console.log(`Fetching data from path ${path}`, init)
  const request = new Request(url, init)

  return fetch(request)
    .then(response => {
      if (response.ok) {
        const contentType = response.headers.get(`content-type`)

        if (contentType && contentType.includes(`application/json`)) {
          const data = response.json()
          console.log(`Received data`, data)

          return data
        }

        throw new Error(`Oops, we haven't got JSON!`)
      }

      throw new Error(`Network response was not ok.`)
    })
    .then(data => {
      if (data.ErrorCode !== 1) {
        throw new Error(
          `Bungie.net API Error ${data.ErrorStatus} - ${
            data.Message
          }\n Request: ${request}`
        )
      }

      const result = data.Response || data

      return result
    })
    .catch(error =>
      console.log(
        `There has been a problem with your fetch operation: ${error.message}`
      )
    )
}

export default fetchFromBungieNet
