import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'

import { DashboardContext } from '../DashboardContext'
import Widget from './Widget/Widget'
import { getColumnWidgetEntries, hasConditionalWidgets } from '../helpers/dashboardColumnWidgets'

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

const handleTitle = config => {
  if (!config) return
  if (config.type === 'map') return config.general.title
  if (config.type === 'markup-include') return config.contentEditor?.title
  return config.title
}

type ConditionalColumnProps = {
  data: any
  rowIdx: number
  colIdx: number
  toggleRow: boolean
}

type SimpleColumnProps = {
  data: any
  rowIdx: number
  colIdx: number
  toggleRow: boolean
}

const SimpleColumn: React.FC<SimpleColumnProps> = ({ data, rowIdx, colIdx, toggleRow }) => {
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

  return (
    <div className={classNames.join(' ')} ref={drop}>
      {widget ? (
        <Widget
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

type ConditionalColumnSlotProps = {
  rowIdx: number
  colIdx: number
  toggleRow: boolean
  entryIndex?: number
  widgetKey?: string
}

const ConditionalColumnSlot: React.FC<ConditionalColumnSlotProps> = ({
  rowIdx,
  colIdx,
  toggleRow,
  entryIndex,
  widgetKey
}) => {
  const { config } = useContext(DashboardContext)

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: 'vis-widget',
      drop: () => ({
        rowIdx,
        colIdx,
        entryIdx: entryIndex,
        canDrop
      }),
      canDrop: () => !widgetKey,
      collect: monitor => ({
        isOver: monitor.isOver(),
        canDrop: !!monitor.canDrop()
      })
    }),
    [config.activeDashboard]
  )

  const widget = widgetKey ? config?.visualizations[widgetKey] : null
  if (widget && !widget.uid) widget.uid = widgetKey
  const classNames = ['builder-column--conditional__slot']

  if (isOver && canDrop) {
    classNames.push('column--drop')
  }

  if (widget) {
    classNames.push('column--populated')
  }

  return (
    <div className={classNames.join(' ')} ref={drop}>
      {widget ? (
        <Widget
          title={handleTitle(widget)}
          widgetConfig={{ rowIdx, colIdx, entryIdx: entryIndex, ...widget }}
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

const ConditionalColumn: React.FC<ConditionalColumnProps> = ({ data, rowIdx, colIdx, toggleRow }) => {
  const widgetEntries = getColumnWidgetEntries(data)

  return (
    <div className={['builder-column', 'builder-column--conditional', 'column-size--' + data.width].join(' ')}>
      {widgetEntries.map((entry, entryIndex) => (
        <ConditionalColumnSlot
          key={`${rowIdx}-${colIdx}-${entryIndex}-${entry.widget}`}
          rowIdx={rowIdx}
          colIdx={colIdx}
          toggleRow={toggleRow}
          entryIndex={entryIndex}
          widgetKey={entry.widget}
        />
      ))}
      <ConditionalColumnSlot rowIdx={rowIdx} colIdx={colIdx} toggleRow={toggleRow} entryIndex={widgetEntries.length} />
    </div>
  )
}

const Column: React.FC<ColumnProps> = ({ data, rowIdx, colIdx, toggleRow }) => {
  if (hasConditionalWidgets(data)) {
    return <ConditionalColumn data={data} rowIdx={rowIdx} colIdx={colIdx} toggleRow={toggleRow} />
  }

  return <SimpleColumn data={data} rowIdx={rowIdx} colIdx={colIdx} toggleRow={toggleRow} />
}

export default Column
