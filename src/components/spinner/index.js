/**
 * External dependencies
 */
import React, { PureComponent } from 'react'
import { css } from 'glamor'

/**
 * Internal dependencies
 */
import presets from '../../utils/presets'

const spinnerLeftAnimation = css.keyframes({
  '0%': {
    transform: `rotate(0deg)`,
  },
  '25%': {
    transform: `rotate(0deg)`,
  },
  '50%': {
    transform: `rotate(180deg)`,
  },
  '75%': {
    transform: `rotate(180deg)`,
  },
  '100%': {
    transform: `rotate(360deg)`,
  },
})

const spinnerRightAnimation = css.keyframes({
  '0%': {
    transform: `rotate(0deg)`,
  },
  '25%': {
    transform: `rotate(180deg)`,
  },
  '50%': {
    transform: `rotate(180deg)`,
  },
  '75%': {
    transform: `rotate(360deg)`,
  },
  '100%': {
    transform: `rotate(360deg)`,
  },
})

class Spinner extends PureComponent {
  static instances = 0

  static defaultProps = {
    size: 20,
  }

  componentWillMount() {
    this.setState({
      instanceId: ++Spinner.instances,
    })
  }

  render() {
    const { instanceId, style } = this.state

    return (
      <div className="spinner" css={{ ...style }}>
        <svg
          className="spinner__image"
          width={this.props.size}
          height={this.props.size}
          viewBox="0 0 100 100"
          css={{
            display: `block`,
          }}
        >
          <defs>
            <mask id={`mask-border-${instanceId}`}>
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <circle r="46%" cx="50%" cy="50%" fill="black" />
            </mask>
            <mask id={`mask-donut-${instanceId}`}>
              <rect x="0" y="0" width="100%" height="100%" fill="black" />
              <circle r="46%" cx="50%" cy="50%" fill="white" />
              <circle r="30%" cx="50%" cy="50%" fill="black" />
            </mask>
            <mask id={`mask-left-${instanceId}`}>
              <rect x="0" y="0" width="50%" height="100%" fill="white" />
            </mask>
            <mask id={`mask-right-${instanceId}`}>
              <rect x="50%" y="0" width="50%" height="100%" fill="white" />
            </mask>
          </defs>
          <circle
            className="spinner__border"
            r="50%"
            cx="50%"
            cy="50%"
            mask={`url(#mask-border-${instanceId})`}
            css={{
              fill: presets.palette.whiteSmoke,
            }}
          />
          <g mask={`url(#mask-donut-${instanceId})`}>
            <g mask={`url(#mask-left-${instanceId})`}>
              <rect
                className="spinner__progress is-left"
                x="0"
                y="0"
                width="50%"
                height="100%"
                css={{
                  transformOrigin: `50px 50px`,
                  fill: presets.palette.primary,
                  animation: `${spinnerLeftAnimation} 3s linear infinite`,
                }}
              />
            </g>
            <g mask={`url(#mask-right-${instanceId})`}>
              <rect
                className="spinner__progress is-right"
                x="50%"
                y="0"
                width="50%"
                height="100%"
                css={{
                  transformOrigin: `50px 50px`,
                  fill: presets.palette.primary,
                  animation: `${spinnerRightAnimation} 3s linear infinite`,
                }}
              />
            </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default Spinner
