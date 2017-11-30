/**
 * External dependencies
 */
import React, { Component } from 'react'

class UserInfoCard extends Component {
  static mapMembershipType(type) {
    switch (type) {
      case 1:
        return `Xbox`
      case 2:
        return `PSN`
      case 4:
        return `Blizzard`
      default:
        return `Unknown`
    }
  }

  render() {
    if (!this.props.user) {
      return null
    }

    return (
      <div>
        <div>
          <h2>Bungie membership</h2>
        </div>
      </div>
    )
  }
}
