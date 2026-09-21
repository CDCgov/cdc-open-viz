import { describe, expect, it } from 'vitest'
import { addMinimumBarHeights } from '..'

const createSegment = ({ key, height, y, value }: { key: string; height: number; y: number; value: unknown }) => ({
  key,
  height,
  y,
  bar: {
    data: {
      [key]: value
    }
  }
})

describe('addMinimumBarHeights', () => {
  it('gives an isolated tiny positive segment a minimum visible height while preserving its baseline', () => {
    const barStacks = [
      {
        bars: [createSegment({ key: 'Tiny', height: 0.02, y: 99.98, value: 0.005 })]
      }
    ]

    addMinimumBarHeights(barStacks)

    expect(barStacks[0].bars[0].height).toBe(3)
    expect(barStacks[0].bars[0].y).toBeCloseTo(97)
    expect(barStacks[0].bars[0].y + barStacks[0].bars[0].height).toBeCloseTo(100)
  })

  it('leaves exact zero segments at zero height', () => {
    const barStacks = [
      {
        bars: [createSegment({ key: 'Zero', height: 0, y: 100, value: 0 })]
      }
    ]

    addMinimumBarHeights(barStacks)

    expect(barStacks[0].bars[0].height).toBe(0)
    expect(barStacks[0].bars[0].y).toBe(100)
  })
})
