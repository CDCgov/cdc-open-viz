import { countNumOfTicks } from '../countNumOfTicks'
import { expect, describe, it } from 'vitest'

const baseArgs = {
  max: 100,
  min: 0,
  data: [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }],
  config: { visualizationType: 'Bar' } as any
}

describe('countNumOfTicks', () => {
  it('uses viewport-specific tick count when viewportNumTicks[currentViewport] is set', () => {
    const result = countNumOfTicks({
      ...baseArgs,
      axis: 'xAxis',
      runtime: { xAxis: { numTicks: 6, viewportNumTicks: { xs: 3, xxs: 2 } } },
      currentViewport: 'xs',
      isHorizontal: false
    })
    expect(result).toBe(3)
  })

  it('falls back to numTicks when viewportNumTicks is absent', () => {
    const result = countNumOfTicks({
      ...baseArgs,
      axis: 'xAxis',
      runtime: { xAxis: { numTicks: 6 } },
      currentViewport: 'xs',
      isHorizontal: false
    })
    expect(result).toBe(6)
  })

  it('falls back to numTicks when current viewport has no entry in viewportNumTicks', () => {
    const result = countNumOfTicks({
      ...baseArgs,
      axis: 'xAxis',
      runtime: { xAxis: { numTicks: 6, viewportNumTicks: { xxs: 2 } } },
      currentViewport: 'lg',
      isHorizontal: false
    })
    expect(result).toBe(6)
  })

  it('xAxis vertical with numTicks: 6 returns 6', () => {
    const result = countNumOfTicks({
      ...baseArgs,
      axis: 'xAxis',
      runtime: { xAxis: { numTicks: 6 } },
      currentViewport: 'lg',
      isHorizontal: false
    })
    expect(result).toBe(6)
  })

  it('yAxis with numTicks: 4 returns 4', () => {
    const result = countNumOfTicks({
      ...baseArgs,
      axis: 'yAxis',
      runtime: { yAxis: { numTicks: 4 } },
      currentViewport: 'lg',
      isHorizontal: false
    })
    expect(result).toBe(4)
  })

  it('xAxis horizontal with no numTicks returns 4 (hardcoded fallback)', () => {
    const result = countNumOfTicks({
      ...baseArgs,
      axis: 'xAxis',
      runtime: { xAxis: { numTicks: '' } },
      currentViewport: 'lg',
      isHorizontal: true
    })
    expect(result).toBe(4)
  })
})
