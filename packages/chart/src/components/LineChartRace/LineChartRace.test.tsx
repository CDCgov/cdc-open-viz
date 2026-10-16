import React, { useContext } from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../ConfigContext'
import { createMockChartContext, createMockConfig } from '../LinearChart/tests/mockConfigContext'
import LineChartRace from './LineChartRace'
import { getLineRaceEligibility } from './helpers'

vi.mock('../LinearChart', () => ({
  default: React.forwardRef((_props: any, _ref) => {
    const context = useContext(ConfigContext) as any
    return (
      <svg
        data-testid='line-chart'
        data-tooltip-rows={context.tableData?.length}
        data-rendered-rows={context.transformedData?.length}
        data-progress={context.lineRaceProgress}
      />
    )
  })
}))

const data = [
  { Year: '2020', North: 10, South: 20 },
  { Year: '2021', North: 30, South: 15 },
  { Year: '2022', North: 25, South: 40 }
]

const getContext = () => {
  const base = createMockConfig()
  const config = createMockConfig({
    visualizationType: 'Line',
    visualizationSubType: 'racing',
    xAxis: { ...base.xAxis, type: 'categorical', dataKey: 'Year', label: 'Year' },
    series: [
      { dataKey: 'North', type: 'Line', axis: 'left' },
      { dataKey: 'South', type: 'Line', axis: 'left' }
    ] as any
  })
  return createMockChartContext(config, { transformedData: data, tableData: data })
}

describe('LineChartRace', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.stubGlobal('matchMedia', () => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }))
  })
  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it('starts paused and advances tooltip rows with continuous path progress', () => {
    const context = getContext()
    const race = getLineRaceEligibility(context.config, data)
    render(
      <ConfigContext.Provider value={context}>
        <LineChartRace parentWidth={700} parentHeight={400} race={race} />
      </ConfigContext.Provider>
    )

    expect(screen.getByTestId('line-chart')).toHaveAttribute('data-tooltip-rows', '1')
    expect(screen.getByTestId('line-chart')).toHaveAttribute('data-rendered-rows', '3')
    expect(screen.getByTestId('line-chart')).toHaveAttribute('data-progress', '0')
    const playButton = screen.getByRole('button', { name: 'Play' })
    expect(playButton.querySelector('[data-icon="play"]')).toBeInTheDocument()
    fireEvent.click(playButton)
    expect(screen.getByRole('button', { name: 'Pause' }).querySelector('[data-icon="pause"]')).toBeInTheDocument()
    act(() => vi.advanceTimersByTime(600))
    expect(screen.getByTestId('line-chart')).toHaveAttribute('data-tooltip-rows', '2')
    expect(Number(screen.getByTestId('line-chart').getAttribute('data-progress'))).toBeGreaterThan(0)
    act(() => vi.advanceTimersByTime(600))
    expect(screen.getByRole('button', { name: 'Replay' }).querySelector('[data-icon="replay"]')).toBeInTheDocument()
  })
})
