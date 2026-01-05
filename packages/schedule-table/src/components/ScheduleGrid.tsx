import React from 'react'
import Table from '@cdc/core/components/Table/Table'
import Footnotes from '@cdc/core/components/Footnotes/Footnotes'
import { Config } from '../types/Config'
import { scheduleCellMatrix, getColumnHeaders } from '../helpers/scheduleCellMatrix'
import ScheduleLegend from './ScheduleLegend'

type ScheduleGridProps = {
  config: Config
  viewport: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
}

const ScheduleGrid: React.FC<ScheduleGridProps> = ({ config, viewport }) => {
  const { data, table, recommendations, footnotes, general } = config

  // Generate cell matrix from data
  const cellMatrix = scheduleCellMatrix({ data: data || [], config })

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
      {table.showLegend && table.legendPosition === 'top' && (
        <ScheduleLegend recommendations={recommendations} />
      )}

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

      {table.showLegend && table.legendPosition === 'bottom' && (
        <ScheduleLegend recommendations={recommendations} />
      )}

      {footnotes && footnotes.length > 0 && <Footnotes footnotes={footnotes} />}
    </div>
  )
}

export default ScheduleGrid
