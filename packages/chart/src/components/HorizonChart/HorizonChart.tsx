import React, { useContext, memo, useMemo } from 'react'

// cdc
import ConfigContext from '../../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { isDateScale } from '@cdc/core/helpers/cove/date'

// visx
import { Bar } from '@visx/shape'
import { Group } from '@visx/group'

// components
import HorizonBand from './components/HorizonBand'

// helpers
import { calculateHorizonBands } from './helpers/calculateHorizonBands'

// types
import { HORIZON_DEFAULTS } from '../../types/Horizon'

type HorizonChartProps = {
  xScale: any
  yScale: any
  xMax: number
  yMax: number
  handleTooltipMouseOver: (e: any, additionalData?: any) => void
  handleTooltipMouseOff: () => void
  tooltipData?: any
  showTooltip?: boolean
}

const HorizonChart = ({ xScale, xMax, yMax, handleTooltipMouseOver, handleTooltipMouseOff }: HorizonChartProps) => {
  // Get data and config from context
  const { transformedData: data, config, colorScale, rawData, parseDate } = useContext(ConfigContext)

  const horizonConfig = {
    ...HORIZON_DEFAULTS,
    ...config.horizon
  }

  // Get series keys for rendering rows
  const seriesKeys =
    (config.runtime?.seriesKeys?.length ? config.runtime.seriesKeys : config.series?.map(s => s.dataKey)) || []

  // Calculate value range across all horizon series (for consistent scaling)
  // Must be called before early returns to satisfy React hooks rules
  const valueRange = useMemo(() => {
    if (!data || data.length === 0 || seriesKeys.length === 0) {
      return { min: 0, max: 0 }
    }

    let min = Infinity
    let max = -Infinity

    data.forEach((row: any) => {
      seriesKeys.forEach((key: string) => {
        const value = Math.abs(Number(row[key]) || 0)
        if (value > 0) {
          min = Math.min(min, value)
          max = Math.max(max, value)
        }
      })
    })

    return {
      min: min === Infinity ? 0 : min,
      max: max === -Infinity ? 0 : max
    }
  }, [data, seriesKeys])

  // Early returns after all hooks
  if (!data || data.length === 0) return null
  if (seriesKeys.length === 0) return null
  if (xMax <= 0 || yMax <= 0) return null

  // Calculate band dimensions to fill available space
  const { bandHeight, getRowY } = calculateHorizonBands(
    seriesKeys.length,
    yMax,
    horizonConfig.bandGap,
    horizonConfig.bottomPadding
  )

  const getXPosition = value => {
    if (config.xAxis.type === 'categorical') {
      return xScale(value) + (xScale.bandwidth ? xScale.bandwidth() / 2 : 0)
    }
    if (isDateScale(config.xAxis)) {
      const scaledValue = xScale(parseDate(value, false))
      return scaledValue + (xScale.bandwidth ? xScale.bandwidth() / 2 : 0)
    }
    return xScale(value)
  }

  return (
    <ErrorBoundary component='HorizonChart'>
      <Group className='horizon-chart' key='horizon-wrapper' left={Number(config.yAxis.size)} height={Number(yMax)}>
        {seriesKeys.map((seriesKey, index) => {
          const rowY = getRowY(index)
          return (
            <Group key={seriesKey} top={rowY} className='horizon-band-row'>
              {/* Horizon band for this series */}
              <HorizonBand
                data={data}
                seriesKey={seriesKey}
                xAxisKey={config.xAxis.dataKey}
                getXPosition={getXPosition}
                bandHeight={bandHeight}
                xMax={xMax}
                numLayers={horizonConfig.numLayers}
                colorScale={colorScale}
                config={config}
                globalMax={valueRange.max}
              />
            </Group>
          )
        })}
        {/* Transparent bar for tooltip interaction */}
        <Bar
          width={Number(xMax)}
          height={Number(yMax)}
          fill='transparent'
          onMouseMove={e => handleTooltipMouseOver(e, rawData)}
          onMouseLeave={handleTooltipMouseOff}
        />
      </Group>
    </ErrorBoundary>
  )
}

export default memo(HorizonChart)
