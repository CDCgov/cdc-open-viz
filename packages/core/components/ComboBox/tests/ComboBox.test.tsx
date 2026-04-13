import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ComboBox from '../ComboBox'

vi.mock('../../../assets/icon-magnifying-glass.svg', () => ({
  default: props => <svg data-testid='mock-magnifying-glass' {...props} />
}))

const options = [
  { value: '2023', label: '2023' },
  { value: '2024', label: '2024' },
  { value: '2025', label: '2025' }
]

const renderComboBox = (selected = '2023') => {
  const updateField = vi.fn()

  render(
    <ComboBox fieldName='year' label='Year' options={options} selected={selected} updateField={updateField} />
  )

  return {
    input: screen.getByRole('combobox'),
    updateField
  }
}

describe('ComboBox', () => {
  it('keeps focus on the input when escape closes the listbox', () => {
    const { input } = renderComboBox()

    input.focus()
    fireEvent.keyDown(input, { key: 'ArrowDown' })

    expect(input).toHaveAttribute('aria-expanded', 'true')

    fireEvent.keyDown(input, { key: 'Escape' })

    expect(input).toHaveFocus()
    expect(input).toHaveAttribute('aria-expanded', 'false')
    expect(input).toHaveDisplayValue('2023')
  })

  it('selects the active option with enter and restores the closed display', () => {
    const { input, updateField } = renderComboBox()

    input.focus()
    fireEvent.change(input, { target: { value: '2024' } })
    fireEvent.keyDown(input, { key: 'ArrowDown' })
    fireEvent.keyDown(input, { key: 'Enter' })

    expect(updateField).toHaveBeenCalledWith(null, null, 'year', '2024')
    expect(input).toHaveFocus()
    expect(input).toHaveAttribute('aria-expanded', 'false')
    expect(input).toHaveDisplayValue('2023')
  })
})
