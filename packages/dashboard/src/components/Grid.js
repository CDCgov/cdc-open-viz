import React, { useContext } from 'react'
import Row from './Row'
import PreviewToggle from './PreviewToggle'

import Context from '../context'

const Grid = () => {
  const { rows, config, updateConfig, setPreview, preview } = useContext(Context)

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
    <>
      <PreviewToggle preview={preview} setPreview={setPreview} />
      <div className="builder-grid">
        {rows.map((row, idx) => <Row row={row} idx={idx} key={idx}/>)}
        <button className="btn btn--fluid add-row" onClick={addRow}>Add Row</button>
      </div>
    </>
  )
}

export default Grid