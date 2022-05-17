import React from 'react'

const DataTable = ({className, ...attributes}) => {
  return (
    <div className={`cove-data-table${className ? ' ' + className : ''}`} {...attributes}>

    </div>
  )
}

export default DataTable
