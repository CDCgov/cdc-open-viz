import { TrendArrowType, TREND_ARROW_DOWN } from '../../helpers/trendIndicator'
import TrendArrowIcon from '../../assets/user-icons/arrow-up.svg'
import './trend-arrow.css'

type TrendArrowProps = {
  arrowType: TrendArrowType
  wrapperClassName?: string
  ariaLabel?: string
  label?: string
}

const TrendArrow = ({ arrowType, wrapperClassName = '', ariaLabel, label }: TrendArrowProps) => {
  const isDownArrow = arrowType === TREND_ARROW_DOWN
  const trendArrowWrapClasses = ['cove-trend-arrow__wrap', wrapperClassName].filter(Boolean).join(' ')
  const trimmedLabel = label?.trim()
  const resolvedAriaLabel = ariaLabel || `Trend ${arrowType}${trimmedLabel ? `: ${trimmedLabel}` : ''}`

  return (
    <span className={trendArrowWrapClasses}>
      {trimmedLabel && <span className='cove-trend-arrow__label'>{trimmedLabel}</span>}
      <TrendArrowIcon
        className={['cove-trend-arrow', isDownArrow ? 'is-down' : ''].filter(Boolean).join(' ')}
        role='img'
        aria-label={resolvedAriaLabel}
      />
    </span>
  )
}

export default TrendArrow
