# Editor Interaction Testing Best Practices

Guidelines for building robust, observable, and performant interaction tests for CDC data visualization editors.

## Core Principles

**Test Visualization Output, Not Control State**: When you interact with a control (e.g., check a checkbox, change a dropdown), assert on the **specific visual change in the visualization** - not just that the control changed. For example, don't just verify a checkbox is checked; verify that a border appears, a class is added, or an element becomes visible.

**Test Specific Changes**: Assert on specific visual properties (classes added/removed, borders visible, elements present, style changes) - not generic "something changed".

**Use Testing Helpers**: Always use the shared testing helpers from `@cdc/core/helpers/testing`. Never replicate their functionality. The helpers handle timing, polling, and async behavior.

**One Accordion Per Test Story**: Create separate test stories for each accordion section. This keeps tests focused, organized, and easier to debug. Organize tests to match the visual appearance order of controls in the editor for better maintainability and user experience validation:

**Complete Coverage**: Test all visible controls within each accordion section, including conditionally revealed controls.

## Testing Helpers Available

The testing helpers handle timing, polling, and async behavior automatically:

- **`performAndAssert`**: Core pattern for testing control interactions. Use this for most tests.
- **Environment-aware delays**: 500ms in Storybook UI (for observation), 0ms in automated tests (for speed)
- **Built-in polling**: 5-second timeout with proper error messages
- **No manual waits needed**: Never use `setTimeout` or manual delays

**Basic usage pattern:**

```typescript
await performAndAssert(
  'Descriptive Test Name',
  () => getCurrentState(), // What to measure
  async () => await userEvent.click(element), // What to do
  (before, after) => before.specificProperty !== after.specificProperty // What changed
)
```

## Required Imports

Every editor test file must include these imports:

```typescript
import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import {
  performAndAssert,
  waitForPresence,
  waitForAbsence,
  waitForTextContent,
  waitForEditor,
  openAccordion,
  getDisplayValue,
  getTitleText,
  getVisualState,
  testBooleanControl,
  waitForOptionsToPopulate
} from '@cdc/core/helpers/testing'
```

## Testing Helpers Reference

| Function                   | Purpose                                   | Example                                                        |
| -------------------------- | ----------------------------------------- | -------------------------------------------------------------- |
| `performAndAssert`         | Core testing pattern for all interactions | `await performAndAssert('Border Toggle', getState, act, pred)` |
| `waitForEditor`            | Wait for editor to load                   | `await waitForEditor(canvas)`                                  |
| `openAccordion`            | Open accordion section                    | `await openAccordion(canvas, 'Visual')`                        |
| `waitForPresence`          | Wait for element to appear                | `await waitForPresence('.element', canvasElement)`             |
| `waitForAbsence`           | Wait for element to disappear             | `await waitForAbsence('.element', canvasElement)`              |
| `waitForOptionsToPopulate` | Wait for select options to load           | `await waitForOptionsToPopulate(selectEl, 3)`                  |
| `getVisualState`           | Capture element visual state              | `getVisualState(el, { checkClasses: ['accent'] })`             |
| `testBooleanControl`       | Test checkbox in both directions          | `await testBooleanControl(checkbox, getState, 'Border')`       |
| `getDisplayValue`          | Get primary data value from viz           | `const value = getDisplayValue(canvasElement)`                 |
| `getTitleText`             | Get title text from viz                   | `const title = getTitleText(canvas)`                           |

## Writing Tests: Step by Step

### 1. Basic Test Structure

```typescript
export const VisualSectionTests: Story = {
  args: { config: ExampleConfig, isEditor: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to load
    await waitForEditor(canvas)

    // Open the accordion section you're testing
    await openAccordion(canvas, 'Visual')

    // Test controls in visual top-to-bottom order
    await testControl1()
    await testControl2()
  }
}
```

### 2. Testing Visual Output Changes (Not Control State)

**Critical: Test what the user sees in the visualization, not just that the control changed.**

When you check a checkbox, change a dropdown, or type in an input, the test should verify **the effect on the visualization output**, not just that the control's value changed.

