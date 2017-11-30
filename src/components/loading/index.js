/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import presets from '../../utils/presets'

export default function Loading({ children }) {
  return (
    <div
      css={{
        position: `absolute`,
        left: 0,
        bottom: 0,
        width: `100%`,
        height: `calc(100vh - ${presets.sizes.masterbarHeight}px)`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      {children}
    </div>
  )
}
