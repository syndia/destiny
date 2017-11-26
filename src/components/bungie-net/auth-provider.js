/**
 * External dependencies
 */
import React, { Component } from 'react'

/**
 * Internal dependencies
 */
import authorizeWithBungieNet from '../../services/bungie-net/auth'

export default function withBungieNetAuthProvider(WrappedComponent) {
  return class BungieNetAuthProvider extends Component {
    state = {
      isAuthenticated: false,
      isLoaded: false,
    }

    componentDidMount() {
      authorizeWithBungieNet((isAuthenticated, error) => {
        console.log(`Authorize with Bungie.net`, { isAuthenticated, error })

        if (error) {
          throw error
        }

        this.setState({ isAuthenticated, isLoaded: true })
      })
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          isLoaded={this.state.isLoaded}
          isAuthenticated={this.state.isAuthenticated}
        />
      )
    }
  }
}
