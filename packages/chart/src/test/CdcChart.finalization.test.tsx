import React from 'react'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest'
import EditorContext from '@cdc/core/contexts/EditorContext'
import { performAndAssert } from '@cdc/core/helpers/testing'
import CdcChart from '../CdcChartComponent'

const renderedChartConfigs = vi.hoisted(() => [] as any[])

const canvasContext = vi.hoisted(() =>
  vi
    .spyOn((globalThis as any).HTMLCanvasElement.prototype, 'getContext')
    .mockImplementation(() => ({ measureText: (text = '') => ({ width: String(text).length * 8 }) }))
)

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: ({ display }) => React.createElement('span', { 'data-icon': display })
}))

vi.mock('@visx/responsive/lib/components/ParentSize', () => ({
  default: ({ children }) => children({ width: 640, height: 360 })
}))

vi.mock('../components/LinearChart', async () => {
  const React = await vi.importActual<typeof import('react')>('react')
  const { default: ConfigContext } = await vi.importActual<typeof import('../ConfigContext')>('../ConfigContext')

  return {
    default: React.forwardRef(() => {
      const { config } = React.useContext(ConfigContext)
      renderedChartConfigs.push(config)
      return React.createElement('div', { 'data-testid': 'mock-linear-chart' })
    })
  }
})

vi.mock('../components/EditorPanel', async () => {
  const React = await vi.importActual<typeof import('react')>('react')
  const { default: ConfigContext } = await vi.importActual<typeof import('../ConfigContext')>('../ConfigContext')

  return {
    default: () => {
      const { config, setConfig } = React.useContext(ConfigContext)
      return React.createElement(
        'button',
        {
          'data-testid': 'complete-chart',
          onClick: () => setConfig({ ...config, xAxis: { ...config.xAxis, dataKey: 'category' } })
        },
        'Complete chart'
      )
    }
  }
})

const getConfig = (overrides = {}) =>
  ({
    type: 'chart',
    visualizationType: 'Line',
    data: [{ category: 'A', value: 1 }],
    xAxis: { dataKey: 'category' },
    series: [{ dataKey: 'value' }],
    newViz: true,
    ...overrides
  } as any)

const renderChart = (config, props = {}) => {
  const setTempConfig = vi.fn()
  const result = render(
    <EditorContext.Provider value={{ setTempConfig } as any}>
      <CdcChart config={config} interactionLabel='chart-finalization-test' {...props} />
    </EditorContext.Provider>
  )

  return { ...result, setTempConfig }
}

describe('CdcChart new visualization finalization', () => {
  beforeEach(() => {
    renderedChartConfigs.length = 0
  })

  afterAll(() => canvasContext.mockRestore())

  it('finalizes an initially valid standalone editor chart before saving and rendering', async () => {
    const { setTempConfig } = renderChart(getConfig(), { isEditor: true })

    await waitFor(() => expect(setTempConfig).toHaveBeenCalled())
    const savedConfig = setTempConfig.mock.calls.at(-1)?.[0]

    expect(savedConfig).not.toHaveProperty('newViz')
    await waitFor(() => expect(renderedChartConfigs.at(-1)).not.toHaveProperty('newViz'))
    expect(renderedChartConfigs.at(-1)).toBe(savedConfig)
  })

  it('keeps an incomplete standalone editor chart unfinished', async () => {
    const { container, setTempConfig } = renderChart(getConfig({ xAxis: { dataKey: '' } }), { isEditor: true })

    await waitFor(() => expect(setTempConfig).toHaveBeenCalled())
    expect(setTempConfig.mock.calls.at(-1)?.[0]).toHaveProperty('newViz', true)
    await waitFor(() => expect(container.querySelector('.chart-required-fields-alerts')).toBeInTheDocument())
    expect(renderedChartConfigs).toHaveLength(0)
  })

  it('finalizes a new chart when an editor update completes its requirements', async () => {
    const { getByTestId, setTempConfig } = renderChart(getConfig({ xAxis: { dataKey: '' } }), { isEditor: true })

    await waitFor(() => expect(setTempConfig.mock.calls.at(-1)?.[0]).toHaveProperty('newViz', true))
    await performAndAssert(
      'Completing the final requirement finalizes the saved chart',
      () => setTempConfig.mock.calls.at(-1)?.[0]?.newViz,
      () => userEvent.click(getByTestId('complete-chart')),
      (before, after) => before === true && after === undefined
    )
    await waitFor(() => expect(renderedChartConfigs.at(-1)).not.toHaveProperty('newViz'))
  })

  it('preserves an existing chart with an explicit false newViz flag', async () => {
    const config = getConfig({ newViz: false })
    const { setTempConfig } = renderChart(config, { isEditor: true })

    await waitFor(() => expect(setTempConfig).toHaveBeenCalled())
    expect(setTempConfig.mock.calls.at(-1)?.[0]).toHaveProperty('newViz', false)
    await waitFor(() => expect(renderedChartConfigs.length).toBeGreaterThan(0))
  })

  it('does not finalize or propagate a dashboard chart', async () => {
    const { setTempConfig } = renderChart(getConfig(), { isDashboard: true, isEditor: true })

    await waitFor(() => expect(renderedChartConfigs.at(-1)).toHaveProperty('newViz', true))
    expect(setTempConfig).not.toHaveBeenCalled()
  })

  it('continues to suppress unfinished charts at runtime', async () => {
    const { container, setTempConfig } = renderChart(getConfig())

    await waitFor(() => expect(container.querySelector('.loading')).not.toBeInTheDocument())
    expect(container.querySelector('.cove-visualization__body')).not.toBeInTheDocument()
    expect(renderedChartConfigs).toHaveLength(0)
    expect(setTempConfig).not.toHaveBeenCalled()
  })
})
