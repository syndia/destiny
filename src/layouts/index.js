/**
 * External dependencies
 */
import React, { Component } from 'react'
import Link from 'gatsby-link'
import Head from 'react-helmet'

/**
 * Internal dependencies
 */
import presets from '../utils/presets'
import { rhythm, scale } from '../utils/typography'
import rem from '../utils/rem'
import media from '../utils/media'
import withAuthorizeWithBungieNet from '../components/bungie-net/auth-provider'
import MasterbarLoggedIn from '../components/layout/masterbar/logged-in'
import MasterbarLoggedOut from '../components/layout/masterbar/logged-out'
import Sidebar from '../components/layout/sidebar'
import MobileNavigation from '../components/layout/navigation/mobile'

import 'typeface-roboto'

class Template extends Component {
  renderMasterbar = () => {
    if (!this.props.isAuthenticated) {
      return <MasterbarLoggedOut pathname={this.props.location.pathname} />
    }

    return <MasterbarLoggedIn />
  }

  render() {
    const { location, children } = this.props
    const isHomepage = location.pathname === `/`
    const hasSidebar = location.pathname.slice(0, 6) === '/docs/'

    const navLinks = [{ label: `Sets`, pathname: `/sets/` }]

    return (
      <div>
        <Head defaultTitle="Destiny Clan" titleTemplate={`%s | Syndia`}>
          <html lang="en" />
          <meta name="twitter:site" content="@syndianl" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Destiny Clan" />
        </Head>
        {this.renderMasterbar()}
        <div
          className={hasSidebar ? `main-body has-sidebar` : `main-body`}
          css={{
            paddingTop: 0,
            [media(`tablet`)]: {
              margin: `0 auto`,
              paddingTop: isHomepage ? 0 : rem(presets.sizes.masterbarHeight),
            },
          }}
        >
          <Sidebar yaml={[]} />
          {children()}
        </div>
        <MobileNavigation pathname={location.pathname} />
      </div>
    )
  }
}

export default withAuthorizeWithBungieNet(Template)
