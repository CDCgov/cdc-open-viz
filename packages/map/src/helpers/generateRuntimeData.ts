import { addUIDs } from '.'
import numberFromString from '@cdc/core/helpers/numberFromString'
import { MapConfig } from '../types/MapConfig'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { DataRow } from '../types/MapConfig'

const generateRuntimeData = (
  configObj: MapConfig,
  filters: VizFilter[],
  hash: number,
  isCategoryLegend: boolean,
  keepNoUidRows = false
): {
  [uid: string]: DataRow
} => {
  try {
    const result: { [uid: string]: DataRow } = {}

    // Adding property this way prevents it from being enumerated
    Object.defineProperty(result, 'fromHash', {
      value: hash
    })

    addUIDs(configObj, configObj.columns.geo.name)

    configObj.data.forEach((row: DataRow) => {
      if (!row.uid) {
        if (!keepNoUidRows) return false // No UID for this row, we can't use for mapping
        row.uid = row.geography
      }
      const configPrimaryName = configObj.columns.primary.name
      const value = row[configPrimaryName]
      const categoryLegend = typeof value === 'string' && isCategoryLegend
      if (value && !categoryLegend) {
        row[configPrimaryName] = numberFromString(value)
      }

      // If this is a navigation only map, skip if it doesn't have a URL

      if ('navigation' === configObj.general.type) {
        let navigateUrl = row[configObj.columns.navigate.name] || ''

        if (undefined !== navigateUrl && typeof navigateUrl === 'string') {
          // Strip hidden characters before we check length
          navigateUrl = navigateUrl.replace(/(\r\n|\n|\r)/gm, '')
        }
        if (0 === navigateUrl?.length) {
          return false
        }
      }

      // Filters
      if (filters?.length) {
        for (let i = 0; i < filters.length; i++) {
          const { columnName, active, type, filterStyle, subGrouping } = filters[i]
          const isDataFilter = type !== 'url'
          const matchingValue = String(active) === String(row[columnName]) // Group
          if (isDataFilter && !matchingValue) return false // Bail out, data doesn't match the filter selection
          if (filterStyle == 'nested-dropdown') {
            const matchingSubValue = String(row[subGrouping?.columnName]) === String(subGrouping?.active)
            if (subGrouping?.active && !matchingSubValue) {
              return false // Bail out, data doesn't match the subgroup selection
            }
          }
        }
      }
      // Don't add additional rows with same UID
      if (result[row.uid] === undefined) {
        result[row.uid] = row
      }
    })
    return result
  } catch (e) {
    console.error('COVE: ', e) // eslint-disable-line
  }
}

export default generateRuntimeData
