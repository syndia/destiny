/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import presets from '../../utils/presets'
import { scale } from '../../utils/typography'

export default function ToutTitle({ children }) {
  return (
    <h2
      className="tout__title"
      css={{
        position: `relative`,
        marginBottom: `22px`,
        paddingTop: `.2em`,
        paddingBottom: `.2em`,
        lineHeight: `50px`,
        fontSize: scale(1.25).fontSize,
        fontWeight: 900,
        letterSpacing: `2px`,
        textTransform: `uppercase`,
        '&:before': {
          content: ` `,
          position: `absolute`,
          top: `-8px`,
          left: 0,
          width: `110px`,
          height: `8px`,
          backgroundColor: presets.palette.white,
        },
        '&:after': {
          content: ` `,
          position: `absolute`,
          top: `100%`,
          left: 0,
          width: `233px`,
          height: `2px`,
          backgroundColor: presets.palette.white,
        },
      }}
    >
      {children}
    </h2>
  )
}
