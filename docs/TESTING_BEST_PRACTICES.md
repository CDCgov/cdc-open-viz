# Editor Interaction Testing Best Practices

Guidelines for building robust, observable, and performant interaction tests for CDC data visualization editors.

## Core Principles

**Test Like a User**: Interact through UI controls and assert on visualization output, not just control state.

**Complete Coverage**: Test all visible controls and any conditionally revealed controls.

**Deterministic Execution**: Use polling with minimum animation delays instead of arbitrary waits.

**Change Detection**: Assert that visualization output _changes_ rather than matching exact predetermined values.

**Logical Organization**:

- One accordion per test story
- **Test only accordion sections that exist in the specific package** - different packages have different sections (e.g., data-table has "Columns", "Data Table", "Filters" while waffle-chart has "General", "Data", "Visual")
- Interact with controls in visual top-to-bottom order
- Centralize shared helpers to avoid duplication

## Recent Updates to Testing Helpers

The testing helpers have been significantly improved with the following key changes:

### 1. Simplified Function Signatures

- **Removed required parameters**: Functions like `performAndAssert`, `waitForEditor`, `openAccordion`, `waitForTextContent`, and `testBooleanControl` no longer require `expect` or `userEvent` parameters
- **Cleaner API**: Reduced boilerplate and made functions easier to use

### 2. Enhanced Performance & Environment Detection

- **Adaptive delays**: Changed from 250ms to 500ms in Storybook UI for better visual feedback, while maintaining 0ms in automated tests
- **Modern polling**: Replaced custom `pollUntil` with `@testing-library/react`'s `waitFor` for more reliable async handling

### 3. Better Error Reporting

- **Improved stack traces**: `performAndAssert` now preserves original call site in error messages instead of showing generic helper locations
- **Enhanced error context**: Better before/after state comparison in error messages

### 4. New Helper Functions

- **`waitForOptionsToPopulate`**: Wait for select elements to be populated with options
- **`getVisualState`**: Flexible helper for capturing element visual state (classes, styles, attributes)
- **`testBooleanControl`**: Automated testing of checkbox controls in both directions

## Required Imports and Setup

Every editor test file must include these imports:

**Note**: The testing helpers now include automatic environment detection and use optimized animation delays (500ms in Storybook UI, 0ms in automated tests).

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

**Critical Parameter Requirements:**

- Most shared helpers no longer require framework-specific parameters like `expect` and `userEvent`
- The helpers have been simplified to reduce boilerplate code
- Import helpers from `@cdc/core/helpers/testing` as shown in examples below

## Creating New Editor Tests - Quick Start

**Before writing new editor tests, always:**

1. **Follow existing patterns**: Check how other packages structure their editor tests (e.g., `waffle-chart`, `data-bite`)
2. **Use existing configs**: Import the package's example config directly: `import ExampleConfig from '../../examples/example-config.json'`
3. **Set editor mode**: Use `config: ExampleConfig, isEditor: true` - no custom configs or static file setup needed
4. **Check accordion sections**: Examine the package's `EditorPanel.tsx` to see which sections actually exist

**❌ Common Mistakes to Avoid:**

- Creating custom test configurations instead of using existing examples
- Using `configUrl` instead of direct JSON imports
- Copying configs to `.storybook/assets` (not needed)
- Writing tests for accordion sections that don't exist in the target package

### Verifying Tests Before Completion

Always verify your tests work by:

1. **Navigate to your story in Storybook**: Go to the specific story you created (e.g., `Example/Data Table/Editor Tests/Columns Section Tests`)

2. **Check for JavaScript errors**: Open browser DevTools and ensure no errors appear in the console

3. **Verify interactions**: Click through each accordion section and confirm:

   - Accordions open properly
   - Form controls are visible and interactive
   - Tests are actually clicking/typing into the correct elements
   - Visual changes occur when expected (table updates, new elements appear, etc.)

4. **Test story rendering**: Ensure the story renders completely without hanging or timeout errors

5. **Run test-storybook**: Use `yarn test-storybook` to verify programmatic test execution

