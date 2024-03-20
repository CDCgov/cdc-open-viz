import React, { useContext } from 'react'
import { LinePath } from '@visx/shape'
import { Group } from '@visx/group'
import { ChartConfig } from '../../../types/ChartConfig'
import ConfigContext from '../../../ConfigContext'
import * as allCurves from '@visx/curve'
import { timeParse, timeFormat } from 'd3-time-format'

type BumpChartProps = {
  width: number
  height: number
  config: ChartConfig
  xScale: () => unknown[]
  yScale: () => unknown[]
}

const BumpChart: React.FC<BumpChartProps> = ({ width = 700, height = 900, config, xScale, yScale }) => {
  const { isEditor, colorScale } = useContext(ConfigContext)

  // Extract all unique series keys from the data
  const seriesKeys = Array.from(new Set(config.data.flatMap(d => Object.keys(d))))

  const parseDate = (dateString, showError = true) => {
    let date = timeParse(config.xAxis.dateParseFormat)(dateString)
    if (!date) {
      if (showError) {
        config.runtime.editorErrorMessage = `Error parsing date "${dateString}". Try reviewing your data and date parse settings in the X Axis section.`
      }
      return new Date()
    } else {
      return date
    }
  }

  return (
    <Group className='bump-chart-lines' width={width} height={height} left={Number(config.runtime.yAxis.size)} key='bump-chart-lines'>
      {seriesKeys.map(seriesItem =>
        config.data.map((d, dataIndex) => {
          const key = `${seriesItem}-${dataIndex}`

          // Basic debug statements
          // console.log('Processing series:', seriesItem)
          // console.log('Data:', d)
          // console.log('yscale', yScale.domain())
          // console.log('xscale', xScale.domain())

          const handleX = xValue => {
            if (config.xAxis.type === 'date') {
              console.log('testing', parseDate(xValue).getTime())
              return parseDate(xValue).getTime()
            }
            if (config.xAxis.type === 'date-time') {
              return new Date(xValue)
            }
            if (config.xAxis.type === 'categorical') {
              return xValue
            }
          }
          return (
            <LinePath
              curve={allCurves['curveLinear']}
              key={key}
              data-key={key}
              data-key-year={seriesItem}
              data={config.data}
              x={data => Number(xScale(handleX(data[config.xAxis.dataKey])))}
              y={data => Number(yScale(data[seriesItem]))}
              stroke={colorScale(seriesItem)}
              strokeWidth={4}
              fill='transparent'
              defined={(item, i) => {
                return item[seriesItem] !== '' && item[seriesItem] !== null && item[seriesItem] !== undefined
              }}
              shapeRendering='geometricPrecision' // Enable anti-aliasing?
            />
          )
        })
      )}
    </Group>
  )
}

export default BumpChart
