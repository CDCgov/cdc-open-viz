import { useContext, useEffect } from 'react'

// visx
import { Group } from '@visx/group'
import { Line, Bar, Circle, LinePath } from '@visx/shape'
import { Text } from '@visx/text'
import { scaleLinear } from '@visx/scale'
import { curveLinearClosed } from '@visx/curve'

// types
import { type ForestPlotProps } from '@cdc/chart/src/components/ForestPlot/ForestPlotProps'
import { type ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import { type ChartContext } from '@cdc/chart/src/types/ChartContext'

// cdc
import ConfigContext from '../../ConfigContext'
import { getFontSize } from '@cdc/core/helpers/cove/number'

const ForestPlot = (props: ForestPlotProps) => {
  const { rawData: data, updateConfig } = useContext<ChartContext>(ConfigContext)
  const { xScale, yScale, config, height, width, handleTooltipMouseOff, handleTooltipMouseOver } = props
  const { forestPlot } = config as ChartConfig

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

  const pooledData = config.data.find(d => d[config.xAxis.dataKey] === config.forestPlot.pooledResult.column)

  const regressionPoints = pooledData
    ? [
        { x: xScale(pooledData[config.forestPlot.lower]), y: height - Number(config.forestPlot.rowHeight) },
        { x: xScale(pooledData[config.forestPlot.estimateField]), y: height - forestPlot.pooledResult.diamondHeight - Number(config.forestPlot.rowHeight) },
        { x: xScale(pooledData[config.forestPlot.upper]), y: height - Number(config.forestPlot.rowHeight) },
        { x: xScale(pooledData[config.forestPlot.estimateField]), y: height + forestPlot.pooledResult.diamondHeight - Number(config.forestPlot.rowHeight) },
        { x: xScale(pooledData[config.forestPlot.lower]), y: height - Number(config.forestPlot.rowHeight) }
      ]
    : []

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

  return (
    <>
      <Group>
        {forestPlot.title && (
          <Text className={`forest-plot--title`} x={forestPlot.type === 'Linear' ? xScale(0) : xScale(1)} y={0} textAnchor='middle' verticalAnchor='start' fontSize={getFontSize(config.fontSize)} fill={'black'}>
            {forestPlot.title}
          </Text>
        )}

        {/* Line of no effect on Continuous Scale. */}
        {forestPlot.lineOfNoEffect.show && forestPlot.type === 'Linear' && <Line from={{ x: xScale(0), y: 0 + topMarginOffset }} to={{ x: xScale(0), y: height }} className='forestplot__line-of-no-effect' stroke={forestPlot.regression.baseLineColor || 'black'} />}

        {/* Line of no effect on Logarithmic Scale. */}
        {forestPlot.lineOfNoEffect.show && forestPlot.type === 'Logarithmic' && <Line from={{ x: xScale(1), y: 0 + topMarginOffset }} to={{ x: xScale(1), y: height }} className='forestplot__line-of-no-effect' stroke={forestPlot.regression.baseLineColor || 'black'} />}

        {data.map((d, i) => {
          // calculate both square and circle size based on radius.min and radius.max
          const scaleRadius = scaleLinear({
            domain: data.map(d => d[forestPlot.radius.scalingColumn]),
            range: [forestPlot.radius.min, forestPlot.radius.max]
          })

          // glyph settings
          const rectSize = forestPlot.radius.scalingColumn !== '' ? scaleRadius(data[i][forestPlot.radius.scalingColumn]) : 4
          const shapeColor = forestPlot.colors.shape ? forestPlot.colors.shape : 'black'
          const lineColor = forestPlot.colors.line ? forestPlot.colors.line : 'black'

          // ci size
          const ciEndSize = 4

          // Don't run calculations on the pooled column
          const isTotalColumn = d[config.xAxis.dataKey] === forestPlot.pooledResult.column

          return !isTotalColumn ? (
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
                <Circle className='forest-plot--circle' cx={xScale(Number(d[forestPlot.estimateField]))} cy={yScale(i)} r={forestPlot.radius.scalingColumn !== '' ? scaleRadius(data[i][forestPlot.radius.scalingColumn]) : 4} fill={shapeColor} style={{ opacity: 1, filter: 'unset' }} />
              )}
              {forestPlot.shape === 'square' && <rect className='forest-plot--square' x={xScale(Number(d[forestPlot.estimateField]))} y={yScale(i) - rectSize / 2} width={rectSize} height={rectSize} fill={shapeColor} style={{ opacity: 1, filter: 'unset' }} />}
              {forestPlot.shape === 'text' && (
                <Text className='forest-plot--text' x={xScale(Number(d[forestPlot.estimateField]))} y={yScale(i)} textAnchor='middle' verticalAnchor='middle' fontSize={getFontSize(config.fontSize)} fill={shapeColor}>
                  {d[forestPlot.estimateField]}
                </Text>
              )}
            </Group>
          ) : (
            <LinePath data={regressionPoints} x={d => d.x} y={d => d.y - getFontSize(config.fontSize) / 2} stroke='black' strokeWidth={2} fill={'black'} curve={curveLinearClosed} />
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

      {/* left bottom label */}
      {forestPlot.leftLabel && (
        <Text className='forest-plot__left-label' x={forestPlot.type === 'Linear' ? xScale(0) - 25 : xScale(1) - 25} y={height + 50} textAnchor='end'>
          {forestPlot.leftLabel}
        </Text>
      )}

      {forestPlot.rightLabel && (
        <Text className='forest-plot__right-label' x={forestPlot.type === 'Linear' ? xScale(0) + 25 : xScale(1) + 25} y={height + 50} textAnchor='start'>
          {forestPlot.rightLabel}
        </Text>
      )}
    </>
  )
}

export default ForestPlot
