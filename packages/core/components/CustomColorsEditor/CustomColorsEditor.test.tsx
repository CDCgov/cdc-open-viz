import React, { useState } from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import CustomColorsEditor from './CustomColorsEditor'

describe('CustomColorsEditor', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('sanitizes invalid per-color input values to empty', () => {
    vi.useFakeTimers()
    const onChange = vi.fn()

    render(<CustomColorsEditor colors={['#111111', '#222222']} onChange={onChange} />)

    fireEvent.change(screen.getAllByPlaceholderText('#000000')[0], { target: { value: '#' } })
    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(onChange).toHaveBeenCalledWith(['', '#222222'])
  })

  it('keeps clearing invalid values when the stored color is already empty', () => {
    vi.useFakeTimers()

    const Harness = () => {
      const [colors, setColors] = useState([''])
      return <CustomColorsEditor colors={colors} onChange={setColors} />
    }

    render(<Harness />)

    fireEvent.change(screen.getByPlaceholderText('#000000'), { target: { value: 'whyte' } })
    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(screen.getByPlaceholderText('#000000')).toHaveValue('')

    fireEvent.change(screen.getByPlaceholderText('#000000'), { target: { value: '#' } })
    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(screen.getByPlaceholderText('#000000')).toHaveValue('')
  })

  it('preserves valid CSS color names from per-color inputs', () => {
    vi.useFakeTimers()
    const onChange = vi.fn()

    render(<CustomColorsEditor colors={['#111111', '#222222']} onChange={onChange} />)

    fireEvent.change(screen.getAllByPlaceholderText('#000000')[1], { target: { value: 'white' } })
    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(onChange).toHaveBeenCalledWith(['#111111', 'white'])
  })
})
