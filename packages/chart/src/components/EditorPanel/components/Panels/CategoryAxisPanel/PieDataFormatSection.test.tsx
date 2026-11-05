import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import PieDataFormatSection from './PieDataFormatSection'
import {
  PieDataFormatSectionProvider,
  type PieDataFormatSectionContextValue,
  type PieDataFormatSectionModel
} from './PieDataFormatSectionContext'

vi.mock('@cdc/core/components/EditorPanel/Inputs', () => ({
  TextField: ({ label, fieldName, section, updateField, value, tooltip, ...props }: any) => (
    <label>
      <span>{label}</span>
      <input
        data-field={fieldName}
        data-testid={fieldName}
        name={fieldName}
        value={value ?? ''}
        onChange={event => updateField(section, null, fieldName, event.target.value)}
        {...props}
      />
      {tooltip}
    </label>
  ),
  CheckBox: ({ label, fieldName, section, updateField, value, tooltip, ...props }: any) => (
    <label>
      <input
        data-field={fieldName}
        data-testid={fieldName}
        name={fieldName}
        type='checkbox'
        checked={Boolean(value)}
        onChange={() => updateField(section, null, fieldName, !value)}
        {...props}
      />
      <span>{label}</span>
      {tooltip}
    </label>
  ),
  Select: ({ label, fieldName, section, updateField, value, options, tooltip, initial: _initial, ...props }: any) => (
    <label>
      <span>{label}</span>
      <select
        data-field={fieldName}
        data-testid={fieldName}
        name={fieldName}
        value={value}
        onChange={event => updateField(section, null, fieldName, event.target.value)}
        {...props}
      >
        <option value=''>Select</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {tooltip}
    </label>
  )
}))

vi.mock('@cdc/core/components/ui/Tooltip', () => ({
  default: Object.assign(({ children }: any) => <>{children}</>, {
    Target: ({ children }: any) => <>{children}</>,
    Content: ({ children }: any) => <>{children}</>
  })
}))

vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))

const model: PieDataFormatSectionModel = {
  dataKey: 'value',
  label: 'Cases',
  columnOptions: ['category', 'value', 'alternate'],
  commas: true,
  abbreviated: false,
  showPiePercent: false,
  roundTo: 2,
  preserveOriginalDecimals: false,
  prefix: '$',
  suffix: '%'
}

const renderSection = (modelOverrides: Partial<PieDataFormatSectionModel> = {}) => {
  const onYAxisChange = vi.fn()
  const onDataFormatChange = vi.fn()
  const value: PieDataFormatSectionContextValue = {
    model: { ...model, ...modelOverrides },
    onYAxisChange,
    onDataFormatChange
  }

  return {
    ...render(
      <PieDataFormatSectionProvider value={value}>
        <PieDataFormatSection />
      </PieDataFormatSectionProvider>
    ),
    onYAxisChange,
    onDataFormatChange
  }
}

describe('PieDataFormatSection', () => {
  it('requires its dedicated provider', () => {
    expect(() => render(<PieDataFormatSection />)).toThrow('COVE: Pie Data Format section context is null.')
  })

  it('preserves control order, required metadata, options, limits, and layout', () => {
    renderSection()

    const fields = screen.getAllByTestId(/.*/).filter(element => element.hasAttribute('data-field'))
    expect(fields.map(element => element.getAttribute('data-field'))).toEqual([
      'dataKey',
      'label',
      'commas',
      'abbreviated',
      'showPiePercent',
      'roundTo',
      'preserveOriginalDecimals',
      'prefix',
      'suffix'
    ])
    expect(screen.getByText('Number Formatting')).toHaveClass('divider-heading')
    expect(screen.getByTestId('dataKey')).toBeRequired()
    expect(screen.getByTestId('dataKey')).toHaveAttribute('data-required-field-control', 'pie-data-column')
    expect(
      Array.from((screen.getByTestId('dataKey') as HTMLSelectElement).options).map(option => option.value)
    ).toEqual(['', 'category', 'value', 'alternate'])
    expect(screen.getByTestId('label')).toHaveAttribute('maxlength', '35')
    expect(screen.getByTestId('roundTo')).toHaveAttribute('type', 'number')
    expect(screen.getByTestId('roundTo')).toHaveAttribute('min', '0')
    expect(screen.getByTestId('prefix').closest('.two-col-inputs')).toBe(
      screen.getByTestId('suffix').closest('.two-col-inputs')
    )
  })

  it('routes both y-axis fields through the narrow y-axis command', () => {
    const { onYAxisChange, onDataFormatChange } = renderSection()

    fireEvent.change(screen.getByTestId('dataKey'), { target: { value: 'alternate' } })
    fireEvent.change(screen.getByTestId('label'), { target: { value: 'Updated cases' } })

    expect(onYAxisChange.mock.calls).toEqual([
      ['dataKey', 'alternate'],
      ['label', 'Updated cases']
    ])
    expect(onDataFormatChange).not.toHaveBeenCalled()
  })

  it('routes every formatting field through the narrow formatting command', () => {
    const { onYAxisChange, onDataFormatChange } = renderSection()

    fireEvent.click(screen.getByTestId('commas'))
    fireEvent.click(screen.getByTestId('abbreviated'))
    fireEvent.click(screen.getByTestId('showPiePercent'))
    fireEvent.change(screen.getByTestId('roundTo'), { target: { value: '3' } })
    fireEvent.click(screen.getByTestId('preserveOriginalDecimals'))
    fireEvent.change(screen.getByTestId('prefix'), { target: { value: 'USD ' } })
    fireEvent.change(screen.getByTestId('suffix'), { target: { value: ' cases' } })

    expect(onDataFormatChange.mock.calls).toEqual([
      ['commas', false],
      ['abbreviated', true],
      ['showPiePercent', true],
      ['roundTo', '3'],
      ['preserveOriginalDecimals', true],
      ['prefix', 'USD '],
      ['suffix', ' cases']
    ])
    expect(onYAxisChange).not.toHaveBeenCalled()
  })

  it('preserves legacy empty values and the falsy round-to fallback', () => {
    renderSection({
      dataKey: undefined,
      label: undefined,
      commas: undefined,
      abbreviated: undefined,
      showPiePercent: undefined,
      roundTo: undefined,
      preserveOriginalDecimals: undefined,
      prefix: undefined,
      suffix: undefined
    })

    expect(screen.getByTestId('dataKey')).toHaveValue('')
    expect(screen.getByTestId('label')).toHaveValue('')
    expect(screen.getByTestId('roundTo')).toHaveValue(0)
    expect(screen.getByTestId('prefix')).toHaveValue('')
    expect(screen.getByTestId('suffix')).toHaveValue('')
  })

  it('preserves Pie-specific help copy', () => {
    renderSection()

    expect(screen.getByText('Select the source data to be visually represented.')).toBeInTheDocument()
    expect(
      screen.getByText('Override the data column name shown in tooltips and data table (35 character limit)')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Enter a data prefix to display in the data table and chart tooltips, if applicable.')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Enter a data suffix to display in the data table and tooltips, if applicable.')
    ).toBeInTheDocument()
    expect(screen.queryByText('Enter a data prefix (such as "$"), if applicable.')).not.toBeInTheDocument()
  })
})
