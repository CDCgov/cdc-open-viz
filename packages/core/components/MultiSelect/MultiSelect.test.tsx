import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import MultiSelect from './MultiSelect'

vi.mock('../ui/Icon', () => ({
  default: () => null
}))

describe('MultiSelect', () => {
  it('updates selected items when the selected prop changes without option changes', () => {
    const options = [
      { value: 'All', label: 'All' },
      { value: 'Male', label: 'Male' },
      { value: 'Female', label: 'Female' },
      { value: 'Both Sexes', label: 'Both Sexes' }
    ]

    const { container, rerender } = render(
      <MultiSelect fieldName='sex' options={options} selected={['Male', 'Female']} updateField={vi.fn()} />
    )

    const getSelectedContainer = () => container.querySelector('.selected')

    expect(getSelectedContainer()).toHaveTextContent('Male')
    expect(getSelectedContainer()).toHaveTextContent('Female')

    rerender(<MultiSelect fieldName='sex' options={options} selected={['Both Sexes']} updateField={vi.fn()} />)

    expect(getSelectedContainer()).not.toHaveTextContent('Male')
    expect(getSelectedContainer()).not.toHaveTextContent('Female')
    expect(screen.getByText('Both Sexes')).toBeInTheDocument()
  })
})
