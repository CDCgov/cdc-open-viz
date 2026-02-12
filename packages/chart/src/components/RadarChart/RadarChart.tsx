import React, { useContext, useMemo, useEffect } from 'react'
import { Group } from '@visx/group'
import { scaleLinear } from '@visx/scale'
import { useTooltip, TooltipWithBounds } from '@visx/tooltip'
import { localPoint } from '@visx/event'

import ConfigContext, { ChartDispatchContext } from '../../ConfigContext'
import { useTooltip as useCoveTooltip } from '../../hooks/useTooltip'
import { useChartHoverAnalytics } from '../../hooks/useChartHoverAnalytics'
import { handleChartAriaLabels } from '../../helpers/handleChartAriaLabels'
import getViewport from '@cdc/core/helpers/getViewport'
import { isMobileHeightViewport } from '@cdc/core/helpers/viewports'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

import RadarGrid from './RadarGrid'
import RadarAxis from './RadarAxis'
import RadarPolygon from './RadarPolygon'

type TooltipData = {
  entityName: string
  values: { label: string; value: number }[]
  dataXPosition: number
  dataYPosition: number
}

type RadarChartProps = {
  parentWidth?: number
  parentHeight?: number
  interactionLabel?: string
}

const RadarChart = React.forwardRef<SVGSVGElement, RadarChartProps>((props, ref) => {
  const { interactionLabel = '' } = props

  const {
    transformedData: data,
    config,
    colorScale,
    seriesHighlight,
    isDraggingAnnotation,
    formatNumber
  } = useContext(ConfigContext)

  const dispatch = useContext(ChartDispatchContext)

  const { tooltipData, showTooltip, hideTooltip, tooltipOpen, tooltipLeft, tooltipTop } = useTooltip<TooltipData>()

  const { handleTooltipMouseOff } = useCoveTooltip({
    xScale: false,
    yScale: false,
    showTooltip,
    hideTooltip,
    interactionLabel
  })

  const { handleChartMouseEnter, handleChartMouseLeave } = useChartHoverAnalytics({
    config,
    interactionLabel
  })

  // Get radar config with defaults
  const radarConfig = config.radar || {
    gridRings: 5,
    showGridRings: true,
    gridRingStyle: 'polygons',
    scaleMin: 0,
    scaleMax: '',
    showFill: false,
    fillOpacity: 0.3,
    showPoints: true,
    pointRadius: 4,
    strokeWidth: 2,
    axisLabelOffset: 15
  }

  // Extract dimension keys from series
  const dimensionKeys = useMemo(() => {
    if (!config.series || config.series.length === 0) return []
    return config.series.map(s => s.dataKey).filter(Boolean)
  }, [config.series])

  // Extract entity identifier key
  const entityKey = config.xAxis?.dataKey || ''

  // Process data into entities with their dimension values
  const entities = useMemo(() => {
    if (!data || data.length === 0 || dimensionKeys.length === 0) return []

    return data.map(row => {
      const entityName = String(row[entityKey] || '')
      const values = dimensionKeys.map(key => {
        const val = parseFloat(row[key])
        return isNaN(val) ? 0 : val
      })
      return { name: entityName, values }
    })
  }, [data, entityKey, dimensionKeys])

  // Calculate scale max value
  const scaleMax = useMemo(() => {
    if (radarConfig.scaleMax && radarConfig.scaleMax !== '') {
      return Number(radarConfig.scaleMax)
    }
    // Auto-calculate from data
    let max = 0
    entities.forEach(entity => {
      entity.values.forEach(val => {
        if (val > max) max = val
      })
    })
    // Add 10% padding
    return Math.ceil(max * 1.1)
  }, [entities, radarConfig.scaleMax])

  const scaleMin = radarConfig.scaleMin || 0

  // Chart dimensions
  const width = props.parentWidth || 400
  const derivedViewport = getViewport(width)
  const useMobileHeight = config.heights?.mobileVertical && isMobileHeightViewport(derivedViewport)
  const height = Number(useMobileHeight ? config.heights.mobileVertical : config.heights?.vertical) || 300
  // TODO: remove debug log
  console.warn('[RadarChart]', {
    parentWidth: props.parentWidth,
    derivedViewport,
    mobileVertical: config.heights?.mobileVertical,
    vertical: config.heights?.vertical,
    useMobileHeight,
    height
  })
  const margin = { top: 40, right: 40, bottom: 40, left: 40 }

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom
  const radius = Math.min(innerWidth, innerHeight) / 2 - radarConfig.axisLabelOffset

  const centerX = width / 2
  const centerY = height / 2

  // Create radius scale
  const radiusScale = useMemo(() => {
    return scaleLinear<number>({
      domain: [scaleMin, scaleMax],
      range: [0, radius]
    })
  }, [scaleMin, scaleMax, radius])

  // Handle tooltip display
  const handlePolygonHover = (e: React.MouseEvent, entityData: { entityName: string; values: number[] }) => {
    const tooltipValues = entityData.values.map((val, i) => ({
      label: dimensionKeys[i],
      value: val
    }))

    const point = localPoint(e) || { x: 0, y: 0 }

    showTooltip({
      tooltipData: {
        entityName: entityData.entityName,
        values: tooltipValues,
        dataXPosition: point.x,
        dataYPosition: point.y
      },
      tooltipLeft: point.x,
      tooltipTop: point.y
    })
  }

  const handlePolygonLeave = () => {
    hideTooltip()
  }

  // Get color for entity
  const getEntityColor = (entityName: string, index: number): string => {
    if (colorScale) {
      return colorScale(entityName)
    }
    // Fallback colors
    const fallbackColors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f']
    return fallbackColors[index % fallbackColors.length]
  }

  // Update runtime seriesKeys for legend
  useEffect(() => {
    if (!dispatch || entities.length === 0) {
      return
    }

    // Ensure seriesKeys are unique and stable
    const seriesKeys = Array.from(new Set(entities.map(e => e.name)))
    const previousSeriesKeys = (config.runtime?.seriesKeys || []) as string[]

    const hasSameKeys =
      previousSeriesKeys.length === seriesKeys.length &&
      previousSeriesKeys.every((key, index) => key === seriesKeys[index])

    if (hasSameKeys) {
      return
    }

    dispatch({
      type: 'SET_RUNTIME',
      payload: {
        ...config.runtime,
        seriesKeys,
        seriesLabelsAll: seriesKeys
      }
    })
  }, [entities, dispatch, config.runtime])

  // Validation
  if (!config.xAxis?.dataKey) {
    return (
      <div className='radar-chart-error' style={{ padding: '20px', color: '#666' }}>
        Radar chart requires an entity identifier. Please set the X Axis data key in the configuration.
      </div>
    )
  }

  if (dimensionKeys.length < 3) {
    return (
      <div className='radar-chart-error' style={{ padding: '20px', color: '#666' }}>
        Radar chart requires at least 3 dimensions. Please add more series in the configuration.
      </div>
    )
  }

  if (entities.length === 0) {
    return (
      <div className='radar-chart-error' style={{ padding: '20px', color: '#666' }}>
        No data available for radar chart.
      </div>
    )
  }

  return (
    <ErrorBoundary component='RadarChart'>
      <svg
        ref={ref}
        width={width}
        height={height}
        className='radar-chart'
        role='img'
        aria-label={handleChartAriaLabels(config)}
        onMouseEnter={handleChartMouseEnter}
        onMouseLeave={() => {
          handleTooltipMouseOff()
          handleChartMouseLeave()
        }}
      >
        <Group top={centerY} left={centerX}>
          {/* Grid rings */}
          <RadarGrid radius={radius} axisCount={dimensionKeys.length} />

          {/* Axis lines and labels */}
          <RadarAxis radius={radius} />

          {/* Data polygons */}
          {entities.map((entity, index) => {
            const isHighlighted = seriesHighlight.length === 0 || seriesHighlight.includes(entity.name)
            const shouldMute = config.legend?.behavior === 'highlight' && seriesHighlight.length > 0 && !isHighlighted

            // Skip rendering if isolate behavior and not highlighted
            if (config.legend?.behavior === 'isolate' && seriesHighlight.length > 0 && !isHighlighted) {
              return null
            }

            return (
              <RadarPolygon
                key={entity.name}
                values={entity.values}
                scale={radiusScale}
                color={getEntityColor(entity.name, index)}
                entityName={entity.name}
                shouldMute={shouldMute}
                onMouseEnter={handlePolygonHover}
                onMouseLeave={handlePolygonLeave}
              />
            )
          })}
        </Group>
      </svg>

      {/* Tooltip */}
      {!isDraggingAnnotation && tooltipData && tooltipOpen && (
        <>
          <style>{`.tooltip {background-color: rgba(255,255,255, ${
            (config.tooltips?.opacity || 90) / 100
          }) !important`}</style>
          <TooltipWithBounds className='tooltip cdc-open-viz-module' left={tooltipLeft} top={tooltipTop}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>{tooltipData.entityName}</div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {tooltipData.values.map((item, index) => (
                <li key={index} style={{ padding: '2px 0' }}>
                  <span style={{ fontWeight: 500 }}>{item.label}:</span>{' '}
                  {formatNumber ? formatNumber(item.value, 'left') : item.value}
                </li>
              ))}
            </ul>
          </TooltipWithBounds>
        </>
      )}
    </ErrorBoundary>
  )
})

export default RadarChart
