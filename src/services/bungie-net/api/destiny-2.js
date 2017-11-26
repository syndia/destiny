/**
 * Internal dependencies
 */
import fetch from '../fetch'

/**
 * Bungie.net Destiny2 API
 *
 * @see https://bungie-net.github.io/
 */
const API_PATH = `/Destiny2`

export const getDestinyManifest = () =>
  fetch(`${API_PATH}/Manifest/`, { method: `GET` })

export const getDestinyEntityDefinition = (entityType, hashIdentifier) =>
  fetch(`${API_PATH}/Manifest/${entityType}/${hashIdentifier}/`, {
    method: `GET`,
  })

export const searchDestinyPlayer = (membershipType, displayName) =>
  fetch(`${API_PATH}/SearchDestinyPlayer/${membershipType}/${displayName}/`, {
    method: `GET`,
  })

export const getProfile = ({ membershipType, membershipId }) =>
  fetch(`${API_PATH}/${membershipType}/Profile/${membershipId}/`, {
    method: `GET`,
  })

export const getCharacter = (
  membershipType,
  destinyMembershipId,
  characterId
) =>
  fetch(
    `${API_PATH}/${membershipType}/Profile/${destinyMembershipId}/Character/${
      characterId
    }/`,
    { method: `GET` }
  )

export const getClanWeeklyRewardState = groupId =>
  fetch(`${API_PATH}/Clan/${groupId}/WeeklyRewardState/`, { method: `GET` })

export const getItem = (membershipType, destinyMembershipId, itemInstanceId) =>
  fetch(
    `${API_PATH}/${membershipType}/Profile/${destinyMembershipId}/Item/${
      itemInstanceId
    }/`,
    { method: `GET` }
  )

export const getVendors = (membershipType, destinyMembershipId, characterId) =>
  fetch(
    `${API_PATH}/${membershipType}/Profile/${destinyMembershipId}/Character/${
      characterId
    }/Vendors/`,
    { method: `GET` }
  )

export const getVendor = (
  membershipType,
  destinyMembershipId,
  characterId,
  vendorHash
) =>
  fetch(
    `${API_PATH}/${membershipType}/Profile/${destinyMembershipId}/Character/${
      characterId
    }/Vendors/${vendorHash}/`,
    { method: `GET` }
  )

export const transferItem = postBody =>
  fetch(`${API_PATH}/Actions/Items/TransferItem/`, {
    method: `POST`,
    body: postBody,
  })

export const equipItem = postBody =>
  fetch(`${API_PATH}/Actions/Items/EquipItem`, {
    method: `POST`,
    body: postBody,
  })

export const equipItems = postBody =>
  fetch(`${API_PATH}/Actions/Items/EquipItems/`, {
    method: `POST`,
    body: postBody,
  })

export const setItemLockState = postBody =>
  fetch(`${API_PATH}/Actions/Items/SetLockState/`, {
    method: `POST`,
    body: postBody,
  })

export const insertSocketPlug = postBody =>
  fetch(`${API_PATH}/Actions/Items/InsertSocketPlug/`, {
    method: `POST`,
    body: postBody,
  })

export const activateTalentNode = postBody =>
  fetch(`${API_PATH}/Actions/Items/ActivateTalentNode/`, {
    method: `POST`,
    body: postBody,
  })

export const getPostGameCarnageReport = activityId =>
  fetch(`${API_PATH}/Stats/PostGameCarnageReport/${activityId}/`, {
    method: `GET`,
  })

export const getHistoricalStatsDefinition = () =>
  fetch(`${API_PATH}/Stats/Definition/`, { method: `GET` })

export const getClanLeaderboards = groupId =>
  fetch(`${API_PATH}/Stats/Leaderboards/Clans/${groupId}/`, { method: `GET` })

export const getClanAggregateStats = groupId =>
  fetch(`${API_PATH}/Stats/AggregateClanStats/${groupId}/`, { method: `GET` })

export const getLeaderboards = (membershipType, destinyMembershipId) =>
  fetch(
    `${API_PATH}/${membershipType}/Account/${
      destinyMembershipId
    }/Stats/Leaderboards/`,
    { method: `GET` }
  )

export const getLeaderboardsForCharacter = (
  membershipType,
  destinyMembershipId,
  characterId
) =>
  fetch(
    `${API_PATH}/Stats/Leaderboards/${membershipType}/${destinyMembershipId}/${
      characterId
    }/`,
    { method: `GET` }
  )

export const searchDestinyEntities = (type, searchTerm) =>
  fetch(`${API_PATH}/Armory/Search/${type}/${searchTerm}/`, { method: `GET` })

export const getHistoricalStats = (
  membershipType,
  destinyMembershipId,
  characterId
) =>
  fetch(
    `${API_PATH}/${membershipType}/Account/${destinyMembershipId}/Character/${
      characterId
    }/Stats/`,
    { method: `GET` }
  )

export const getHistoricalStatsForAccount = (
  membershipType,
  destinyMembershipId
) =>
  fetch(`${API_PATH}/${membershipType}/Account/${destinyMembershipId}/Stats/`, {
    method: `GET`,
  })

export const getActivityHistory = (
  membershipType,
  destinyMembershipId,
  characterId
) =>
  fetch(
    `${API_PATH}/${membershipType}/Account/${destinyMembershipId}/Character/${
      characterId
    }/Stats/Activities/`,
    { method: `GET` }
  )

export const getUniqueWeaponHistory = (
  membershipType,
  destinyMembershipId,
  characterId
) =>
  fetch(
    `${API_PATH}/${membershipType}/Account/${destinyMembershipId}/Character/${
      characterId
    }/Stats/UniqueWeapons/`,
    { method: `GET` }
  )

export const getDestinyAggregateActivityStats = (
  membershipType,
  destinyMembershipId,
  characterId
) =>
  fetch(
    `${API_PATH}/${membershipType}/Account/${destinyMembershipId}/Character/${
      characterId
    }/Stats/AggregateActivityStats/`,
    { method: `GET` }
  )

export const getPublicMilestoneContent = milestoneHash =>
  fetch(`${API_PATH}/Milestones/${milestoneHash}/Content/`, { method: `GET` })

export const getPublicMilestones = () =>
  fetch(`${API_PATH}/Milestones/`, { method: `GET` })
