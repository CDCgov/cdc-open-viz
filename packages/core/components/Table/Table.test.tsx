import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Table from './Table'

describe('Table', () => {
  it('renders no-data rows inside tbody with a header-based colspan', () => {
    const { container } = render(
      <Table
        childrenMatrix={[]}
        noData={true}
        noDataMessage='No matching rows'
        tableName='test-table'
        caption='Test table'
        headContent={
          <tr>
            <th>First column</th>
            <th colSpan={2}>Grouped columns</th>
          </tr>
        }
        tableOptions={{ className: 'table' }}
        viewport='lg'
        rightAlignedCols={{}}
      />
    )

    const table = container.querySelector('table')
    const directRows = Array.from(table.children).filter(child => child.tagName === 'TR')

    expect(directRows).toHaveLength(0)
    expect(table.querySelector('thead')).toBeInTheDocument()
    expect(table.querySelector('tbody tr td')).toHaveAttribute('colspan', '3')
    expect(screen.getByText('No matching rows')).toBeInTheDocument()
  })
})
