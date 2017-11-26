/**
 * External dependencies
 */
import React from 'react'

export default function Overlay({children}) {
  return (
    <div
      className="overlay"
      css={{
        zIndex: 1000,
        position: `fixed`,
        top: 0,
        left: 0,
        display: `none`,
        width: `100%`,
        height: `100%`,
      }}
    >
      <div className="overlay__inner" css={{
        position: `absolute`,
        top: `50%`,
        left: `50%`
        width: `100%`,
        height: `100%`,
        transform: `translate(-50%, -50%)`,
      }}>
        <div className="overlay__close" css={{
          zIndex: 10,
          position: `absolute`,
          top: rem(70),
          right: rem(20),
          width: rem(15),
          height: rem(10),
          backgroundColor: presets.palette.black,
          cursor: `pointer`
        }}></div>
      </div>
    </div>
  )
}
