import update_4_26_1 from '../4.26.1'
import { expect, describe, it } from 'vitest'

describe('update_4_26_1', () => {
  describe('normalizeFilterParents', () => {
    it('should convert string parents to array in shared filters', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.26.0',
        dashboard: {
          sharedFilters: [
            {
              type: 'datafilter',
              parents: 'parent-filter-id'
            }
          ]
        }
      }

      const result = update_4_26_1(config)

      expect(result.dashboard.sharedFilters[0].parents).toEqual(['parent-filter-id'])
      expect(result.version).toBe('4.26.1')
    })

    it('should leave array parents unchanged', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.26.0',
        dashboard: {
          sharedFilters: [
            {
              type: 'datafilter',
              parents: ['parent1', 'parent2']
            }
          ]
        }
      }

      const result = update_4_26_1(config)

      expect(result.dashboard.sharedFilters[0].parents).toEqual(['parent1', 'parent2'])
    })
  })

  describe('removeOldBrushKeys', () => {
    it('should remove brush config from chart', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.0',
        brush: { enabled: true }
      }

      const result = update_4_26_1(config)

      expect(result.brush).toBeUndefined()
    })

    it('should remove brush config from dashboard visualizations', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.26.0',
        visualizations: {
          chart1: {
            type: 'chart',
            brush: { enabled: true }
          }
        }
      }

      const result = update_4_26_1(config)

      expect(result.visualizations.chart1.brush).toBeUndefined()
    })
  })

  describe('combined migrations', () => {
    it('should run all migrations together', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.26.0',
        dashboard: {
          sharedFilters: [
            {
              type: 'datafilter',
              parents: 'parent-id'
            }
          ]
        },
        visualizations: {
          chart1: {
            type: 'chart',
            brush: { enabled: true }
          }
        }
      }

      const result = update_4_26_1(config)

      expect(result.dashboard.sharedFilters[0].parents).toEqual(['parent-id'])
      expect(result.visualizations.chart1.brush).toBeUndefined()
      expect(result.version).toBe('4.26.1')
    })
  })
})
