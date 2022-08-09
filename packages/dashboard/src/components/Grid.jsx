import React from 'react'

// Third Party
import { v4 as uuidv4 } from 'uuid';

// Context
import { useConfigContext } from '@cdc/core/context/ConfigContext'

// Components - Local
import Row from './Row'

const Grid = () => {
  const { config, configActions } = useConfigContext()
  const { rows } = config

  const addRow = () => {
    configActions.updateConfig({
      ...config,
      rows: [
        ...rows,
        [ { width: 12 }, { equalHeight: false }, {}, {} ]
      ],
      uuid: uuidv4()
    })
  }

  return (
    <div className="builder-grid">
      {rows.map((row, idx) => <Row row={row} idx={idx} uuid={row.uuid} key={idx}/>)}
      <button className="btn add-row" onClick={addRow}>Add Row</button>
    </div>
  )
}

export default Grid
