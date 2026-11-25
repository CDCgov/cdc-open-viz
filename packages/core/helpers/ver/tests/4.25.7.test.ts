import { describe, expect, it } from 'vitest'
import update from '../4.25.7'
import { coveUpdateWorker } from '../../coveUpdateWorker'

describe('4.25.7 preliminary series keys', () => {
  const preliminaryData = () => [{ seriesKey: 'provisional' }, { seriesKeys: ['already-current'] }, {}]

  it.each(['standalone', 'dashboard'])('converts singular and missing keys in a %s chart', context => {
    const chart = { type: 'chart', preliminaryData: preliminaryData() }
    const config = context === 'standalone' ? chart : { type: 'dashboard', visualizations: { chart } }
    const original = structuredClone(config)
    const result = update(config)
    const migratedChart = context === 'standalone' ? result : result.visualizations.chart

    expect(migratedChart.preliminaryData).toEqual([
      { seriesKeys: ['provisional'] },
      { seriesKeys: ['already-current'] },
      { seriesKeys: [] }
    ])
    expect(config).toEqual(original)
    expect(update(result)).toEqual(result)
  })

  it('does not create missing preliminary data or convert other visualization types', () => {
    expect(update({ type: 'chart' })).not.toHaveProperty('preliminaryData')
    expect(update({ type: 'map', preliminaryData: preliminaryData() }).preliminaryData).toEqual(preliminaryData())
  })

  it('converts multi-dashboard charts through the worker using each child’s saved version', () => {
    const child = (version?: string) => ({
      ...(version ? { version } : {}),
      dashboard: {},
      rows: [],
      visualizations: { chart: { type: 'chart', preliminaryData: preliminaryData() } }
    })
    const result = coveUpdateWorker({
      type: 'dashboard',
      version: '4.25.6',
      dashboard: {},
      rows: [],
      visualizations: {},
      multiDashboards: [child(), child('4.25.7')]
    })

    expect(result.multiDashboards[0].visualizations.chart.preliminaryData).toEqual([
      { seriesKeys: ['provisional'] },
      { seriesKeys: ['already-current'] },
      { seriesKeys: [] }
    ])
    expect(result.multiDashboards[1].visualizations.chart.preliminaryData).toEqual(preliminaryData())
  })
})
