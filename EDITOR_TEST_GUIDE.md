# COVE Editor Test Guide for Copilot

This guide provides patterns and examples for creating comprehensive editor tests for COVE visualization packages using Storybook and Vitest.

## Overview

Editor tests validate that the configuration interface works correctly for each visualization type. They test user interactions with accordions, form controls, and verify that changes are reflected in the visualization.

## Test File Structure

```typescript
import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import ComponentName from '../ComponentName'

const meta: Meta<typeof ComponentName> = {
  title: 'Components/Templates/[Package Name]/Editor Tests',
  component: ComponentName,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof ComponentName>
```

## Helper Functions Pattern

### Editor Loading Helper
```typescript
// Helper function to wait for editor to load
const waitForEditor = async (canvas: any) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  // Verify editor loaded by looking for accordion buttons
  const accordionButtons = canvas.queryAllByRole('button').filter((btn: HTMLElement) =>
    btn.getAttribute('data-accordion-component') === 'AccordionItemButton'
  )
  if (accordionButtons.length > 0) {
    await expect(accordionButtons[0]).toBeVisible()
  }
}
```

### Accordion Navigation Helper
```typescript
// Helper function to open accordion
const openAccordion = async (canvas: any, sectionName: string) => {
  // Look for accordion buttons specifically (they have specific data attributes)
  const accordions = canvas.getAllByRole('button', { name: new RegExp(sectionName, 'i') })
  const accordion = accordions.find((btn: HTMLElement) => btn.getAttribute('data-accordion-component') === 'AccordionItemButton')
  if (accordion) {
    await userEvent.click(accordion)
    await new Promise(resolve => setTimeout(resolve, 500))
  }
}
```

### Button Click Helper
```typescript
// Helper function to click button by text
const clickButtonByText = async (canvas: any, buttonText: string) => {
  const buttons = canvas.queryAllByRole('button')
  const button = buttons.find((btn: HTMLElement) => btn.textContent?.toLowerCase().includes(buttonText.toLowerCase()))
  if (button) {
    await userEvent.click(button)
    await new Promise(resolve => setTimeout(resolve, 500))
  }
  return button
}
```

## Test Configuration Requirements

### Test Fixtures
Create test fixtures in `packages/[package-name]/tests/fixtures/`:
- `test-config.json` - Complete configuration object for the visualization
- `example-data.json` - Sample data that works with the configuration

### Story Args Pattern
```typescript
export const TestStory: Story = {
  args: {
    configUrl: '/packages/[package-name]/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    // Test implementation here
  }
}
```

## Common Test Patterns

### 1. Basic Editor Loading Test
```typescript
export const BasicEditorLoading: Story = {
  args: {
    configUrl: '/packages/[package-name]/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)

    // Verify basic editor elements exist
    const accordionButtons = canvas.getAllByRole('button')
    const dataButton = accordionButtons.find(btn =>
      btn.textContent?.toLowerCase().includes('[section-name]') &&
      btn.getAttribute('data-accordion-component') === 'AccordionItemButton'
    )
    await expect(dataButton).toBeVisible()

    // Verify visualization is present
    const vizElement = canvas.getByRole('[appropriate-role]') // table, img, etc.
    await expect(vizElement).toBeVisible()
  }
}
```

### 2. Form Control Testing Patterns

#### Text Input Testing
```typescript
// Test text input configuration
const titleInputs = canvas.queryAllByLabelText(/title/i)
if (titleInputs.length > 0) {
  const titleInput = titleInputs[0]
  await userEvent.clear(titleInput)
  await userEvent.type(titleInput, 'Updated Title Text')
  await new Promise(resolve => setTimeout(resolve, 1000))
  await expect(titleInput).toHaveValue('Updated Title Text')

  // Verify change appears in visualization
  const titleElement = canvas.queryByText('Updated Title Text')
  if (titleElement) {
    await expect(titleElement).toBeVisible()
  }
}
```

#### Dropdown/Select Testing
```typescript
// Test dropdown configuration
const typeSelects = canvas.queryAllByLabelText(/type|style/i)
if (typeSelects.length > 0) {
  const typeSelect = typeSelects[0] as HTMLSelectElement
  const options = Array.from(typeSelect.options)
  const targetOption = options.find(opt => opt.value !== typeSelect.value && opt.value)

  if (targetOption) {
    await userEvent.selectOptions(typeSelect, targetOption.value)
    await new Promise(resolve => setTimeout(resolve, 1000))
    await expect(typeSelect).toHaveValue(targetOption.value)
  }
}
```

#### Checkbox Testing
```typescript
// Test checkbox configuration
const checkboxes = canvas.queryAllByRole('checkbox').filter(cb =>
  cb.getAttribute('name') === 'specificFeatureName'
)
if (checkboxes.length > 0) {
  const checkbox = checkboxes[0] as HTMLInputElement
  const wasChecked = checkbox.checked
  await userEvent.click(checkbox)
  await new Promise(resolve => setTimeout(resolve, 1000))
  expect(checkbox.checked).toBe(!wasChecked)
}
```

