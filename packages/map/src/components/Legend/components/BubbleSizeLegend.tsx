import type { MapConfig } from '../../../types/MapConfig'
import LegendMarkupText from './LegendMarkupText'

const BUBBLE_SIZE_LEGEND_COLOR = '#000000'

export type BubbleSizeLegendItem = {
  label: string
  radius: number
  value: number
}

type BubbleSizeLegendProps = {
  config: MapConfig
  description: string
  items: BubbleSizeLegendItem[]
  title: string
}

const BubbleSizeLegend = ({ config, description, items, title }: BubbleSizeLegendProps) => {
  if (!items.length) return null

  const svgSize = Math.ceil(Math.max(...items.map(item => item.radius), 0) * 2 + 4)

  return (
    <>
      <hr className='mt-3 mb-2' />
      {title && (
        <LegendMarkupText
          as='h4'
          className='cove-prose mb-1'
          config={config}
          style={{ fontSize: '0.875rem', fontWeight: 600 }}
        >
          {title}
        </LegendMarkupText>
      )}
      {description && (
        <LegendMarkupText as='p' className='cove-prose mb-2' config={config}>
          {description}
        </LegendMarkupText>
      )}
      <ul className='bubble-size-legend' aria-label='Bubble size legend items'>
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
    </>
  )
}

export default BubbleSizeLegend
