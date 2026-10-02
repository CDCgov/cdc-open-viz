import React, { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import ConfigContext from '../../../../ConfigContext'
import type { ChartConfig } from '../../../../types/ChartConfig'
import { createMockChartContext } from '../../../LinearChart/tests/mockConfigContext'
import EditorPanelContext from '../../EditorPanelContext'
import barRaceConfig from '../../../../../examples/feature/bar/bar-chart-race-annual-change.json'
import lineRaceConfig from '../../../../../examples/feature/line/line-chart-race.json'
import RacingControls from './RacingControls'

vi.mock('@cdc/core/components/Alert', () => ({
  default: ({ message }: { message: string }) => <div>{message}</div>
}))

const originalUrl = window.location.href

const renderControls = (config: ChartConfig) => {
  const updateConfig = vi.fn()
  const updateField = vi.fn()

  render(
    <ConfigContext.Provider
      value={createMockChartContext(config, {
        transformedData: config.data,
        updateConfig
      })}
    >
      <EditorPanelContext.Provider value={{ updateField }}>
        <RacingControls />
      </EditorPanelContext.Provider>
    </ConfigContext.Provider>
  )

  return { updateConfig, updateField }
}

const StatefulControls = ({ initialConfig }: { initialConfig: ChartConfig }) => {
  const [config, setConfig] = useState(initialConfig)

  return (
    <ConfigContext.Provider
      value={createMockChartContext(config, {
        transformedData: config.data,
        updateConfig: setConfig
      })}
    >
      <EditorPanelContext.Provider value={{ updateField: vi.fn() }}>
        <RacingControls />
      </EditorPanelContext.Provider>
      <button onClick={() => setConfig(current => ({ ...current, title: 'Updated title' }))}>Update title</button>
      <button
        onClick={() =>
          setConfig(current => ({ ...current, xAxis: { ...current.xAxis, type: 'categorical' as const } }))
        }
      >
        Fix category axis
      </button>
    </ConfigContext.Provider>
  )
}

const getSubtypeValues = () =>
  Array.from((screen.getByLabelText('Chart Subtype') as HTMLSelectElement).options).map(option => option.value)

describe('RacingControls', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', window.location.pathname)
  })

  afterEach(() => {
    window.history.replaceState({}, '', originalUrl)
  })

  it('hides the Bar racing option outside COVE developer mode', () => {
    renderControls({ ...barRaceConfig, visualizationSubType: 'regular' } as ChartConfig)

    expect(getSubtypeValues()).toEqual(['regular', 'stacked'])
  })

  it('shows the Bar racing option for an ineligible chart in COVE developer mode', () => {
    window.history.replaceState({}, '', `${window.location.pathname}?isCoveDeveloper=true`)

    const { updateConfig, updateField } = renderControls({
      ...barRaceConfig,
      visualizationSubType: 'regular',
      data: []
    } as ChartConfig)

    expect(getSubtypeValues()).toEqual(['regular', 'stacked', 'racing'])
    fireEvent.change(screen.getByLabelText('Chart Subtype'), { target: { value: 'racing' } })
    expect(updateField).not.toHaveBeenCalled()
    expect(updateConfig).toHaveBeenCalledTimes(1)
    expect(updateConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        visualizationSubType: 'racing',
        orientation: 'horizontal',
        barStyle: 'flat',
        isLollipopChart: false
      })
    )
  })

  it('keeps Racing selected and its corrective message visible when the chart is ineligible', () => {
    window.history.replaceState({}, '', `${window.location.pathname}?isCoveDeveloper=true`)
    const initialConfig = {
      ...barRaceConfig,
      visualizationSubType: 'regular',
      xAxis: { ...barRaceConfig.xAxis, type: 'date' }
    } as ChartConfig

    render(<StatefulControls initialConfig={initialConfig} />)
    fireEvent.change(screen.getByLabelText('Chart Subtype'), { target: { value: 'racing' } })

    expect(screen.getByLabelText('Chart Subtype')).toHaveValue('racing')
    expect(screen.getByText(/requires a categorical Date\/Category Axis/i)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Update title' }))
    expect(screen.getByText(/requires a categorical Date\/Category Axis/i)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Fix category axis' }))
    expect(screen.queryByText(/requires a categorical Date\/Category Axis/i)).not.toBeInTheDocument()
  })

  it('keeps the option visible for an ineligible existing Bar race outside COVE developer mode', () => {
    renderControls({ ...barRaceConfig, data: [] } as ChartConfig)

    expect(getSubtypeValues()).toEqual(['regular', 'stacked', 'racing'])
    expect(screen.getByLabelText('Chart Subtype')).toHaveValue('racing')
  })

  it('does not gate Line racing', () => {
    renderControls({ ...lineRaceConfig, visualizationSubType: 'regular' } as ChartConfig)

    expect(getSubtypeValues()).toEqual(['regular', 'racing'])
  })
})
