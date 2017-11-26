/**
 * Internal dependencies
 */
import fetch from '../fetch'

/**
 * Bungie.net User API
 *
 * @see https://bungie-net.github.io/
 */
const API_PATH = `/User`

export const getBungieNetUserById = id =>
  fetch(`${API_PATH}/GetBungieNetUserById/${id}/`, { method: `GET` })

export const getUserAliases = id =>
  fetch(`${API_PATH}/Aliases/${id}/`, { method: `GET` })

export const searchUsers = queryString =>
  fetch(`${API_PATH}/SearchUsers/?${queryString}`, { method: `GET` })

export const getAvailableThemes = () =>
  fetch(`${API_PATH}/GetAvailableThemes/`, { method: `GET` })

export const getMembershipsById = (membershipId, membershipType) =>
  fetch(`${API_PATH}/GetMembershipsById/${membershipId}/${membershipType}/`, {
    method: `GET`,
  })

export const getMembershipsForCurrentUser = () =>
  fetch(`${API_PATH}/GetMembershipsForCurrentUser/`, { method: `GET` })

export const getPartnerships = membershipId =>
  fetch(`${API_PATH}/${membershipId}/Partnerships/`, { method: `GET` })
