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

export default class MasterbarLoggedIn extends Component {
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
      </Masterbar>
    )
  }
}
