import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'

import { DashboardContext, DashboardDispatchContext } from '../DashboardContext'
import { DashboardCopyPasteContext } from '../DashboardCopyPasteContext'
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

const formatSummaryList = items => {
  const summaryItems = items.filter(Boolean)
  if (!summaryItems.length) return undefined

  return summaryItems.join(', ')
}

const getDashboardFiltersTitle = (config, sharedFilters = []) => {
  const filters = config.sharedFilterIndexes?.map(index => sharedFilters[Number(index)]).filter(Boolean) || []
  return formatSummaryList(
    filters.map(
      filter =>
        filter.key?.trim() ||
        filter.columnName ||
        filter.apiFilter?.textSelector ||
        filter.apiFilter?.valueSelector ||
        filter.queryParameter
    )
  )
}

const handleTitle = (config, sharedFilters = []) => {
  if (!config) return
  if (config.type === 'map') return config.general.title
  if (config.type === 'markup-include') return config.contentEditor?.title
  if (config.type === 'dashboardFilters') return getDashboardFiltersTitle(config, sharedFilters)
  if (config.type === 'table') return config.table?.label
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
  const dispatch = useContext(DashboardDispatchContext)
  const { copiedWidget, clearCopiedWidget } = useContext(DashboardCopyPasteContext)

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
    [config.activeDashboard, rowIdx, colIdx, data.widget]
  )

  const widget = data.widget ? config?.visualizations[data.widget] : null
  if (widget && !widget.uid) widget.uid = data.widget

  let classNames = ['builder-column', 'column-size--' + data.width]

  if (isOver && canDrop) {
    classNames.push('column--drop')
  }

  if (widget) {
    classNames.push('column--populated')
  } else if (copiedWidget) {
    classNames.push('column--paste-ready')
  }

  const pasteCopiedWidget = () => {
    if (!copiedWidget || widget) return

    dispatch({
      type: 'CLONE_VISUALIZATION',
      payload: { sourceWidgetKey: copiedWidget.sourceWidgetKey, rowIdx, colIdx }
    })
    clearCopiedWidget()
  }

  return (
    <div
      className={classNames.join(' ')}
      ref={drop}
      onClick={pasteCopiedWidget}
      onKeyDown={event => {
        if (!copiedWidget || widget) return
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          pasteCopiedWidget()
        }
      }}
      role={!widget && copiedWidget ? 'button' : undefined}
      tabIndex={!widget && copiedWidget ? 0 : undefined}
    >
      {widget ? (
        <Widget
          title={handleTitle(widget, config.dashboard?.sharedFilters)}
          widgetConfig={{ rowIdx, colIdx, ...widget }}
          type={widget.visualizationType ?? widget.general?.geoType}
          toggleRow={toggleRow}
          widgetInRow
        />
      ) : (
        <p className='builder-column__text'>
          {copiedWidget ? (
            'Click here to paste copied component or drag and drop a new visualization'
          ) : (
            <>
              Drag and drop <br /> visualization
            </>
          )}
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
  const dispatch = useContext(DashboardDispatchContext)
  const { copiedWidget, clearCopiedWidget } = useContext(DashboardCopyPasteContext)

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
    [config.activeDashboard, rowIdx, colIdx, entryIndex, widgetKey]
  )

  const widget = widgetKey ? config?.visualizations[widgetKey] : null
  if (widget && !widget.uid) widget.uid = widgetKey
  const classNames = ['builder-column--conditional__slot']

  if (isOver && canDrop) {
    classNames.push('column--drop')
  }

  if (widget) {
    classNames.push('column--populated')
  } else if (copiedWidget) {
    classNames.push('column--paste-ready')
  }

  const pasteCopiedWidget = () => {
    if (!copiedWidget || widget) return

    dispatch({
      type: 'CLONE_VISUALIZATION',
      payload: { sourceWidgetKey: copiedWidget.sourceWidgetKey, rowIdx, colIdx, entryIdx: entryIndex }
    })
    clearCopiedWidget()
  }

  return (
    <div
      className={classNames.join(' ')}
      ref={drop}
      onClick={pasteCopiedWidget}
      onKeyDown={event => {
        if (!copiedWidget || widget) return
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          pasteCopiedWidget()
        }
      }}
      role={!widget && copiedWidget ? 'button' : undefined}
      tabIndex={!widget && copiedWidget ? 0 : undefined}
    >
      {widget ? (
        <Widget
          title={handleTitle(widget, config.dashboard?.sharedFilters)}
          widgetConfig={{ rowIdx, colIdx, entryIdx: entryIndex, ...widget }}
          type={widget.visualizationType ?? widget.general?.geoType}
          toggleRow={toggleRow}
          widgetInRow
        />
      ) : (
        <p className='builder-column__text'>
          {copiedWidget ? (
            'Click here to paste copied component or drag and drop a new visualization'
          ) : (
            <>
              Drag and drop <br /> visualization
            </>
          )}
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