#### Number Input Testing
```typescript
// Test number input configuration
const numberInputs = canvas.queryAllByLabelText(/width|height|size/i)
if (numberInputs.length > 0) {
  const numberInput = numberInputs[0]
  await userEvent.clear(numberInput)
  await userEvent.type(numberInput, '500')
  await new Promise(resolve => setTimeout(resolve, 1000))
  await expect(numberInput).toHaveValue(500)
}
```

### 3. Dynamic Content Testing (Add/Remove Items)

#### Adding New Configuration Items
```typescript
// Test adding new configuration item
const addButton = await clickButtonByText(canvas, 'Add [Item Type]')
if (addButton) {
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Verify new item section appeared
  const itemSelects = canvas.queryAllByLabelText(/[item-selector]/i)
  await expect(itemSelects.length).toBeGreaterThan(0)

  // Configure the new item
  if (itemSelects.length > 0) {
    const newItemSelect = itemSelects[itemSelects.length - 1] as HTMLSelectElement
    const options = Array.from(newItemSelect.options)
    const availableOption = options.find(opt => opt.value && opt.value !== '-Select-')
    if (availableOption) {
      await userEvent.selectOptions(newItemSelect, availableOption.value)
      await new Promise(resolve => setTimeout(resolve, 1000))
      await expect(newItemSelect).toHaveValue(availableOption.value)
    }
  }
}
```

#### Removing Configuration Items
```typescript
// Test removing configuration item
const deleteButtons = canvas.queryAllByRole('button').filter(btn =>
  btn.textContent?.toLowerCase().includes('delete') ||
  btn.textContent?.toLowerCase().includes('remove')
)
if (deleteButtons.length > 0) {
  const initialCount = canvas.queryAllByLabelText(/[item-selector]/i).length
  await userEvent.click(deleteButtons[deleteButtons.length - 1])
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Verify item was removed
  const finalCount = canvas.queryAllByLabelText(/[item-selector]/i).length
  expect(finalCount).toBeLessThan(initialCount)
}
```

### 4. Complex Feature Testing

#### Data Format Configuration
```typescript
// Test data formatting options
const prefixInputs = canvas.queryAllByLabelText(/prefix/i)
if (prefixInputs.length > 0) {
  await userEvent.clear(prefixInputs[0])
  await userEvent.type(prefixInputs[0], '$')
  await new Promise(resolve => setTimeout(resolve, 1000))
  await expect(prefixInputs[0]).toHaveValue('$')

  // Verify prefix appears in visualization
  await new Promise(resolve => setTimeout(resolve, 1000))
  const dataElements = canvas.queryAllByText(/\$\d/)
  if (dataElements.length > 0) {
    await expect(dataElements[0]).toBeVisible()
  }
}
```

#### Filter Configuration
```typescript
// Test filter functionality
const addFilterButton = await clickButtonByText(canvas, 'Add Filter')
if (addFilterButton) {
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Configure filter
  const columnSelects = canvas.queryAllByLabelText(/column.*name|column/i)
  if (columnSelects.length > 0) {
    const filterSelect = columnSelects[columnSelects.length - 1] as HTMLSelectElement
    const options = Array.from(filterSelect.options)
    const availableOption = options.find(opt => opt.value && opt.value !== '-Select-')

    if (availableOption) {
      await userEvent.selectOptions(filterSelect, availableOption.value)
      await new Promise(resolve => setTimeout(resolve, 1000))
      await expect(filterSelect).toHaveValue(availableOption.value)

      // Test filter label
      const labelInputs = canvas.queryAllByLabelText(/filter.*label|^label$/i)
      if (labelInputs.length > 0) {
        const labelInput = labelInputs[labelInputs.length - 1]
        await userEvent.clear(labelInput)
        await userEvent.type(labelInput, 'Test Filter Label')
        await new Promise(resolve => setTimeout(resolve, 1000))
        await expect(labelInput).toHaveValue('Test Filter Label')
      }
    }
  }
}
```

### 5. State Persistence Testing
```typescript
export const StatePersistenceTest: Story = {
  args: {
    configUrl: '/packages/[package-name]/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)

    // 1. Configure something in Section A
    await openAccordion(canvas, 'Section A')
    const titleInputs = canvas.queryAllByLabelText(/title/i)
    if (titleInputs.length > 0) {
      await userEvent.clear(titleInputs[0])
      await userEvent.type(titleInputs[0], 'Persistence Test Title')
      await new Promise(resolve => setTimeout(resolve, 1000))
    }

    // 2. Navigate to Section B and configure something
    await openAccordion(canvas, 'Section B')
    const checkboxes = canvas.queryAllByRole('checkbox')
    if (checkboxes.length > 0) {
      await userEvent.click(checkboxes[0])
      await new Promise(resolve => setTimeout(resolve, 1000))
    }

    // 3. Navigate back to Section A and verify persistence
    await openAccordion(canvas, 'Section A')
    await new Promise(resolve => setTimeout(resolve, 1000))

    const persistedTitleInputs = canvas.queryAllByDisplayValue('Persistence Test Title')
    if (persistedTitleInputs.length > 0) {
      await expect(persistedTitleInputs[0]).toBeVisible()
    }
  }
}
```

