import React, { useState, useEffect, useRef } from 'react'

// Third Party
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import Pie from '@visx/shape/lib/shapes/Pie'

import { animated, useTransition, interpolate } from 'react-spring'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import chroma from 'chroma-js'

// Store
import useStore from '@cdc/core/store/store'

// Hooks
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'
import useIntersectionObserver from './useIntersectionObserver'

// Components - Core
import ErrorBoundary from '@cdc/core/components/hoc/ErrorBoundary'

// Visualization
const ChartPie = (
  {
    dimensions,
    seriesHighlight,
    colorScale,
    formatNumber,
    currentViewport,
    handleChartAriaLabels,
    cleanData
  }
) => {
  const { config } = useVisConfig()

  const [ filteredData, setFilteredData ] = useState(undefined)
  const [ animatedPie, setAnimatePie ] = useState(false)

  const triggerRef = useRef()
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false
  })

  useEffect(() => {
    // Make sure the chart is visible if in the editor
    if (useStore.getState().viewMode.isEditor) setAnimatePie(prevState => true)
  }, [ useStore.getState().viewMode ]) // eslint-disable-line

  useEffect(() => {
    if (dataRef?.isIntersecting && config.animate && !animatedPie) {
      var timeout = setTimeout(() => {
        setAnimatePie(true)
      }, 500)
    }
    return () => clearTimeout(timeout)
  }, [ dataRef?.isIntersecting, config.animate ])

  useEffect(() => {
    if (seriesHighlight.length > 0 && config.legend.behavior !== 'highlight') {
      let newFilteredData = []

      config.data.forEach(d => {
        if (seriesHighlight.indexOf(d[config.runtime.xAxis.dataKey]) !== -1) {
          newFilteredData.push(d)
        }
      })

      setFilteredData(newFilteredData)
    } else {
      setFilteredData(undefined)
    }
  }, [ seriesHighlight ])

  const cleanedData = cleanData(config.data, config.xAxis.dataKey)

  const enterUpdateTransition = ({ startAngle, endAngle }) => ({
    startAngle,
    endAngle
  })

  function AnimatedPie({ arcs, path, getKey }) {
    const transitions = useTransition(arcs, getKey, {
      from: enterUpdateTransition,
      enter: enterUpdateTransition,
      update: enterUpdateTransition,
      leave: enterUpdateTransition
    })

    return (
      <>
        {transitions.map(({ item: arc, props, key }) => {
          let yAxisTooltip = config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${formatNumber(arc.data[config.runtime.yAxis.dataKey])}` : formatNumber(arc.data[config.runtime.yAxis.dataKey])
          let xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${arc.data[config.runtime.xAxis.dataKey]}` : arc.data[config.runtime.xAxis.dataKey]

          const tooltip = `<div>
            ${yAxisTooltip}<br />
            ${xAxisTooltip}<br />
            Percent: ${Math.round((((arc.endAngle - arc.startAngle) * 180) / Math.PI / 360) * 100) + '%'}
            `
          return (
            <Group style={{ opacity: config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(arc.data[config.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 }} key={key}>
              <animated.path
                d={interpolate([ props.startAngle, props.endAngle ], (startAngle, endAngle) =>
                  path({
                    ...arc,
                    startAngle,
                    endAngle
                  })
                )}
                fill={colorScale(arc.data[config.runtime.xAxis.dataKey])}
                data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                data-tooltip-html={tooltip}
              />
            </Group>
          )
        })}

        {transitions.map(({ item: arc, key }) => {
          const [ centroidX, centroidY ] = path.centroid(arc)
          const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1

          let textColor = '#FFF'
          if (colorScale(arc.data[config.runtime.xAxis.dataKey]) && chroma.contrast(textColor, colorScale(arc.data[config.runtime.xAxis.dataKey])) < 3.5) {
            textColor = '000'
          }

          return (
            <animated.g key={key}>
              {hasSpaceForLabel && (
                <Text
                  style={{ fill: textColor }}
                  x={centroidX}
                  y={centroidY}
                  dy=".33em"
                  textAnchor="middle"
                  pointerEvents="none"
                >
                  {Math.round((((arc.endAngle - arc.startAngle) * 180) / Math.PI / 360) * 100) + '%'}
                </Text>
              )}
            </animated.g>
          )
        })}
      </>
    )
  }

  let [ width ] = dimensions

  if (config && config.legend && !config.legend.hide && currentViewport === 'lg') {
    width = width * 0.73
  }

  const height = config.heights.vertical

  const radius = Math.min(width, height) / 2
  const centerY = height / 2
  const centerX = width / 2
  const donutThickness = config.pieType === 'Donut' ? 75 : radius

  return (
    <ErrorBoundary component="PieChart">
      <svg
        className={`animated-pie group ${config.animate === false || animatedPie ? 'animated' : ''}`}
        width={width}
        height={height}
        role="img"
        aria-label={handleChartAriaLabels(config)}
      >
        <Group top={centerY} left={centerX}>
          <Pie
            data={filteredData || cleanedData}
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

      <div ref={triggerRef}/>

      <ReactTooltip id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`} variant="light" arrowColor="rgba(0,0,0,0)" className="tooltip"/>
    </ErrorBoundary>
  )
}

export default ChartPie
