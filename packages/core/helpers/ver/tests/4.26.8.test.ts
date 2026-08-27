import update_4_26_8 from '../4.26.8'
import { coveUpdateWorker } from '../../coveUpdateWorker'
import { describe, expect, it } from 'vitest'

const expectThinBorderMigration = (config: any) => {
  const result = update_4_26_8(config)
  expect(result.tp5Visual.calloutStyle).toBe('thin-border')
  expect(result.visual).not.toHaveProperty('whiteBackground')
  expect(result.visual).not.toHaveProperty('useWrap')
}

const expectCalloutMigration = (config: any) => {
  const result = update_4_26_8(config)
  expect(result.tp5Visual.calloutStyle).toBe('callout')
  expect(result.visual).not.toHaveProperty('whiteBackground')
  expect(result.visual).not.toHaveProperty('useWrap')
}

describe('update_4_26_8', () => {
  describe('chart right title placement migration', () => {
    it('backfills missing chart right title placement to side', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.7',
        yAxis: {
          rightLabel: 'Rate'
        }
      }

      const result = update_4_26_8(config)

      expect(result.yAxis.rightTitlePlacement).toBe('side')
      expect(result.version).toBe('4.26.8')
      expect(config.yAxis.rightTitlePlacement).toBeUndefined()
    })

    it('preserves authored right title placement', () => {
      const result = update_4_26_8({
        type: 'chart',
        version: '4.26.7',
        yAxis: {
          rightLabel: 'Rate',
          rightTitlePlacement: 'top'
        }
      } as any)

      expect(result.yAxis.rightTitlePlacement).toBe('top')
    })

    it('updates dashboard chart visualizations recursively through coveUpdateWorker', () => {
      const result = coveUpdateWorker({
        type: 'dashboard',
        version: '4.26.7',
        rows: [],
        visualizations: {
          chartA: {
            type: 'chart',
            yAxis: {
              rightLabel: 'Rate'
            }
          }
        }
      } as any)

      expect(result.visualizations.chartA.yAxis.rightTitlePlacement).toBe('side')
    })
  })

  describe('standalone TP5 callout style migration', () => {
    it('migrates standalone TP5 data bites', () => {
      expectThinBorderMigration({
        type: 'data-bite',
        biteStyle: 'tp5',
        visual: { whiteBackground: true, border: true }
      })
      expectCalloutMigration({
        type: 'data-bite',
        biteStyle: 'tp5',
        visual: { whiteBackground: false, border: true }
      })
      expectCalloutMigration({
        type: 'data-bite',
        biteStyle: 'tp5',
        visual: { border: true }
      })
    })

    it('migrates valueAboveMessage for TP5 data bites and gauges', () => {
      const biteResult = update_4_26_8({
        type: 'data-bite',
        biteStyle: 'tp5',
        visual: { useWrap: true }
      })
      expect(biteResult.tp5Visual.valueAboveMessage).toBe(true)
      expect(biteResult.visual).not.toHaveProperty('useWrap')

      const gaugeResult = update_4_26_8({
        type: 'waffle-chart',
        visualizationType: 'TP5 Gauge',
        visual: { useWrap: true }
      })
      expect(gaugeResult.tp5Visual.valueAboveMessage).toBe(true)
      expect(gaugeResult.visual).not.toHaveProperty('useWrap')

      const waffleResult = update_4_26_8({
        type: 'waffle-chart',
        visualizationType: 'TP5 Waffle',
        visual: { useWrap: true }
      })
      expect(waffleResult.tp5Visual).not.toHaveProperty('valueAboveMessage')
      expect(waffleResult.visual).not.toHaveProperty('useWrap')
    })

    it('preserves current tp5Visual values when present', () => {
      const result = update_4_26_8({
        type: 'data-bite',
        biteStyle: 'tp5',
        visual: {},
        tp5Visual: {
          calloutStyle: 'drop-shadow',
          valueAboveMessage: true
        }
      })

      expect(result.tp5Visual).toEqual({
        calloutStyle: 'drop-shadow',
        valueAboveMessage: true
      })
    })

    it('migrates standalone TP5 waffle configs', () => {
      expectThinBorderMigration({
        type: 'waffle-chart',
        visualizationType: 'TP5 Waffle',
        visual: { whiteBackground: true }
      })
      expectCalloutMigration({
        type: 'waffle-chart',
        visualizationType: 'TP5 Waffle',
        visual: { whiteBackground: false }
      })
      expectCalloutMigration({
        type: 'waffle-chart',
        visualizationType: 'TP5 Waffle',
        visual: {}
      })
    })

    it('migrates standalone TP5 gauge configs', () => {
      expectThinBorderMigration({
        type: 'waffle-chart',
        visualizationType: 'TP5 Gauge',
        visual: { whiteBackground: true }
      })
      expectCalloutMigration({
        type: 'waffle-chart',
        visualizationType: 'TP5 Gauge',
        visual: { whiteBackground: false }
      })
      expectCalloutMigration({
        type: 'waffle-chart',
        visualizationType: 'TP5 Gauge',
        visual: {}
      })
    })

    it('migrates standalone TP5 markup include configs', () => {
      expectThinBorderMigration({
        type: 'markup-include',
        contentEditor: { style: 'tp5' },
        visual: { whiteBackground: true }
      })
      expectCalloutMigration({
        type: 'markup-include',
        contentEditor: { style: 'tp5' },
        visual: { whiteBackground: false }
      })
      expectCalloutMigration({
        type: 'markup-include',
        contentEditor: { style: 'tp5' },
        visual: {}
      })
    })
  })

  it('migrates eligible visualizations nested inside dashboards', () => {
    const result = update_4_26_8({
      type: 'dashboard',
      version: '4.26.7',
      visualizations: {
        bite: { type: 'data-bite', biteStyle: 'tp5', visual: { whiteBackground: true, useWrap: true } },
        waffle: { type: 'waffle-chart', visualizationType: 'TP5 Waffle', visual: { whiteBackground: false } },
        gauge: { type: 'waffle-chart', visualizationType: 'TP5 Gauge', visual: { useWrap: true } },
        markup: { type: 'markup-include', contentEditor: { style: 'tp5' }, visual: { whiteBackground: true } },
        chart: { type: 'chart', yAxis: { rightLabel: 'Rate' } }
      }
    } as any)

    expect(result.visualizations.bite.tp5Visual).toEqual({ calloutStyle: 'thin-border', valueAboveMessage: true })
    expect(result.visualizations.waffle.tp5Visual).toEqual({ calloutStyle: 'callout' })
    expect(result.visualizations.gauge.tp5Visual).toEqual({ calloutStyle: 'callout', valueAboveMessage: true })
    expect(result.visualizations.markup.tp5Visual).toEqual({ calloutStyle: 'thin-border' })
    expect(result.visualizations.chart.yAxis.rightTitlePlacement).toBe('side')
    expect(result.visualizations.bite.visual).toEqual({})
    expect(result.visualizations.gauge.visual).toEqual({})
  })

  it('migrates eligible visualizations nested inside multi-dashboards through coveUpdateWorker', () => {
    const result = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.7',
      visualizations: {},
      rows: [],
      multiDashboards: [
        {
          rows: [],
          visualizations: {
            bite: { type: 'data-bite', biteStyle: 'tp5', visual: { whiteBackground: true, useWrap: true } }
          }
        },
        {
          rows: [],
          visualizations: {
            markup: { type: 'markup-include', contentEditor: { style: 'tp5' }, visual: { whiteBackground: false } },
            chart: { type: 'chart', yAxis: { rightLabel: 'Rate' } }
          }
        }
      ]
    } as any)

    expect(result.multiDashboards[0].visualizations.bite.tp5Visual).toEqual({
      calloutStyle: 'thin-border',
      valueAboveMessage: true
    })
    expect(result.multiDashboards[1].visualizations.markup.tp5Visual).toEqual({ calloutStyle: 'callout' })
    expect(result.multiDashboards[1].visualizations.chart.yAxis.rightTitlePlacement).toBe('side')
  })

  it('does not modify ineligible configs', () => {
    const result = update_4_26_8({
      type: 'dashboard',
      version: '4.26.7',
      visualizations: {
        chart: { type: 'chart', visual: { whiteBackground: true } },
        map: { type: 'map', visual: { whiteBackground: true } },
        table: { type: 'table', visual: { whiteBackground: true } },
        filter: { type: 'dashboardFilters', visual: { whiteBackground: true } },
        bite: { type: 'data-bite', biteStyle: 'body', visual: { whiteBackground: true } },
        waffle: { type: 'waffle-chart', visualizationType: 'Waffle', visual: { whiteBackground: true } },
        gauge: { type: 'waffle-chart', visualizationType: 'Gauge', visual: { whiteBackground: true } },
        markup: { type: 'markup-include', contentEditor: { style: 'default' }, visual: { whiteBackground: true } }
      }
    } as any)

    Object.values(result.visualizations).forEach((visualization: any) => {
      expect(visualization.visual).toEqual({ whiteBackground: true })
    })
  })
})
