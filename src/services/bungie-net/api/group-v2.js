/**
 * Internal dependencies
 */
import fetch from '../fetch'

/**
 * Bungie.net GroupV2 API
 *
 * @see https://bungie-net.github.io/
 */
const API_PATH = `/GroupV2`

export const getAvailableAvatars = () =>
  fetch(`${API_PATH}/GetAvailableAvatars/`, { method: `GET` })

export const getAvailableThemes = () =>
  fetch(`${API_PATH}/GetAvailableThemes`, { method: `GET` })

export const getUserClanInviteSetting = membershipType =>
  fetch(`${API_PATH}/GetUserClanInviteSetting/${membershipType}/`, {
    method: `GET`,
  })

export const setUserClanInviteSetting = (
  membershipType,
  allowInvites,
  postBody
) =>
  fetch(
    `${API_PATH}/SetUserClanInviteSetting/${membershipType}/${allowInvites}/`,
    { method: `POST`, body: postBody }
  )

export const getRecommendedGroups = (groupType, createDateRange, postBody) =>
  fetch(`${API_PATH}/Recommended/${groupType}/${createDateRange}/`, {
    method: `POST`,
    body: postBody,
  })

export const groupSearch = postBody =>
  fetch(`${API_PATH}/Search/`, { method: `POST`, body: postBody })

export const getGroup = groupId =>
  fetch(`${API_PATH}/${groupId}/`, { method: `GET` })

export const getGroupByName = (groupName, groupType) =>
  fetch(`${API_PATH}/Name/${groupName}/${groupType}/`, { method: `GET` })

export const getGroupOptionalConversations = groupId =>
  fetch(`${API_PATH}/${groupId}/OprionalConversations/`, { method: `GET` })

export const createGroup = postBody =>
  fetch(`${API_PATH}/Create/`, { method: `POST`, body: postBody })

export const editGroup = (groupId, postBody) =>
  fetch(`${API_PATH}/${groupId}/Edit/`, { method: `POST`, body: postBody })

export const editClanBanner = (groupId, postBody) =>
  fetch(`${API_PATH}/${groupId}/EditClanBanner/`, {
    method: `POST`,
    body: postBody,
  })

export const editFounderOptions = (groupId, postBody) =>
  fetch(`${API_PATH}/${groupId}/EditFounderOptions/`, {
    method: `POST`,
    body: postBody,
  })

export const addOptionalConversation = (groupId, postBody) =>
  fetch(`${API_PATH}/${groupId}/OptionalConversations/Add/`, {
    method: `POST`,
    body: postBody,
  })

export const editOptionalConversation = (groupId, conversationId, postBody) =>
  fetch(
    `${API_PATH}/${groupId}/OptionalConversations/Edit/${conversationId}/`,
    { method: `POST`, body: postBody }
  )

export const getMembersOfGroup = groupId =>
  fetch(`${API_PATH}/${groupId}/Members/`, { method: `GET` })

export const getAdminsAndFounderOfGroup = groupId =>
  fetch(`${API_PATH}/${groupId}/AdminsAndFounder/`, { method: `GET` })

export const editGroupMembership = (
  groupId,
  membershipType,
  membershipId,
  memberType,
  postBody
) =>
  fetch(
    `${API_PATH}/${groupId}/Members/${membershipType}/${
      membershipId
    }/SetMembershipType/${memberType}`,
    { method: `POST`, body: postBody }
  )

export const kickMember = (groupId, membershipType, membershipId, postBody) =>
  fetch(
    `${API_PATH}/${groupId}/Members/${membershipType}/${membershipId}/Kick/`,
    { method: `POST`, body: postBody }
  )

export const banMember = (groupId, membershipType, membershipId, postBody) =>
  fetch(
    `${API_PATH}/${groupId}/Members/${membershipType}/${membershipId}/Ban/`,
    { method: `POST`, body: postBody }
  )

export const unbanMember = (groupId, membershipType, membershipId, postBody) =>
  fetch(
    `${API_PATH}/${groupId}/Members/${membershipType}/${membershipId}/Unban/`,
    { method: `POST`, body: postBody }
  )

export const getBannedMembersOfGroup = groupId =>
  fetch(`${API_PATH}/${groupId}/Banned/`, { method: `GET` })

export const abdicateFoundership = (
  groupId,
  membershipType,
  founderIdNew,
  postBody
) =>
  fetch(
    `${API_PATH}/${groupId}/Admin/AbdicateFoundership/${membershipType}/${
      founderIdNew
    }/`,
    { method: `POST`, body: postBody }
  )

export const requestGroupMembership = (groupId, membershipId, postBody) =>
  fetch(`${API_PATH}/${groupId}/Members/Apply/${membershipType}/`, {
    method: `POST`,
    body: postBody,
  })

export const getPendingMemberships = groupId =>
  fetch(`${API_PATH}/${groupId}/Members/Pending/`, { method: `GET` })

export const getInvitedIndividuals = groupId =>
  fetch(`${API_PATH}/${groupId}/Members/InvitedIndividuals/`, { method: `GET` })

export const rescindGroupMembership = (groupId, membershipType, postBody) =>
  fetch(`${API_PATH}/${groupId}/Members/Rescind/${membershipType}`, {
    method: `POST`,
    body: postBody,
  })

export const approveAllPending = (groupId, postBody) =>
  fetch(`${API_PATH}/${groupId}/Members/ApproveAll`, {
    method: `POST`,
    body: postBody,
  })

export const denyAllPending = (groupId, postBody) =>
  fetch(`${API_PATH}/${groupId}/Members/DenyAll/`, {
    method: `POST`,
    body: postBody,
  })

export const approvePendingForList = (groupId, postBody) =>
  fetch(`${API_PATH}/${groupId}/Members/ApproveList`, {
    method: `POST`,
    body: postBody,
  })

export const approvePending = (
  groupId,
  membershipType,
  membershipId,
  postBody
) =>
  fetch(
    `${API_PATH}/${groupId}/Members/Approve/${membershipType}/${membershipId}/`,
    { method: `POST`, body: postBody }
  )

export const denyPendingForList = (groupId, postBody) =>
  fetch(`${API_PATH}/${groupId}/Members/DenyList/`, {
    method: `POST`,
    body: postBody,
  })

export const getGroupsForMember = ({
  membershipType,
  membershipId,
  filter,
  groupType,
}) =>
  fetch(
    `${API_PATH}/User/${membershipType}/${membershipId}/${filter}/${
      groupType
    }/`,
    { method: `GET` }
  )

export const getPotentialGroupsForMember = (
  membershipType,
  membershipId,
  filter,
  groupType
) =>
  fetch(
    `${API_PATH}/User/Potential/${membershipType}/${membershipId}/${filter}/${
      groupType
    }/`,
    { method: `GET` }
  )

export const individualGroupInvite = (
  groupId,
  membershipType,
  membershipId,
  postBody
) =>
  fetch(
    `${API_PATH}/${groupId}/Members/IndividualInvite/${membershipType}/${
      membershipId
    }/`,
    { method: `POST`, body: postBody }
  )

export const individualGroupInviteCancel = (
  groupId,
  membershipType,
  membershipId,
  postBody
) =>
  fetch(
    `${API_PATH}/${groupId}/Members/IndividualInviteCancel/${membershipType}/${
      membershipId
    }/`,
    { method: `POST`, body: postBody }
  )
