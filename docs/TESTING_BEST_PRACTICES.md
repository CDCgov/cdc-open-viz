# Editor Interaction Testing Best Practices

Guidelines for building robust, observable, and performant interaction tests for CDC data visualization editors.

## Core Principles

**Test Like a User**: Interact through UI controls and assert on visualization output, not just control state.

**Complete Coverage**: Test all visible controls and any conditionally revealed controls.

**Deterministic Execution**: Use polling with minimum animation delays instead of arbitrary waits.

**Change Detection**: Assert that visualization output _changes_ rather than matching exact predetermined values.

**Logical Organization**:

- One accordion per test story
- Interact with controls in visual top-to-bottom order
- Centralize shared helpers to avoid duplication

## Required Test Patterns

### 1. Polling Strategy

Replace fixed timeouts with polling utilities:

```typescript
const pollUntil = async <T>(
  read: () => T,
  predicate: (curr: T, elapsed: number) => boolean,
  timeout = 5000,
  interval = 80
): Promise<T>
```

**Key Requirements:**

- Minimum 250ms elapsed time before resolving (ensures visual transitions are perceivable)
- Short polling intervals (60-100ms) for responsiveness
- Clear timeout errors with diagnostic context
- Maximum 2-3 second timeouts per control interaction

### 2. Assertion Strategy

Always assert on **visualization changes**, not just control state:

```typescript
const performAndAssert = async (
  label: string,
  read: () => T,
  act: () => Promise<void>,
  predicate: (before: T, after: T) => boolean
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

For boolean controls (checkboxes, toggles), **always verify the intended visual changes occur** for both states to ensure the feature works properly:

```typescript
// ✅ Visual-first testing: Focus on what the user sees, not just checkbox state
const getVisualState = () => {
  // Define what visual changes this control should produce
  const element = canvasElement.querySelector('.target-element')
  return {
    // Specific CSS classes that should be added/removed
    hasTargetClass: element.classList.contains('component--has-accent'), // example for accent
    borderStyle: getComputedStyle(element).borderWidth, // example for border toggle
    backgroundColor: getComputedStyle(element).backgroundColor, // example for background
    isVisible: element.offsetParent !== null // example for visibility toggle
    // Focus on the ACTUAL visual properties this control should affect
  }
}

const initialVisualState = getVisualState()
console.log(`${controlName} - Initial visual state: ${JSON.stringify(initialVisualState)}`)

// First toggle: Enable the feature
await userEvent.click(checkbox)
await new Promise(resolve => setTimeout(resolve, 100))
const enabledVisualState = getVisualState()
console.log(`${controlName} - After enabling: ${JSON.stringify(enabledVisualState)}`)

// ✅ PRIMARY TEST: Verify the feature produces its intended visual effect
expect(enabledVisualState).not.toEqual(initialVisualState)
// Add specific assertions for what should change:
// expect(enabledVisualState.hasTargetClass).toBe(true) // for accent style
// expect(enabledVisualState.borderStyle).not.toBe('0px') // for border toggle

// Second toggle: Disable the feature
await userEvent.click(checkbox)
await new Promise(resolve => setTimeout(resolve, 100))
const disabledVisualState = getVisualState()
console.log(`${controlName} - After disabling: ${JSON.stringify(disabledVisualState)}`)

// ✅ RESTORATION TEST: Verify the visual state returns to original
expect(disabledVisualState).toEqual(initialVisualState)
```

**Why Focus on Visual Changes:**

- ✅ **Tests the actual user-facing functionality, not just UI state**
- ✅ **Catches bugs where checkbox works but feature doesn't**
- ✅ **Verifies feature works in both enabled and disabled states**
- ✅ **Ensures proper cleanup when feature is disabled**
- ✅ **Tests what users actually see and experience**
- ✅ **Provides meaningful feedback about feature behavior**

**Real Example from DataBite Editor Tests:**

```typescript
// ✅ Visual-first testing for accent style feature
const getAccentVisualState = () => {
  const element = canvasElement.querySelector('.cove-component__content')
  return {
    classes: Array.from(element.classList).sort().join(' '),
    hasAccentClass: element.classList.contains('component--has-accent'), // The key visual change
    computedStyles: getComputedStyle(element).borderColor // Additional visual properties
  }
}

