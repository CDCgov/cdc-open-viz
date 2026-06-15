import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import MultiSelect from './MultiSelect'

vi.mock('../ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
}))

const options = [
  { value: 'asthma', label: 'Asthma' },
  { value: 'cancer', label: 'Cancer' }
]

const stableOptions = [
  { value: 'France', label: 'France' },
  { value: 'Germany', label: 'Germany' }
]

const ControlledMultiSelect = () => {
  const [selected, setSelected] = useState<(string | number)[]>([])

  return (
    <MultiSelect
      fieldName='countriesPicked'
      options={stableOptions}
      selected={selected}
      updateField={(_section, _subsection, _fieldName, value) => {
        setSelected(value)
      }}
    />
  )
}

describe('MultiSelect', () => {
  it('uses the supplied placeholder when no items are selected', () => {
    render(
      <MultiSelect
        fieldName='disease'
        options={options}
        selected={[]}
        updateField={vi.fn()}
        placeholder='Type to search for a disease'
      />
    )

    expect(screen.getByText('Type to search for a disease')).toBeInTheDocument()
  })

  it('falls back to the default placeholder when none is supplied', () => {
    render(<MultiSelect fieldName='disease' options={options} selected={[]} updateField={vi.fn()} />)

    expect(screen.getByText('- Select -')).toBeInTheDocument()
  })

  it('updates the closed display when selected values change', () => {
    const { container, rerender } = render(
      <MultiSelect
        fieldName='disease'
        options={options}
        selected={['asthma']}
        updateField={vi.fn()}
        placeholder='Type to search for a disease'
      />
    )

    const selectedDisplay = container.querySelector('.selected')
    expect(selectedDisplay).toHaveTextContent('Asthma')

    rerender(
      <MultiSelect
        fieldName='disease'
        options={options}
        selected={[]}
        updateField={vi.fn()}
        placeholder='Type to search for a disease'
      />
    )

    expect(selectedDisplay).not.toHaveTextContent('Asthma')
    expect(selectedDisplay).toHaveTextContent('Type to search for a disease')
  })

  it('keeps selected items in sync when options are stable across renders', async () => {
    const user = userEvent.setup()

    render(<ControlledMultiSelect />)

    await user.click(screen.getByRole('button', { name: 'Expand' }))
    await user.click(screen.getByRole('option', { name: 'France' }))
    await user.click(screen.getByRole('option', { name: 'Germany' }))

    expect(screen.getByText('France')).toBeInTheDocument()
    expect(screen.getByText('Germany')).toBeInTheDocument()
  })
})
