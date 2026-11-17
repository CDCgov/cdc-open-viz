import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import ConfigContext from '../../../../../ConfigContext'
import InitialState from '../../../../../data/initial-state'
import TrendIndicator from './TrendIndicator'

vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))

describe('TrendIndicator', () => {
  it('uses editor data for categorical values and preserves mapping writes', () => {
    const updateConfig = vi.fn()
    const config = {
      ...InitialState,
      dataFunction: 'Sum',
      trendIndicator: { ...InitialState.trendIndicator, mode: 'categorical', column: 'Trend' }
    }
    render(
      <ConfigContext.Provider
        value={{
          config,
          updateConfig,
          data: [{ Trend: 'runtime-only' }],
          editorData: [{ Trend: 'Increasing' }, { Trend: 'Decreasing' }]
        }}
      >
        <TrendIndicator columns={['Trend']} />
      </ConfigContext.Provider>
    )

    expect(screen.getByText('Increasing')).toBeInTheDocument()
    expect(screen.getByText('Decreasing')).toBeInTheDocument()
    expect(screen.queryByText('runtime-only')).not.toBeInTheDocument()

    const selects = screen.getAllByRole('combobox')
    fireEvent.change(selects[2], { target: { value: 'up' } })
    expect(updateConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        trendIndicator: expect.objectContaining({ mappings: [{ sourceValue: 'Decreasing', arrowType: 'up' }] })
      })
    )
  })

  it('preserves the ineligible numeric warning', () => {
    render(
      <ConfigContext.Provider
        value={{
          config: {
            ...InitialState,
            dataFunction: 'Count',
            trendIndicator: { ...InitialState.trendIndicator, mode: 'numeric' }
          },
          updateConfig: vi.fn(),
          data: [],
          editorData: []
        }}
      >
        <TrendIndicator columns={[]} />
      </ConfigContext.Provider>
    )

    expect(screen.getByText(/Numeric mode only supports/)).toBeInTheDocument()
    expect(screen.queryByLabelText('Threshold')).not.toBeInTheDocument()
  })

  it('falls back to runtime data when editor data is empty', () => {
    render(
      <ConfigContext.Provider
        value={{
          config: {
            ...InitialState,
            dataFunction: 'Sum',
            trendIndicator: { ...InitialState.trendIndicator, mode: 'categorical', column: 'Trend' }
          },
          updateConfig: vi.fn(),
          data: [{ Trend: 'runtime-only' }],
          editorData: []
        }}
      >
        <TrendIndicator columns={['Trend']} />
      </ConfigContext.Provider>
    )

    expect(screen.getByText('runtime-only')).toBeInTheDocument()
  })
})