```typescript
// ✅ CORRECT: Tests the visualization output change
const getBorderState = () => {
  const viz = canvasElement.querySelector('.visualization')
  return {
    borderWidth: getComputedStyle(viz).borderWidth,
    hasBorderClass: viz.classList.contains('has-border')
  }
}

await performAndAssert(
  'Border Toggle',
  getBorderState,
  async () => await userEvent.click(borderCheckbox),
  (before, after) => before.borderWidth !== after.borderWidth && after.hasBorderClass
)

// ❌ WRONG: Only tests control state, not visualization
await performAndAssert(
  'Border Toggle',
  () => borderCheckbox.checked,
  async () => await userEvent.click(borderCheckbox),
  (before, after) => before !== after
)

// ❌ WRONG: Generic change detection
await performAndAssert(
  'Border Toggle',
  () => canvasElement.innerHTML,
  async () => await userEvent.click(borderCheckbox),
  (before, after) => before !== after // Too vague! What changed?
)
```

**Examples of what to test:**

- ✅ Border appears/disappears (check `borderWidth` style or `has-border` class)
- ✅ Element becomes visible (check `display` style or element presence in DOM)
- ✅ Color changes (check `backgroundColor` or `fill` attribute)
- ✅ Text appears in visualization (check text content of SVG/DOM element)
- ✅ SVG elements added/removed (check count or presence of shapes)
- ❌ Checkbox is checked (this is control state, not visualization output)
- ❌ Input value changed (this is control state, not visualization output)

### 3. Using `getVisualState` Helper

Use `getVisualState` to capture multiple visual properties at once:

```typescript
const getComponentState = () => {
  const element = canvasElement.querySelector('.visualization-container')
  return getVisualState(element, {
    checkClasses: ['accent-style', 'has-border'],
    checkStyles: ['borderWidth', 'backgroundColor'],
    checkAttributes: ['data-theme']
  })
}

await performAndAssert(
  'Accent Style Toggle',
  getComponentState,
  async () => await userEvent.click(accentCheckbox),
  (before, after) =>
    before.has_accent_style !== after.has_accent_style && before.style_borderWidth !== after.style_borderWidth
)
```

### 4. Testing Boolean Controls (Checkboxes)

Use `testBooleanControl` to automatically test both enable and disable. **Important**: Define a function that captures the visual output change, not the checkbox state.

```typescript
// ✅ CORRECT: Define what visual changes this checkbox causes in the visualization
const getFeatureState = () => {
  const element = canvasElement.querySelector('.feature-container')
  return getVisualState(element, {
    checkClasses: ['feature-enabled'],
    checkStyles: ['display', 'opacity']
  })
}

// The helper tests both checkbox directions AND verifies visualization changes
const featureCheckbox = canvasElement.querySelector('input[name="enable-feature"]') as HTMLInputElement
await testBooleanControl(featureCheckbox, getFeatureState, 'Feature Toggle')

// ❌ WRONG: Testing checkbox state instead of visualization
const getCheckboxState = () => featureCheckbox.checked // Don't do this!
```

### 5. Testing Text Input Changes

Test that the text appears in the visualization:

```typescript
const getTitleDisplay = () => canvasElement.querySelector('h1')?.textContent?.trim() || ''

const titleInput = canvas.getByDisplayValue(/current title/i)
await performAndAssert(
  'Title Update',
  getTitleDisplay,
  async () => {
    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, 'New Title Text')
  },
  (before, after) => after === 'New Title Text'
)
```

### 6. Testing Select/Dropdown Changes

Test the visual effect of the selection:

```typescript
const getChartType = () => {
  const svg = canvasElement.querySelector('svg')
  return {
    hasBars: !!svg?.querySelector('rect'),
    hasLines: !!svg?.querySelector('path[d*="L"]'),
    chartClass: svg?.getAttribute('class')
  }
}

const typeSelect = canvasElement.querySelector('select[name="chartType"]') as HTMLSelectElement
await performAndAssert(
  'Chart Type Change',
  getChartType,
  async () => await userEvent.selectOptions(typeSelect, 'line'),
  (before, after) => !before.hasLines && after.hasLines
)
```

