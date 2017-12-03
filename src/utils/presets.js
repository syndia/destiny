const baseHsl = `291, 0%, 18%`

module.exports = {
  // Breakpoints
  breakpoints: {
    phone: 400,
    phablet: 550,
    tablet: 750,
    desktop: 1000,
    hd: 1200,
  },
  gutters: {
    default: 1.25,
    HdR: 2.5,
    VHdR: 3,
    VVHdR: 4.5,
  },
  sizes: {
    maxWidth: 35,
    maxWidthWithSidebar: 26,
    masterbarHeight: 63,
    radius: 2,
    radiusLarge: 4,
  },
  palette: {
    black: `hsla(${baseHsl}, 1)`,
    text: `hsla(${baseHsl}, 0.95)`,
    light: `hsla(${baseHsl}, 0.4)`,
    calm: `hsla(${baseHsl}, 0.2)`,
    smoke: `hsla(${baseHsl}, 0.1)`,
    whiteSmoke: `hsla(${baseHsl}, 0.02)`,
    white: `white`,
    debug: `magenta`,
    facebook: `#39579A`,
    twitter: `#55ACEE`,
    instagram: `#D93174`,
    whatsapp: `#43D854`,
    background: `#453D4F`,
    primary: `#B78C25`,
    common: `#C3BCB4`,
    exotic: `#CEAE33`,
    legendary: `#522F65`,
    rare: `#5076A3`,
  },
  animation: {
    curveDefault: `cubic-bezier(0.4, 0, 0.2, 1)`,
    curveLinearOutSlowIn: `cubic-bezier(0, 0, 0.2, 1)`,
    curveFastOutLinearIn: `cubic-bezier(0.4, 0, 1, 1)`,
    speedSlow: `500ms`,
    speedDefault: `250ms`,
    speedFast: `125ms`,
  },
}
