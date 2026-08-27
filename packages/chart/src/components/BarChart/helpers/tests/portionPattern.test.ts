import { getChartPatternId } from '../../../../helpers/getChartPatternId'
import {
  getPortionPatternBoundaryGeometry,
  getPortionPatternGeometry,
  getPortionPatternOverlay,
  getPortionPatternRenderData,
  isPortionPatternSupported
} from '../portionPattern'

describe('portion pattern support', () => {
  const supportedConfig = {
    visualizationType: 'Bar',
    visualizationSubType: 'regular',
    isLollipopChart: false,
    yAxis: { type: 'linear' }
  } as any

  it('supports regular Bar and Combo charts with linear axes', () => {
    expect(isPortionPatternSupported(supportedConfig)).toBe(true)
    expect(isPortionPatternSupported({ ...supportedConfig, visualizationType: 'Combo' })).toBe(true)
  })

  it.each([
    ['stacked bars', { visualizationSubType: 'stacked' }],
    ['lollipops', { isLollipopChart: true }],
    ['logarithmic axes', { yAxis: { type: 'logarithmic' } }],
    ['other chart types', { visualizationType: 'Line' }]
  ])('does not support %s', (_description, overrides) => {
    expect(isPortionPatternSupported({ ...supportedConfig, ...overrides } as any)).toBe(false)
  })
})

describe('getPortionPatternOverlay', () => {
  const getOverlay = (totalValue: unknown, portion: unknown, placement?: 'start' | 'end') =>
    getPortionPatternOverlay({
      patterns: {
        Pattern1: {
          application: 'portion',
          dataKey: 'total',
          patternValueKey: 'portion',
          placement,
          color: '#123456'
        }
      },
      datum: { total: totalValue, portion },
      seriesKey: 'total',
      totalValue
    })

  it('calculates ratios for portions less than and equal to the total', () => {
    expect(getOverlay(100, 25)).toEqual({
      patternUrl: `url(#${getChartPatternId('Pattern1')})`,
      ratio: 0.25,
      placement: 'end',
      patternColor: '#123456'
    })
    expect(getOverlay('100', '100')?.ratio).toBe(1)
  })

  it('preserves beginning placement', () => {
    expect(getOverlay(100, 40, 'start')?.placement).toBe('start')
  })

  it.each([
    ['missing total', undefined, 10],
    ['nonnumeric total', 'not-a-number', 10],
    ['zero total', 0, 0],
    ['negative total', -100, 10],
    ['missing portion', 100, undefined],
    ['nonnumeric portion', 100, 'not-a-number'],
    ['zero portion', 100, 0],
    ['negative portion', 100, -10],
    ['portion greater than total', 100, 101]
  ])('returns no overlay for %s', (_description, totalValue, portion) => {
    expect(getOverlay(totalValue, portion)).toBeNull()
  })

  it('uses only the first configured portion pattern for a target series', () => {
    const overlay = getPortionPatternOverlay({
      patterns: {
        First: { application: 'portion', dataKey: 'total', patternValueKey: 'invalidPortion' },
        Second: { application: 'portion', dataKey: 'total', patternValueKey: 'validPortion' }
      },
      datum: { total: 100, invalidPortion: 200, validPortion: 25 },
      seriesKey: 'total',
      totalValue: 100
    })

    expect(overlay).toBeNull()
  })
})

describe('getPortionPatternGeometry', () => {
  it.each([
    ['vertical end', 'vertical', 'end', { x: 10, y: 20, width: 100, height: 40 }],
    ['vertical start', 'vertical', 'start', { x: 10, y: 60, width: 100, height: 40 }],
    ['horizontal end', 'horizontal', 'end', { x: 60, y: 20, width: 50, height: 80 }],
    ['horizontal start', 'horizontal', 'start', { x: 10, y: 20, width: 50, height: 80 }]
  ] as const)('calculates %s placement', (_description, orientation, placement, expected) => {
    expect(
      getPortionPatternGeometry({
        orientation,
        bounds: { x: 10, y: 20, width: 100, height: 80 },
        overlay: { ratio: 0.5, placement }
      })
    ).toEqual(expected)
  })
})

describe('getPortionPatternBoundaryGeometry', () => {
  it.each([
    ['vertical end', 'vertical', 'end', { x1: 10, y1: 60, x2: 110, y2: 60 }],
    ['vertical start', 'vertical', 'start', { x1: 10, y1: 20, x2: 110, y2: 20 }],
    ['horizontal end', 'horizontal', 'end', { x1: 10, y1: 20, x2: 10, y2: 100 }],
    ['horizontal start', 'horizontal', 'start', { x1: 60, y1: 20, x2: 60, y2: 100 }]
  ] as const)('calculates the %s internal divider', (_description, orientation, placement, expected) => {
    expect(
      getPortionPatternBoundaryGeometry({
        orientation,
        geometry: {
          x: 10,
          y: 20,
          width: orientation === 'vertical' ? 100 : 50,
          height: orientation === 'vertical' ? 40 : 80
        },
        overlay: { ratio: 0.5, placement }
      })
    ).toEqual(expected)
  })

  it('omits the divider when the portion covers the full bar', () => {
    expect(
      getPortionPatternBoundaryGeometry({
        orientation: 'vertical',
        geometry: { x: 10, y: 20, width: 100, height: 80 },
        overlay: { ratio: 1, placement: 'end' }
      })
    ).toBeNull()
  })
})

describe('getPortionPatternRenderData', () => {
  it('returns a complete render model for supported valid portions', () => {
    expect(
      getPortionPatternRenderData({
        config: {
          visualizationType: 'Bar',
          visualizationSubType: 'regular',
          isLollipopChart: false,
          yAxis: { type: 'linear' }
        } as any,
        orientation: 'vertical',
        bounds: { x: 10, y: 20, width: 100, height: 80 },
        patterns: {
          Pattern1: {
            application: 'portion',
            dataKey: 'total',
            patternValueKey: 'portion',
            color: '#123456'
          }
        },
        datum: { total: 100, portion: 25 },
        seriesKey: 'total',
        totalValue: 100
      })
    ).toEqual({
      patternUrl: `url(#${getChartPatternId('Pattern1')})`,
      ratio: 0.25,
      placement: 'end',
      patternColor: '#123456',
      geometry: { x: 10, y: 20, width: 100, height: 20 },
      boundaryGeometry: { x1: 10, y1: 40, x2: 110, y2: 40 }
    })
  })

  it('returns no render model for unsupported configurations', () => {
    expect(
      getPortionPatternRenderData({
        config: {
          visualizationType: 'Bar',
          visualizationSubType: 'stacked',
          isLollipopChart: false,
          yAxis: { type: 'linear' }
        } as any,
        orientation: 'vertical',
        bounds: { x: 10, y: 20, width: 100, height: 80 },
        patterns: {},
        datum: {},
        seriesKey: 'total',
        totalValue: 100
      })
    ).toBeNull()
  })
})
