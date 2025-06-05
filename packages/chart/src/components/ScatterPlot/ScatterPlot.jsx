import React, { useContext } from 'react'
import ConfigContext from '../../ConfigContext'
import { Group } from '@visx/group'
import { formatNumber as formatColNumber } from '@cdc/core/helpers/cove/number'

const ScatterPlot = ({ xScale, yScale }) => {
  const {
    transformedData: data,
    config,
    tableData,
    formatNumber,
    seriesHighlight,
    colorPalettes
  } = useContext(ConfigContext)

  // TODO: copied from line chart should probably be a constant somewhere.
  const circleRadii = 4.5
  const hasMultipleSeries = Object.keys(config.runtime.seriesLabels).length > 1
  // tooltips for additional columns
  const additionalColumns = Object.entries(config.columns)
    .filter(([_, value]) => value.tooltips)
    .map(([_, value]) => [
      value.label || value.name,
      value.name,
      {
        addColPrefix: value.prefix,
        addColSuffix: value.suffix,
        addColRoundTo: value.roundToPlace,
        addColCommas: value.commas
      }
    ])
  const handleTooltip = (item, s, dataIndex) => `<div>
    ${
      config.legend.showLegendValuesTooltip && config.runtime.seriesLabels && hasMultipleSeries
        ? `${config.runtime.seriesLabels[s] || ''}<br/>`
        : ''
    }
    ${config.xAxis.label}: ${formatNumber(item[config.xAxis.dataKey], 'bottom')} <br/>
    ${config.yAxis.label}: ${formatNumber(item[s], 'left')}<br/>
   ${additionalColumns
     .map(
       ([label, name, options]) =>
         `${label} : ${formatColNumber(tableData[dataIndex][name], 'left', false, config, options)}<br/>`
     )
     .join('')}
</div>`

  return (
    <Group className='scatter-plot' left={config.yAxis.size}>
      {data.map((item, dataIndex) => {
        // prettier-ignore
        return config.runtime.seriesKeys.map((s, index) => {
          const transparentArea = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(s) === -1
          const displayArea = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(s) !== -1
          const seriesColor = config?.customColors ? config.customColors[index] : config.palette ? colorPalettes[config.palette][index] : '#000'

          let pointStyles = {
            filter: 'unset',
            opacity: 1,
            stroke: displayArea ? 'black' : ''
          }
          if (item[s]==='') {
            return <> </>
          }



          return (
            <circle
              key={`${dataIndex}-${index}`}
              r={circleRadii}
              cx={xScale(item[config.xAxis.dataKey])}
              cy={yScale(item[s])}
              fill={displayArea ? seriesColor : 'transparent'}
              fillOpacity={transparentArea ? 0.25 : 1}
              style={pointStyles}
              data-tooltip-html={handleTooltip(item, s, dataIndex)}
              data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
              tabIndex={-1}
            />
          )
        })
      })}
    </Group>
  )
}
export default ScatterPlot