## Package-Specific Patterns

### Chart Package
- Test chart type selection
- Test axis configuration
- Test series configuration
- Test legend settings
- Test tooltip settings
- Test data format options

### Map Package
- Test map type selection
- Test geographic data mapping
- Test color scale configuration
- Test legend configuration
- Test tooltip content

### Data Bite Package
- Test data function selection
- Test display style options
- Test image configuration
- Test text formatting

### Dashboard Package
- Test visualization addition/removal
- Test layout configuration
- Test filter sharing
- Test responsive settings

## Best Practices

### 1. Robust Element Selection
```typescript
// Good: Use specific attributes when possible
const accordionButtons = canvas.queryAllByRole('button').filter((btn: HTMLElement) =>
  btn.getAttribute('data-accordion-component') === 'AccordionItemButton'
)

// Good: Use descriptive label text
const columnSelects = canvas.queryAllByLabelText(/column.*name|column/i)

// Good: Use fallback strategies
const deleteButtons = canvas.queryAllByRole('button').filter(btn =>
  btn.textContent?.toLowerCase().includes('delete') ||
  btn.textContent?.toLowerCase().includes('remove') ||
  btn.getAttribute('title')?.toLowerCase().includes('remove')
)
```

### 2. Timing and Waits
```typescript
// Always wait after user interactions
await userEvent.click(button)
await new Promise(resolve => setTimeout(resolve, 500))

// Wait longer for complex operations
await userEvent.selectOptions(select, value)
await new Promise(resolve => setTimeout(resolve, 1000))

// Wait for editor to fully load
await waitForEditor(canvas)
```

### 3. Error Handling
```typescript
// Use defensive checks
if (elements.length > 0) {
  // Perform actions
}

// Wrap risky operations in try-catch
try {
  await userEvent.click(complexElement)
  await new Promise(resolve => setTimeout(resolve, 1000))
} catch (error) {
  console.log('Optional operation failed:', error)
}
```

### 4. Test Organization
- One story per major feature/section
- Group related tests in the same story
- Use descriptive story names
- Include comprehensive workflow tests

### 5. Verification Patterns
```typescript
// Verify form state changes
await expect(input).toHaveValue('expected value')

// Verify UI updates
const updatedElement = canvas.queryByText('Updated Text')
if (updatedElement) {
  await expect(updatedElement).toBeVisible()
}

// Verify visualization changes
const visualElement = canvas.getByRole('table') // or appropriate role
await expect(visualElement).toBeVisible()
```

## Test File Template

Use this template for new editor test files:

```typescript
import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import [ComponentName] from '../[ComponentName]'

const meta: Meta<typeof [ComponentName]> = {
  title: 'Components/Templates/[Package Name]/Editor Tests',
  component: [ComponentName],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof [ComponentName]>

// Helper functions
const waitForEditor = async (canvas: any) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const accordionButtons = canvas.queryAllByRole('button').filter((btn: HTMLElement) =>
    btn.getAttribute('data-accordion-component') === 'AccordionItemButton'
  )
  if (accordionButtons.length > 0) {
    await expect(accordionButtons[0]).toBeVisible()
  }
}

const openAccordion = async (canvas: any, sectionName: string) => {
  const accordions = canvas.getAllByRole('button', { name: new RegExp(sectionName, 'i') })
  const accordion = accordions.find((btn: HTMLElement) => btn.getAttribute('data-accordion-component') === 'AccordionItemButton')
  if (accordion) {
    await userEvent.click(accordion)
    await new Promise(resolve => setTimeout(resolve, 500))
  }
}

const clickButtonByText = async (canvas: any, buttonText: string) => {
  const buttons = canvas.queryAllByRole('button')
  const button = buttons.find((btn: HTMLElement) => btn.textContent?.toLowerCase().includes(buttonText.toLowerCase()))
  if (button) {
    await userEvent.click(button)
    await new Promise(resolve => setTimeout(resolve, 500))
  }
  return button
}

// Basic loading test
export const BasicEditorLoading: Story = {
  args: {
    configUrl: '/packages/[package-name]/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)

    // Verify accordion sections exist
    const accordionButtons = canvas.getAllByRole('button')
    // Add specific checks for your package's accordion sections

    // Verify visualization is present
    const vizElement = canvas.getByRole('[appropriate-role]')
    await expect(vizElement).toBeVisible()
  }
}

// Section-specific tests
export const [SectionName]Tests: Story = {
  args: {
    configUrl: '/packages/[package-name]/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, '[Section Name]')

    // Add section-specific tests here
  }
}

// Comprehensive workflow test
export const ComprehensiveWorkflow: Story = {
  args: {
    configUrl: '/packages/[package-name]/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)

    // Test configuration across multiple sections
    // Verify state persistence
    // Test complex workflows
  }
}
```

This guide provides the foundation for creating comprehensive editor tests across all COVE packages. Adapt the patterns to match the specific configuration options and behaviors of each visualization type.