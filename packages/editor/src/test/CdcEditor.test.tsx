import React from 'react'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import CdcEditor from '../CdcEditor'
import { modernizationRecipes, ModernizationRecipe } from '../helpers/modernizationRecipes'

const rendererMountIds = vi.hoisted(() => ({ chart: 0, map: 0, dashboard: 0, dataBite: 0, waffle: 0, markup: 0 }))

afterEach(() => {
  cleanup()
})

vi.mock('@cdc/chart/src/CdcChart', async () => {
  const React = await import('react')
  const EditorContext = (await import('@cdc/core/contexts/EditorContext')).default

  const MockChart = ({ config, isEditor }) => {
    const editorContext = React.useContext(EditorContext)
    const [mountId] = React.useState(() => ++rendererMountIds.chart)
    const emittedPreparedConfigRef = React.useRef(false)
    React.useEffect(() => {
      if (isEditor && config.mockPreparedConfig && !emittedPreparedConfigRef.current) {
        emittedPreparedConfigRef.current = true
        editorContext.setTempConfig(config.mockPreparedConfig)
      }
    }, [config, editorContext, isEditor])

    return (
      <div data-testid='mock-chart' data-mount-id={mountId}>
        {isEditor && editorContext.modernStylesAction && (
          <button type='button' onClick={editorContext.modernStylesAction.onClick}>
            {editorContext.modernStylesAction.label}
          </button>
        )}
        <div>titleStyle: {config.titleStyle}</div>
        <div>yAxisTitlePlacement: {config.yAxis?.titlePlacement}</div>
        <div>yAxisNumTicks: {config.yAxis?.numTicks}</div>
        <div>yAxisMin: {config.yAxis?.min}</div>
        <div>legendPosition: {config.legend?.position}</div>
        <div>axisDateDisplayFormat: {config.xAxis?.dateDisplayFormat}</div>
        <div>xAxisTickRotation: {config.xAxis?.tickRotation}</div>
        <div>isResponsiveTicks: {String(config.isResponsiveTicks)}</div>
        <div>dataTableExpanded: {String(config.table?.expanded)}</div>
        <div>legendSingleRow: {String(config.legend?.singleRow)}</div>
        <div>palette: {config.general?.palette?.name}</div>
        {isEditor && (
          <button
            type='button'
            onClick={() => editorContext.setTempConfig({ ...config, title: 'Mutated by editor control' })}
          >
            Mock editor control
          </button>
        )}
      </div>
    )
  }

  return {
    default: MockChart
  }
})

vi.mock('@cdc/dashboard/src/CdcDashboard', async () => {
  const React = await import('react')
  const EditorContext = (await import('@cdc/core/contexts/EditorContext')).default

  const MockDashboard = ({ config, previewBanner, isEditor }) => {
    const editorContext = React.useContext(EditorContext)
    const [mountId] = React.useState(() => ++rendererMountIds.dashboard)
    return (
      <div
        className='type-dashboard'
        data-testid={`mock-dashboard-${isEditor ? 'editor' : 'runtime'}`}
        data-mount-id={mountId}
      >
        {editorContext.modernStylesAction && (
          <button type='button' onClick={editorContext.modernStylesAction.onClick}>
            {editorContext.modernStylesAction.label}
          </button>
        )}
        {previewBanner}
        <div className='editor-heading'>
          <button type='button'>Dashboard Preview</button>
        </div>
        <div className='dashboard-editor-layout'>
          <button
            type='button'
            onClick={() => editorContext.setTempConfig({ ...editorContext.config, title: 'Dashboard mutation' })}
          >
            Dashboard editor control
          </button>
          <button
            type='button'
            onClick={() =>
              editorContext.setTempConfig({
                ...editorContext.config,
                dashboard: {
                  ...editorContext.config.dashboard,
                  downloads: {
                    ...editorContext.config.dashboard?.downloads,
                    downloadImageButton: true,
                    downloadImageButtonStyle: 'button'
                  }
                }
              })
            }
          >
            Enable dashboard image download button
          </button>
        </div>
        <div>dashboardImageDownloadEnabled: {String(config?.dashboard?.downloads?.downloadImageButton)}</div>
        <div>dashboardImageDownloadStyle: {config?.dashboard?.downloads?.downloadImageButtonStyle}</div>
      </div>
    )
  }

  return {
    default: MockDashboard
  }
})

