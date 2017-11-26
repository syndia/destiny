/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import presets from '../../utils/presets'
import rem from '../../utils/rem'
import { options } from '../../utils/typography'

export default function HeroButton({ href, onClick, children }) {
  return (
    <div
      css={{
        display: `block`,
        minWidth: rem(216),
        maxWidth: rem(320),
        height: rem(50),
        lineHeight: rem(50),
        margin: `0 auto`,
        border: `1px solid ${presets.palette.white}`,
        backgroundColor: presets.palette.white,
        fontFamily: options.headerFontFamily,
        fontSize: `14px`,
        fontWeight: 700,
        textAlign: `center`,
        textTransform: `uppercase`,
        transition: `all ${presets.animation.speedDefault} ease-out`,
        '&:hover': {
          border: `1px solid ${presets.palette.white}`,
          backgroundColor: presets.palette.light,
        },
      }}
    >
      <a
        href={href}
        onClick={onClick}
        css={{
          display: `block`,
          color: presets.palette.text,
          letterSpacing: `2px`,
          textDecoration: `none`,
          transition: `all ${presets.animation.speedDefault} ease-out`,
          '&:hover': {
            color: presets.palette.white,
          },
        }}
      >
        {children}
      </a>
    </div>
  )
}
