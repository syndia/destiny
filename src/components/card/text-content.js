/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import presets from '../../utils/presets'

export default function TextContent({ title, subtitle, children }) {
  return (
    <div
      className="text-content"
      css={{
        zIndex: 2,
        flex: `1 0`,
        position: `relative`,
        width: `100%`,
        padding: `2em`,
        borderRadius: `0 0 ${presets.sizes.radiusLarge}px ${
          presets.sizes.radiusLarge
        }px`,
        background: presets.palette.white,
        color: presets.palette.light,
      }}
    >
      {children}
      <div
        className="text-content__line-item"
        css={{
          position: `relative`,
          display: `block`,
          alignItems: `center`,
        }}
      >
        <div
          className="line-item__title"
          css={{
            marginBottom: `0.25rem`,
            color: presets.palette.text,
            fontWeight: 700,
            textTransform: `uppercase`,
          }}
        >
          {title}
        </div>
        <div
          className="line-item__subtitle"
          css={{
            color: presets.palette.text,
            opacity: 0.75,
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  )
}
