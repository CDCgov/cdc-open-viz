import update_4_26_2 from '../4.26.2'
import { expect, describe, it } from 'vitest'

describe('update_4_26_2', () => {
  describe('migrateAnnotationYToPercentage', () => {
    it('should convert Y position from absolute pixels to percentage', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.1',
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

      const result = update_4_26_2(config)

      expect(result.annotations[0].y).toBe(50)
      expect(result.annotations[0].x).toBe(50)
      expect(result.version).toBe('4.26.2')
    })

    it('should handle multiple annotations with different Y positions', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.1',
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

      const result = update_4_26_2(config)

      expect(result.annotations[0].y).toBe(20)
      expect(result.annotations[1].y).toBe(90)
    })

    it('should default to 50% when savedDimensions is missing', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.1',
        annotations: [
          {
            text: 'No dimensions',
            x: 50,
            y: 300
          }
        ]
      }

      const result = update_4_26_2(config)

      expect(result.annotations[0].y).toBe(50)
    })

    it('should handle dashboard configs with nested visualizations', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.26.1',
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

      const result = update_4_26_2(config)

      expect(result.visualizations.chart1.annotations[0].y).toBe(50)
    })

    it('should preserve all other annotation properties', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.1',
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

      const result = update_4_26_2(config)

      const annotation = result.annotations[0]
      expect(annotation.y).toBe(50)
      expect(annotation.text).toBe('Complex Annotation')
      expect(annotation.dx).toBe(20)
      expect(annotation.dy).toBe(-30)
      expect(annotation.dataX).toBe(1577836800000)
      expect(annotation.xKey).toBeUndefined()
      expect(annotation.yKey).toBeUndefined()
      expect(annotation.seriesKey).toBe('series1')
    })

    it('should handle config with no annotations', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.1',
        title: 'Chart without annotations'
      }

      const result = update_4_26_2(config)

      expect(result.annotations).toBeUndefined()
      expect(result.title).toBe('Chart without annotations')
    })
  })

  describe('combined migrations', () => {
    it('should run all migrations together', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.26.1',
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

      const result = update_4_26_2(config)

      expect(result.visualizations.chart1.annotations[0].y).toBe(50)
      expect(result.visualizations.chart1.annotations[0].anchorMode).toBe('fixed')
      expect(result.visualizations.chart1.annotations[0].dataX).toBeUndefined()
      expect(result.version).toBe('4.26.2')
    })

    it('should migrate data model along with Y position', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.1',
        annotations: [
          {
            x: 50,
            y: 200,
            savedDimensions: [800, 400],
            xKey: 1577836800000,
            yKey: '42',
            snapToNearestPoint: true
          }
        ]
      }

      const result = update_4_26_2(config)

      const annotation = result.annotations[0]
      expect(annotation.y).toBe(50)
      expect(annotation.anchorMode).toBe('fixed')
      expect(annotation.dataX).toBe(1577836800000)
      expect(annotation.xKey).toBeUndefined()
      expect(annotation.yKey).toBeUndefined()
      expect(annotation.snapToNearestPoint).toBeUndefined()
    })
  })
})
