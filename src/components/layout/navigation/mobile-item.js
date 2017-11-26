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
import rem from '../../../utils/rem'

export default function MobileNavigationItem({
  to,
  url,
  active,
  onClick,
  children,
}) {
  let Child
  if (to) {
    Child = Link
  } else {
    Child = 'a'
  }

  return (
    <li
      onClick={onClick}
      css={{
        float: `left`,
        display: `block`,
        width: `25%`,
        height: rem(75),
        lineHeight: rem(75),
        borderTop: `5px solid ${active
          ? presets.palette.primary
          : presets.palette.light}`,
        borderLeft: `1px solid ${presets.palette.light}`,
        textAlign: `center`,
      }}
    >
      <Child
        to={to}
        href={url}
        css={{
          position: `relative`,
          display: `block`,
          verticalAlign: `middle`,
          color: active ? presets.palette.primary : presets.palette.light,
          fontFamily: options.headerFontFamily.join(`,`),
          fontSize: `10px`,
          fontWeight: 700,
          letterSpacing: `0.03em`,
          textDecoration: `none`,
          textTransform: `uppercase`,
          '&:hover': {
            color: !active && presets.palette.text,
          },
        }}
      >
        {children}
      </Child>
    </li>
  )
}
