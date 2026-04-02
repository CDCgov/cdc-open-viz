import parse from 'html-react-parser'
import { TrendArrowType, TREND_ARROW_DOWN, TREND_ARROW_NO_CHANGE } from '../../helpers/trendIndicator'
import { SVG_REGISTRY, SvgRegistryId, getSvgRegistryLabel } from '../../helpers/svgRegistry'
import './trend-arrow.css'

type TrendArrowProps = {
  arrowType: TrendArrowType
  wrapperClassName?: string
  ariaLabel?: string
  label?: string
}

const TrendArrow = ({ arrowType, wrapperClassName = '', ariaLabel, label }: TrendArrowProps) => {
  const svgId: SvgRegistryId =
    arrowType === TREND_ARROW_DOWN
      ? 'trend-arrow-down'
      : arrowType === TREND_ARROW_NO_CHANGE
      ? 'trend-arrow-no-change'
      : 'trend-arrow-up'
  const rawSvg = SVG_REGISTRY[svgId].rawSvg
  const trendArrowWrapClasses = ['cove-trend-arrow__wrap', wrapperClassName].filter(Boolean).join(' ')
  const trimmedLabel = label?.trim()
  const defaultAriaLabel = getSvgRegistryLabel(svgId) || `Trend ${arrowType}`
  const resolvedAriaLabel = ariaLabel || `${defaultAriaLabel}${trimmedLabel ? `: ${trimmedLabel}` : ''}`
  const iconAccessibilityAttributes = trimmedLabel
    ? 'aria-hidden="true" focusable="false"'
    : `role="img" aria-label="${resolvedAriaLabel}" focusable="false"`
  const iconMarkup = rawSvg
    .trim()
    .replace('<svg', `<svg class="cove-trend-arrow" ${iconAccessibilityAttributes}`)

  return (
    <span className={trendArrowWrapClasses}>
      {trimmedLabel && <span className='cove-trend-arrow__label'>{trimmedLabel}</span>}
      {parse(iconMarkup)}
    </span>
  )
}

export default TrendArrow
