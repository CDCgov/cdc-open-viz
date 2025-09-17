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
  if (!config.smallMultiples?.consistentYAxis) {
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