If tests fail in Storybook but work in isolation, investigate:

- Whether elements are properly loaded before interaction attempts
- If selectors match the actual DOM structure
- Whether timing issues require additional wait conditions

## Identifying Package Accordion Sections

**Critical Step**: Before writing tests for any package, identify which accordion sections actually exist by examining the package's EditorPanel component.

### How to Find Accordion Sections

1. **Locate the EditorPanel**: `packages/[package-name]/src/components/EditorPanel.tsx`
2. **Look for AccordionItemButton components** - the text content is the section name
3. **Only write tests for sections that exist** - do not copy section names from other packages

### Common Section Names by Package Type

| Package      | Sections                           |
| ------------ | ---------------------------------- |
| data-table   | "Columns", "Data Table", "Filters" |
| waffle-chart | "General", "Data", "Visual"        |
| data-bite    | "general", "Data", "Visual"        |
| chart        | Varies by chart type               |

**Example: Finding data-table sections**:

```tsx
// In packages/data-table/src/components/EditorPanel.tsx
<AccordionItemButton>Columns</AccordionItemButton>      // ← Section: "Columns"
<AccordionItemButton>Data Table</AccordionItemButton>   // ← Section: "Data Table"
<AccordionItemButton>Filters</AccordionItemButton>      // ← Section: "Filters"
```

## Required Test Patterns

### 1. Polling Strategy

Use the built-in polling utilities in `performAndAssert` and other helpers:

```typescript
// Polling is now built into performAndAssert using @testing-library/react's waitFor
await performAndAssert(
  'Control Action',
  () => getCurrentState(),
  async () => await userEvent.click(element),
  (before, after) => before !== after
)
```

**Key Features:**

- Environment-aware animation delays (500ms in Storybook UI, 0ms in automated tests)
- Built-in polling with @testing-library/react's `waitFor` (5 second timeout)
- Enhanced error messages with before/after state comparison
- Improved stack trace preservation for debugging
- Automatic minimum delay handling for visual perception

### 2. Assertion Strategy

Always assert on **visualization changes**, not just control state:

```typescript
const performAndAssert = async (
  label: string,
  read: () => T,
  act: () => Promise<void>,
  predicate: (before: T, after: T) => boolean,
  extraAssert?: (after: T) => void
)
```

**What to Assert:**

- ✅ Primary data value text changes
- ✅ SVG elements added/removed/repositioned
- ✅ CSS classes toggled
- ✅ Formatted text structure (prefix/suffix)
- ❌ Input `value` attributes alone
- ❌ Checkbox `checked` state alone

### 2a. Boolean/Checkbox Testing Strategy

For boolean controls (checkboxes, toggles), **use the new `testBooleanControl` helper** or test both states manually:

**✅ Recommended Approach - Using testBooleanControl Helper:**

```typescript
// Define the specific visual changes this checkbox should control
const getFeatureVisualState = () => {
  const element = canvasElement.querySelector('.visualization-container')
  return getVisualState(element, {
    checkClasses: ['feature-enabled'],
    checkStyles: ['display', 'opacity']
  })
}

// Test both directions automatically
const featureCheckbox = canvasElement.querySelector('input[name="enable-feature"]') as HTMLInputElement
await testBooleanControl(featureCheckbox, getFeatureVisualState, 'Feature Toggle')
```

**✅ Manual Approach - Using performAndAssert:**

```typescript
// Define exactly what this checkbox should change
const getFeatureVisualState = () => {
  const element = canvasElement.querySelector('.visualization-container')
  return getVisualState(element, {
    checkClasses: ['feature-enabled'],
    checkStyles: ['display', 'opacity']
  })
}

// Test feature checkbox specifically
const featureCheckbox = canvasElement.querySelector('input[name="enable-feature"]')
await performAndAssert(
  'Feature Toggle On',
  getFeatureVisualState,
  async () => await userEvent.click(featureCheckbox),
  (before, after) =>
    before.has_feature_enabled !== after.has_feature_enabled || before.style_display !== after.style_display
)

await performAndAssert(
  'Feature Toggle Off',
  getFeatureVisualState,
  async () => await userEvent.click(featureCheckbox),
  (before, after) =>
    before.has_feature_enabled !== after.has_feature_enabled || before.style_display !== after.style_display
)
```

