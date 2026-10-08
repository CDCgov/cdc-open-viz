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

type RaceOptions = {
  displayNumbersOnBar?: boolean
  labelPlacement?: string
}

const getRaceContext = (rows = data, options: RaceOptions = {}) => {
  const baseConfig = createMockConfig()
  const yAxis = { ...baseConfig.yAxis }
  delete yAxis.labelPlacement
  if (options.labelPlacement) yAxis.labelPlacement = options.labelPlacement
  if (options.displayNumbersOnBar !== undefined) yAxis.displayNumbersOnBar = options.displayNumbersOnBar
  const config = createMockConfig({
    visualizationType: 'Bar',
    visualizationSubType: 'racing',
    orientation: 'horizontal',
    barStyle: 'flat',
    isLollipopChart: false,
    barRace: { maxBars: 2, secondsPerFrame: 0.5 },
    xAxis: { ...baseConfig.xAxis, type: 'categorical', dataKey: 'Year', label: 'Year' },
    yAxis,
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

const renderRace = (rows = data, options: RaceOptions = {}) => {
  const context = getRaceContext(rows, options)
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

  it('uses the on-axis label layout when label placement is missing', () => {
    const { container } = renderRace()

    expect(container.querySelector('.bar-chart-race')).toHaveClass('bar-chart-race--labels-on-axis')
    expect(container.querySelector('.bar-chart-race__plot')).toHaveStyle({ height: '96px' })
  })

  it('uses the on-axis label layout when label placement is explicit', () => {
    const { container } = renderRace(data, { labelPlacement: 'On Date/Category Axis' })

    expect(container.querySelector('.bar-chart-race')).toHaveClass('bar-chart-race--labels-on-axis')
    expect(container.querySelector('.bar-chart-race')).not.toHaveClass('bar-chart-race--labels-below-bar')
  })

  it('moves labels below bars and adds row spacing for the below-bar layout', () => {
    const { container } = renderRace(data, { labelPlacement: 'Below Bar' })

    expect(container.querySelector('.bar-chart-race')).toHaveClass('bar-chart-race--labels-below-bar')
    expect(container.querySelector('.bar-chart-race__plot')).toHaveStyle({ height: '128px' })
  })

  it('keeps value labels after bars when display numbers on bar is disabled', () => {
    const { container } = renderRace(data, { displayNumbersOnBar: false })

    expect(container.querySelectorAll('.bar-chart-race__value')).toHaveLength(2)
    expect(container.querySelectorAll('.bar-chart-race__value--after')).toHaveLength(2)
    expect(container.querySelector('.bar-chart-race__value--inside')).not.toBeInTheDocument()
  })

  it('places displayed values inside fitting bars and after bars that are too short', () => {
    const rows = [
      { Year: '2020', Place: 'Short', Value: 1 },
      { Year: '2020', Place: 'Long', Value: 100 },
      { Year: '2021', Place: 'Short', Value: 2 },
      { Year: '2021', Place: 'Long', Value: 90 }
    ]
    const { container } = renderRace(rows, { displayNumbersOnBar: true })

    expect(container.querySelector('[data-category="Long"] .bar-chart-race__value')).toHaveClass(
      'bar-chart-race__value--inside'
    )
    expect(container.querySelector('[data-category="Short"] .bar-chart-race__value')).toHaveClass(
      'bar-chart-race__value--after'
    )
  })

  it('starts paused, advances, pauses, and replays from the first frame', () => {
    const { container } = renderRace()

    const frame = container.querySelector('.bar-chart-race__frame')
    const frameAxis = screen.getByRole('group', { name: 'Year axis' })
    expect(frame).toHaveTextContent('2020')
    expect(frameAxis).toHaveTextContent('2020')
    expect(frameAxis).toHaveTextContent('2021')
    expect(frameAxis.querySelector('[aria-current="step"]')).toHaveTextContent('2020')
    const playButton = screen.getByRole('button', { name: 'Play' })
    expect(container.querySelector('.bar-chart-race__header')?.firstElementChild).toBe(playButton)
    expect(playButton.nextElementSibling).toBe(frame)
    expect(playButton.querySelector('[data-icon="play"]')).toBeInTheDocument()
    fireEvent.click(playButton)
    expect(screen.getByRole('button', { name: 'Pause' }).querySelector('[data-icon="pause"]')).toBeInTheDocument()
    act(() => vi.advanceTimersByTime(500))
    expect(frame).toHaveTextContent('2021')
    expect(frameAxis.querySelector('[aria-current="step"]')).toHaveTextContent('2021')
    expect(screen.getByRole('button', { name: 'Replay' }).querySelector('[data-icon="replay"]')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Replay' }))
    expect(frame).toHaveTextContent('2020')
    expect(screen.getByRole('button', { name: 'Pause' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Pause' }))
    act(() => vi.advanceTimersByTime(500))
    expect(frame).toHaveTextContent('2020')
  })

  it('uses stable category colors, column formatting, and the standard chart tooltip markup', () => {
    const { container } = renderRace(data, { displayNumbersOnBar: true })
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
    act(() => vi.advanceTimersByTime(500))
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
