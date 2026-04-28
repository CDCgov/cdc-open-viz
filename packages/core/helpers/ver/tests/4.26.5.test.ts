import update_4_26_5, { applyLegacyDashboardComponentStyleDefaults } from '../4.26.5'
import { describe, expect, it } from 'vitest'

describe('update_4_26_5', () => {
  it('backfills side placement for legacy chart configs', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.4',
      yAxis: {
        label: 'Y Axis'
      }
    }

    const result = update_4_26_5(config)

    expect(result.yAxis.titlePlacement).toBe('side')
    expect(result.version).toBe('4.26.5')
    expect(config.yAxis.titlePlacement).toBeUndefined()
  })

  it('preserves existing title placement', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.4',
      yAxis: {
        titlePlacement: 'top'
      }
    }

    const result = update_4_26_5(config)

    expect(result.yAxis.titlePlacement).toBe('top')
  })

  it('does not modify inlineLabel while backfilling title placement', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.4',
      yAxis: {
        inlineLabel: ' cases'
      }
    }

    const result = update_4_26_5(config)

    expect(result.yAxis.titlePlacement).toBe('side')
    expect(result.yAxis.inlineLabel).toBe(' cases')
  })

  it('backfills title placement for dashboard visualizations', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.4',
      visualizations: {
        chart1: {
          type: 'chart',
          yAxis: {}
        },
        chart2: {
          type: 'chart',
          yAxis: {
            titlePlacement: 'top'
          }
        }
      }
    }

    const result = update_4_26_5(config)

    expect(result.visualizations.chart1.yAxis.titlePlacement).toBe('side')
    expect(result.visualizations.chart2.yAxis.titlePlacement).toBe('top')
  })

  it('fills missing legacy style fields for standalone data-bite and waffle-chart configs', () => {
    const dataBiteConfig: any = { type: 'data-bite', title: 'Legacy data bite' }
    const waffleConfig: any = { type: 'waffle-chart', title: 'Legacy waffle' }

    applyLegacyDashboardComponentStyleDefaults(dataBiteConfig)
    applyLegacyDashboardComponentStyleDefaults(waffleConfig)

    expect(dataBiteConfig.biteStyle).toBe('graphic')
    expect(waffleConfig.visualizationType).toBe('Waffle')
  })

  it('applies legacy style defaults recursively inside dashboards', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.4',
      visualizations: {
        bite1: { type: 'data-bite', title: 'Legacy bite' },
        waffle1: { type: 'waffle-chart', title: 'Legacy waffle' }
      }
    }

    const result = update_4_26_5(config)

    expect(result.visualizations.bite1.biteStyle).toBe('graphic')
    expect(result.visualizations.waffle1.visualizationType).toBe('Waffle')
    expect(result.version).toBe('4.26.5')
  })

  it('does not overwrite explicit data-bite or waffle-chart styles', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.4',
      visualizations: {
        bite1: { type: 'data-bite', biteStyle: 'tp5' },
        waffle1: { type: 'waffle-chart', visualizationType: 'TP5 Gauge' }
      }
    }

    const result = update_4_26_5(config)

    expect(result.visualizations.bite1.biteStyle).toBe('tp5')
    expect(result.visualizations.waffle1.visualizationType).toBe('TP5 Gauge')
  })
})
