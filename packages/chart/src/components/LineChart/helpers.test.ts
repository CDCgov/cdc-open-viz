import { describe, it, expect, vi } from 'vitest'
import { createStyles, filterCircles } from './helpers'
import { PreliminaryDataItem } from '../../types/ChartConfig'

describe('LineChart helpers', () => {
  describe('createStyles', () => {
    const mockHandleLineType = vi.fn((style: string) => {
      switch (style) {
        case 'Dashed Small':
          return '5 5'
        case 'Dashed Medium':
          return '10 5'
        case 'Dashed Large':
          return '15 5'
        default:
          return 0
      }
    })

    const basePreliminaryData: PreliminaryDataItem[] = [
      {
        type: 'effect',
        seriesKeys: ['COVID-19'],
        column: 'Attribute',
        value: 'Dotted',
        style: 'Dashed Small',
        label: 'COVID Dotted',
        displayTooltip: true,
        displayLegend: true,
        displayTable: true,
        symbol: '',
        iconCode: '',
        lineCode: '',
        hideBarSymbol: false,
        hideLineStyle: false,
        circleSize: 6,
        displayGray: false
      },
      {
        type: 'effect',
        seriesKeys: ['Influenza'],
        column: 'Attribute',
        value: 'Dotted',
        style: 'Dashed Medium',
        label: 'Flu Dotted',
        displayTooltip: true,
        displayLegend: true,
        displayTable: true,
        symbol: '',
        iconCode: '',
        lineCode: '',
        hideBarSymbol: false,
        hideLineStyle: false,
        circleSize: 6,
        displayGray: false
      }
    ]

    describe('with dynamic category data (single-row/tall format)', () => {
      const dynamicCategoryData = [
        { Date: '10/5/2025', Category: 'COVID-19', Value: '43.6', Attribute: 'Dotted' },
        { Date: '10/12/2025', Category: 'COVID-19', Value: '40.7', Attribute: '' },
        { Date: '10/19/2025', Category: 'COVID-19', Value: '42.6', Attribute: 'Dotted' }
      ]

      it('should apply dashed style when Attribute matches effect value', () => {
        const styles = createStyles({
          preliminaryData: basePreliminaryData,
          data: dynamicCategoryData,
          stroke: '#000',
          strokeWidth: 2,
          handleLineType: mockHandleLineType,
          lineType: 'solid-line',
          seriesKey: 'COVID-19', // Runtime series key from Category column
          dynamicCategory: 'Category',
          originalSeriesKey: 'Value' // Data value column
        })

        expect(styles).toHaveLength(3)
        // First point has Attribute="Dotted" - should be dashed
        expect(styles[0].strokeDasharray).toBe('5 5')
        // Second point has Attribute="" - but previous point was dashed, so it inherits
        // Actually, the logic applies dashed to current AND previous point when effect is found
        // Let's check what happens
        expect(styles[1].strokeDasharray).toBe('5 5') // Inherits from next point's effect
        // Third point has Attribute="Dotted" - should be dashed
        expect(styles[2].strokeDasharray).toBe('5 5')
      })

      it('should apply solid style when no effect matches', () => {
        const dataNoEffects = [
          { Date: '10/5/2025', Category: 'COVID-19', Value: '43.6', Attribute: '' },
          { Date: '10/12/2025', Category: 'COVID-19', Value: '40.7', Attribute: '' }
        ]

        const styles = createStyles({
          preliminaryData: basePreliminaryData,
          data: dataNoEffects,
          stroke: '#000',
          strokeWidth: 2,
          handleLineType: mockHandleLineType,
          lineType: 'solid-line',
          seriesKey: 'COVID-19',
          dynamicCategory: 'Category',
          originalSeriesKey: 'Value'
        })

        expect(styles).toHaveLength(2)
        expect(styles[0].strokeDasharray).toBe(0)
        expect(styles[1].strokeDasharray).toBe(0)
      })

      it('should only match effects for the correct series', () => {
        // Using Influenza series key with COVID data should not match
        const styles = createStyles({
          preliminaryData: basePreliminaryData,
          data: dynamicCategoryData,
          stroke: '#000',
          strokeWidth: 2,
          handleLineType: mockHandleLineType,
          lineType: 'solid-line',
          seriesKey: 'Influenza', // Different series
          dynamicCategory: 'Category',
          originalSeriesKey: 'Value'
        })

        // No effect should match since seriesKeys is ['COVID-19'] not ['Influenza']
        // (assuming we use the COVID effect config)
        expect(styles.every(s => s.strokeDasharray === 0 || s.strokeDasharray === '10 5')).toBe(true)
      })
    })

    describe('with multi-column data (standard format)', () => {
      const multiColumnPreliminaryData: PreliminaryDataItem[] = [
        {
          type: 'effect',
          seriesKeys: ['COVID-19'],
          column: 'COVID-19-Attribute',
          value: 'Dotted',
          style: 'Dashed Small',
          label: 'COVID Dotted',
          displayTooltip: true,
          displayLegend: true,
          displayTable: true,
          symbol: '',
          iconCode: '',
          lineCode: '',
          hideBarSymbol: false,
          hideLineStyle: false,
          circleSize: 6,
          displayGray: false
        }
      ]

      const multiColumnData = [
        { Date: '10/5/2025', 'COVID-19': '43.6', 'COVID-19-Attribute': 'Dotted' },
        { Date: '10/12/2025', 'COVID-19': '40.7', 'COVID-19-Attribute': '' },
        { Date: '10/19/2025', 'COVID-19': '42.6', 'COVID-19-Attribute': 'Dotted' }
      ]

      it('should apply dashed style when attribute column matches', () => {
        const styles = createStyles({
          preliminaryData: multiColumnPreliminaryData,
          data: multiColumnData,
          stroke: '#000',
          strokeWidth: 2,
          handleLineType: mockHandleLineType,
          lineType: 'solid-line',
          seriesKey: 'COVID-19',
          dynamicCategory: '', // No dynamic category
          originalSeriesKey: ''
        })

        expect(styles).toHaveLength(3)
        // First point has attribute - dashed
        expect(styles[0].strokeDasharray).toBe('5 5')
        // Second point inherits from third point's effect
        expect(styles[1].strokeDasharray).toBe('5 5')
        // Third point has attribute - dashed
        expect(styles[2].strokeDasharray).toBe('5 5')
      })
    })

    describe('with custom weight', () => {
      it('should apply custom weight from preliminaryData item', () => {
        const preliminaryDataWithWeight: PreliminaryDataItem[] = [
          {
            type: 'effect',
            seriesKeys: ['COVID-19'],
            column: 'Attribute',
            value: 'Dotted',
            style: 'Dashed Small',
            label: 'COVID Dotted',
            displayTooltip: true,
            displayLegend: true,
            displayTable: true,
            symbol: '',
            iconCode: '',
            lineCode: '',
            hideBarSymbol: false,
            hideLineStyle: false,
            circleSize: 6,
            displayGray: false,
            weight: 5 // Custom weight
          }
        ]

        const data = [
          { Date: '10/5/2025', Category: 'COVID-19', Value: '43.6', Attribute: 'Dotted' },
          { Date: '10/12/2025', Category: 'COVID-19', Value: '40.7', Attribute: '' },
          { Date: '10/19/2025', Category: 'COVID-19', Value: '42.6', Attribute: 'Dotted' }
        ]

        const styles = createStyles({
          preliminaryData: preliminaryDataWithWeight,
          data,
          stroke: '#000',
          strokeWidth: 2, // Default weight
          handleLineType: mockHandleLineType,
          lineType: 'solid-line',
          seriesKey: 'COVID-19',
          dynamicCategory: 'Category',
          originalSeriesKey: 'Value'
        })

        expect(styles).toHaveLength(3)
        // First point has effect with custom weight
        expect(styles[0].strokeWidth).toBe(5)
        // Second point inherits custom weight from next point's effect
        expect(styles[1].strokeWidth).toBe(5)
        // Third point has effect with custom weight
        expect(styles[2].strokeWidth).toBe(5)
      })

      it('should use default strokeWidth when preliminaryData has no weight', () => {
        const preliminaryDataNoWeight: PreliminaryDataItem[] = [
          {
            type: 'effect',
            seriesKeys: ['COVID-19'],
            column: 'Attribute',
            value: 'Dotted',
            style: 'Dashed Small',
            label: 'COVID Dotted',
            displayTooltip: true,
            displayLegend: true,
            displayTable: true,
            symbol: '',
            iconCode: '',
            lineCode: '',
            hideBarSymbol: false,
            hideLineStyle: false,
            circleSize: 6,
            displayGray: false
            // No weight property
          }
        ]

        const data = [{ Date: '10/5/2025', Category: 'COVID-19', Value: '43.6', Attribute: 'Dotted' }]

        const styles = createStyles({
          preliminaryData: preliminaryDataNoWeight,
          data,
          stroke: '#000',
          strokeWidth: 2,
          handleLineType: mockHandleLineType,
          lineType: 'solid-line',
          seriesKey: 'COVID-19',
          dynamicCategory: 'Category',
          originalSeriesKey: 'Value'
        })

        expect(styles).toHaveLength(1)
        // Should use default strokeWidth when no custom weight
        expect(styles[0].strokeWidth).toBe(2)
      })
    })
  })

  describe('filterCircles', () => {
    const circlesPreliminaryData: PreliminaryDataItem[] = [
      {
        type: 'effect',
        seriesKeys: ['COVID-19'],
        column: 'Attribute',
        value: 'Marked',
        style: 'Open Circles',
        label: 'COVID Marked',
        displayTooltip: true,
        displayLegend: true,
        displayTable: true,
        symbol: '',
        iconCode: '',
        lineCode: '',
        hideBarSymbol: false,
        hideLineStyle: false,
        circleSize: 8,
        displayGray: false
      },
      {
        type: 'effect',
        seriesKeys: ['Influenza'],
        column: 'Attribute',
        value: 'Marked',
        style: 'Filled Circles',
        label: 'Flu Marked',
        displayTooltip: true,
        displayLegend: true,
        displayTable: true,
        symbol: '',
        iconCode: '',
        lineCode: '',
        hideBarSymbol: false,
        hideLineStyle: false,
        circleSize: 6,
        displayGray: false
      }
    ]

    describe('with dynamic category data', () => {
      const dynamicData = [
        { Date: '10/5/2025', Category: 'COVID-19', Value: '43.6', Attribute: 'Marked' },
        { Date: '10/12/2025', Category: 'COVID-19', Value: '40.7', Attribute: '' },
        { Date: '10/19/2025', Category: 'COVID-19', Value: '42.6', Attribute: 'Marked' }
      ]

      it('should find open circles for matching dynamic category data', () => {
        const circles = filterCircles(
          circlesPreliminaryData,
          dynamicData,
          'COVID-19', // Runtime series key
          'Category', // Dynamic category column
          'Value' // Value column for data existence check
        )

        expect(circles).toHaveLength(2) // Two data points with Attribute='Marked'
        expect(circles[0].isFilled).toBe(false) // Open circles
        expect(circles[0].size).toBe(8)
        expect(circles[1].isFilled).toBe(false)
      })

      it('should skip open circles for nonnumeric values while preserving zero values', () => {
        const data = [
          { Date: '10/5/2025', Category: 'COVID-19', Value: 'N/A', Attribute: 'Marked' },
          { Date: '10/12/2025', Category: 'COVID-19', Value: null, Attribute: 'Marked' },
          { Date: '10/19/2025', Category: 'COVID-19', Value: 0, Attribute: 'Marked' },
          { Date: '10/26/2025', Category: 'COVID-19', Value: '12.3', Attribute: 'Marked' }
        ]

        const circles = filterCircles(circlesPreliminaryData, data, 'COVID-19', 'Category', 'Value')

        expect(circles).toHaveLength(2)
        expect(circles.map(circle => circle.data.Value)).toEqual([0, '12.3'])
        expect(circles.every(circle => circle.isFilled === false)).toBe(true)
      })

      it('should return empty array when no matches', () => {
        const circles = filterCircles(
          circlesPreliminaryData,
          dynamicData,
          'RSV', // Series not in preliminaryData
          'Category',
          'Value'
        )

        expect(circles).toHaveLength(0)
      })
    })

    describe('with multi-column data (standard format)', () => {
      const multiColumnCirclesConfig: PreliminaryDataItem[] = [
        {
          type: 'effect',
          seriesKeys: ['COVID-19'],
          column: 'COVID-19-Attribute',
          value: 'Marked',
          style: 'Open Circles',
          label: 'COVID Marked',
          displayTooltip: true,
          displayLegend: true,
          displayTable: true,
          symbol: '',
          iconCode: '',
          lineCode: '',
          hideBarSymbol: false,
          hideLineStyle: false,
          circleSize: 8,
          displayGray: false
        }
      ]

      const multiColumnData = [
        { Date: '10/5/2025', 'COVID-19': '43.6', 'COVID-19-Attribute': 'Marked' },
        { Date: '10/12/2025', 'COVID-19': '40.7', 'COVID-19-Attribute': '' },
        { Date: '10/19/2025', 'COVID-19': '42.6', 'COVID-19-Attribute': 'Marked' }
      ]

      it('should find circles in standard multi-column format', () => {
        const circles = filterCircles(
          multiColumnCirclesConfig,
          multiColumnData,
          'COVID-19'
          // No dynamicCategory or originalSeriesKey - standard mode
        )

        expect(circles).toHaveLength(2)
        expect(circles[0].isFilled).toBe(false)
        expect(circles[0].size).toBe(8)
      })

      it('should be backwards compatible with 3-argument call', () => {
        // Existing code that doesn't pass dynamicCategory should still work
        const circles = filterCircles(multiColumnCirclesConfig, multiColumnData, 'COVID-19')

        expect(circles).toHaveLength(2)
      })
    })

    describe('filled circles', () => {
      const filledCirclesConfig: PreliminaryDataItem[] = [
        {
          type: 'effect',
          seriesKeys: ['Influenza'],
          column: 'Attribute',
          value: 'Marked',
          style: 'Filled Circles',
          label: 'Flu Marked',
          displayTooltip: true,
          displayLegend: true,
          displayTable: true,
          symbol: '',
          iconCode: '',
          lineCode: '',
          hideBarSymbol: false,
          hideLineStyle: false,
          circleSize: 6,
          displayGray: false
        }
      ]

      it('should find filled circles for dynamic category data', () => {
        const data = [
          { Date: '10/5/2025', Category: 'Influenza', Value: '23.1', Attribute: 'Marked' },
          { Date: '10/12/2025', Category: 'Influenza', Value: '31.7', Attribute: '' }
        ]

        const circles = filterCircles(filledCirclesConfig, data, 'Influenza', 'Category', 'Value')

        expect(circles).toHaveLength(1)
        expect(circles[0].isFilled).toBe(true)
        expect(circles[0].size).toBe(6)
      })

      it('should skip filled circles for nonnumeric values while preserving zero values', () => {
        const data = [
          { Date: '10/5/2025', Category: 'Influenza', Value: 'N/A', Attribute: 'Marked' },
          { Date: '10/12/2025', Category: 'Influenza', Value: null, Attribute: 'Marked' },
          { Date: '10/19/2025', Category: 'Influenza', Value: 0, Attribute: 'Marked' },
          { Date: '10/26/2025', Category: 'Influenza', Value: '12.3', Attribute: 'Marked' }
        ]

        const circles = filterCircles(filledCirclesConfig, data, 'Influenza', 'Category', 'Value')

        expect(circles).toHaveLength(2)
        expect(circles.map(circle => circle.data.Value)).toEqual([0, '12.3'])
      })
    })
  })
})
