import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { createDefaultBubbleLayer } from '../../../helpers/bubbleLayers'
import type { MapConfig } from '../../../types/MapConfig'
import BubbleSizeLegend from './BubbleSizeLegend'

const renderSizeLegend = (singleItemLabel: string | undefined, values: (number | string)[]) =>
  render(
    <BubbleSizeLegend
      config={{ legend: { style: 'gradient' } } as MapConfig}
      layer={createDefaultBubbleLayer({ legend: { size: { singleItemLabel } } })}
      items={values.map(value => ({ value, label: String(value), radius: 14 }))}
      title=''
      description=''
      legendTitleClasses={[]}
      legendDescriptionClasses={[]}
    />
  )

describe('single-item bubble size legend label', () => {
  it.each([1, 'Present'])('replaces a sole numeric or categorical label (%s) and inherits text size', value => {
    const { container } = renderSizeLegend('  Recent cases  ', [value])
    expect(screen.getByText('Recent cases')).toBeTruthy()
    const list = screen.getByRole('list')
    expect(list.classList.contains('bubble-size-legend--single-item-label')).toBe(true)
    expect(list.classList.contains('bubble-size-legend--gradient')).toBe(false)
    expect(container.querySelector('circle')?.getAttribute('r')).toBe('14')
  })

  it.each([undefined, '', '   '])('keeps the original label and compact typography for blank override %s', label => {
    renderSizeLegend(label, [1])
    expect(screen.getByText('1')).toBeTruthy()
    expect(screen.getByRole('list').classList.contains('bubble-size-legend--gradient')).toBe(true)
    expect(screen.getByRole('list').classList.contains('bubble-size-legend--single-item-label')).toBe(false)
  })

  it('keeps multiple labels even when marker radii are equal', () => {
    renderSizeLegend('Recent cases', [1, 2])
    expect(screen.queryByText('Recent cases')).toBeNull()
    expect(screen.getAllByRole('listitem').map(item => item.textContent)).toEqual(['1', '2'])
    expect(screen.getByRole('list').classList.contains('bubble-size-legend--gradient')).toBe(true)
  })

  it('does not invent an item when no eligible values exist', () => {
    const { container } = renderSizeLegend('Recent cases', [])
    expect(container.firstChild).toBeNull()
  })
})
