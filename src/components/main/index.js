/**
 * External dependencies
 */
import React from 'react'

export default function Main({ wideLayout, className, children }) {
  return (
    <main
      className={className}
      role="main"
      css={{
        zIndex: 1,
        maxWidth: wideLayout ? `100%` : `720px`,
        margin: `auto`,
        backfaceVisibility: `hidden`,
      }}
    >
      {children}
    </main>
  )
}
