import React, { useContext } from 'react'
import Row from './Row'

import ConfigContext from '../ConfigContext'

const Grid = () => {
  const { rows, config, updateConfig } = useContext(ConfigContext)

  const addRow = () => {
    updateConfig({
      ...config,
      rows: [
        ...rows,
        [{ width: 12 }, { equalHeight: false }, {}, {}]
        //[{width: 12}, {}, {}]      ],
      ],
      uuid: Date.now()
    })
  }

  return (
    <div className='builder-grid'>
      {rows.map((row, idx) => (
        <Row row={row} idx={idx} uuid={row.uuid} key={idx} />
      ))}
      <button className='btn add-row' onClick={addRow}>
        Add Row
      </button>
    </div>
  )
}

export default Grid
