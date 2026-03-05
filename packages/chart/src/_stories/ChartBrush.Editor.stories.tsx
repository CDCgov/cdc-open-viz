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
        brushActive: true,
        // New property: when set, shows last X data points instead of 35%
        brushDefaultRecentDateCount: undefined
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
      const brushSvg =
        (brushExtent?.closest('svg') as SVGSVGElement) ||
        (canvasElement.querySelector('.visx-brush svg') as SVGSVGElement)
      const brushWidthAttr = brushSvg ? parseFloat(brushSvg.getAttribute('width') || '0') : 0
      const totalBrushWidth = brushSvg ? brushSvg.clientWidth || brushWidthAttr : 0
      const countInput = canvasElement.querySelector('input[id*="brushDefaultRecentDateCount"]') as HTMLInputElement

      // Get the visible data points in the main chart (lines or bars)
      const chartSvg = canvasElement.querySelector('.linear-chart svg, .cove-chart svg') as SVGSVGElement
      const dataPointsInChart = chartSvg?.querySelectorAll('circle, rect:not([fill="transparent"])').length || 0

      return {
        brushWidth: brushExtent ? parseFloat(brushExtent.getAttribute('width') || '0') : 0,
        brushX: brushExtent ? parseFloat(brushExtent.getAttribute('x') || '0') : 0,
        totalBrushWidth,
        visibleDataPoints: dataPointsInChart,
        defaultRecentDateCountValue: countInput?.value || '',
        selectionPercentage:
          brushExtent && totalBrushWidth > 0
            ? (parseFloat(brushExtent.getAttribute('width') || '0') / totalBrushWidth) * 100
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
        const input = canvas.getByLabelText(/show last.*dates.*default/i) as HTMLInputElement
        await userEvent.clear(input)
        await userEvent.type(input, '30')
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
        const input = canvas.getByLabelText(/show last.*dates.*default/i) as HTMLInputElement
        await userEvent.clear(input)
        await userEvent.type(input, '50')
        await userEvent.tab()
      },
      (before, after) => {
        // Changing from 30 to 50 should expand the brush width
        return after.defaultRecentDateCountValue === '50' && after.brushWidth > before.brushWidth
      }
    )

    // ============================================================================
    // TEST: Clear Recent Date Count Returns to Default 35%
    // Verifies: When the count is cleared, brush returns to percentage-based default
    // ============================================================================

    await performAndAssert(
      'Clear Default Recent Date Count (return to 35%)',
      getBrushSelectionState,
      async () => {
        const input = canvas.getByLabelText(/show last.*dates.*default/i) as HTMLInputElement
        await userEvent.clear(input)
        await userEvent.type(input, ' ')
        await userEvent.tab()
      },
      (before, after) => {
        // Clearing should restore default mode and return near the initial brush width.
        const widthDeltaFromInitial = Math.abs(after.brushWidth - initialSelectionState.brushWidth)
        return after.defaultRecentDateCountValue === '' && widthDeltaFromInitial <= 2
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
