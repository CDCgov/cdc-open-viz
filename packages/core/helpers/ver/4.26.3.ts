import _ from 'lodash'
import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'
import { ConfigRow } from '@cdc/dashboard/src/types/ConfigRow'

// Configs saved on the test branch at version 4.26.2 have rows in the old
// array-of-arrays format (e.g. [[{width:12}]]) instead of the expected
// object format ({columns:[{width:12}]}). The earlier remapDashboardRows in
// 4.24.3/4.24.4 won't run for those configs because their version is already
// higher. Re-running the remap here ensures they are fixed on 4.26.3.
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

const addLocale = config => {
  if (!config.locale) {
    config.locale = 'en-US'
  }

  if (config.type === 'dashboard' && config.visualizations) {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      addLocale(visualization)
    })
  }
}

const update_4_26_3 = config => {
  const ver = '4.26.3'
  const newConfig = cloneConfig(config)
  remapDashboardRows(newConfig)
  addLocale(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_26_3
