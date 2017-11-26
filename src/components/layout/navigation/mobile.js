/**
 * External dependencies
 */
import React, { Component } from 'react'

/**
 * Internal dependencies
 */
import presets from '../../../utils/presets'
import media from '../../../utils/media'
import rem from '../../../utils/rem'
import NavigationList from './list'
import Item from './mobile-item'

export default class MobileNavigation extends Component {
  state = {
    toggledSubmenu: false,
  }

  handleClick = event => {
    this.setState({
      toggledSubmenu: !this.state.toggledSubmenu,
    })
  }

  render() {
    const { pathname } = this.props
    const { toggledSubmenu } = this.state

    return (
      <nav
        className="mobile-nav"
        css={{
          zIndex: 10000,
          position: `fixed`,
          left: 0,
          bottom: toggledSubmenu ? `100px` : 0,
          width: `100%`,
          height: rem(75),
          backgroundColor: presets.palette.white,
          transition: `bottom ${presets.animation.speedSlow}`,
          [media('tablet')]: {
            display: `none`,
          },
        }}
      >
        <NavigationList>
          <Item to="/" active={pathname === `/`}>{`Home`}</Item>
          <Item to="/clan" active={pathname === `/clan`}>{`Clan`}</Item>
          <Item />
          <Item url="https://www.syndia.nl">{`Syndia.nl`}</Item>
        </NavigationList>
      </nav>
    )
  }
}
