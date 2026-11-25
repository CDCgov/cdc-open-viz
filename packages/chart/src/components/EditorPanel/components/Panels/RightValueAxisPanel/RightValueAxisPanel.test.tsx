import React from 'react'
import { Accordion } from 'react-accessible-accordion'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import RightValueAxisSection, { type RightValueAxisModel } from './RightValueAxisPanel'

vi.mock('@cdc/core/components/EditorPanel/Inputs', () => ({
  TextField: ({ label, fieldName, section, updateField, value, tooltip: _tooltip, ...props }: any) => (
    <label>
      <span>{label}</span>
      <input
        data-field={fieldName}
        data-testid={fieldName}
        name={fieldName}
        value={value}
        onChange={event => updateField(section, null, fieldName, event.target.value)}
        {...props}
      />
    </label>
  ),
  CheckBox: ({ label, fieldName, section, updateField, value, ...props }: any) => (
    <label>
      <input
        data-field={fieldName}
        data-testid={fieldName}
        name={fieldName}
        type='checkbox'
        checked={value}
        onChange={() => updateField(section, null, fieldName, !value)}
        {...props}
      />
      <span>{label}</span>
    </label>
  ),
  Select: ({ label, fieldName, section, updateField, value, options, ...props }: any) => (
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
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}))

vi.mock('@cdc/core/components/ui/Tooltip', () => ({
  default: Object.assign(({ children }: any) => <>{children}</>, {
    Target: ({ children }: any) => <>{children}</>,
    Content: ({ children }: any) => <>{children}</>
  })
}))

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: () => null
}))

const model: RightValueAxisModel = {
  rightLabel: 'Right axis',
  rightTitlePlacement: 'side',
  rightNumTicks: 6,
  rightCommas: true,
  rightRoundTo: 2,
  rightPrefix: '$',
  rightSuffix: '%',
  rightHideAxis: false,
  rightHideLabel: true,
  rightHideTicks: false,
  rightMax: '100',
  rightMin: '10',
  smallestRightAxisMax: 25,
  rightMaxMessage: 'Right maximum warning',
  rightMinMessage: 'Legacy minimum warning'
}

const renderSection = (modelOverrides: Partial<RightValueAxisModel> = {}) => {
  const onYAxisChange = vi.fn()
  const onDataFormatChange = vi.fn()
  const onTitlePlacementChange = vi.fn()
  const view = render(
    <Accordion allowZeroExpanded>
      <RightValueAxisSection
        model={{ ...model, ...modelOverrides }}
        anchorEditor={<div data-testid='right-anchor-editor'>Right anchor editor</div>}
        onYAxisChange={onYAxisChange}
        onDataFormatChange={onDataFormatChange}
        onTitlePlacementChange={onTitlePlacementChange}
      />
    </Accordion>
  )

  fireEvent.click(screen.getByRole('button', { name: 'Right Value Axis' }))

  return { ...view, onYAxisChange, onDataFormatChange, onTitlePlacementChange }
}

