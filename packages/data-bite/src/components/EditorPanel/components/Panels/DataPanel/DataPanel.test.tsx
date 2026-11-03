import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import DefaultConfig from '../../../../../../examples/default.json'
import Context from '../../../../../context'
import DataPanel from './DataPanel'

vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))

describe('DataPanel', () => {
  it('preserves formatting, Trend, and Filters composition order', () => {
    render(
      <Context.Provider
        value={{ config: DefaultConfig, updateConfig: vi.fn(), data: DefaultConfig.data, editorData: [] }}
      >
        <DataPanel />
      </Context.Provider>
    )

    const formatting = screen.getByText('Number Formatting')
    const trend = screen.getByText('Trend Indicator')
    const filters = screen.getByText('Data Point Filters')

    expect(formatting.compareDocumentPosition(trend) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(trend.compareDocumentPosition(filters) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(screen.getAllByRole('separator')).toHaveLength(2)
  })
})
