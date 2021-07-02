import React, { useContext, memo } from 'react'
import { useDrop } from 'react-dnd'

import Context from '../context'
import Widget from './Widget'

const Column = ({ data, rowIdx, colIdx }) => {
  const { visualizations } = useContext(Context)

  const [ { isOver, canDrop }, drop ] = useDrop(() => ({
    accept: 'vis-widget',
    drop: () => ({
      rowIdx,
      colIdx,
      canDrop
    }),
    canDrop: () => !data.widget,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  }))

  const widget = data.widget ? visualizations[data.widget] : null

  let classNames = [
    'builder-column',
    'column-size--' + data.width,
  ]

  if(isOver && canDrop) {
    classNames.push('column--drop')
  }

  if(widget) {
    classNames.push('column--populated')
  }

  return (
    <div className={classNames.join(' ')} ref={drop}>
      {widget ? <Widget data={{rowIdx, colIdx, ...widget}} /> : <p className="builder-column__text">Drag and drop <br/> visualization on this <br/> module</p>}
    </div>
  )
}

export default Column