import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import SvgIconSelect from './SvgIconSelect'

vi.mock('../../ui/Icon', () => ({
  default: ({ display }: { display?: string }) => <span data-testid={`icon-${display || 'unknown'}`} />
}))

describe('SvgIconSelect', () => {
  it('sorts icon options alphabetically by label while keeping empty options pinned first', () => {
    render(
      <SvgIconSelect
        value=''
        options={[
          { value: '', label: 'None' },
          { value: 'trend-arrow-up', label: 'Trend up' },
          { value: 'link-external', label: 'External link' },
          { value: 'trend-arrow-no-change', label: 'Trend flat' }
        ]}
        onChange={vi.fn()}
      />
    )

    fireEvent.click(screen.getByRole('button', { expanded: false }))

    expect(screen.getAllByRole('option').map(option => option.textContent?.trim())).toEqual([
      'None',
      'External link',
      'Trend flat',
      'Trend up'
    ])
  })

  it('anchors the dropdown directly beneath the trigger instead of using viewport-fixed positioning', () => {
    render(
      <SvgIconSelect
        value='trend-arrow-up'
        options={[{ value: 'trend-arrow-up', label: 'Trend up' }]}
        onChange={vi.fn()}
      />
    )

    fireEvent.click(screen.getByRole('button', { expanded: false }))

    const listbox = screen.getByRole('listbox', { name: 'Select an icon' })
    expect(listbox).toHaveStyle({
      position: 'absolute',
      top: 'calc(100% + 0.25rem)',
      left: '0px'
    })
  })

  it('shows five options without scrolling and adds scrolling when a sixth is present', () => {
    const fiveOptions = Array.from({ length: 5 }, (_, index) => ({
      value: `icon-${index}`,
      label: `Icon ${index}`
    }))

    const { rerender } = render(<SvgIconSelect value='icon-0' options={fiveOptions} onChange={vi.fn()} />)

    fireEvent.click(screen.getByRole('button', { expanded: false }))

    let listbox = screen.getByRole('listbox', { name: 'Select an icon' }) as HTMLUListElement
    expect(listbox.style.maxHeight).toBe('')
    expect(listbox.style.overflowY).toBe('')

    rerender(
      <SvgIconSelect
        value='icon-0'
        options={[...fiveOptions, { value: 'icon-5', label: 'Icon 5' }]}
        onChange={vi.fn()}
      />
    )

    fireEvent.click(screen.getByRole('button', { expanded: true }))
    fireEvent.click(screen.getByRole('button', { expanded: false }))

    listbox = screen.getByRole('listbox', { name: 'Select an icon' }) as HTMLUListElement
    expect(listbox.style.maxHeight).toBe('213px')
    expect(listbox.style.overflowY).toBe('auto')
  })
})