**Why Focus on Visual Changes:**

- ✅ **Tests the actual user-facing functionality, not just UI state**
- ✅ **Catches bugs where checkbox works but feature doesn't**
- ✅ **Verifies feature works in both enabled and disabled states**
- ✅ **Ensures proper cleanup when feature is disabled**
- ✅ **Tests what users actually see and experience**
- ✅ **Provides meaningful feedback about feature behavior**

**Example Implementation:**

```typescript
// ✅ Clean visual testing using new helper
const getThemeVisualState = () => {
  const element = canvasElement.querySelector('.visualization-container')
  return getVisualState(element, {
    checkClasses: ['dark-theme'],
    checkStyles: ['backgroundColor', 'color']
  })
}

const themeCheckbox = canvasElement.querySelector('input[name="dark-theme"]') as HTMLInputElement
await testBooleanControl(themeCheckbox, getThemeVisualState, 'Dark Theme Toggle')

// OR manual approach if you need custom logic:
await performAndAssert(
  'Dark Theme Enable',
  getThemeVisualState,
  async () => await userEvent.click(themeCheckbox),
  (before, after) => before.has_dark_theme !== after.has_dark_theme && after.has_dark_theme === true
)
```

**Key Points:**

- ✅ Tests **both states** (on and off)
- ✅ Validates **specific visual change** (accent class and border color)
- ✅ Uses `performAndAssert` with all required parameters
- ✅ Clean code without console logging

### 3. Fallback Patterns

Handle cases where controls might not trigger changes:

- **Already-selected dropdown**: Switch to different option first, then target
- **Debounced inputs**: Trigger blur/Enter to flush updates
- **Identical filter results**: Choose narrower category to force difference
- **Formatting on whole numbers**: Pair with upstream change to create non-integer baseline

## General Testing Guidelines for All Accordion Sections

**Important**: Different packages have different accordion sections. Only write tests for sections that actually exist in the package you're testing.

**Before writing tests, examine the package's EditorPanel component to identify the actual accordion sections available.**

### Common Testing Patterns by Control Type

Regardless of which accordion section they appear in, test controls based on their type and expected behavior:

**Data-related controls:**

- Column selection, aggregation functions, conditional logic, denominator settings
- Test pattern: Capture display value → interact → assert value changes
- Apply fallback if no change detected (e.g., switch to different option first)

**Configuration controls:**

- Title/description visibility, chart type switches, layout toggles
- Test pattern: Capture DOM state → interact → assert structural changes

**Visual/styling controls:**

- Color palettes, border settings, font sizes, shape changes
- Test pattern: Capture visual attributes → interact → assert style changes

**Filter controls:**

- Data filtering, search, category selection
- Test pattern: Capture filtered results → interact → assert result set changes

## Code Organization

### Helper Function Structure

```typescript
// ✅ Import shared helpers
import {
  performAndAssert,
  waitForEditor,
  openAccordion,
  getDisplayValue,
  getTitleText,
  getVisualState,
  testBooleanControl
} from '@cdc/core/helpers/testing'
import { within, userEvent, expect } from 'storybook/test'

// ✅ Test setup pattern
export const SectionTests: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas) // ✅ Simplified
    await openAccordion(canvas, 'General') // ✅ Simplified

    // Section-specific helpers (near usage)
    const getDisplayValue = () => element.textContent?.trim()
    const getSvgWidth = () => parseInt(svg.getAttribute('width'))

    // Use shared helpers with current signatures
    await performAndAssert(
      'Test Label',
      getDisplayValue,
      async () => {
        /* action */
      },
      (before, after) => after !== before
    )
  }
}
```

### Test Comments

Use only prominent section headers:

```typescript
// ============================================================================
// TEST 2: Title Update
// Expectation: Header text updates to new string.
// ============================================================================
```

