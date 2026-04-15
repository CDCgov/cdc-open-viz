import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import EditorPanel from './EditorPanel'
import { getInitialState, reducer } from '../store/dataTable.reducer'

vi.mock('react-accessible-accordion', () => ({
  Accordion: ({ children }) => <div>{children}</div>,
  AccordionItem: ({ children }) => <div>{children}</div>,
  AccordionItemButton: ({ children }) => <button type='button'>{children}</button>,
  AccordionItemHeading: ({ children }) => <div>{children}</div>,
  AccordionItemPanel: ({ children }) => <div>{children}</div>
}))

vi.mock('@hello-pangea/dnd', () => ({
  DragDropContext: ({ children }) => <div>{children}</div>,
  Droppable: ({ children }) =>
    children(
      {
        innerRef: () => {},
        droppableProps: {},
        placeholder: null
      },
      { isDraggingOver: false }
    ),
  Draggable: ({ children }) =>
    children(
      {
        innerRef: () => {},
        draggableProps: { style: {} },
        dragHandleProps: {}
      },
      { isDragging: false }
    )
}))

vi.mock('@cdc/core/components/EditorPanel/ColumnsEditor', () => ({
  default: () => <div data-testid='columns-editor' />
}))

vi.mock('@cdc/core/components/EditorPanel/DataTableEditor', () => ({
  default: () => <div data-testid='data-table-editor' />
}))

vi.mock('@cdc/core/components/EditorPanel/EditorPanelDispatch', () => ({
  EditorPanelDispatch: ({ state, dispatch, children }) => <div>{children({ state, dispatch })}</div>
}))

vi.mock('@cdc/core/components/ui/Tooltip', () => ({
  default: Object.assign(({ children }) => <div>{children}</div>, {
    Target: ({ children }) => <>{children}</>,
    Content: ({ children }) => <>{children}</>
  })
}))

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
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

const baseState = {
  ...getInitialState(true),
  config: {
    type: 'table',
    table: { label: 'Data Table', show: true, expanded: true, defaultSort: {} },
    columns: {
      Region: { name: 'Region', label: 'Region', dataTable: true },
      Value: { name: 'Value', label: 'Value', dataTable: true }
    },
    filterBehavior: 'Filter Change',
    filters: [
      {
        id: 1,
        filterStyle: 'dropdown',
        columnName: 'Region',
        label: 'Region',
        values: ['North', 'South'],
        active: 'North',
        defaultValue: 'North',
        showDropdown: true,
        order: 'asc',
        parents: []
      }
    ],
    locale: 'en-US'
  },
  table: { label: 'Data Table', show: true, expanded: true, defaultSort: {} },
  columns: {
    Region: { name: 'Region', label: 'Region', dataTable: true },
    Value: { name: 'Value', label: 'Value', dataTable: true }
  },
  data: [
    { Region: 'North', Value: 1 },
    { Region: 'South', Value: 2 }
  ],
  filters: [
    {
      id: 1,
      filterStyle: 'dropdown',
      columnName: 'Region',
      label: 'Region',
      values: ['North', 'South'],
      active: 'North',
      defaultValue: 'North',
      showDropdown: true,
      order: 'asc',
      parents: []
    }
  ],
  filterBehavior: 'Filter Change',
  filterIntro: ''
} as any

describe('DataTable EditorPanel filters', () => {
  it('updates the first filter when Show Filter is unchecked', () => {
    const Wrapper = () => {
      const [state, dispatch] = React.useReducer(reducer, baseState)
      return <EditorPanel state={state} dispatch={dispatch} />
    }

    render(<Wrapper />)

    fireEvent.click(screen.getByRole('button', { name: 'Filters' }))

    const checkbox = screen.getByRole('checkbox', { name: 'Show Filter' }) as HTMLInputElement
    expect(checkbox).toBeChecked()

    fireEvent.click(checkbox)

    expect(screen.getByRole('checkbox', { name: 'Show Filter' })).not.toBeChecked()
  })
})

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
