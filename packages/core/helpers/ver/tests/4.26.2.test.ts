import update_4_26_2 from '../4.26.2'
import { expect, describe, it } from 'vitest'

describe('update_4_26_2', () => {
  describe('migrateAnnotationDimensions', () => {
    it('should convert Y position from absolute pixels to percentage and delete savedDimensions', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.1',
        heights: { vertical: 400 },
        annotations: [
          {
            text: 'Test Annotation',
            x: 50,
            y: 200,
            savedDimensions: [800, 560], // old format: will be deleted
            dx: 10,
            dy: -10
          }
        ]
      }

      const result = update_4_26_2(config)

      // Y is now calculated as percentage of heights.vertical (400)
      expect(result.annotations[0].y).toBe(50) // 200 / 400 * 100 = 50
      expect(result.annotations[0].x).toBe(50)
      // savedDimensions should be deleted to preserve old dx/dy behavior
      expect(result.annotations[0].savedDimensions).toBeUndefined()
      // dx/dy should be preserved unchanged
      expect(result.annotations[0].dx).toBe(10)
      expect(result.annotations[0].dy).toBe(-10)
      expect(result.version).toBe('4.26.2')
    })

    it('should handle multiple annotations with different Y positions', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.1',
        heights: { vertical: 500 },
        annotations: [
          {
            text: 'Top',
            x: 25,
            y: 100,
            savedDimensions: [1000, 700]
          },
          {
            text: 'Middle',
            x: 75,
            y: 250,
            savedDimensions: [1000, 700]
          }
        ]
      }

      const result = update_4_26_2(config)

      // Y calculated as percentage of heights.vertical (500)
      expect(result.annotations[0].y).toBe(20) // 100 / 500 * 100 = 20
      expect(result.annotations[1].y).toBe(50) // 250 / 500 * 100 = 50
      // savedDimensions should be deleted
      expect(result.annotations[0].savedDimensions).toBeUndefined()
      expect(result.annotations[1].savedDimensions).toBeUndefined()
    })

    it('should use default vertical height (300) when heights not specified', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.1',
        annotations: [
          {
            text: 'No heights config',
            x: 50,
            y: 150,
            savedDimensions: [800, 560]
          }
        ]
      }

      const result = update_4_26_2(config)

      // Uses default vertical height of 300
      expect(result.annotations[0].y).toBe(50) // 150 / 300 * 100 = 50
      expect(result.annotations[0].savedDimensions).toBeUndefined()
    })

    it('should use horizontal height for horizontal orientation', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.1',
        orientation: 'horizontal',
        heights: { horizontal: 750 },
        annotations: [
          {
            text: 'Horizontal chart annotation',
            x: 50,
            y: 375,
            savedDimensions: [800, 900]
          }
        ]
      }

      const result = update_4_26_2(config)

      // Uses heights.horizontal for horizontal charts
      expect(result.annotations[0].y).toBe(50) // 375 / 750 * 100 = 50
      expect(result.annotations[0].savedDimensions).toBeUndefined()
    })

    it('should handle dashboard configs with nested visualizations', () => {
      const config: any = {
        type: 'dashboard',
        version: '4.26.1',
        visualizations: {
          chart1: {
            type: 'chart',
            heights: { vertical: 300 },
            annotations: [
              {
                text: 'Chart 1 Annotation',
                x: 30,
                y: 150,
                savedDimensions: [600, 450]
              }
            ]
          }
        }
      }

      const result = update_4_26_2(config)

      expect(result.visualizations.chart1.annotations[0].y).toBe(50) // 150 / 300 * 100 = 50
      expect(result.visualizations.chart1.annotations[0].savedDimensions).toBeUndefined()
    })

    it('should preserve all other annotation properties and delete xKey entirely', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.1',
        heights: { vertical: 500 },
        annotations: [
          {
            text: 'Complex Annotation',
            x: 50,
            y: 250,
            savedDimensions: [1000, 700],
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
      expect(annotation.y).toBe(50) // 250 / 500 * 100 = 50
      expect(annotation.text).toBe('Complex Annotation')
      expect(annotation.dx).toBe(20)
      expect(annotation.dy).toBe(-30)
      // xKey is deleted entirely (not renamed to dataX) because old format
      // stored timestamps but new dataX expects raw data values
      expect(annotation.xKey).toBeUndefined()
      expect(annotation.dataX).toBeUndefined()
      expect(annotation.yKey).toBeUndefined()
      // Non-empty seriesKey is preserved
      expect(annotation.seriesKey).toBe('series1')
      expect(annotation.savedDimensions).toBeUndefined()
    })

    it('should delete empty seriesKey', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.1',
        heights: { vertical: 300 },
        annotations: [
          {
            text: 'Annotation with empty seriesKey',
            x: 50,
            y: 150,
            seriesKey: ''
          }
        ]
      }

      const result = update_4_26_2(config)

      // Empty seriesKey should be deleted to prevent yScale(undefined) errors
      expect(result.annotations[0].seriesKey).toBeUndefined()
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

    it('should handle annotation without savedDimensions', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.1',
        heights: { vertical: 300 },
        annotations: [
          {
            text: 'No savedDimensions',
            x: 50,
            y: 150
          }
        ]
      }

      const result = update_4_26_2(config)

      expect(result.annotations[0].y).toBe(50) // 150 / 300 * 100 = 50
      expect(result.annotations[0].savedDimensions).toBeUndefined()
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
            heights: { vertical: 400 },
            brush: { enabled: true },
            annotations: [
              {
                x: 50,
                y: 200,
                savedDimensions: [800, 560]
              }
            ]
          }
        }
      }

      const result = update_4_26_2(config)

      expect(result.visualizations.chart1.annotations[0].y).toBe(50) // 200 / 400 * 100 = 50
      expect(result.visualizations.chart1.annotations[0].anchorMode).toBe('fixed')
      expect(result.visualizations.chart1.annotations[0].savedDimensions).toBeUndefined()
      expect(result.visualizations.chart1.annotations[0].dataX).toBeUndefined()
      expect(result.version).toBe('4.26.2')
    })

    it('should migrate data model along with Y position', () => {
      const config: any = {
        type: 'chart',
        version: '4.26.1',
        heights: { vertical: 400 },
        annotations: [
          {
            x: 50,
            y: 200,
            savedDimensions: [800, 560],
            xKey: 1577836800000,
            yKey: '42',
            snapToNearestPoint: true
          }
        ]
      }

      const result = update_4_26_2(config)

      const annotation = result.annotations[0]
      expect(annotation.y).toBe(50) // 200 / 400 * 100 = 50
      expect(annotation.anchorMode).toBe('fixed')
      // xKey is deleted entirely (not renamed to dataX) - format incompatible
      expect(annotation.dataX).toBeUndefined()
      expect(annotation.xKey).toBeUndefined()
      expect(annotation.yKey).toBeUndefined()
      expect(annotation.snapToNearestPoint).toBeUndefined()
      expect(annotation.savedDimensions).toBeUndefined()
    })
  })
})
