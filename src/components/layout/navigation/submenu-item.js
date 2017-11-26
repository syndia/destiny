/**
 * External dependencies
 */
import React from 'react'
import Link from 'gatsby-link'

/**
 * Internal dependencies
 */
import presets from '../../../utils/presets'
import { options } from '../../../utils/typography'

export default function SubmenuItem({ to, label }) {
  return (
    <li
      css={{
        margin: 0,
        padding: 0,
        lineHeight: `20px`,
        fontFamily: options.headerFontFamily,
        fontSize: `10px`,
        fontWeight: 700,
        letterSpacing: `0.03em`,
        textAlign: `left`,
        textTransform: `uppercase`,
      }}
    >
      <Link
        to={to}
        css={{
          color: presets.palette.white,
          textDecoration: `none`,
          '&:hover': {
            color: presets.palette.text,
          },
        }}
      >
        {label}
      </Link>
    </li>
  )
}
