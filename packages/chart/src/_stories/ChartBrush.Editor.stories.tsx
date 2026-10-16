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

    const hideHatchingCheckbox = canvas.getByLabelText(/hide diagonal hatching/i) as HTMLInputElement
    const getBrushHatchingState = () => {
      const brushExtent = canvasElement.querySelector('.visx-brush rect[class*="selection"]') as SVGRectElement

      return {
        checked: hideHatchingCheckbox.checked,
        fill: brushExtent?.getAttribute('fill') || brushExtent?.style.fill || ''
      }
    }

    expect(hideHatchingCheckbox.checked).toBe(false)
    expect(hideHatchingCheckbox.classList.contains('ms-4')).toBe(true)
    expect(getBrushHatchingState().fill).toContain('brush_pattern')

    await performAndAssert(
      'Hide Diagonal Hatching - Brush selection becomes transparent',
      getBrushHatchingState,
      async () => await userEvent.click(hideHatchingCheckbox),
      (before, after) => !before.checked && after.checked && after.fill === 'transparent'
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

      return {
        brushWidth: brushExtent ? parseFloat(brushExtent.getAttribute('width') || '0') : 0,
        brushX: brushExtent ? parseFloat(brushExtent.getAttribute('x') || '0') : 0,
        totalBrushWidth,
        defaultRecentDateCountValue: countInput?.value || ''
      }
    }

    const initialSelectionState = getBrushSelectionState()
    const selectionMatchesRecentDateCount = (state: ReturnType<typeof getBrushSelectionState>, count: number) => {
      const expectedWidth = (state.totalBrushWidth * count) / brushEnabledConfig.data.length
      const rightEdge = state.brushX + state.brushWidth

      return Math.abs(state.brushWidth - expectedWidth) <= 2 && Math.abs(rightEdge - state.totalBrushWidth) <= 2
    }

    // Default is ~35% of the width
    // With 253 data points in brush_enabled.json, 35% is about 89 points.
    // Setting the count to 30 should make the selection narrower and update immediately.
    await performAndAssert(
      'Set Default Recent Date Count to 30 - Brush Updates Dynamically',
      getBrushSelectionState,
      async () => {
        await userEvent.type(recentDateCountInput, '30')
        await userEvent.tab()
      },
      (before, after) => {
        return after.brushWidth < before.brushWidth && selectionMatchesRecentDateCount(after, 30)
      }
    )

    // ============================================================================
    // TEST: Changing Value Again Updates Selection Again
    // Verifies: Multiple changes continue to update the brush dynamically
    // ============================================================================

    // Wait for the debounced clear to reach the chart before typing the next value.
    // Otherwise the pending empty value can overwrite the newly typed count under CI load.
    await performAndAssert(
      'Clear Default Recent Date Count',
      getBrushSelectionState,
      async () => {
        await userEvent.clear(recentDateCountInput)
        await userEvent.tab()
      },
      (before, after) => {
        const widthDeltaFromInitial = Math.abs(after.brushWidth - initialSelectionState.brushWidth)
        return after.brushWidth > before.brushWidth && widthDeltaFromInitial <= 2
      }
    )

    await performAndAssert(
      'Set to 50 dates - Brush Updates Dynamically',
      getBrushSelectionState,
      async () => {
        await userEvent.type(recentDateCountInput, '50')
        await userEvent.tab()
      },
      (before, after) => {
        return after.brushWidth < before.brushWidth && selectionMatchesRecentDateCount(after, 50)
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
