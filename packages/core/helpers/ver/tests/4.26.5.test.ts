import update_4_26_5 from '../4.26.5'
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
})
