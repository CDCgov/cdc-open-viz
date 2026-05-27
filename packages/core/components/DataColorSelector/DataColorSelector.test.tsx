import React from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import DataColorSelector from './DataColorSelector'
import { DATA_COLOR_PRESETS } from '../../helpers/dataColors'

describe('DataColorSelector', () => {
  it('preserves default data-color mapping behavior', () => {
    const onChange = vi.fn()

    render(<DataColorSelector value='#123456' onChange={onChange} />)

    fireEvent.click(screen.getByTitle('#123456'))

    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByTitle('None')).toBeInTheDocument()
    DATA_COLOR_PRESETS.forEach(color => {
      expect(screen.getByTitle(color)).toBeInTheDocument()
    })
    expect(screen.getByLabelText('Custom')).toBeInTheDocument()
    expect(screen.getByText('#123456')).toBeInTheDocument()

    fireEvent.click(screen.getByTitle(DATA_COLOR_PRESETS[1]))

    expect(onChange).toHaveBeenCalledWith(DATA_COLOR_PRESETS[1])
  })

  it('keeps the default none and custom color controls active', () => {
    const onChange = vi.fn()

    render(<DataColorSelector value={DATA_COLOR_PRESETS[0]} onChange={onChange} />)

    fireEvent.click(screen.getByTitle(DATA_COLOR_PRESETS[0]))
    fireEvent.click(screen.getByTitle('None'))

    expect(onChange).toHaveBeenCalledWith('')

    fireEvent.click(screen.getByTitle(DATA_COLOR_PRESETS[0]))
    fireEvent.change(screen.getByLabelText('Custom'), { target: { value: '#445566' } })

    expect(onChange).toHaveBeenCalledWith('#445566')
  })

  it('supports a restricted color list without none or custom controls', () => {
    const onChange = vi.fn()

    render(
      <DataColorSelector
        value='#111111'
        onChange={onChange}
        colors={['#111111', '', '#222222', '#111111']}
        allowNone={false}
        allowCustom={false}
        showCustomValue={false}
        aria-label='Color for Alpha'
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Color for Alpha' }))

    const options = within(screen.getByRole('listbox')).getAllByRole('option')
    expect(options.map(option => option.getAttribute('title'))).toEqual(['#111111', '#222222'])
    expect(screen.queryByTitle('None')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Custom')).not.toBeInTheDocument()

    fireEvent.click(screen.getByTitle('#222222'))

    expect(onChange).toHaveBeenCalledWith('#222222')
  })
})
