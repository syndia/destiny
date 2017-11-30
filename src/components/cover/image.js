/**
 * External dependencies
 */
import React from 'react'

export default function Image({ imageUrl, backgroundPosition, className }) {
  return (
    <div
      className={className}
      css={{
        position: `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        height: `100%`,
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `50% 50%`,
        backgroundSize: `cover`,
        opacity: 1,
      }}
    />
  )
}
