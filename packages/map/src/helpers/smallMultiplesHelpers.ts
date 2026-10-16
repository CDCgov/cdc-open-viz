import { DataRow, MapConfig } from '../types/MapConfig'

/**
 * Get unique values from a specific column in the data
 * These values will become the tiles in small multiples view
 *
 * @param data - The full dataset
 * @param tileColumn - The column name to extract unique values from
 * @returns Array of unique values, sorted alphabetically, with null/undefined filtered out
 */
export const getTileValues = (data: DataRow[], tileColumn: string): (string | number)[] => {
  if (!data || !tileColumn) return []

  const uniqueValues = Array.from(new Set(data.map(row => row[tileColumn])))
    .filter(val => val != null && val !== '')
    .sort()

  return uniqueValues as (string | number)[]
}

/**
 * Filter data for a specific tile based on the tile column and value
 *
 * @param allData - The complete dataset
 * @param tileColumn - The column to filter by
 * @param tileValue - The value to filter for
 * @returns Filtered data containing only rows where column === value
 */
export const getTileData = (allData: DataRow[], tileColumn: string, tileValue: string | number): DataRow[] => {
  if (!allData || !tileColumn) return []

  return allData.filter(row => row[tileColumn] === tileValue)
}

/**
 * Get the display title for a tile
 * Uses custom title if configured, otherwise returns the column value
 *
 * @param tileValue - The value from the tile column
 * @param tileTitles - Object mapping values to custom titles
 * @returns The display title for the tile
 */
export const getTileDisplayTitle = (tileValue: string | number, tileTitles?: { [key: string]: string }): string => {
  if (tileTitles && tileTitles[String(tileValue)]) {
    return tileTitles[String(tileValue)]
  }
  return String(tileValue)
}

/**
 * Apply tile ordering based on configuration
 * Supports ascending, descending, and custom ordering
 *
 * @param tileValues - Array of tile values to order
 * @param orderType - Type of ordering: 'asc', 'desc', or 'custom'
 * @param customOrder - Custom order array (used when orderType is 'custom')
 * @param tileTitles - Custom titles for display (used for sorting by title)
 * @returns Ordered array of tile values
 */
export const applyTileOrder = (
  tileValues: (string | number)[],
  orderType?: 'asc' | 'desc' | 'custom',
  customOrder?: string[],
  tileTitles?: { [key: string]: string }
): (string | number)[] => {
  if (!orderType || !tileValues.length) {
    return tileValues
  }

  switch (orderType) {
    case 'asc':
      return [...tileValues].sort((a, b) => {
        const titleA = getTileDisplayTitle(a, tileTitles).toLowerCase()
        const titleB = getTileDisplayTitle(b, tileTitles).toLowerCase()
        return titleA.localeCompare(titleB)
      })

    case 'desc':
      return [...tileValues].sort((a, b) => {
        const titleA = getTileDisplayTitle(a, tileTitles).toLowerCase()
        const titleB = getTileDisplayTitle(b, tileTitles).toLowerCase()
        return titleB.localeCompare(titleA)
      })

    case 'custom':
      if (!customOrder || customOrder.length === 0) {
        return tileValues
      }

      // Sort tiles based on their position in customOrder array
      return [...tileValues].sort((a, b) => {
        const keyA = String(a)
        const keyB = String(b)

        const orderA = customOrder.indexOf(keyA)
        const orderB = customOrder.indexOf(keyB)

        // Items not in customOrder go to the end
        const finalOrderA = orderA === -1 ? 999999 : orderA
        const finalOrderB = orderB === -1 ? 999999 : orderB

        return finalOrderA - finalOrderB
      })

    default:
      return tileValues
  }
}

/**
 * Get tile keys for editor/configuration purposes
 * This is used in the editor to show available tiles for ordering/titling
 *
 * @param config - The map configuration
 * @param data - The dataset
 * @returns Array of tile keys (same as getTileValues but specifically for editor use)
 */
export const getTileKeys = (config: MapConfig, data: DataRow[]): (string | number)[] => {
  if (!config.smallMultiples?.tileColumn || !data) {
    return []
  }

  return getTileValues(data, config.smallMultiples.tileColumn)
}

/**
 * Pivot data from long format to wide format for DataTable display
 * Transforms data so each unique tileColumn value becomes its own column
 *
 * Example:
 * From: [{geo: "AL", value: 100, pathogen: "COVID"}, {geo: "AL", value: 50, pathogen: "Flu"}]
 * To:   [{geo: "AL", COVID: 100, Flu: 50}]
 *
 * @param data - Original data in long format
 * @param tileColumn - Column to pivot on (e.g., "pathogen")
 * @param valueColumn - Column containing values to pivot (e.g., "value")
 * @param geoColumn - Geography column name (e.g., "geo")
 * @param tileValues - Ordered array of tile values (determines column order)
 * @returns Pivoted data in wide format
 */
export const pivotDataForDataTable = (
  data: DataRow[],
  tileColumn: string,
  valueColumn: string,
  geoColumn: string,
  tileValues: (string | number)[]
): DataRow[] => {
  if (!data || !tileColumn || !valueColumn || !geoColumn) return []

  // Group data by geography
  const geoGroups = new Map<string, DataRow[]>()

  data.forEach(row => {
    const geoKey = String(row[geoColumn])
    if (!geoGroups.has(geoKey)) {
      geoGroups.set(geoKey, [])
    }
    geoGroups.get(geoKey)!.push(row)
  })

  // Create pivoted rows
  const pivotedData: DataRow[] = []

  geoGroups.forEach((rows, geoKey) => {
    const pivotedRow: DataRow = {
      [geoColumn]: geoKey
    }

    // Copy non-value, non-tile columns from first row (they should be the same for all rows of this geo)
    const firstRow = rows[0]
    Object.keys(firstRow).forEach(key => {
      if (key !== tileColumn && key !== valueColumn && key !== geoColumn) {
        pivotedRow[key] = firstRow[key]
      }
    })

    // Add a column for each tile value
    rows.forEach(row => {
      const tileValue = row[tileColumn]
      if (tileValue != null && tileValue !== '') {
        pivotedRow[String(tileValue)] = row[valueColumn]
      }
    })

    pivotedData.push(pivotedRow)
  })

  return pivotedData
}

