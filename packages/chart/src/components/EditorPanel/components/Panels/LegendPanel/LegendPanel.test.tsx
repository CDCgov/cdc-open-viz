import React from 'react'
import { Accordion } from 'react-accessible-accordion'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import LegendSection, { getLegendStyleOptions, getLegendSubStyleOptions, type LegendSectionModel } from './LegendPanel'

vi.mock('@cdc/core/components/EditorPanel/Inputs', () => {
  const renderOptions = (options: any[]) =>
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
    TextField: ({ label, fieldName, section, subsection, updateField, value, display = true, ...props }: any) =>
      display ? (
        <label>
          <span>{label}</span>
          <input
            data-field={fieldName}
            data-testid={fieldName}
            value={value}
            onChange={event => updateField(section, subsection || null, fieldName, event.target.value)}
            {...props}
          />
        </label>
      ) : null,
    CheckBox: ({ label, fieldName, section, subsection, updateField, value, display = true }: any) =>
      display ? (
        <label>
          <input
            data-field={fieldName}
            data-testid={fieldName}
            type='checkbox'
            checked={value}
            onChange={() => updateField(section, subsection || null, fieldName, !value)}
          />
          <span>{label}</span>
        </label>
      ) : null,
    Select: ({ label, fieldName, section, subsection, updateField, onChange, value, options, display = true }: any) =>
      display ? (
        <label>
          <span>{label}</span>
          <select
            data-field={fieldName}
            data-testid={fieldName}
            value={value}
            onChange={event =>
              onChange ? onChange(event) : updateField(section, subsection || null, fieldName, event.target.value)
            }
          >
            {renderOptions(options)}
          </select>
        </label>
      ) : null
  }
})

vi.mock('@cdc/core/components/elements/Button', () => ({
  default: ({ children, onClick, ...props }: any) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  )
}))

vi.mock('@cdc/core/components/ui/Tooltip', () => ({
  default: Object.assign(({ children }: any) => <>{children}</>, {
    Target: ({ children }: any) => <>{children}</>,
    Content: ({ children }: any) => <>{children}</>
  })
}))

vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))

const model: LegendSectionModel = {
  visualizationType: 'Bar',
  position: 'top',
  hide: false,
  style: 'boxes',
  groupBy: '',
  hasShape: false,
  subStyle: 'linear blocks',
  tickRotation: '0',
  hideSuppressedLabels: false,
  hideSuppressionLink: false,
  behavior: 'isolate',
  colorCode: '',
  axisAlign: false,
  highlightOnHover: false,
  seriesHighlight: ['value'],
  reverseLabelOrder: false,
  hideBorder: { side: false, topBottom: true },
  singleRow: false,
  verticalSorted: false,
  label: 'Legend title',
  description: 'Legend description',
  unified: false,
  hasSuppressionData: true,
  supportsClicking: true,
  hasDynamicCategory: false,
  hasMultipleSeries: true,
  supportsColorCategory: true,
  supportsAxisAlign: true,
  supportsSelectableValues: true,
  colorCodeByCategory: false,
  tooltipsSingleSeries: false,
  groupByOptions: ['category'],
  colorCodeOptions: ['category', 'value'],
  isolateOptions: ['value', 'secondValue', 'thirdValue']
}

const renderSection = (overrides: Partial<LegendSectionModel> = {}) => {
  const callbacks = {
    onFieldChange: vi.fn(),
    onBehaviorChange: vi.fn(),
    onSeriesHighlightChange: vi.fn(),
    onShowAll: vi.fn()
  }
  const view = render(
    <Accordion allowZeroExpanded>
      <LegendSection model={{ ...model, ...overrides }} {...callbacks} />
    </Accordion>
  )
  fireEvent.click(screen.getByRole('button', { name: 'Legend' }))
  return { ...view, ...callbacks }
}

