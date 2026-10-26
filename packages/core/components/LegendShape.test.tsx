import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import LegendShape from './LegendShape'

afterEach(cleanup)

describe('pattern swatches', () => {
  it('uses independent contrasting colors and unique SVG references for the same pattern across rows', () => {
    const patternInfo = { pattern: 'diagonalLines', patternId: 'map--active--0--table', color: '' }
    const { container } = render(<>
      <LegendShape fill='#023F91' patternInfo={patternInfo} />
      <LegendShape fill='#EEEEEE' patternInfo={patternInfo} />
      <LegendShape fill='white' patternInfo={patternInfo} />
    </>)
    const svgs = Array.from(container.querySelectorAll('svg'))
    const ids = svgs.map(svg => svg.querySelector('pattern')!.id)
    expect(new Set(ids).size).toBe(3)
    expect(svgs.map(svg => svg.querySelector('line')!.getAttribute('stroke')))
      .toEqual(['#FFFFFF', '#1C1D1F', '#1C1D1F'])
    svgs.forEach((svg, index) => {
      expect(svg.lastElementChild!.getAttribute('fill')).toBe(`url(#${ids[index]})`)
    })
  })

  it('preserves an explicit pattern color', () => {
    const { container } = render(<LegendShape fill='#023F91'
      patternInfo={{ pattern: 'circles', patternId: 'explicit', color: 'orange' }} />)
    expect(container.querySelector('pattern circle')!.getAttribute('fill')).toBe('orange')
  })
})
