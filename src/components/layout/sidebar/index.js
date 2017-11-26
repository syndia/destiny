/**
 * External dependencies
 */
import React from 'react'

export default function Sidebar({ yaml, ...rest }) {
  const menu = yaml
  if (menu.length < 1) {
    return null
  }

  return (
    <div
      css={{
        position: `fixed`,
        float: `left`,
        display: isVisible ? `block` : `none`,
        width: rhythm(presets.sidebarWidth),
        height: `calc(100vh - ${presets.masterbarHeight})`,
      }}
    />
  )
}
