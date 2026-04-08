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
    ariaLabel: 'Trend flat'
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

const INLINE_SVG_WRAPPER_CLASS = 'cove-inline-svg'
const INLINE_SVG_ICON_CLASS = 'cove-inline-svg__icon'

const buildSvgMarkup = (
  svgId: SvgRegistryId,
  options: {
    className?: string
    ariaLabel?: string
    decorative?: boolean
  } = {}
): string => {
  const entry = SVG_REGISTRY[svgId]
  if (!entry) return ''

  const className = [INLINE_SVG_ICON_CLASS, options.className?.trim()].filter(Boolean).join(' ')
  const ariaLabel = options.ariaLabel || entry.ariaLabel
  const decorative = options.decorative ?? true
  const style =
    [
      'display: block',
      'width: var(--cove-inline-svg-inner-width, 1em)',
      'height: var(--cove-inline-svg-inner-height, 1em)',
      'fill: currentColor',
      'color: inherit',
      `transform: scale(${DEFAULT_SVG_SCALE})`,
      'transform-origin: center'
    ].join('; ') + ';'
  const svgMarkup = entry.rawSvg.trim()
  const classAttribute = className ? ` class="${className}"` : ''
  const accessibilityAttributes = decorative
    ? ' aria-hidden="true" focusable="false"'
    : ` role="img" aria-label="${ariaLabel}" focusable="false"`

  return svgMarkup.replace('<svg', `<svg${classAttribute}${accessibilityAttributes} style="${style}"`)
}

export const buildInlineSvg = (
  svgId: SvgRegistryId,
  options: {
    className?: string
    ariaLabel?: string
    decorative?: boolean
  } = {}
): string => {
  const wrapperStyle =
    [
      'display: inline-flex',
      'align-items: center',
      'justify-content: center',
      'width: var(--cove-inline-svg-width, 1em)',
      'height: var(--cove-inline-svg-height-fallback, 1em)',
      'height: var(--cove-inline-svg-height, 1lh)',
      'vertical-align: bottom',
      'line-height: inherit',
      'overflow: visible'
    ].join('; ') + ';'
  const decoratedSvgMarkup = buildSvgMarkup(svgId, options)

  return `<span class="${INLINE_SVG_WRAPPER_CLASS}" style="${wrapperStyle}">${decoratedSvgMarkup}</span>`
}
