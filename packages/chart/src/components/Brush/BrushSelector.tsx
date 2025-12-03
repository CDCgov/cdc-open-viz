import React, { FC, useContext, useMemo, memo, useRef, useEffect } from 'react'
import { Brush } from '@visx/brush'
import BaseBrush from '@visx/brush/lib/BaseBrush'
import { Group } from '@visx/group'
import { scaleBand, scaleLinear } from '@visx/scale'
import { LinePath, AreaClosed } from '@visx/shape'
import * as allCurves from '@visx/curve'
import { Bounds } from '@visx/brush/lib/types'
import type { BrushHandleRenderProps } from '@visx/brush/lib/BrushHandle'
import ConfigContext, { ChartDispatchContext } from '../../ConfigContext'
import { handleLineType } from '../../helpers/handleLineType'

interface BrushSelectorProps {
  xMax: number
  yMax: number
}

const BRUSH_HEIGHT = 50
const BRUSH_PADDING = 10
const BORDER_RADIUS = 4

// Simple brush handle component with wider grab area
const BrushHandle = memo<BrushHandleRenderProps>(({ x, height, isBrushActive }) => {
  if (!isBrushActive) return null

  const pathWidth = 8
  const pathHeight = 15
  const grabAreaWidth = 20 // Wider invisible grab area

  return (
    <Group left={x + pathWidth / 2 - 2} top={(height - pathHeight) / 2}>
      {/* Invisible wider grab area that extends full height */}
      <rect
        x={-grabAreaWidth / 2}
        y={-(height - pathHeight) / 2}
        width={grabAreaWidth}
        height={height}
        fill='transparent'
        style={{ cursor: 'ew-resize' }}
        pointerEvents='all'
      />
      {/* Visible handle */}
      <path
        fill='#f2f2f2'
        d='M -4.5 0.5 L 3.5 0.5 L 3.5 15.5 L -4.5 15.5 L -4.5 0.5 M -1.5 4 L -1.5 12 M 0.5 4 L 0.5 12'
        stroke='#999999'
        strokeWidth='1'
        style={{ cursor: 'ew-resize' }}
        pointerEvents='none'
      />
    </Group>
  )
})

BrushHandle.displayName = 'BrushHandle'

// Mini chart preview for the brush (simplified version)
const MiniChartPreview = memo<{
  series: any[]
  tableData: any[]
  dataKey: string
  xScale: any
  miniYScale: any
  colorScale: any
  config: any
}>(({ series, tableData, dataKey, xScale, miniYScale, colorScale, config }) => {
  if (!series.length || !tableData.length || !xScale || !miniYScale) {
    return null
  }

  return (
    <>
      {series.map((s, i) => {
        const seriesKey = s.dataKey
        const seriesColor = colorScale?.(config.runtime.seriesLabels?.[seriesKey] || seriesKey) || '#666'
        const isAreaChart = s.type === 'Area Chart' || config.visualizationType === 'Area Chart'

        // Get series-specific styling
        const seriesWeight = s.weight || 2
        const seriesLineType = s.lineType || 'curveLinear'
        const seriesStyle = s.type || 'solid'
        const curve = allCurves[seriesLineType] || allCurves.curveLinear
        const strokeDasharray = handleLineType(seriesStyle)

        // Enhanced data validation to prevent NaN errors
        const validData = tableData.filter(d => {
          const xVal = xScale(d[dataKey])
          const yVal = parseFloat(d[s.dataKey])

          // Must have valid x position and numeric y value
          if (xVal === undefined || isNaN(yVal) || !isFinite(yVal)) return false

          // Check that scaled values are valid
          const scaledY = miniYScale(yVal)
          return !isNaN(scaledY) && isFinite(scaledY)
        })

        if (validData.length === 0) {
          return null
        }

        const getX = d => {
          const xVal = xScale(d[dataKey])
          const x = (xVal || 0) + xScale.bandwidth() / 2
          return isNaN(x) || !isFinite(x) ? 0 : x
        }

        const getY = d => {
          const value = parseFloat(d[s.dataKey])
          if (isNaN(value) || !isFinite(value)) return 0

          const scaled = miniYScale(value)
          return isNaN(scaled) || !isFinite(scaled) ? 0 : scaled
        }

        return isAreaChart ? (
          <AreaClosed
            key={`mini-area-${seriesKey}-${i}`}
            data={validData}
            x={getX}
            y={getY}
            yScale={miniYScale}
            fill={seriesColor}
            fillOpacity={0.3}
            stroke={seriesColor}
            strokeWidth={seriesWeight}
            strokeDasharray={strokeDasharray}
            curve={curve}
            pointerEvents='none'
          />
        ) : (
          <LinePath
            key={`mini-line-${seriesKey}-${i}`}
            data={validData}
            x={getX}
            y={getY}
            stroke={seriesColor}
            strokeWidth={seriesWeight}
            strokeDasharray={strokeDasharray}
            strokeOpacity={0.8}
            curve={curve}
            pointerEvents='none'
          />
        )
      })}
    </>
  )
})

