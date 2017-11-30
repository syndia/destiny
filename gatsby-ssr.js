/**
 * External dependencies
 */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { renderStaticOptimized } from 'glamor/server'

/**
 * Internal dependencies
 */
import configureStore from './src/state'

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const store = configureStore()

  const ConnectedBody = () => <Provider store={store}>{bodyComponent}</Provider>

  const { html, css, ids } = renderStaticOptimized(() =>
    renderToString(<ConnectedBody />)
  )

  /**
   * Moved gatsby-plugin-glamor SSR here as it conflicts with redux SSR
   *
   * @see: https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-glamor/src/gatsby-ssr.js
   */
  const styleElement = [
    <style
      id="glamor-styles"
      key="glamor-styles"
      dangerouslySetInnerHTML={{ __html: css }}
    />,
    <script
      id="glamor-ids"
      key="glamor-ids"
      dangerouslySetInnerHTML={{
        __html: `
      // <![CDATA[
      window._glamor = ${JSON.stringify(ids)}
      // ]]>
      `,
      }}
    />,
  ]

  replaceBodyHTMLString(html)
  setHeadComponents(styleElement)
}
