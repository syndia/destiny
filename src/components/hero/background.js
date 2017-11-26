/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import presets from '../../utils/presets'

export default function HeroBackground({ source }) {
  return (
    <div
      css={{
        zIndex: 1,
        position: `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        height: `100%`,
        backgroundImage: `url(${source})`,
        backgroundPosition: `center top`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        transition: `opacity ${presets.animation.speedSlow}`,
      }}
    />
  )
}
