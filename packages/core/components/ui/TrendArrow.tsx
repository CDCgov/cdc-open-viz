import { TrendArrowType, TREND_ARROW_DOWN } from '../../helpers/trendIndicator'
import TrendArrowIcon from '../../assets/trend-arrow.svg'
import './trend-arrow.css'

type TrendArrowProps = {
  arrowType: TrendArrowType
  className?: string
  ariaLabel?: string
  label?: string
}

const TrendArrow = ({ arrowType, className = '', ariaLabel, label }: TrendArrowProps) => {
  const isDownArrow = arrowType === TREND_ARROW_DOWN
  const trendArrowClasses = ['cove-trend-arrow', isDownArrow ? 'is-down' : '', className].filter(Boolean).join(' ')
  const trimmedLabel = label?.trim()
  const resolvedAriaLabel = ariaLabel || `Trend ${arrowType}${trimmedLabel ? `: ${trimmedLabel}` : ''}`

  return (
    <span className='cove-trend-arrow__wrap'>
      <TrendArrowIcon className={trendArrowClasses} role='img' aria-label={resolvedAriaLabel} />
      {trimmedLabel && <span className='cove-trend-arrow__label'>{trimmedLabel}</span>}
    </span>
  )
}

export default TrendArrow

