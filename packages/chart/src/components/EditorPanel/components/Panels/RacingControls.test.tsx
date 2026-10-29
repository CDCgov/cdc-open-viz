import React, { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import ConfigContext from '../../../../ConfigContext'
import type { ChartConfig } from '../../../../types/ChartConfig'
import { createMockChartContext } from '../../../LinearChart/tests/mockConfigContext'
import EditorPanelContext from '../../EditorPanelContext'
import barRaceConfig from '../../../../../examples/feature/bar/bar-chart-race-annual-change.json'
import lineRaceConfig from '../../../../../examples/feature/line/line-chart-race.json'
import RacingControls from './RacingControls'

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
    </ConfigContext.Provider>
  )
}

const getSubtypeValues = () =>
  Array.from((screen.getByLabelText('Chart Subtype') as HTMLSelectElement).options).map(option => option.value)

describe('RacingControls', () => {
  it('shows and applies the Bar racing option for an eligible new chart', () => {
    const { updateConfig, updateField } = renderControls({
      ...barRaceConfig,
      visualizationSubType: 'regular'
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

  it('hides the Bar racing option for an ineligible new chart', () => {
    renderControls({
      ...barRaceConfig,
      visualizationSubType: 'regular',
      data: []
    } as ChartConfig)

    expect(getSubtypeValues()).toEqual(['regular', 'stacked'])
  })

  it('keeps the option visible for an ineligible existing Bar race outside COVE developer mode', () => {
    renderControls({ ...barRaceConfig, data: [] } as ChartConfig)

    expect(getSubtypeValues()).toEqual(['regular', 'stacked', 'racing'])
    expect(screen.getByLabelText('Chart Subtype')).toHaveValue('racing')
  })

  it('keeps the Bar racing option available after an existing race switches to Standard', () => {
    render(<StatefulControls initialConfig={barRaceConfig as ChartConfig} />)

    fireEvent.change(screen.getByLabelText('Chart Subtype'), { target: { value: 'regular' } })

    expect(screen.getByLabelText('Chart Subtype')).toHaveValue('regular')
    expect(getSubtypeValues()).toEqual(['regular', 'stacked', 'racing'])
  })

  it('does not gate Line racing', () => {
    renderControls({ ...lineRaceConfig, visualizationSubType: 'regular' } as ChartConfig)

    expect(getSubtypeValues()).toEqual(['regular', 'racing'])
  })
})
