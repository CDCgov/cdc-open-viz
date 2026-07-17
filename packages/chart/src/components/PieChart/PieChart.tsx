import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import { animated, useTransition, to } from '@react-spring/web'

// visx
import { Pie } from '@visx/shape'
import { Group } from '@visx/group'
import { useTooltip, TooltipWithBounds } from '@visx/tooltip'
import { colorPalettesChart as colorPalettes } from '@cdc/core/data/colorPalettes'
import { getPaletteColors } from '@cdc/core/helpers/palettes/utils'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
import {
  v2ColorDistribution,
  divergentColorDistribution,
  colorblindColorDistribution
} from '@cdc/core/helpers/palettes/colorDistributions'

// cove
import ConfigContext, { ChartDispatchContext } from '../../ConfigContext'
import { useTooltip as useCoveTooltip } from '../../hooks/useTooltip'
import { useChartHoverAnalytics } from '../../hooks/useChartHoverAnalytics'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { handleChartAriaLabels } from '../../helpers/handleChartAriaLabels'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { scaleOrdinal } from '@visx/scale'
import { getContrastColor } from '@cdc/core/helpers/cove/accessibility'
import { type TooltipDisplayData } from '../../helpers/tooltipHelpers'
import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import { getPieLabelPosition } from './helpers/labelPlacement'

type TooltipData = TooltipDisplayData

type PieChartProps = {
  parentWidth?: number
  parentHeight?: number
  interactionLabel?: string
}

const ENHANCED_PIE_LABEL_FONT_SIZE = 13
const ENHANCED_PIE_LABEL_LINE_HEIGHT = 15
const ENHANCED_PIE_LABEL_HEIGHT = ENHANCED_PIE_LABEL_LINE_HEIGHT * 2
const ENHANCED_PIE_LABEL_FONT = `${ENHANCED_PIE_LABEL_FONT_SIZE}px sans-serif`
const ENHANCED_PIE_LABEL_MIN_ANGLE = 0.01
const LEGACY_PERCENT_LABEL_MIN_ANGLE = 0.1
const MIN_RADIUS_WITH_LABELS = 55
const MIN_LABEL_GUTTER = 96
const OUTSIDE_LABEL_OFFSET = 22
const LABEL_GUTTER_PADDING = OUTSIDE_LABEL_OFFSET + 16
const VERTICAL_LABEL_GUTTER = 44

const pieLabelTextWidthCache = new Map<string, number>()
const MAX_PIE_LABEL_TEXT_CACHE = 2000

