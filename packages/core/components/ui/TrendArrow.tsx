import { TrendArrowType, TREND_ARROW_DOWN } from '../../helpers/trendIndicator'
import './trend-arrow.scss'

type TrendArrowProps = {
  arrowType: TrendArrowType
  className?: string
  ariaLabel?: string
}

const TrendArrow = ({ arrowType, className = '', ariaLabel }: TrendArrowProps) => {
  const isDownArrow = arrowType === TREND_ARROW_DOWN
  const trendArrowClasses = ['cove-trend-arrow', isDownArrow ? 'is-down' : '', className].filter(Boolean).join(' ')

  return (
    <svg className={trendArrowClasses} viewBox='0 0 500 350' role='img' aria-label={ariaLabel || `Trend ${arrowType}`}>
      <rect
        fill='currentColor'
        x='77.258'
        y='284.61'
        width='60'
        height='225'
        style={{ transformOrigin: '107.258px 397.11px' }}
        transform='matrix(0.766043901443, 0.642787992954, -0.642787992954, 0.766043901443, 6.291044419739, -162.880044149746)'
      />
      <rect
        fill='currentColor'
        x='77.257'
        y='252.986'
        width='60'
        height='200'
        style={{ transformOrigin: '107.257px 352.986px' }}
        transform='matrix(0.766043901443, 0.642787992954, -0.642787992954, 0.766043901443, 228.013970357424, -164.289370191352)'
      />
      <rect
        fill='currentColor'
        x='77.257'
        y='252.986'
        width='60'
        height='200'
        style={{ transformOrigin: '107.257px 352.986px' }}
        transform='matrix(0.642787992954, -0.766043901443, 0.766043901443, 0.642787992954, 113.594185085229, -137.018664220004)'
      />
      <path
        fill='currentColor'
        d='M 332.506 74.994 L 449.756 227.8 L 215.256 227.8 L 332.506 74.994 Z'
        style={{ transformOrigin: '332.506px 151.397px' }}
        transform='matrix(0.766043901443, 0.642787992954, -0.642787992954, 0.766043901443, 107.503800773853, -82.741992425535)'
      />
    </svg>
  )
}

export default TrendArrow

