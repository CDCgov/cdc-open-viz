import { describe, expect, it } from 'vitest'
import { getCleanTopTickMax, getCleanTopTickMaxCandidates, getFinalTopTickMax } from '../getCleanTopTickMax'

describe('getCleanTopTickMax', () => {
  it('rounds automatic max values with the clean-top-tick mantissa ladder', () => {
    expect(getCleanTopTickMaxCandidates()).toEqual([1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10])

    expect([
      [0.0049, getCleanTopTickMax(0.0049)],
      [0.011, getCleanTopTickMax(0.011)],
      [0.012, getCleanTopTickMax(0.012)],
      [1.1, getCleanTopTickMax(1.1)],
      [1.2, getCleanTopTickMax(1.2)],
      [3, getCleanTopTickMax(3)],
      [5, getCleanTopTickMax(5)],
      [5.1, getCleanTopTickMax(5.1)],
      [7, getCleanTopTickMax(7)],
      [7.2, getCleanTopTickMax(7.2)],
      [8, getCleanTopTickMax(8)],
      [9, getCleanTopTickMax(9)],
      [25, getCleanTopTickMax(25)],
      [89, getCleanTopTickMax(89)],
      [101, getCleanTopTickMax(101)],
      [1434, getCleanTopTickMax(1434)],
      [1470, getCleanTopTickMax(1470)],
      [1490, getCleanTopTickMax(1490)],
      [1675, getCleanTopTickMax(1675)],
      [2340, getCleanTopTickMax(2340)],
      [5678, getCleanTopTickMax(5678)],
      [8999, getCleanTopTickMax(8999)]
    ]).toEqual([
      [0.0049, 0.005],
      [0.011, 0.012],
      [0.012, 0.012],
      [1.1, 1.2],
      [1.2, 1.2],
      [3, 3],
      [5, 5],
      [5.1, 6],
      [7, 8],
      [7.2, 8],
      [8, 8],
      [9, 10],
      [25, 25],
      [89, 100],
      [101, 120],
      [1434, 1500],
      [1470, 1500],
      [1490, 1500],
      [1675, 2000],
      [2340, 2500],
      [5678, 6000],
      [8999, 10000]
    ])
  })

  it('leaves non-finite values unchanged', () => {
    expect(getCleanTopTickMax(Infinity)).toBe(Infinity)
    expect(Number.isNaN(getCleanTopTickMax(NaN))).toBe(true)
  })

  it('leaves non-positive values unchanged', () => {
    expect(getCleanTopTickMax(0)).toBe(0)
    expect(getCleanTopTickMax(-1)).toBe(-1)
  })
})

describe('getFinalTopTickMax', () => {
  it('advances clean max values to the next generated tick interval when the top tick is below the max', () => {
    expect(
      getFinalTopTickMax({
        currentMax: 12,
        rawMax: 12,
        ticks: [0, 5, 10],
        shouldUseCleanTopTick: true
      })
    ).toEqual({ max: 15, tickValues: [0, 5, 10, 15] })

    expect(
      getFinalTopTickMax({
        currentMax: 25,
        rawMax: 25,
        ticks: [0, 10, 20],
        shouldUseCleanTopTick: true
      })
    ).toEqual({ max: 30, tickValues: [0, 10, 20, 30] })
  })

  it('keeps a clean max when the generated top tick already reaches it', () => {
    expect(
      getFinalTopTickMax({
        currentMax: 12,
        rawMax: 12,
        ticks: [0, 2, 4, 6, 8, 10, 12],
        shouldUseCleanTopTick: true
      })
    ).toEqual({ max: 12, tickValues: [0, 2, 4, 6, 8, 10, 12] })
  })

  it('does not advance for floating-point dust above the generated top tick', () => {
    expect(
      getFinalTopTickMax({
        currentMax: 0.6000000000000001,
        rawMax: 0.6,
        ticks: [0, 0.2, 0.4, 0.6],
        shouldUseCleanTopTick: true
      })
    ).toEqual({ max: 0.6, tickValues: [0, 0.2, 0.4, 0.6] })
  })

  it('adds one more interval for spaced inline labels when the raw max is too close to the top tick', () => {
    expect(
      getFinalTopTickMax({
        currentMax: 14.4,
        rawMax: 14.4,
        ticks: [0, 5, 10, 15],
        shouldUseCleanTopTick: true,
        headroomMode: 'inline-label'
      })
    ).toEqual({ max: 20, tickValues: [0, 5, 10, 15, 20] })

    expect(
      getFinalTopTickMax({
        currentMax: 11.25,
        rawMax: 11.25,
        ticks: [0, 5, 10, 15],
        shouldUseCleanTopTick: true,
        headroomMode: 'inline-label'
      })
    ).toEqual({ max: 15, tickValues: [0, 5, 10, 15] })
  })

  it('finalizes tiny spaced inline-label domains and includes the top tick', () => {
    expect(
      getFinalTopTickMax({
        currentMax: 0.015,
        rawMax: 0.015,
        ticks: [0, 0.005, 0.01, 0.015],
        shouldUseCleanTopTick: true,
        headroomMode: 'inline-label'
      })
    ).toEqual({ max: 0.02, tickValues: [0, 0.005, 0.01, 0.015, 0.02] })

    expect(
      getFinalTopTickMax({
        currentMax: 0.019,
        rawMax: 0.019,
        ticks: [0, 0.005, 0.01, 0.015],
        shouldUseCleanTopTick: true,
        headroomMode: 'inline-label'
      })
    ).toEqual({ max: 0.025, tickValues: [0, 0.005, 0.01, 0.015, 0.02, 0.025] })
  })

  it('does not change the max when effective clean-top-tick is disabled', () => {
    expect(
      getFinalTopTickMax({
        currentMax: 12,
        rawMax: 12,
        ticks: [0, 5, 10],
        shouldUseCleanTopTick: false
      })
    ).toEqual({ max: 12 })
  })
})