MiniChartPreview.displayName = 'MiniChartPreview'

const BrushSelector: FC<BrushSelectorProps> = ({ xMax, yMax }) => {
  const brushRef = useRef<BaseBrush>(null)
  const hasInitialized = useRef(false)
  const mouseDownPos = useRef<{ x: number; y: number } | null>(null)
  const isMouseDown = useRef<boolean>(false)
  const previousExtent = useRef<{ x0: number; x1: number } | null>(null)
  const previousDefaultCount = useRef<number | undefined>(undefined)

  const { tableData, config, colorScale } = useContext(ConfigContext)
  const dispatch = useContext(ChartDispatchContext)
  const dataKey = config.xAxis.dataKey
  const series = config.series || []

  // Capture initial brush extent after mount
  useEffect(() => {
    if (brushRef.current && brushRef.current.state.extent.x0 !== -1 && !previousExtent.current) {
      previousExtent.current = {
        x0: brushRef.current.state.extent.x0,
        x1: brushRef.current.state.extent.x1
      }
    }
  }, [brushRef.current?.state])

  // X scale for brush data - ensure positive dimensions
  const xScale = useMemo(() => {
    if (!tableData.length || xMax <= 0) {
      return scaleBand<string>({ domain: [], range: [0, Math.max(xMax, 0)] })
    }

    const mappedDates = tableData.map(row => row[dataKey])
    const domain = config?.xAxis?.sortByRecentDate ? [...mappedDates].reverse() : mappedDates

    return scaleBand<string>({
      domain,
      range: [0, Math.max(xMax, 0)],
      paddingInner: 0.1,
      paddingOuter: 0.1
    })
  }, [tableData, dataKey, config?.xAxis?.sortByRecentDate, xMax])

  // Simple Y scale for brush (identity mapping)
  const yScale = useMemo(() => scaleLinear<number>({ domain: [0, BRUSH_HEIGHT], range: [BRUSH_HEIGHT, 0] }), [])

  // Mini chart Y scale
  const miniYScale = useMemo(() => {
    if (!series.length || !tableData.length) {
      return scaleLinear({ domain: [0, 100], range: [BRUSH_HEIGHT - 4, 2] })
    }

    let minValue = Number.POSITIVE_INFINITY
    let maxValue = Number.NEGATIVE_INFINITY
    let hasValidValues = false

    for (const s of series) {
      if (!s.dataKey) continue
      for (const row of tableData) {
        const value = parseFloat(row[s.dataKey])
        if (!isNaN(value)) {
          hasValidValues = true
          minValue = Math.min(minValue, value)
          maxValue = Math.max(maxValue, value)
        }
      }
    }

    if (!hasValidValues) {
      return scaleLinear({ domain: [0, 100], range: [BRUSH_HEIGHT - 4, 2] })
    }

    const domain = minValue === maxValue ? [minValue - 1, maxValue + 1] : [minValue, maxValue]
    return scaleLinear({ domain, range: [BRUSH_HEIGHT - 4, 2], nice: true })
  }, [series, tableData])

  // Fallback: Window mouseup listener to prevent stuck drag states
  useEffect(() => {
    const handleWindowMouseUp = () => {
      // Check if brush is stuck in dragging state
      if (brushRef.current?.state?.isBrushing) {
        const brush = brushRef.current

        // Approach 1: Use reset method if available to clear the brush
        if (typeof brush.reset === 'function') {
          brush.reset()
          return
        }

        // Approach 2: Try to find the brush SVG element and dispatch mouseup
        const brushContainer = document.querySelector('.brush-overlay')
        if (brushContainer) {
          const svgElements = brushContainer.querySelectorAll('rect, path')
          svgElements.forEach(element => {
            const mouseUpEvent = new MouseEvent('mouseup', {
              bubbles: true,
              cancelable: true
            })
            element.dispatchEvent(mouseUpEvent)
          })
        }
      }
    }

    // Add window-level event listeners as fallback safety net
    window.addEventListener('mouseup', handleWindowMouseUp, { passive: true })
    window.addEventListener('touchend', handleWindowMouseUp, { passive: true })
    // Also listen for mouse leave events on the window (e.g., mouse goes outside browser)
    window.addEventListener('mouseleave', handleWindowMouseUp, { passive: true })

    return () => {
      window.removeEventListener('mouseup', handleWindowMouseUp)
      window.removeEventListener('touchend', handleWindowMouseUp)
      window.removeEventListener('mouseleave', handleWindowMouseUp)
    }
  }, [])

  // Handle brush changes
  const handleBrushChange = (bounds: Bounds | null) => {
    if (!bounds) {
      dispatch({ type: 'SET_BRUSH_DATA', payload: [] })
      return
    }

    const filteredValues = bounds.xValues?.filter(val => val !== undefined) || []
    if (filteredValues.length === 0) {
      dispatch({ type: 'SET_BRUSH_DATA', payload: [] })
      return
    }

    // Create filtered dataset
    const selectedSet = new Set(filteredValues)
    const filteredData = tableData.filter(row => selectedSet.has(row[dataKey]))

    dispatch({ type: 'SET_BRUSH_DATA', payload: filteredData })
  }

  // Set default selection on initial load
  // Uses either the last X data points (if defaultRecentDateCount is set) or 35% of width
  useEffect(() => {
    if (hasInitialized.current || !tableData.length || !xScale || xMax <= 0) {
      return
    }

    const safeXMax = Math.max(xMax, 100)
    const safeYMax = Math.max(yMax, BRUSH_HEIGHT + BRUSH_PADDING * 2)
    const domain = xScale.domain()
    const defaultRecentDateCount = config?.brush?.defaultRecentDateCount

    let x0: number
    let x1: number
    let xValues: string[] = []

    if (defaultRecentDateCount && defaultRecentDateCount > 0 && domain.length > 0) {
      // Use exact count of most recent data points
      const countToSelect = Math.min(defaultRecentDateCount, domain.length)
      // Get the last N values from the domain (most recent dates)
      const selectedValues = domain.slice(-countToSelect)
      xValues = selectedValues

      // Calculate x0 and x1 based on the selected values' positions
      const firstSelectedPos = xScale(selectedValues[0])
      const lastSelectedPos = xScale(selectedValues[selectedValues.length - 1])
      const bandwidth = xScale.bandwidth()

      x0 = firstSelectedPos !== undefined ? firstSelectedPos : safeXMax * 0.65
      x1 = lastSelectedPos !== undefined ? lastSelectedPos + bandwidth : safeXMax
    } else {
      // Default: 35% of the width, starting from most recent dates
      const initialWidth = safeXMax * 0.35
      x0 = safeXMax - initialWidth
      x1 = safeXMax

      // Find all domain values that fall within the initial range
      for (const value of domain) {
        const xPos = xScale(value)
        if (xPos !== undefined && xPos >= x0 && xPos < x1) {
          xValues.push(value)
        }
      }
    }

    // If we have values in the initial range, set the brush data
    if (xValues.length > 0) {
      const initialBounds: Bounds = {
        x0,
        x1,
        y0: 0,
        y1: safeYMax,
        xValues
      }

      // Just set the brush data - let the Brush component handle the visual selection
      handleBrushChange(initialBounds)
      hasInitialized.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableData, xScale, xMax, dataKey, config?.brush?.defaultRecentDateCount])

  // Update brush selection when defaultRecentDateCount changes in the editor
  useEffect(() => {
    const currentCount = config?.brush?.defaultRecentDateCount

    // Skip if not initialized yet (let the initial effect handle it)
    if (!hasInitialized.current) {
      previousDefaultCount.current = currentCount
      return
    }

    // Skip if the value hasn't actually changed
    if (currentCount === previousDefaultCount.current) {
      return
    }

    // Update the previous value
    previousDefaultCount.current = currentCount

    // Skip if we don't have the necessary data
    if (!tableData.length || !xScale || xMax <= 0) {
      return
    }

    const safeXMax = Math.max(xMax, 100)
    const safeYMax = Math.max(yMax, BRUSH_HEIGHT + BRUSH_PADDING * 2)
    const domain = xScale.domain()

    let x0: number
    let x1: number
    let xValues: string[] = []

    if (currentCount && currentCount > 0 && domain.length > 0) {
      // Use exact count of most recent data points
      const countToSelect = Math.min(currentCount, domain.length)
      const selectedValues = domain.slice(-countToSelect)
      xValues = selectedValues

      const firstSelectedPos = xScale(selectedValues[0])
      const lastSelectedPos = xScale(selectedValues[selectedValues.length - 1])
      const bandwidth = xScale.bandwidth()

      x0 = firstSelectedPos !== undefined ? firstSelectedPos : safeXMax * 0.65
      x1 = lastSelectedPos !== undefined ? lastSelectedPos + bandwidth : safeXMax
    } else {
      // Default: 35% of the width, starting from most recent dates
      const initialWidth = safeXMax * 0.35
      x0 = safeXMax - initialWidth
      x1 = safeXMax

      for (const value of domain) {
        const xPos = xScale(value)
        if (xPos !== undefined && xPos >= x0 && xPos < x1) {
          xValues.push(value)
        }
      }
    }

    if (xValues.length > 0) {
      const newBounds: Bounds = {
        x0,
        x1,
        y0: 0,
        y1: safeYMax,
        xValues
      }

      // Update the brush data
      handleBrushChange(newBounds)

      // Update the visual brush position
      const brush = brushRef.current
      if (brush && brush.updateBrush) {
        brush.updateBrush(() => ({
          ...brush.state,
          extent: {
            x0,
            x1,
            y0: 0,
            y1: safeYMax
          },
          start: { x: x0, y: 0 },
          end: { x: x1, y: BRUSH_HEIGHT }
        }))

        // Store the new extent
        previousExtent.current = { x0, x1 }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config?.brush?.defaultRecentDateCount])

  // Selected box style with dotted border
  const selectedBoxStyle = useMemo(
    () => ({
      fill: 'transparent',
      fillOpacity: 0,
      stroke: '#333',
      strokeWidth: 2,
      strokeDasharray: '4 4',
      rx: BORDER_RADIUS
    }),
    []
  )

  // Track when brush interaction starts (mouse down) with position
  const handleBrushStart = (start: any) => {
    isMouseDown.current = true

    // Store the starting mouse position (from the brush start object)
    if (start && start.x !== undefined) {
      mouseDownPos.current = { x: start.x, y: start.y || 0 }
    }

    // Store the current extent before any changes
    const brush = brushRef.current
    if (brush && brush.state.extent.x0 !== -1) {
      previousExtent.current = {
        x0: brush.state.extent.x0,
        x1: brush.state.extent.x1
      }
    }
  }

  // Track when brush interaction ends
  const handleBrushEnd = (brushState: any) => {
    isMouseDown.current = false
  }

  const handleMouseLeave = (event: React.PointerEvent<SVGRectElement>) => {
    isMouseDown.current = false
    mouseDownPos.current = null
  }

  // Handle click to move brush to clicked location
  const handleClick = (event: React.PointerEvent<SVGRectElement>) => {
    const DRAG_THRESHOLD = 5 // pixels - if mouse moved less than this, it's a click
    const HANDLE_WIDTH = 8 // Width of the brush handles

    // Calculate click position relative to the brush area (accounting for BRUSH_PADDING)
    const svgRect = event.currentTarget.ownerSVGElement?.getBoundingClientRect()
    if (!svgRect) {
      return
    }

    const clickX = event.clientX - svgRect.left - BRUSH_PADDING

    // Check if we have a mouse down position to compare against
    if (!mouseDownPos.current) {
      mouseDownPos.current = null
      return
    }

    // Calculate distance moved since mouse down
    const dragDistance = Math.abs(clickX - mouseDownPos.current.x)

    // Reset mouse down position for next interaction
    mouseDownPos.current = null

    // Only proceed if this was a click (minimal movement), not a drag
    if (dragDistance > DRAG_THRESHOLD) {
      return
    }

    // Use the previous extent (before visx potentially changed it)
    if (!previousExtent.current) {
      return
    }

    const brush = brushRef.current
    if (!brush || !tableData.length) {
      return
    }

    const prevExtent = previousExtent.current

    // Check if click was on a handle (ignore clicks on handles)
    const currentWidth = Math.abs(prevExtent.x1 - prevExtent.x0)
    const leftHandleStart = Math.min(prevExtent.x0, prevExtent.x1) - HANDLE_WIDTH / 2
    const leftHandleEnd = Math.min(prevExtent.x0, prevExtent.x1) + HANDLE_WIDTH / 2
    const rightHandleStart = Math.max(prevExtent.x0, prevExtent.x1) - HANDLE_WIDTH / 2
    const rightHandleEnd = Math.max(prevExtent.x0, prevExtent.x1) + HANDLE_WIDTH / 2

    // If click was on a handle, do nothing
    if (
      (clickX >= leftHandleStart && clickX <= leftHandleEnd) ||
      (clickX >= rightHandleStart && clickX <= rightHandleEnd)
    ) {
      return
    }

    // Check if click was inside the current selection (ignore clicks inside selection to allow dragging)
    const selectionStart = Math.min(prevExtent.x0, prevExtent.x1)
    const selectionEnd = Math.max(prevExtent.x0, prevExtent.x1)

    if (clickX > selectionStart + HANDLE_WIDTH && clickX < selectionEnd - HANDLE_WIDTH) {
      return
    }

    // Calculate the new brush position centered on click
    const halfWidth = currentWidth / 2
    let newX0 = clickX - halfWidth
    let newX1 = clickX + halfWidth

    // Ensure the new position stays within bounds
    const safeXMax = Math.max(xMax, 100)
    if (newX0 < 0) {
      newX0 = 0
      newX1 = currentWidth
    } else if (newX1 > safeXMax) {
      newX1 = safeXMax
      newX0 = safeXMax - currentWidth
    }

    // Get the domain values for the new range
    const domain = xScale.domain()
    const xValues: string[] = []

    for (const value of domain) {
      const xPos = xScale(value)
      if (xPos !== undefined && xPos >= newX0 && xPos < newX1) {
        xValues.push(value)
      }
    }

    // Update the brush position
    if (xValues.length > 0) {
      const safeYMax = Math.max(yMax, BRUSH_HEIGHT + BRUSH_PADDING * 2)
      const newBounds: Bounds = {
        x0: newX0,
        x1: newX1,
        y0: 0,
        y1: safeYMax,
        xValues
      }

      handleBrushChange(newBounds)

      // Update the brush ref state directly to move the visual selection
      if (brush.updateBrush) {
        brush.updateBrush(() => ({
          ...brush.state,
          extent: {
            x0: newX0,
            x1: newX1,
            y0: 0,
            y1: safeYMax
          },
          start: { x: newX0, y: 0 },
          end: { x: newX1, y: BRUSH_HEIGHT }
        }))

        // Store the new extent as the previous extent for the next click
        previousExtent.current = {
          x0: newX0,
          x1: newX1
        }
      }
    }
  }

  // Ensure positive dimensions to avoid SVG errors
  const safeXMax = Math.max(xMax, 100) // Minimum width of 100px
  const safeYMax = Math.max(yMax, BRUSH_HEIGHT + BRUSH_PADDING * 2) // Minimum height with padding

  // Calculate initial brush position
  // Uses either the last X data points (if defaultRecentDateCount is set) or 35% of width
  const initialBrushPosition = useMemo(() => {
    if (safeXMax > 0 && tableData.length > 0 && xScale) {
      const domain = xScale.domain()
      const defaultRecentDateCount = config?.brush?.defaultRecentDateCount

      if (defaultRecentDateCount && defaultRecentDateCount > 0 && domain.length > 0) {
        // Use exact count of most recent data points
        const countToSelect = Math.min(defaultRecentDateCount, domain.length)
        const selectedValues = domain.slice(-countToSelect)

        const firstSelectedPos = xScale(selectedValues[0])
        const lastSelectedPos = xScale(selectedValues[selectedValues.length - 1])
        const bandwidth = xScale.bandwidth()

        const x0 = firstSelectedPos !== undefined ? firstSelectedPos : safeXMax * 0.65
        const x1 = lastSelectedPos !== undefined ? lastSelectedPos + bandwidth : safeXMax

        return {
          start: { x: x0, y: 0 },
          end: { x: x1, y: safeYMax }
        }
      }

      // Default: 35% of the width
      const initialWidth = safeXMax * 0.35
      return {
        start: { x: safeXMax - initialWidth, y: 0 },
        end: { x: safeXMax, y: safeYMax }
      }
    }
    return undefined
  }, [safeXMax, safeYMax, tableData.length, xScale, config?.brush?.defaultRecentDateCount])

  return (
    <svg
      width={safeXMax}
      height={safeYMax}
      style={{
        display: 'block',
        overflow: 'visible', // Ensure handles don't get clipped
        border: '1px solid #d0d0d0',
        borderRadius: '4px'
      }}
    >
      {/* Mini chart preview */}
      <Group top={BRUSH_PADDING}>
        {safeXMax > 0 && tableData.length > 0 && (
          <MiniChartPreview
            series={series}
            tableData={tableData}
            dataKey={dataKey}
            xScale={xScale}
            miniYScale={miniYScale}
            colorScale={colorScale}
            config={config}
          />
        )}
      </Group>

      {/* Brush component - positioned at the very top, no padding */}
      {safeXMax > 0 && (
        <Brush
          xScale={xScale}
          yScale={yScale}
          width={safeXMax}
          height={safeYMax}
          brushDirection='horizontal'
          onChange={handleBrushChange}
          selectedBoxStyle={selectedBoxStyle}
          useWindowMoveEvents={true} // Track mouse movements outside the brush area
          resizeTriggerAreas={['left', 'right']} // Enable resize handles on both sides
          innerRef={brushRef}
          renderBrushHandle={props => <BrushHandle {...props} />}
          initialBrushPosition={initialBrushPosition}
          onClick={handleClick}
          onBrushStart={handleBrushStart}
          onBrushEnd={handleBrushEnd}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </svg>
  )
}

export default memo(BrushSelector, (prev, next) => {
  // Only re-render if dimensions change significantly (avoid micro-changes)
  const xMaxChanged = Math.abs(prev.xMax - next.xMax) > 1
  const yMaxChanged = Math.abs(prev.yMax - next.yMax) > 1

  return !xMaxChanged && !yMaxChanged
})
