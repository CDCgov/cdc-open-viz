import React, { useContext, useEffect } from 'react'

// visx
import { Group } from '@visx/group'
import { Line, Bar, Circle, LinePath } from '@visx/shape'
import { GlyphDiamond } from '@visx/glyph'
import { Text } from '@visx/text'
import { scaleLinear } from '@visx/scale'
import { curveLinearClosed } from '@visx/curve'

// cdc
import ConfigContext from '../ConfigContext'
import { getFontSize } from '@cdc/core/helpers/cove/number'

const ForestPlot = props => {
  const { transformedData: data, updateConfig } = useContext(ConfigContext)
  const { xScale, yScale, config, height, width, handleTooltipMouseOff, handleTooltipMouseOver, maxWidth, maxHeight } = props
  const { forestPlot, runtime, dataFormat } = config

  // Requirements for forest plot
  // - force legend to be hidden for this chart type
  // - reset the date category axis to zero
  useEffect(() => {
    if (!config.legend.hide) {
      updateConfig({
        ...config,
        legend: {
          ...config.legend,
          hide: true
        },
        xAxis: {
          ...config.xAxis,
          size: 0
        }
      })
    }
  }, [])

  const diamondHeight = 5

  // diamond path
  const regressionPoints = [
    { x: xScale(forestPlot.regression.lower), y: height - Number(config.forestPlot.rowHeight) },
    { x: xScale(forestPlot.regression.estimateField), y: height - diamondHeight - Number(config.forestPlot.rowHeight) },
    { x: xScale(forestPlot.regression.upper), y: height - Number(config.forestPlot.rowHeight) },
    { x: xScale(forestPlot.regression.estimateField), y: height + diamondHeight - Number(config.forestPlot.rowHeight) },
    { x: xScale(forestPlot.regression.lower), y: height - Number(config.forestPlot.rowHeight) }
  ]

  const topMarginOffset = config.forestPlot.rowHeight

  const topLine = [
    { x: 0, y: topMarginOffset },
    { x: width, y: topMarginOffset }
  ]

  const bottomLine = [
    { x: 0, y: height },
    { x: width, y: height }
  ]

  const columnsOnChart = Object.entries(config.columns)
    .map(entry => entry[1])
    .filter(entry => entry.forestPlot === true)

  console.log('width', width)

  const chartWidth = (Number(config.forestPlot.width) / 100) * width
  const rightOffset = (Number(config.forestPlot.rightWidthOffset) / 100) * width
  const leftOffset = (Number(config.forestPlot.leftWidthOffset) / 100) * width

  const center = (chartWidth + leftOffset - rightOffset) / 2

  return (
    <>
      <Group>
        {forestPlot.title !== '' && (
          <Text className={`forest-plot--title`} x={center} y={0} textAnchor='middle' verticalAnchor='start' fontSize={getFontSize(config.fontSize)} fill={'black'}>
            {forestPlot.title}
          </Text>
        )}
        {forestPlot.regression.showBaseLine && <Line from={{ x: xScale(forestPlot.regression.estimateField), y: 0 + topMarginOffset }} to={{ x: xScale(forestPlot.regression.estimateField), y: height }} className='forestplot__baseline' stroke={forestPlot.regression.baseLineColor} />}
        {forestPlot.showZeroLine && <Line from={{ x: xScale(0), y: 0 + topMarginOffset }} to={{ x: xScale(0), y: height }} className='forestplot__zero-line' stroke='gray' strokeDasharray={'5 5'} />}

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

        {/* regression diamond */}
        {regressionPoints && forestPlot.regression.showDiamond && <LinePath data={regressionPoints} x={d => d.x} y={d => d.y} stroke='black' strokeWidth={2} fill={forestPlot.regression.baseLineColor} curve={curveLinearClosed} />}
        {/* regression text */}
        {forestPlot.regression.description && (
          <Text x={0 - Number(config.xAxis.size)} width={width} y={height - config.forestPlot.rowHeight - Number(forestPlot.rowHeight) / 3} verticalAnchor='start' textAnchor='start' style={{ fontWeight: 'bold', fontSize: 12 }}>
            {forestPlot.regression.description}
          </Text>
        )}

        <Bar key='forest-plot-tooltip-area' className='forest-plot-tooltip-area' width={width} height={height} fill={false ? 'red' : 'transparent'} fillOpacity={0.5} onMouseMove={e => handleTooltipMouseOver(e, data)} onMouseOut={handleTooltipMouseOff} />
      </Group>
      <Line from={topLine[0]} to={topLine[1]} style={{ stroke: 'black', strokeWidth: 2 }} className='forestplot__top-line' />
      <Line from={bottomLine[0]} to={bottomLine[1]} style={{ stroke: 'black', strokeWidth: 2 }} className='forestplot__bottom-line' />

      {/* column data */}
      {columnsOnChart.map(column => {
        return data.map((d, i) => {
          return (
            <Text className={`${d[column.name]}`} x={column.forestPlotAlignRight ? width : column.forestPlotStartingPoint} y={yScale(i)} textAnchor={column.forestPlotAlignRight ? 'end' : 'start'} verticalAnchor='middle' fontSize={getFontSize(config.fontSize)} fill={'black'}>
              {d[column.name]}
            </Text>
          )
        })
      })}

      {/* X Axis DataKey Cols*/}
      {!forestPlot.hideDateCategoryCol &&
        data.map((d, i) => {
          return (
            <Text className={`${d[config.xAxis.dataKey]}`} x={0} y={yScale(i)} textAnchor={'start'} verticalAnchor='middle' fontSize={getFontSize(config.fontSize)} fill={'black'}>
              {d[config.xAxis.dataKey]}
            </Text>
          )
        })}

      {/* X Axis Datakey Header */}
      {!forestPlot.hideDateCategoryCol && config.xAxis.dataKey && (
        <Text className={config.xAxis.dataKey} x={0} y={0} textAnchor={'start'} verticalAnchor='start' fontSize={getFontSize(config.fontSize)} fill={'black'}>
          {config.xAxis.dataKey}
        </Text>
      )}

      {/* column headers */}
      {columnsOnChart.map(column => {
        return (
          <Text className={`${column.label}`} x={column.forestPlotAlignRight ? width : column.forestPlotStartingPoint} y={0} textAnchor={column.forestPlotAlignRight ? 'end' : 'start'} verticalAnchor='start' fontSize={getFontSize(config.fontSize)} fill={'black'}>
            {column.label}
          </Text>
        )
      })}
    </>
  )
}

export default ForestPlot