vi.mock('@cdc/map/src/CdcMap', async () => {
  const React = await import('react')
  const EditorContext = (await import('@cdc/core/contexts/EditorContext')).default

  const MockMap = ({ config, isEditor }) => {
    const editorContext = React.useContext(EditorContext)
    const [mountId] = React.useState(() => ++rendererMountIds.map)
    return (
      <div data-testid='mock-map' data-mount-id={mountId}>
        {isEditor && editorContext.modernStylesAction && (
          <button type='button' onClick={editorContext.modernStylesAction.onClick}>
            {editorContext.modernStylesAction.label}
          </button>
        )}
        <div>mapTitleStyle: {config.general?.titleStyle}</div>
      </div>
    )
  }

  return {
    default: MockMap
  }
})
vi.mock('@cdc/data-bite/src/CdcDataBite', async () => {
  const React = await import('react')
  const EditorContext = (await import('@cdc/core/contexts/EditorContext')).default
  const MockDataBite = ({ config, isEditor }) => {
    const editorContext = React.useContext(EditorContext)
    const [mountId] = React.useState(() => ++rendererMountIds.dataBite)
    return (
      <div data-testid={`mock-data-bite-${isEditor ? 'editor' : 'runtime'}`} data-mount-id={mountId}>
        {isEditor && editorContext.modernStylesAction && (
          <button type='button' onClick={editorContext.modernStylesAction.onClick}>
            {editorContext.modernStylesAction.label}
          </button>
        )}
        biteStyle: {config.biteStyle}
      </div>
    )
  }
  return {
    default: MockDataBite
  }
})
vi.mock('@cdc/waffle-chart/src/CdcWaffleChart', async () => {
  const React = await import('react')
  const EditorContext = (await import('@cdc/core/contexts/EditorContext')).default
  const MockWaffleChart = ({ config, isEditor }) => {
    const editorContext = React.useContext(EditorContext)
    const [mountId] = React.useState(() => ++rendererMountIds.waffle)
    return (
      <div data-testid={`mock-waffle-chart-${isEditor ? 'editor' : 'runtime'}`} data-mount-id={mountId}>
        {isEditor && editorContext.modernStylesAction && (
          <button type='button' onClick={editorContext.modernStylesAction.onClick}>
            {editorContext.modernStylesAction.label}
          </button>
        )}
        visualizationType: {config.visualizationType}
      </div>
    )
  }
  return {
    default: MockWaffleChart
  }
})
vi.mock('@cdc/markup-include/src/CdcMarkupInclude', async () => {
  const React = await import('react')
  const EditorContext = (await import('@cdc/core/contexts/EditorContext')).default
  const MockMarkup = ({ config, isEditor }) => {
    const editorContext = React.useContext(EditorContext)
    const [mountId] = React.useState(() => ++rendererMountIds.markup)
    return (
      <div data-testid={`mock-markup-${isEditor ? 'editor' : 'runtime'}`} data-mount-id={mountId}>
        {isEditor && editorContext.modernStylesAction && (
          <button type='button' onClick={editorContext.modernStylesAction.onClick}>
            {editorContext.modernStylesAction.label}
          </button>
        )}
        titleStyle: {config.contentEditor?.titleStyle}
      </div>
    )
  }
  return {
    default: MockMarkup
  }
})
vi.mock('@cdc/data-table/src/CdcDataTable', () => ({ default: () => <div data-testid='mock-data-table' /> }))

const chartConfig = {
  type: 'chart',
  data: [{ category: 'A', value: 1 }],
  formattedData: [{ category: 'A', value: 1 }],
  titleStyle: 'legacy',
  animate: false,
  yAxis: {
    titlePlacement: 'side',
    autoMaxStrategy: 'default',
    hideAxis: false,
    hideTicks: false,
    gridLines: false,
    numTicks: 7,
    min: -5
  },
  isResponsiveTicks: true,
  xAxis: {
    type: 'date-time',
    dateDisplayFormat: '%Y-%m-%d',
    dateParseFormat: '%m/%d/%Y',
    tickRotation: 45
  },
  table: {
    expanded: true,
    dateDisplayFormat: '%B %-d, %Y'
  },
  general: { palette: { name: 'qualitative_bold', version: '2.0', isReversed: true } },
  legend: { position: 'right', singleRow: false, hideBorder: { side: false, topBottom: false } },
  visual: { accent: false, background: false, border: true },
  visualizationType: 'Bar',
  barStyle: 'flat'
}

