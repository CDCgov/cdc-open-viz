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

## Summary

Maximize reliability by asserting _visualization output change_ for every control using polling with human-visible minimum delays. This approach ensures tests are fast, deterministic, and maintainable while remaining resilient to data changes and formatting adjustments.
