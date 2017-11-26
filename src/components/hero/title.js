/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import presets from '../../utils/presets'

const decorationStyle = {
  content: ' ',
  position: `absolute`,
  width: `72px`,
  height: `1px`,
  backgroundColor: presets.palette.white,
}

export default function HeroTitle({ text }) {
  return (
    <h1
      css={{
        position: `relative`,
        width: `100%`,
        margin: `13px 0 50px`,
        padding: `33px 0`,
        border: `1px solid ${presets.palette.white}`,
        color: presets.palette.white,
        fontSize: `72px`,
        letterSpacing: `10px`,
        textAlign: `center`,
        textTransform: `uppercase`,
        '&:before': {
          ...decorationStyle,
          top: `-13px`,
          left: 0,
        },
        '&:after': {
          ...decorationStyle,
          bottom: `-13px`,
          right: 0,
        },
      }}
    >
      {text}
    </h1>
  )
}
