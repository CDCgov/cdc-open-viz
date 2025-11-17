import { useContext, useState } from 'react'
import ConfigContext from '../../ConfigContext'
import { Group } from '@visx/group'
import { scaleSequential } from 'd3-scale'
// @ts-ignore - d3-scale-chromatic has no type declarations
import { interpolateRdBu } from 'd3-scale-chromatic'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'

type WarmingStripesProps = {
  xScale: any
  yScale: any
  xMax: number
  yMax: number
}

const WarmingStripes = ({ xMax, yMax }: WarmingStripesProps) => {
  const { transformedData: data, config, formatNumber, interactionLabel } = useContext(ConfigContext)

  const [currentHover, setCurrentHover] = useState<number | null>(null)

  // Get the data key for the temperature/anomaly values
  // Use the first series key as the value column
  const valueKey = config.runtime.seriesKeys?.[0]
  const xAxisDataKey = config.runtime.originalXAxis?.dataKey || config.xAxis?.dataKey

  if (!valueKey || !xAxisDataKey || !data || data.length === 0) {
    return null
  }

  // Calculate the min and max values for the color scale
  const values = data.map(d => Number(d[valueKey])).filter(v => !isNaN(v))
  const minValue = Math.min(...values)
  const maxValue = Math.max(...values)

  // Create a sequential color scale from blue (cold) to red (hot)
  // interpolateRdBu goes from red to blue, so we invert the domain
  const colorScale = scaleSequential(interpolateRdBu).domain([maxValue, minValue])

  // Calculate stripe width based on available space
  const stripeWidth = xMax / data.length

  const handleTooltip = (item: any) => {
    const xValue = item[xAxisDataKey]
    const yValue = item[valueKey]
    const formattedValue = formatNumber(yValue, 'left')

    return `<div>
      <strong>${config.xAxis.label || xAxisDataKey}:</strong> ${xValue}<br/>
      <strong>${config.runtime.seriesLabels?.[valueKey] || valueKey}:</strong> ${formattedValue}
    </div>`
  }

  return (
    <Group className='warming-stripes' left={config.yAxis.size}>
      {data.map((item, index) => {
        const value = Number(item[valueKey])
        if (isNaN(value)) return null

        const xPosition = index * stripeWidth
        const fillColor = colorScale(value) as unknown as string

        return (
          <rect
            key={`stripe-${index}`}
            x={xPosition}
            y={0}
            width={stripeWidth}
            height={yMax}
            fill={fillColor}
            stroke='none'
            data-tooltip-html={handleTooltip(item)}
            data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
            tabIndex={-1}
            onMouseEnter={() => {
              if (currentHover !== index) {
                const xValue = item[xAxisDataKey]
                const yValue = item[valueKey]

                publishAnalyticsEvent({
                  vizType: config?.type,
                  vizSubType: getVizSubType(config),
                  eventType: 'chart_hover',
                  eventAction: 'hover',
                  eventLabel: interactionLabel || 'unknown',
                  vizTitle: getVizTitle(config),
                  series: valueKey,
                  specifics: `${xAxisDataKey}: ${xValue}, ${valueKey}: ${yValue}`
                })
                setCurrentHover(index)
              }
            }}
            onMouseLeave={() => setCurrentHover(null)}
          />
        )
      })}
    </Group>
  )
}

export default WarmingStripes
