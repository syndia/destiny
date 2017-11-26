/**
 * External dependencies
 */
import React from 'react'

export default function Image({ imageUrl, backgroundPosition, css }) {
  return (
    <div
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
        ...css,
      }}
    />
  )
}
