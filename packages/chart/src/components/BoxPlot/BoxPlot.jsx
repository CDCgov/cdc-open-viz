import React, { useContext, useEffect } from 'react'
import { BoxPlot } from '@visx/stats'
import { Group } from '@visx/group'
import ConfigContext from '../../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

const CoveBoxPlot = ({ xScale, yScale }) => {
  const { config, setConfig } = useContext(ConfigContext)
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

  //  accessors & constants
  const max = d => Number(d.columnMax)
  const min = d => Number(d.columnMin)
  const median = d => Number(d.columnMedian)
  const thirdQuartile = d => Number(d.columnThirdQuartile)
  const firstQuartile = d => Number(d.columnFirstQuartile)
  const fillOpacity = 0.5
  const boxWidth = xScale.bandwidth()
  const constrainedWidth = Math.min(40, boxWidth)
  const color_0 = colorPalettesChart[config?.palette][0] ? colorPalettesChart[config?.palette][0] : '#000'

  return (
    <ErrorBoundary component='BoxPlot'>
      <Group className='boxplot' key={`boxplot-group`}>
        {boxplot.plots.map((d, i) => {
          const offset = boxWidth - constrainedWidth
          const radius = 4
          return (
            <Group key={`boxplotplot-${i}`}>
              {boxplot.plotNonOutlierValues &&
                d.nonOutlierValues.map((value, index) => {
                  return <circle cx={xScale(d.columnCategory) + Number(config.yAxis.size) + boxWidth / 2} cy={yScale(value)} r={radius} fill={'#ccc'} style={{ opacity: 1, fillOpacity: 1, stroke: 'black' }} key={`boxplot-${i}--circle-${index}`} />
                })}
              <BoxPlot
                data-left={xScale(d.columnCategory) + config.yAxis.size + offset / 2 + 0.5}
                key={`box-plot-${i}`}
                min={min(d)}
                max={max(d)}
                left={Number(xScale(d.columnCategory)) + Number(config.yAxis.size) + offset / 2 + 0.5}
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
                  'data-tooltip-id': tooltip_id
                }}
              />
            </Group>
          )
        })}
      </Group>
    </ErrorBoundary>
  )
}

export default CoveBoxPlot
