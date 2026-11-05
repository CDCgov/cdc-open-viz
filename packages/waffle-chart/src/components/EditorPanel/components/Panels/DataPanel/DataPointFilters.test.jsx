import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import ConfigContext from '../../../../../ConfigContext'
import InitialState from '../../../../../data/initial-state'
import DataPointFilters from './DataPointFilters'

vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))

describe('DataPointFilters', () => {
  it('preserves add, update, dependent values, and removal behavior', () => {
    const updateConfig = vi.fn()
    const config = {
      ...InitialState,
      filters: [{ columnName: 'Region', columnValue: 'North' }]
    }
    render(
      <ConfigContext.Provider value={{ config, updateConfig }}>
        <DataPointFilters
          columns={['Category', 'Region']}
          columnSourceData={[
            { Category: 'A', Region: 'North' },
            { Category: 'B', Region: 'South' }
          ]}
        />
      </ConfigContext.Provider>
    )

    const selects = screen.getAllByRole('combobox')
    expect(selects[1]).toHaveTextContent('North')
    expect(selects[1]).toHaveTextContent('South')

    fireEvent.change(selects[0], { target: { value: 'Category' } })
    expect(updateConfig).toHaveBeenCalledWith(
      expect.objectContaining({ filters: [expect.objectContaining({ columnName: 'Category' })] })
    )

    fireEvent.click(screen.getByRole('button', { name: 'Remove' }))
    expect(updateConfig).toHaveBeenCalledWith(expect.objectContaining({ filters: [] }))

    fireEvent.click(screen.getByRole('button', { name: 'Add Filter' }))
    expect(updateConfig).toHaveBeenCalledWith(expect.objectContaining({ filters: expect.any(Array) }))
  })
})
