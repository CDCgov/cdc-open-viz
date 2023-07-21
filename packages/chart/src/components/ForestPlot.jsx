import React, { useContext } from 'react'

// visx
import { Group } from '@visx/group'
import { Line, Bar, Circle } from '@visx/shape'
import { GlyphDiamond } from '@visx/glyph'
import { Text } from '@visx/text'
import { scaleLinear } from '@visx/scale'

// cdc
import ConfigContext from '../ConfigContext'
import { getFontSize } from '@cdc/core/helpers/cove/number'

const ForestPlot = props => {
  const { rawData: data } = useContext(ConfigContext)
  const { xScale, yScale, config, height, width, handleTooltipMouseOff, handleTooltipMouseOver } = props
  const { forestPlot } = config

  return (
    <Group left={config.yAxis.size}>
      {forestPlot.showZeroLine && <Line from={{ x: xScale(0), y: 0 }} to={{ x: xScale(0), y: height }} className='zero-line' stroke='gray' strokeDasharray={'5 5'} />}

      {data.map((d, i) => {
        // calculate both square and circle size based on radius.min and radius.max
        const scaleRadius = scaleLinear({
          domain: xScale.domain(),
          range: [forestPlot.radius.min, forestPlot.radius.max]
        })

        // glyph settings
        const diamondSize = forestPlot.radius.scalingColumn !== '' ? scaleRadius(data[i][forestPlot.estimateField]) * 5 : 4
        const rectSize = forestPlot.radius.scalingColumn !== '' ? scaleRadius(data[i][forestPlot.estimateField]) : 4
        const shapeColor = forestPlot.colors.shape ? forestPlot.colors.shape : 'black'
        const lineColor = forestPlot.colors.line ? forestPlot.colors.line : 'black'

        // ci size
        const ciEndSize = 4

        return (
          <Group>
            {/* Confidence Interval Paths */}
            <path
              stroke={lineColor}
              strokeWidth={1}
              className='lower-ci'
              d={`
                    M${xScale(d[forestPlot.lower])} ${yScale(i) - Number(ciEndSize)}
                    L${xScale(d[forestPlot.lower])} ${yScale(i) + Number(ciEndSize)}
                `}
            />

            <path
              stroke={lineColor}
              strokeWidth={1}
              className='upper-ci'
              d={`
                    M${xScale(d[forestPlot.upper])} ${yScale(i) - Number(ciEndSize)}
                    L${xScale(d[forestPlot.upper])} ${yScale(i) + Number(ciEndSize)}
                `}
            />

            {/* main line */}
            <line stroke={lineColor} className={`line-${d[config.yAxis.dataKey]}`} key={i} x1={xScale(d[forestPlot.lower])} x2={xScale(d[forestPlot.upper])} y1={yScale(i)} y2={yScale(i)} />
            {forestPlot.shape === 'circle' && (
              <Circle className='forest-plot--circle' cx={xScale(Number(d[forestPlot.estimateField]))} cy={yScale(i)} r={forestPlot.radius.scalingColumn !== '' ? scaleRadius(data[i][forestPlot.estimateField]) : 4} fill={shapeColor} style={{ opacity: 1, filter: 'unset' }} />
            )}
            {forestPlot.shape === 'square' && <rect className='forest-plot--square' x={xScale(Number(d[forestPlot.estimateField]))} y={yScale(i) - rectSize / 2} width={rectSize} height={rectSize} fill={shapeColor} style={{ opacity: 1, filter: 'unset' }} />}
            {forestPlot.shape === 'diamond' && <GlyphDiamond className='forest-plot--diamond' size={diamondSize} top={yScale(i)} left={xScale(Number(d[forestPlot.estimateField]))} fill={shapeColor} />}
            {forestPlot.shape === 'text' && (
              <Text className='forest-plot--text' x={xScale(Number(d[forestPlot.estimateField]))} y={yScale(i)} textAnchor='middle' verticalAnchor='middle' fontSize={getFontSize(config.fontSize)} fill={shapeColor}>
                {d[forestPlot.estimateField]}
              </Text>
            )}
          </Group>
        )
      })}

      <Bar key='forest-plot-tooltip-area' className='forest-plot-tooltip-area' width={width} height={height} fill={false ? 'red' : 'transparent'} fillOpacity={0.5} onMouseMove={e => handleTooltipMouseOver(e, data)} onMouseOut={handleTooltipMouseOff} />
    </Group>
  )
}

export default ForestPlot
