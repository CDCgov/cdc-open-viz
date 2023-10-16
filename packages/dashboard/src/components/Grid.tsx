import React, { useContext } from 'react'
import Row from './Row'

import { DashboardContext, DashboardDispatchContext } from '../DashboardContext'

const Grid = () => {
  const { config } = useContext(DashboardContext)
  if (!config) return null
  const rows = config.rows
  const dispatch = useContext(DashboardDispatchContext)
  const updateConfig = config => dispatch({ type: 'UPDATE_CONFIG', payload: [config] })
  const addRow = () => {
    updateConfig({
      ...config,
      rows: [...rows, [{ width: 12 }, { equalHeight: false }, {}, {}]],
      uuid: Date.now()
    })
  }

  return (
    <div className='builder-grid'>
      {(rows || []).map((row, idx) => (
        <Row row={row} idx={idx} uuid={row.uuid} key={idx} />
      ))}
      <button className='btn add-row' onClick={addRow}>
        Add Row
      </button>
    </div>
  )
}

export default Grid
