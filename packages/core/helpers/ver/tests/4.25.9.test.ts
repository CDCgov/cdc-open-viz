import { changeSingleStateMapNoDataMessage } from '../4.25.9'
import { expect, describe, it } from 'vitest'

describe('changeSingleStateMapNoDataMessage', () => {
  it('should set noDataMessage to "No State Selected" if the message is default', () => {
    const config: any = {
      type: 'map',
      general: { noStateFoundMessage: 'Map Unavailable' },
      runtime: {}
    }
    changeSingleStateMapNoDataMessage(config)
    expect(config.general.noDataMessage).toBe('No State Selected')
    expect(config.general.noStateFoundMessage).toBeUndefined()
    expect(config.runtime.noStateFoundMessage).toBeUndefined()
  })

  it('should preserve custom noStateFoundMessage', () => {
    const config: any = {
      type: 'map',
      general: { noStateFoundMessage: 'Custom Message' },
      runtime: {}
    }
    changeSingleStateMapNoDataMessage(config)
    expect(config.general.noDataMessage).toBe('Custom Message')
    expect(config.general.noStateFoundMessage).toBeUndefined()
    expect(config.runtime.noStateFoundMessage).toBeUndefined()
  })

  it('should work for dashboard configs with map visualizations', () => {
    const dashboardConfig: any = {
      type: 'dashboard',
      visualizations: {
        map1: {
          type: 'map',
          general: { noStateFoundMessage: 'Map Unavailable' },
          runtime: {}
        },
        chart1: {
          type: 'chart',
          general: {},
          runtime: {}
        }
      }
    }
    changeSingleStateMapNoDataMessage(dashboardConfig)
    expect(dashboardConfig.visualizations.map1.general.noDataMessage).toBe('No State Selected')
    expect(dashboardConfig.visualizations.map1.general.noStateFoundMessage).toBeUndefined()
    expect(dashboardConfig.visualizations.map1.runtime.noStateFoundMessage).toBeUndefined()
    expect(dashboardConfig.visualizations.chart1.general.noDataMessage).toBeUndefined()
  })
})
