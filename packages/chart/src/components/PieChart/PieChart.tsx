import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import { animated, useTransition, to } from '@react-spring/web'

// visx
import { Pie } from '@visx/shape'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { useTooltip, TooltipWithBounds } from '@visx/tooltip'
import { colorPalettesChart as colorPalettes } from '@cdc/core/data/colorPalettes'
import { getPaletteColors } from '@cdc/core/helpers/palettes/utils'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
import { v2ColorDistribution, divergentColorDistribution, colorblindColorDistribution } from '../../helpers/chartColorDistributions'

// cove
import ConfigContext, { ChartDispatchContext } from '../../ConfigContext'
import { useTooltip as useCoveTooltip } from '../../hooks/useTooltip'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { handleChartAriaLabels } from '../../helpers/handleChartAriaLabels'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { scaleOrdinal } from '@visx/scale'
import { getContrastColor } from '@cdc/core/helpers/cove/accessibility'

type TooltipData = {
  data: {
    [key: string]: string | number
  }
  dataXPosition: number
  dataYPosition: number
}

type PieChartProps = {
  parentWidth?: number
  parentHeight?: number
  interactionLabel?: string
}

const PieChart = React.forwardRef<SVGSVGElement, PieChartProps>((props, ref) => {
  const { interactionLabel = '' } = props
  const {
    transformedData: data,
    config,
    colorScale,
    currentViewport,
    seriesHighlight,
    isDraggingAnnotation
  } = useContext(ConfigContext)
  const dispatch = useContext(ChartDispatchContext)
  const { tooltipData, showTooltip, hideTooltip, tooltipOpen, tooltipLeft, tooltipTop } = useTooltip<TooltipData>()
  const { handleTooltipMouseOver, handleTooltipMouseOff, TooltipListItem } = useCoveTooltip({
    xScale: false,
    yScale: false,
    showTooltip,
    hideTooltip,
    interactionLabel
  })
  const [filteredData, setFilteredData] = useState(undefined)
  const [animatedPie, setAnimatePie] = useState(false)
  const pivotColumns = Object.values(config.columns).filter(column => column.showInViz)
  const dataNeedsPivot = pivotColumns.length > 0
  const pivotKey = dataNeedsPivot ? 'pivotColumn' : undefined
  const showPercentage = config.dataFormat.showPiePercent
  const labelForCalcArea = 'Calculated Area'

  const _data = useMemo(() => {
    let baseData = []

    if (dataNeedsPivot) {
      const primaryColumn = config.yAxis.dataKey
      const additionalColumns = pivotColumns.map(column => column.name)
      const allColumns = [primaryColumn, ...additionalColumns]
      const columnToUpdate = config.xAxis.dataKey

      data.forEach(d => {
        allColumns.forEach(col => {
          const val = d[col]
          if (val) {
            baseData.push({
              [pivotKey]: val,
              [columnToUpdate]: `${d[columnToUpdate]} - ${col}`
            })
          }
        })
      })
    } else {
      baseData = [...data]
    }

    // === ADD "OTHER" IF PERCENT MODE IS ENABLED ===
    if (showPercentage) {
      const total = baseData.reduce((sum, d) => {
        const val = parseFloat(d[config.runtime.yAxis.dataKey])
        return sum + (isNaN(val) ? 0 : val)
      }, 0)

      if (total < 100) {
        const remaining = 100 - total
        baseData.push({
          [config.runtime.xAxis.dataKey]: labelForCalcArea,
          [config.runtime.yAxis.dataKey]: remaining
        })
      }
    }

    return baseData
  }, [data, dataNeedsPivot, showPercentage, config.yAxis.dataKey, config.xAxis.dataKey, config.runtime.yAxis.dataKey, config.runtime.xAxis.dataKey])

  // Helper function to determine enhanced distribution type and apply it
  const applyEnhancedColorDistribution = (config, palette, numberOfKeys) => {
    const version = getColorPaletteVersion(config)
    const configPalette = config.general?.palette?.name || config.palette

    // Skip enhanced distribution if not v2, too many keys, or wrong palette length
    if (version !== 2 || numberOfKeys > 9 || palette.length !== 9) {
      return palette.slice(0, numberOfKeys)
    }

    const isSequential = configPalette && configPalette.includes('sequential')
    const isDivergent = configPalette && configPalette.includes('divergent')
    const isColorblindSafe = configPalette && (configPalette.includes('colorblindsafe') || configPalette.includes('qualitative_standard'))

    // Determine which distribution to use based on palette type
    let distributionMap = null
    if (isDivergent) {
      distributionMap = divergentColorDistribution
    } else if (isColorblindSafe) {
      distributionMap = colorblindColorDistribution
    } else if (isSequential) {
      distributionMap = v2ColorDistribution
    }

    if (distributionMap && distributionMap[numberOfKeys]) {
      const distributionIndices = distributionMap[numberOfKeys]
      return distributionIndices.map((index: number) => palette[index])
    }

    return palette.slice(0, numberOfKeys)
  }

  // Helper function to extract keys from data
  const extractDataKeys = (data, dataKey) => {
    const keys = {}
    data.forEach(d => {
      if (!keys[d[dataKey]]) keys[d[dataKey]] = true
    })
    return Object.keys(keys)
  }

  // Helper function to create color scale for pie charts
  const createPieColorScale = (data, config, isPercentageMode = false, labelForCalcArea = null) => {
    const dataKeys = extractDataKeys(data, config.xAxis.dataKey)
    const domainKeys = isPercentageMode ? dataKeys.filter(k => k !== labelForCalcArea) : dataKeys
    const numberOfKeys = domainKeys.length

    let palette = getPaletteColors(config, colorPalettes)
    palette = applyEnhancedColorDistribution(config, palette, numberOfKeys)

    const unknownColor = isPercentageMode
      ? getComputedStyle(document.documentElement).getPropertyValue('--cool-gray-10').trim()
      : null

    return scaleOrdinal({
      domain: domainKeys,
      range: palette,
      unknown: unknownColor
    })
  }

  const _colorScale = useMemo(() => {
    // Always use the full _data for color scale to ensure legend shows all items
    if (dataNeedsPivot) {
      return createPieColorScale(_data, config)
    }

    if (showPercentage) {
      return createPieColorScale(_data, config, true, labelForCalcArea)
    }

    // Handle normal pie chart case
    return createPieColorScale(_data, config)
  }, [_data, dataNeedsPivot, colorScale, showPercentage, config.xAxis.dataKey, config.general?.palette, config.palette])

  const triggerRef = useRef()
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false
  })

  // Make sure the chart is visible if in the editor
  useEffect(() => {
    const element = document.querySelector('.isEditor')
    if (element) {
      // parent element is visible
      setAnimatePie(true)
    }
  }, [])

  useEffect(() => {
    if (dataRef?.isIntersecting && config.animate && !animatedPie) {
      setTimeout(() => {
        setAnimatePie(true)
      }, 500)
    }
  }, [dataRef?.isIntersecting, config.animate]) // eslint-disable-line

  function AnimatedPie({ arcs, path, getKey, colorScale, onHover, onLeave }) {
    const enterExit = ({ startAngle, endAngle }) => ({ startAngle, endAngle })
    const transitions = useTransition(arcs, {
      keys: getKey,
      from: enterExit,
      enter: enterExit,
      update: enterExit,
      leave: enterExit
    })

    return transitions((styles, arc) => {
      const key = getKey(arc)
      let textColor = '#FFF'

      if (key && _colorScale(key)) {
        textColor = getContrastColor(textColor, _colorScale(arc.data[config.runtime.xAxis.dataKey]))
      }
      const roundTo = Number(config.dataFormat.roundTo) || 0
      // Calculate the percentage of the full circle (360 degrees)
      const degrees = ((arc.endAngle - arc.startAngle) * 180) / Math.PI
      const valueFromData = parseFloat(arc.data[config.runtime.yAxis.dataKey])
      const percentageToDisplay = showPercentage ? valueFromData : (degrees / 360) * 100

      let roundedPercentage = percentageToDisplay.toFixed(roundTo) + '%'
      // add missing pie part
      if (arc.data[config.xAxis.dataKey] === labelForCalcArea && config.dataFormat.showPiePercent) {
        roundedPercentage = '**'
      }

      // Determine if this slice should be muted based on legend behavior
      const isHighlighted = seriesHighlight.length === 0 || seriesHighlight.indexOf(arc.data[config.runtime.xAxis.dataKey]) !== -1
      const shouldMute = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && !isHighlighted
      const sliceOpacity = shouldMute ? 0.3 : 1
      const textOpacity = shouldMute ? 0.3 : 1

      return (
        <Group key={key} className={`slice-${key}`}>
          {/* ── the slice */}
          <animated.path
            d={to([styles.startAngle, styles.endAngle], (start: number, end: number) =>
              path({ ...arc, startAngle: start, endAngle: end })
            )}
            fill={colorScale(key)}
            opacity={sliceOpacity}
            onMouseEnter={e =>
              onHover(e, {
                data: arc.data,
                dataXPosition: e.clientX,
                dataYPosition: e.clientY,
                startAngle: arc.startAngle,
                endAngle: arc.endAngle
              })
            }
            onMouseLeave={onLeave}
          />

          {/* ── the percentage label */}
          {arc.endAngle - arc.startAngle > 0.1 && (
            <animated.text
              transform={to([styles.startAngle, styles.endAngle], (start: number, end: number) => {
                const [x, y] = path.centroid({
                  ...arc,
                  startAngle: start,
                  endAngle: end
                })
                return `translate(${x},${y})`
              })}
              textAnchor='middle'
              pointerEvents='none'
              fill={textColor}
              opacity={textOpacity}
            >
              {/** compute text inside the spring callback */}
              {roundedPercentage}
            </animated.text>
          )}
        </Group>
      )
    })
  }

  let chartWidth = props.parentWidth
  let width = props.parentWidth

  if (config && config.legend && !config.legend.hide && currentViewport === 'lg') {
    width = Number(chartWidth) * 0.73
  }

  const height = config.heights.vertical

  const radius = Math.min(width, height) / 2
  const centerY = height / 2
  const centerX = props.parentWidth / 2
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

  // Update the context colorScale when the pie chart's colorScale changes
  // This ensures the Legend component uses the same colors as the pie chart
  // Only update when specific color-related properties change, not the entire colorScale
  useEffect(() => {
    if (_colorScale && config.visualizationType === 'Pie') {
      dispatch({ type: 'SET_COLOR_SCALE', payload: _colorScale })
    }
  }, [config.visualizationType, config.xAxis.dataKey, config.general?.palette?.name, config.palette, dispatch])

  const getSvgClasses = () => {
    let classes = ['animated-pie', 'group']
    if (config.animate === false || animatedPie) {
      classes.push('animated')
    }
    return classes.join(' ')
  }

  return (
    <>
      <ErrorBoundary component='PieChart'>
        <svg
          width={radius * 2}
          height={height}
          className={getSvgClasses()}
          role='img'
          aria-label={handleChartAriaLabels(config)}
        >
          <Group top={centerY} left={radius}>
            {/* prettier-ignore */}
            <Pie
              data={filteredData || _data}
              pieValue={d => parseFloat(d[pivotKey || config.runtime.yAxis.dataKey])}
              pieSortValues={() => -1}
              innerRadius={radius - donutThickness}
              outerRadius={radius}
            >
              {pie => (
                <AnimatedPie
                  {...pie}
                  getKey={d => d.data[config.runtime.xAxis.dataKey]}
                  colorScale={_colorScale}
                  onHover={handleTooltipMouseOver}
                  onLeave={handleTooltipMouseOff}
                />
              )}
            </Pie>
          </Group>
        </svg>
        <div ref={triggerRef} />
        {!isDraggingAnnotation &&
          tooltipData &&
          Object.entries(tooltipData.data).length > 0 &&
          tooltipOpen &&
          showTooltip &&
          tooltipData.dataYPosition &&
          tooltipData.dataXPosition && (
            <>
              <style>{`.tooltip {background-color: rgba(255,255,255, ${config.tooltips.opacity / 100
                }) !important`}</style>
              <TooltipWithBounds
                className={'tooltip cdc-open-viz-module'}
                left={tooltipLeft + centerX - radius}
                top={tooltipTop}
              >
                <ul>
                  {typeof tooltipData === 'object' &&
                    Object.entries(tooltipData.data).map((item, index) => <TooltipListItem item={item} key={index} />)}
                </ul>
              </TooltipWithBounds>
            </>
          )}
      </ErrorBoundary>
    </>
  )
})

export default PieChart
