import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../ConfigContext'
import { createMockChartContext, createMockConfig } from '../LinearChart/tests/mockConfigContext'
import BarChartRace from './BarChartRace'
import { getBarRaceEligibility } from './helpers'

const data = [
  { Year: '2020', Place: 'Alpha', Value: 10 },
  { Year: '2020', Place: 'Beta', Value: 20 },
  { Year: '2021', Place: 'Alpha', Value: 30 },
  { Year: '2021', Place: 'Beta', Value: 15 }
]

const getRaceContext = (rows = data) => {
  const baseConfig = createMockConfig()
  const config = createMockConfig({
    visualizationType: 'Bar',
    visualizationSubType: 'racing',
    orientation: 'horizontal',
    barStyle: 'flat',
    isLollipopChart: false,
    barRace: { maxBars: 2 },
    xAxis: { ...baseConfig.xAxis, type: 'categorical', dataKey: 'Year', label: 'Year' },
    series: [{ dataKey: 'Value', dynamicCategory: 'Place', axis: 'left', type: 'Bar' }] as any,
    columns: { Value: { name: 'Value', label: 'Value', prefix: '$', roundToPlace: 0 } } as any,
    runtime: { ...baseConfig.runtime, seriesKeys: ['Alpha', 'Beta'], seriesLabelsAll: ['Alpha', 'Beta'] }
  })
  return createMockChartContext(config, {
    transformedData: rows,
    colorScale: category => (category === 'Alpha' ? '#005ea8' : '#712177'),
    formatNumber: (value, _axis, _abbreviated, prefix = '', suffix = '') => `${prefix}${value}${suffix}`
  })
}

const renderRace = (rows = data) => {
  const context = getRaceContext(rows)
  const race = getBarRaceEligibility(context.config, rows)

  return render(
    <ConfigContext.Provider value={context}>
      <BarChartRace parentWidth={700} race={race} />
    </ConfigContext.Provider>
  )
}

describe('BarChartRace', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.stubGlobal('matchMedia', () => ({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    }))
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it('starts paused, advances, pauses, and replays from the first frame', () => {
    const { container } = renderRace()

    const frame = container.querySelector('.bar-chart-race__frame')
    const frameAxis = screen.getByRole('group', { name: 'Year axis' })
    expect(frame).toHaveTextContent('2020')
    expect(frameAxis).toHaveTextContent('2020')
    expect(frameAxis).toHaveTextContent('2021')
    expect(frameAxis.querySelector('[aria-current="step"]')).toHaveTextContent('2020')
    fireEvent.click(screen.getByRole('button', { name: 'Play' }))
    act(() => vi.advanceTimersByTime(1000))
    expect(frame).toHaveTextContent('2021')
    expect(frameAxis.querySelector('[aria-current="step"]')).toHaveTextContent('2021')
    expect(screen.getByRole('button', { name: 'Replay' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Replay' }))
    expect(frame).toHaveTextContent('2020')
    expect(screen.getByRole('button', { name: 'Pause' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Pause' }))
    act(() => vi.advanceTimersByTime(1000))
    expect(frame).toHaveTextContent('2020')
  })

  it('uses stable category colors, column formatting, and the standard chart tooltip markup', () => {
    const { container } = renderRace()
    const alphaRow = container.querySelector('[data-category="Alpha"]') as HTMLElement

    expect(alphaRow.querySelector('.bar-chart-race__bar')).toHaveStyle({ backgroundColor: '#005ea8' })
    expect(alphaRow).toHaveTextContent('$10')
    expect(alphaRow.dataset.tooltipHtml).toContain('class="tooltip-heading">2020')
    expect(alphaRow.dataset.tooltipHtml).toContain('Alpha: $10')
    expect(alphaRow.dataset.tooltipId).toContain('cdc-open-viz-tooltip-')
    expect(container.querySelector('.bar-chart-race__tooltip')).not.toBeInTheDocument()
  })

  it('clears playback timers when unmounted', () => {
    const clearIntervalSpy = vi.spyOn(window, 'clearInterval')
    const view = renderRace()
    fireEvent.click(screen.getByRole('button', { name: 'Play' }))
    view.unmount()
    expect(clearIntervalSpy).toHaveBeenCalled()
  })

  it('resets to the first paused frame when visible data changes', () => {
    const context = getRaceContext()
    const race = getBarRaceEligibility(context.config, data)
    const view = render(
      <ConfigContext.Provider value={context}>
        <BarChartRace parentWidth={700} race={race} />
      </ConfigContext.Provider>
    )
    fireEvent.click(screen.getByRole('button', { name: 'Play' }))
    act(() => vi.advanceTimersByTime(1000))
    expect(view.container.querySelector('.bar-chart-race__frame')).toHaveTextContent('2021')

    const nextRows = [...data, { Year: '2022', Place: 'Alpha', Value: 50 }, { Year: '2022', Place: 'Beta', Value: 45 }]
    view.rerender(
      <ConfigContext.Provider value={{ ...context, transformedData: nextRows }}>
        <BarChartRace parentWidth={700} race={getBarRaceEligibility(context.config, nextRows)} />
      </ConfigContext.Provider>
    )

    expect(view.container.querySelector('.bar-chart-race__frame')).toHaveTextContent('2020')
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument()
  })
})
