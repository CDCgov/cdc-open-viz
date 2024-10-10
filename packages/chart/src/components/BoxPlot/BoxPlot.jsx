import React, { useContext, useEffect } from 'react'
import { BoxPlot } from '@visx/stats'
import { Group } from '@visx/group'
import ConfigContext from '../../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'
import { scaleBand, scaleLinear } from '@visx/scale'

const CoveBoxPlot = ({ xScale, yScale, yMax, xMax, seriesScale }) => {
  const { config, setConfig, transformedData: data } = useContext(ConfigContext)
  const { boxplot } = config
  useEffect(() => {
    if (config.legend.hide === false) {
      setConfig({
        ...config,
        legend: {
          ...config.legend,
          hide: true
        }
      })
    }
  }, []) // eslint-disable-line

  // tooltips
  const tooltip_id = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`
  const handleTooltip = d => {
    return `
      <strong>${d.columnCategory}</strong></br>
      ${boxplot.labels.q1}: ${d.columnFirstQuartile}<br/>
      ${boxplot.labels.q3}: ${d.columnThirdQuartile}<br/>
      ${boxplot.labels.iqr}: ${d.columnIqr}<br/>
      ${boxplot.labels.median}: ${d.columnMedian}
    `
  }
  const groupScale = scaleBand({
    range: [0, xMax],
    domain: ['Group A']
  })

  //  accessors & constants
  const max = d => Number(d.columnMax)
  const min = d => Number(d.columnMin)
  const median = d => Number(d.columnMedian)
  const thirdQuartile = d => Number(d.columnThirdQuartile)
  const firstQuartile = d => Number(d.columnFirstQuartile)
  const fillOpacity = 0.5
  const boxWidth = groupScale.bandwidth()
  const constrainedWidth = Math.min(40, boxWidth)
  const color_0 = colorPalettesChart[config?.palette][0] ? colorPalettesChart[config?.palette][0] : '#000'
  // const seriesScale = scaleBand({
  //   domain: ['value', 'value2'],
  //   range: [0, yMax]
  // })
  console.log(data.map(d => d['category one']))

  const xScaleX = scaleBand({
    rangeRound: [0, groupScale.bandwidth()],
    domain: ['value', 'value2']
  })

  const offset = boxWidth - constrainedWidth

  return (
    <ErrorBoundary component='BoxPlot'>
      <Group left={Number(config.yAxis.size)} className='boxplot' key={`boxplot-group`}>
        {boxplot.plots.map((d, i) => {
          return (
            <Group left={groupScale(d.columnCategory)}>
              {config.series.map(item => {
                return (
                  <Group key={`boxplotplot-${i}`}>
                    <BoxPlot
                      data-left={xScale(item.dataKey)}
                      key={`box-plot-${i}`}
                      min={min(d)}
                      max={max(d)}
                      left={xScaleX(item.dataKey)}
                      firstQuartile={firstQuartile(d)}
                      thirdQuartile={thirdQuartile(d)}
                      median={median(d)}
                      boxWidth={constrainedWidth}
                      fill={color_0}
                      fillOpacity={fillOpacity}
                      stroke='black'
                      valueScale={yScale}
                      outliers={boxplot.plotOutlierValues ? d.columnOutliers : []}
                      outlierProps={{
                        style: {
                          fill: `${color_0}`,
                          opacity: 1
                        }
                      }}
                      medianProps={{
                        style: {
                          stroke: 'black'
                        }
                      }}
                      boxProps={{
                        style: {
                          stroke: 'black',
                          strokeWidth: boxplot.borders === 'true' ? 1 : 0
                        }
                      }}
                      maxProps={{
                        style: {
                          stroke: 'black'
                        }
                      }}
                      container
                      containerProps={{
                        'data-tooltip-html': handleTooltip(d),
                        'data-tooltip-id': tooltip_id,
                        tabIndex: -1
                      }}
                    />
                  </Group>
                )
              })}
            </Group>
          )
        })}
      </Group>
    </ErrorBoundary>
  )
}

export default CoveBoxPlot
