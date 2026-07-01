import update_4_26_6_2 from '../4.26.6-2'
import { coveUpdateWorker } from '../../coveUpdateWorker'
import { describe, expect, it } from 'vitest'

const makeBarChart = (overrides: Record<string, any> = {}) =>
  ({
    type: 'chart',
    version: '4.26.6-1',
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

describe('update_4_26_6_2', () => {
  it('removes likely-default zero rounding from standard chart series columns', () => {
    const result = update_4_26_6_2(makeBarChart())

    expect(result.columns.cases.roundToPlace).toBeUndefined()
    expect(result.columns.deaths.roundToPlace).toBeUndefined()
    expect(result.columns.rate.roundToPlace).toBe(0)
    expect(result.version).toBe('4.26.6-2')
  })

  it('preserves nonzero series rounding overrides', () => {
    const result = update_4_26_6_2(
      makeBarChart({
        columns: {
          cases: { name: 'cases', label: 'Cases', dataTable: true, roundToPlace: 2 }
        }
      })
    )

    expect(result.columns.cases.roundToPlace).toBe(2)
  })

  it('skips non-series additional columns', () => {
    const result = update_4_26_6_2(
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
    const result = update_4_26_6_2(
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

  it('runs after 4.26.6-1 in coveUpdateWorker', () => {
    const result = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.6',
      rows: [],
      visualizations: {
        tableA: {
          type: 'table',
          table: { expanded: false, collapsible: true },
          footnotes: {
            staticFootnotes: [{ text: 'Legacy table footnote' }]
          }
        },
        chartA: makeBarChart({ version: undefined })
      }
    } as any)

    expect(result.visualizations.tableA.table.preserveFootnotesOnCollapse).toBe(true)
    expect(result.visualizations.chartA.columns.cases.roundToPlace).toBeUndefined()
    expect(result.version).toBe('4.26.6-2')
  })

  it('does not rerun for configs already migrated to 4.26.6-2', () => {
    const result = coveUpdateWorker(makeBarChart({ version: '4.26.6-2' }))

    expect(result.columns.cases.roundToPlace).toBe(0)
    expect(result.version).toBe('4.26.6-2')
  })
})
