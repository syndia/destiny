/**
 * External dependencies
 */
import React from 'react'

export default function Title({ children }) {
  return (
    <div
      css={{
        overflow: `hidden`,
        marginTop: `-0.125rem`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        fontSize: `1rem`,
      }}
    >
      {children}
    </div>
  )
}
