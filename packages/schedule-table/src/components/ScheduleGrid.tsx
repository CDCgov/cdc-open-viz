import React from 'react'
import { chartColorPalettes } from '@cdc/core/data/chartColorPalettes'
import Table from '@cdc/core/components/Table/Table'
import Footnotes from '@cdc/core/components/Footnotes/Footnotes'
import { Config } from '../types/Config'
import { scheduleCellMatrix, getColumnHeaders } from '../helpers/scheduleCellMatrix'
import ScheduleLegend from './ScheduleLegend'
import ScheduleCell from './ScheduleCell'

type ScheduleGridProps = {
  config: Config
  viewport: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
}

const ScheduleGrid: React.FC<ScheduleGridProps> = ({ config, viewport }) => {
  const { data, table, recommendations, footnotes, general, palette } = config

  // Get palette colors from config.palette
  const paletteColors = palette ? chartColorPalettes.v2[palette] : undefined

  // Map value keys to palette colors
  const valueKeyToColor = (valueKey: string) => {
    if (!paletteColors || paletteColors.length === 0) return undefined
    // Find index of valueKey in recommendations, fallback to 0
    const recIndex = recommendations?.findIndex(rec => rec.value === valueKey) ?? 0
    return paletteColors[recIndex % paletteColors.length]
  }

  // Generate cell matrix from data
  const cellMatrix =
    (data || []).length > 0 && config.matrix?.rowKey && config.matrix?.columnKey
      ? (() => {
          const { matrix, columnOrder } = config
          const rowValues = [...new Set(data.map(item => item[matrix.rowKey])).values()].filter(Boolean)
          const columnValues =
            columnOrder && columnOrder.length > 0
              ? columnOrder
              : [...new Set(data.map(item => item[matrix.columnKey])).values()].filter(Boolean)
          const dataByRow = rowValues.reduce((acc, rowValue) => {
            acc[rowValue] = data.filter(item => item[matrix.rowKey] === rowValue)
            return acc
          }, {} as Record<string, any[]>)
          return rowValues.map(rowValue => {
            const rowData = dataByRow[rowValue] || []
            const cells: React.ReactNode[] = [<strong key={`row-header-${rowValue}`}>{rowValue}</strong>]
            columnValues.forEach((columnValue, colIdx) => {
              const cellData = rowData.find(item => item[matrix.columnKey] === columnValue)
              if (cellData) {
                const recommendation = cellData[matrix.valueKey]
                const displayText = cellData[matrix.displayKey] || ''
                const notesUrl = matrix.notesKey ? cellData[matrix.notesKey] : undefined
                const cellColor = valueKeyToColor(recommendation)
                cells.push(
                  <ScheduleCell
                    key={`cell-${rowValue}-${columnValue}`}
                    displayText={displayText}
                    recommendation={recommendation}
                    notesUrl={notesUrl}
                    recommendations={recommendations}
                    showNotesLinks={table.showNotesLinks}
                    notesLinkText={table.notesLinkText}
                    cellColor={cellColor}
                  />
                )
              } else {
                cells.push(<div key={`empty-${rowValue}-${columnValue}`} className='schedule-cell empty'></div>)
              }
            })
            return cells
          })
        })()
      : []

  // Generate column headers
  const columnHeaders = getColumnHeaders(config, data || [])

  // Create header content
  const headContent = (
    <tr>
      {columnHeaders.map((header, index) => (
        <th key={`header-${index}`} scope='col'>
          {header}
        </th>
      ))}
    </tr>
  )

  // Table options
  const tableOptions = {
    className: `schedule-table ${general?.border ? 'bordered' : ''}`,
    'aria-live': 'polite' as const,
    cellMinWidth: table.cellMinWidth
  }

  const hasData = data && data.length > 0

  return (
    <div className='schedule-table-container'>
      {table.showLegend && table.legendPosition === 'top' && <ScheduleLegend recommendations={recommendations} />}

      <Table
        childrenMatrix={cellMatrix}
        noData={!hasData}
        tableName='schedule-table'
        caption={table.caption || config.title}
        stickyHeader={table.stickyHeaders}
        headContent={headContent}
        tableOptions={tableOptions}
        wrapColumns={false}
        viewport={viewport}
        rightAlignedCols={{}}
      />

      {table.showLegend && table.legendPosition === 'bottom' && <ScheduleLegend recommendations={recommendations} />}

      {footnotes && footnotes.length > 0 && <Footnotes footnotes={footnotes} />}
    </div>
  )
}

export default ScheduleGrid
