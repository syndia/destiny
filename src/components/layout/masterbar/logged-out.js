/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import presets from '../../../utils/presets'
import { rhythm, scale } from '../../../utils/typography'
import Masterbar from './index'
import Navigation from '../navigation'
import Item from './item'

const itemStyles = {
  position: `relative`,
  top: 0,
  display: `inline-block`,
  padding: `4px ${rhythm(0.5)} 0`,
  color: `inherit`,
  lineHeight: `calc(${presets.masterbarHeight} - 4px)`,
  textDecoration: `none`,
  textTransform: `uppercase`,
  letterSpacing: `0.03em`,
  transitionDuration: presets.animation.speedFast,
  transitionProperty: `color, opactiy, scale`,
  transitionTimingFunction: `ease-in-out`,
  '&:hover': {
    opacity: 1,
  },
}

export default function MasterbarLoggedOut({
  pathname,
  title = `Syndia`,
  socialLinks,
}) {
  const isHomepage = pathname === `/`

  return (
    <Masterbar isHomepage={isHomepage}>
      <Item
        className="masterbar__item-title"
        style={{
          display: `inline-block`,
          marginRight: rhythm(0.5),
          color: `inherit`,
          textDecoration: `none`,
        }}
      >
        <h1
          css={{
            display: `inline-block`,
            margin: 0,
            verticalAlign: `middle`,
            ...scale(2 / 5),
          }}
        >
          {title}
        </h1>
      </Item>
      <Navigation>
        <Item>{`Blog`}</Item>
      </Navigation>
    </Masterbar>
  )
}
