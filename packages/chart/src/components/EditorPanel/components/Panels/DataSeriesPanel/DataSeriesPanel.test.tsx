import React from 'react'
import { renderToString } from 'react-dom/server'
import { Accordion } from 'react-accessible-accordion'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import DataSeriesSection from './DataSeriesPanel'
import {
  DataSeriesSectionProvider,
  type DataSeriesSectionContextValue,
  type DataSeriesSectionModel
} from './DataSeriesPanelContext'

vi.mock('@cdc/core/components/EditorPanel/Inputs', () => {
  const renderOptions = (options: any[] = []) =>
    options.map(option => {
      const value = typeof option === 'string' ? option : option.value
      const label = typeof option === 'string' ? option : option.label
      return (
        <option key={value} value={value}>
          {label}
        </option>
      )
    })

  return {
    Select: ({ label, fieldName, updateField, onChange, value, options, initial, ...props }: any) => (
      <label>
        <span>{label}</span>
        <select
          data-testid={fieldName || label}
          value={value}
          onChange={event => (onChange ? onChange(event) : updateField(null, null, fieldName, event.target.value))}
          {...props}
        >
          {initial && <option value=''>{initial}</option>}
          {renderOptions(options)}
        </select>
      </label>
    )
  }
})

vi.mock('@cdc/core/components/EditorPanel/GroupedList', () => ({
  default: ({ items, label, onDragEnd, renderItem }: any) => (
    <div data-testid='series-list'>
      <div data-testid='series-list-label'>{label}</div>
      {items.map(renderItem)}
      <button onClick={() => onDragEnd({ source: { index: 0 }, destination: null })}>Missing Destination</button>
      <button onClick={() => onDragEnd({ source: { index: 0 }, destination: { index: 0 } })}>Same Destination</button>
      <button onClick={() => onDragEnd({ source: { index: 0 }, destination: { index: 1 } })}>Move Series</button>
    </div>
  )
}))

vi.mock('./SeriesEditor', () => ({
  default: {
    Wrapper: ({ children }: any) => <div data-testid='series-wrapper'>{children}</div>
  }
}))

vi.mock('@cdc/core/components/ui/Tooltip', () => ({
  default: Object.assign(({ children }: any) => <>{children}</>, {
    Target: ({ children }: any) => <>{children}</>,
    Content: ({ children }: any) => <>{children}</>
  })
}))

vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))
vi.mock('../../../../../images/warning.svg', () => ({ default: () => <span data-testid='heading-warning' /> }))

const series = [
  { dataKey: 'value', name: 'Value', axis: 'Left', type: 'Bar', tooltip: true },
  { dataKey: 'secondValue', name: 'Second Value', axis: 'Left', type: 'Bar', tooltip: true }
]

const model: DataSeriesSectionModel = {
  visualizationType: 'Bar',
  isLollipopChart: false,
  dynamicSeries: false,
  series,
  confidenceKeys: { upper: '', lower: '' },
  rankByValue: 'asc',
  supportsDynamicSeries: false,
  supportsRankByValue: true,
  seriesOptions: ['value', 'secondValue'],
  columnOptions: ['category', 'upper', 'lower'],
  curveOptions: ['curveLinear', 'curveBasis']
}

const renderSection = (overrides: Partial<DataSeriesSectionModel> = {}) => {
  const callbacks = {
    onRootFieldChange: vi.fn(),
    onAddSeries: vi.fn(),
    onReorderSeries: vi.fn(),
    onConfidenceKeyChange: vi.fn(),
    onRankByValueChange: vi.fn(),
    getColumns: vi.fn(() => ['category', 'value']),
    handleForecastPaletteSelection: vi.fn(),
    renderSeriesItem: vi.fn((item, index) => <div key={index}>{item.dataKey}</div>)
  }
  const value: DataSeriesSectionContextValue = {
    model: { ...model, ...overrides },
    ...callbacks,
    preliminaryDataEditor: <div data-testid='preliminary-data'>Preliminary Data</div>
  }
  const view = render(
    <DataSeriesSectionProvider value={value}>
      <Accordion allowZeroExpanded>
        <DataSeriesSection />
      </Accordion>
    </DataSeriesSectionProvider>
  )
  fireEvent.click(screen.getByRole('button', { name: /Data Series/ }))
  return { ...view, ...callbacks }
}

