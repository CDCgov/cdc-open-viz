import { coveUpdateWorker } from '../../coveUpdateWorker'
import { compareMigrationVersions } from '../compareMigrationVersions'
import { expect, describe, it } from 'vitest'

const expectVersionAtLeast = (actualVersion: string, minimumVersion: string) => {
  expect(compareMigrationVersions(actualVersion, minimumVersion)).toBeGreaterThanOrEqual(0)
}

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
    it('migrates sparse multi-dashboard containers without materializing root dashboard collections', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.25.1',
        multiDashboards: [
          {
            rows: [],
            visualizations: {},
            dashboard: {}
          }
        ]
      }

      const result = coveUpdateWorker(config)

      expect(result).not.toHaveProperty('dashboard')
      expect(result).not.toHaveProperty('rows')
      expect(result).not.toHaveProperty('visualizations')
      expect(result.multiDashboards[0].version).toBe(result.version)
    })

    it.each([undefined, 'banana'])('restores a fully sparse multi-dashboard root with version %s', version => {
      const result = coveUpdateWorker({
        type: 'dashboard',
        ...(version === undefined ? {} : { version }),
        multiDashboards: [{ dashboard: {}, rows: [], visualizations: {} }]
      } as any)

      expect(result).not.toHaveProperty('dashboard')
      expect(result).not.toHaveProperty('rows')
      expect(result).not.toHaveProperty('visualizations')
    })

    it('preserves authored root collections while removing only synthetic collections', () => {
      const result = coveUpdateWorker({
        type: 'dashboard',
        version: '4.26.3',
        dashboard: { title: 'Authored root' },
        visualizations: { markup: { type: 'markup-include' } },
        multiDashboards: [{ dashboard: {}, rows: [], visualizations: {} }]
      } as any)

      expect(result.dashboard.title).toBe('Authored root')
      expect(result.visualizations.markup.contentEditor.style).toBe('default')
      expect(result).not.toHaveProperty('rows')
    })

    it('uses each child saved version and starting shape independently', () => {
      const result = coveUpdateWorker({
        type: 'dashboard',
        version: '4.26.8-1',
        multiDashboards: [
          {
            version: '4.26.8-2',
            dashboard: {},
            rows: [],
            visualizations: { paired: { type: 'chart', visualizationType: 'Paired Bar' } }
          },
          {
            version: '4.26.8-1',
            dashboard: {},
            rows: [],
            visualizations: { paired: { type: 'chart', visualizationType: 'Paired Bar' } }
          }
        ]
      } as any)

      expect(result.multiDashboards[0].visualizations.paired.orientation).toBeUndefined()
      expect(result.multiDashboards[1].visualizations.paired.orientation).toBe('horizontal')
    })

    it('supplies visualization-filter IDs across root and multi-dashboard configs', () => {
      const config: any = {
        type: 'dashboard',
        rows: [],
        visualizations: { a: { filters: [{}] } },
        multiDashboards: [{ rows: [], visualizations: { a: { filters: [{}] } } }]
      }

      const result = coveUpdateWorker(config)

      expect(result.visualizations.a.filters[0].id).toBeDefined()
      expect(result.multiDashboards[0].visualizations.a.filters[0].id).toBeDefined()
    })

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

    it('should retain version on sub-dashboards after processing so migrations do not re-run', () => {
      const config: any = makeMultiDashConfig('4.25.0')
      const result = coveUpdateWorker(config)

      // Sub-dashboards must keep a version so the next load skips already-applied migrations.
      // Previously the version was deleted, causing every migration to re-run on every page load.
      expectVersionAtLeast(result.multiDashboards[0].version, '4.26.4-1')
      expect(result.multiDashboards[0].version).toBe(result.version)
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
      expectVersionAtLeast(result.version, '4.26.4-1')
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
              waffle1: {
                type: 'waffle-chart',
                visualizationType: 'TP5 Waffle',
                valueDescription: 'legacy',
                showPercent: false,
                showDenominator: true
              }
            }
          }
        }
      }

      const result = coveUpdateWorker(config)
      const nested = result.visualizations.nestedDashboard.visualizations

      expect(nested.markup1.contentEditor.style).toBe('default')
      expect(nested.waffle1.valueDescription).toBe('')
      expect(nested.waffle1.showPercent).toBe(true)
      expect(nested.waffle1.showDenominator).toBe(false)
      expectVersionAtLeast(result.version, '4.26.4-1')
    })

    it('does not rerun 4.26.4-1 when config is already at 4.26.4-1', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.26.4-1',
        rows: [],
        visualizations: {
          markup1: {
            type: 'markup-include',
            contentEditor: {
              style: 'tp5'
            }
          }
        }
      }

      const result = coveUpdateWorker(config)

      expect(result.visualizations.markup1.contentEditor.style).toBe('tp5')
      expectVersionAtLeast(result.version, '4.26.4-1')
    })

    it('does not rerun older migrations for a newer saved version', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.26.5',
        rows: [],
        visualizations: {
          chart1: {
            type: 'chart',
            legend: {
              unified: false
            }
          }
        }
      }

      const result = coveUpdateWorker(config)

      expect(result.visualizations.chart1.legend.unified).toBe(false)
      expectVersionAtLeast(result.version, '4.26.5')
    })

    it('carries a 4.24.9 dashboard with omitted shared filters through the final array guarantee', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.24.9',
        dashboard: { title: 'Dashboard without filters' },
        rows: [],
        visualizations: {}
      }

      const result = coveUpdateWorker(config)

      expect(result.dashboard.sharedFilters).toEqual([])
    })

    it('treats malformed config versions as 0.0.0 and runs through to the latest migration', () => {
      const config: any = {
        type: 'dashboard',
        version: 'banana',
        rows: [],
        visualizations: {
          chart1: {
            type: 'chart',
            brush: { enabled: true },
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

      expect(result.visualizations.chart1.brush).toBeUndefined()
      expect(result.visualizations.chart1.titleStyle).toBe('small')
      expect(result.visualizations.chart1.visual).toEqual({
        border: false,
        borderColorTheme: false,
        accent: false,
        background: false,
        hideBackgroundColor: false
      })
      expect(result.visualizations.markup1.contentEditor.style).toBe('default')
      expectVersionAtLeast(result.version, '4.26.4-1')
    })

    it('migrates legacy filtered-text configs when they reach the 4.26.5 migration', () => {
      const config: any = {
        type: 'filtered-text',
        version: '4.26.4',
        textColumn: 'Message'
      }

      const result = coveUpdateWorker(config)

      expect(result.type).toBe('markup-include')
      expect(result.markupVariables[0]).toMatchObject({
        columnName: 'Message',
        selectionMode: 'first'
      })
      expectVersionAtLeast(result.version, '4.26.5')
    })
  })
})
