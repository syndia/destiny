/**
 * Internal dependencies
 */
import { BUNGIENET_API_KEY, BUNGIENET_API_ROOT_URL } from './constants'

export const getPublicMilestones = () => {
  return fetchFromBungieNet(`/Destiny2/Milestones/`, { method: 'GET' })
}

const fetchFromBungieNet = async (path, addons) => {
  const headers = new Headers()
  headers.set(`X-API-Key`, BUNGIENET_API_KEY)

  const init = {
    ...addons,
    headers: headers,
    mode: `cors`,
    cache: `default`,
  }

  try {
    console.log(`Fetching resource from path ${path}`, init)
    const request = new Request(`${BUNGIENET_API_ROOT_URL}${path}`)
    const response = await fetch(request, init)
    if (response.ok) {
      const resource = response.json()
      console.log(`Received resource`, resource)
      return resource
    } else {
      console.error(
        `Failed to fetch resource. Got response code: ${response.status}`
      )
    }
  } catch (error) {
    console.error(`Failed to fetch resource`, error)
  }
}
