/**
 * External dependencies
 */
import React from 'react'

export default function Submenu({ expanded, children }) {
  return (
    <ul
      css={{
        zIndex: 10,
        listStyle: `none`,
        position: `fixed`,
        left: 0,
        bottom: expanded ? 0 : `-100px`,
        display: `block`,
        width: `100%`,
        height: `100px`,
        margin: 0,
        padding: `${rem(10)} ${rem(20)}`,
        backgroundColor: presets.palette.primary,
        transition: `bottom ${presets.animation.speedSlow}`,
      }}
    >
      {children}
    </ul>
  )
}