describe('RightValueAxisSection', () => {
  it('routes every axis field through the axis command with the exact field and value', () => {
    const { onYAxisChange, onDataFormatChange, onTitlePlacementChange } = renderSection()

    const changes = [
      ['rightLabel', 'Updated label'],
      ['rightNumTicks', '8'],
      ['rightMax', '200'],
      ['rightMin', '-20'],
      ['smallestRightAxisMax', '50']
    ] as const

    changes.forEach(([field, value]) => {
      fireEvent.change(screen.getByTestId(field), { target: { value } })
      expect(onYAxisChange).toHaveBeenLastCalledWith(field, value)
    })
    ;(['rightHideAxis', 'rightHideLabel', 'rightHideTicks'] as const).forEach(field => {
      const input = screen.getByTestId(field) as HTMLInputElement
      fireEvent.click(input)
      expect(onYAxisChange).toHaveBeenLastCalledWith(field, !model[field])
    })

    expect(onYAxisChange).toHaveBeenCalledTimes(8)
    expect(onDataFormatChange).not.toHaveBeenCalled()
    expect(onTitlePlacementChange).not.toHaveBeenCalled()
  })

  it('routes every formatting field through the formatting command', () => {
    const { onYAxisChange, onDataFormatChange, onTitlePlacementChange } = renderSection()

    fireEvent.click(screen.getByTestId('rightCommas'))
    fireEvent.change(screen.getByTestId('rightRoundTo'), { target: { value: '3' } })
    fireEvent.change(screen.getByTestId('rightPrefix'), { target: { value: '£' } })
    fireEvent.change(screen.getByTestId('rightSuffix'), { target: { value: ' units' } })

    expect(onDataFormatChange.mock.calls).toEqual([
      ['rightCommas', false],
      ['rightRoundTo', '3'],
      ['rightPrefix', '£'],
      ['rightSuffix', ' units']
    ])
    expect(onYAxisChange).not.toHaveBeenCalled()
    expect(onTitlePlacementChange).not.toHaveBeenCalled()
  })

  it('keeps title placement on its distinct command', () => {
    const { onYAxisChange, onDataFormatChange, onTitlePlacementChange } = renderSection()

    fireEvent.change(screen.getByTestId('rightTitlePlacement'), { target: { value: 'top' } })

    expect(onTitlePlacementChange).toHaveBeenCalledOnce()
    expect(onTitlePlacementChange).toHaveBeenCalledWith('top')
    expect(onYAxisChange).not.toHaveBeenCalled()
    expect(onDataFormatChange).not.toHaveBeenCalled()
  })

  it('limits side labels to 35 characters and removes the limit for top labels', () => {
    const sideView = renderSection()

    expect(screen.getByTestId('rightLabel')).toHaveAttribute('maxlength', '35')

    sideView.unmount()
    renderSection({ rightTitlePlacement: 'top' })

    expect(screen.getByTestId('rightLabel')).not.toHaveAttribute('maxlength')
  })

  it('preserves control order, defaults, placeholders, and the final anchor slot', () => {
    renderSection({
      rightTitlePlacement: undefined,
      rightNumTicks: undefined,
      rightMax: undefined,
      rightMin: undefined
    })

    const fields = screen.getAllByTestId(/.*/).filter(element => element.hasAttribute('data-field'))
    expect(fields.map(element => element.getAttribute('data-field'))).toEqual([
      'rightLabel',
      'rightTitlePlacement',
      'rightNumTicks',
      'rightCommas',
      'rightRoundTo',
      'rightPrefix',
      'rightSuffix',
      'rightHideAxis',
      'rightHideLabel',
      'rightHideTicks',
      'rightMax',
      'rightMin',
      'smallestRightAxisMax'
    ])
    expect(screen.getByTestId('rightTitlePlacement')).toHaveValue('top')
    expect(screen.getByTestId('rightNumTicks')).toHaveAttribute('placeholder', 'Auto')
    expect(screen.getByTestId('rightMax')).toHaveAttribute('placeholder', 'Auto')
    expect(screen.getByTestId('rightMin')).toHaveAttribute('placeholder', 'Auto')
    expect(screen.getByTestId('smallestRightAxisMax')).toHaveAttribute('placeholder', 'Auto')
    expect(screen.getByText('Number Formatting')).toBeInTheDocument()
    expect(screen.getByText('Right Axis Domain')).toBeInTheDocument()

    const panel = screen.getByTestId('right-anchor-editor').parentElement!
    const domainGroup = panel.querySelector('.axis-domain-group')!
    const anchorEditor = screen.getByTestId('right-anchor-editor')
    expect(domainGroup.compareDocumentPosition(anchorEditor) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(anchorEditor).toBe(panel.lastElementChild)
  })

  it('keeps maximum and legacy minimum warnings beside their existing domain fields', () => {
    renderSection()

    const maxField = screen.getByTestId('rightMax').closest('.axis-domain-group__field') as HTMLElement
    const minField = screen.getByTestId('rightMin').closest('.axis-domain-group__field') as HTMLElement

    expect(within(maxField).getByText('Right maximum warning')).toHaveClass('axis-domain-warning')
    expect(within(maxField).queryByText('Legacy minimum warning')).not.toBeInTheDocument()
    expect(within(minField).getByText('Legacy minimum warning')).toHaveClass('axis-domain-warning')
    expect(within(minField).queryByText('Right maximum warning')).not.toBeInTheDocument()
  })
})
