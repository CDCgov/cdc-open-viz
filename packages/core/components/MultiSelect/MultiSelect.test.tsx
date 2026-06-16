import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import MultiSelect from './MultiSelect'

vi.mock('../ui/Icon', () => ({
  default: ({ display }: { display?: string }) => <span data-testid={`icon-${display || 'unknown'}`} />
}))

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
