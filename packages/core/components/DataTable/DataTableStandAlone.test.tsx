import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import DataTableStandAlone from './DataTableStandAlone'

vi.mock('./DataTable', () => ({
  default: ({ dataConfig, rawData, runtimeData }) => (
    <>
      <div data-testid='raw-data'>{rawData.map(row => row.name).join(',')}</div>
      <div data-testid='runtime-data'>{runtimeData.map(row => row.name).join(',')}</div>
      <div data-testid='dataset-url'>{dataConfig?.dataUrl || ''}</div>
    </>
  )
}))

vi.mock('../Filters', () => ({
  default: () => null
}))

vi.mock('../Footnotes/FootnotesStandAlone', () => ({
  default: () => null
}))

describe('DataTableStandAlone', () => {
  it('updates rendered rows when dashboard-filtered config data changes', async () => {
    const filters = []
    const config = {
      type: 'table',
      visualizationType: 'table',
      filters,
      data: [{ name: 'Alice' }],
      table: { expanded: true, label: 'People' }
    } as any

    const { rerender } = render(<DataTableStandAlone visualizationKey='tableA' config={config} />)

    expect(screen.getByTestId('runtime-data')).toHaveTextContent('Alice')

    rerender(
      <DataTableStandAlone
        visualizationKey='tableA'
        config={{
          ...config,
          filters,
          data: [{ name: 'Bob' }]
        }}
      />
    )

    await waitFor(() => expect(screen.getByTestId('runtime-data')).toHaveTextContent('Bob'))
    expect(screen.getByTestId('runtime-data')).not.toHaveTextContent('Alice')
  })

  it('passes matching dashboard dataset metadata to the table renderer', () => {
    const config = {
      type: 'table',
      visualizationType: 'table',
      dataKey: 'people',
      filters: [],
      data: [{ name: 'Alice' }],
      table: { expanded: true, label: 'People' }
    } as any

    render(
      <DataTableStandAlone
        visualizationKey='tableA'
        config={config}
        datasets={{
          people: {
            data: [{ name: 'Alice' }],
            dataUrl: '/wcms/vizdata/people.json'
          }
        }}
      />
    )

    expect(screen.getByTestId('dataset-url')).toHaveTextContent('/wcms/vizdata/people.json')
  })

  it('uses full dashboard dataset rows as rawData while rendering dashboard-filtered rows', () => {
    const config = {
      type: 'table',
      visualizationType: 'table',
      dataKey: 'people',
      filters: [],
      data: [{ name: 'Alice' }],
      table: { expanded: true, label: 'People' }
    } as any

    render(
      <DataTableStandAlone
        visualizationKey='tableA'
        config={config}
        datasets={{
          people: {
            data: [{ name: 'Alice' }, { name: 'Bob' }],
            dataUrl: '/wcms/vizdata/people.json'
          }
        }}
      />
    )

    expect(screen.getByTestId('runtime-data')).toHaveTextContent('Alice')
    expect(screen.getByTestId('runtime-data')).not.toHaveTextContent('Bob')
    expect(screen.getByTestId('raw-data')).toHaveTextContent('Alice,Bob')
  })
})