describe('LegendSection', () => {
  it('preserves standard control order and routes ordinary and nested fields', () => {
    const { onFieldChange } = renderSection()
    const fields = screen.getAllByTestId(/.*/).map(control => control.getAttribute('data-field'))

    expect(fields).toEqual([
      'position',
      'style',
      'groupBy',
      'hideSuppressedLabels',
      'hideSuppressionLink',
      'behavior',
      'colorCode',
      'axisAlign',
      'seriesHighlight',
      'reverseLabelOrder',
      'topBottom',
      'singleRow',
      'verticalSorted',
      'hide',
      'label',
      'description',
      'unified'
    ])

    fireEvent.change(screen.getByTestId('position'), { target: { value: 'bottom' } })
    expect(onFieldChange).toHaveBeenLastCalledWith('position', 'bottom', undefined)
    fireEvent.click(screen.getByTestId('topBottom'))
    expect(onFieldChange).toHaveBeenLastCalledWith('topBottom', false, 'hideBorder')
  })

  it('uses the reduced Network branch with only Hide Legend', () => {
    renderSection({ visualizationType: 'Network' })

    expect(screen.getAllByTestId(/.*/).map(control => control.getAttribute('data-field'))).toEqual(['hide'])
    expect(screen.queryByText('Title')).not.toBeInTheDocument()
  })

  it('preserves chart-specific position, style, and sub-style options', () => {
    const heatMapGradient = { ...model, visualizationType: 'HeatMap', style: 'gradient' } as LegendSectionModel
    const warmingStripes = { ...model, visualizationType: 'Warming Stripes', position: 'bottom' } as LegendSectionModel
    const sideBar = { ...model, position: 'right' } as LegendSectionModel

    expect(getLegendStyleOptions(heatMapGradient)).toEqual(['circles', 'boxes', 'gradient'])
    expect(getLegendStyleOptions(warmingStripes)).toEqual(['circles', 'boxes', 'gradient'])
    expect(getLegendStyleOptions(sideBar)).toEqual(['circles', 'boxes'])
    expect(getLegendSubStyleOptions('HeatMap')).toEqual(['linear blocks'])
    expect(getLegendSubStyleOptions('Line')).toEqual(['linear blocks', 'smooth'])

    renderSection({ visualizationType: 'HeatMap', style: 'gradient' })
    expect(
      Array.from((screen.getByTestId('position') as HTMLSelectElement).options).map(option => option.value)
    ).toEqual(['bottom', 'top'])
  })

  it('preserves conditional suppression, behavior, hover, and isolate controls', () => {
    const first = renderSection({ hasSuppressionData: false, hasMultipleSeries: false, supportsAxisAlign: false })
    expect(screen.queryByTestId('hideSuppressedLabels')).not.toBeInTheDocument()
    expect(screen.queryByTestId('behavior')).not.toBeInTheDocument()
    expect(screen.queryByTestId('axisAlign')).not.toBeInTheDocument()
    first.unmount()

    renderSection({ behavior: 'highlight', tooltipsSingleSeries: true, seriesHighlight: [] })
    expect(screen.getByTestId('highlightOnHover')).toBeInTheDocument()
    expect(screen.queryByText('Add Isolate Value')).not.toBeInTheDocument()
  })

  it('keeps behavior changes on their distinct command', () => {
    const { onBehaviorChange, onFieldChange } = renderSection()
    fireEvent.change(screen.getByTestId('behavior'), { target: { value: 'highlight' } })

    expect(onBehaviorChange).toHaveBeenCalledWith('highlight')
    expect(onFieldChange).not.toHaveBeenCalledWith('behavior', expect.anything(), expect.anything())
  })

  it('adds the first unused isolate value and handles unique, duplicate, and full-list edits', () => {
    const first = renderSection()
    fireEvent.click(screen.getByRole('button', { name: 'Add Isolate Value' }))
    expect(first.onSeriesHighlightChange).toHaveBeenCalledWith(['value', 'secondValue'])
    first.unmount()

    const editable = renderSection({ seriesHighlight: ['value', 'secondValue'] })
    const isolateSelects = screen.getAllByTestId('seriesHighlight')
    fireEvent.change(isolateSelects[0], { target: { value: 'secondValue' } })
    expect(editable.onSeriesHighlightChange).not.toHaveBeenCalled()
    fireEvent.change(isolateSelects[0], { target: { value: 'thirdValue' } })
    expect(editable.onSeriesHighlightChange).toHaveBeenCalledWith(['thirdValue', 'secondValue'])
    editable.unmount()

    const full = renderSection({ seriesHighlight: ['value', 'secondValue', 'thirdValue'] })
    fireEvent.click(screen.getByRole('button', { name: 'Add Isolate Value' }))
    expect(full.onSeriesHighlightChange).not.toHaveBeenCalled()
  })

  it('removes one of multiple isolate values without calling Show All', () => {
    const { onFieldChange, onShowAll } = renderSection({ seriesHighlight: ['value', 'secondValue'] })

    fireEvent.click(screen.getAllByRole('button', { name: 'Remove' })[0])

    expect(onFieldChange).toHaveBeenCalledWith('seriesHighlight', ['secondValue'])
    expect(onShowAll).not.toHaveBeenCalled()
  })

  it('saves isolate removal before calling Show All for the final value', () => {
    const order: string[] = []
    const { onFieldChange, onShowAll } = renderSection()
    onFieldChange.mockImplementation(() => order.push('save'))
    onShowAll.mockImplementation(() => order.push('show-all'))

    fireEvent.click(screen.getByRole('button', { name: 'Remove' }))

    expect(onFieldChange).toHaveBeenCalledWith('seriesHighlight', [])
    expect(onShowAll).toHaveBeenCalledOnce()
    expect(order).toEqual(['save', 'show-all'])
  })
})
