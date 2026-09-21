import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import DataTableStandAlone from './DataTableStandAlone'

const renderRows = (rows = []) => JSON.stringify(rows)

vi.mock('./DataTable', () => ({
  default: ({ dataConfig, rawData, runtimeData, onExpandedChange }) => (
    <>
      <div data-testid='raw-data'>{renderRows(rawData)}</div>
      <div data-testid='runtime-data'>{renderRows(runtimeData)}</div>
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
  default: ({ config, dataMetadata }) => (
    <div data-testid='footnotes' data-metadata={JSON.stringify(dataMetadata || {})}>
      {config?.staticFootnotes?.[0]?.text}
    </div>
  )
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
  const expectRows = (testId: string, rows: Record<string, any>[]) => {
    expect(screen.getByTestId(testId)).toHaveTextContent(JSON.stringify(rows))
  }

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

    expectRows('runtime-data', [{ name: 'Alice' }])

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

    await waitFor(() => expectRows('runtime-data', [{ name: 'Bob' }]))
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

  it('passes data table metadata to standalone footnotes', () => {
    const config = {
      type: 'table',
      visualizationType: 'table',
      filters: [],
      data: [{ name: 'Alice' }],
      dataMetadata: { source: 'June file' },
      table: { expanded: true, label: 'People' },
      footnotes: {
        staticFootnotes: [{ text: 'Footnote {{source}}' }]
      },
      enableMarkupVariables: true,
      markupVariables: [
        {
          sourceType: 'metadata',
          name: 'Source',
          tag: '{{source}}',
          metadataKey: 'source',
          conditions: [],
          addCommas: false
        }
      ]
    } as any

    render(<DataTableStandAlone visualizationKey='tableA' config={config} />)

    expect(screen.getByTestId('footnotes')).toHaveAttribute('data-metadata', JSON.stringify({ source: 'June file' }))
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

  it('uses plain dashboard dataset rows as rawData while rendering dashboard-filtered rows', () => {
    const runtimeRows = [{ name: 'Alice' }]
    const datasetRows = [{ name: 'Alice' }, { name: 'Bob' }]
    const config = {
      type: 'table',
      visualizationType: 'table',
      dataKey: 'people',
      filters: [],
      data: runtimeRows,
      table: { expanded: true, label: 'People' }
    } as any

    render(
      <DataTableStandAlone
        visualizationKey='tableA'
        config={config}
        datasets={{
          people: {
            data: datasetRows,
            dataUrl: '/wcms/vizdata/people.json'
          }
        }}
      />
    )

    expectRows('runtime-data', runtimeRows)
    expect(screen.getByTestId('runtime-data')).not.toHaveTextContent('Bob')
    expectRows('raw-data', datasetRows)
  })

  it('keeps formattedData dataset-backed for rawData when originalFormattedData is absent', () => {
    const datasetRows = [{ name: 'Alice' }, { name: 'Bob' }]
    const formattedRows = [{ name: 'Alice' }]
    const config = {
      type: 'table',
      visualizationType: 'table',
      dataKey: 'people',
      filters: [],
      data: [{ name: 'Alice' }],
      formattedData: formattedRows,
      table: { expanded: true, label: 'People' }
    } as any

    render(
      <DataTableStandAlone
        visualizationKey='tableA'
        config={config}
        datasets={{
          people: {
            data: datasetRows,
            dataUrl: '/wcms/vizdata/people.json'
          }
        }}
      />
    )

    expectRows('runtime-data', formattedRows)
    expectRows('raw-data', datasetRows)
  })

  it('uses original formattedData as rawData when dashboard filters narrow the displayed transformed rows', () => {
    const sourceRows = [
      { dataDescription: 'Visits', ageGroup: '0-4 years', value: 10 },
      { dataDescription: 'Admissions', ageGroup: '0-4 years', value: 3 },
      { dataDescription: 'Visits', ageGroup: '5-17 years', value: 20 },
      { dataDescription: 'Admissions', ageGroup: '5-17 years', value: 7 }
    ]
    const pivotedRows = [
      { ageGroup: '0-4 years', Visits: 10, Admissions: 3 },
      { ageGroup: '5-17 years', Visits: 20, Admissions: 7 }
    ]
    const filteredPivotedRows = [{ ageGroup: '0-4 years', Visits: 10, Admissions: 3 }]
    const config = {
      type: 'table',
      visualizationType: 'table',
      dataKey: 'nssp',
      filters: [],
      data: filteredPivotedRows,
      formattedData: filteredPivotedRows,
      originalFormattedData: pivotedRows,
      table: { expanded: true, label: 'NSSP', downloadVisibleDataOnly: false }
    } as any

    render(
      <DataTableStandAlone
        visualizationKey='tableA'
        config={config}
        datasets={{
          nssp: {
            data: sourceRows,
            dataUrl: '/wcms/vizdata/nssp.json'
          }
        }}
      />
    )

    expectRows('runtime-data', filteredPivotedRows)
    expectRows('raw-data', pivotedRows)
  })

  it('uses nested dataset tableData unless originalFormattedData is available', () => {
    const nestedRows = [{ name: 'Nested Alice' }, { name: 'Nested Bob' }]
    const config = {
      type: 'table',
      visualizationType: 'table',
      dataKey: 'people',
      filters: [],
      data: [{ tableData: nestedRows }],
      table: { expanded: true, label: 'People' }
    } as any

    const { rerender } = render(
      <DataTableStandAlone
        visualizationKey='tableA'
        config={config}
        datasets={{
          people: {
            data: [{ tableData: nestedRows, chartValue: 42 }],
            dataUrl: '/wcms/vizdata/people.json'
          }
        }}
      />
    )

    expectRows('raw-data', nestedRows)

    const transformedRows = [{ group: 'Total', count: 2 }]
    rerender(
      <DataTableStandAlone
        visualizationKey='tableA'
        config={{ ...config, formattedData: transformedRows, originalFormattedData: transformedRows }}
        datasets={{
          people: {
            data: [{ tableData: nestedRows, chartValue: 42 }],
            dataUrl: '/wcms/vizdata/people.json'
          }
        }}
      />
    )

    expectRows('raw-data', transformedRows)
  })

  it('keeps runtimeData as filtered display data when rawData comes from originalFormattedData', () => {
    const formattedRows = [
      { name: 'Visible Alice', group: 'included' },
      { name: 'Hidden Bob', group: 'excluded' }
    ]
    const filteredRows = [{ name: 'Visible Alice', group: 'included' }]
    const config = {
      type: 'table',
      visualizationType: 'table',
      filters: [{ columnName: 'group', active: 'included', values: ['included', 'excluded'] }],
      data: [{ name: 'Long Alice' }, { name: 'Long Bob' }],
      formattedData: filteredRows,
      originalFormattedData: formattedRows,
      table: { expanded: true, label: 'People' }
    } as any

    render(<DataTableStandAlone visualizationKey='tableA' config={config} />)

    expectRows('runtime-data', filteredRows)
    expectRows('raw-data', formattedRows)
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
