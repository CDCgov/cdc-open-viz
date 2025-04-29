export const SVG_WIDTH = 880
export const SVG_HEIGHT = 500
export const SVG_PADDING = 50
export const SVG_VIEWBOX = `0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`
export const HEADER_COLORS = [
  'theme-blue',
  'theme-purple',
  'theme-brown',
  'theme-teal',
  'theme-pink',
  'theme-orange',
  'theme-slate',
  'theme-indigo',
  'theme-cyan',
  'theme-green',
  'theme-amber'
]
export const MAX_ZOOM_LEVEL = 4

export const SUPPORTED_DC_NAMES = [
  'WASHINGTON D.C.',
  'DISTRICT OF COLUMBIA',
  'WASHINGTON DC',
  'DC',
  'WASHINGTON DC.',
  'D.C.',
  'D.C'
] as const

export const GEO_TYPES = {
  US: 'us',
  US_REGION: 'us-region',
  WORLD: 'world',
  US_COUNTY: 'us-county',
  SINGLE_STATE: 'single-state'
} as const

export const GEOCODE_TYPES = {
  WORLD: 'world-geocode',
  US: 'us-geocode'
} as const
