import { scaleOrdinal } from '@visx/scale'
import { getColorScale } from './getColorScale'
import { ColorScale } from '../types/ChartContext'

/**
 * Check if the legend should be hidden in small multiples mode
 * Returns true if small multiples is active and legend should be hidden (default behavior)
 * Returns false if legend should be shown (when hideLegend is explicitly set to false)
 */
export const shouldHideLegendInSmallMultiples = config => {
  return config.smallMultiples?.mode && config.smallMultiples?.hideLegend !== false
}

/**
 * Get filtered data for a specific tile based on its mode
 */
export const getTileData = (tileItem, data) => {
  if (tileItem.mode === 'by-series') {
    // BY-SERIES: All data, but will be filtered to single series by config
    return data
  } else if (tileItem.mode === 'by-column') {
    // BY-COLUMN: Filter data by tile column value
    return data.filter(row => row[tileItem.tileColumn] === tileItem.tileValue)
  }
  return data
}

/**
 * Get tile-specific config based on its mode
 */
export const getTileConfig = (tileItem, config) => {
  if (tileItem.mode === 'by-series') {
    // BY-SERIES: Single series config
    const singleSeries = config.series.find(s => s.dataKey === tileItem.seriesKey)
    return {
      ...config,
      series: [singleSeries],
      runtime: {
        ...config.runtime,
        series: config.runtime.series.filter(s => s.dataKey === tileItem.seriesKey),
        seriesKeys: [tileItem.seriesKey],
        seriesLabels: {
          [tileItem.seriesKey]: config.runtime.seriesLabels?.[tileItem.seriesKey] || tileItem.seriesKey
        },
        seriesLabelsAll: [config.runtime.seriesLabels?.[tileItem.seriesKey] || tileItem.seriesKey]
      }
    }
  } else if (tileItem.mode === 'by-column') {
    // BY-COLUMN: Same config, data will be filtered
    return config
  }
  return config
}

/**
 * Create combined data and config for consistent Y-axis calculation across all tiles
 * This combines all tile data into one dataset and creates a unified config
 */
export const createCombinedDataForYAxis = (config, data, tileItems) => {
  if (config.smallMultiples?.independentYAxis) {
    return { data: [], config: config }
  }

  // Combine all tile data into one dataset for Y-axis calculation
  let allTileData = []
  let allSeriesKeys = new Set()

  tileItems.forEach(item => {
    const tileData = getTileData(item, data)
    const tileConfig = getTileConfig(item, config)

    if (tileData.length === 0) return

    // Add this tile's data to the combined dataset
    allTileData = allTileData.concat(tileData)

    // Collect all series keys
    if (tileConfig.runtime?.seriesKeys) {
      tileConfig.runtime.seriesKeys.forEach(key => allSeriesKeys.add(key))
    }
  })

  // Create combined config with all series for Y-axis calculation
  const combinedConfig = {
    ...config,
    runtime: {
      ...config.runtime,
      seriesKeys: Array.from(allSeriesKeys)
    }
  }

  return { data: allTileData, config: combinedConfig }
}

/**
 * Apply tile ordering to tile items array
 * Sorts tiles according to the user's order preference (ascending, descending, or custom)
 */
export const applyTileOrder = (tileItems, orderType, customOrder, config) => {
  if (!orderType) {
    return tileItems
  }

  const getTileKey = item => (item.mode === 'by-series' ? item.seriesKey : item.tileValue)

  switch (orderType) {
    case 'asc':
      return [...tileItems].sort((a, b) => {
        const titleA = String(getTileDisplayTitle(a.mode, a.seriesKey, a.tileValue, a.key, config)).toLowerCase()
        const titleB = String(getTileDisplayTitle(b.mode, b.seriesKey, b.tileValue, b.key, config)).toLowerCase()
        return titleA.localeCompare(titleB)
      })

    case 'desc':
      return [...tileItems].sort((a, b) => {
        const titleA = String(getTileDisplayTitle(a.mode, a.seriesKey, a.tileValue, a.key, config)).toLowerCase()
        const titleB = String(getTileDisplayTitle(b.mode, b.seriesKey, b.tileValue, b.key, config)).toLowerCase()
        return titleB.localeCompare(titleA)
      })

    case 'custom':
      if (!customOrder || customOrder.length === 0) {
        return tileItems
      }

      // Sort tiles based on custom order, with unordered items at the end
      return [...tileItems].sort((a, b) => {
        const keyA = getTileKey(a)
        const keyB = getTileKey(b)

        const orderA = customOrder.indexOf(keyA)
        const orderB = customOrder.indexOf(keyB)

        // Items not in customOrder go to the end
        const finalOrderA = orderA === -1 ? 999999 : orderA
        const finalOrderB = orderB === -1 ? 999999 : orderB

        return finalOrderA - finalOrderB
      })

    default:
      return tileItems
  }
}