const accentCheckbox = canvasElement.querySelector('input[name="accent"]')

// Test the accent feature's visual impact
const initialVisualState = getAccentVisualState()
console.log(`Accent - Initial visual: ${JSON.stringify(initialVisualState)}`)

// Enable accent style
await userEvent.click(accentCheckbox)
await new Promise(resolve => setTimeout(resolve, 100))
const enabledVisualState = getAccentVisualState()
console.log(`Accent - Enabled visual: ${JSON.stringify(enabledVisualState)}`)

// ✅ PRIMARY TEST: Verify the accent feature actually changes the visualization
expect(enabledVisualState.hasAccentClass).toBe(true) // Specific assertion for accent
expect(enabledVisualState).not.toEqual(initialVisualState) // General change detection

// Disable accent style
await userEvent.click(accentCheckbox)
await new Promise(resolve => setTimeout(resolve, 100))
const disabledVisualState = getAccentVisualState()

// ✅ RESTORATION TEST: Verify visual state returns to original
expect(disabledVisualState).toEqual(initialVisualState)
expect(disabledVisualState.hasAccentClass).toBe(false)
```

**Expected Output:**

```
Accent - Initial visual: {"classes":"cove-component__content","hasAccentClass":false,"computedStyles":"rgb(199, 199, 199)"}
Accent - Enabled visual: {"classes":"cove-component__content component--has-accent","hasAccentClass":true,"computedStyles":"rgb(0, 94, 170)"}
✅ Accent feature produces expected visual changes: accent styling applied successfully
```

### 3. Fallback Patterns

Handle cases where controls might not trigger changes:

- **Already-selected dropdown**: Switch to different option first, then target
- **Debounced inputs**: Trigger blur/Enter to flush updates
- **Identical filter results**: Choose narrower category to force difference
- **Formatting on whole numbers**: Pair with upstream change to create non-integer baseline

## Section-Specific Guidelines

### Data Accordion

Every control must change the displayed primary data value. Test pattern:

1. Capture current display value
2. Apply control interaction
3. Poll until display value differs
4. Apply fallback if no change detected

**Key Controls:** Column selection, aggregation functions, conditional logic, denominator settings, formatting (prefix/suffix/rounding), filters

### General Accordion

Test configuration controls affecting overall component structure:

- Title/description visibility → header DOM changes
- Chart type switches → container class/SVG changes
- Layout toggles → orientation class changes

### Visual Accordion

Assert on rendered style changes:

- Color palette → SVG fill attributes
- Border settings → CSS class toggles
- Font sizes → inline style changes
- Shape changes → SVG primitive type switches

## Code Organization

### Helper Function Structure

```typescript
// Shared constants
const MIN_ANIMATION_DELAY_MS = 250

// Generic utilities (top of file)
const pollUntil = async <T>(...) => { /* shared implementation */ }
const performAndAssert = async <T>(...) => { /* shared implementation */ }

// Section-specific helpers (near usage)
const getDisplayValue = () => element.textContent?.trim()
const getSvgWidth = () => parseInt(svg.getAttribute('width'))
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

- **Individual Control**: < 2.5 seconds per interaction
- **Section Runtime**: Scales with (controls × poll_interval + min_delay)
- **No Fixed Waits**: > 150ms sleeps should use polling instead

## Running Tests

```bash
npx vitest run --project=storybook packages/[package]/src/_stories/*.Editor.stories.tsx
```

## Anti-Patterns to Avoid

❌ **Hard-coded expected values**: `expect(value).toBe('42.5%')`
✅ **Change detection**: `expect(afterValue).not.toBe(beforeValue)`

