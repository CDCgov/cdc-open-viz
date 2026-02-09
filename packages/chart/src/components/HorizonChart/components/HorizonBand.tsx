import React, { memo, useMemo } from 'react'

// visx
import { AreaClosed } from '@visx/shape'
import { Group } from '@visx/group'
import { scaleLinear } from '@visx/scale'
import * as allCurves from '@visx/curve'
import { approvedCurveTypes } from '@cdc/core/helpers/lineChartHelpers'
import { filterChartColorPalettes } from '@cdc/core/helpers/filterColorPalettes'
import { v2ColorDistribution } from '@cdc/core/helpers/palettes/colorDistributions'

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
  // Get the curve type from config (same as stacked area chart)
  const curveType = allCurves[approvedCurveTypes[config.stackedAreaChartLineType || 'Linear']] || allCurves.curveLinear

  // Here we're assuming the data is coming in as absolute values and not as "offsets"
  const processedData = useMemo(() => {
    return data.map(d => ({
      ...d,
      [seriesKey]: Math.abs(Number(d[seriesKey]) || 0)
    }))
  }, [data, seriesKey])

  // Use global max for scaling (ensures all series bands are comparable)
  const maxValue = globalMax

  // If no data or max is 0, don't render
  if (maxValue === 0) return null

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

  // Get layer colors: access the full palette and distribute based on numLayers
  const paletteName = config.general?.palette?.name || 'sequential_blue'
  const colorPalettes = filterChartColorPalettes(config)
  const fullPalette = colorPalettes[paletteName] || Object.values(colorPalettes)[0] || ['#4292c6']

  // Use v2ColorDistribution if we have a 9-color palette and numLayers <= 9
  let layerColors: string[]
  if (fullPalette.length === 9 && numLayers <= 9 && v2ColorDistribution[numLayers]) {
    const indices = v2ColorDistribution[numLayers]
    layerColors = indices.map((i: number) => fullPalette[i])
  } else {
    // Fallback: take first numLayers colors, or repeat if needed
    layerColors = []
    for (let i = 0; i < numLayers; i++) {
      layerColors.push(fullPalette[i % fullPalette.length])
    }
  }

  for (let layerIndex = 0; layerIndex < numLayers; layerIndex++) {
    const layerMin = layerIndex * layerThreshold

    // Transform data for this layer
    // Subtract the layer's base value so values start at 0 for this layer
    const layerData = processedData.map(d => {
      const rawValue = d[seriesKey]
      // Calculate the value relative to this layer's base
      const layerValue = Math.max(0, rawValue - layerMin)
      // Clamp to the layer threshold
      const clampedValue = Math.min(layerValue, layerThreshold)

      return {
        x: d[xAxisKey],
        y: clampedValue
      }
    })

    // Check if this layer has any visible data
    const hasData = layerData.some(d => d.y > 0)
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
        <clipPath id={`clip-${seriesKey}`}>
          <rect x={0} y={0} width={xMax} height={bandHeight} />
        </clipPath>
      </defs>

      <Group clipPath={`url(#clip-${seriesKey})`}>{layers}</Group>
    </Group>
  )
}

export default memo(HorizonBand)
