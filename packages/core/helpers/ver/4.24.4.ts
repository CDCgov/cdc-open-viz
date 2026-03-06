import _ from 'lodash'
import cloneConfig from '../cloneConfig'
import { ConfigRow } from '@cdc/dashboard/src/types/ConfigRow'

// Migrates rows from old array-of-arrays format to new { columns: [] } format.
// Configs saved at exactly 4.24.3 have this format but the 4.24.3 migration
// never runs for them (versionNeedsUpdate returns false when versions are equal).
const remapDashboardRows = config => {
  if (config.type === 'dashboard' && config.rows) {
    config.rows = config.rows.map(row => {
      if (row.columns === undefined) {
        const newRow = {} as ConfigRow
        const newColumns = row.map(column => {
          newRow.uuid = column.uuid
          newRow.toggle = column.toggle
          newRow.equalHeight = column.equalHeight
          return _.pick(column, 'equalHeight', 'width', 'hide', 'widget', 'uuid')
        })
        newRow.columns = newColumns
        return newRow
      }
      return row
    })
  }
}

const addFiltersToTables = config => {
  if (config.type === 'dashboard') {
    Object.keys(config.visualizations).forEach(vizKey => {
      const viz = config.visualizations[vizKey]
      if (viz.type === 'table') {
        if (!viz.filters) {
          viz.filters = []
          viz.filterBehavior = 'Filter Change'
        }
      }
    })
  }
}

const update_4_24_4 = config => {
  const ver = '4.24.4'

  const newConfig = cloneConfig(config)
  remapDashboardRows(newConfig)
  addFiltersToTables(newConfig)

  newConfig.version = ver
  return newConfig
}

export default update_4_24_4
