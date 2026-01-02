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

  describe('migrateAnnotationYToPercentage', () => {
    it('should convert Y position from absolute pixels to percentage', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.0',
        annotations: [
          {
            text: 'Test Annotation',
            x: 50,
            y: 200,
            savedDimensions: [800, 400],
            dx: 10,
            dy: -10
          }
        ]
      }

      const result = update_4_26_1(config)

      expect(result.annotations[0].y).toBe(50)
      expect(result.annotations[0].x).toBe(50)
      expect(result.version).toBe('4.26.1')
    })

    it('should handle multiple annotations with different Y positions', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.0',
        annotations: [
          {
            text: 'Top',
            x: 25,
            y: 100,
            savedDimensions: [1000, 500]
          },
          {
            text: 'Bottom',
            x: 75,
            y: 450,
            savedDimensions: [1000, 500]
          }
        ]
      }

      const result = update_4_26_1(config)

      expect(result.annotations[0].y).toBe(20)
      expect(result.annotations[1].y).toBe(90)
    })

    it('should default to 50% when savedDimensions is missing', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.0',
        annotations: [
          {
            text: 'No dimensions',
            x: 50,
            y: 300
          }
        ]
      }

      const result = update_4_26_1(config)

      expect(result.annotations[0].y).toBe(50)
    })

    it('should handle dashboard configs with nested visualizations', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.26.0',
        visualizations: {
          chart1: {
            type: 'chart',
            annotations: [
              {
                text: 'Chart 1 Annotation',
                x: 30,
                y: 150,
                savedDimensions: [600, 300]
              }
            ]
          }
        }
      }

      const result = update_4_26_1(config)

      expect(result.visualizations.chart1.annotations[0].y).toBe(50)
    })

    it('should preserve all other annotation properties', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.0',
        annotations: [
          {
            text: 'Complex Annotation',
            x: 50,
            y: 250,
            savedDimensions: [1000, 500],
            dx: 20,
            dy: -30,
            xKey: 1577836800000,
            yKey: '42',
            seriesKey: 'series1',
            marker: 'arrow'
          }
        ]
      }

      const result = update_4_26_1(config)

      const annotation = result.annotations[0]
      expect(annotation.y).toBe(50)
      expect(annotation.text).toBe('Complex Annotation')
      expect(annotation.dx).toBe(20)
      expect(annotation.dy).toBe(-30)
      expect(annotation.xKey).toBe(1577836800000)
      expect(annotation.seriesKey).toBe('series1')
    })

    it('should handle config with no annotations', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.0',
        title: 'Chart without annotations'
      }

      const result = update_4_26_1(config)

      expect(result.annotations).toBeUndefined()
      expect(result.title).toBe('Chart without annotations')
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
            brush: { enabled: true },
            annotations: [
              {
                x: 50,
                y: 200,
                savedDimensions: [800, 400]
              }
            ]
          }
        }
      }

      const result = update_4_26_1(config)

      expect(result.dashboard.sharedFilters[0].parents).toEqual(['parent-id'])
      expect(result.visualizations.chart1.brush).toBeUndefined()
      expect(result.visualizations.chart1.annotations[0].y).toBe(50)
      expect(result.version).toBe('4.26.1')
    })
  })
})
