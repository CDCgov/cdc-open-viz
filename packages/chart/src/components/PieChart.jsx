import React, { useContext, useState, useEffect, useRef } from 'react'
import { animated, useTransition, interpolate } from 'react-spring'
import { useTooltip as useCoveTooltip } from '../hooks/useTooltip'
import { useTooltip, TooltipWithBounds } from '@visx/tooltip'

import Pie from '@visx/shape/lib/shapes/Pie'
import chroma from 'chroma-js'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import useIntersectionObserver from './useIntersectionObserver'

import ConfigContext from '../ConfigContext'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

const enterUpdateTransition = ({ startAngle, endAngle }) => ({
  startAngle,
  endAngle
})

const PieChart = props => {
  const { transformedData: data, config, dimensions, seriesHighlight, colorScale, formatNumber, currentViewport, handleChartAriaLabels } = useContext(ConfigContext)
  const [filteredData, setFilteredData] = useState(undefined)
  const [animatedPie, setAnimatePie] = useState(false)
  const triggerRef = useRef()
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false
  })

  // Tooltip Helpers
  const { tooltipData, showTooltip, hideTooltip, tooltipOpen } = useTooltip()
  const { handleTooltipMouseOver, tooltipStyles, TooltipListItem } = useCoveTooltip({ xScale: '', yScale: '', showTooltip, hideTooltip })

  // Make sure the chart is visible if in the editor
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const element = document.querySelector('.isEditor')
    if (element) {
      // parent element is visible
      setAnimatePie(prevState => true)
    }
  })

  useEffect(() => {
    if (dataRef?.isIntersecting && config.animate && !animatedPie) {
      setTimeout(() => {
        setAnimatePie(true)
      }, 500)
    }
  }, [dataRef?.isIntersecting, config.animate]) // eslint-disable-line

  const PieSlice = props => {
    const { arcs, path, getKey } = props
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

          // Pie Text Settings
          const [centroidX, centroidY] = path.centroid(arc)
          const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1
          let textColor = '#FFF'
          if (colorScale(arc.data[config.runtime.xAxis.dataKey]) && chroma.contrast(textColor, colorScale(arc.data[config.runtime.xAxis.dataKey])) < 3.5) {
            textColor = '000'
          }

          const { startAngle, endAngle } = props

          const pieSlicePath = interpolate([startAngle, endAngle], (startAngle, endAngle) =>
            path({
              ...arc,
              startAngle,
              endAngle
            })
          )

          return (
            <Group key={key} style={{ opacity: config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(arc.data[config.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 }}>
              {/* PIE SLICE */}
              <animated.path d={pieSlicePath} fill={colorScale(arc.data[config.runtime.xAxis.dataKey])} onMouseEnter={e => handleTooltipMouseOver(e, { data: arc.data[config.runtime.xAxis.dataKey], arc: arc })} />

              {/* PIE TEXT */}
              {hasSpaceForLabel && (
                <animated.g key={key}>
                  <Text style={{ fill: textColor }} x={centroidX} y={centroidY} dy='.33em' textAnchor='middle' pointerEvents='none'>
                    {Math.round((((arc.endAngle - arc.startAngle) * 180) / Math.PI / 360) * 100) + '%'}
                  </Text>
                </animated.g>
              )}
            </Group>
          )
        })}
      </>
    )
  }

  let [width] = dimensions

  if (config && config.legend && !config.legend.hide && currentViewport === 'lg') {
    width = width * 0.73
  }

  const height = config.heights.vertical
  const radius = Math.min(width, height) / 2
  const centerY = height / 2
  const centerX = width / 2
  const donutThickness = config.pieType === 'Donut' ? 75 : radius

  useEffect(() => {
    if (seriesHighlight.length > 0 && config.legend.behavior !== 'highlight') {
      let newFilteredData = []

      data.forEach(d => {
        if (seriesHighlight.indexOf(d[config.runtime.xAxis.dataKey]) !== -1) {
          newFilteredData.push(d)
        }
      })

      setFilteredData(newFilteredData)
    } else {
      setFilteredData(undefined)
    }
  }, [seriesHighlight]) // eslint-disable-line

  return (
    <ErrorBoundary component='PieChart'>
      <svg width={width} height={height} className={`animated-pie group ${config.animate === false || animatedPie ? 'animated' : ''}`} role='img' aria-label={handleChartAriaLabels(config)}>
        <Group top={centerY} left={centerX}>
          <Pie data={filteredData || data} pieValue={d => d[config.runtime.yAxis.dataKey]} pieSortValues={() => -1} innerRadius={radius - donutThickness} outerRadius={radius}>
            {pie => {
              return <PieSlice {...pie} getKey={d => d.data[config.runtime.xAxis.dataKey]} />
            }}
          </Pie>
        </Group>
      </svg>
      <div ref={triggerRef} />
      {tooltipData && Object.entries(tooltipData.data).length > 0 && tooltipOpen && showTooltip && tooltipData.dataYPosition && tooltipData.dataXPosition && (
        <TooltipWithBounds key={Math.random()} className={'tooltip cdc-open-viz-module'} style={tooltipStyles(tooltipData)} width={width}>
          <ul>{typeof tooltipData === 'object' && Object.entries(tooltipData.data).map((item, index) => <TooltipListItem item={item} key={index} />)}</ul>
        </TooltipWithBounds>
      )}
    </ErrorBoundary>
  )
}

export default PieChart
