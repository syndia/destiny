/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import presets from '../../utils/presets'

export default function({ imageUrl }) {
  return (
    <div
      css={{
        zIndex: 1,
        flex: `5 0`,
        position: `relative`,
        width: `100%`,
        height: `15rem`,
        maxHeight: `15rem`,
        borderRadius: `${presets.sizes.radiusLarge}px ${
          presets.sizes.radiusLarge
        }px 0 0`,
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
    />
  )
}
