import React, { memo, useId, useMemo } from 'react'

// visx
import { AreaClosed } from '@visx/shape'
import { Group } from '@visx/group'
import { scaleLinear } from '@visx/scale'
import * as allCurves from '@visx/curve'
import { approvedCurveTypes } from '@cdc/core/helpers/lineChartHelpers'
import { getHorizonLayerColors } from '../helpers/getHorizonLayerColors'

type HorizonBandProps = {
  data: any[]
  seriesKey: string
  xAxisKey: string
  getXPosition: (value: any) => number
  bandHeight: number
  xMax: number
  numLayers: number
  colorScale: any
  config: any
  globalMax: number
}

/**
 * HorizonBand renders a single series as a horizon chart
 *
 * Horizon charts work by:
 * 1. Dividing the value range into N layers
 * 2. Each layer shows values within its threshold range
 * 3. Layers are stacked/overlapped to create the horizon effect
 * 4. Higher values appear overlapped, usually darker depending on color palette (achieved through layer stacking)
 */
const HorizonBand = ({
  data,
  seriesKey,
  xAxisKey,
  getXPosition,
  bandHeight,
  xMax,
  numLayers,
  config,
  globalMax
}: HorizonBandProps) => {
  // Create a unique, safe ID for clipPath (useId ensures uniqueness across instances)
  // Must be called before any early returns to follow React's rules of hooks
  const uniqueId = useId()
  const safeSeriesKey = seriesKey.replace(/[^a-zA-Z0-9]/g, '-')
  const clipId = `horizon-clip-${safeSeriesKey}-${uniqueId.replace(/:/g, '')}`

  // Get the curve type from config (same as stacked area chart)
  const curveType = allCurves[approvedCurveTypes[config.stackedAreaChartLineType || 'Linear']] || allCurves.curveLinear

  // Process data: convert to absolute values and compute series max in single pass
  const { processedData, seriesMax } = useMemo(() => {
    let max = 0
    const processed = data.map(d => {
      const absValue = Math.abs(Number(d[seriesKey]) || 0)
      if (absValue > max) max = absValue
      return { ...d, [seriesKey]: absValue }
    })
    return { processedData: processed, seriesMax: max }
  }, [data, seriesKey])

  // Get layer colors using shared helper (memoized based on palette config and numLayers)
  // Must be called before early returns to follow React's rules of hooks
  const layerColors = useMemo(
    () => getHorizonLayerColors(config, numLayers),
    [
      config.general?.palette?.name,
      config.general?.palette?.isReversed,
      config.general?.palette?.version,
      config.general?.palette?.customColors,
      numLayers
    ]
  )

  // Use global max for scaling (ensures all series bands are comparable)
  const maxValue = globalMax

  // If no data, max is 0, or dimensions are invalid, don't render
  if (maxValue === 0) return null
  if (xMax <= 0 || bandHeight <= 0) return null

  // Calculate the threshold for each layer
  // Each layer represents 1/numLayers of the max value
  const layerThreshold = maxValue / numLayers

  // Create a y-scale for positioning within the band
  // The scale maps values 0-layerThreshold to the full bandHeight
  // Each layer uses the full band height, creating overlay effect
  const yScale = scaleLinear({
    domain: [0, layerThreshold],
    range: [bandHeight, 0],
    clamp: true // Clamp values above threshold
  })

  // Render layers from bottom to top
  // Each layer shows values from (layerIndex * threshold) to ((layerIndex + 1) * threshold)
  const layers = []

  for (let layerIndex = 0; layerIndex < numLayers; layerIndex++) {
    const layerMin = layerIndex * layerThreshold

    // Short-circuit: if this layer's minimum exceeds the series max,
    // no remaining layers can have visible data
    if (layerMin >= seriesMax) break

    // Build layer data and track hasData in a single pass
    let hasData = false
    const layerData = processedData.map(d => {
      const rawValue = d[seriesKey]
      // Calculate the value relative to this layer's base
      const layerValue = Math.max(0, rawValue - layerMin)
      // Clamp to the layer threshold
      const clampedValue = Math.min(layerValue, layerThreshold)

      if (clampedValue > 0) hasData = true

      return {
        x: d[xAxisKey],
        y: clampedValue
      }
    })

    if (!hasData) continue

    // Get color for this layer from the distributed layer colors
    const layerColor = layerColors[layerIndex]

    layers.push(
      <Group key={`layer-${layerIndex}`} top={0}>
        <AreaClosed
          data={layerData}
          x={d => getXPosition(d.x)}
          y={d => yScale(d.y)}
          yScale={yScale}
          curve={curveType}
          fill={layerColor}
          fillOpacity={1}
          stroke='none'
        />
      </Group>
    )
  }

  return (
    <Group className='horizon-band'>
      {/* Clip to band bounds */}
      <defs>
        <clipPath id={clipId}>
          <rect x={0} y={0} width={xMax} height={bandHeight} />
        </clipPath>
      </defs>

      <Group clipPath={`url(#${clipId})`}>{layers}</Group>
    </Group>
  )
}

export default memo(HorizonBand)
