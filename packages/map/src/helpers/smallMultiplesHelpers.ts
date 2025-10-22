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
