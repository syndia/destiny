/**
 * External dependencies
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

/**
 * Internal dependencies
 */
import presets from '../utils/presets'
import { rhythm, scale } from '../utils/typography'
import { getCurrentUserId } from '../state/selectors'
import { signInWithBungieNet } from '../services/bungie-net/auth'
import Hero from '../components/hero'
import HeroTitle from '../components/hero/title'
import HeroSubtitle from '../components/hero/subtitle'
import HeroButton from '../components/hero/button'

class IndexRoute extends Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
      console.log(`Logged In`)
    }
  }

  onAuthorize = () => {
    if (!this.props.isLoggedIn) {
      signInWithBungieNet()
    }
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <div css={{ position: `relative` }}>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        {!isLoggedIn && (
          <Hero imageUrl="https://www.destinythegame.com/content/dam/atvi/bungie/destiny2/expansion1/hero/exp-1-hero-1440.jpg">
            <HeroSubtitle text="Destiny Clan" />
            <HeroTitle text="PS4 Alpha" />
            <HeroButton onClick={this.onAuthorize}>
              {`Autoriseer met Bungie.net`}
            </HeroButton>
          </Hero>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isLoggedIn: Boolean(getCurrentUserId(state)),
})

export default connect(mapStateToProps)(IndexRoute)
