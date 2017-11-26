/**
 * External dependencies
 */
import React, { Component } from 'react'
import { sortBy } from 'lodash'

/**
 * Internal dependencies
 */
import { rhythm, scale } from '../../../utils/typography'
import { getMembershipsForCurrentUser } from '../../../services/bungie-net/api/user'
import { getProfile } from '../../../services/bungie-net/api/destiny-2'
import store from '../../../services/bungie-net/local-storage'
import Masterbar from './index'
import Item from './item'

const LOCAL_STORAGE_ACCOUNT = '$account'
const COMPONENT_PROFILES = 100
const COMPONENTS = [COMPONENT_PROFILES]

export default class MasterbarLoggedIn extends Component {
  state = {}

  componentDidMount() {
    this.fetchMemberships()
  }

  fetchMemberships = () => {
    getMembershipsForCurrentUser()
      .then(data => {
        if (!data) {
          return
        }

        return Promise.all(
          data.destinyMemberships.map(membership =>
            getProfile(membership, COMPONENTS)
          )
        )
      })
      .then(profiles => {
        return sortBy(
          profiles
            .filter(Boolean)
            .filter(({ profile }) => profile.data.versionsOwned === 1),
          ({ profile }) => {
            return new Date(profile.data.dateLastPlayed).getTime()
          }
        ).reverse()
      })
      .then(profiles => {
        this.setState({ profiles })

        store
          .get(LOCAL_STORAGE_ACCOUNT)
          .then(({ membershipId, membershipType }) => {})
          .catch(error => {
            if (error) {
              console.log(error)
            }

            const currentProfile = this.switchProfile(profiles[0])

            return Promise.resolve(currentProfile)
          })
      })
      .catch(error => console.error(error))
  }

  switchProfile = profile => {
    const { profile: { data: { membershipId, membershipType } } } = profile

    store.set(LOCAL_STORAGE_ACCOUNT, { membershipId, membershipType })
  }

  render() {
    const { title } = this.props
    return (
      <Masterbar>
        <Item className="masterbar__item-title">
          {' '}
          <h1
            css={{
              display: `inline-block`,
              margin: 0,
              verticalAlign: `middle`,
              ...scale(2 / 5),
            }}
          >
            {title || `Syndia`}
          </h1>
        </Item>
        <Item />
      </Masterbar>
    )
  }
}
