/**
 * External dependencies
 */
import { Component } from 'react'

/**
 * Internal dependencies
 */
import { handleAuthorizeCallback } from '../services/bungie-net/auth'

export default class AuthorizeCallback extends Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      handleAuthorizeCallback()
      window.location.href = '/'
    }
  }

  render() {
    return null
  }
}
