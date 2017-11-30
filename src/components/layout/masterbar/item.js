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
    const { url = '/', tooltip, children, ...rest } = this.props

    return (
      <Link to={url} title={tooltip} {...rest}>
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
