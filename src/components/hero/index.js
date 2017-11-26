/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import presets from '../../utils/presets'
import rem from '../../utils/rem'
import HeroBackground from './background'

export default function Hero({ imageUrl, children }) {
  return (
    <section
      className="hero"
      css={{
        position: `relative`,
        width: `100%`,
        height: `95vh`,
        backgroundColor: presets.palette.text,
      }}
    >
      {imageUrl && <HeroBackground source={imageUrl} />}
      <div
        className="hero__content"
        css={{
          zIndex: 10,
          position: `absolute`,
          top: `50%`,
          left: `50%`,
          width: `90%`,
          maxWidth: rem(646),
          color: presets.palette.white,
          transform: `translate(-50%, -50%)`,
          [presets.tablet]: {
            bottom: `10%`,
          },
        }}
      >
        {children}
      </div>
    </section>
  )
}
