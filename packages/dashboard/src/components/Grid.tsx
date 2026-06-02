import React, { useContext } from 'react'
import Row from './Row'
import Button from '@cdc/core/components/elements/Button'

import { DashboardContext, DashboardDispatchContext } from '../DashboardContext'
import { ConfigRow } from '../types/ConfigRow'
import { createCoveId } from '@cdc/core/helpers/createCoveId'

const Grid = () => {
  const { config } = useContext(DashboardContext)
  const dispatch = useContext(DashboardDispatchContext)
  if (!config) return null
  const rows = config.rows
  const updateConfig = config => dispatch({ type: 'UPDATE_CONFIG', payload: [config] })
  const addRow = () => {
    const existingRowUuids = rows?.flatMap(row => (row.uuid === undefined ? [] : [row.uuid]))
    const blankRow: Partial<ConfigRow> = {
      columns: [{ width: 12 }],
      uuid: createCoveId('row', { existingIds: existingRowUuids })
    }
    updateConfig({
      ...config,
      rows: [...rows, blankRow]
    })
  }

  return (
    <div className='builder-grid'>
      {(rows || []).map((row, idx) => (
        <Row row={row} idx={idx} uuid={row.uuid ?? idx} key={idx} />
      ))}
      <Button variant='primary' className='col' onClick={addRow}>
        Add Row
      </Button>
    </div>
  )
}

export default Grid
