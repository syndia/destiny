/**
 * External dependencies
 */
import React from 'react'

function renderSource(source) {
  if (typeof source !== `string`) {
    return source.map(item => <source src={item} />)
  }

  return <source src={source} />
}

export default function Video({ source, imageUrl, ...rest }) {
  return (
    <video
      playsinline
      autoplay
      muted
      loop
      poster={imageUrl}
      css={{
        position: `absolute`,
        top: 0,
        left: `50%`,
        transform: `translate(-50%, 0)`,
      }}
    >
      {renderSource(source)}
    </video>
  )
}
