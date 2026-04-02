import parse from 'html-react-parser'
import { TrendArrowType, TREND_ARROW_DOWN, TREND_ARROW_NO_CHANGE } from '../../helpers/trendIndicator'
import arrowUpSvg from '../../assets/user-icons/arrow-up.svg?raw'
import arrowDownSvg from '../../assets/user-icons/arrow-down.svg?raw'
import arrowRightSvg from '../../assets/user-icons/arrow-right.svg?raw'
import './trend-arrow.css'

type TrendArrowProps = {
  arrowType: TrendArrowType
  wrapperClassName?: string
  ariaLabel?: string
  label?: string
}

const TrendArrow = ({ arrowType, wrapperClassName = '', ariaLabel, label }: TrendArrowProps) => {
  const rawSvg =
    arrowType === TREND_ARROW_DOWN
      ? arrowDownSvg
      : arrowType === TREND_ARROW_NO_CHANGE
      ? arrowRightSvg
      : arrowUpSvg
  const trendArrowWrapClasses = ['cove-trend-arrow__wrap', wrapperClassName].filter(Boolean).join(' ')
  const trimmedLabel = label?.trim()
  const resolvedAriaLabel = ariaLabel || `Trend ${arrowType}${trimmedLabel ? `: ${trimmedLabel}` : ''}`
  const iconMarkup = rawSvg
    .trim()
    .replace('<svg', `<svg class="cove-trend-arrow" role="img" aria-label="${resolvedAriaLabel}"`)

  return (
    <span className={trendArrowWrapClasses}>
      {trimmedLabel && <span className='cove-trend-arrow__label'>{trimmedLabel}</span>}
      {parse(iconMarkup)}
    </span>
  )
}

export default TrendArrow
