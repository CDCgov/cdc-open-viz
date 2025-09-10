import React, { useContext, useState } from 'react'
import ConfigContext from '../../ConfigContext'
import { Group } from '@visx/group'
import { formatNumber as formatColNumber } from '@cdc/core/helpers/cove/number'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'

const ScatterPlot = ({ xScale, yScale }) => {
  const {
    transformedData: data,
    config,
    tableData,
    formatNumber,
    seriesHighlight,
    colorPalettes,
    interactionLabel
  } = useContext(ConfigContext)

  // TODO: copied from line chart should probably be a constant somewhere.
  const circleRadii = 4.5
  const hasMultipleSeries = Object.keys(config.runtime.seriesLabels).length > 1
  
  // Track current hover for analytics
  const [currentHover, setCurrentHover] = useState({ dataIndex: null, seriesKey: null })
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
          const seriesColor = config.general?.palette?.customColors ? config.general.palette.customColors[index] : config.general?.palette?.name ? colorPalettes[config.general.palette.name][index] : '#000'

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
              onMouseEnter={() => {
                // Track hover analytics event if this is a new hover
                if (interactionLabel && (currentHover.dataIndex !== dataIndex || currentHover.seriesKey !== s)) {
                  const seriesName = config.runtime.seriesLabels?.[s] || s
                  const safeSeriesName = String(seriesName).replace(/[^a-zA-Z0-9]/g, '_')
                  publishAnalyticsEvent(`chart_hover_${safeSeriesName.toLowerCase()}`, 'hover', interactionLabel, 'chart', { 
                    title: config?.title,
                    series: seriesName
                  })
                  setCurrentHover({ dataIndex, seriesKey: s })
                }
              }}
            />
          )
        })
      })}
    </Group>
  )
}
export default ScatterPlot
