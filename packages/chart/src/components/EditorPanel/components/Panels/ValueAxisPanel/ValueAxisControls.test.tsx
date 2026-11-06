import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ValueAxisControls from './ValueAxisControls'
import {
  ValueAxisControlsProvider,
  type ValueAxisControlsContextValue,
  type ValueAxisControlsModel
} from './ValueAxisControlsContext'

vi.mock('@cdc/core/components/EditorPanel/Inputs', () => ({
  TextField: ({ display = true, label, fieldName, section, updateField, value, ...props }: any) =>
    display ? (
      <label>
        {label}
        <input
          data-control={fieldName}
          data-testid={`${section || 'root'}-${fieldName}`}
          value={value ?? ''}
          onChange={event => updateField(section, null, fieldName, event.target.value)}
          {...props}
        />
      </label>
    ) : null,
  CheckBox: ({ display = true, label, fieldName, section, updateField, value, ...props }: any) =>
    display ? (
      <label>
        <input
          data-control={fieldName}
          data-testid={`${section || 'root'}-${fieldName}`}
          type='checkbox'
          checked={Boolean(value)}
          onChange={() => updateField(section, null, fieldName, !value)}
          {...props}
        />
        {label}
      </label>
    ) : null,
  Select: ({ display = true, label, fieldName, section, updateField, value, options, ...props }: any) =>
    display ? (
      <label>
        {label}
        <select
          data-control={fieldName}
          data-testid={`${section || 'root'}-${fieldName}`}
          value={value ?? ''}
          onChange={event => updateField(section, null, fieldName, event.target.value)}
          {...props}
        >
          {options.map(option => {
            const optionValue = typeof option === 'string' ? option : option.value
            return (
              <option key={optionValue} value={optionValue}>
                {typeof option === 'string' ? option : option.label}
              </option>
            )
          })}
        </select>
      </label>
    ) : null
}))

vi.mock('@cdc/core/components/ui/Tooltip', () => ({
  default: Object.assign(({ children }: any) => <>{children}</>, {
    Target: ({ children }: any) => <>{children}</>,
    Content: ({ children }: any) => <>{children}</>
  })
}))
vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))

const baseModel: ValueAxisControlsModel = {
  visualizationType: 'Bar',
  visualizationSubType: 'regular',
  orientation: 'vertical',
  isBarRace: false,
  hasCategoricalAxis: false,
  seriesCount: 1,
  yAxis: {
    type: 'linear',
    label: 'Cases',
    titlePlacement: 'side',
    inlineLabel: '',
    size: 120,
    hideAxis: false,
    hideLabel: false,
    hideTicks: false,
    tickRotation: 0,
    numTicks: 5,
    gridLines: true,
    labelsAboveGridlines: false,
    smallestLeftAxisMax: 0,
    autoMaxStrategy: 'default',
    filterDomainBehavior: 'dynamic',
    max: '',
    min: '',
    enablePadding: true,
    scalePadding: 10
  },
  xAxis: {
    maxTickRotation: 45,
    hideAxis: false,
    hideLabel: false,
    hideTicks: false,
    max: '',
    min: '',
    target: 0,
    targetLabel: 'Target',
    showTargetLabel: true
  },
  dataFormat: {
    commas: false,
    abbreviated: false,
    roundTo: 0,
    preserveOriginalDecimals: false,
    prefix: '',
    suffix: ''
  },
  root: { isLegendValue: false, isResponsiveTicks: false },
  warnings: { max: 'max warning', min: 'min warning' },
  permissions: {
    gridLines: true,
    axisLine: true,
    axisLabels: true,
    axisTicks: true,
    axisMax: true,
    axisMin: true,
    autoMaxStrategy: true,
    filterDomainBehavior: true,
    yPadding: true
  },
  categoricalAxisEditor: <div data-testid='categorical-slot' />,
  anchorEditor: <div data-testid='anchor-slot' />
}

const renderControls = (modelOverrides: Partial<ValueAxisControlsModel> = {}) => {
  const value: ValueAxisControlsContextValue = {
    model: { ...baseModel, ...modelOverrides },
    onLegacyYAxisChange: vi.fn(),
    onCurrentYAxisChange: vi.fn(),
    onLegacyXAxisChange: vi.fn(),
    onDataFormatChange: vi.fn(),
    onRootChange: vi.fn(),
    onAxisTypeChange: vi.fn()
  }
  return {
    ...render(
      <ValueAxisControlsProvider value={value}>
        <ValueAxisControls />
      </ValueAxisControlsProvider>
    ),
    value
  }
}