❌ **Control-only assertions**: `expect(checkbox.checked).toBe(true)`
✅ **Output assertions**: `expect(chartElement.classList.contains('hidden')).toBe(false)`

❌ **Fixed sleeps**: `await new Promise(r => setTimeout(r, 500))`
✅ **Polling**: `await pollUntil(() => element.textContent, curr => curr !== initial)`

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

## Advanced Patterns and Component-Specific Learnings

### Visual Order Testing

Organize tests to match the visual appearance order in the editor for better maintainability and user experience validation:

```typescript
// ✅ Tests organized by visual appearance order in General section:
// 1. Bite Style (top dropdown)
// 2. Title (second field)
// 3. Show Title toggle (next to title)
// 4. Body Text/Message (third field)
// 5. Subtext/Citation (bottom field)

export const GeneralSectionTests: Story = {
  play: async ({ canvasElement }) => {
    // Follow visual order for intuitive test flow
    const biteStyleSelect = canvasElement.querySelector('select[name="biteStyle"]')
    const titleInput = canvas.getByDisplayValue(/test data bite title/i)
    const showTitleCheckbox = canvasElement.querySelector('input[name="showTitle"]')
    const bodyTextarea = canvasElement.querySelector('textarea[name="null-null-biteBody"]')
    const subtextInput = canvasElement.querySelector('input[name="null-null-subtext"]')
  }
}
```

### Form Element Naming Patterns

Based on debugging data-bite components, form controls follow these patterns:

- **Simple fields**: `input[name="fieldName"]` (e.g., `showTitle`, `border`, `accent`)
- **Nested null fields**: `input[name="null-null-fieldName"]` (e.g., `null-null-title`, `null-null-subtext`)
- **Data format fields**: `input[name="dataFormat-null-fieldName"]` (e.g., `dataFormat-null-prefix`, `dataFormat-null-suffix`)

### Enhanced Visual Feedback for Storybook

```typescript
// ✅ Enhanced visual feedback with appropriate delays
await userEvent.type(input, 'text', { delay: 100 }) // Typing delay
await visualDelay(1000) // Show the result
await userEvent.click(button)
await visualDelay(1500) // Show visual change effect

// ✅ Progressive interaction demonstration
const currentValue = select.value
const targetValue = currentValue === 'graphic' ? 'text' : 'graphic'

// Switch to new value
await userEvent.selectOptions(select, targetValue)
await visualDelay(1500) // Show the change

// Switch back to show difference
await userEvent.selectOptions(select, currentValue)
await visualDelay(1500) // Show original state restored
```

### Comprehensive Error Handling

```typescript
// ✅ Comprehensive error handling with detailed logging
console.log('=== Starting interaction name ===')
const element = canvasElement.querySelector('selector') as HTMLElementType

if (element) {
  try {
    console.log('Element found:', !!element)
    await userEvent.click(element)
    await visualDelay(1000)
    console.log('Interaction completed successfully')
    console.log('=== Interaction name completed ===')
  } catch (error) {
    console.error('Error in interaction name:', error)
  }
} else {
  console.log('Element not found, skipping')
}
```

### Debug Form Discovery

```typescript
// ✅ Debug helper to discover all form controls
const debugFormControls = (canvasElement: HTMLElement) => {
  console.log('=== All form controls found ===')
  const controls = canvasElement.querySelectorAll('input, select, textarea')
  controls.forEach((control, index) => {
    const element = control as HTMLInputElement
    console.log(
      `${index}: ${element.tagName} name="${element.name}" type="${element.type}" value="${element.value}" placeholder="${element.placeholder}"`
    )
  })
  console.log('=== End debug info ===')
}
```

### Storybook Test Execution Notes

- Tests run automatically when navigating to test stories
- Console output appears in browser developer tools
- Enhanced visual delays make interactions observable
- Error boundaries prevent test suite crashes
- Form debugging helps identify correct selectors
- Visual order testing improves maintainability and user experience validation
