/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import presets from '../../../utils/presets'
import media from '../../../utils/media'
import { rhythm, scale } from '../../../utils/typography'
import SocialItem from '../../social/item'
import Masterbar from './index'
import Navigation from '../navigation'
import Item from './item'

const itemStyles = {
  position: `relative`,
  top: 0,
  display: `inline-block`,
  padding: `0 ${rhythm(0.5)} ${rhythm(0.25)}`,
  opacity: 0.8,
  color: `inherit`,
  lineHeight: `calc(${presets.sizes.masterbarHeight} - 4px)`,
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
  navLinks,
  socialLinks,
}) {
  const isHomepage = pathname === `/`

  return (
    <Masterbar isHomepage={isHomepage}>
      <Item
        className="masterbar__item-title"
        css={{
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
      {navLinks && (
        <Navigation>
          {navLinks.map(item => (
            <Item
              to={item.pathname}
              key={`navbar nav-item-${item.label}`}
              css={{
                ...itemStyles,
                top: `4px`,
                margin: 0,
                borderBottom: `2px solid transparent`,
                '&:hover': {
                  borderColor: presets.palette.white,
                },
              }}
            >
              {item.label}
            </Item>
          ))}
        </Navigation>
      )}
      {socialLinks && (
        <div
          css={{
            marginLeft: isHomepage ? rhythm(1 / 2) : `auto`,
            '& > :last-child': { paddingRight: 0 },
            [media(`tablet`)]: {
              marginLeft: `auto`,
            },
          }}
        >
          {socialLinks.map(url => (
            <SocialItem
              key={`social-item-${url}`}
              link={url}
              css={{
                ...itemStyles,
                top: `2px`,
                opacity: 0.8,
                fontSize: scale(1 / 3).fontSize,
                '&:hover': {
                  opacity: 1,
                  transform: `scale(1.2)`,
                },
              }}
            />
          ))}
        </div>
      )}
    </Masterbar>
  )
}
