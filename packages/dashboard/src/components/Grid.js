import React, { useContext } from 'react'
import Row from './Row'

import Context from '../context'

const Grid = () => {
  const { rows, config, updateConfig } = useContext(Context)

  const addRow = () => {
    updateConfig({
      ...config,
      rows: [
        ...rows,
        [{width: 12}, {}, {}]
      ]
    })
  }

  return (
    <div className="builder-grid">
      {rows.map((row, idx) => <Row row={row} idx={idx} key={idx}/>)}
      <button className="btn btn--fluid add-row" onClick={addRow}>Add Row</button>
    </div>
  )
}

export default Grid