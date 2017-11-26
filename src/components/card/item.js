/**
 * External dependencies
 */
import React from 'react'
import Link from 'gatsby-link'

/**
 * Internal dependencies
 */
import presets from '../../utils/presets'

export default function Card({ to, children, row }) {
  return (
    <Link
      className="card__item"
      to={to}
      css={{
        zIndex: 1,
        position: `relative`,
        display: `flex`,
        flexDirection: row ? `row` : `column`,
        alignItems: row ? `center` : `flex-end`,
        width: row ? `calc(50% - 2.25rem)` : `calc(25% - 2.25rem)`,
        marginLeft: `1.125rem`,
        marginBottom: `2.25rem`,
        marginRight: `1.125rem`,
        borderRadius: `${presets.sizes.radiusLarge}px`,
        boxShadow: `0 17px 21px -20px rgba(0, 0, 0, 0.3)`,
        backgroundColor: row ? `white` : `rgba(0, 0, 0, 0.2)`,
        textDecoration: `none`,
        /*
        '&:first-child': {
          width: `calc(66% - 2.25rem)`,
        },
        '&:nth-child(2)': {
          width: `calc(34% - 2.25rem)`,
        },
        */
      }}
    >
      {children}
    </Link>
  )
}
