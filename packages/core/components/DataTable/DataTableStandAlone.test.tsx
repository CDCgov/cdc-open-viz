import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import DataTableStandAlone from './DataTableStandAlone'

vi.mock('./DataTable', () => ({
  default: ({ dataConfig, rawData, runtimeData, onExpandedChange }) => (
    <>
      <div data-testid='raw-data'>{rawData.map(row => row.name).join(',')}</div>
      <div data-testid='runtime-data'>{runtimeData.map(row => row.name).join(',')}</div>
      <div data-testid='dataset-url'>{dataConfig?.dataUrl || ''}</div>
      <button type='button' onClick={() => onExpandedChange?.(false)}>
        Collapse table
      </button>
    </>
  )
}))

vi.mock('../Filters/Filters', () => ({
  default: () => null
}))

vi.mock('../Footnotes/FootnotesStandAlone', () => ({
  default: ({ config }) => <div data-testid='footnotes'>{config?.staticFootnotes?.[0]?.text}</div>
}))

vi.mock('../EditorWrapper/EditorWrapper', () => ({
  default: ({ component: Component, visualizationKey, visualizationConfig, updateConfig, viewport, datasets }) => (
    <Component
      visualizationKey={visualizationKey}
      config={visualizationConfig}
      updateConfig={updateConfig}
      viewport={viewport}
      datasets={datasets}
    />
  )
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

  it('passes dashboard dataset metadata through the editor preview', () => {
    const config = {
      type: 'table',
      visualizationType: 'table',
      dataKey: 'people',
      filters: [],
      data: [{ name: 'Alice' }],
      table: { expanded: true, label: 'People' },
      columns: {
        name: { name: 'name', dataTable: true }
      }
    } as any

    render(
      <DataTableStandAlone
        visualizationKey='tableA'
        config={config}
        isEditor={true}
        updateConfig={vi.fn()}
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

  it('hides footnotes when the table collapses', () => {
    const config = {
      type: 'table',
      visualizationType: 'table',
      filters: [],
      data: [{ name: 'Alice' }],
      table: { expanded: true, label: 'People' },
      footnotes: {
        staticFootnotes: [{ text: 'Table footnote should collapse too' }]
      }
    } as any

    render(<DataTableStandAlone visualizationKey='tableA' config={config} />)

    expect(screen.getByTestId('footnotes')).toHaveTextContent('Table footnote should collapse too')

    fireEvent.click(screen.getByRole('button', { name: 'Collapse table' }))

    expect(screen.queryByTestId('footnotes')).not.toBeInTheDocument()
  })

  it('keeps footnotes visible when preserveFootnotesOnCollapse is enabled', () => {
    const config = {
      type: 'table',
      visualizationType: 'table',
      filters: [],
      data: [{ name: 'Alice' }],
      table: { expanded: true, label: 'People', preserveFootnotesOnCollapse: true },
      footnotes: {
        staticFootnotes: [{ text: 'Persistent table footnote' }]
      }
    } as any

    render(<DataTableStandAlone visualizationKey='tableA' config={config} />)

    fireEvent.click(screen.getByRole('button', { name: 'Collapse table' }))

    expect(screen.getByTestId('footnotes')).toHaveTextContent('Persistent table footnote')
  })
})
