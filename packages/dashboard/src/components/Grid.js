import React, { useContext } from 'react'
import Row from './Row'

import Context from '../context'

const Grid = () => {
  const { rows, config, updateConfig, setPreview } = useContext(Context)

  const addRow = () => {
    updateConfig({
      ...config,
      rows: [
        ...rows,
        [{width: 12}, {}, {}]
      ],
      uuid: Date.now()
    })
  }

  return (
    <div className="builder-grid">
      <button onClick={() => {setPreview(true)}}>Preview</button>
      {rows.map((row, idx) => <Row row={row} idx={idx} uuid={row.uuid} key={idx}/>)}
      <button className="btn btn--fluid add-row" onClick={addRow}>Add Row</button>
    </div>
  )
}

export default Grid