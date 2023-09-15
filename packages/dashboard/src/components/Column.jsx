import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'

import ConfigContext from '../ConfigContext'
import Widget from './Widget'

const Column = ({ data, rowIdx, colIdx }) => {
  const { visualizations } = useContext(ConfigContext)

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'vis-widget',
    drop: () => ({
      rowIdx,
      colIdx,
      canDrop
    }),
    canDrop: () => !data.widget,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  }))

  const widget = data.widget ? visualizations[data.widget] : null
  if (!widget.uid) widget.uid = data.widget

  let classNames = ['builder-column', 'column-size--' + data.width]

  if (isOver && canDrop) {
    classNames.push('column--drop')
  }

  if (widget) {
    classNames.push('column--populated')
  }

  return (
    <div className={classNames.join(' ')} ref={drop}>
      {widget ? (
        <Widget data={{ rowIdx, colIdx, ...widget }} type={widget.visualizationType ?? widget.general?.geoType} />
      ) : (
        <p className='builder-column__text'>
          Drag and drop <br /> visualization
        </p>
      )}
    </div>
  )
}

export default Column
