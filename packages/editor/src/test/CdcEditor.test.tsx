import React from 'react'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import CdcEditor from '../CdcEditor'
import { modernizationRecipes, ModernizationRecipe } from '../helpers/modernizationRecipes'

afterEach(() => {
  cleanup()
})

vi.mock('@cdc/chart/src/CdcChart', async () => {
  const React = await import('react')
  const EditorContext = (await import('@cdc/core/contexts/EditorContext')).default

  const MockChart = ({ config, isEditor }) => {
    const editorContext = React.useContext(EditorContext)
    const emittedPreparedConfigRef = React.useRef(false)
    React.useEffect(() => {
      if (isEditor && config.mockPreparedConfig && !emittedPreparedConfigRef.current) {
        emittedPreparedConfigRef.current = true
        editorContext.setTempConfig(config.mockPreparedConfig)
      }
    }, [config, editorContext, isEditor])

    return (
      <div data-testid='mock-chart'>
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

  const MockDashboard = ({ previewBanner }) => {
    const editorContext = React.useContext(EditorContext)
    return (
      <div className='type-dashboard'>
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
        </div>
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
    return (
      <div data-testid='mock-map'>
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
vi.mock('@cdc/data-bite/src/CdcDataBite', () => ({ default: () => <div data-testid='mock-data-bite' /> }))
vi.mock('@cdc/waffle-chart/src/CdcWaffleChart', () => ({ default: () => <div data-testid='mock-waffle-chart' /> }))
vi.mock('@cdc/markup-include/src/CdcMarkupInclude', () => ({ default: () => <div data-testid='mock-markup' /> }))
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
    min: ''
  },
  isResponsiveTicks: true,
  xAxis: {
    dateDisplayFormat: '%Y-%m-%d',
    dateParseFormat: '%m/%d/%Y',
    tickRotation: 45
  },
  table: {
    expanded: true,
    dateDisplayFormat: '%B %-d, %Y'
  },
  general: { palette: { name: 'qualitative_bold', version: '2.0', isReversed: true } },
  legend: { position: 'right', hideBorder: { side: false, topBottom: false } },
  visual: { accent: false, background: false, border: true },
  visualizationType: 'Bar',
  barStyle: 'flat'
}

const renderEditor = (config = chartConfig) => render(<CdcEditor config={config as any} />)

const getLatestConfigEvent = (events: string[]) => JSON.parse(events[events.length - 1])
const modernStylesButtonName = 'Preview a modernized version of this visualization'

describe('CdcEditor modern styles preview', () => {
  it('does not show the action when no recipe applies', () => {
    renderEditor({ type: 'map', data: [], formattedData: [] } as any)

    expect(screen.queryByRole('button', { name: modernStylesButtonName })).not.toBeInTheDocument()
  })

  it('shows the action when a recipe applies', () => {
    renderEditor()

    expect(screen.getByRole('button', { name: modernStylesButtonName })).toBeInTheDocument()
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

    await waitFor(() => expect(screen.getByRole('button', { name: modernStylesButtonName })).toBeInTheDocument())
    fireEvent.click(screen.getByRole('button', { name: modernStylesButtonName }))

    expect(screen.getByText('titleStyle: small')).toBeInTheDocument()
    expect(screen.getByText('palette: divergent_blue_cyan')).toBeInTheDocument()
    expect(screen.getByText('titleStyle:')).toBeInTheDocument()
  })

  it('renders the modernized preview and discards back to the original config', async () => {
    renderEditor()

    fireEvent.click(screen.getByRole('button', { name: modernStylesButtonName }))

    expect(screen.getByText('titleStyle: small')).toBeInTheDocument()
    expect(screen.getByText('yAxisTitlePlacement: top')).toBeInTheDocument()
    expect(screen.getByText('yAxisNumTicks: 4')).toBeInTheDocument()
    expect(screen.getByText('yAxisMin: 0')).toBeInTheDocument()
    expect(screen.getByText('legendPosition: top')).toBeInTheDocument()
    expect(screen.getByText('axisDateDisplayFormat: %b. %-d %Y')).toBeInTheDocument()
    expect(screen.getByText('xAxisTickRotation: 0')).toBeInTheDocument()
    expect(screen.getByText('isResponsiveTicks: false')).toBeInTheDocument()
    expect(screen.getByText('dataTableExpanded: false')).toBeInTheDocument()
    expect(screen.getAllByText('palette: qualitative_bold')).toHaveLength(2)

    fireEvent.click(screen.getByRole('button', { name: 'Discard' }))

    expect(screen.getByText('titleStyle: legacy')).toBeInTheDocument()
    expect(screen.getByText('yAxisTitlePlacement: side')).toBeInTheDocument()
    expect(screen.getByText('yAxisNumTicks: 7')).toBeInTheDocument()
    expect(screen.getByText('legendPosition: right')).toBeInTheDocument()
    expect(screen.getByText('axisDateDisplayFormat: %Y-%m-%d')).toBeInTheDocument()
    expect(screen.getByText('xAxisTickRotation: 45')).toBeInTheDocument()
    expect(screen.getByText('isResponsiveTicks: true')).toBeInTheDocument()
    expect(screen.getByText('dataTableExpanded: true')).toBeInTheDocument()
    expect(screen.getByText('palette: qualitative_bold')).toBeInTheDocument()
  })

  it('renders the current visualization below the modernized preview for comparison', () => {
    renderEditor()

    fireEvent.click(screen.getByRole('button', { name: modernStylesButtonName }))

    expect(screen.getByText('Previewing modernized visualization')).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Current visualization' })).toBeInTheDocument()
    expect(screen.getByText('Current visualization')).toBeInTheDocument()
    expect(screen.getByText('The existing version for comparison.')).toBeInTheDocument()
    expect(screen.getByText('titleStyle: small')).toBeInTheDocument()
    expect(screen.getByText('titleStyle: legacy')).toBeInTheDocument()
  })

  it('renders the modernized map preview toolbar and current map comparison', () => {
    renderEditor({
      type: 'map',
      data: [{ state: 'GA', value: 1 }],
      formattedData: [{ state: 'GA', value: 1 }],
      general: {
        title: 'Legacy map',
        titleStyle: 'legacy'
      }
    } as any)

    fireEvent.click(screen.getByRole('button', { name: modernStylesButtonName }))

    expect(screen.getByText('Previewing modernized visualization')).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Current map' })).toBeInTheDocument()
    expect(screen.getByText('Current map')).toBeInTheDocument()
    expect(screen.getByText('mapTitleStyle: small')).toBeInTheDocument()
    expect(screen.getByText('mapTitleStyle: legacy')).toBeInTheDocument()
  })

  it('commits and emits the preview config when styles are kept', async () => {
    const updateEvents: string[] = []
    window.addEventListener('updateVizConfig', (event: Event) => {
      updateEvents.push((event as CustomEvent).detail)
    })

    renderEditor()
    await waitFor(() => expect(updateEvents.length).toBeGreaterThan(0))

    fireEvent.click(screen.getByRole('button', { name: modernStylesButtonName }))
    fireEvent.click(screen.getByRole('button', { name: 'Keep changes' }))

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
      expect(getLatestConfigEvent(updateEvents).xAxis.dateParseFormat).toBe('%m/%d/%Y')
      expect(getLatestConfigEvent(updateEvents).xAxis.dateDisplayFormat).toBe('%b. %-d %Y')
      expect(getLatestConfigEvent(updateEvents).xAxis.tickRotation).toBe(0)
      expect(getLatestConfigEvent(updateEvents).table.expanded).toBe(false)
      expect(getLatestConfigEvent(updateEvents).general.palette.name).toBe('qualitative_bold')
    })
    expect(screen.queryByRole('button', { name: modernStylesButtonName })).not.toBeInTheDocument()
  })

  it('blocks editor updates while previewing', async () => {
    const updateEvents: string[] = []
    window.addEventListener('updateVizConfig', (event: Event) => {
      updateEvents.push((event as CustomEvent).detail)
    })

    renderEditor()
    await waitFor(() => expect(updateEvents.length).toBeGreaterThan(0))
    const eventCountBeforePreviewControl = updateEvents.length

    fireEvent.click(screen.getByRole('button', { name: modernStylesButtonName }))
    fireEvent.click(screen.getByRole('button', { name: 'Mock editor control' }))

    expect(updateEvents).toHaveLength(eventCountBeforePreviewControl)
    expect(screen.queryByText('Mutated by editor control')).not.toBeInTheDocument()
  })

  it('opens a scrollable settings list during preview', () => {
    renderEditor()

    fireEvent.click(screen.getByRole('button', { name: modernStylesButtonName }))
    fireEvent.click(screen.getByRole('button', { name: 'Show settings' }))

    const locations = screen.getByLabelText('Modern style settings')
    expect(locations).toBeInTheDocument()
    expect(locations).toHaveTextContent('General > Title style')
    expect(locations).toHaveTextContent('Y Axis > Label Placement')
    expect(locations).toHaveTextContent('Y Axis > Number of ticks')
    expect(locations).toHaveTextContent('Y Axis > Axis min value')
    expect(locations).toHaveTextContent('Y Axis > Use Responsive Ticks')
    expect(locations).toHaveTextContent('Legend > Position')
    expect(locations).toHaveTextContent('X Axis > Tick rotation')
    expect(locations).toHaveTextContent('Date/Time > Axis Date Display Format')
    expect(locations).toHaveTextContent('Data Table > Expanded by Default')
    expect(locations).not.toHaveTextContent('Visual > Palette')
    expect(screen.getByRole('button', { name: 'Hide settings' })).toBeInTheDocument()
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

      fireEvent.click(screen.getByRole('button', { name: modernStylesButtonName }))

      expect(container.querySelector('.cdc-editor')).toHaveClass('modern-styles-preview-mode')
      expect(container.querySelector('.editor-heading')).toBeInTheDocument()
      expect(container.querySelector('.dashboard-editor-layout')).toBeInTheDocument()
    } finally {
      modernizationRecipes.pop()
    }
  })
})
