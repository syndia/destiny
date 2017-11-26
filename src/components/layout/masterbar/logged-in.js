/**
 * External dependencies
 */
import React, { Component } from 'react'

/**
 * Internal dependencies
 */
import { getMembershipsForCurrentUser } from '../../../services/bungie-net/api/user'
import Masterbar from './index'
import Item from './item'

export default class MasterbarLoggedIn extends Component {
  componentDidMount() {
    this.fetchCharacters()
  }

  fetchCharacters = () => {
    getMembershipsForCurrentUser().then(data => console.log(data))
  }

  render() {
    const { title } = this.props
    return (
      <Masterbar>
        <Item className="masterbar__item-title">{title}</Item>
      </Masterbar>
    )
  }
}
