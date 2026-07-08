import type { MapConfig } from '../../../types/MapConfig'
import LegendMarkupText from './LegendMarkupText'

const BUBBLE_SIZE_LEGEND_COLOR = '#000000'

export type BubbleSizeLegendItem = {
  label: string
  radius: number
  value: number | string
}

type BubbleSizeLegendProps = {
  addTopSpacing?: boolean
  config: MapConfig
  description: string
  items: BubbleSizeLegendItem[]
  legendDescriptionClasses: string[]
  legendTitleClasses: string[]
  title: string
}

const BubbleSizeLegend = ({
  addTopSpacing = true,
  config,
  description,
  items,
  legendTitleClasses,
  legendDescriptionClasses,
  title
}: BubbleSizeLegendProps) => {
  if (!items.length) return null

  const svgSize = Math.ceil(Math.max(...items.map(item => item.radius), 0) * 2 + 4)
  const hasSizeLegendHeader = Boolean(title || description)
  const sizeLegendClasses = ['bubble-size-legend']
  if (config.legend.style === 'gradient') sizeLegendClasses.push('bubble-size-legend--gradient')

  return (
    <div className={addTopSpacing ? 'mt-3' : undefined}>
      {hasSizeLegendHeader && (
        <div className='mb-3'>
          {title && (
            <LegendMarkupText as='h3' className={[...legendTitleClasses, 'cove-prose'].join(' ')} config={config}>
              {title}
            </LegendMarkupText>
          )}
          {description && (
            <LegendMarkupText as='p' className={[...legendDescriptionClasses, 'cove-prose'].join(' ')} config={config}>
              {description}
            </LegendMarkupText>
          )}
        </div>
      )}
      <ul className={sizeLegendClasses.join(' ')} aria-label='Bubble size legend items'>
        {items.map(item => (
          <li key={item.value} className='bubble-size-legend__item'>
            <svg
              width={svgSize}
              height={svgSize}
              viewBox={`0 0 ${svgSize} ${svgSize}`}
              aria-hidden='true'
              focusable='false'
            >
              <circle cx={svgSize / 2} cy={svgSize / 2} r={item.radius} fill={BUBBLE_SIZE_LEGEND_COLOR} />
            </svg>
            <span className='cove-prose'>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BubbleSizeLegend
