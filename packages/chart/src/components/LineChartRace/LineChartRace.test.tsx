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
      <>
        <svg
          data-testid='line-chart'
          data-tooltip-rows={context.tableData?.length}
          data-rendered-rows={context.transformedData?.length}
          data-progress={context.lineRaceProgress}
        />
        <button
          type='button'
          onClick={() =>
            context.updateConfig(
              {
                ...context.config,
                annotations: [{ ...context.config.annotations[0], dx: 24, dy: 36 }]
              },
              annotationDataOverride
            )
          }
        >
          Persist annotation
        </button>
      </>
    )
  })
}))

const data = [
  { Year: '2020', North: 10, South: 20 },
  { Year: '2021', North: 30, South: 15 },
  { Year: '2022', North: 25, South: 40 }
]
const annotationDataOverride = [{ Year: '2020', North: 12, South: 20 }]

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
    const { container } = render(
      <ConfigContext.Provider value={context}>
        <LineChartRace parentWidth={700} parentHeight={400} race={race} />
      </ConfigContext.Provider>
    )

    expect(screen.getByTestId('line-chart')).toHaveAttribute('data-tooltip-rows', '1')
    expect(screen.getByTestId('line-chart')).toHaveAttribute('data-rendered-rows', '3')
    expect(screen.getByTestId('line-chart')).toHaveAttribute('data-progress', '0')
    const playButton = screen.getByRole('button', { name: 'Play' })
    const frame = container.querySelector('.line-chart-race__frame')
    expect(frame).not.toBeNull()
    expect(container.querySelector('.line-chart-race__header')?.firstElementChild).toBe(playButton)
    expect(playButton.nextElementSibling).toBe(frame)
    expect(playButton.querySelector('[data-icon="play"]')).toBeInTheDocument()
    fireEvent.click(playButton)
    expect(screen.getByRole('button', { name: 'Pause' }).querySelector('[data-icon="pause"]')).toBeInTheDocument()
    act(() => vi.advanceTimersByTime(600))
    expect(screen.getByTestId('line-chart')).toHaveAttribute('data-tooltip-rows', '2')
    expect(Number(screen.getByTestId('line-chart').getAttribute('data-progress'))).toBeGreaterThan(0)
    act(() => vi.advanceTimersByTime(600))
    expect(screen.getByRole('button', { name: 'Replay' }).querySelector('[data-icon="replay"]')).toBeInTheDocument()
  })

  it('preserves authored race fields when the inner chart persists an annotation update', () => {
    const baseContext = getContext()
    const updateConfig = vi.fn()
    const annotation = { text: 'Original annotation', dx: 0, dy: 0 }
    const initialConfig = {
      ...baseContext.config,
      visualizationSubType: 'racing',
      allowLineToBarGraph: undefined,
      animate: true,
      annotations: [annotation]
    } as any

    const StatefulRaceHarness = () => {
      const [config, setConfig] = React.useState(initialConfig)
      const race = getLineRaceEligibility(config, data)
      const context = {
        ...baseContext,
        config,
        updateConfig: (nextConfig: typeof initialConfig, dataOverride?: any[]) => {
          updateConfig(nextConfig, dataOverride)
          setConfig(nextConfig)
        }
      } as any

      return (
        <ConfigContext.Provider value={context}>
          {config.visualizationSubType === 'racing' && race.eligible ? (
            <LineChartRace parentWidth={700} parentHeight={400} race={race} />
          ) : null}
        </ConfigContext.Provider>
      )
    }

    render(<StatefulRaceHarness />)

    fireEvent.click(screen.getByRole('button', { name: 'Persist annotation' }))

    expect(updateConfig).toHaveBeenCalledTimes(1)
    const [updatedConfig, dataOverride] = updateConfig.mock.calls[0]
    expect(updatedConfig).toEqual(
      expect.objectContaining({
        visualizationSubType: 'racing',
        allowLineToBarGraph: undefined,
        animate: true,
        annotations: [{ ...annotation, dx: 24, dy: 36 }]
      })
    )
    expect(dataOverride).toBe(annotationDataOverride)
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument()
  })
})
