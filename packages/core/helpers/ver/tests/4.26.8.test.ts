import update_4_26_8 from '../4.26.8'
import { coveUpdateWorker } from '../../coveUpdateWorker'
import { describe, expect, it } from 'vitest'

describe('update_4_26_8', () => {
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
