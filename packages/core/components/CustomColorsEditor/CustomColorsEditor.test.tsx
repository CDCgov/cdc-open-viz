import React, { useState } from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import CustomColorsEditor from './CustomColorsEditor'

describe('CustomColorsEditor', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('keeps invalid per-color drafts while focused and sanitizes to empty on blur', () => {
    const onChange = vi.fn()

    render(<CustomColorsEditor colors={['#111111', '#222222']} onChange={onChange} />)

    const input = screen.getAllByPlaceholderText('#000000')[0]

    fireEvent.change(input, { target: { value: '#' } })

    expect(input).toHaveValue('#')
    expect(onChange).not.toHaveBeenCalled()

    fireEvent.blur(input)

    expect(onChange).toHaveBeenCalledWith(['', '#222222'])
    expect(input).toHaveValue('')
  })

  it('keeps clearing invalid values when the stored color is already empty', () => {
    const Harness = () => {
      const [colors, setColors] = useState([''])
      return <CustomColorsEditor colors={colors} onChange={setColors} />
    }

    render(<Harness />)

    fireEvent.change(screen.getByPlaceholderText('#000000'), { target: { value: 'whyte' } })
    fireEvent.blur(screen.getByPlaceholderText('#000000'))

    expect(screen.getByPlaceholderText('#000000')).toHaveValue('')

    fireEvent.change(screen.getByPlaceholderText('#000000'), { target: { value: '#' } })
    fireEvent.blur(screen.getByPlaceholderText('#000000'))

    expect(screen.getByPlaceholderText('#000000')).toHaveValue('')
  })

  it('preserves valid CSS color names from per-color inputs', () => {
    vi.useFakeTimers()
    const onChange = vi.fn()

    render(<CustomColorsEditor colors={['#111111', '#222222']} onChange={onChange} />)

    fireEvent.change(screen.getAllByPlaceholderText('#000000')[1], { target: { value: 'white' } })

    expect(onChange).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(300)
    })

    expect(onChange).toHaveBeenCalledWith(['#111111', 'white'])
  })

  it('allows slow typing through invalid intermediate color-name drafts', () => {
    vi.useFakeTimers()
    const onChange = vi.fn()

    render(<CustomColorsEditor colors={['#111111']} onChange={onChange} />)

    const input = screen.getByPlaceholderText('#000000')

    fireEvent.change(input, { target: { value: 'w' } })
    expect(input).toHaveValue('w')
    expect(onChange).not.toHaveBeenCalled()

    fireEvent.change(input, { target: { value: 'wh' } })
    expect(input).toHaveValue('wh')
    expect(onChange).not.toHaveBeenCalled()

    fireEvent.change(input, { target: { value: 'white' } })

    expect(input).toHaveValue('white')
    expect(onChange).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(300)
    })

    expect(onChange).toHaveBeenCalledWith(['white'])
  })

  it('debounces valid hex commits while keeping typing responsive', () => {
    vi.useFakeTimers()
    const onChange = vi.fn()

    render(<CustomColorsEditor colors={['#111111']} onChange={onChange} />)

    const input = screen.getByPlaceholderText('#000000')

    fireEvent.change(input, { target: { value: '#222' } })
    expect(input).toHaveValue('#222')
    expect(onChange).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(150)
    })

    fireEvent.change(input, { target: { value: '#222222' } })
    expect(input).toHaveValue('#222222')

    act(() => {
      vi.advanceTimersByTime(299)
    })

    expect(onChange).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(1)
    })

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(['#222222'])
  })

  it('waits until blur to trim otherwise valid color drafts', () => {
    vi.useFakeTimers()
    const onChange = vi.fn()

    render(<CustomColorsEditor colors={['#111111']} onChange={onChange} />)

    const input = screen.getByPlaceholderText('#000000')

    fireEvent.change(input, { target: { value: ' white ' } })

    act(() => {
      vi.advanceTimersByTime(300)
    })

    expect(input).toHaveValue(' white ')
    expect(onChange).not.toHaveBeenCalled()

    fireEvent.blur(input)

    expect(input).toHaveValue('white')
    expect(onChange).toHaveBeenCalledWith(['white'])
  })

  it('syncs external color changes over a focused draft', () => {
    const onChange = vi.fn()
    const { rerender } = render(<CustomColorsEditor colors={['#111111']} onChange={onChange} />)
    const input = screen.getByPlaceholderText('#000000')

    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'wh' } })

    expect(input).toHaveValue('wh')

    rerender(<CustomColorsEditor colors={['#222222']} onChange={onChange} />)

    expect(screen.getByPlaceholderText('#000000')).toHaveValue('#222222')
  })

  it('does not reorder colors when a drag starts from the input', () => {
    const onChange = vi.fn()
    const { container } = render(<CustomColorsEditor colors={['#111111', '#222222']} onChange={onChange} />)
    const input = screen.getAllByPlaceholderText('#000000')[0]
    const items = container.querySelectorAll('.custom-color-item')

    fireEvent.dragStart(input)
    fireEvent.dragOver(items[1])
    fireEvent.drop(items[1])

    expect(onChange).not.toHaveBeenCalled()
  })

  it('still reorders colors when dragging from the handle', () => {
    const onChange = vi.fn()
    const { container } = render(<CustomColorsEditor colors={['#111111', '#222222']} onChange={onChange} />)
    const handle = container.querySelector('.color-item-drag-handle')
    const items = container.querySelectorAll('.custom-color-item')
    const setDragImage = vi.fn()

    fireEvent.dragStart(handle!, {
      dataTransfer: {
        effectAllowed: '',
        setData: vi.fn(),
        setDragImage
      },
      clientX: 0,
      clientY: 0
    })
    fireEvent.dragOver(items[1])
    fireEvent.drop(items[1])

    expect(setDragImage).toHaveBeenCalledWith(items[0], expect.any(Number), expect.any(Number))
    expect(onChange).toHaveBeenCalledWith(['#222222', '#111111'])
  })
})
