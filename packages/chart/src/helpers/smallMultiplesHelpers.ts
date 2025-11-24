import { scaleOrdinal } from '@visx/scale'
import { getColorScale } from './getColorScale'
import { ColorScale } from '../types/ChartContext'

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
        seriesLabelsAll: [config.runtime.seriesLabels?.[tileItem.seriesKey] || tileItem.seriesKey],
        // Filter area chart specific series keys for proper rendering
        ...(config.runtime.areaSeriesKeys && {
          areaSeriesKeys: config.runtime.areaSeriesKeys.filter(s => s.dataKey === tileItem.seriesKey)
        }),
        // Filter line chart specific series keys for proper rendering
        ...(config.runtime.lineSeriesKeys && {
          lineSeriesKeys: config.runtime.lineSeriesKeys.filter(key => key === tileItem.seriesKey)
        })
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

/**
 * Pivot data from long format to wide format for DataTable display
 * Transforms data so each unique tileColumn value becomes its own column
 * Works for both regular data and runtimeData
 *
 * Example:
 * From: [{index: "1", value: 100, smell: "sweet"}, {index: "1", value: 50, smell: "bitter"}]
 * To:   [{index: "1", sweet: 100, bitter: 50}]
 *
 * @param data - Original data in long format
 * @param tileColumn - Column to pivot on (e.g., "smell")
 * @param valueColumn - Column containing values to pivot (e.g., "value")
 * @param xAxisColumn - X-axis column name (e.g., "index")
 * @param tileValues - Ordered array of tile values (determines column order)
 * @returns Pivoted data in wide format
 */
export const pivotDataForDataTable = (data, tileColumn, valueColumn, xAxisColumn, tileValues) => {
  if (!data || !tileColumn || !valueColumn || !xAxisColumn) return []

  // Group data by x-axis value
  const xAxisGroups = new Map()

  data.forEach(row => {
    const xAxisKey = String(row[xAxisColumn])
    if (!xAxisGroups.has(xAxisKey)) {
      xAxisGroups.set(xAxisKey, [])
    }
    xAxisGroups.get(xAxisKey).push(row)
  })

  // Create pivoted rows
  const pivotedData = []

  xAxisGroups.forEach((rows, xAxisKey) => {
    const pivotedRow = {
      [xAxisColumn]: xAxisKey
    }

    // Add tile value columns in the correct order
    tileValues.forEach(tileValue => {
      const columnKey = String(tileValue)
      const matchingRow = rows.find(row => String(row[tileColumn]) === columnKey)
      if (matchingRow) {
        pivotedRow[columnKey] = matchingRow[valueColumn]
      }
    })

    // Copy non-value, non-tile columns from first row
    const firstRow = rows[0]
    Object.keys(firstRow).forEach(key => {
      if (key !== tileColumn && key !== valueColumn && key !== xAxisColumn) {
        pivotedRow[key] = firstRow[key]
      }
    })

    pivotedData.push(pivotedRow)
  })

  return pivotedData
}

/**
 * Create a single column config for a tile value
 * Helper function to avoid duplication
 */
const createTileColumnConfig = (tileValue, valueColumnConfig, tileTitles) => {
  const columnKey = String(tileValue)
  return {
    ...valueColumnConfig,
    name: columnKey,
    label: tileTitles?.[tileValue] || String(tileValue),
    dataTable: true
  }
}

/**
 * Create column configurations for pivoted data table
 * Generates one column config for each tile value, copying formatting from the original value column
 * Preserves column order by inserting new columns where the value column was
 *
 * @param originalColumns - Original columns configuration
 * @param valueColumnName - Name of the value column to clone config from
 * @param tileColumnName - Name of the tile column to remove
 * @param tileValues - Array of tile values (becomes new column names)
 * @param tileTitles - Custom titles for columns
 * @returns New columns configuration with xAxis column + one column per tile value
 */
export const createPivotedColumns = (originalColumns, valueColumnName, tileColumnName, tileValues, tileTitles) => {
  const newColumns = {}
  let valueColumnConfig = {}
  let addedPivotedColumns = false

  const hasOriginalColumns = originalColumns && Object.keys(originalColumns).length > 0

  const addPivotedColumns = () => {
    if (addedPivotedColumns) return
    tileValues.forEach(tileValue => {
      const columnKey = String(tileValue)
      newColumns[columnKey] = createTileColumnConfig(tileValue, valueColumnConfig, tileTitles)
    })
    addedPivotedColumns = true
  }

  if (hasOriginalColumns) {
    Object.keys(originalColumns).forEach(key => {
      const column = originalColumns[key]

      if (column.name === valueColumnName) {
        // Found value column - save its config and replace with pivoted columns
        valueColumnConfig = column
        addPivotedColumns()
      } else if (column.name !== tileColumnName) {
        newColumns[key] = column
      }
    })
  }

  // Only added if not previously added
  addPivotedColumns()

  return newColumns
}