const controlOrder = () =>
  screen
    .getAllByTestId(/.*/)
    .filter(element => element.hasAttribute('data-control'))
    .map(element => element.getAttribute('data-control'))

describe('ValueAxisControls', () => {
  it('requires its dedicated provider', () => {
    expect(() => render(<ValueAxisControls />)).toThrow('COVE: Value Axis controls context is null.')
  })

  it('preserves the HeatMap branch followed by shared formatting', () => {
    renderControls({ visualizationType: 'HeatMap', seriesCount: 0, anchorEditor: null })

    expect(controlOrder()).toEqual([
      'label',
      'titlePlacement',
      'size',
      'hideAxis',
      'hideTicks',
      'tickRotation',
      'commas',
      'abbreviated',
      'roundTo',
      'preserveOriginalDecimals',
      'prefix',
      'suffix'
    ])
    expect(screen.queryByText('Value Axis Domain')).not.toBeInTheDocument()
    expect(screen.queryByTestId('anchor-slot')).not.toBeInTheDocument()
  })

  it('preserves the Bar Race formatting-only branch', () => {
    renderControls({ isBarRace: true, anchorEditor: null })
    expect(controlOrder()).toEqual(['commas', 'roundTo', 'preserveOriginalDecimals', 'prefix', 'suffix'])
    expect(screen.queryByTestId('yAxis-type')).not.toBeInTheDocument()
  })

  it('preserves standard, formatting, vertical domain, and slot order', () => {
    renderControls()
    const order = controlOrder()

    expect(order.slice(0, 9)).toEqual([
      'type',
      'label',
      'titlePlacement',
      'inlineLabel',
      'isLegendValue',
      'numTicks',
      'tickRotation',
      'gridLines',
      'labelsAboveGridlines'
    ])
    expect(order).toContain('scalePadding')
    expect(screen.getByText('max warning')).toBeInTheDocument()
    expect(screen.getByText('min warning')).toBeInTheDocument()
    expect(screen.getByTestId('categorical-slot')).toBeInTheDocument()
    expect(screen.getByTestId('anchor-slot')).toBeInTheDocument()
  })

  it('routes standard and formatting controls through their narrow commands', () => {
    const { value } = renderControls()

    fireEvent.change(screen.getByTestId('yAxis-type'), { target: { value: 'logarithmic' } })
    fireEvent.change(screen.getByTestId('yAxis-label'), { target: { value: 'Rate' } })
    fireEvent.change(screen.getByTestId('yAxis-titlePlacement'), { target: { value: 'top' } })
    fireEvent.change(screen.getByTestId('yAxis-inlineLabel'), { target: { value: 'Rate' } })
    fireEvent.click(screen.getByTestId('root-isLegendValue'))
    fireEvent.click(screen.getByTestId('dataFormat-commas'))

    expect(value.onAxisTypeChange).toHaveBeenCalledWith('logarithmic')
    expect(value.onLegacyYAxisChange).toHaveBeenCalledWith('label', 'Rate')
    expect(value.onCurrentYAxisChange.mock.calls).toEqual([
      ['titlePlacement', 'top'],
      ['inlineLabel', 'Rate']
    ])
    expect(value.onRootChange).toHaveBeenCalledWith('isLegendValue', true)
    expect(value.onDataFormatChange).toHaveBeenCalledWith('commas', true)
  })

  it('routes horizontal visibility and domains to xAxis while shared settings remain yAxis', () => {
    const { value } = renderControls({ orientation: 'horizontal' })

    fireEvent.click(screen.getByTestId('xAxis-hideAxis'))
    fireEvent.change(screen.getByTestId('xAxis-max'), { target: { value: '500' } })
    fireEvent.change(screen.getByTestId('yAxis-smallestLeftAxisMax'), { target: { value: '100' } })
    fireEvent.change(screen.getByTestId('yAxis-autoMaxStrategy'), { target: { value: 'clean-top-tick' } })

    expect(value.onLegacyXAxisChange.mock.calls).toEqual([
      ['hideAxis', true],
      ['max', '500']
    ])
    expect(value.onLegacyYAxisChange).toHaveBeenCalledWith('smallestLeftAxisMax', '100')
    expect(value.onLegacyYAxisChange).toHaveBeenCalledWith('autoMaxStrategy', 'clean-top-tick')
  })

  it('preserves categorical, stacked, Deviation, and permission boundaries', () => {
    const { rerender, value } = renderControls({
      hasCategoricalAxis: true,
      visualizationSubType: 'stacked',
      permissions: { ...baseModel.permissions, gridLines: false, yPadding: false }
    })
    expect(screen.queryByTestId('yAxis-label')).not.toBeInTheDocument()
    expect(screen.queryByTestId('yAxis-min')).not.toBeInTheDocument()
    expect(screen.queryByTestId('yAxis-gridLines')).not.toBeInTheDocument()

    rerender(
      <ValueAxisControlsProvider
        value={{ ...value, model: { ...baseModel, visualizationType: 'Deviation Bar', orientation: 'horizontal' } }}
      >
        <ValueAxisControls />
      </ValueAxisControlsProvider>
    )
    expect(screen.getByTestId('xAxis-target')).toBeInTheDocument()
    expect(screen.getByTestId('xAxis-targetLabel')).toHaveValue('Target')
    expect(screen.getByTestId('xAxis-showTargetLabel')).toBeInTheDocument()
  })

  it('routes every remaining standard, formatting, and vertical-domain field', () => {
    const { value } = renderControls()

    fireEvent.change(screen.getByTestId('yAxis-type'), { target: { value: 'categorical-data-driven' } })
    fireEvent.change(screen.getByTestId('yAxis-numTicks'), { target: { value: '8' } })
    fireEvent.change(screen.getByTestId('yAxis-tickRotation'), { target: { value: '15' } })
    fireEvent.click(screen.getByTestId('yAxis-gridLines'))
    fireEvent.click(screen.getByTestId('yAxis-labelsAboveGridlines'))
    fireEvent.click(screen.getByTestId('yAxis-hideAxis'))
    fireEvent.click(screen.getByTestId('yAxis-hideLabel'))
    fireEvent.click(screen.getByTestId('yAxis-hideTicks'))
    fireEvent.change(screen.getByTestId('yAxis-max'), { target: { value: '900' } })
    fireEvent.change(screen.getByTestId('yAxis-min'), { target: { value: '10' } })
    fireEvent.change(screen.getByTestId('yAxis-smallestLeftAxisMax'), { target: { value: '100' } })
    fireEvent.change(screen.getByTestId('yAxis-autoMaxStrategy'), { target: { value: 'clean-top-tick' } })
    fireEvent.change(screen.getByTestId('yAxis-filterDomainBehavior'), { target: { value: 'stable' } })
    fireEvent.click(screen.getByTestId('yAxis-enablePadding'))
    fireEvent.change(screen.getByTestId('yAxis-scalePadding'), { target: { value: '20' } })
    fireEvent.click(screen.getByTestId('dataFormat-abbreviated'))
    fireEvent.change(screen.getByTestId('dataFormat-roundTo'), { target: { value: '2' } })
    fireEvent.click(screen.getByTestId('dataFormat-preserveOriginalDecimals'))
    fireEvent.change(screen.getByTestId('dataFormat-prefix'), { target: { value: '$' } })
    fireEvent.change(screen.getByTestId('dataFormat-suffix'), { target: { value: '%' } })

    expect(value.onAxisTypeChange).toHaveBeenCalledWith('categorical-data-driven')
    expect(value.onLegacyYAxisChange.mock.calls).toEqual(
      expect.arrayContaining([
        ['numTicks', '8'],
        ['tickRotation', '15'],
        ['gridLines', false],
        ['labelsAboveGridlines', true],
        ['hideAxis', true],
        ['hideLabel', true],
        ['hideTicks', true],
        ['max', '900'],
        ['min', '10'],
        ['smallestLeftAxisMax', '100'],
        ['autoMaxStrategy', 'clean-top-tick'],
        ['filterDomainBehavior', 'stable'],
        ['enablePadding', false],
        ['scalePadding', '20']
      ])
    )
    expect(value.onDataFormatChange.mock.calls).toEqual(
      expect.arrayContaining([
        ['abbreviated', true],
        ['roundTo', '2'],
        ['preserveOriginalDecimals', true],
        ['prefix', '$'],
        ['suffix', '%']
      ])
    )
  })

  it('routes HeatMap, responsive-horizontal, and Deviation fields', () => {
    const heatMap = renderControls({ visualizationType: 'HeatMap', anchorEditor: null })
    fireEvent.change(screen.getByTestId('yAxis-label'), { target: { value: 'Region' } })
    fireEvent.change(screen.getByTestId('yAxis-titlePlacement'), { target: { value: 'top' } })
    fireEvent.change(screen.getByTestId('yAxis-size'), { target: { value: '160' } })
    fireEvent.click(screen.getByTestId('yAxis-hideAxis'))
    fireEvent.click(screen.getByTestId('yAxis-hideTicks'))
    fireEvent.change(screen.getByTestId('yAxis-tickRotation'), { target: { value: '30' } })
    expect(heatMap.value.onLegacyYAxisChange.mock.calls).toEqual(
      expect.arrayContaining([
        ['label', 'Region'],
        ['titlePlacement', 'top'],
        ['size', '160'],
        ['hideAxis', true],
        ['hideTicks', true],
        ['tickRotation', '30']
      ])
    )
    heatMap.unmount()

    const horizontal = renderControls({
      orientation: 'horizontal',
      root: { ...baseModel.root, isResponsiveTicks: true }
    })
    fireEvent.click(screen.getByTestId('root-isResponsiveTicks'))
    fireEvent.change(screen.getByTestId('xAxis-maxTickRotation'), { target: { value: '60' } })
    fireEvent.click(screen.getByTestId('xAxis-hideAxis'))
    fireEvent.click(screen.getByTestId('xAxis-hideLabel'))
    fireEvent.click(screen.getByTestId('xAxis-hideTicks'))
    fireEvent.change(screen.getByTestId('xAxis-max'), { target: { value: '500' } })
    fireEvent.change(screen.getByTestId('xAxis-min'), { target: { value: '5' } })
    expect(horizontal.value.onRootChange).toHaveBeenCalledWith('isResponsiveTicks', false)
    expect(horizontal.value.onLegacyXAxisChange.mock.calls).toEqual(
      expect.arrayContaining([
        ['maxTickRotation', '60'],
        ['hideAxis', true],
        ['hideLabel', true],
        ['hideTicks', true],
        ['max', '500'],
        ['min', '5']
      ])
    )
    horizontal.unmount()

    const deviation = renderControls({ visualizationType: 'Deviation Bar', orientation: 'horizontal' })
    fireEvent.change(screen.getByTestId('xAxis-target'), { target: { value: '50' } })
    fireEvent.change(screen.getByTestId('xAxis-targetLabel'), { target: { value: 'Goal' } })
    fireEvent.click(screen.getByTestId('xAxis-showTargetLabel'))
    expect(deviation.value.onLegacyXAxisChange.mock.calls).toEqual(
      expect.arrayContaining([
        ['target', '50'],
        ['targetLabel', 'Goal'],
        ['showTargetLabel', false]
      ])
    )
  })

  it('preserves legacy partial-value fallbacks and undefined-orientation visibility', () => {
    const heatMap = renderControls({
      visualizationType: 'HeatMap',
      yAxis: { type: 'linear' } as ValueAxisControlsModel['yAxis'],
      dataFormat: {} as ValueAxisControlsModel['dataFormat'],
      root: { isLegendValue: false, isResponsiveTicks: true },
      anchorEditor: null
    })

    expect(screen.getByTestId('yAxis-titlePlacement')).toHaveValue('side')
    expect(screen.getByTestId('yAxis-tickRotation')).toHaveValue(0)
    expect(screen.getByTestId('dataFormat-roundTo')).toHaveValue(0)
    heatMap.unmount()

    renderControls({ orientation: undefined, root: { isLegendValue: false, isResponsiveTicks: true } })
    expect(screen.queryByTestId('yAxis-tickRotation')).not.toBeInTheDocument()
  })
})
