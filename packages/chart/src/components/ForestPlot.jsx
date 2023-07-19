import React, { useContext } from 'react'

// visx
import { Group } from '@visx/group'
import { Line, Bar, Circle } from '@visx/shape'
import { Text } from '@visx/text'
import { scaleLinear } from '@visx/scale'

// cdc
import ConfigContext from '../ConfigContext'

const ForestPlot = props => {
  const { rawData: data } = useContext(ConfigContext)
  const { xScale, yScale, config, height, width, handleTooltipMouseOff, handleTooltipMouseOver } = props
  const { forestPlot } = config

  // Tooltip helper for getting data to the closest y value hovered.
  const handleForestPlotMouseOver = yPosition => {
    let minDistance = Number.MAX_VALUE
    let closestYValue = null

    data.forEach(d => {
      const yValue = yScale(d['Author(s) and Year']) + yScale.bandwidth() / 2
      const distance = Math.abs(yPosition - yValue)

      if (distance < minDistance) {
        minDistance = distance
        closestYValue = d['Author(s) and Year']
      }
    })

    console.log('closestYValue', closestYValue)
  }

  /**
   * TODO: refactor later
   * These are placeholders used during initial development that could be cleaned up.
   */
  const columns = {
    upper: forestPlot.upper,
    lower: forestPlot.lower,
    estimate: forestPlot.estimateField,
    series: config.yAxis.dataKey
  }

  /**
   * TODO:
   * Search on this in the codebase and create a re-usable function.
   */
  const fontSize = { small: 16, medium: 18, large: 20 }

  return (
    <Group left={config.yAxis.size}>
      {forestPlot.showZeroLine && <Line from={{ x: xScale(0), y: 0 }} to={{ x: xScale(0), y: height }} className='zero-line' stroke='gray' strokeDasharray={'5 5'} />}

      {data.map((d, i) => {
        // calculate both square and circle size based on radius.min and radius.max
        const scaleRadius = scaleLinear({
          domain: [
            Math.min.apply(
              null,
              data.map(d => d[columns.lower])
            ),
            Math.max.apply(
              null,
              data.map(d => d[columns.upper])
            )
          ],
          range: [forestPlot.radius.min, forestPlot.radius.max]
        })

        // square size
        const rectSize = forestPlot.radius.scalingColumn !== '' ? scaleRadius(data[i][columns.estimate]) : 4

        // ci size
        const ciEndSize = 4

        return (
          <Group>
            {/* Confidence Interval Paths */}
            <path
              stroke='#333'
              strokeWidth={1}
              className='lower-ci'
              d={`
                    M${xScale(d[columns.lower])} ${yScale(i) - Number(ciEndSize)}
                    L${xScale(d[columns.lower])} ${yScale(i) + Number(ciEndSize)}
                `}
            />

            <path
              stroke='#333'
              strokeWidth={1}
              className='upper-ci'
              d={`
                    M${xScale(d[columns.upper])} ${yScale(i) - Number(ciEndSize)}
                    L${xScale(d[columns.upper])} ${yScale(i) + Number(ciEndSize)}
                `}
            />

            {/* main line */}
            <line stroke={'black'} className={`line-${d[columns.series]}`} key={i} x1={xScale(d[columns.lower])} x2={xScale(d[columns.upper])} y1={yScale(i)} y2={yScale(i)} />
            {forestPlot.shape === 'circle' && <Circle className='forest-plot--circle' cx={xScale(Number(d[columns.estimate]))} cy={yScale(i)} r={forestPlot.radius.scalingColumn !== '' ? scaleRadius(data[i][columns.estimate]) : 4} fill={'black'} style={{ opacity: 1, filter: 'unset' }} />}
            {forestPlot.shape === 'square' && <rect className='forest-plot--square' x={xScale(Number(d[columns.estimate]))} y={yScale(i) - rectSize / 2} width={rectSize} height={rectSize} fill={'black'} style={{ opacity: 1, filter: 'unset' }} />}
            {forestPlot.shape === 'text' && (
              <Text x={xScale(Number(d[columns.estimate]))} y={yScale(i)} textAnchor='middle' verticalAnchor='middle' fontSize={fontSize}>
                {d[columns.estimate]}
              </Text>
            )}
          </Group>
        )
      })}

      <Bar key='forest-plot-tooltip-area' className='forest-plot-tooltip-area' width={width} height={height} fill={false ? 'red' : 'transparent'} fillOpacity={0.5} onMouseMove={e => handleForestPlotMouseOver(e, data)} onMouseOut={handleTooltipMouseOff} />
    </Group>
  )
}

export default ForestPlot
