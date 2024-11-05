import React, { useContext } from 'react'
import Row from './Row'

import { DashboardContext, DashboardDispatchContext } from '../DashboardContext'
import { ConfigRow } from '../types/ConfigRow'

const Grid = () => {
  const { config } = useContext(DashboardContext)
  if (!config) return null
  const rows = config.rows
  const dispatch = useContext(DashboardDispatchContext)
  const updateConfig = config => dispatch({ type: 'UPDATE_CONFIG', payload: [config] })
  const addRow = () => {
    const blankRow: Partial<ConfigRow> = { columns: [{ width: 12 }] }
    updateConfig({
      ...config,
      rows: [...rows, blankRow],
      uuid: Date.now()
    })
  }

  return (
    <div className='builder-grid'>
      {(rows || []).map((row, idx) => (
        <Row row={row} idx={idx} uuid={row.uuid} key={idx} />
      ))}
      <button className='btn btn-primary col' onClick={addRow}>
        Add Row
      </button>
    </div>
  )
}

export default Grid
