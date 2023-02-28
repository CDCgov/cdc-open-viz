import React from 'react'
import { useDrop } from 'react-dnd'

// Store
import useConfigStore from '@cdc/core/stores/configStore'

// Components - Local
import BuilderWidget from './Builder.Widget'

const BuilderColumn = ({ columnData, rowIdx, colIdx }) => {
  const config = useConfigStore(store => store.config)

  const [ { isOver, canDrop }, drop ] = useDrop(() => ({
    accept: 'vis-widget',
    drop: () => ({
      rowIdx,
      colIdx,
      canDrop
    }),
    canDrop: () => !columnData.widget,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  }))

  const widget = columnData.widget ? config.visualizations[columnData.widget] : null

  let classNames = [ 'cove-dashboard__builder__column-size--' + columnData.width ]

  if (isOver && canDrop) {
    classNames.push('cove-dashboard__builder__column--drop')
  }

  if (widget) {
    classNames.push('cove-dashboard__builder__column--populated')
  }

  return (
    <div className={`cove-dashboard__builder__column ` + classNames.join(' ')} ref={drop}>
      {widget ? (
        <BuilderWidget data={{ rowIdx, colIdx, ...widget }} type={widget.visualizationType ?? widget.general?.geoType}/>
      ) : (
        <p className="cove-dashboard__builder__column__text">
          Drag and drop <br/> visualization
        </p>
      )}
    </div>
  )
}

export default BuilderColumn
