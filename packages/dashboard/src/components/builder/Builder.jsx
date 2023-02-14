import React, { useContext } from 'react'
import BuilderRow from './Builder.Row'

import ConfigContext from '../../ConfigContext'

import Button from '@cdc/core/components/element/Button'

const Builder = () => {
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
    <div className='cove-dashboard__builder'>
      {rows.map((row, idx) => (
        <BuilderRow row={row} idx={idx} uuid={row.uuid} key={idx} />
      ))}
      <Button className="mt-4" onClick={addRow} fluid>
        Add Row
      </Button>
    </div>
  )
}

export default Builder