describe('DataSeriesSection', () => {
  it('throws when rendered without its dedicated provider', () => {
    expect(() =>
      renderToString(
        <Accordion allowZeroExpanded>
          <DataSeriesSection />
        </Accordion>
      )
    ).toThrow('COVE: Data Series section context is null.')
  })

  it('preserves standard control order and routes add, confidence, and rank commands', () => {
    const callbacks = renderSection({ series: [series[0]] })
    const controls = screen.getAllByRole('combobox').map(control => control.getAttribute('data-testid'))
    expect(controls).toEqual(['visualizationType', 'Upper', 'Lower', 'rankByValue'])

    const addSeries = screen.getByTestId('visualizationType') as HTMLSelectElement
    fireEvent.change(addSeries, { target: { value: 'secondValue' } })
    expect(callbacks.onAddSeries).toHaveBeenCalledWith('secondValue')
    expect(addSeries.value).toBe('')
    fireEvent.change(addSeries, { target: { value: '' } })
    expect(callbacks.onAddSeries).toHaveBeenCalledOnce()

    fireEvent.change(screen.getByTestId('Upper'), { target: { value: 'upper' } })
    fireEvent.change(screen.getByTestId('Lower'), { target: { value: 'lower' } })
    expect(callbacks.onConfidenceKeyChange).toHaveBeenNthCalledWith(1, 'upper', 'upper')
    expect(callbacks.onConfidenceKeyChange).toHaveBeenNthCalledWith(2, 'lower', 'lower')

    fireEvent.change(screen.getByTestId('rankByValue'), { target: { value: 'desc' } })
    expect(callbacks.onRankByValueChange).toHaveBeenCalledWith('desc')
    expect(screen.getByTestId('preliminary-data')).toBeInTheDocument()
  })

  it('preserves dynamic Line controls and hides static content when supported', () => {
    const callbacks = renderSection({
      visualizationType: 'Line',
      dynamicSeries: true,
      dynamicSeriesType: 'Line',
      dynamicSeriesLineType: '',
      supportsDynamicSeries: true
    })

    expect(screen.getByTestId('dynamicSeriesType')).toBeInTheDocument()
    expect(screen.getByTestId('dynamicSeriesLineType')).toHaveValue('curveLinear')
    expect(screen.queryByTestId('visualizationType')).not.toBeInTheDocument()
    fireEvent.change(screen.getByTestId('dynamicSeriesLineType'), { target: { value: 'curveBasis' } })
    expect(callbacks.onRootFieldChange).toHaveBeenCalledWith('dynamicSeriesLineType', 'curveBasis')
    fireEvent.change(screen.getByTestId('dynamicSeriesType'), { target: { value: 'dashed-sm' } })
    expect(callbacks.onRootFieldChange).toHaveBeenCalledWith('dynamicSeriesType', 'dashed-sm')
  })

  it.each([
    ['ordinary', {}, 'At least one series is required'],
    ['lollipop', { isLollipopChart: true }, 'Select exactly one data series for a lollipop chart.'],
    ['deviation', { visualizationType: 'Deviation Bar' }, 'Select exactly one data series for a deviation bar chart.'],
    [
      'paired',
      { visualizationType: 'Paired Bar' },
      'Select two data series for paired bar chart (e.g., Male and Female).'
    ]
  ])('preserves the %s required-count warning', (_name, overrides, warning) => {
    renderSection({ series: [], ...(overrides as Partial<DataSeriesSectionModel>) })
    expect(screen.getByText(warning as string)).toBeInTheDocument()
    expect(screen.getByTestId('heading-warning')).toBeInTheDocument()
  })

  it('uses HeatMap-specific helper, warning, and row-list copy without a heading icon', () => {
    const empty = renderSection({ visualizationType: 'HeatMap', series: [] })
    expect(screen.getByText(/Each selected series becomes a row in the heatmap/)).toBeInTheDocument()
    expect(screen.getByText('At least one series is required')).toBeInTheDocument()
    expect(screen.queryByTestId('heading-warning')).not.toBeInTheDocument()
    empty.unmount()

    renderSection({ visualizationType: 'HeatMap' })
    expect(screen.getByTestId('series-list-label')).toHaveTextContent('Displaying Rows')
  })

  it('preserves series composition and reorder guards', () => {
    const callbacks = renderSection()
    expect(screen.getByTestId('series-wrapper')).toBeInTheDocument()
    expect(callbacks.renderSeriesItem).toHaveBeenCalledTimes(2)

    fireEvent.click(screen.getByRole('button', { name: 'Missing Destination' }))
    fireEvent.click(screen.getByRole('button', { name: 'Same Destination' }))
    expect(callbacks.onReorderSeries).not.toHaveBeenCalled()
    fireEvent.click(screen.getByRole('button', { name: 'Move Series' }))
    expect(callbacks.onReorderSeries).toHaveBeenCalledWith(0, 1)
  })

  it('preserves Confidence Keys visibility for Bar and empty Line series', () => {
    const bar = renderSection({ visualizationType: 'Bar', series: [] })
    expect(screen.queryByText('Confidence Keys')).not.toBeInTheDocument()
    bar.unmount()

    renderSection({ visualizationType: 'Line', series: [] })
    expect(screen.getByText('Confidence Keys')).toBeInTheDocument()
  })

  it.each([
    ['Radar', { visualizationType: 'Radar', series: series.slice(0, 2) }, true],
    ['Radar', { visualizationType: 'Radar', series: [...series, { ...series[0], dataKey: 'thirdValue' }] }, false],
    ['lollipop', { isLollipopChart: true, series: [] }, true],
    ['lollipop', { isLollipopChart: true, series: [series[0]] }, false],
    ['Deviation Bar', { visualizationType: 'Deviation Bar', series: [] }, true],
    ['Deviation Bar', { visualizationType: 'Deviation Bar', series: [series[0]] }, false],
    ['Paired Bar', { visualizationType: 'Paired Bar', series: [series[0]] }, true],
    ['Paired Bar', { visualizationType: 'Paired Bar', series }, false]
  ])('toggles the %s heading warning at its valid series-count boundary', (_name, overrides, visible) => {
    renderSection(overrides as Partial<DataSeriesSectionModel>)
    expect(Boolean(screen.queryByTestId('heading-warning'))).toBe(visible)
  })
})
