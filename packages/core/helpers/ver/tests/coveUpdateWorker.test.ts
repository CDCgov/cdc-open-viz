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

    it('runs 4.26.4 and then 4.26.4-1 for configs starting at 4.26.3', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.26.3',
        rows: [],
        visualizations: {
          chart1: {
            type: 'chart',
            visual: {
              border: true,
              borderColorTheme: true,
              accent: true,
              background: true,
              hideBackgroundColor: true
            }
          },
          markup1: {
            type: 'markup-include'
          }
        }
      }

      const result = coveUpdateWorker(config)

      expect(result.visualizations.chart1.visual).toEqual({
        border: false,
        borderColorTheme: false,
        accent: false,
        background: false,
        hideBackgroundColor: false
      })
      expect(result.visualizations.markup1.contentEditor.style).toBe('default')
      expect(result.version).toBe('4.26.4-1')
    })

    it('applies the 4.26.4-1 repair logic to configs already stamped 4.26.4', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.26.4',
        rows: [],
        visualizations: {
          nestedDashboard: {
            type: 'dashboard',
            rows: [],
            visualizations: {
              markup1: {
                type: 'markup-include'
              },
              territoryMap: {
                type: 'map',
                general: {}
              }
            }
          }
        }
      }

      const result = coveUpdateWorker(config)
      const nested = result.visualizations.nestedDashboard.visualizations

      expect(nested.markup1.contentEditor.style).toBe('default')
      expect(nested.territoryMap.general.territoriesAlwaysShow).toBe(true)
      expect(result.version).toBe('4.26.4-1')
    })

    it('does not rerun 4.26.4-1 when config is already at 4.26.4-1', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.26.4-1',
        rows: [],
        visualizations: {
          territoryMap: {
            type: 'map',
            general: {
              territoriesAlwaysShow: false
            }
          }
        }
      }

      const result = coveUpdateWorker(config)

      expect(result.visualizations.territoryMap.general.territoriesAlwaysShow).toBe(false)
      expect(result.version).toBe('4.26.4-1')
    })
  })
})
