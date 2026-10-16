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

const getContext = (secondsPerFrame = 0.5) => {
  const base = createMockConfig()
  const config = createMockConfig({
    visualizationType: 'Line',
    visualizationSubType: 'racing',
    xAxis: { ...base.xAxis, type: 'categorical', dataKey: 'Year', label: 'Year' },
    series: [
      { dataKey: 'North', type: 'Line', axis: 'left' },
      { dataKey: 'South', type: 'Line', axis: 'left' }
    ] as any,
    lineRace: { secondsPerFrame }
  })
  return createMockChartContext(config, { transformedData: data, tableData: data })
}

const installAnimationFrameController = () => {
  let currentTime = 0
  let nextId = 1
  const callbacks = new Map<number, FrameRequestCallback>()
  vi.spyOn(performance, 'now').mockImplementation(() => currentTime)
  const requestAnimationFrame = vi.spyOn(window, 'requestAnimationFrame').mockImplementation(callback => {
    const id = nextId++
    callbacks.set(id, callback)
    return id
  })
  const cancelAnimationFrame = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(id => {
    callbacks.delete(id)
  })

  return {
    requestAnimationFrame,
    cancelAnimationFrame,
    setTime: (time: number) => {
      currentTime = time
    },
    takeNextCallback: () => {
      const next = callbacks.entries().next().value as [number, FrameRequestCallback] | undefined
      if (!next) throw new Error('Expected a queued animation frame')
      callbacks.delete(next[0])
      return next[1]
    },
    pendingCount: () => callbacks.size
  }
}

const renderRace = (context = getContext()) => {
  const race = getLineRaceEligibility(context.config, data)
  return render(
    <ConfigContext.Provider value={context}>
      <LineChartRace parentWidth={700} parentHeight={400} race={race} />
    </ConfigContext.Provider>
  )
}

const getProgress = () => {
  const progress = screen.getByTestId('line-chart').getAttribute('data-progress')
  if (progress === null) throw new Error('Expected the Line race progress attribute')
  return Number(progress)
}

describe('LineChartRace', () => {
  beforeEach(() => {
    vi.stubGlobal('matchMedia', () => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }))
  })
  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  it('plays, pauses, resumes from paused progress, completes, and replays', () => {
    const animationFrames = installAnimationFrameController()
    const context = getContext()
    const { container } = renderRace(context)

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

    const firstFrame = animationFrames.takeNextCallback()
    animationFrames.setTime(600)
    act(() => firstFrame(600))
    expect(screen.getByTestId('line-chart')).toHaveAttribute('data-tooltip-rows', '2')
    expect(getProgress()).toBeCloseTo(0.6)

    fireEvent.click(screen.getByRole('button', { name: 'Pause' }))
    const pausedProgress = getProgress()
    const pausedFrame = frame?.textContent
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument()

    animationFrames.setTime(900)
    expect(getProgress()).toBe(pausedProgress)
    expect(frame).toHaveTextContent(pausedFrame || '')

    fireEvent.click(screen.getByRole('button', { name: 'Play' }))
    const resumedFrame = animationFrames.takeNextCallback()
    animationFrames.setTime(1100)
    act(() => resumedFrame(1100))
    expect(getProgress()).toBeCloseTo(0.8)
    expect(getProgress()).toBeGreaterThan(pausedProgress)

    const finishingFrame = animationFrames.takeNextCallback()
    animationFrames.setTime(1300)
    act(() => finishingFrame(1300))
    expect(screen.getByRole('button', { name: 'Replay' }).querySelector('[data-icon="replay"]')).toBeInTheDocument()
    expect(getProgress()).toBe(1)
    expect(animationFrames.pendingCount()).toBe(0)

    fireEvent.click(screen.getByRole('button', { name: 'Replay' }))
    expect(screen.getByRole('button', { name: 'Pause' })).toBeInTheDocument()
    expect(frame).toHaveTextContent('2020')
    expect(getProgress()).toBe(0)

    const replayFrame = animationFrames.takeNextCallback()
    animationFrames.setTime(1400)
    act(() => replayFrame(1400))
    expect(getProgress()).toBeCloseTo(0.1)
    expect(screen.getByRole('button', { name: 'Pause' })).toBeInTheDocument()
  })

  it('invalidates an already-dispatched animation frame when paused', () => {
    const animationFrames = installAnimationFrameController()
    const { container } = renderRace()

    fireEvent.click(screen.getByRole('button', { name: 'Play' }))
    const firstFrame = animationFrames.takeNextCallback()
    animationFrames.setTime(600)
    act(() => firstFrame(600))

    const dispatchedStaleFrame = animationFrames.takeNextCallback()
    fireEvent.click(screen.getByRole('button', { name: 'Pause' }))
    const pausedProgress = getProgress()
    const pausedFrame = container.querySelector('.line-chart-race__frame')?.textContent
    const requestCountAtPause = animationFrames.requestAnimationFrame.mock.calls.length

    animationFrames.setTime(900)
    act(() => dispatchedStaleFrame(900))

    expect(getProgress()).toBe(pausedProgress)
    expect(container.querySelector('.line-chart-race__frame')).toHaveTextContent(pausedFrame || '')
    expect(animationFrames.requestAnimationFrame).toHaveBeenCalledTimes(requestCountAtPause)
    expect(animationFrames.cancelAnimationFrame).toHaveBeenCalled()
  })

  it('uses continuous playback when reduced motion is preferred', () => {
    vi.stubGlobal('matchMedia', () => ({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() }))
    const animationFrames = installAnimationFrameController()
    renderRace()

    fireEvent.click(screen.getByRole('button', { name: 'Play' }))
    expect(screen.getByRole('button', { name: 'Pause' })).toBeInTheDocument()
    expect(getProgress()).toBe(0)

    const firstFrame = animationFrames.takeNextCallback()
    animationFrames.setTime(250)
    act(() => firstFrame(250))

    expect(getProgress()).toBeCloseTo(0.25)
    expect(screen.getByRole('button', { name: 'Pause' })).toBeInTheDocument()
  })

  it('completes immediately without scheduling animation frames when timing is zero', () => {
    const animationFrames = installAnimationFrameController()
    renderRace(getContext(0))

    fireEvent.click(screen.getByRole('button', { name: 'Play' }))

    expect(screen.getByRole('button', { name: 'Replay' })).toBeInTheDocument()
    expect(getProgress()).toBe(1)
    expect(animationFrames.requestAnimationFrame).not.toHaveBeenCalled()
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
