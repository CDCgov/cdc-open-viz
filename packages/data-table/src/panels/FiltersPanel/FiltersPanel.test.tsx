import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import FiltersPanel from './FiltersPanel'

vi.mock('react-accessible-accordion', () => ({
  AccordionItem: ({ children }) => <div>{children}</div>,
  AccordionItemButton: ({ children }) => <button type='button'>{children}</button>,
  AccordionItemHeading: ({ children }) => <div>{children}</div>,
  AccordionItemPanel: ({ children }) => <div>{children}</div>
}))

vi.mock('@cdc/core/components/EditorPanel/VizFilterEditor', () => ({
  default: ({ rawData, updateField }) => (
    <div data-testid='filter-editor' data-rows={rawData.length}>
      <button type='button' onClick={() => updateField(null, null, 'filters', [{ columnName: 'Region' }])}>
        Update Filters
      </button>
      <button type='button' onClick={() => updateField(null, null, 'filterIntro', 'Choose a region')}>
        Update Filter Intro
      </button>
      <button type='button' onClick={() => updateField(null, null, 'filterBehavior', 'Apply')}>
        Update Filter Behavior
      </button>
    </div>
  )
}))

describe('FiltersPanel', () => {
  it('renders source data and forwards filter updates', () => {
    const updateFilters = vi.fn()

    render(
      <FiltersPanel
        config={{ type: 'table' } as any}
        data={[{ Region: 'North' }, { Region: 'South' }]}
        updateFilters={updateFilters}
      />
    )

    expect(screen.getByRole('button', { name: 'Filters' })).toBeInTheDocument()
    expect(screen.getByTestId('filter-editor')).toHaveAttribute('data-rows', '2')

    fireEvent.click(screen.getByRole('button', { name: 'Update Filters' }))
    expect(updateFilters).toHaveBeenCalledWith(null, null, 'filters', [{ columnName: 'Region' }])

    fireEvent.click(screen.getByRole('button', { name: 'Update Filter Intro' }))
    expect(updateFilters).toHaveBeenCalledWith(null, null, 'filterIntro', 'Choose a region')

    fireEvent.click(screen.getByRole('button', { name: 'Update Filter Behavior' }))
    expect(updateFilters).toHaveBeenCalledWith(null, null, 'filterBehavior', 'Apply')
  })
})
