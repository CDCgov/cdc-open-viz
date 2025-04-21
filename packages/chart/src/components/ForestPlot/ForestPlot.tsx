import { useContext, useEffect, useState } from 'react'

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
import { APP_FONT_SIZE } from '@cdc/core/helpers/constants'

const ForestPlot = ({
  xScale,
  yScale,
  config,
  height,
  width,
  handleTooltipMouseOff,
  handleTooltipMouseOver,
  forestPlotRightLabelRef
}: ForestPlotProps) => {
  const { rawData: data, updateConfig } = useContext<ChartContext>(ConfigContext)
  const { forestPlot } = config as ChartConfig
  const labelPosition = config.xAxis.tickWidthMax + 10
  const [initialLogTicksSet, setInitialLogTicks] = useState(false)

  useEffect(() => {
    try {
      const defaultColumns = ['estimateField', 'lower', 'upper', 'estimateRadius']
      const newConfig = config

      // Setting a default number of colums.additionalColumn1, columns.additionalColumn2, etc.
      // to loop through to clean up which columns are being displayed by default for forest plots
      // Set tooltip and data table properties according to the default forestPlot column names above.
      const colsToCheck = 10
      for (let i = 0; i < colsToCheck; i++) {
        defaultColumns.forEach(col => {
          if (
            config.forestPlot[col] &&
            config.forestPlot[col] !== newConfig.columns[config.forestPlot[`additionalColumn${i}`]]?.name
          ) {
            delete newConfig.columns[`additionalColumn${i}`] // Remove old value if found to prevent duplicates
            newConfig.columns[config.forestPlot[col]] = {}
            newConfig.columns[config.forestPlot[col]].dataKey = newConfig.forestPlot[col]
            newConfig.columns[config.forestPlot[col]].name = newConfig.forestPlot[col]
            newConfig.columns[config.forestPlot[col]].dataTable = true
            newConfig.columns[config.forestPlot[col]].tooltips = true
            newConfig.columns[config.forestPlot[col]].label = newConfig.forestPlot[col]
          }
        })
      }

      // Add weight column into tooltip and data table.
      if (config.forestPlot.radius.scalingColumn) {
        newConfig.columns[config.forestPlot.radius.scalingColumn] = {}
        newConfig.columns[config.forestPlot.radius.scalingColumn].dataKey = newConfig.forestPlot.radius.scalingColumn
        newConfig.columns[config.forestPlot.radius.scalingColumn].name = newConfig.forestPlot.radius.scalingColumn
        newConfig.columns[config.forestPlot.radius.scalingColumn].label = newConfig.forestPlot.radius.scalingColumn
        newConfig.columns[config.forestPlot.radius.scalingColumn].dataTable = true
        newConfig.columns[config.forestPlot.radius.scalingColumn].tooltips = true
      }

      if (newConfig.table.showVertical) {
        newConfig.table.indexLabel = config.xAxis.dataKey
      }

      updateConfig(newConfig)
    } catch (e) {
      console.log(e.message)
    }
  }, [])

  useEffect(() => {
    if (!initialLogTicksSet && config.forestPlot.type === 'Logarithmic') {
      updateConfig({
        ...config,
        dataFormat: {
          ...config.dataFormat,
          roundTo: 2
        }
      })
      setInitialLogTicks(true)
    }
  }, [config.forestPlot.type])

  const pooledData = config.data.find(d => d[config.xAxis.dataKey] === config.forestPlot.pooledResult.column)

  const regressionPoints = pooledData
    ? [
        { x: xScale(pooledData[config.forestPlot.lower]), y: height - Number(config.forestPlot.rowHeight) },
        {
          x: xScale(pooledData[config.forestPlot.estimateField]),
          y: height - forestPlot.pooledResult.diamondHeight - Number(config.forestPlot.rowHeight)
        },
        { x: xScale(pooledData[config.forestPlot.upper]), y: height - Number(config.forestPlot.rowHeight) },
        {
          x: xScale(pooledData[config.forestPlot.estimateField]),
          y: height + forestPlot.pooledResult.diamondHeight - Number(config.forestPlot.rowHeight)
        },
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

  type Columns = {
    forestPlot?: boolean
  }

  const columnsOnChart: Columns[] = Object.entries(config.columns)
    .map(entry => entry[1])
    .filter(entry => entry.forestPlot === true)

  return (
    <>
      <Group width={width}>
        {forestPlot.title && (
          <Text
            className={`forest-plot--title`}
            x={forestPlot.type === 'Linear' ? xScale(0) : xScale(1)}
            y={0}
            textAnchor='middle'
            verticalAnchor='start'
            fill={'black'}
          >
            {forestPlot.title}
          </Text>
        )}

        {/* Line of no effect on Continuous Scale. */}
        {forestPlot.lineOfNoEffect.show && forestPlot.type === 'Linear' && (
          <Line
            from={{ x: xScale(0), y: 0 + topMarginOffset }}
            to={{ x: xScale(0), y: height }}
            className='forestplot__line-of-no-effect'
            stroke={forestPlot.regression.baseLineColor || 'black'}
          />
        )}

        {/* Line of no effect on Logarithmic Scale. */}
        {forestPlot.lineOfNoEffect.show && forestPlot.type === 'Logarithmic' && (
          <Line
            from={{ x: xScale(1), y: 0 + topMarginOffset }}
            to={{ x: xScale(1), y: height }}
            className='forestplot__line-of-no-effect'
            stroke={forestPlot.regression.baseLineColor || 'black'}
          />
        )}

        {data.map((d, i) => {
          // calculate both square and circle size based on radius.min and radius.max
          const scaleRadius = scaleLinear({
            domain: data.map(d => d[forestPlot.radius.scalingColumn]),
            range: [forestPlot.radius.min, forestPlot.radius.max]
          })

          // glyph settings
          const rectSize =
            forestPlot.radius.scalingColumn !== '' ? scaleRadius(data[i][forestPlot.radius.scalingColumn]) : 4
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
              <line
                stroke={lineColor}
                className={`line-${d[config.yAxis.dataKey]}`}
                key={i}
                x1={xScale(d[forestPlot.lower])}
                x2={xScale(d[forestPlot.upper])}
                y1={yScale(i)}
                y2={yScale(i)}
              />
              {forestPlot.shape === 'circle' && (
                <Circle
                  className='forest-plot--circle'
                  cx={xScale(Number(d[forestPlot.estimateField]))}
                  cy={yScale(i)}
                  r={forestPlot.radius.scalingColumn !== '' ? scaleRadius(data[i][forestPlot.radius.scalingColumn]) : 4}
                  fill={shapeColor}
                  style={{ opacity: 1, filter: 'unset' }}
                />
              )}
              {forestPlot.shape === 'square' && (
                <rect
                  className='forest-plot--square'
                  x={xScale(Number(d[forestPlot.estimateField]))}
                  y={yScale(i) - rectSize / 2}
                  width={rectSize}
                  height={rectSize}
                  fill={shapeColor}
                  style={{ opacity: 1, filter: 'unset' }}
                />
              )}
              {forestPlot.shape === 'text' && (
                <Text
                  className='forest-plot--text'
                  x={xScale(Number(d[forestPlot.estimateField]))}
                  y={yScale(i)}
                  textAnchor='middle'
                  verticalAnchor='middle'
                  fill={shapeColor}
                >
                  {d[forestPlot.estimateField]}
                </Text>
              )}
            </Group>
          ) : (
            <LinePath
              data={regressionPoints}
              x={d => d.x}
              y={d => d.y - APP_FONT_SIZE / 2}
              stroke='black'
              strokeWidth={2}
              fill={'black'}
              curve={curveLinearClosed}
            />
          )
        })}

        {/* regression diamond */}
        {regressionPoints && forestPlot.regression.showDiamond && (
          <LinePath
            data={regressionPoints}
            x={d => d.x}
            y={d => d.y}
            stroke='black'
            strokeWidth={2}
            fill={forestPlot.regression.baseLineColor}
            curve={curveLinearClosed}
          />
        )}
        {/* regression text */}
        {forestPlot.regression.description && (
          <Text
            x={0 - Number(config.xAxis.size)}
            width={width}
            y={height - config.forestPlot.rowHeight - Number(forestPlot.rowHeight) / 3}
            verticalAnchor='start'
            textAnchor='start'
            style={{ fontWeight: 'bold', fontSize: 12 }}
          >
            {forestPlot.regression.description}
          </Text>
        )}

        <Bar
          key='forest-plot-tooltip-area'
          className='forest-plot-tooltip-area'
          width={width}
          height={height}
          fill={false ? 'red' : 'transparent'}
          fillOpacity={0.5}
          onMouseMove={e => handleTooltipMouseOver(e, data)}
          onMouseOut={handleTooltipMouseOff}
        />
      </Group>
      <Line
        from={topLine[0]}
        to={topLine[1]}
        style={{ stroke: 'black', strokeWidth: 2 }}
        className='forestplot__top-line'
      />
      <Line
        from={bottomLine[0]}
        to={bottomLine[1]}
        style={{ stroke: 'black', strokeWidth: 2 }}
        className='forestplot__bottom-line'
      />

      {/* column data */}
      {columnsOnChart.map(column => {
        return data.map((d, i) => {
          return (
            <Text
              className={`${d[column.name]}`}
              x={column.forestPlotAlignRight ? width : column.forestPlotStartingPoint}
              y={yScale(i)}
              textAnchor={column.forestPlotAlignRight ? 'end' : 'start'}
              verticalAnchor='middle'
              fill={'black'}
            >
              {d[column.name]}
            </Text>
          )
        })
      })}

      {/* X Axis DataKey Cols*/}
      {!forestPlot.hideDateCategoryCol &&
        data.map((d, i) => {
          return (
            <Text
              className={`${d[config.xAxis.dataKey]}`}
              x={0}
              y={yScale(i)}
              textAnchor={'start'}
              verticalAnchor='middle'
              fill={'black'}
            >
              {d[config.xAxis.dataKey]}
            </Text>
          )
        })}

      {/* X Axis Datakey Header */}
      {!forestPlot.hideDateCategoryCol && config.xAxis.dataKey && (
        <Text className={config.xAxis.dataKey} x={0} y={0} textAnchor={'start'} verticalAnchor='start' fill={'black'}>
          {config.xAxis.dataKey}
        </Text>
      )}

      {/* column headers */}
      {columnsOnChart.map(column => {
        return (
          <Text
            className={`${column.label}`}
            x={column.forestPlotAlignRight ? width : column.forestPlotStartingPoint}
            y={0}
            textAnchor={column.forestPlotAlignRight ? 'end' : 'start'}
            verticalAnchor='start'
            fill={'black'}
          >
            {column.label}
          </Text>
        )
      })}

      {/* left bottom label */}
      {forestPlot.leftLabel && (
        <Text
          className='forest-plot__left-label'
          x={forestPlot.type === 'Linear' ? xScale(0) - 25 : xScale(1) - 25}
          y={height + labelPosition}
          textAnchor='end'
          verticalAnchor='start'
        >
          {forestPlot.leftLabel}
        </Text>
      )}

      {forestPlot.rightLabel && (
        <Text
          innerRef={forestPlotRightLabelRef}
          className='forest-plot__right-label'
          x={forestPlot.type === 'Linear' ? xScale(0) + 25 : xScale(1) + 25}
          y={height + labelPosition}
          textAnchor='start'
          verticalAnchor='start'
        >
          {forestPlot.rightLabel}
        </Text>
      )}
    </>
  )
}

export default ForestPlot
