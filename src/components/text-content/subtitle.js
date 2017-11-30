/**
 * External dependencies
 */
import React from 'react'

export default function Subtitle({ children }) {
  return (
    <div
      css={{
        overflow: `hidden`,
        marginTop: `0.25rem`,
        whiteSpace: `wrap`,
        opacity: 0.85,
        fontSize: `0.85rem`,
      }}
    >
      {children}
    </div>
  )
}
