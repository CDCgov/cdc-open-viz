import { coveUpdateWorker } from '../../coveUpdateWorker'
import { expect, describe, it } from 'vitest'

const makeMultiDashConfig = (version: string) => ({
  type: 'dashboard',
  version,
  dashboard: { title: 'Parent Dashboard' },
  rows: [],
  visualizations: {},
  multiDashboards: [
    {
      type: 'dashboard',
      dashboard: { title: 'Sub Dashboard' },
      rows: [],
      visualizations: {
        chart1: {
          type: 'chart',
          title: 'My Chart',
          brush: { enabled: true }
        }
      }
    }
  ]
})

describe('coveUpdateWorker', () => {
  describe('multi-dashboard recursion', () => {
    it('should NOT run 4.26.1 migration on sub-dashboards when parent is at 4.26.2', () => {
      const config: any = makeMultiDashConfig('4.26.2')
      const result = coveUpdateWorker(config)
      const subDash = result.multiDashboards[0]

      // 4.26.1 removeOldBrushKeys should NOT have run
      expect(subDash.visualizations.chart1.brush).toEqual({ enabled: true })
      // 4.26.1 migrateTitleStyle should NOT have run
      expect(subDash.visualizations.chart1.titleStyle).toBeUndefined()
    })

    it('should run 4.26.1 migration on sub-dashboards when parent is at 4.26.0', () => {
      const config: any = makeMultiDashConfig('4.26.0')
      const result = coveUpdateWorker(config)
      const subDash = result.multiDashboards[0]

      // 4.26.1 removeOldBrushKeys SHOULD have run
      expect(subDash.visualizations.chart1.brush).toBeUndefined()
      // 4.26.1 migrateTitleStyle SHOULD have run
      expect(subDash.visualizations.chart1.titleStyle).toBe('legacy')
    })

    it('should strip version from sub-dashboards after processing', () => {
      const config: any = makeMultiDashConfig('4.25.0')
      const result = coveUpdateWorker(config)

      expect(result.multiDashboards[0].version).toBeUndefined()
    })

    it('should apply 4.26.4 markup-include style migration to sub-dashboards', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.26.3',
        dashboard: { title: 'Parent Dashboard' },
        rows: [],
        visualizations: {},
        multiDashboards: [
          {
            type: 'dashboard',
            dashboard: { title: 'Sub Dashboard' },
            rows: [],
            visualizations: {
              mi1: {
                type: 'markup-include',
                contentEditor: {
                  title: 'Legacy markup include'
                }
              }
            }
          }
        ]
      }

      const result = coveUpdateWorker(config)
      const subDash = result.multiDashboards[0]

      expect(subDash.visualizations.mi1.contentEditor.style).toBe('default')
    })
  })
})