/**
 * Pivot runtimeData from long format to wide format
 * RuntimeData is an object keyed by UID, so we need to pivot the values within each UID
 *
 * @param runtimeData - Original runtimeData object keyed by UID
 * @param tileColumn - Column to pivot on (e.g., "pathogen")
 * @param valueColumn - Column containing values to pivot (e.g., "activity_level_label")
 * @param geoColumn - Geography column name (e.g., "State")
 * @param allData - Full dataset to find all rows for each geo
 * @param tileValues - Ordered array of tile values
 * @returns Pivoted runtimeData
 */
export const pivotRuntimeDataForDataTable = (
  runtimeData: { [uid: string]: any },
  tileColumn: string,
  valueColumn: string,
  geoColumn: string,
  allData: DataRow[],
  tileValues: (string | number)[]
): { [uid: string]: any } => {
  if (!runtimeData || !tileColumn || !valueColumn || !geoColumn || !allData) return runtimeData

  const pivotedRuntimeData: { [uid: string]: any } = {}

  // For each UID in runtimeData
  Object.keys(runtimeData).forEach(uid => {
    const baseRow = runtimeData[uid]
    const geoValue = baseRow[geoColumn]

    // Find all rows in allData for this geo
    const rowsForThisGeo = allData.filter(row => row[geoColumn] === geoValue)

    // Create pivoted row starting with base row
    const pivotedRow = { ...baseRow }

    // Add a property for each tile value
    rowsForThisGeo.forEach(row => {
      const tileValue = row[tileColumn]
      if (tileValue != null && tileValue !== '') {
        pivotedRow[String(tileValue)] = row[valueColumn]
      }
    })

    // Remove the original value column and tile column
    delete pivotedRow[valueColumn]
    delete pivotedRow[tileColumn]

    pivotedRuntimeData[uid] = pivotedRow
  })

  return pivotedRuntimeData
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
 * @returns New columns configuration with geo column + one column per tile value
 */
export const createPivotedColumns = (
  originalColumns: any,
  valueColumnName: string,
  tileColumnName: string,
  tileValues: (string | number)[],
  tileTitles?: { [key: string]: string }
): any => {
  // Find the original value column config to clone its formatting
  // Need to search by column.name, not by key
  let valueColumnConfig = {}
  let valueColumnKey = null

  Object.keys(originalColumns).forEach(key => {
    if (originalColumns[key].name === valueColumnName) {
      valueColumnConfig = originalColumns[key]
      valueColumnKey = key
    }
  })

  // Create new columns object preserving order
  const newColumns = {}

  // Iterate through original columns
  Object.keys(originalColumns).forEach(key => {
    const column = originalColumns[key]

    // Check if this column's name matches the value column
    if (column.name === valueColumnName) {
      // Replace value column with pivoted columns
      tileValues.forEach(tileValue => {
        const columnKey = String(tileValue)
        newColumns[columnKey] = {
          ...valueColumnConfig,
          name: columnKey,
          label: getTileDisplayTitle(tileValue, tileTitles),
          dataTable: true
        }
      })
    } else if (column.name === tileColumnName) {
      // Skip tile column - don't add it to new columns
      return
    } else {
      // Keep all other columns
      newColumns[key] = originalColumns[key]
    }
  })

  return newColumns
}

/**
 * Prepare data table props for small multiples display
 * If small multiples is enabled, pivots data and columns. Otherwise returns originals.
 *
 * @param config - Map configuration
 * @param columns - Original columns configuration
 * @param runtimeData - Original runtime data
 * @returns Object with modified config, columns, and runtimeData (or originals if not small multiples)
 */
export const prepareSmallMultiplesDataTable = (
  config: MapConfig,
  columns: any,
  runtimeData: any
): { config: MapConfig; columns: any; runtimeData: any } => {
  const { tileColumn, tileOrderType, tileOrder, tileTitles } = config.smallMultiples
  const valueColumn = config.columns.primary?.name
  const geoColumn = config.columns.geo?.name

  // If required columns aren't configured, return originals
  if (!valueColumn || !geoColumn) {
    return { config, columns, runtimeData }
  }

  // Get ordered tile values
  const rawTileValues = getTileValues(config.data, tileColumn)
  const orderedTileValues = applyTileOrder(rawTileValues, tileOrderType, tileOrder, tileTitles)

  // Pivot data
  const pivotedData = pivotDataForDataTable(config.data, tileColumn, valueColumn, geoColumn, orderedTileValues)

  // Pivot runtimeData
  const pivotedRuntimeData = pivotRuntimeDataForDataTable(
    runtimeData,
    tileColumn,
    valueColumn,
    geoColumn,
    config.data,
    orderedTileValues
  )

  // Create pivoted columns
  const pivotedColumns = createPivotedColumns(columns, valueColumn, tileColumn, orderedTileValues, tileTitles)

  // Return modified config with pivoted data and columns
  return {
    config: {
      ...config,
      data: pivotedData,
      columns: pivotedColumns
    },
    columns: pivotedColumns,
    runtimeData: pivotedRuntimeData
  }
}
