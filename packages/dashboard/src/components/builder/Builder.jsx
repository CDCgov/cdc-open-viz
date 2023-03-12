import React from 'react'

// Hooks
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'

// Components - Core
import Button from '@cdc/core/components/element/Button'

// Components - Local
import BuilderRow from './Builder.Row'

const Builder = () => {
  const { config, updateVisConfig } = useVisConfig()

  const addRow = () => {
    updateVisConfig({
      rows: [
        ...config.rows,
        [ { width: 12 }, { equalHeight: false }, {}, {} ]
      ],
      uuid: Date.now()
    })
  }

  return (
    <div className="cove-dashboard__builder">
      {config.rows.map((row, idx) => (
        <BuilderRow row={row} idx={idx} uuid={row.uuid} key={idx}/>
      ))}
      <Button className="mt-4" onClick={addRow} fluid>
        Add Row
      </Button>
    </div>
  )
}

export default Builder
