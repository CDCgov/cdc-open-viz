import React, { useContext, memo } from 'react'

// cdc
import ConfigContext from '../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

// visx & d3
import * as allCurves from '@visx/curve'
import { Bar, AreaStack } from '@visx/shape'
import { Group } from '@visx/group'

const AreaChartStacked = ({ xScale, yScale, yMax, xMax, getXAxisData, getYAxisData, chartRef, handleTooltipMouseOver, handleTooltipMouseOff, tooltipData, isDebug, isBrush, brushData, children }) => {
  // enable various console logs in the file
  const DEBUG = isDebug

  // import data from context
  let { transformedData: data, config, handleLineType, parseDate, formatDate, formatNumber, seriesHighlight, colorScale, rawData } = useContext(ConfigContext)

  // Draw transparent bars over the chart to get tooltip data
  // Turn DEBUG on for additional context.
  if (!data) return

  const handleDateCategory = value => {
    if (config.xAxis.type === 'categorical') return xScale(value)
    if (config.xAxis.type === 'date') {
      let date = new Date(value)
      return xScale(date)
    }
  }

  const strokeWidth = 2

  // data.map(d => console.log(yScale(d[config.runtime.seriesKeys[0]])))
  return (
    data && (
      <svg height={Number(yMax)}>
        <ErrorBoundary component='AreaChartStacked'>
          <Group className='area-chart' key='area-wrapper' left={Number(config.yAxis.size) + strokeWidth / 2} height={Number(yMax)} style={{ overflow: 'hidden' }}>
            <AreaStack data={data} keys={config.runtime.seriesKeys} x0={d => handleDateCategory(d.data[config.xAxis.dataKey])} y0={d => Number(yScale(d[0]))} y1={d => Number(yScale(d[1]))} curve={allCurves['curveNatural']}>
              {({ stacks, path }) => {
                return stacks.map((stack, stackIndex) => {
                  let transparentArea = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(stack.key) === -1
                  let displayArea = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(stack.key) !== -1

                  return (
                    // prettier-ignore
                    <path
                      key={stack.key}
                      d={path(stack) || ''}
                      strokeWidth={2}
                      stroke={displayArea ?  colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[stack.key] : stack.key) : '#000' : 'transparent'}
                      fillOpacity={transparentArea ? 0.25 : 0.5}
                      fill={displayArea ? colorScale ? colorScale(config.runtime.seriesLabels ? config.runtime.seriesLabels[stack.key] : stack.key) : '#000' : 'transparent'}
                    />
                  )
                })
              }}
            </AreaStack>

            {/* prettier-ignore */}
            {!isBrush && <Bar width={Number(xMax)} height={Number(yMax)} fill={DEBUG ? 'red' : 'transparent'} fillOpacity={0.05} style={DEBUG ? { stroke: 'black', strokeWidth: 2 } : {}} onMouseMove={e => handleTooltipMouseOver(e, rawData)} onMouseLeave={handleTooltipMouseOff} />}
          </Group>
        </ErrorBoundary>
      </svg>
    )
  )
}

export default memo(AreaChartStacked)
