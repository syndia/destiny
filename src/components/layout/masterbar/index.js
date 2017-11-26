/**
 * External dependencies
 */
import React from 'react'
import rgba from 'polished/lib/color/rgba'

/**
 * Internal dependencies
 */
import presets from '../../../utils/presets'
import { rhythm, scale, options } from '../../../utils/typography'
import media from '../../../utils/media'
import rem from '../../../utils/rem'
import gutters from '../../../utils/gutters'

export default function Masterbar({ isHomepage, children, ...rest }) {
  let styles = {}
  if (isHomepage) {
    styles.backgroundColor = rgba(presets.palette.white, 0)
    styles.borderBottomColor = `transparent`
    styles[media(`tablet`)] = {
      position: isHomepage ? `absolute` : `fixed`,
    }
  }

  return (
    <header
      id="header"
      className="masterbar"
      css={{
        zIndex: 10,
        position: isHomepage ? `absolute` : false,
        left: 0,
        right: 0,
        height: rem(presets.sizes.masterbarHeight),
        borderBottom: `1px solid`,
        borderBottomColor: isHomepage ? `transparent` : presets.palette.light,
        backgroundColor: isHomepage
          ? rgba(presets.palette.black, 0)
          : rgba(presets.palette.white, 0.975),
        color: isHomepage ? presets.palette.white : presets.palette.text,
        [media(`tablet`)]: {
          position: isHomepage ? `absolute` : `fixed`,
        },
        ...styles,
      }}
    >
      <div
        {...rest}
        css={{
          display: `flex`,
          alignItems: `center`,
          width: `100%`,
          height: `100%`,
          margin: `0 auto`,
          paddingLeft: rhythm(3 / 4),
          paddingRight: rhythm(3 / 4),
          ...(isHomepage ? gutters : {}),
        }}
      >
        {children}
      </div>
    </header>
  )
}
