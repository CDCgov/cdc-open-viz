import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CdcDataTable from '../CdcDataTable'

const capturedProps = vi.hoisted(() => ({ current: null as any }))

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock)

vi.mock('@cdc/core/components/DataTable', () => ({
  default: props => {
    capturedProps.current = props
    return <div data-testid='mock-data-table' />
  }
}))

vi.mock('@cdc/core/components/Filters', () => ({
  default: () => <div data-testid='mock-filters' />
}))

vi.mock('@cdc/core/components/Layout', () => ({
  VisualizationContainer: React.forwardRef(({ children, editorPanel }, _ref) => (
    <div>
      {editorPanel}
      {children}
    </div>
  )),
  VisualizationContent: ({ children }) => <div>{children}</div>
}))

vi.mock('../components/EditorPanel', () => ({
  default: () => <div data-testid='mock-editor-panel' />
}))

describe('CdcDataTable CSV data sources', () => {
  it('passes full data as rawData and filtered data as runtimeData', async () => {
    const config = {
      type: 'table',
      visualizationType: null,
      table: {
        label: 'Data Table',
        expanded: true,
        show: true,
        defaultSort: {},
        download: true,
        downloadVisibleDataOnly: false
      },
      columns: {
        category: { name: 'category', dataTable: false },
        value: { name: 'value', dataTable: true }
      },
      data: [
        { category: 'A', value: 1 },
        { category: 'B', value: 2 }
      ],
      filters: [
        {
          id: 1,
          columnName: 'category',
          values: ['A', 'B'],
          active: 'A',
          filterStyle: 'dropdown',
          showDropdown: true,
          order: 'asc',
          parents: []
        }
      ]
    } as any

    render(<CdcDataTable config={config} isEditor={false} />)

    await waitFor(() => {
      expect(capturedProps.current).toBeTruthy()
    })

    expect(capturedProps.current.rawData).toEqual(config.data)
    expect(capturedProps.current.runtimeData).toEqual([{ category: 'A', value: 1 }])
  })
})
