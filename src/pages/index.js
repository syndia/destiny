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
import { authorizeWithBungieNet } from '../services/bungie-net/auth'
import Loading from '../components/loading'
import Hero from '../components/hero'
import HeroTitle from '../components/hero/title'
import HeroSubtitle from '../components/hero/subtitle'
import HeroButton from '../components/hero/button'
import ComicBook from '../components/layout/comic-book'
import ComicBookItem from '../components/layout/comic-book/item'
import Tout from '../components/tout/item'
import TextContent from '../components/text-content'
import Icon from '../components/bungie-net/icon'

class IndexRoute extends Component {
  componentDidMount() {
    if (this.props.oauth.isAuthenticated) {
      console.log(`Logged In`)
    }
  }

  onAuthorize = () => {
    if (!this.props.oauth.isAuthenticated) {
      authorizeWithBungieNet()
    }
  }

  render() {
    const { oauth: { isAuthenticated } } = this.props

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
        <section
          css={{
            width: `100%`,
            '&:after': {
              content: ` `,
              clear: `both`,
              display: `block`,
              height: 0,
              visibility: `hidden`,
            },
          }}
        >
          <Tout
            title="Nightfall"
            imageUrl="https://www.bungie.net/img/destiny_content/pgcr/strike_savanthuns_song.jpg"
          >
            <p>Voltooi de wekelijkse Nightfall Strike.</p>
            <div
              css={{
                display: `flex`,
                flexDirection: `row`,
                alignItems: `flex-start`,
              }}
            >
              <div>
                <h3
                  css={{
                    display: `none`,
                  }}
                >
                  Modifiers
                </h3>
                <div
                  css={{
                    position: `relative`,
                    display: `flex`,
                    alignItems: `center`,
                    padding: `1rem`,
                  }}
                >
                  <Icon
                    pathname="/common/destiny2_content/icons/2146c5f2752a5ac1f14075f9906c0acb.png"
                    css={{
                      width: `40px`,
                      height: `40px`,
                      marginRight: `1rem !important`,
                    }}
                  />
                  <TextContent
                    title={`Momentum`}
                    subtitle={`Gezondheid- en schild-regeneratie zijn uitgeschakeld
                  terwijl u stilstaat. Sprint om sneller te regenereren.`}
                  />
                </div>
                <div
                  css={{
                    position: `relative`,
                    display: `flex`,
                    alignItems: `center`,
                    padding: `1rem`,
                  }}
                >
                  <Icon
                    pathname="/common/destiny2_content/icons/0c20066aef136bdde375610a4e3218d0.png"
                    css={{
                      width: `40px`,
                      height: `40px`,
                      marginRight: `1rem !important`,
                    }}
                  />
                  <div
                    css={{
                      flex: `auto`,
                      minWidth: 0,
                    }}
                  >
                    <h4
                      css={{
                        marginBottom: `0.5rem`,
                      }}
                    >
                      Timewarp: Anomalies
                    </h4>
                    <p
                      css={{
                        marginBottom: 0,
                        fontSize: `0.8em`,
                        lineHeight: 1.25,
                      }}
                    >
                      In het gebied zijn vreemde afwijkingen geconstateerd.
                      Vernietig ze om tijdelijke energie vrij te maken en de
                      missietimer te verlengen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Tout>
          <Tout
            title="Call To Arms"
            imageUrl="https://www.bungie.net/img/destiny_content/pgcr/conceptual_call_to_arms.jpg"
            css={{
              '&:before': {
                zIndex: 2,
                position: `relative`,
                left: `-2px`,
                borderLeft: `4px solid ${presets.palette.white}`,
              },
            }}
          >
            <p>Win glorie door deel te nemen aan Crucible-wedstrijden.</p>
          </Tout>
        </section>
        <section>
          <Tout
            title="Leviathan"
            imageUrl="https://www.bungie.net/img/destiny_content/pgcr/raid_gluttony.jpg"
            style={{
              width: `100%`,
              borderTop: 0,
            }}
          >
            <p>Daag de Cabal Emperor uit tijdens de Leviathan raid.</p>
            <div>
              <h3>Uitdagingen</h3>
              <div
                css={{
                  position: `relative`,
                  display: `flex`,
                  alignItems: `center`,
                  padding: `1rem`,
                }}
              >
                <div
                  css={{
                    flex: `auto`,
                    minWidth: 0,
                  }}
                >
                  <h4
                    css={{
                      marginBottom: `0.5rem`,
                    }}
                  >
                    The Proving
                  </h4>
                  <p
                    css={{
                      marginBottom: 0,
                      fontSize: `0.8em`,
                      lineHeight: 1.25,
                    }}
                  >
                    Voltooi elke proef die Calus voor jou heeft uitgezet.
                  </p>
                </div>
                <div
                  css={{
                    flex: `auto`,
                    minWidth: 0,
                  }}
                >
                  <h4
                    css={{
                      marginBottom: `0.5rem`,
                    }}
                  >
                    The Labyrinth
                  </h4>
                  <p
                    css={{
                      marginBottom: 0,
                      fontSize: `0.8em`,
                      lineHeight: 1.25,
                    }}
                  >
                    Loot 3 van Calus 'geschenken in de onderbuik van de
                    Leviathan.
                  </p>
                </div>
                <div
                  css={{
                    flex: `auto`,
                    minWidth: 0,
                  }}
                >
                  <h4
                    css={{
                      marginBottom: `0.5rem`,
                    }}
                  >
                    The Royal Pools
                  </h4>
                  <p
                    css={{
                      marginBottom: 0,
                      fontSize: `0.8em`,
                      lineHeight: 1.25,
                    }}
                  >
                    Ontdek de verborgen overwinningsvoorwaarde in de Royal
                    Pools-ontmoeting.
                  </p>
                </div>
              </div>
            </div>
          </Tout>
        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ oauth }) => ({ oauth })

export default connect(mapStateToProps)(IndexRoute)
