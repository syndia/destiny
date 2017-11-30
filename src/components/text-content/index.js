/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import Title from './title'
import Subtitle from './subtitle'

export default function TextContent({ title, subtitle, children }) {
  return (
    <div
      css={{
        flex: `auto`,
        minWidth: 0,
      }}
    >
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </div>
  )
}
