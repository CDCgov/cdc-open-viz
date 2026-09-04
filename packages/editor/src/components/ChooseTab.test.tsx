import React from 'react'
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'

import ConfigContext, { EditorDispatchContext } from '@cdc/core/contexts/EditorContext'
import { backfillDefaults } from '@cdc/core/helpers/backfillDefaults'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import chartDefaults from '@cdc/chart/src/data/initial-state'
import { LEGACY_CHART_DEFAULTS } from '@cdc/chart/src/data/legacy-defaults'
import { getModernizationOptions, getModernizationRecipe } from '../helpers/modernizationRecipes'
import ChooseTab from './ChooseTab'

const hydrateFreshChartConfig = (starterConfig: Record<string, any>) => {
  const configWithDefaults = { ...chartDefaults, ...starterConfig }
  const hydratedConfig = coveUpdateWorker(configWithDefaults)
  backfillDefaults(hydratedConfig, chartDefaults, LEGACY_CHART_DEFAULTS)

  const { activeVizButtonID: _activeVizButtonID, newViz: _newViz, ...finalizedConfig } = hydratedConfig
  return finalizedConfig
}

describe('ChooseTab', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('creates a regular Bar starter config with the current thickness', () => {
    const dispatch = vi.fn()

    render(
      <ConfigContext.Provider
        value={
          {
            config: {},
            tempConfig: null,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Bar' }))

    const payload = dispatch.mock.calls.find(([action]) => action.type === 'EDITOR_SET_CONFIG')![0].payload
    expect(payload).toEqual(expect.objectContaining({ visualizationType: 'Bar', barThickness: 0.8, newViz: true }))
  })

  it.each(['Deviation Bar', 'Horizontal Bar (Stacked)', 'Paired Bar'])(
    'creates %s with modern horizontal-axis defaults',
    chartLabel => {
      const dispatch = vi.fn()

      render(
        <ConfigContext.Provider
          value={
            {
              config: {},
              tempConfig: null,
              errors: [],
              currentViewport: 'lg',
              globalActive: 0,
              setTempConfig: vi.fn()
            } as any
          }
        >
          <EditorDispatchContext.Provider value={dispatch}>
            <ChooseTab />
          </EditorDispatchContext.Provider>
        </ConfigContext.Provider>
      )

      fireEvent.click(screen.getByRole('button', { name: chartLabel }))

      const payload = dispatch.mock.calls.find(([action]) => action.type === 'EDITOR_SET_CONFIG')![0].payload
      expect(payload).toEqual(
        expect.objectContaining({
          orientation: 'horizontal',
          newViz: true,
          xAxis: expect.objectContaining({ hideAxis: true, hideTicks: true })
        })
      )
    }
  )

  it('creates stacked horizontal Bar with labels on the date/category axis', () => {
    const dispatch = vi.fn()

    render(
      <ConfigContext.Provider
        value={
          {
            config: {},
            tempConfig: null,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Horizontal Bar (Stacked)' }))

    const payload = dispatch.mock.calls.find(([action]) => action.type === 'EDITOR_SET_CONFIG')![0].payload
    expect(payload.yAxis).toEqual(
      expect.objectContaining({
        labelPlacement: 'On Date/Category Axis',
        numTicks: 4,
        gridLines: true,
        titlePlacement: 'top',
        autoMaxStrategy: 'clean-top-tick'
      })
    )
  })

  it('creates Epi Chart with modern date-axis tick settings', () => {
    const dispatch = vi.fn()

    render(
      <ConfigContext.Provider
        value={
          {
            config: {},
            tempConfig: null,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Epi Chart' }))

    const payload = dispatch.mock.calls.find(([action]) => action.type === 'EDITOR_SET_CONFIG')![0].payload
    expect(payload).toEqual(
      expect.objectContaining({
        isResponsiveTicks: false,
        xAxis: expect.objectContaining({
          dateDisplayFormat: '%b. %-d %Y',
          numTicks: 6,
          viewportNumTicks: { xs: 4, xxs: 4 }
        })
      })
    )
  })

  it('starts every chart choice without applicable modernization options', () => {
    const dispatch = vi.fn()
    const { container } = render(
      <ConfigContext.Provider
        value={
          {
            config: {},
            tempConfig: null,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    const chartButtons = within(container.querySelector('.category_charts') as HTMLElement).getAllByRole('button')
    const modernizationFailures = chartButtons.reduce<Record<string, string[]>>((failures, button) => {
      dispatch.mockClear()
      fireEvent.click(button)

      const setConfigAction = dispatch.mock.calls.find(([action]) => action.type === 'EDITOR_SET_CONFIG')![0]
      const config = hydrateFreshChartConfig(setConfigAction.payload)
      const recipe = getModernizationRecipe(config)
      const optionIds = recipe ? getModernizationOptions(recipe as any).map(option => option.id) : []

      if (optionIds.length) failures[button.getAttribute('aria-label')!] = optionIds
      return failures
    }, {})

    expect(modernizationFailures).toEqual({})
  })

  it('dispatches EDITOR_SAVE once when tempConfig is present', async () => {
    const dispatch = vi.fn()
    const tempConfig = { type: 'chart', data: [{ x: 'A', y: 1 }] }

    render(
      <ConfigContext.Provider
        value={
          {
            config: { type: 'chart' },
            tempConfig,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({ type: 'EDITOR_SAVE', payload: tempConfig })
    })
  })

  it('creates a HeatMap starter config when the HeatMap button is selected', () => {
    const dispatch = vi.fn()

    render(
      <ConfigContext.Provider
        value={
          {
            config: {},
            tempConfig: null,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    expect(
      screen.getByRole('button', { name: 'HeatMap' }).querySelector('.choose-vis__heatmap-icon')
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'HeatMap' }))

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'EDITOR_SET_CONFIG',
        payload: expect.objectContaining({
          visualizationType: 'HeatMap',
          type: 'chart',
          xAxis: expect.objectContaining({
            type: 'categorical'
          }),
          yAxis: expect.objectContaining({
            titlePlacement: 'side'
          }),
          heatmap: expect.objectContaining({
            cellPadding: 2
          }),
          legend: expect.objectContaining({
            position: 'top',
            style: 'gradient',
            subStyle: 'linear blocks',
            label: 'Reported cases'
          })
        })
      })
    )

    const payload = dispatch.mock.calls.find(([action]) => action.type === 'EDITOR_SET_CONFIG')![0].payload
    expect(payload.title).toBe('')
    expect(payload.xAxis.dataKey).toBeUndefined()
    expect(payload.yAxis.label).toBeUndefined()
    expect(payload.series).toEqual([])
  })

  it('keeps the existing config unchanged when the selected visualization is already active', () => {
    const dispatch = vi.fn()
    const config = {
      type: 'dashboard',
      activeVizButtonID: 15,
      dashboard: { title: 'Existing dashboard' },
      rows: [{ columns: [] }],
      visualizations: { existing: { type: 'chart' } },
      datasets: { existingDataset: { data: [{ value: 1 }] } }
    }

    render(
      <ConfigContext.Provider
        value={
          {
            config,
            tempConfig: null,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Dashboard' }))

    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({ type: 'EDITOR_SET_GLOBALACTIVE', payload: 1 })
  })

  it('keeps the existing config when changing visualizations is canceled', () => {
    const dispatch = vi.fn()
    const confirm = vi.spyOn(window, 'confirm').mockReturnValue(false)

    render(
      <ConfigContext.Provider
        value={
          {
            config: {
              type: 'dashboard',
              activeVizButtonID: 15,
              dashboard: { title: 'Existing dashboard' },
              rows: [{ columns: [] }],
              visualizations: {}
            },
            tempConfig: null,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Data Bite' }))

    expect(confirm).toHaveBeenCalledWith(
      'Changing visualization type will clear configuration settings. Do you want to continue?'
    )
    expect(dispatch).not.toHaveBeenCalled()
  })

  it('replaces the existing config when changing visualizations is confirmed', () => {
    const dispatch = vi.fn()
    vi.spyOn(window, 'confirm').mockReturnValue(true)

    render(
      <ConfigContext.Provider
        value={
          {
            config: {
              type: 'dashboard',
              activeVizButtonID: 15,
              dashboard: { title: 'Existing dashboard' },
              rows: [{ columns: [] }],
              visualizations: { existing: { type: 'chart' } },
              datasets: { existingDataset: { data: [{ value: 1 }] } }
            },
            tempConfig: null,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Data Bite' }))

    const setConfigAction = dispatch.mock.calls.find(([action]) => action.type === 'EDITOR_SET_CONFIG')![0]
    expect(setConfigAction.payload).toEqual(
      expect.objectContaining({
        type: 'data-bite',
        visualizationType: null,
        biteStyle: 'tp5',
        activeVizButtonID: 16,
        datasets: {}
      })
    )
    expect(setConfigAction.payload).not.toHaveProperty('dashboard')
    expect(setConfigAction.payload).not.toHaveProperty('rows')
    expect(setConfigAction.payload).not.toHaveProperty('visualizations')
    expect(dispatch).toHaveBeenLastCalledWith({ type: 'EDITOR_SET_GLOBALACTIVE', payload: 1 })
  })

  it('requires confirmation and starts fresh when selecting a different subtype', () => {
    const dispatch = vi.fn()
    const confirm = vi.spyOn(window, 'confirm').mockReturnValue(true)

    render(
      <ConfigContext.Provider
        value={
          {
            config: {
              type: 'chart',
              visualizationType: 'Bar',
              activeVizButtonID: 1,
              title: 'Existing chart',
              datasets: { existingDataset: { data: [{ value: 1 }] } }
            },
            tempConfig: null,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Line' }))

    expect(confirm).toHaveBeenCalledOnce()
    const setConfigAction = dispatch.mock.calls.find(([action]) => action.type === 'EDITOR_SET_CONFIG')![0]
    expect(setConfigAction.payload).toEqual(
      expect.objectContaining({
        type: 'chart',
        visualizationType: 'Line',
        activeVizButtonID: 4,
        datasets: {}
      })
    )
    expect(setConfigAction.payload.title).toBe('')
  })

  it('creates a dashboard starter config with legacy root table output disabled', () => {
    const dispatch = vi.fn()

    render(
      <ConfigContext.Provider
        value={
          {
            config: {},
            tempConfig: null,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Dashboard' }))

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'EDITOR_SET_CONFIG',
        payload: expect.objectContaining({
          type: 'dashboard',
          newViz: true,
          table: {
            label: 'Data Table',
            show: false,
            showDownloadUrl: false,
            downloadUrlLabel: '',
            showDownloadLinkBelow: true,
            showVertical: true
          }
        })
      })
    )
  })

  it('creates a map starter config with the new equal-number legend path enabled', () => {
    const dispatch = vi.fn()

    render(
      <ConfigContext.Provider
        value={
          {
            config: {},
            tempConfig: null,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    fireEvent.click(screen.getByRole('button', { name: 'United States (State- or County-Level)' }))

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'EDITOR_SET_CONFIG',
        payload: expect.objectContaining({
          type: 'map',
          newViz: true,
          general: expect.objectContaining({
            geoType: 'us',
            equalNumberOptIn: true,
            palette: {
              isReversed: false,
              name: 'sequential_blue',
              version: '2.1'
            }
          })
        })
      })
    )
  })

  it('creates a TP5 Gauge starter config when the Gauge Chart button is selected', () => {
    const dispatch = vi.fn()

    render(
      <ConfigContext.Provider
        value={
          {
            config: {},
            tempConfig: null,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Gauge Chart' }))

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'EDITOR_SET_CONFIG',
        payload: expect.objectContaining({
          type: 'waffle-chart',
          visualizationType: 'TP5 Gauge',
          subType: 'TP5 Gauge',
          newViz: true
        })
      })
    )
  })

  it('creates a TP5 Data Bite starter config when the Data Bite button is selected', () => {
    const dispatch = vi.fn()

    render(
      <ConfigContext.Provider
        value={
          {
            config: {},
            tempConfig: null,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Data Bite' }))

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'EDITOR_SET_CONFIG',
        payload: expect.objectContaining({
          type: 'data-bite',
          visualizationType: null,
          biteStyle: 'tp5',
          newViz: true
        })
      })
    )
  })

  it('creates a TP5 Waffle starter config when the Waffle Chart button is selected', () => {
    const dispatch = vi.fn()

    render(
      <ConfigContext.Provider
        value={
          {
            config: {},
            tempConfig: null,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Waffle Chart' }))

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'EDITOR_SET_CONFIG',
        payload: expect.objectContaining({
          type: 'waffle-chart',
          visualizationType: 'TP5 Waffle',
          subType: 'TP5 Waffle',
          newViz: true
        })
      })
    )
  })
})
