import update_4_26_7_1 from '../4.26.7-1'
import { coveUpdateWorker } from '../../coveUpdateWorker'
import { describe, expect, it } from 'vitest'

const makeBarChart = (overrides: Record<string, any> = {}) =>
  ({
    type: 'chart',
    version: '4.26.7',
    visualizationType: 'Bar',
    series: [
      { dataKey: 'cases', type: 'Bar', axis: 'Left' },
      { dataKey: 'deaths', type: 'Bar', axis: 'Left' }
    ],
    columns: {
      cases: { name: 'cases', label: 'Cases', dataTable: true, roundToPlace: 0 },
      deaths: { name: 'deaths', label: 'Deaths', dataTable: true, roundToPlace: '0' },
      rate: { name: 'rate', label: 'Rate', dataTable: true, roundToPlace: 0 }
    },
    ...overrides
  }) as any

describe('update_4_26_7_1', () => {
  it('removes likely-default zero rounding from standard chart series columns already on 4.26.7', () => {
    const result = coveUpdateWorker(makeBarChart())

    expect(result.columns.cases.roundToPlace).toBeUndefined()
    expect(result.columns.deaths.roundToPlace).toBeUndefined()
    expect(result.columns.rate.roundToPlace).toBe(0)
  })

  it('preserves nonzero series rounding overrides', () => {
    const result = update_4_26_7_1(
      makeBarChart({
        columns: {
          cases: { name: 'cases', label: 'Cases', dataTable: true, roundToPlace: 2 }
        }
      })
    )

    expect(result.columns.cases.roundToPlace).toBe(2)
    expect(result.version).toBe('4.26.7-1')
  })

  it('skips non-series additional columns', () => {
    const result = update_4_26_7_1(
      makeBarChart({
        series: [{ dataKey: 'cases', type: 'Bar', axis: 'Left' }],
        columns: {
          cases: { name: 'cases', label: 'Cases', dataTable: true, roundToPlace: 0 },
          additionalColumn1: { name: 'rate', label: 'Rate', dataTable: true, roundToPlace: 0 }
        }
      })
    )

    expect(result.columns.cases.roundToPlace).toBeUndefined()
    expect(result.columns.additionalColumn1.roundToPlace).toBe(0)
  })

  it('skips specialized chart types that own series formatting differently', () => {
    const result = update_4_26_7_1(
      makeBarChart({
        visualizationType: 'HeatMap',
        series: [{ dataKey: 'Atlanta' }],
        columns: {
          Atlanta: { name: 'Atlanta', label: 'ATL', dataTable: true, roundToPlace: 0 }
        }
      })
    )

    expect(result.columns.Atlanta.roundToPlace).toBe(0)
  })

  it('does not rerun for configs already migrated to 4.26.7-1', () => {
    const result = coveUpdateWorker(makeBarChart({ version: '4.26.7-1' }))

    expect(result.columns.cases.roundToPlace).toBe(0)
  })
})
