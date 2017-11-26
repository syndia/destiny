/**
 * Internal dependencies
 */
import presets from './presets'
import { rhythm } from './typography'
import media from './media'

const vP = rhythm(presets.gutters.default)
const vPHd = rhythm(presets.gutters.HdR)
const vPVHd = rhythm(presets.gutters.VHdR)
const vPVVHd = rhythm(presets.gutters.VVHdR)

export default {
  paddingTop: rhythm(1.5),
  paddingLeft: vP,
  paddingRight: vP,
  [media(`hd`)]: {
    paddingLeft: vPHd,
    paddingRight: vPHd,
  },
  [media(`vhd`)]: {
    paddingLeft: vPVHd,
    paddingRight: vPVHd,
  },
  [media(`vvhd`)]: {
    paddingLeft: vPVVHd,
    paddingRight: vPVVHd,
  },
}
