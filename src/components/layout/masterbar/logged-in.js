/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import Item from './item'

export default function MasterbarLoggedIn({ title }) {
  return (
    <Masterbar>
      <Item className="masterbar__item-title">{title}</Item>
    </Masterbar>
  )
}
