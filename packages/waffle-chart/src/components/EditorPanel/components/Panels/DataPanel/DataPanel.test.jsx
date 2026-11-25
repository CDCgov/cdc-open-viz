import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import Accordion from '@cdc/core/components/ui/Accordion'

import ConfigContext from '../../../../../ConfigContext'
import InitialState from '../../../../../data/initial-state'
import DataPanel from './DataPanel'

vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))

describe('DataPanel', () => {
  it('uses nonempty editor data for columns and preserves panel composition', () => {
    render(
      <ConfigContext.Provider
        value={{
          config: InitialState,
          updateConfig: vi.fn(),
          data: [{ RuntimeOnly: 1 }],
          editorData: [{ EditorOnly: 2 }]
        }}
      >
        <DataPanel />
      </ConfigContext.Provider>
    )

    const dataColumn = screen.getByLabelText('Data Column')
    expect(dataColumn).toHaveTextContent('EditorOnly')
    expect(dataColumn).not.toHaveTextContent('RuntimeOnly')
    expect(screen.getByText('Trend Indicator')).toBeInTheDocument()
    expect(screen.getByText('Data Point Filters')).toBeInTheDocument()
  })

  it('falls back to runtime data for columns and filter values when editor data is empty', () => {
    render(
      <ConfigContext.Provider
        value={{
          config: {
            ...InitialState,
            filters: [{ columnName: 'Region', columnValue: 'North' }]
          },
          updateConfig: vi.fn(),
          data: [{ RuntimeOnly: 1, Region: 'North' }],
          editorData: []
        }}
      >
        <DataPanel />
      </ConfigContext.Provider>
    )

    expect(screen.getByLabelText('Data Column')).toHaveTextContent('RuntimeOnly')
    expect(screen.getByText('North')).toBeInTheDocument()
  })

  it('preserves invalid comparate validation while the Data accordion is collapsed', async () => {
    const updateConfig = vi.fn()
    const renderCollapsedData = config => (
      <ConfigContext.Provider value={{ config, updateConfig, data: [], editorData: [] }}>
        <Accordion>
          <Accordion.Section title='Data'>
            <DataPanel />
          </Accordion.Section>
        </Accordion>
      </ConfigContext.Provider>
    )

    const validConfig = { ...InitialState, dataConditionalOperator: '>', dataConditionalComparate: '1' }
    const view = render(renderCollapsedData(validConfig))

    expect(screen.getByRole('button', { name: 'Data' })).toHaveAttribute('aria-expanded', 'false')

    view.rerender(renderCollapsedData({ ...validConfig, dataConditionalComparate: 'not-a-number' }))
    await waitFor(() => expect(updateConfig).toHaveBeenCalledWith(expect.objectContaining({ invalidComparate: true })))

    updateConfig.mockClear()
    view.rerender(
      renderCollapsedData({
        ...validConfig,
        dataConditionalComparate: '',
        invalidComparate: true
      })
    )
    await waitFor(() => expect(updateConfig).toHaveBeenCalledWith(expect.objectContaining({ invalidComparate: false })))
  })
})
