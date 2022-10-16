import React, { useState, useEffect } from 'react'
import { animated, useTransition, interpolate } from 'react-spring'
import Pie from '@visx/shape/lib/shapes/Pie'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import ReactTooltip from 'react-tooltip'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

import { useConfigContext } from '@cdc/core/context/ConfigContext'
import { useGlobalContext } from '@cdc/core/context/GlobalContext'

const enterUpdateTransition = ({ startAngle, endAngle }) => ({ startAngle, endAngle })

const ChartPie = ({ dimensions, seriesHighlight, colorScale, formatNumber }) => {
  const { view } = useGlobalContext()
  const { config, data } = useConfigContext()

  const [ filteredData, setFilteredData ] = useState(undefined)

  useEffect(() => {
    if (seriesHighlight.length > 0 && config.legend.behavior !== 'highlight') {
      let newFilteredData = []

      data.forEach((d) => {
        if (seriesHighlight.indexOf(d[config.runtime.xAxis.dataKey]) !== -1) {
          newFilteredData.push(d)
        }
      })

      setFilteredData(newFilteredData)
    } else {
      setFilteredData(undefined)
    }
  }, [ seriesHighlight ])

  useEffect(() => {
    ReactTooltip.rebuild()
  })

  function AnimatedPie({ arcs, path, getKey }) {
    const transitions = useTransition(arcs, getKey,
      {
        from: enterUpdateTransition,
        enter: enterUpdateTransition,
        update: enterUpdateTransition,
        leave: enterUpdateTransition,
      },
    )
    return (
      <>
        {transitions.map(
          ({ item: arc, props, key }) => {
            let yAxisTooltip = config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${formatNumber(arc.data[config.runtime.yAxis.dataKey])}` : formatNumber(arc.data[config.runtime.yAxis.dataKey])
            let xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${arc.data[config.runtime.xAxis.dataKey]}` : arc.data[config.runtime.xAxis.dataKey]

            const tooltip = `<div>
            ${yAxisTooltip}<br />
            ${xAxisTooltip}<br />`

            return (
              <Group key={key}
                     style={{ opacity: (config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(arc.data[config.runtime.xAxis.dataKey]) === -1) ? 0.5 : 1 }}>
                <animated.path
                  // compute interpolated path d attribute from intermediate angle values
                  d={interpolate([ props.startAngle, props.endAngle ], (startAngle, endAngle) => path({
                    ...arc,
                    startAngle,
                    endAngle,
                  }))}
                  fill={colorScale(arc.data[config.runtime.xAxis.dataKey])}
                  data-tip={tooltip}
                  data-for={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                />
              </Group>
            )
          },
        )}
        {transitions.map(
          ({ item: arc, key }) => {
            const [ centroidX, centroidY ] = path.centroid(arc)
            const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1

            return (
              <animated.g key={key}>
                {hasSpaceForLabel && (
                  <Text
                    fill="white"
                    x={centroidX}
                    y={centroidY}
                    dy=".33em"
                    textAnchor="middle"
                    pointerEvents="none"
                  >
                    {Math.round((arc.endAngle - arc.startAngle) * 180 / Math.PI / 360 * 100) + '%'}
                  </Text>
                )}
              </animated.g>
            )
          },
        )}
      </>
    )
  }

  let { width } = dimensions

  if (config && config.legend && !config.legend.hide) {
    width = width * 0.73
  }

  const height = config.aspectRatio ? (width * config.aspectRatio) : config.height

  const radius = Math.min(width, height) / 2
  const centerY = height / 2
  const centerX = width / 2
  const donutThickness = (config.pieType === 'Donut') ? 75 : radius

  return (
    <ErrorBoundary component="PieChart">
      <svg className="cove-chart__visualization--chart-pie" width={width} height={height}>
        <Group top={centerY} left={centerX}>
          <Pie
            data={filteredData || data}
            pieValue={d => d[config.runtime.yAxis.dataKey]}
            pieSortValues={() => -1}
            innerRadius={radius - donutThickness}
            outerRadius={radius}
          >
            {pie => (
              <AnimatedPie {...pie} getKey={d => d.data[config.runtime.xAxis.dataKey]}/>
            )}
          </Pie>
        </Group>
      </svg>
      <ReactTooltip id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`} html={true} type="light"
                    arrowColor="rgba(0,0,0,0)" className="tooltip"/>
    </ErrorBoundary>
  )
}

export default ChartPie
