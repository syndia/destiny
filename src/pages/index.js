/**
 * External dependencies
 */
import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

/**
 * Internal dependencies
 */
import presets from '../utils/presets'
import { rhythm } from '../utils/typography'
import { authorizeWithBungieNet } from '../services/bungie-net/auth'
import withBungieNetAuthorization from '../components/bungie-net/auth-provider'
import Hero from '../components/hero'
import HeroTitle from '../components/hero/title'
import HeroSubtitle from '../components/hero/subtitle'
import HeroButton from '../components/hero/button'
import Cover from '../components/cover/image'

class IndexRoute extends Component {
  state = {
    loading: false,
  }

  componentDidMount() {
    /*
    getGroup(groupId).then(data => {
      this.setState({ group: data })
    })
    */
  }

  onAuthorize = () => {
    const { isAuthenticated } = this.props

    if (!isAuthenticated) {
      authorizeWithBungieNet()
    }
  }

  render() {
    const { loading, group } = this.state
    const { isAuthenticated } = this.props

    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <div css={{ position: `relative` }}>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        {!isAuthenticated && (
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

export default withBungieNetAuthorization(IndexRoute)
