/**
 * Internal dependencies
 */
import { BUNGIENET_API_KEY, BUNGIENET_API_ROOT_URL } from './constants'

export const getPublicMilestones = () => {
  return fetchFromBungieNet(`/Destiny2/Milestones/`, { method: 'GET' })
}

const fetchFromBungieNet = (path, addons) => {
  if (typeof fetch === `undefined`) {
    return null
  }
  const headers = new Headers()
  headers.set(`Accept`, `application/json`)
  headers.set(`X-API-Key`, BUNGIENET_API_KEY)

  const init = {
    ...addons,
    headers,
    mode: `cors`,
    cache: `no-cache`,
  }

  console.log(`Fetching resource from path ${path}`, init)
  const request = new Request(`${BUNGIENET_API_ROOT_URL}${path}`)
  console.log(request)

  fetch(request, init)
    .then(response => {
      if (response.ok) {
        const resource = response.json()
        console.log(`Received resource`, resource)
        return resource
      }
      throw new Error(`Network response was not ok.`)
    })
    .catch(error =>
      console.log(
        `There has been a problem with your fetch operation: ${error.message}`
      )
    )
}
