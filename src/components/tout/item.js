/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import presets from '../../utils/presets'
import Cover from '../cover/image'
import Title from './title'

export default function Tout({ title, imageUrl, className, style, children }) {
  return (
    <div
      className={className}
      css={{
        position: `relative`,
        float: `left`,
        width: `50%`,
        borderWidth: `4px 0 4px 0`,
        borderStyle: `solid`,
        borderColor: presets.palette.white,
        '&:before': {
          content: ` `,
          display: `block`,
          width: `100%`,
          height: 0,
          paddingTop: `68.66%`,
        },
        ...style,
      }}
    >
      <div
        className="tout__inner"
        css={{
          zIndex: 10,
          position: `absolute`,
          top: `50%`,
          left: `50%`,
          width: `82%`,
          color: presets.palette.white,
          transform: `translate(-50%, -50%)`,
        }}
      >
        <Title>{title}</Title>
        {children}
      </div>
      {imageUrl && (
        <Cover
          className="tout__background"
          imageUrl={imageUrl}
          css={{
            '&:before': {
              zIndex: 2,
              content: ` `,
              position: `absolute`,
              left: 0,
              top: 0,
              width: `100%`,
              height: `100%`,
              background: `linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.25))`,
            },
          }}
        />
      )}
    </div>
  )
}
