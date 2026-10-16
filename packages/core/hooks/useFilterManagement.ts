/**
 * Custom hook for managing filter operations in visualizations
 *
 * Provides common filter management functionality including:
 * - Adding new filters
 * - Removing filters
 * - Updating filter properties
 * - Getting unique column values for filter options
 *
 * @example
 * ```tsx
 * const { addNewFilter, removeFilter, updateFilterProp, getFilterColumnValues } =
 *   useFilterManagement(config, updateConfig, data)
 *
 * // Add a new filter
 * <Button onClick={addNewFilter}>Add Filter</Button>
 *
 * // Remove a filter
 * <button onClick={() => removeFilter(index)}>Remove</button>
 *
 * // Update filter property
 * <Select onChange={e => updateFilterProp('columnName', index, e.target.value)} />
 *
 * // Get column values for filter dropdown
 * <Select options={getFilterColumnValues(index)} />
 * ```
 */
export const useFilterManagement = <TConfig extends { filters?: any[] }>(
  config: TConfig,
  updateConfig: (config: TConfig) => void,
  data: any[]
) => {
  /**
   * Adds a new empty filter to the config
   */
  const addNewFilter = () => {
    const filters = config.filters ? [...config.filters] : []
    filters.push({ values: [] })
    updateConfig({ ...config, filters })
  }

  /**
   * Removes a filter at the specified index
   * @param index - The index of the filter to remove
   */
  const removeFilter = (index: number) => {
    const filters = [...(config.filters || [])]
    filters.splice(index, 1)
    updateConfig({ ...config, filters })
  }

  /**
   * Updates a specific property of a filter
   * @param name - The property name to update
   * @param index - The index of the filter
   * @param value - The new value for the property
   */
  const updateFilterProp = (name: string, index: number, value: any) => {
    const filters = [...(config.filters || [])]
    filters[index][name] = value
    updateConfig({ ...config, filters })
  }

  /**
   * Gets unique values from a data column for filter options
   * @param index - The index of the filter (to get its columnName)
   * @returns Array of unique, sorted values from the specified column
   */
  const getFilterColumnValues = (index: number): any[] => {
    const filterDataOptions: any[] = []
    const filterColumnName = config.filters?.[index]?.columnName

    // Return empty array if no column name or no data
    if (!filterColumnName || !data || !Array.isArray(data) || data.length === 0) {
      return filterDataOptions
    }

    data.forEach(function (row: any) {
      if (undefined !== row[filterColumnName] && -1 === filterDataOptions.indexOf(row[filterColumnName])) {
        filterDataOptions.push(row[filterColumnName])
      }
    })
    filterDataOptions.sort()

    return filterDataOptions
  }

  return {
    addNewFilter,
    removeFilter,
    updateFilterProp,
    getFilterColumnValues
  }
}
