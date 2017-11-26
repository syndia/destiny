/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import { BUNGIENET_BASE_URL } from '../../services/bungie-net/constants'

export default function Icon({ pathname, filter }) {
  return (
    <img
      src={`${BUNGIENET_BASE_URL}${pathname}`}
      css={{
        margin: 0,
        filter: filter ? `hue-rotate(230deg) brightness(40%)` : false,
      }}
    />
  )
}
