import arrowUpSvg from '../assets/user-icons/arrow-up.svg?raw'
import arrowDownSvg from '../assets/user-icons/arrow-down.svg?raw'
import arrowRightSvg from '../assets/user-icons/arrow-right.svg?raw'
import arrowUpRightFromSquareSvg from '../assets/user-icons/arrow-up-right-from-square.svg?raw'

// Registry SVGs should come from static assets (not inline JSX).
export const SVG_REGISTRY = {
  'trend-arrow-up': {
    rawSvg: arrowUpSvg,
    ariaLabel: 'Trend up'
  },
  'trend-arrow-down': {
    rawSvg: arrowDownSvg,
    ariaLabel: 'Trend down'
  },
  'trend-arrow-no-change': {
    rawSvg: arrowRightSvg,
    ariaLabel: 'Trend no change'
  },
  'link-external': {
    rawSvg: arrowUpRightFromSquareSvg,
    ariaLabel: 'External link'
  }
} as const

export type SvgRegistryId = keyof typeof SVG_REGISTRY

export const getSvgRegistryLabel = (svgId?: string): string | undefined => {
  if (!svgId || !(svgId in SVG_REGISTRY)) return undefined

  return SVG_REGISTRY[svgId as SvgRegistryId].ariaLabel
}

export const SVG_REGISTRY_OPTIONS = (Object.keys(SVG_REGISTRY) as SvgRegistryId[]).map(key => ({
  value: key,
  label: SVG_REGISTRY[key].ariaLabel
}))

export const DEFAULT_SVG_SCALE = 0.8

const buildSvgMarkup = (
  svgId: SvgRegistryId,
  options: {
    className?: string
    ariaLabel?: string
  } = {}
): string => {
  const entry = SVG_REGISTRY[svgId]
  if (!entry) return ''

  const className = options.className?.trim()
  const ariaLabel = options.ariaLabel || entry.ariaLabel
  const style = `display: block; width: 1em; height: 1em; fill: currentColor; color: inherit; transform: scale(${DEFAULT_SVG_SCALE}); transform-origin: center;`
  const svgMarkup = entry.rawSvg.trim()
  const classAttribute = className ? ` class="${className}"` : ''

  return svgMarkup.replace('<svg', `<svg${classAttribute} role="img" aria-label="${ariaLabel}" style="${style}"`)
}

export const buildInlineSvg = (
  svgId: SvgRegistryId,
  options: {
    className?: string
    ariaLabel?: string
  } = {}
): string => {
  const wrapperStyle =
    'display: inline-flex; align-items: center; justify-content: center; width: 1em; height: 1em; height: 1lh; vertical-align: bottom; line-height: inherit; overflow: visible;'
  const decoratedSvgMarkup = buildSvgMarkup(svgId, options)

  return `<span class="cove-inline-svg" style="${wrapperStyle}">${decoratedSvgMarkup}</span>`
}
