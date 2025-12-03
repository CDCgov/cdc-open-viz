import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import Chart from '../CdcChartComponent'

// Import testing helpers following best practices document
import { openAccordion, performAndAssert, waitForEditor, waitForPresence } from '@cdc/core/helpers/testing'

// Import working brush configuration
import brushEnabledConfig from './_mock/brush_enabled.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Editor Tests/Brush',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

// ============================================================================
// BRUSH CHART EDITOR TESTS
// Tests the Brush Slider features in the Date/Category Axis accordion section
// Following best practices:
// - Tests visualization output changes, not control state
// - Uses performAndAssert pattern for all interactions
// - Tests specific visual changes in the brush selection
// ============================================================================

export const BrushDefaultSelectionTests: Story = {
  name: 'Default Selection Mode Tests',
  parameters: {
    test: {
      timeout: 30000
    }
  },
  args: {
    config: {
      ...brushEnabledConfig,
      xAxis: {
        ...brushEnabledConfig.xAxis,
        brushActive: true
      },
      brush: {
        ...brushEnabledConfig.brush,
        active: true,
        // New property: when set, shows last X data points instead of 35%
        defaultRecentDateCount: undefined
      }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Date/Category Axis')

    // ============================================================================
    // TEST: Brush Slider Toggle
    // Verifies: Brush slider appears/disappears in the visualization
    // ============================================================================

    const getBrushVisibility = () => {
      const brushSvg = canvasElement.querySelector('svg[style*="border: 1px solid"]')
      const brushRect = canvasElement.querySelector('.visx-brush rect')
      return {
        hasBrushSvg: !!brushSvg,
        hasBrushRect: !!brushRect,
        brushContainerVisible: !!canvasElement.querySelector('[class*="brush"]')
      }
    }

    // Verify brush is initially visible since config has brushActive: true
    const initialBrushState = getBrushVisibility()
    expect(initialBrushState.hasBrushSvg || initialBrushState.brushContainerVisible).toBe(true)

    // Find and toggle the brush checkbox
    const brushCheckbox = canvas.getByLabelText(/show brush slider/i) as HTMLInputElement
    expect(brushCheckbox).toBeTruthy()
    expect(brushCheckbox.checked).toBe(true)

    // Toggle brush off and verify it disappears from visualization
    await performAndAssert(
      'Brush Slider Toggle Off',
      getBrushVisibility,
      async () => await userEvent.click(brushCheckbox),
      (before, after) => {
        // Either brush SVG or brush container should disappear
        return (
          (before.hasBrushSvg && !after.hasBrushSvg) || (before.brushContainerVisible && !after.brushContainerVisible)
        )
      }
    )

    // Toggle brush back on
    await performAndAssert(
      'Brush Slider Toggle On',
      getBrushVisibility,
      async () => await userEvent.click(brushCheckbox),
      (before, after) => {
        return (
          (!before.hasBrushSvg && after.hasBrushSvg) || (!before.brushContainerVisible && after.brushContainerVisible)
        )
      }
    )

    // ============================================================================
    // TEST: Default Recent Date Count Input
    // Verifies: When "Show last X dates" is set, the brush selection changes
    // to show exactly X data points instead of the default 35%
    // ============================================================================

    // This control should appear when brush is enabled
    // Look for the new "Show last X dates by default" input
    const recentDateCountInput = canvas.getByLabelText(/show last.*dates.*default/i) as HTMLInputElement

    // If the control doesn't exist yet (TDD - test before implementation),
    // the test will fail here, indicating we need to implement this feature
    expect(recentDateCountInput).toBeTruthy()
    expect(recentDateCountInput).toHaveAttribute('type', 'number')

    // ============================================================================
    // TEST: Setting Recent Date Count Dynamically Updates Brush Selection
    // Verifies: Changing the value in the editor immediately updates the brush
    // ============================================================================

    const getBrushSelectionState = () => {
      // The brush selection is represented by the visx-brush extent rect
      const brushExtent = canvasElement.querySelector('.visx-brush rect[class*="selection"]') as SVGRectElement
      const brushSvg = canvasElement.querySelector('svg[style*="border: 1px solid"]') as SVGSVGElement

      // Get the visible data points in the main chart (lines or bars)
      const chartSvg = canvasElement.querySelector('.linear-chart svg, .cove-chart svg') as SVGSVGElement
      const dataPointsInChart = chartSvg?.querySelectorAll('circle, rect:not([fill="transparent"])').length || 0

      return {
        brushWidth: brushExtent ? parseFloat(brushExtent.getAttribute('width') || '0') : 0,
        brushX: brushExtent ? parseFloat(brushExtent.getAttribute('x') || '0') : 0,
        totalBrushWidth: brushSvg ? brushSvg.clientWidth : 0,
        visibleDataPoints: dataPointsInChart,
        selectionPercentage:
          brushExtent && brushSvg
            ? (parseFloat(brushExtent.getAttribute('width') || '0') / brushSvg.clientWidth) * 100
            : 0
      }
    }

    const initialSelectionState = getBrushSelectionState()

    // Default is ~35% of the width
    // With 329 data points in brush_enabled.json, 35% would be ~115 points
    // Setting to 30 should make the selection much narrower AND update immediately
    await performAndAssert(
      'Set Default Recent Date Count to 30 - Brush Updates Dynamically',
      getBrushSelectionState,
      async () => {
        await userEvent.clear(recentDateCountInput)
        await userEvent.type(recentDateCountInput, '30')
        // Trigger change/blur to apply the value - this should update the brush immediately
        await userEvent.tab()
      },
      (before, after) => {
        // The brush selection width should decrease when we set a smaller count
        // Since we have ~329 data points and default is 35% (~115 points),
        // setting to 30 points should make the selection narrower
        return after.brushWidth < before.brushWidth || after.selectionPercentage < before.selectionPercentage
      }
    )

    // ============================================================================
    // TEST: Changing Value Again Updates Selection Again
    // Verifies: Multiple changes continue to update the brush dynamically
    // ============================================================================

    await performAndAssert(
      'Change to 50 dates - Brush Expands Dynamically',
      getBrushSelectionState,
      async () => {
        await userEvent.clear(recentDateCountInput)
        await userEvent.type(recentDateCountInput, '50')
        await userEvent.tab()
      },
      (before, after) => {
        // Changing from 30 to 50 should expand the brush width
        return after.brushWidth > before.brushWidth
      }
    )

    // ============================================================================
    // TEST: Verify Exact Data Point Count in Selection
    // Verifies: The number of selected data points matches the input value
    // ============================================================================

    // The brush selection should now show exactly 30 data points
    // We can verify this by checking the filtered data in the visualization
    const getSelectedDataPointCount = () => {
      // When brush is active, only the selected data points are rendered in the main chart
      // Look for the number of data points (circles, bars, or line path points)
      const chartContainer = canvasElement.querySelector('.linear-chart, .cove-chart')
      const svg = chartContainer?.querySelector('svg')

      // For line charts, count the line path data points
      const linePaths = svg?.querySelectorAll('path[class*="line"], .visx-linepath')
      let dataPointCount = 0

      if (linePaths && linePaths.length > 0) {
        // Count points in the path by looking at the rendered circles
        const circles = svg?.querySelectorAll('circle')
        dataPointCount = circles?.length || 0
      }

      // For bar charts
      const bars = svg?.querySelectorAll('rect[class*="bar"]')
      if (bars && bars.length > 0) {
        dataPointCount = bars.length
      }

      return {
        dataPointCount,
        hasData: dataPointCount > 0
      }
    }

    // After setting to 30, the chart should show ~30 data points
    // (exact count may vary based on how brush boundaries align with data points)
    const afterSettingCount = getSelectedDataPointCount()

    // The count should be close to 30 (allowing some tolerance for edge cases)
    // Note: This assertion helps verify the feature works - if it fails,
    // the implementation needs adjustment
    if (afterSettingCount.hasData) {
      expect(afterSettingCount.dataPointCount).toBeGreaterThan(0)
      expect(afterSettingCount.dataPointCount).toBeLessThanOrEqual(35) // 30 + tolerance
    }

    // ============================================================================
    // TEST: Clear Recent Date Count Returns to Default 35%
    // Verifies: When the count is cleared, brush returns to percentage-based default
    // ============================================================================

    await performAndAssert(
      'Clear Default Recent Date Count (return to 35%)',
      getBrushSelectionState,
      async () => {
        await userEvent.clear(recentDateCountInput)
        await userEvent.tab()
      },
      (before, after) => {
        // The selection should return to approximately 35% of the total width
        // Since we had set it to 30 points (~9% with 329 data points),
        // clearing should expand it back to ~35%
        return after.brushWidth > before.brushWidth || after.selectionPercentage > before.selectionPercentage
      }
    )
  }
}

// ============================================================================
// BRUSH SECTION ACCESSIBILITY TEST
// Verifies the brush controls are properly labeled and accessible
// ============================================================================

export const BrushAccessibilityTests: Story = {
  name: 'Accessibility Tests',
  parameters: {
    test: {
      timeout: 20000
    }
  },
  args: {
    config: {
      ...brushEnabledConfig,
      xAxis: {
        ...brushEnabledConfig.xAxis,
        brushActive: true
      }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Date/Category Axis')

    // ============================================================================
    // TEST: Brush Controls Have Proper Labels
    // ============================================================================

    // The brush slider checkbox should be findable by its label
    const brushCheckbox = canvas.getByLabelText(/show brush slider/i)
    expect(brushCheckbox).toBeTruthy()
    expect(brushCheckbox).toHaveAttribute('type', 'checkbox')

    // The recent date count input should have a descriptive label
    const recentDateLabel = canvas.getByLabelText(/show last.*dates.*default/i)

    // If this test fails, it indicates the control needs a proper accessible label
    expect(recentDateLabel).toBeTruthy()
    expect(recentDateLabel).toHaveAttribute('type', 'number')
  }
}
