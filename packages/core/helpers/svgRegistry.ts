import trendArrowSvg from '../assets/trend-arrow.svg?raw'

// Registry SVGs should come from static assets (not inline JSX).
export const SVG_REGISTRY = {
  'trend-arrow-up': {
    rawSvg: trendArrowSvg,
    ariaLabel: 'Trend up'
  },
  'trend-arrow-down': {
    rawSvg: trendArrowSvg,
    ariaLabel: 'Trend down',
    isDown: true
  }
} as const

export type SvgRegistryId = keyof typeof SVG_REGISTRY

export const SVG_REGISTRY_OPTIONS = [
  { value: 'trend-arrow-up', label: 'Up trend arrow' },
  { value: 'trend-arrow-down', label: 'Down trend arrow' }
]

const DEFAULT_SVG_SCALE = 1

const normalizeSvgScale = (scale?: number): number => {
  const parsed = Number(scale)
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return DEFAULT_SVG_SCALE
  }
  return parsed
}

const buildSvgTransform = (scale: number, isDown?: boolean): string => {
  const baseTransform = `scale(${scale})`
  return isDown ? `${baseTransform} scale(-1, 1) rotate(180deg)` : baseTransform
}

export const buildInlineSvg = (
  svgId: SvgRegistryId,
  options: {
    scale?: number
    className?: string
    ariaLabel?: string
  } = {}
): string => {
  const entry = SVG_REGISTRY[svgId]
  if (!entry) return ''

  const scale = normalizeSvgScale(options.scale)
  const isDown = 'isDown' in entry && entry.isDown
  const className = ['cove-trend-arrow', isDown ? 'is-down' : '', options.className].filter(Boolean).join(' ')
  const ariaLabel = options.ariaLabel || entry.ariaLabel
  const style = `width: 1em; height: 1em; transform: ${buildSvgTransform(scale, isDown)}; transform-origin: center;`
  const svgMarkup = entry.rawSvg.trim()

  return svgMarkup.replace('<svg', `<svg class="${className}" role="img" aria-label="${ariaLabel}" style="${style}"`)
}
