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

const update_4_23 = config => {
  const ver = '4.23'

  const newConfig = _.cloneDeep(config)

  remapDashboardRows(newConfig)

  newConfig.version = ver
  return newConfig
}

export default update_4_23