const measurePieLabelText = (text: string) => {
  const cached = pieLabelTextWidthCache.get(text)
  if (cached !== undefined) return cached

  const measured =
    typeof document === 'undefined'
      ? Math.ceil(text.length * ENHANCED_PIE_LABEL_FONT_SIZE * 0.6)
      : (getTextWidth(text, ENHANCED_PIE_LABEL_FONT) ??
        Math.ceil(text.length * ENHANCED_PIE_LABEL_FONT_SIZE * 0.6))

  // Avoid unbounded growth in long-lived sessions with many unique labels.
  if (pieLabelTextWidthCache.size >= MAX_PIE_LABEL_TEXT_CACHE) pieLabelTextWidthCache.clear()

  pieLabelTextWidthCache.set(text, measured)
  return measured
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

  const a11y = handleChartAriaLabels(config)

  const dispatch = useContext(ChartDispatchContext)
  const { tooltipData, showTooltip, hideTooltip, tooltipOpen, tooltipLeft, tooltipTop } = useTooltip<TooltipData>()
  const { handleTooltipMouseOver, handleTooltipMouseOff, TooltipListItem } = useCoveTooltip({
    xScale: false,
    yScale: false,
    showTooltip,
    hideTooltip,
    interactionLabel
  })

  // Analytics tracking for chart hover
  const { handleChartMouseEnter, handleChartMouseLeave } = useChartHoverAnalytics({
    config,
    interactionLabel
  })

  const [filteredData, setFilteredData] = useState(undefined)
  const [animatedPie, setAnimatePie] = useState(false)
  const pivotColumns = Object.values(config.columns).filter(column => column.showInViz)
  const dataNeedsPivot = pivotColumns.length > 0
  const pivotKey = dataNeedsPivot ? 'pivotColumn' : undefined
  const showPercentage = config.dataFormat.showPiePercent
  const labelForCalcArea = 'Calculated Area'
  const showCategoryPercentageLabels = Boolean(config.labels)

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
  }, [
    data,
    dataNeedsPivot,
    showPercentage,
    config.yAxis.dataKey,
    config.xAxis.dataKey,
    config.runtime.yAxis.dataKey,
    config.runtime.xAxis.dataKey
  ])

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
    const isColorblindSafe =
      configPalette && (configPalette.includes('colorblindsafe') || configPalette.includes('qualitative_standard'))

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

    const orderedCustomColors = config.general?.palette?.customColorsOrdered
    const customColors = config.general?.palette?.customColors
    const shouldUseOrderedCustomColors = Array.isArray(orderedCustomColors) && orderedCustomColors.length > 0

    let palette = shouldUseOrderedCustomColors ? orderedCustomColors : getPaletteColors(config, colorPalettes)
    if (!shouldUseOrderedCustomColors && customColors?.length) {
      palette = customColors
    }

    while (palette.length > 0 && palette.length < numberOfKeys) {
      palette = palette.concat(palette)
    }

    palette = shouldUseOrderedCustomColors
      ? palette.slice(0, numberOfKeys)
      : applyEnhancedColorDistribution(config, palette, numberOfKeys)

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
  }, [
    _data,
    dataNeedsPivot,
    showPercentage,
    config.xAxis.dataKey,
    config.general?.palette?.name,
    config.general?.palette?.isReversed,
    config.general?.palette?.customColors,
    config.general?.palette?.customColorsOrdered,
    config.palette
  ])

  const triggerRef = useRef()
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false
  })

  // Make sure the chart is visible if in the editor
  useEffect(() => {
    const element = document.querySelector('.is-editor')
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
      let categoryLabel = ''
      let labelPosition = { placement: 'inside' as const, x: 0, y: 0, textAnchor: 'middle' as const }

      if (showCategoryPercentageLabels) {
        categoryLabel = String(arc.data[config.runtime.xAxis.dataKey] ?? '')
        const labelWidth = Math.max(measurePieLabelText(categoryLabel), measurePieLabelText(roundedPercentage))
        labelPosition = getPieLabelPosition({
          startAngle: arc.startAngle,
          endAngle: arc.endAngle,
          innerRadius: radius - donutThickness,
          outerRadius: radius,
          labelWidth,
          labelHeight: ENHANCED_PIE_LABEL_HEIGHT,
          isDonut: config.pieType === 'Donut'
        })
      }

      // Determine if this slice should be muted based on legend behavior
      const isHighlighted =
        seriesHighlight.length === 0 || seriesHighlight.indexOf(arc.data[config.runtime.xAxis.dataKey]) !== -1
      const shouldMute = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && !isHighlighted
      const sliceOpacity = shouldMute ? 0.3 : 1
      const textOpacity = shouldMute ? 0.3 : 1
      const labelFill = labelPosition.placement === 'inside' ? textColor : '#000000'
      const labelMinAngle = showCategoryPercentageLabels ? ENHANCED_PIE_LABEL_MIN_ANGLE : LEGACY_PERCENT_LABEL_MIN_ANGLE

      return (
        <Group key={key} className={`slice-${CSS.escape(String(key))}`}>
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
          {arc.endAngle - arc.startAngle > labelMinAngle && !showCategoryPercentageLabels && (
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

          {arc.endAngle - arc.startAngle > labelMinAngle && showCategoryPercentageLabels && (
            <animated.text
              className={`pie-label pie-label--${labelPosition.placement}`}
              transform={to([styles.startAngle, styles.endAngle], (start: number, end: number) => {
                const midAngle = start + (end - start) / 2
                const innerRadius = radius - donutThickness
                const outsideOffset = OUTSIDE_LABEL_OFFSET
                const labelRadius =
                  labelPosition.placement === 'inside'
                    ? innerRadius + (radius - innerRadius) * 0.62
                    : radius + outsideOffset
                const x = Math.sin(midAngle) * labelRadius
                const y = -Math.cos(midAngle) * labelRadius
                return `translate(${x},${y})`
              })}
              textAnchor={labelPosition.textAnchor}
              pointerEvents='none'
              fill={labelFill}
              opacity={textOpacity}
              fontSize={ENHANCED_PIE_LABEL_FONT_SIZE}
            >
              <title>{`${categoryLabel}: ${roundedPercentage}`}</title>
              <tspan x={0} dy={-ENHANCED_PIE_LABEL_LINE_HEIGHT / 2}>
                {categoryLabel}
              </tspan>
              <tspan x={0} dy={ENHANCED_PIE_LABEL_LINE_HEIGHT}>
                {roundedPercentage}
              </tspan>
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
  const maxPieLabelWidth = useMemo(() => {
    if (!showCategoryPercentageLabels) return 0

    const roundTo = Number(config.dataFormat.roundTo) || 0
    const percentExample = `${(100).toFixed(roundTo)}%`

    return _data.reduce((widestLabel, datum) => {
      const categoryLabel = String(datum[config.runtime.xAxis.dataKey] ?? '')
      return Math.max(widestLabel, measurePieLabelText(categoryLabel), measurePieLabelText(percentExample))
    }, 0)
  }, [_data, config.dataFormat.roundTo, config.runtime.xAxis.dataKey, showCategoryPercentageLabels])
  const maxHorizontalLabelGutter = showCategoryPercentageLabels
    ? Math.max(0, (width - MIN_RADIUS_WITH_LABELS * 2) / 2)
    : 0
  const labelGutter = showCategoryPercentageLabels
    ? Math.min(Math.max(maxPieLabelWidth + LABEL_GUTTER_PADDING, MIN_LABEL_GUTTER), maxHorizontalLabelGutter)
    : 0
  const availableDiameter = showCategoryPercentageLabels
    ? Math.min(width - labelGutter * 2, height - VERTICAL_LABEL_GUTTER * 2)
    : Math.min(width, height)

  const radius = showCategoryPercentageLabels
    ? Math.max(0, availableDiameter / 2)
    : Math.min(width, height) / 2
  const svgWidth = showCategoryPercentageLabels ? width : radius * 2
  const svgLeftOffset = Math.max((props.parentWidth - svgWidth) / 2, 0)
  const centerY = height / 2
  const centerX = showCategoryPercentageLabels ? svgWidth / 2 : radius
  const donutThickness = config.pieType === 'Donut' ? Math.min(75, radius * 0.65) : radius

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
  const prevColorScaleRef = useRef<{ domain: string; range: string } | null>(null)

  useEffect(() => {
    if (_colorScale && config.visualizationType === 'Pie') {
      // Only dispatch if the domain or range has actually changed
      const currentDomain = JSON.stringify(_colorScale.domain())
      const currentRange = JSON.stringify(_colorScale.range())
      const colorScaleKey = `${currentDomain}|${currentRange}`
      const prevKey = prevColorScaleRef.current
        ? `${prevColorScaleRef.current.domain}|${prevColorScaleRef.current.range}`
        : null

      if (colorScaleKey !== prevKey) {
        prevColorScaleRef.current = { domain: currentDomain, range: currentRange }
        dispatch({ type: 'SET_COLOR_SCALE', payload: _colorScale })
      }
    }
  }, [_colorScale, config.visualizationType, dispatch])

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
          width={svgWidth}
          height={height}
          className={getSvgClasses()}
          role='img'
          aria-label={a11y}
          onMouseEnter={handleChartMouseEnter}
          onMouseLeave={() => {
            handleTooltipMouseOff()
            handleChartMouseLeave()
          }}
        >
          <Group top={centerY} left={centerX}>
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
          tooltipData.data?.length > 0 &&
          tooltipOpen &&
          showTooltip &&
          tooltipData.dataYPosition &&
          tooltipData.dataXPosition && (
            <>
              <style>{`.tooltip {background-color: rgba(255,255,255, ${
                config.tooltips.opacity / 100
              }) !important`}</style>
              <TooltipWithBounds
                className={'tooltip cove-visualization'}
                left={tooltipLeft + svgLeftOffset}
                top={tooltipTop}
              >
                <ul>
                  {typeof tooltipData === 'object' &&
                    tooltipData.data.map((row, index) => (
                      <TooltipListItem
                        row={row}
                        index={index}
                        key={index}
                        useMarkerColumn={tooltipData.useMarkerColumn}
                      />
                    ))}
                </ul>
              </TooltipWithBounds>
            </>
          )}
      </ErrorBoundary>
    </>
  )
})

export default PieChart
