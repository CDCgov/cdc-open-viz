import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import { animated, useTransition, interpolate } from 'react-spring'
import chroma from 'chroma-js'

// visx
import { Pie } from '@visx/shape'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { useTooltip, TooltipWithBounds } from '@visx/tooltip'
import { colorPalettesChart as colorPalettes } from '@cdc/core/data/colorPalettes'

// cove
import ConfigContext from '../../ConfigContext'
import { useTooltip as useCoveTooltip } from '../../hooks/useTooltip'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { handleChartAriaLabels } from '../../helpers/handleChartAriaLabels'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import LegendComponent from '../Legend/Legend.Component'
import { createFormatLabels } from '../Legend/helpers/createFormatLabels'
import { scaleOrdinal } from '@visx/scale'

const enterUpdateTransition = ({ startAngle, endAngle }) => ({
  startAngle,
  endAngle
})

type TooltipData = {
  data: {
    [key: string]: string | number
  }
  dataXPosition: number
  dataYPosition: number
}

const PieChart = props => {
  const { transformedData: data, config, colorScale, currentViewport, dimensions, highlight, highlightReset, seriesHighlight } = useContext(ConfigContext)
  const { tooltipData, showTooltip, hideTooltip, tooltipOpen, tooltipLeft, tooltipTop } = useTooltip<TooltipData>()
  const { handleTooltipMouseOver, handleTooltipMouseOff, TooltipListItem } = useCoveTooltip({
    xScale: false,
    yScale: false,
    showTooltip,
    hideTooltip
  })
  const [filteredData, setFilteredData] = useState(undefined)
  const [animatedPie, setAnimatePie] = useState(false)
  const pivotColumns = Object.values(config.columns).filter(column => column.showInViz)
  const dataNeedsPivot = pivotColumns.length > 0
  const pivotKey = dataNeedsPivot ? 'pivotColumn' : undefined
  const _data = useMemo(() => {
    if (dataNeedsPivot) {
      let newData = []
      const primaryColumn = config.yAxis.dataKey
      const additionalColumns = pivotColumns.map(column => column.name)
      const allColumns = [primaryColumn, ...additionalColumns]
      const columnToUpdate = config.xAxis.dataKey
      data.forEach(d => {
        allColumns.forEach(col => {
          const data = d[col]
          if (data) {
            newData.push({
              [pivotKey]: data,
              [columnToUpdate]: `${d[columnToUpdate]} - ${col}`
            })
          }
        })
      })
      return newData
    }
    return data
  }, [data, dataNeedsPivot])

  const _colorScale = useMemo(() => {
    if (dataNeedsPivot) {
      const keys = {}
      _data.forEach(d => {
        if (!keys[d[config.xAxis.dataKey]]) keys[d[config.xAxis.dataKey]] = true
      })
      const numberOfKeys = Object.entries(keys).length
      let palette = config.customColors || colorPalettes[config.palette]
      palette = palette.slice(0, numberOfKeys)

      return scaleOrdinal({
        domain: Object.keys(keys),
        range: palette,
        unknown: null
      })
    }
    return colorScale
  }, [colorScale, dataNeedsPivot])

  const triggerRef = useRef()
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false
  })

  // Make sure the chart is visible if in the editor
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

  const AnimatedPie = ({ arcs, path, getKey }) => {
    const transitions = useTransition(arcs, getKey, {
      from: enterUpdateTransition,
      enter: enterUpdateTransition,
      update: enterUpdateTransition,
      leave: enterUpdateTransition
    })

    // DEV-5053
    // onMouseLeave function doesn't work on animated.path for some reason.
    // As a workaround, we continue to fire the tooltipData while hovered,
    // and use this useEffect to hide the tooltip so it doesn't persist when users scroll.
    useEffect(() => {
      const timeout = setTimeout(() => {
        hideTooltip()
      }, 500)
      return () => {
        clearTimeout(timeout)
      }
    }, [tooltipData])

    return (
      <>
        {transitions.map(({ item: arc, props, key }, animatedPieIndex) => {
          return (
            <Group className={arc.data[config.xAxis.dataKey]} key={`${key}-${animatedPieIndex}`} style={{ opacity: config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(arc.data[config.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 }}>
              <animated.path
                d={interpolate([props.startAngle, props.endAngle], (startAngle, endAngle) =>
                  path({
                    ...arc,
                    startAngle,
                    endAngle
                  })
                )}
                fill={_colorScale(arc.data[config.runtime.xAxis.dataKey])}
                onMouseEnter={e => handleTooltipMouseOver(e, { data: arc.data[config.runtime.xAxis.dataKey], arc })}
                onMouseLeave={e => handleTooltipMouseOff()}
              />
            </Group>
          )
        })}
        {transitions.map(({ item: arc, key }, i) => {
          const [centroidX, centroidY] = path.centroid(arc)
          const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1

          let textColor = '#FFF'
          if (_colorScale(arc.data[config.runtime.xAxis.dataKey]) && chroma.contrast(textColor, _colorScale(arc.data[config.runtime.xAxis.dataKey])) < 3.5) {
            textColor = '000'
          }

          return (
            <animated.g key={`${key}${i}`}>
              {hasSpaceForLabel && (
                <Text style={{ fill: textColor }} x={centroidX} y={centroidY} dy='.33em' textAnchor='middle' pointerEvents='none'>
                  {Math.round((((arc.endAngle - arc.startAngle) * 180) / Math.PI / 360) * 100) + '%'}
                </Text>
              )}
            </animated.g>
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

      _data.forEach(d => {
        if (seriesHighlight.indexOf(d[config.runtime.xAxis.dataKey]) !== -1) {
          newFilteredData.push(d)
        }
      })

      setFilteredData(newFilteredData)
    } else {
      setFilteredData(undefined)
    }
  }, [seriesHighlight]) // eslint-disable-line

  const createLegendLabels = createFormatLabels(config, [], _data, _colorScale)

  return (
    <>
      <ErrorBoundary component='PieChart'>
        <svg width={width} height={height} className={`animated-pie group ${config.animate === false || animatedPie ? 'animated' : ''}`} role='img' aria-label={handleChartAriaLabels(config)}>
          <Group top={centerY} left={centerX}>
            {/* prettier-ignore */}
            <Pie
            data={filteredData || _data}
            pieValue={d => d[pivotKey || config.runtime.yAxis.dataKey]}
            pieSortValues={() => -1}
            innerRadius={radius - donutThickness}
            outerRadius={radius}
          >
            {pie => <AnimatedPie {...pie} getKey={d => d.data[config.runtime.xAxis.dataKey]}/>}
          </Pie>
          </Group>
        </svg>
        <div ref={triggerRef} />
        {tooltipData && Object.entries(tooltipData.data).length > 0 && tooltipOpen && showTooltip && tooltipData.dataYPosition && tooltipData.dataXPosition && (
          <>
            <style>{`.tooltip {background-color: rgba(255,255,255, ${config.tooltips.opacity / 100}) !important`}</style>
            <TooltipWithBounds key={Math.random()} className={'tooltip cdc-open-viz-module'} left={tooltipLeft} top={tooltipTop}>
              <ul>{typeof tooltipData === 'object' && Object.entries(tooltipData.data).map((item, index) => <TooltipListItem item={item} key={index} />)}</ul>
            </TooltipWithBounds>
          </>
        )}
        {/* <ReactTooltip id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`} variant='light' arrowColor='rgba(0,0,0,0)' className='tooltip' /> */}
      </ErrorBoundary>
      <LegendComponent config={config} colorScale={_colorScale} seriesHighlight={seriesHighlight} highlight={highlight} highlightReset={highlightReset} currentViewport={currentViewport} formatLabels={createLegendLabels} />
    </>
  )
}

export default PieChart
