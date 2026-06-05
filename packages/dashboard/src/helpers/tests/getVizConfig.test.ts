import { getVizConfig } from '../getVizConfig'

describe('getVizConfig', () => {
  it('uses the dashboard visualization key as uid when saved config has a stale inner uid', () => {
    const config = {
      dashboard: { sharedFilters: [] },
      datasets: {
        dataset: {
          data: [{ category: 'A', value: 1 }]
        }
      },
      rows: [{ columns: [{ width: 12, widget: 'canonical-widget-key' }] }],
      visualizations: {
        'canonical-widget-key': {
          uid: 'stale-inner-uid',
          type: 'chart',
          visualizationType: 'Bar',
          dataKey: 'dataset',
          dataDescription: {}
        }
      }
    } as any

    const visualizationConfig = getVizConfig('canonical-widget-key', 0, config, {
      dataset: [{ category: 'A', value: 1 }]
    })

    expect(visualizationConfig.uid).toBe('canonical-widget-key')
  })
})
