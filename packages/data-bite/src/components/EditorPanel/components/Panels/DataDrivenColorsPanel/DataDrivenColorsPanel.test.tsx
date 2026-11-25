import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import DefaultConfig from '../../../../../../examples/default.json'
import Context from '../../../../../context'
import DataDrivenColorsPanel from './DataDrivenColorsPanel'

vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))

describe('DataDrivenColorsPanel', () => {
  it('renders column selection and mapping actions when a column is selected', () => {
    const config = { ...DefaultConfig, dataColors: { column: 'Category', mappings: [] } }
    render(
      <Context.Provider value={{ config, updateConfig: vi.fn(), data: DefaultConfig.data, editorData: [] }}>
        <DataDrivenColorsPanel />
      </Context.Provider>
    )

    expect(screen.getByLabelText('Color Column')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Add Color Mapping' })).toBeInTheDocument()
  })
})