## Performance Standards

- **Individual Control**: < 5 seconds per interaction (using @testing-library/react waitFor timeout)
- **Section Runtime**: Optimized with environment detection (fast in automated tests, visual in Storybook)
- **No Fixed Waits**: Use `performAndAssert` and other helpers instead of manual timeouts
- **Visual Feedback**: 500ms delays automatically applied in Storybook UI for better UX## Running Tests

```bash
npx vitest run --project=storybook packages/[package]/src/_stories/*.Editor.stories.tsx
```

## Anti-Patterns to Avoid

❌ **Hard-coded expected values**: `expect(value).toBe('42.5%')`
✅ **Change detection**: `expect(afterValue).not.toBe(beforeValue)`

❌ **Control-only assertions**: `expect(checkbox.checked).toBe(true)`
✅ **Output assertions**: `expect(chartElement.classList.contains('hidden')).toBe(false)`

❌ **Fixed sleeps**: `await new Promise(r => setTimeout(r, 500))`
✅ **Built-in polling**: `await performAndAssert(label, read, act, predicate)`

❌ **Multiple changes before assert**: Change 3 controls then check output
✅ **Isolated changes**: Assert after each individual control interaction

❌ **Defensive if statements**: `if (element) { await userEvent.click(element) }`
✅ **Assertive element access**: `await userEvent.click(canvas.getByRole('button', { name: /submit/i }))`

**Element Access Strategy**: Use assertive queries (`getBy*`) instead of optional queries (`queryBy*`) when elements are expected to exist. Let tests fail fast when required UI elements are missing rather than silently skipping interactions. This reveals actual problems in the component or test setup.

```typescript
// ❌ Defensive - hides missing element issues
const submitButton = canvas.queryByRole('button', { name: /submit/i })
if (submitButton) {
  await userEvent.click(submitButton)
}

// ✅ Assertive - fails fast if element missing
const submitButton = canvas.getByRole('button', { name: /submit/i })
await userEvent.click(submitButton)
```

## Summary

Maximize reliability by asserting _visualization output change_ for every control using polling with human-visible minimum delays. This approach ensures tests are fast, deterministic, and maintainable while remaining resilient to data changes and formatting adjustments.

## New Visual State Testing Helpers

### getVisualState Helper

The `getVisualState` helper provides a flexible way to capture visual state of elements for comprehensive testing:

```typescript
const getVisualState = (
  element: HTMLElement | null,
  options: {
    checkClasses?: string[] // CSS classes to check for presence
    checkStyles?: string[] // CSS properties to read from computed styles
    checkAttributes?: string[] // HTML attributes to read
    customChecks?: ((el: HTMLElement) => Record<string, any>)[] // Custom visual checks
  } = {}
) => Record<string, any>
```

**Example Usage:**

```typescript
const getComponentVisualState = () => {
  const element = canvasElement.querySelector('.visualization-container')
  return getVisualState(element, {
    checkClasses: ['has-border', 'accent-style', 'dark-theme'],
    checkStyles: ['borderWidth', 'backgroundColor', 'color'],
    checkAttributes: ['data-theme', 'data-style'],
    customChecks: [
      el => ({ isVisible: el.offsetParent !== null }),
      el => ({ hasContent: el.textContent?.trim().length > 0 })
    ]
  })
}
```

### testBooleanControl Helper

The `testBooleanControl` helper automatically tests both enable/disable states of checkbox controls:

```typescript
const testBooleanControl = async (checkbox: HTMLInputElement, getVisualState: () => any, testName: string) =>
  Promise<void>
```

**Example Usage:**

```typescript
const toggleCheckbox = canvasElement.querySelector('input[name="feature-toggle"]') as HTMLInputElement
const getFeatureState = () =>
  getVisualState(canvasElement.querySelector('.visualization-container'), {
    checkClasses: ['feature-enabled'],
    checkStyles: ['display', 'opacity']
  })

await testBooleanControl(toggleCheckbox, getFeatureState, 'Feature Toggle')
```