/**
 * Get ordered tile values/keys for data table display
 * Works for both by-series and by-column modes
 */
const getOrderedTileValues = (config, rawValues, mode) => {
  const { tileOrderType, tileOrder } = config.smallMultiples || {}

  if (!tileOrderType) {
    return rawValues
  }

  // Create minimal tile items for ordering
  const tileItems = rawValues.map(value => ({
    mode,
    ...(mode === 'by-series' ? { seriesKey: value } : { tileValue: value }),
    key: value
  }))

  // Apply ordering
  const orderedItems = applyTileOrder(tileItems, tileOrderType, tileOrder, config)

  // Extract values back
  return orderedItems.map(item => (mode === 'by-series' ? item.seriesKey : item.tileValue))
}

/**
 * Create runtime series objects for pivoted data
 * Each tile value becomes a series in the data table
 */
const createPivotedRuntimeSeries = (tileValues, originalSeries) => {
  return tileValues.map(tileValue => ({
    dataKey: String(tileValue),
    type: originalSeries[0]?.type || 'Bar',
    axis: originalSeries[0]?.axis || 'Left',
    tooltip: true
  }))
}

/**
 * Handle by-series mode for data table
 * Reorders series based on tile ordering settings
 */
const handleBySeriesMode = (config, columns, runtimeData) => {
  const rawSeriesKeys = config.series?.map(s => s.dataKey) || []
  const orderedSeriesKeys = getOrderedTileValues(config, rawSeriesKeys, 'by-series')

  if (!config.runtime?.series) {
    return { config, columns, runtimeData }
  }

  // Reorder runtime series
  const reorderedRuntimeSeries = orderedSeriesKeys
    .map(seriesKey => config.runtime.series.find(s => s.dataKey === seriesKey))
    .filter(Boolean)

  return {
    config: {
      ...config,
      runtime: {
        ...config.runtime,
        series: reorderedRuntimeSeries
      }
    },
    columns,
    runtimeData
  }
}

/**
 * Handle by-column mode for data table
 * Two scenarios:
 * 1. Single-series: Pivot data and create columns per tile value
 * 2. Multi-series (stacked/grouped): Add tileColumn to data table, no pivoting
 */
const handleByColumnMode = (config, columns, runtimeData) => {
  const xAxisColumn = config.xAxis?.dataKey
  const { tileColumn, tileTitles } = config.smallMultiples

  // Validate required columns
  if (!xAxisColumn || !tileColumn) {
    return { config, columns, runtimeData }
  }

  if (config.series && config.series.length > 1) {
    const updatedColumns = {
      ...columns
    }

    const tileColumnKey = tileColumn
    if (!updatedColumns[tileColumnKey]) {
      updatedColumns[tileColumnKey] = {
        name: tileColumn,
        label: tileColumn,
        dataTable: true,
        order: 2
      }
    }

    return {
      config: {
        ...config,
        columns: updatedColumns
      },
      columns: updatedColumns,
      runtimeData
    }
  }

  const valueColumn = config.series?.[0]?.dataKey

  if (!valueColumn) {
    return { config, columns, runtimeData }
  }

  // Get ordered tile values
  const rawTileValues = getTileKeys(config, config.data)
  const orderedTileValues = getOrderedTileValues(config, rawTileValues, 'by-column')

  // Pivot data and runtimeData
  const pivotedData = pivotDataForDataTable(config.data, tileColumn, valueColumn, xAxisColumn, orderedTileValues)
  const pivotedRuntimeData = Array.isArray(runtimeData)
    ? pivotDataForDataTable(runtimeData, tileColumn, valueColumn, xAxisColumn, orderedTileValues)
    : runtimeData

  // Create pivoted columns and runtime series
  const pivotedColumns = createPivotedColumns(columns, valueColumn, tileColumn, orderedTileValues, tileTitles)
  const pivotedRuntimeSeries = createPivotedRuntimeSeries(orderedTileValues, config.series)

  return {
    config: {
      ...config,
      data: pivotedData,
      columns: pivotedColumns,
      runtime: {
        ...config.runtime,
        series: pivotedRuntimeSeries,
        seriesKeys: orderedTileValues.map(String)
      }
    },
    columns: pivotedColumns,
    runtimeData: pivotedRuntimeData
  }
}

/**
 * Prepare data table props for small multiples display
 * Handles both by-column and by-series modes
 *
 * @param config - Chart configuration
 * @param columns - Original columns configuration
 * @param runtimeData - Original runtime data
 * @returns Object with modified config, columns, and runtimeData (or originals if not applicable)
 */
export const prepareSmallMultiplesDataTable = (config, columns, runtimeData) => {
  const mode = config.smallMultiples?.mode

  if (!mode) {
    return { config, columns, runtimeData }
  }

  return mode === 'by-series'
    ? handleBySeriesMode(config, columns, runtimeData)
    : handleByColumnMode(config, columns, runtimeData)
}
