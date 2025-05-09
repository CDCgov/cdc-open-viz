import { getHorizontalBarHeights } from '../getBarHeights'

describe('getHorizontalBarHeights', () => {
  it('should calculate bar heights for non-stacked horizontal bars', () => {
    const config = {
      orientation: 'horizontal',
      visualizationSubType: 'grouped',
      runtime: { seriesKeys: ['A', 'B'] },
      barHeight: 10,
      barSpace: 5,
      yAxis: { labelPlacement: 'Above Bar' }
    }

    const bars = [{ index: 0 }, { index: 1 }]

    const result = getHorizontalBarHeights(config, bars)

    expect(result).toEqual([
      { index: 0, y: 0, height: 20 },
      { index: 1, y: 25, height: 20 }
    ])
  })

  it('should calculate bar heights for stacked horizontal bars', () => {
    const config = {
      orientation: 'horizontal',
      visualizationSubType: 'stacked',
      barHeight: 15,
      barSpace: 5,
      yAxis: { labelPlacement: 'Above Bar' }
    }

    const bars = [{ index: 0 }, { index: 1 }]

    const result = getHorizontalBarHeights(config, bars)

    expect(result).toEqual([
      { index: 0, y: 0, height: 15 },
      { index: 1, y: 20, height: 15 }
    ])
  })

  it('should include label space when labelPlacement is Below Bar', () => {
    const config = {
      orientation: 'horizontal',
      visualizationSubType: 'grouped',
      runtime: { seriesKeys: ['A'] },
      barHeight: 10,
      barSpace: 5,
      yAxis: { labelPlacement: 'Below Bar' }
    }

    const bars = [{ index: 0 }, { index: 1 }]

    const result = getHorizontalBarHeights(config, bars)

    expect(result).toEqual([
      { index: 0, y: 0, height: 10 },
      { index: 1, y: 37, height: 10 }
    ])
  })

  it('should handle lollipop chart bar heights', () => {
    const config = {
      orientation: 'horizontal',
      visualizationSubType: 'grouped',
      runtime: { seriesKeys: ['A', 'B', 'C'] },
      isLollipopChart: true,
      lollipopSize: 'medium',
      barSpace: 5,
      yAxis: { labelPlacement: 'Above Bar' }
    }

    const bars = [{ index: 0 }, { index: 1 }]

    const result = getHorizontalBarHeights(config, bars)

    expect(result).toEqual([
      { index: 0, y: 0, height: 18 },
      { index: 1, y: 23, height: 18 }
    ])
  })
})
