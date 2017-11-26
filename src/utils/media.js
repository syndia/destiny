/**
 * Internal dependencies
 */
import presets from './presets'
import rem from './rem'

const PHONE = `PHONE`
const PHABLET = `PHABLET`
const TABLET = `TABLET`
const DESKTOP = `DESKTOP`
const HD = `HD`
const VHD = `VHD`
const VVHD = `VVHD`

const DEVICE_REGEX = new Map([
  [VVHD, /vvhd/],
  [VHD, /vhd/],
  [HD, /hd/],
  [DESKTOP, /desktop/],
  [TABLET, /tablet/],
  [PHABLET, /phablet/],
  [PHONE, /phone/],
])

const BREAKPOINTS = new Map([
  [PHONE, presets.breakpoints.phone],
  [PHABLET, presets.breakpoints.phablet],
  [TABLET, presets.breakpoints.tablet],
  [DESKTOP, presets.breakpoints.desktop],
  [HD, presets.breakpoints.hd],
  [VHD, presets.breakpoints.vhd],
  [VVHD, presets.breakpoints.vvhd],
])

function getDevice(name) {
  for (const [device, regex] of DEVICE_REGEX) {
    if (regex.test(name)) {
      return device
    }
  }
}

export default function query(label) {
  const device = getDevice(label)
  const breakpoint = BREAKPOINTS.get(device)

  return `@media (min-width: ${rem(breakpoint)})`
}