/**
 * Get the available tile keys that can be reordered
 * Returns series keys for by-series mode, unique column values for by-column mode
 */
export const getTileKeys = (config, data) => {
  if (config.smallMultiples?.mode === 'by-series') {
    return config.series.map(series => series.dataKey)
  } else if (config.smallMultiples?.mode === 'by-column') {
    const tileColumn = config.smallMultiples.tileColumn
    if (!tileColumn) return []

    return Array.from(new Set(data.map(row => row[tileColumn])))
      .filter(val => val != null)
      .sort()
  }
  return []
}

/**
 * Get the display title for a tile based on its mode
 * For by-series: uses series.name or seriesKey
 * For by-column: uses custom title or tileValue
 */
export const getTileDisplayTitle = (mode, seriesKey, tileValue, tileKey, config) => {
  if (mode === 'by-series') {
    // For by-series mode: use configured series name, fall back to seriesKey
    const series = config.series?.find(s => s.dataKey === seriesKey)
    return series?.name || seriesKey
  } else if (mode === 'by-column') {
    // For by-column mode: use custom title from editor, fall back to column value
    return config.smallMultiples?.tileTitles?.[tileValue] || tileValue
  }
  return tileKey
}

/**
 * Get the full color palette from config with exactly the number of colors needed
 * This creates a temporary colorScale with the right number of series to get the needed colors
 */
const getFullColorPalette = (config, numberOfTiles) => {
  // Create fake series keys for exactly the number of tiles needed
  const tempSeriesKeys = Array(numberOfTiles)
    .fill(null)
    .map((_, i) => `temp${i + 1}`)
  const tempConfig = {
    ...config,
    runtime: {
      ...config.runtime,
      seriesKeys: tempSeriesKeys,
      seriesLabelsAll: tempSeriesKeys
    }
  }

  const tempColorScale = getColorScale(tempConfig) as ColorScale
  return tempColorScale.range()
}

/**
 * Create a custom colorScale for a tile based on the color mode
 * This reuses the existing colorScale and extracts/manipulates its palette as needed
 */
export const createTileColorScale = (tileItem, config, originalColorScale, tileIndex, numberOfTiles) => {
  const colorMode = config.smallMultiples?.colorMode || 'same'

  if (colorMode === 'same') {
    if (tileItem.mode === 'by-series') {
      // Same mode + by-series: All tiles use the same color
      const palette = originalColorScale.range() // Extract palette from existing colorScale
      const baseColor = palette[0]
      // Create a ScaleOrdinal that always returns the same color
      return scaleOrdinal({
        domain: originalColorScale.domain(), // Reuse existing domain
        range: [baseColor],
        unknown: baseColor
      })
    } else {
      // Same mode + by-column: Use original colorScale
      return originalColorScale
    }
  } else {
    if (tileItem.mode === 'by-series') {
      // Different mode + by-series: Each series gets different color
      return originalColorScale
    } else {
      // Different mode + by-column: Each tile gets a different base color
      // Get exactly the right number of colors for the tiles
      const fullPalette = getFullColorPalette(config, numberOfTiles)
      const baseColor = fullPalette[tileIndex]
      // Create a ScaleOrdinal that returns the tile-specific color for all series
      return scaleOrdinal({
        domain: originalColorScale.domain(), // Reuse existing domain
        range: [baseColor],
        unknown: baseColor
      })
    }
  }
}
