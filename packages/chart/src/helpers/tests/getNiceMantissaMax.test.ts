import { scaleLinear } from '@visx/scale'
import { describe, expect, it } from 'vitest'
import { getNiceMantissaMax, getNiceMantissaMaxCandidates } from '../getNiceMantissaMax'
import { getYAxisAutoPadding } from '../getYAxisAutoPadding'
import { createMockConfig } from '../../components/LinearChart/tests/mockConfigContext'

const topTitleAutoPaddingConfig = createMockConfig({
  orientation: 'vertical',
  yAxis: {
    ...createMockConfig().yAxis,
    max: '',
    enablePadding: false,
    scalePadding: 0,
    titlePlacement: 'top',
    label: 'Y-Axis'
  }
})

const ticksForMax = (max: number, numTicks: number) =>
  scaleLinear({ domain: [0, max], range: [300, 10] }).ticks(numTicks)

const getTopTitleTicks = (rawMax: number, roundedMax: number, numTicks: number) => {
  const padding = getYAxisAutoPadding(
    scaleLinear({ domain: [0, roundedMax], range: [300, 10] }),
    numTicks,
    rawMax,
    0,
    topTitleAutoPaddingConfig,
    'top-title'
  )
  const finalMax = padding > 0 ? roundedMax * (1 + padding / 100) : roundedMax

  return ticksForMax(finalMax, numTicks)
}

describe('getNiceMantissaMax', () => {
  it('rounds automatic max values with the tick-friendly mantissa ladder', () => {
    expect(getNiceMantissaMaxCandidates()).toEqual([1, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 10])

    expect([
      [3, getNiceMantissaMax(3)],
      [7.2, getNiceMantissaMax(7.2)],
      [25, getNiceMantissaMax(25)],
      [89, getNiceMantissaMax(89)],
      [101, getNiceMantissaMax(101)],
      [1434, getNiceMantissaMax(1434)],
      [1470, getNiceMantissaMax(1470)],
      [1490, getNiceMantissaMax(1490)],
      [1675, getNiceMantissaMax(1675)],
      [2340, getNiceMantissaMax(2340)],
      [5678, getNiceMantissaMax(5678)],
      [8999, getNiceMantissaMax(8999)]
    ]).toEqual([
      [3, 3],
      [7.2, 10],
      [25, 25],
      [89, 100],
      [101, 150],
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
    expect(getNiceMantissaMax(Infinity)).toBe(Infinity)
    expect(Number.isNaN(getNiceMantissaMax(NaN))).toBe(true)
  })

  it('locks the n=4 tick output with and without top-title auto-padding', () => {
    expect(
      [7, 8, 9, 25, 89, 101, 1434, 1470, 1490, 1675, 2340, 5678, 8200, 8999].map(rawMax => {
        const max = getNiceMantissaMax(rawMax)

        return {
          rawMax,
          max,
          baseTicks: ticksForMax(max, 4),
          topTitleTicks: getTopTitleTicks(rawMax, max, 4)
        }
      })
    ).toEqual([
      { rawMax: 7, max: 10, baseTicks: [0, 2, 4, 6, 8, 10], topTitleTicks: [0, 2, 4, 6, 8, 10] },
      { rawMax: 8, max: 10, baseTicks: [0, 2, 4, 6, 8, 10], topTitleTicks: [0, 2, 4, 6, 8, 10] },
      { rawMax: 9, max: 10, baseTicks: [0, 2, 4, 6, 8, 10], topTitleTicks: [0, 2, 4, 6, 8, 10] },
      { rawMax: 25, max: 25, baseTicks: [0, 5, 10, 15, 20, 25], topTitleTicks: [0, 10, 20, 30] },
      { rawMax: 89, max: 100, baseTicks: [0, 20, 40, 60, 80, 100], topTitleTicks: [0, 20, 40, 60, 80, 100] },
      { rawMax: 101, max: 150, baseTicks: [0, 50, 100, 150], topTitleTicks: [0, 50, 100, 150] },
      { rawMax: 1434, max: 1500, baseTicks: [0, 500, 1000, 1500], topTitleTicks: [0, 500, 1000, 1500] },
      { rawMax: 1470, max: 1500, baseTicks: [0, 500, 1000, 1500], topTitleTicks: [0, 500, 1000, 1500, 2000] },
      { rawMax: 1490, max: 1500, baseTicks: [0, 500, 1000, 1500], topTitleTicks: [0, 500, 1000, 1500, 2000] },
      { rawMax: 1675, max: 2000, baseTicks: [0, 500, 1000, 1500, 2000], topTitleTicks: [0, 500, 1000, 1500, 2000] },
      {
        rawMax: 2340,
        max: 2500,
        baseTicks: [0, 500, 1000, 1500, 2000, 2500],
        topTitleTicks: [0, 500, 1000, 1500, 2000, 2500]
      },
      { rawMax: 5678, max: 6000, baseTicks: [0, 2000, 4000, 6000], topTitleTicks: [0, 2000, 4000, 6000] },
      {
        rawMax: 8200,
        max: 10000,
        baseTicks: [0, 2000, 4000, 6000, 8000, 10000],
        topTitleTicks: [0, 2000, 4000, 6000, 8000, 10000]
      },
      {
        rawMax: 8999,
        max: 10000,
        baseTicks: [0, 2000, 4000, 6000, 8000, 10000],
        topTitleTicks: [0, 2000, 4000, 6000, 8000, 10000]
      }
    ])
  })
})
