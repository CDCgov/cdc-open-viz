import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { TextField } from './Inputs'

describe('TextField', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('preserves below-minimum prefixes while typing a valid number', () => {
    vi.useFakeTimers()
    const updateField = vi.fn()

    render(
      <TextField
        value={420}
        type='number'
        section='network'
        fieldName='height'
        label='Height'
        min={160}
        updateField={updateField}
      />
    )

    const input = screen.getByLabelText('Height')
    expect(input).toHaveAttribute('min', '160')

    fireEvent.change(input, { target: { value: '' } })
    fireEvent.change(input, { target: { value: '3' } })
    expect(input).toHaveValue(3)
    fireEvent.change(input, { target: { value: '36' } })
    expect(input).toHaveValue(36)
    fireEvent.change(input, { target: { value: '360' } })
    expect(input).toHaveValue(360)

    act(() => vi.advanceTimersByTime(500))

    expect(updateField).toHaveBeenCalledWith('network', null, 'height', '360', null)
  })
})
