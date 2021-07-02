import React, { useState, useEffect, useCallback, memo, useContext } from 'react'
import { useDrag } from 'react-dnd'
import CloseIcon from '../images/icon-close.svg'
import MoveIcon from '../images/icon-move.svg'

import Context from '../context';

const Widget = ({ label, icon, uid, data = {}, addVisualization }) => {
  const { rows, visualizations, config, updateConfig } = useContext(Context)

  const handleWidgetMove = (item, monitor) => {
      let result = monitor.getDropResult()

      if(!result) return null

      const { rowIdx, colIdx } = result

      if(undefined !== data.rowIdx) {
        rows[data.rowIdx][data.colIdx].widget = null // Wipe from old position

        rows[rowIdx][colIdx].widget = data.uid // Add to new row and col
      } else {
        // Item does not exist, instantiate a new one
        const newViz = addVisualization()

        visualizations[newViz.uid] = newViz // Add to widgets collection
        rows[rowIdx][colIdx].widget = newViz.uid // Store reference in rows collection under the specific column
      }

      updateConfig({...config, rows, visualizations})
  }

  const [ { isDragging, ...collected }, drag ] = useDrag({
    type: 'vis-widget',
    end: handleWidgetMove,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  const deleteWidget = () => {
    rows[data.rowIdx][data.colIdx].widget = null

    delete visualizations[data.uid]

    updateConfig({...config, rows, visualizations})
  }

  return (
    <div className={'widget viz-icon'} ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} {...collected}>
      <div className="widget__drag"><MoveIcon /></div>
      <div className="widget__content">
        {data.rowIdx !== undefined && <div className={'widget-card__remove'} onClick={deleteWidget}><CloseIcon /></div>}
        {icon && icon}
        {label}
        {uid && <span style={{fontSize: '1em', display: 'block'}}>{uid}</span>}
      </div>
    </div>
  )
}

export default Widget