const renderEditor = (config = chartConfig) => render(<CdcEditor config={config as any} />)

const getLatestConfigEvent = (events: string[]) => JSON.parse(events[events.length - 1])
const modernStylesChartButtonName = 'Preview a modernized version of this chart'
const modernStylesDashboardButtonName = 'Preview a modernized version of this dashboard'
const modernStylesMapButtonName = 'Preview a modernized version of this map'

describe('CdcEditor modern styles preview', () => {
  it('does not show the action when no recipe applies', () => {
    renderEditor({ type: 'map', data: [], formattedData: [] } as any)

    expect(screen.queryByRole('button', { name: modernStylesMapButtonName })).not.toBeInTheDocument()
  })

  it('shows the action when a recipe applies', () => {
    renderEditor()

    expect(screen.getByRole('button', { name: modernStylesChartButtonName })).toBeInTheDocument()
  })

  it('uses the prepared temp config to decide whether the action is available', async () => {
    renderEditor({
      ...chartConfig,
      title: 'Legacy title',
      titleStyle: '',
      mockPreparedConfig: {
        ...chartConfig,
        title: 'Legacy title',
        titleStyle: 'legacy',
        version: '4.26.7',
        general: {
          ...chartConfig.general,
          palette: { name: 'divergent_blue_cyan', version: '2.0', isReversed: false }
        },
        yAxis: {
          ...chartConfig.yAxis,
          titlePlacement: 'top',
          autoMaxStrategy: 'clean-top-tick',
          hideAxis: true,
          hideTicks: true,
          gridLines: true,
          numTicks: 4,
          min: 0
        },
        isResponsiveTicks: false,
        legend: { ...chartConfig.legend, position: 'top' },
        xAxis: { ...chartConfig.xAxis, dateDisplayFormat: '%b. %-d %Y', tickRotation: 0 },
        table: { ...chartConfig.table, expanded: false }
      },
      yAxis: {
        ...chartConfig.yAxis,
        titlePlacement: 'top',
        autoMaxStrategy: 'clean-top-tick',
        hideAxis: true,
        hideTicks: true,
        gridLines: true,
        numTicks: 4,
        min: 0
      },
      isResponsiveTicks: false,
      legend: { ...chartConfig.legend, position: 'top' },
      xAxis: { ...chartConfig.xAxis, dateDisplayFormat: '%b. %-d %Y', tickRotation: 0 },
      table: { ...chartConfig.table, expanded: false }
    } as any)

    await waitFor(() => expect(screen.getByRole('button', { name: modernStylesChartButtonName })).toBeInTheDocument())
    fireEvent.click(screen.getByRole('button', { name: modernStylesChartButtonName }))

    expect(screen.getByText('titleStyle: small')).toBeInTheDocument()
    expect(screen.getByText('palette: divergent_blue_cyan')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Current version' }))

    expect(screen.getByText('titleStyle: legacy')).toBeInTheDocument()
    expect(screen.getByText('palette: divergent_blue_cyan')).toBeInTheDocument()
  })

  it('renders the modernized preview and discards back to the original config', async () => {
    renderEditor()

    fireEvent.click(screen.getByRole('button', { name: modernStylesChartButtonName }))

    expect(screen.getByText('titleStyle: small')).toBeInTheDocument()
    expect(screen.getByText('yAxisTitlePlacement: top')).toBeInTheDocument()
    expect(screen.getByText('yAxisNumTicks: 4')).toBeInTheDocument()
    expect(screen.getByText('yAxisMin: 0')).toBeInTheDocument()
    expect(screen.getByText('legendPosition: top')).toBeInTheDocument()
    expect(screen.getByText('legendSingleRow: true')).toBeInTheDocument()
    expect(screen.getByText('axisDateDisplayFormat: %b. %-d %Y')).toBeInTheDocument()
    expect(screen.getByText('xAxisTickRotation: 0')).toBeInTheDocument()
    expect(screen.getByText('isResponsiveTicks: false')).toBeInTheDocument()
    expect(screen.getByText('dataTableExpanded: false')).toBeInTheDocument()
    expect(screen.getByText('palette: qualitative_bold')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Discard changes' }))

    expect(screen.getByText('titleStyle: legacy')).toBeInTheDocument()
    expect(screen.getByText('yAxisTitlePlacement: side')).toBeInTheDocument()
    expect(screen.getByText('yAxisNumTicks: 7')).toBeInTheDocument()
    expect(screen.getByText('legendPosition: right')).toBeInTheDocument()
    expect(screen.getByText('legendSingleRow: false')).toBeInTheDocument()
    expect(screen.getByText('axisDateDisplayFormat: %Y-%m-%d')).toBeInTheDocument()
    expect(screen.getByText('xAxisTickRotation: 45')).toBeInTheDocument()
    expect(screen.getByText('isResponsiveTicks: true')).toBeInTheDocument()
    expect(screen.getByText('dataTableExpanded: true')).toBeInTheDocument()
    expect(screen.getByText('palette: qualitative_bold')).toBeInTheDocument()
  })

  it('toggles the chart preview between modernized and current versions in place', () => {
    renderEditor()

    fireEvent.click(screen.getByRole('button', { name: modernStylesChartButtonName }))

    expect(screen.getByTestId('modern-styles-workspace')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Modernize this chart' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Previewing chart' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Modernized version' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('titleStyle: small')).toBeInTheDocument()
    const modernizedMountId = screen.getByTestId('mock-chart').getAttribute('data-mount-id')

    fireEvent.click(screen.getByRole('button', { name: 'Current version' }))

    expect(screen.getByRole('button', { name: 'Current version' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('titleStyle: legacy')).toBeInTheDocument()
    expect(screen.queryByText('titleStyle: small')).not.toBeInTheDocument()
    expect(screen.getByTestId('mock-chart')).not.toHaveAttribute('data-mount-id', modernizedMountId)

    fireEvent.click(screen.getByRole('button', { name: 'Modernized version' }))

    expect(screen.getByText('titleStyle: small')).toBeInTheDocument()
    expect(screen.queryByText('titleStyle: legacy')).not.toBeInTheDocument()
  })

  it('toggles the map preview between modernized and current versions in place', () => {
    renderEditor({
      type: 'map',
      data: [{ state: 'GA', value: 1 }],
      formattedData: [{ state: 'GA', value: 1 }],
      general: {
        title: 'Legacy map',
        titleStyle: 'legacy'
      }
    } as any)

    fireEvent.click(screen.getByRole('button', { name: modernStylesMapButtonName }))

    expect(screen.getByRole('heading', { name: 'Previewing map' })).toBeInTheDocument()
    expect(screen.getByText('mapTitleStyle: small')).toBeInTheDocument()
    const modernizedMountId = screen.getByTestId('mock-map').getAttribute('data-mount-id')

    fireEvent.click(screen.getByRole('button', { name: 'Current version' }))

    expect(screen.getByText('mapTitleStyle: legacy')).toBeInTheDocument()
    expect(screen.queryByText('mapTitleStyle: small')).not.toBeInTheDocument()
    expect(screen.getByTestId('mock-map')).not.toHaveAttribute('data-mount-id', modernizedMountId)
  })

  it.each([
    {
      name: 'data bite',
      config: { type: 'data-bite', data: [{}], formattedData: [{}], biteStyle: 'legacy', dataFormat: {} },
      runtimeTestId: 'mock-data-bite-runtime',
      expected: config => expect(config.biteStyle).toBe('tp5')
    },
    {
      name: 'waffle chart',
      config: { type: 'waffle-chart', data: [{}], formattedData: [{}], visualizationType: 'Waffle', dataFormat: {} },
      runtimeTestId: 'mock-waffle-chart-runtime',
      expected: config => expect(config.visualizationType).toBe('TP5 Waffle')
    },
    {
      name: 'gauge chart',
      config: { type: 'waffle-chart', data: [{}], formattedData: [{}], visualizationType: 'Gauge', dataFormat: {} },
      runtimeTestId: 'mock-waffle-chart-runtime',
      expected: config => expect(config.visualizationType).toBe('TP5 Gauge')
    },
    {
      name: 'markup include',
      config: {
        type: 'markup-include',
        data: [{}],
        formattedData: [{}],
        contentEditor: { style: 'default', titleStyle: 'legacy' }
      },
      runtimeTestId: 'mock-markup-runtime',
      expected: config => expect(config.contentEditor.titleStyle).toBe('small')
    }
  ])(
    'completes standalone $name modernization through the runtime workspace',
    async ({ config, runtimeTestId, expected }) => {
      const updateEvents: string[] = []
      const handleUpdateVizConfig = (event: Event) => {
        updateEvents.push((event as CustomEvent).detail)
      }
      window.addEventListener('updateVizConfig', handleUpdateVizConfig)
      renderEditor(config as any)

      fireEvent.click(screen.getByRole('button', { name: 'Preview a modernized version of this visualization' }))
      expect(screen.getByRole('heading', { name: 'Previewing visualization' })).toBeInTheDocument()
      const initialMountId = screen.getByTestId(runtimeTestId).getAttribute('data-mount-id')
      fireEvent.click(screen.getByRole('button', { name: 'Current version' }))
      expect(screen.getByTestId(runtimeTestId)).not.toHaveAttribute('data-mount-id', initialMountId)
      fireEvent.click(screen.getByRole('button', { name: 'Modernized version' }))

      fireEvent.click(screen.getByRole('button', { name: 'Review changes individually' }))
      const beforeSelectionMountId = screen.getByTestId(runtimeTestId).getAttribute('data-mount-id')
      const firstSwitch = screen.getAllByRole('switch')[0]
      fireEvent.click(firstSwitch)
      expect(screen.getByTestId(runtimeTestId)).not.toHaveAttribute('data-mount-id', beforeSelectionMountId)
      fireEvent.click(firstSwitch)
      fireEvent.click(screen.getByRole('button', { name: /^Accept \d+ changes$/ }))

      await waitFor(() => expected(getLatestConfigEvent(updateEvents)))
      window.removeEventListener('updateVizConfig', handleUpdateVizConfig)
    }
  )

  it('commits and emits the preview config when styles are kept', async () => {
    const updateEvents: string[] = []
    window.addEventListener('updateVizConfig', (event: Event) => {
      updateEvents.push((event as CustomEvent).detail)
    })

    renderEditor()
    await waitFor(() => expect(updateEvents.length).toBeGreaterThan(0))

    fireEvent.click(screen.getByRole('button', { name: modernStylesChartButtonName }))
    fireEvent.click(screen.getByRole('button', { name: 'Current version' }))
    fireEvent.click(screen.getByRole('button', { name: 'Accept all changes' }))

    await waitFor(() => {
      expect(getLatestConfigEvent(updateEvents).titleStyle).toBe('small')
      expect(getLatestConfigEvent(updateEvents).yAxis.titlePlacement).toBe('top')
      expect(getLatestConfigEvent(updateEvents).yAxis.autoMaxStrategy).toBe('clean-top-tick')
      expect(getLatestConfigEvent(updateEvents).yAxis.hideAxis).toBe(true)
      expect(getLatestConfigEvent(updateEvents).yAxis.hideTicks).toBe(true)
      expect(getLatestConfigEvent(updateEvents).yAxis.gridLines).toBe(true)
      expect(getLatestConfigEvent(updateEvents).yAxis.numTicks).toBe(4)
      expect(getLatestConfigEvent(updateEvents).yAxis.min).toBe(0)
      expect(getLatestConfigEvent(updateEvents).isResponsiveTicks).toBe(false)
      expect(getLatestConfigEvent(updateEvents).legend.position).toBe('top')
      expect(getLatestConfigEvent(updateEvents).legend.singleRow).toBe(true)
      expect(getLatestConfigEvent(updateEvents).xAxis.dateParseFormat).toBe('%m/%d/%Y')
      expect(getLatestConfigEvent(updateEvents).xAxis.dateDisplayFormat).toBe('%b. %-d %Y')
      expect(getLatestConfigEvent(updateEvents).xAxis.tickRotation).toBe(0)
      expect(getLatestConfigEvent(updateEvents).table.expanded).toBe(false)
      expect(getLatestConfigEvent(updateEvents).general.palette.name).toBe('qualitative_bold')
    })
    expect(screen.queryByRole('button', { name: modernStylesChartButtonName })).not.toBeInTheDocument()
  })

  it('blocks editor updates while previewing', async () => {
    const updateEvents: string[] = []
    window.addEventListener('updateVizConfig', (event: Event) => {
      updateEvents.push((event as CustomEvent).detail)
    })

    renderEditor()
    await waitFor(() => expect(updateEvents.length).toBeGreaterThan(0))
    const eventCountBeforePreviewControl = updateEvents.length

    fireEvent.click(screen.getByRole('button', { name: modernStylesChartButtonName }))
    expect(screen.queryByRole('button', { name: 'Mock editor control' })).not.toBeInTheDocument()

    expect(updateEvents).toHaveLength(eventCountBeforePreviewControl)
    expect(screen.queryByText('Mutated by editor control')).not.toBeInTheDocument()
  })

  it('opens a scrollable settings list during preview', () => {
    renderEditor()

    fireEvent.click(screen.getByRole('button', { name: modernStylesChartButtonName }))
    fireEvent.click(screen.getByRole('button', { name: 'Review changes individually' }))

    const locations = screen.getByLabelText('Modernization changes')
    expect(locations).toBeInTheDocument()
    expect(locations).toHaveTextContent('General > Title Style > Small')
    expect(locations).toHaveTextContent('Left Value Axis > Label Placement > Top')
    expect(locations).toHaveTextContent('Left Value Axis > Number Of Ticks > 4')
    expect(locations).toHaveTextContent('Left Value Axis > Value Axis Domain > Axis Min Value > 0')
    expect(locations).toHaveTextContent('Date/Category Axis > Use Responsive Ticks > Off')
    expect(locations).toHaveTextContent('Legend > Position > Top')
    expect(locations).toHaveTextContent('Legend > Single Row Legend > On')
    expect(locations).toHaveTextContent('Date/Category Axis > Tick Rotation (Degrees) > 0')
    expect(locations).toHaveTextContent('Date/Category Axis > Axis Date Display Format > %b. %-d %Y')
    expect(locations).toHaveTextContent('Data Table > Expanded by Default > Off')
    expect(locations).not.toHaveTextContent('Visual > Palette')
    expect(screen.getByRole('button', { name: 'Review changes individually' })).toHaveAttribute('aria-expanded', 'true')
  })

  it('selects individual changes from the original snapshot and disables selection in Current', async () => {
    const updateEvents: string[] = []
    window.addEventListener('updateVizConfig', (event: Event) => {
      updateEvents.push((event as CustomEvent).detail)
    })
    renderEditor()

    fireEvent.click(screen.getByRole('button', { name: modernStylesChartButtonName }))
    fireEvent.click(screen.getByRole('button', { name: 'Review changes individually' }))
    fireEvent.click(screen.getByRole('button', { name: 'Deselect All' }))

    expect(screen.getByRole('button', { name: 'Accept 0 changes' })).toBeDisabled()
    expect(screen.getByText('titleStyle: legacy')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Select All' }))
    expect(screen.getAllByRole('switch').every(control => (control as HTMLInputElement).checked)).toBe(true)
    fireEvent.click(screen.getByRole('button', { name: 'Deselect All' }))

    fireEvent.click(screen.getByRole('switch', { name: 'Use small title style' }))
    expect(screen.getByRole('button', { name: 'Accept 1 changes' })).toBeEnabled()
    expect(screen.getByText('titleStyle: small')).toBeInTheDocument()
    expect(screen.getByText('yAxisTitlePlacement: side')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Current version' }))
    expect(screen.getByText('Switch to Modernized to edit these changes.')).toBeInTheDocument()
    expect(screen.getByRole('switch', { name: 'Use small title style' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Select All' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Deselect All' })).toBeDisabled()

    fireEvent.click(screen.getByRole('button', { name: 'Review changes individually' }))
    fireEvent.click(screen.getByRole('button', { name: 'Review changes individually' }))
    expect(screen.getByRole('button', { name: 'Modernized version' })).toHaveAttribute('aria-pressed', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Accept 1 changes' }))
    await waitFor(() => expect(getLatestConfigEvent(updateEvents).titleStyle).toBe('small'))
    expect(getLatestConfigEvent(updateEvents).yAxis.titlePlacement).toBe('side')
  })

  it('marks dashboard editor surfaces as locked for dashboard-capable recipes', () => {
    const dashboardRecipe: ModernizationRecipe = {
      id: 'dashboard-modern-test',
      appliesTo: 'dashboard',
      apply: config => ({ ...config, dashboard: { ...(config.dashboard || {}), theme: 'theme-blue' } }),
      editorLocations: ['Dashboard settings > Theme']
    }
    modernizationRecipes.push(dashboardRecipe)

    try {
      const { container } = renderEditor({
        type: 'dashboard',
        data: [],
        datasets: { primary: { data: [{ category: 'A', value: 1 }] } },
        dashboard: { theme: 'theme-purple' },
        rows: [],
        visualizations: {}
      } as any)

      fireEvent.click(screen.getByRole('button', { name: modernStylesDashboardButtonName }))

      expect(container.querySelector('.modern-styles-workspace')).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Previewing dashboard' })).toBeInTheDocument()
      expect(screen.getByTestId('mock-dashboard-runtime')).toBeInTheDocument()
      expect(screen.queryByText('1. Choose Visualization Type')).not.toBeInTheDocument()
    } finally {
      modernizationRecipes.pop()
    }
  })

  it('compares modernization against session edits and restores them when discarded', async () => {
    renderEditor({
      type: 'dashboard',
      datasets: { primary: { data: [{ category: 'A', value: 1 }] } },
      dashboard: {
        titleStyle: 'small',
        downloads: {
          downloadImageButton: false,
          downloadImageButtonStyle: 'button'
        }
      },
      rows: [],
      visualizations: {}
    } as any)

    fireEvent.click(screen.getByRole('button', { name: 'Enable dashboard image download button' }))
    await waitFor(() =>
      expect(screen.getByRole('button', { name: modernStylesDashboardButtonName })).toBeInTheDocument()
    )
    fireEvent.click(screen.getByRole('button', { name: modernStylesDashboardButtonName }))

    expect(screen.getByTestId('mock-dashboard-runtime')).toHaveTextContent('dashboardImageDownloadEnabled: true')
    expect(screen.getByTestId('mock-dashboard-runtime')).toHaveTextContent('dashboardImageDownloadStyle: link')
    const modernizedMountId = screen.getByTestId('mock-dashboard-runtime').getAttribute('data-mount-id')

    fireEvent.click(screen.getByRole('button', { name: 'Current version' }))

    expect(screen.getByTestId('mock-dashboard-runtime')).toHaveTextContent('dashboardImageDownloadEnabled: true')
    expect(screen.getByTestId('mock-dashboard-runtime')).toHaveTextContent('dashboardImageDownloadStyle: button')
    expect(screen.getByTestId('mock-dashboard-runtime')).not.toHaveAttribute('data-mount-id', modernizedMountId)

    fireEvent.click(screen.getByRole('button', { name: 'Discard changes' }))

    const restoredDashboard = screen.getByTestId('mock-dashboard-editor')
    expect(restoredDashboard).toHaveTextContent('dashboardImageDownloadEnabled: true')
    expect(restoredDashboard).toHaveTextContent('dashboardImageDownloadStyle: button')
  })

  it('keeps session edits together with dashboard modernization changes', async () => {
    const updateEvents: string[] = []
    window.addEventListener('updateVizConfig', (event: Event) => {
      updateEvents.push((event as CustomEvent).detail)
    })

    renderEditor({
      type: 'dashboard',
      datasets: { primary: { data: [{ category: 'A', value: 1 }] } },
      dashboard: {
        titleStyle: 'small',
        downloads: {
          downloadImageButton: false,
          downloadImageButtonStyle: 'button'
        }
      },
      rows: [],
      visualizations: {}
    } as any)

    fireEvent.click(screen.getByRole('button', { name: 'Enable dashboard image download button' }))
    await waitFor(() =>
      expect(screen.getByRole('button', { name: modernStylesDashboardButtonName })).toBeInTheDocument()
    )
    fireEvent.click(screen.getByRole('button', { name: modernStylesDashboardButtonName }))
    fireEvent.click(screen.getByRole('button', { name: 'Accept all changes' }))

    await waitFor(() => {
      const keptConfig = getLatestConfigEvent(updateEvents)
      expect(keptConfig.dashboard.downloads.downloadImageButton).toBe(true)
      expect(keptConfig.dashboard.downloads.downloadImageButtonStyle).toBe('link')
    })
  })
})
