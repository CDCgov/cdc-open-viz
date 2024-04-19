import { ConfigRow } from '@cdc/dashboard/src/types/ConfigRow'
import _ from 'lodash'

const remapDashboardRows = config => {
  if (config.type === 'dashboard') {
    config.rows = config.rows.map(row => {
      let newRow = undefined
      if (row.columns === undefined) {
        newRow = {} as ConfigRow
        const newColumns = row.map(column => {
          newRow.uuid = column.uuid
          newRow.toggle = column.toggle
          newRow.equalHeight = column.equalHeight
          return _.pick(column, 'equalHeight', 'width', 'hide', 'widget', 'uuid')
        })
        newRow.columns = newColumns
      }
      return newRow ?? row
    })
  }
}

const chartUpdates = newConfig => {
  if (newConfig.type === 'chart') {
    if (newConfig.xAxis.sortDates) {
      newConfig.xAxis.type = 'date-time'
    }
    newConfig.table.download = true

    delete newConfig.xAxis.sortDates
  }
}

const mapUpdates = newConfig => {
  if (newConfig.type === 'map') {
    newConfig.table.download = true
    newConfig.general.showDownloadButton = true
    // expandDataTable should be removed in the future....
    newConfig.general.expandDataTable = newConfig.table.expanded
  }
}

const update_4_24_3 = config => {
  const ver = '4.24.3'

  const newConfig = _.cloneDeep(config)

  remapDashboardRows(newConfig)
  chartUpdates(newConfig)
  mapUpdates(newConfig)

  newConfig.version = ver
  return newConfig
}

export default update_4_24_3
