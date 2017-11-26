/**
 * External dependencies
 */
import React, { Component } from 'react'

/**
 * Internal dependencies
 */
import { rhythm, scale } from '../../../utils/typography'
import { getMembershipsForCurrentUser } from '../../../services/bungie-net/api/user'
import Masterbar from './index'
import Item from './item'

export default class MasterbarLoggedIn extends Component {
  componentDidMount() {
    this.fetchMemberships()
  }

  fetchMemberships = () => {
    getMembershipsForCurrentUser()
      .then(data => {
        if (!data) {
          return
        }

        this.setState({ data })
      })
      .catch(error => console.error(error))
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
