/**
 * External dependencies
 */
import React, { Component } from 'react'

/**
 * Internal dependencies
 */
import authorizeWithBungieNet from '../../services/bungie-net/auth'

export default function withBungieNetProvider(WrappedComponent) {
  return class BungieNetProvider extends Component {
    state = {
      isAuthenticated: false,
      isLoaded: false,
    }

    componentDidMount() {
      authorizeWithBungieNet((isAuthenticated, error) => {
        console.log(`BungieNetProvider`, { isAuthenticated, error })

        if (error) {
          throw error
        }

        this.setState({ isAuthenticated, isLoaded: true })
      })
    }

    render() {
      const { isLoaded, isAuthenticated } = this.state

      return (
        <WrappedComponent
          {...this.props}
          isLoaded={isLoaded}
          isAuthenticated={isAuthenticated}
        />
      )
    }
  }
}
