/**
 * External dependencies
 */
import React from 'react'
import memoize from 'lodash/memoize'

/**
 * Internal dependencies
 */
import { PROVIDER_REGEX, PROVIDER_NAMES, PROVIDER_ICONS } from './constants'

const getProvider = memoize(url => {
  for (const [provider, regex] of PROVIDER_REGEX) {
    if (regex.test(url)) {
      return provider
    }
  }

  return null
})

export default function SocialItem({ link, title, children, ...rest }) {
  const provider = getProvider(link)
  const name = PROVIDER_NAMES.get(provider)

  if (!title) {
    title = `Bezoek op ${name}`
  } else if (typeof title === `function`) {
    title = title(name)
  }

  return (
    <a href={link} title={title} {...rest}>
      {PROVIDER_ICONS.get(provider)}
      {children}
    </a>
  )
}
