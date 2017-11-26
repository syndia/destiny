/**
 * External dependencies
 */
import React, { Component } from 'react'
import Link from 'gatsby-link'

/**
 * Internal dependencies
 */
import presets from '../../../utils/presets'
import { scale, options } from '../../../utils/typography'

export default class MasterbarItem extends Component {
  render() {
    const { url = '/', tooltip, className, style, children } = this.props

    return (
      <Link
        className={className}
        to={url}
        title={tooltip}
        css={{
          flex: `0 1 auto`,
          display: `flex`,
          alignItems: `center`,
          position: `relative`,
          padding: `0 15px`,
          color: `inherit`,
          textDecoration: `none`,
          ...style,
        }}
      >
        <span
          css={{
            fontFamily: options.headerFontFamily,
            fontSize: `14px`,
            fontWeight: 200,
            letterSpacing: `4px`,
            textTransform: `uppercase`,
          }}
        >
          {children}
        </span>
      </Link>
    )
  }
}
