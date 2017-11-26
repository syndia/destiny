/**
 * External dependencies
 */
import React from 'react'

export default function HeroSubtitle({ text }) {
  return (
    <h3
      css={{
        position: `relative`,
        marginBottom: `24px`,
        lineHeight: `14px`,
        fontSize: `24px`,
        fontWeight: 700,
        letterSpacing: `3.7px`,
        textTransform: `uppercase`,
      }}
    >
      {text}
    </h3>
  )
}
