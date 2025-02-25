import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'

import { DashboardContext } from '../DashboardContext'
import Widget from './Widget/Widget'

type ColumnProps = {
  // column data passed from parent
  data: any
  // row index
  rowIdx: number
  // column index
  colIdx: number
  // toggle row
  toggleRow: boolean
}

const Column: React.FC<ColumnProps> = ({ data, rowIdx, colIdx, toggleRow }) => {
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
          columnData={data}
          title={handleTitle(widget)}
          widgetConfig={{ rowIdx, colIdx, ...widget }}
          type={widget.visualizationType ?? widget.general?.geoType}
          toggleRow={toggleRow}
          widgetInRow
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
