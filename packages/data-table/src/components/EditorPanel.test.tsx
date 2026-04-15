import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import EditorPanel from './EditorPanel'
import { getInitialState, reducer } from '../store/dataTable.reducer'

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
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