## Test Organization

### Identifying Accordion Sections

**Before writing tests**, check what accordion sections exist in the package:

1. Open `packages/[package-name]/src/components/EditorPanel.tsx`
2. Find `<AccordionItemButton>` components
3. Only test sections that exist

| Package      | Common Sections                    |
| ------------ | ---------------------------------- |
| data-table   | "Columns", "Data Table", "Filters" |
| waffle-chart | "General", "Data", "Visual"        |
| data-bite    | "general", "Data", "Visual"        |
| chart        | Varies by chart type               |

### Test Story Structure

- One accordion section per test story
- Test controls in visual top-to-bottom order
- Use clear section headers for organization

```typescript
// ============================================================================
// TEST: Border Toggle
// Verifies: Border width changes and 'has-border' class is added
// ============================================================================

// ============================================================================
// TEST: Color Palette Selection
// Verifies: Chart elements use new color scheme
// ============================================================================
```

## Common Patterns by Control Type

### Data-Related Controls

- Column selection, aggregation, filters
- **Test**: Data value changes in visualization

### Visual/Styling Controls

- Colors, borders, fonts, shapes
- **Test**: Specific style properties change (borderWidth, color, fontSize)

### Visibility Controls

- Show/hide toggles, display options
- **Test**: Elements present/absent, display property, visibility

### Configuration Controls

- Chart type, layout options
- **Test**: Structural changes (SVG elements, DOM structure)

## Anti-Patterns to Avoid

| ❌ Don't Do This                             | ✅ Do This Instead                                                 |
| -------------------------------------------- | ------------------------------------------------------------------ |
| `expect(checkbox.checked).toBe(true)`        | Test visualization: border appears, element visible, class added   |
| `expect(input.value).toBe('text')`           | Test visualization: text appears in chart, label updates           |
| `(before, after) => before !== after`        | Specific property: `(before, after) => before.borderWidth !== ...` |
| `await new Promise(r => setTimeout(r, 500))` | Use `performAndAssert` which handles timing                        |
| Custom polling/waiting functions             | Use provided helpers from `@cdc/core/helpers/testing`              |
| `if (element) { await click(element) }`      | `await click(canvas.getByRole(...))` - fail fast                   |
| Console.log debugging in final tests         | Remove before committing                                           |

## Creating New Tests: Quick Checklist

1. ✅ Import helpers from `@cdc/core/helpers/testing`
2. ✅ Use existing config: `import ExampleConfig from '../../examples/example-config.json'`
3. ✅ Set editor mode: `args: { config: ExampleConfig, isEditor: true }`
4. ✅ Check EditorPanel.tsx for actual accordion sections
5. ✅ Create one test story per accordion section
6. ✅ Test visualization output, not control state (e.g., border appears, not checkbox checked)
7. ✅ Test specific changes (classes, styles, element presence) not generic "something changed"
8. ✅ Use `performAndAssert` for interactions (handles timing automatically)
9. ✅ Never use manual `setTimeout` or delays
10. ✅ Never replicate helper functionality

## Verifying Tests

Before considering tests complete:

1. **View in Storybook**: Navigate to your story and watch it run
2. **Check Console**: Verify no JavaScript errors
3. **Verify Interactions**: Confirm controls are actually clicked/changed
4. **Verify Visual Changes**: Confirm visualization updates as expected
5. **Run Test Suite**: Execute `yarn test-storybook`

## Performance Standards

- **Individual Control**: < 5 seconds per interaction
- **No Manual Waits**: All timing handled by helpers
- **Fast in CI**: Automated tests run with 0ms delays
- **Visual in UI**: Storybook shows 500ms delays for observation

## Summary

Test the **visualization output**, not control state. When you interact with a control, verify what changed in the visualization (borders, classes, element presence, colors, text content). Use the shared testing helpers from `@cdc/core/helpers/testing` - they handle timing, polling, and async behavior. Organize tests with one accordion section per test story for clarity and maintainability.
