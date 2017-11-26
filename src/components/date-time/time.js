/**
 * External dependencies
 */
import React from 'react'
import { format as formatDate, parse } from 'date-fns'
import nlLocale from 'date-fns/locale/nl'

export default function Time({ value = new Date(), format, children }) {
  const date = parse(value)

  if (typeof format === `function`) {
    format = format(value)
  }

  return (
    <time dateTime={formatDate(date)}>
      {children || formatDate(date, format, { locale: nlLocale })}
    </time>
  )
}
