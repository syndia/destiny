/**
 * External dependencies
 */
import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'

/**
 * Internal dependencies
 */
import presets from './presets'

const options = {
  headerFontFamily: [`Roboto`, `sans-serif`],
  bodyFontFamily: [`sans-serif`],
  plugins: [new CodePlugin()],
  overrideStyles: ({ rhytm, scale }, options) => {
    return {
      h1: {
        ...scale(4 / 5),
        fontWeight: 700,
        textShadow: `0 1px 1px ${presets.palette.smoke}`,
        textTransform: `uppercase`,
      },
    }
  },
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
