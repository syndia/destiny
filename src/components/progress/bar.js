/**
 * External dependencies
 */
import React from 'react'

export default function Progressbar({ value, max }) {
  return <progress value={value} max={max}>{`${value}%`}</progress>
}
