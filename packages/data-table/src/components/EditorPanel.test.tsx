import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import EditorPanel from './EditorPanel'

vi.mock('react-accessible-accordion', () => ({
  Accordion: ({ children }) => <div>{children}</div>,
  AccordionItem: ({ children }) => <div>{children}</div>,
  AccordionItemButton: ({ children }) => <button type='button'>{children}</button>,
  AccordionItemHeading: ({ children }) => <div>{children}</div>,
  AccordionItemPanel: ({ children }) => <div>{children}</div>
}))

vi.mock('@cdc/core/components/EditorPanel/ColumnsEditor', () => ({
  default: () => <div data-testid='columns-editor' />
}))

vi.mock('@cdc/core/components/EditorPanel/DataTableEditor', () => ({
  default: () => <div data-testid='data-table-editor' />
}))

vi.mock('@cdc/core/components/EditorPanel/VizFilterEditor', () => ({
  default: () => <div data-testid='viz-filter-editor' />
}))

vi.mock('@cdc/core/components/EditorPanel/EditorPanelDispatch', () => ({
  EditorPanelDispatch: ({ state, dispatch, children }) => <div>{children({ state, dispatch })}</div>
}))

vi.mock('@cdc/core/components/EditorPanel/Inputs', () => ({
  Select: ({ label }) => <label>{label}</label>
}))

vi.mock('@cdc/core/components/ui/Tooltip', () => ({
  default: Object.assign(({ children }) => <div>{children}</div>, {
    Target: ({ children }) => <>{children}</>,
    Content: ({ children }) => <>{children}</>
  })
}))

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: () => <span data-testid='icon' />
}))

vi.mock('@cdc/core/components/AdvancedEditor/AdvancedEditor', () => ({
  default: ({ loadConfig, config, convertStateToConfig }) => {
    const nextConfig = {
      ...config,
      table: { ...config.table, label: 'Edited Table' },
      columns: { ...config.columns, added: { name: 'added', dataTable: true } },
      filters: [{ columnName: 'Category', active: true }],
      filterBehavior: 'intersection',
      filterIntro: 'Updated intro'
    }

    return (
      <div>
        <div data-testid='advanced-editor-config'>{convertStateToConfig().table.label}</div>
        <button type='button' onClick={() => loadConfig(nextConfig)}>
          Apply Advanced Config
        </button>
      </div>
    )
  }
}))

describe('Data Table EditorPanel', () => {
  const state = {
    table: { label: 'Data Table', expanded: true },
    columns: { category: { name: 'category', dataTable: true } },
    filters: [],
    data: [{ category: 'A' }],
    config: {
      type: 'table',
      visualizationType: 'Table',
      locale: 'en-US',
      table: { label: 'Data Table', expanded: true },
      columns: { category: { name: 'category', dataTable: true } },
      filters: [],
      data: [{ category: 'A' }]
    }
  }

  it('renders advanced options in the sidebar editor', () => {
    render(<EditorPanel state={state as any} dispatch={vi.fn()} />)

    expect(screen.getByTestId('advanced-editor-config')).toHaveTextContent('Data Table')
  })

  it('applies advanced config updates through reducer actions', () => {
    const dispatch = vi.fn()
    render(<EditorPanel state={state as any} dispatch={dispatch} />)

    fireEvent.click(screen.getByRole('button', { name: 'Apply Advanced Config' }))

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'SET_CONFIG',
        payload: expect.objectContaining({ filterIntro: 'Updated intro' })
      })
    )
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'SET_TABLE', payload: expect.objectContaining({ label: 'Edited Table' }) })
    )
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'SET_COLUMNS',
        payload: expect.objectContaining({ added: { name: 'added', dataTable: true } })
      })
    )
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'SET_FILTERS', payload: [{ columnName: 'Category', active: true }] })
    )
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'SET_FILTER_BEHAVIOR', payload: 'intersection' })
    )
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'SET_FILTER_INTRO', payload: 'Updated intro' })
    )
  })
})
