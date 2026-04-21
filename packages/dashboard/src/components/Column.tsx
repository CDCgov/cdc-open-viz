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

type ColumnWidgetSlotProps = {
  rowIdx: number
  colIdx: number
  toggleRow: boolean
  entryIndex?: number
  widgetKey?: string
}

const ColumnWidgetSlot: React.FC<ColumnWidgetSlotProps> = ({ rowIdx, colIdx, toggleRow, entryIndex, widgetKey }) => {
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

  let classNames = ['builder-column__slot']

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

const Column: React.FC<ColumnProps> = ({ data, rowIdx, colIdx, toggleRow }) => {
  const conditionalMode = hasConditionalWidgets(data)
  const widgetEntries = getColumnWidgetEntries(data)
  const canAddAnother = conditionalMode && !!widgetEntries[0]?.dashboardCondition

  return (
    <div className={['builder-column', 'column-size--' + data.width].join(' ')}>
      {conditionalMode ? (
        <>
          {widgetEntries.map((entry, entryIndex) => (
            <ColumnWidgetSlot
              key={`${rowIdx}-${colIdx}-${entryIndex}-${entry.widget}`}
              rowIdx={rowIdx}
              colIdx={colIdx}
              toggleRow={toggleRow}
              entryIndex={entryIndex}
              widgetKey={entry.widget}
            />
          ))}
          {canAddAnother && (
            <ColumnWidgetSlot rowIdx={rowIdx} colIdx={colIdx} toggleRow={toggleRow} entryIndex={widgetEntries.length} />
          )}
        </>
      ) : (
        <ColumnWidgetSlot rowIdx={rowIdx} colIdx={colIdx} toggleRow={toggleRow} widgetKey={data.widget} />
      )}
    </div>
  )
}

export default Column
