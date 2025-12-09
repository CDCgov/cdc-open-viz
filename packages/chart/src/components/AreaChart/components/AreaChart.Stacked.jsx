import React, { useContext, memo } from 'react'

// cdc
import ConfigContext from '../../../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { isDateScale } from '@cdc/core/helpers/cove/date'

// visx & d3
import * as allCurves from '@visx/curve'
import { Bar, AreaStack } from '@visx/shape'
import { Group } from '@visx/group'
import { approvedCurveTypes } from '@cdc/core/helpers/lineChartHelpers'

const AreaChartStacked = ({ xScale, yScale, yMax, xMax, handleTooltipMouseOver, handleTooltipMouseOff }) => {
  // import data from context
  let { transformedData: data, config, seriesHighlight, colorScale, rawData, parseDate } = useContext(ConfigContext)
  // Draw transparent bars over the chart to get tooltip data
  // Turn DEBUG on for additional context.
  if (!data) return

  const handleDateCategory = value => {
    let scaledValue
    if (config.xAxis.type === 'categorical') {
      scaledValue = xScale(value)
    } else if (isDateScale(config.xAxis)) {
      scaledValue = xScale(parseDate(value, false))
    }

    // Validate scaled value is finite and non-negative
    if (scaledValue === undefined || !Number.isFinite(scaledValue) || scaledValue < 0) {
      return NaN // Return NaN so visx's defined check can filter this point
    }

    // Add bandwidth offset to center on band scales
    return scaledValue + (xScale.bandwidth ? xScale.bandwidth() / 2 : 0)
  }

  // Check if a data point has valid x coordinate
  const isValidPoint = d => {
    const x = handleDateCategory(d.data[config.xAxis.dataKey])
    return Number.isFinite(x) && x >= 0
  }

  const strokeWidth = 2

  return (
    data && (
      <svg height={Number(yMax)}>
        <ErrorBoundary component='AreaChartStacked'>
          <Group
            className='area-chart'
            key='area-wrapper'
            left={Number(config.yAxis.size) + strokeWidth / 2}
            height={Number(yMax)}
            style={{ overflow: 'hidden' }}
          >
            <AreaStack
              data={data}
              keys={config.runtime.areaSeriesKeys.map(s => s.dataKey) || config.series.map(s => s.dataKey)}
              x0={d => handleDateCategory(d.data[config.xAxis.dataKey])}
              y0={d => Number(yScale(d[0]))}
              y1={d => Number(yScale(d[1]))}
              curve={allCurves[approvedCurveTypes[config.stackedAreaChartLineType]]}
              defined={isValidPoint}
            >
              {({ stacks, path }) => {
                return stacks.map((stack, stackIndex) => {
                  let transparentArea =
                    config.legend.behavior === 'highlight' &&
                    seriesHighlight.length > 0 &&
                    seriesHighlight.indexOf(stack.key) === -1
                  let displayArea =
                    config.legend.behavior === 'highlight' ||
                    seriesHighlight.length === 0 ||
                    seriesHighlight.indexOf(stack.key) !== -1

                  return (
                    // prettier-ignore
                    <path
                      key={stack.key}
                      d={path(stack) || ''}
                      strokeWidth={2}
                      stroke={displayArea ? colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[stack.key] : stack.key) : '#000' : 'transparent'}
                      fillOpacity={transparentArea ? 0.2 : 1}
                      fill={displayArea ? colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[stack.key] : stack.key) : '#000' : 'transparent'}
                    />
                  )
                })
              }}
            </AreaStack>
            {/* prettier-ignore */}
            <Bar width={Number(xMax)} height={Number(yMax)} fill={'transparent'} onMouseMove={e => handleTooltipMouseOver(e, rawData)} onMouseLeave={handleTooltipMouseOff} />
          </Group>
        </ErrorBoundary>
      </svg>
    )
  )
}

export default memo(AreaChartStacked)
