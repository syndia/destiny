/**
 * External dependencies
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import Head from 'react-helmet'

/**
 * Internal dependencies
 */
import presets from '../utils/presets'
import { rhythm, scale } from '../utils/typography'
import rem from '../utils/rem'
import media from '../utils/media'
import { fetchBungieNetUser } from '../state/user/actions'
import { setLoggedIn } from '../state/oauth/actions'
import { isLoggedIn } from '../services/bungie-net/auth'
import MasterbarLoggedIn from '../components/layout/masterbar/logged-in'
import MasterbarLoggedOut from '../components/layout/masterbar/logged-out'
import Sidebar from '../components/layout/sidebar'
import MobileNavigation from '../components/layout/navigation/mobile'

import 'typeface-roboto'

const NAVIGATION_LINKS = [
  { label: `Sets`, pathname: `/sets/` },
  { label: `outfitter`, pathname: `/outfitter/` },
]

const SOCIAL_LINKS = [
  `https://github.com/syndia`,
  `https://twitter.com/syndianl`,
  `https://www.twitch.tv/syndianl`,
]

class Template extends Component {
  constructor(props) {
    super(props)

    if (isLoggedIn()) {
      props.dispatch(setLoggedIn())
    }
  }

  componentDidMount() {
    const { oauth: { isAuthenticated } } = this.props

    if (isAuthenticated) {
      this.props.dispatch(fetchBungieNetUser())
    }
  }

  renderMasterbar = () => {
    const { oauth: { isAuthenticated } } = this.props

    if (!isAuthenticated) {
      return (
        <MasterbarLoggedOut
          title="Syndia"
          pathname={this.props.location.pathname}
          navLinks={NAVIGATION_LINKS}
          socialLinks={SOCIAL_LINKS}
        />
      )
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

const mapStateToProps = ({ oauth, user }) => ({ oauth, user })

export default connect(mapStateToProps)(Template)
