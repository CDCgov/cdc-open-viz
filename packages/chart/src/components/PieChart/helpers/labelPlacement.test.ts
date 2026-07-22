import { describe, expect, it } from 'vitest'
import { getPieLabelPlacement, getPieLabelPosition } from './labelPlacement'

describe('pie label placement', () => {
  it('keeps labels inside regular pie slices when the slice has enough room', () => {
    expect(
      getPieLabelPlacement({
        startAngle: 0,
        endAngle: Math.PI / 2,
        innerRadius: 0,
        outerRadius: 120,
        labelWidth: 50,
        labelHeight: 28,
        isDonut: false
      })
    ).toBe('inside')
  })

  it('moves regular pie labels outside when they are too wide for the slice', () => {
    expect(
      getPieLabelPlacement({
        startAngle: 0,
        endAngle: Math.PI / 8,
        innerRadius: 0,
        outerRadius: 120,
        labelWidth: 80,
        labelHeight: 28,
        isDonut: false
      })
    ).toBe('outside')
  })

  it('always places donut labels outside the partition', () => {
    expect(
      getPieLabelPlacement({
        startAngle: 0,
        endAngle: Math.PI,
        innerRadius: 60,
        outerRadius: 120,
        labelWidth: 20,
        labelHeight: 20,
        isDonut: true
      })
    ).toBe('outside')
  })

  it('anchors outside labels by side of the pie', () => {
    const rightSide = getPieLabelPosition({
      startAngle: 0,
      endAngle: Math.PI / 8,
      innerRadius: 0,
      outerRadius: 120,
      labelWidth: 80,
      labelHeight: 28,
      isDonut: false
    })

    const leftSide = getPieLabelPosition({
      startAngle: Math.PI,
      endAngle: Math.PI + Math.PI / 8,
      innerRadius: 0,
      outerRadius: 120,
      labelWidth: 80,
      labelHeight: 28,
      isDonut: false
    })

    expect(rightSide.placement).toBe('outside')
    expect(rightSide.textAnchor).toBe('start')
    expect(leftSide.placement).toBe('outside')
    expect(leftSide.textAnchor).toBe('end')
  })

  it('uses the same angle orientation as the arc generator', () => {
    const topLabel = getPieLabelPosition({
      startAngle: 0,
      endAngle: Math.PI / 12,
      innerRadius: 0,
      outerRadius: 120,
      labelWidth: 80,
      labelHeight: 28,
      isDonut: false
    })

    expect(topLabel.placement).toBe('outside')
    expect(topLabel.y).toBeLessThan(0)
  })
})