**Key Features:**

- ✅ Tests both enable and disable directions automatically
- ✅ Verifies both checkbox state AND visual changes
- ✅ Provides warning if no visual change detected (but doesn't fail)
- ✅ Ensures proper state restoration

### waitForOptionsToPopulate Helper

The `waitForOptionsToPopulate` helper waits for select elements to be populated with options:

```typescript
const waitForOptionsToPopulate = async (selectElement: HTMLSelectElement, minCount: number = 2) => Promise<void>
```

**Example Usage:**

```typescript
const columnSelect = canvasElement.querySelector('select[name="column"]') as HTMLSelectElement
await waitForOptionsToPopulate(columnSelect, 3) // Wait for at least 3 options
```

## Advanced Patterns and Component-Specific Learnings

### Visual Order Testing

Organize tests to match the visual appearance order in the editor for better maintainability and user experience validation:

```typescript
// ✅ Tests organized by visual appearance order in section:
// 1. Type/Style selector (top dropdown)
// 2. Title field (second field)
// 3. Show Title toggle (next to title)
// 4. Description/Body text (third field)
// 5. Additional options (bottom section)

export const GeneralSectionTests: Story = {
  play: async ({ canvasElement }) => {
    // Follow visual order for intuitive test flow
    const typeSelect = canvasElement.querySelector('select[name="visualizationType"]')
    const titleInput = canvas.getByDisplayValue(/visualization title/i)
    const showTitleCheckbox = canvasElement.querySelector('input[name="showTitle"]')
    const descriptionTextarea = canvasElement.querySelector('textarea[name="description"]')
    const additionalOptionsSection = canvasElement.querySelector('.additional-options')
  }
}
```

### Form Element Naming Patterns

Common patterns for form control selectors across components:

- **Simple fields**: `input[name="fieldName"]` (e.g., `showTitle`, `enableFeature`, `darkMode`)
- **Nested configuration fields**: `input[name="section-subsection-fieldName"]`
- **Data format fields**: `input[name="dataFormat-null-fieldName"]` (e.g., `dataFormat-null-prefix`, `dataFormat-null-suffix`)
- **Boolean toggles**: `input[type="checkbox"][name="featureName"]`

### Enhanced Visual Feedback for Storybook

Visual delays are now handled automatically by the testing helpers:

```typescript
// ✅ Automatic visual feedback - no manual delays needed
await performAndAssert(
  'Control Update',
  () => getCurrentState(),
  async () => {
    await userEvent.type(input, 'text', { delay: 100 })
    await userEvent.click(button)
  },
  (before, after) => before !== after
)

// ✅ Progressive interaction demonstration
const currentValue = select.value
const targetValue = currentValue === 'graphic' ? 'text' : 'graphic'

await performAndAssert(
  'Style Change Forward',
  () => getVisualizationState(),
  async () => await userEvent.selectOptions(select, targetValue),
  (before, after) => before !== after
)

await performAndAssert(
  'Style Change Back',
  () => getVisualizationState(),
  async () => await userEvent.selectOptions(select, currentValue),
  (before, after) => before !== after
)
```

### Comprehensive Error Handling

```typescript
// ✅ Clean error handling with assertive element access
const element = canvasElement.querySelector('selector') as HTMLElementType
expect(element).toBeTruthy() // Fail fast if element missing

await performAndAssert(
  'Interaction Name',
  getState,
  async () => {
    await userEvent.click(element)
  },
  (before, after) => after !== before
)
```

### Debug Form Discovery

```typescript
// ✅ Debug helper to discover all form controls (for development only)
const debugFormControls = (canvasElement: HTMLElement) => {
  const controls = canvasElement.querySelectorAll('input, select, textarea')
  const controlInfo = Array.from(controls).map((control, index) => {
    const element = control as HTMLInputElement
    return `${index}: ${element.tagName} name="${element.name}" type="${element.type}"`
  })

  // Use expect.fail() to see debug info in test output
  expect.fail(`Form controls found: ${controlInfo.join(', ')}`)
}
```

### Storybook Test Execution Notes

- Tests run automatically when navigating to test stories
- Enhanced visual delays make interactions observable
- Error boundaries prevent test suite crashes
- Form debugging helps identify correct selectors
- Visual order testing improves maintainability and user experience validation

## AI Assistant Guidelines

### Function Parameter Patterns

**When using shared testing helpers, use these simplified signatures:**

| Function                   | Required Parameters              | Example                                                  |
| -------------------------- | -------------------------------- | -------------------------------------------------------- |
| `performAndAssert`         | `label, read, act, predicate`    | `await performAndAssert('Test', read, act, pred)`        |
| `waitForEditor`            | `canvas`                         | `await waitForEditor(canvas)`                            |
| `openAccordion`            | `canvas, sectionName`            | `await openAccordion(canvas, 'Data')`                    |
| `waitForTextContent`       | `element, text`                  | `await waitForTextContent(el, 'text')`                   |
| `waitForPresence`          | `selector, canvasElement`        | `await waitForPresence('.element', canvasElement)`       |
| `waitForAbsence`           | `selector, canvasElement`        | `await waitForAbsence('.element', canvasElement)`        |
| `waitForOptionsToPopulate` | `selectElement, minCount?`       | `await waitForOptionsToPopulate(selectEl, 2)`            |
| `getVisualState`           | `element, options?`              | `getVisualState(el, { checkClasses: ['accent'] })`       |
| `testBooleanControl`       | `checkbox, getVisualState, name` | `await testBooleanControl(checkbox, getState, 'Border')` |

### Common Parameter Mistakes to Avoid

❌ **Using old parameter patterns:**

```typescript
await performAndAssert(label, read, act, pred, expect) // Old signature
await waitForEditor(canvas, expect) // Old signature
await openAccordion(canvas, 'Data', userEvent) // Old signature
```

✅ **Correct current parameter usage:**

```typescript
await performAndAssert(label, read, act, pred) // ✅ Current signature
await waitForEditor(canvas) // ✅ Simplified
await openAccordion(canvas, 'Data') // ✅ Simplified
```

❌ **Incorrect parameter order:**

```typescript
await waitForPresence(canvasElement, '.selector') // Wrong order
```

✅ **Correct parameter order:**

```typescript
await waitForPresence('.selector', canvasElement) // ✅ Correct order
```

### Setup Pattern Template

```typescript
export const SectionTests: Story = {
  args: { configUrl: '/path/to/config.json', isEditor: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // ✅ Simplified setup
    await waitForEditor(canvas)
    await openAccordion(canvas, 'SectionName')

    // ✅ Test pattern with current signature
    await performAndAssert(
      'Feature Test',
      () => getState(),
      async () => {
        /* action */
      },
      (before, after) => before !== after
    )
  }
}
```

## Dynamic UI Configuration Testing Patterns

When testing complex, dynamic configuration interfaces (like column configurations, filter setups, etc.), follow these proven patterns to avoid common pitfalls:

### 1. UI Workflow Discovery Pattern

**Don't assume the obvious workflow** - what appears to be a "select then configure" pattern might actually be "create then select".

❌ **Wrong approach:**

```typescript
// Assuming configuration exists and just needs column selection
const columnSelect = await findColumnSelector()
await userEvent.selectOptions(columnSelect, 'myColumn')
// Configuration fields don't appear because we skipped the creation step
```

✅ **Correct approach:**

```typescript
// Trigger configuration creation first, then select
const addConfigButton = await findButton('Add Configuration')
await userEvent.click(addConfigButton)
await new Promise(resolve => setTimeout(resolve, 500))

// Now find and populate the configuration fields that were created
const configDropdown = await findConfigurationDropdown()
await userEvent.selectOptions(configDropdown, targetColumn)
```

### 2. Dynamic Form Field Discovery Strategy

Configuration fields often don't exist until triggered by user actions. Use this pattern:

```typescript
// Step 1: Trigger the creation action
await userEvent.click(triggerButton)
await new Promise(resolve => setTimeout(resolve, 1000))

// Step 2: Debug what was actually created
const allInputs = canvasElement.querySelectorAll('input, select')
console.log('Total form controls after trigger:', allInputs.length)

Array.from(allInputs).forEach((control, index) => {
  const label = control.closest('label')?.textContent?.trim() || 'No label'
  const type = control.tagName.toLowerCase() === 'select' ? 'select' : control.type
  console.log(`Control ${index}: ${type} - "${label}"`)
})

// Step 3: Find fields by label content, not by assumed structure
const labelInput = Array.from(allInputs).find(control => {
  const label = control.closest('label')?.textContent?.trim() || ''
  return label.includes('Label') && control.type === 'text'
})
```

### 3. Robust Element Selection Anti-Patterns

❌ **Avoid these common mistakes:**

```typescript
// Don't hardcode specific data values
const columnSelect = find(select => select.options.includes('specific_column_name'))

// Don't assume dropdown size indicates purpose
const bigDropdown = selects.find(s => s.options.length > 50) // Could be geography, not columns

// Don't rely on DOM position without validation
const thirdSelect = selects[2] // Fragile - order can change
```

✅ **Use content-based selection:**

```typescript
// Select based on actual option content analysis
const dataColumnSelect = Array.from(selects).find(select => {
  const options = Array.from(select.options).map(opt => opt.value)
  // Look for characteristics of data columns vs filter values
  return (
    options.some(opt => opt.includes('admissions') || opt.includes('rate') || opt.includes('count')) &&
    options.length < 20
  ) // Data columns vs geographic options
})

// Prioritize suitable test data dynamically
const numericColumn =
  options.find(opt => opt.includes('100k')) || options.find(opt => opt.includes('admissions')) || options[0] // fallback
```

### 4. Configuration Testing with Data Validation

When testing configuration options, verify changes in the actual output:

```typescript
// Test configuration with output verification
if (prefixInput) {
  const testPrefix = 'VALUE: '
  await userEvent.clear(prefixInput)
  await userEvent.type(prefixInput, testPrefix)

  // Wait and verify the change appears in table data
  await new Promise(resolve => setTimeout(resolve, 500))
  const cells = canvasElement.querySelectorAll('.data-table td')
  const prefixedCell = Array.from(cells).find(cell => cell.textContent?.includes(testPrefix))

  console.log('Prefix appears in table data:', !!prefixedCell)
  console.log(
    'Sample cell values:',
    Array.from(cells)
      .slice(0, 5)
      .map(c => c.textContent?.trim())
  )
}
```

### 5. Debugging-First Development Pattern

Always include comprehensive debugging to understand what's actually happening:

```typescript
// Debug actual state at each step
console.log('🎯 Step 1: Current DOM state')
const allSelects = canvasElement.querySelectorAll('select')
Array.from(allSelects).forEach((select, index) => {
  const options = Array.from(select.options)
    .map(opt => opt.value)
    .filter(v => v)
  console.log(`Select ${index} values:`, options.slice(0, 10))
})

// Show sample data to verify changes
const sampleValues = Array.from(cells)
  .map(cell => cell.textContent?.trim())
  .filter(text => text && text.length > 0)
  .slice(0, 10)
console.log('Sample table data:', sampleValues)
```

### 6. Data-Appropriate Testing Strategy

Choose test data that will produce visible, verifiable results:

- **Comma testing**: Prioritize columns with 4+ digit numbers
- **Rounding testing**: Use columns with decimal values
- **Prefix/suffix testing**: Use distinctive, searchable text
- **Visibility testing**: Count elements before/after toggle

```typescript
// Find columns suitable for comma testing
const numericValues = Array.from(cells)
  .map(cell => cell.textContent?.trim())
  .filter(text => /\d{4,}/.test(text)) // 4+ digits

console.log('4+ digit numbers found:', numericValues.slice(0, 5))
console.log('Suitable for comma testing:', numericValues.length > 0)
```

These patterns help create robust tests that work across different data configurations and UI states, reducing debugging cycles and improving test reliability.
