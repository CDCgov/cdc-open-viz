import { useMemo } from 'react'

export interface UseDataColumnsOptions {
  /** Columns to exclude from the result */
  excludeColumns?: string[]
  /** Include only columns with specific data types */
  dataTypes?: ('string' | 'number' | 'boolean' | 'date')[]
}

/**
 * Extracts unique column names from data with memoization
 *
 * Performance optimization: Replaces the common getColumns() pattern
 * that was duplicated across multiple packages and called multiple times per render.
 *
 * @param data - Array of data objects
 * @param options - Optional configuration for filtering columns
 * @returns Sorted array of unique column names
 *
 * @example
 * // Basic usage
 * const columns = useDataColumns(data)
 *
 * @example
 * // With exclusions
 * const columns = useDataColumns(data, { excludeColumns: [config.groupBy] })
 *
 * @example
 * // Filter by data type
 * const numericColumns = useDataColumns(data, { dataTypes: ['number'] })
 */
export const useDataColumns = (data: any[], options?: UseDataColumnsOptions): string[] => {
  const { excludeColumns = [], dataTypes } = options || {}

  return useMemo(() => {
    if (!data?.length) return []

    const columnsSet = new Set<string>()

    // Single iteration through all rows (optimized from previous pattern)
    data.forEach(row => {
      Object.keys(row).forEach(columnName => {
        if (excludeColumns.includes(columnName)) return

        // Optional: filter by data type
        if (dataTypes && dataTypes.length > 0) {
          const value = row[columnName]
          const valueType = typeof value
          if (!dataTypes.includes(valueType as any)) return
        }

        columnsSet.add(columnName)
      })
    })

    return Array.from(columnsSet).sort()
  }, [
    data,
    // Stringify arrays for stable dependency tracking
    excludeColumns.join(','),
    dataTypes?.join(',')
  ])
}
