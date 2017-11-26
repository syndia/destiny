/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import media from '../../../utils/media'

export default function Navigation({ children }) {
  return (
    <nav
      css={{
        display: `none`,
        [media(`tablet`)]: {
          display: `block`,
          margin: 0,
          padding: 0,
        },
      }}
    >
      {children}
    </nav>
  )
}
