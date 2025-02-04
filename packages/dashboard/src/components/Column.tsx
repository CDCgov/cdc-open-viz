import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'

import { DashboardContext } from '../DashboardContext'
import Widget from './Widget'

const Column = ({ data, rowIdx, colIdx }) => {
  const { config } = useContext(DashboardContext)

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
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
    }),
    [config.activeDashboard]
  )

  const widget = data.widget ? config?.visualizations[data.widget] : null
  if (widget && !widget.uid) widget.uid = data.widget

  let classNames = ['builder-column', 'column-size--' + data.width]

  if (isOver && canDrop) {
    classNames.push('column--drop')
  }

  if (widget) {
    classNames.push('column--populated')
  }

  const handleTitle = config => {
    if (!config) return
    if (config.type === 'map') return config.general.title
    if (config.type === 'markup-include') return config.contentEditor?.title
    return config.title
  }

  return (
    <div className={classNames.join(' ')} ref={drop}>
      {widget ? (
        <Widget
          title={handleTitle(widget)}
          widgetConfig={{ rowIdx, colIdx, ...widget }}
          type={widget.visualizationType ?? widget.general?.geoType}
        />
      ) : (
        <p className='builder-column__text'>
          Drag and drop <br /> visualization
        </p>
      )}
    </div>
  )
}

export default Column
