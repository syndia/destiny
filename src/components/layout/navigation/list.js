/**
 * External dependencies
 */
import React from 'react'

export default function NavigationList({ children }) {
  return (
    <ul
      css={{
        listStyle: `none`,
        margin: 0,
        padding: 0,
        '&::after': {
          content: ``,
          clear: `both`,
          display: `block`,
          height: 0,
          visibility: `hidden`,
        },
        '& > li:first-child': {
          borderLeft: `none`,
        },
      }}
    >
      {children}
    </ul>
  )
}
