/**
 * External dependencies
 */
import React, { Children, Component } from 'react'
import { connect } from 'react-redux'

/**
 * Internal dependencies
 */
import { fetchMembershipsForCurrentUser } from '../../state/memberships/actions'
import { getCurrentUserId } from '../../state/selectors'
import { authorizeWithBungieNet } from '../../services/bungie-net/auth'

class BungieNetProvider extends Component {
  componentDidMount() {
    const { isLoggedIn, fetchMembershipsForCurrentUser } = this.props

    if (!isLoggedIn) {
      authorizeWithBungieNet((isAuthenticated, error) => {
        if (error) {
          throw error
          return
        }

        if (isAuthenticated) {
          fetchMembershipsForCurrentUser()
        }
      })
    }
  }

  render() {
    return Children.only(this.props.children)
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isLoggedIn: Boolean(getCurrentUserId(state)),
})

const mapDispatchToProps = {
  fetchMembershipsForCurrentUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(BungieNetProvider)
