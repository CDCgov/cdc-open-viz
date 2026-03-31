import arrowUpSvg from '../assets/user-icons/arrow-up.svg?raw'
import arrowUpRightFromSquareSvg from '../assets/user-icons/arrow-up-right-from-square.svg?raw'

// Registry SVGs should come from static assets (not inline JSX).
export const SVG_REGISTRY = {
  'trend-arrow-up': {
    rawSvg: arrowUpSvg,
    ariaLabel: 'Trend up'
  },
  'trend-arrow-down': {
    rawSvg: arrowUpSvg,
    ariaLabel: 'Trend down',
    isDown: true
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
