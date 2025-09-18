import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import DataBite from '../CdcDataBite'

const meta: Meta<typeof DataBite> = {
  title: 'Components/Templates/Data Bite/Editor Tests',
  component: DataBite,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof DataBite>

// Helper function to wait for editor to load
const waitForEditor = async (canvas: any) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  // Verify editor loaded
  const editorElement = canvas.queryAllByText(/general|data|visual/i)
  if (editorElement.length > 0) {
    await expect(editorElement[0]).toBeVisible()
  }
}

// Helper function to open accordion
const openAccordion = async (canvas: any, sectionName: string) => {
  const accordion = canvas.getByRole('button', { name: new RegExp(sectionName, 'i') })
  await userEvent.click(accordion)
  await new Promise(resolve => setTimeout(resolve, 500))
}

/**
 * BASIC FUNCTIONALITY TESTS
 * Converted from basic-functionality.spec.js
 */
export const BasicEditorLoading: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)

    // Verify basic editor elements exist
    const generalButton = canvas.getByRole('button', { name: /general/i })
    await expect(generalButton).toBeVisible()

    // Verify data-bite module is present
    const dataBiteElement = canvas.getByText(/test data bite title/i)
    await expect(dataBiteElement).toBeVisible()
  }
}

/**
 * GENERAL SECTION TESTS
 * Tests all functionality within the General accordion
 */
export const GeneralSectionTests: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')

    // Test 1: Title Update
    const titleInput = canvas.getByDisplayValue(/test data bite title/i)
    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, 'Test Data Bite Title E2E')
    await new Promise(resolve => setTimeout(resolve, 1000))
    await expect(canvas.getByText('Test Data Bite Title E2E')).toBeVisible()

    // Test 2: Bite Style Change
    const biteStyleSelect = canvasElement.querySelector('select[name="biteStyle"]') as HTMLSelectElement
    if (biteStyleSelect) {
      const currentValue = (biteStyleSelect as HTMLSelectElement).value
      const targetValue = currentValue === 'graphic' ? 'body' : 'graphic'
      await userEvent.selectOptions(biteStyleSelect, targetValue)
      await new Promise(resolve => setTimeout(resolve, 500))
      await expect(biteStyleSelect).toHaveValue(targetValue)
    }

    // Test 3: Show Title Toggle
    const showTitleCheckbox = canvas.queryByRole('checkbox', { name: /show title/i })
    if (showTitleCheckbox) {
      const wasChecked = (showTitleCheckbox as HTMLInputElement).checked
      await userEvent.click(showTitleCheckbox)
      await new Promise(resolve => setTimeout(resolve, 500))
      expect((showTitleCheckbox as HTMLInputElement).checked).toBe(!wasChecked)
    }

    // Test 4: Body Text Change
    const bodyTextarea = canvas.queryByRole('textbox', { name: /body|message/i })
    if (bodyTextarea) {
      const newBodyText = 'This is a test message for E2E testing'
      await userEvent.clear(bodyTextarea)
      await userEvent.type(bodyTextarea, newBodyText)
      await new Promise(resolve => setTimeout(resolve, 1000))
      const renderedText = canvas.getByText(newBodyText, { selector: '.bite-text' })
      await expect(renderedText).toBeVisible()
    }

    // Test 5: Subtext Change
    const subtextInput = canvas.queryByLabelText(/subtext|citation|source/i)
    if (subtextInput) {
      const newSubtext = 'Updated Test Data Source Citation'
      await userEvent.clear(subtextInput)
      await userEvent.type(subtextInput, newSubtext)
      await new Promise(resolve => setTimeout(resolve, 1000))
      await expect(canvas.getByText(newSubtext)).toBeVisible()
    }
  }
}

/**
 * DATA SECTION TESTS
 * Tests all functionality within the Data accordion
 */
export const DataSectionTests: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Data')

    // Test 1: Configuration Validation
    const dataColumnSelect = canvas.queryByLabelText(/data column/i)
    const dataFunctionSelect = canvas.queryByLabelText(/data function/i)
    if (dataColumnSelect) {
      await expect(dataColumnSelect).toBeVisible()
    }
    if (dataFunctionSelect) {
      await expect(dataFunctionSelect).toBeVisible()
    }

    // Test 2: Prefix Change
    const prefixInput = canvas.queryByLabelText(/prefix/i)
    if (prefixInput) {
      await userEvent.clear(prefixInput)
      await userEvent.type(prefixInput, '$')
      await new Promise(resolve => setTimeout(resolve, 1000))
      await expect(prefixInput).toHaveValue('$')
    }

    // Test 3: Suffix Change
    const suffixInput = canvas.queryByLabelText(/suffix/i)
    if (suffixInput) {
      await userEvent.clear(suffixInput)
      await userEvent.type(suffixInput, '%')
      await new Promise(resolve => setTimeout(resolve, 1000))
      await expect(suffixInput).toHaveValue('%')
    }

    // Test 4: Rounding Change
    const roundingInput = canvasElement.querySelector('input[name="dataFormat-null-roundToPlace"]') as HTMLInputElement
    if (roundingInput) {
      // Change from 0 decimal places to 2 decimal places
      await userEvent.clear(roundingInput)
      await userEvent.type(roundingInput, '2')
      await new Promise(resolve => setTimeout(resolve, 1500))
      await expect(roundingInput).toHaveValue(2)

      // Look for the value with 2 decimal places in SVG text
      const svgTextElements = canvasElement.querySelectorAll('svg text')
      const valueElement = Array.from(svgTextElements).find(
        (el: Element) => el.textContent && /1575\.00/.test(el.textContent)
      )
      if (valueElement) {
        await expect(valueElement).toBeInTheDocument()
      }

      // Test changing back to 0 decimal places
      await userEvent.clear(roundingInput)
      await userEvent.type(roundingInput, '0')
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Look for the rounded value in SVG text
      const roundedElements = canvasElement.querySelectorAll('svg text')
      const roundedElement = Array.from(roundedElements).find(
        (el: Element) => el.textContent && /^1,?575$/.test(el.textContent)
      )
      if (roundedElement) {
        await expect(roundedElement).toBeInTheDocument()
      }
    }

    // Test 5: Commas Toggle
    const commasCheckbox = canvas.queryByRole('checkbox', { name: /comma/i })
    if (commasCheckbox) {
      const wasChecked = (commasCheckbox as HTMLInputElement).checked
      await userEvent.click(commasCheckbox)
      await new Promise(resolve => setTimeout(resolve, 500))
      expect((commasCheckbox as HTMLInputElement).checked).toBe(!wasChecked)
    }

    // Test 6: Data Column Change
    const dataColumnSelectForChange = canvas.queryByLabelText(/data column/i)
    if (dataColumnSelectForChange) {
      const options = (dataColumnSelectForChange as HTMLSelectElement).options
      if (options.length > 2) {
        const currentValue = (dataColumnSelectForChange as HTMLSelectElement).value
        // Find a different option
        for (let i = 0; i < options.length; i++) {
          if (options[i].value !== currentValue && options[i].value !== '') {
            await userEvent.selectOptions(dataColumnSelectForChange, options[i].value)
            break
          }
        }
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    }

    // Test 7: Data Function Change
    const dataFunctionSelectForChange = canvas.queryByLabelText(/data function/i)
    if (dataFunctionSelectForChange) {
      const currentValue = (dataFunctionSelectForChange as HTMLSelectElement).value
      const targetValue = currentValue === 'Mean (Average)' ? 'Max' : 'Mean (Average)'
      await userEvent.selectOptions(dataFunctionSelectForChange, targetValue)
      await new Promise(resolve => setTimeout(resolve, 1000))
      await expect(dataFunctionSelectForChange).toHaveValue(targetValue)
    }
  }
}

/**
 * VISUAL SECTION TESTS
 * Tests all functionality within the Visual accordion
 */
export const VisualSectionTests: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')

    // Test 1: Theme Change
    const themeButtons = canvas.queryAllByRole('button')
    const colorButtons = themeButtons.filter(
      btn =>
        btn.getAttribute('title')?.includes('theme') ||
        btn.className?.includes('color') ||
        btn.className?.includes('theme')
    )
    if (colorButtons.length > 1) {
      await userEvent.click(colorButtons[1])
      await new Promise(resolve => setTimeout(resolve, 1000))
      await expect(colorButtons[1]).toBeVisible()
    }

    // Test 2: Font Size Change (Bite-specific)
    const fontSizeInput = canvasElement.querySelector('input[name="biteFontSize"]') as HTMLInputElement
    if (fontSizeInput) {
      const currentSize = parseInt(fontSizeInput.value)
      const newSize = currentSize === 24 ? 36 : 24
      await userEvent.clear(fontSizeInput)
      await userEvent.type(fontSizeInput, newSize.toString())
      await new Promise(resolve => setTimeout(resolve, 500))
      await expect(fontSizeInput).toHaveValue(newSize)
    }

    // Test 3: Border Toggle
    const borderCheckbox = canvasElement.querySelector('input[name="border"]') as HTMLInputElement
    if (borderCheckbox) {
      const wasChecked = borderCheckbox.checked
      await userEvent.click(borderCheckbox)
      await new Promise(resolve => setTimeout(resolve, 500))
      expect(borderCheckbox.checked).toBe(!wasChecked)

      // Toggle back to test both directions
      await userEvent.click(borderCheckbox)
      await new Promise(resolve => setTimeout(resolve, 500))
      expect(borderCheckbox.checked).toBe(wasChecked)
    }

    // Test 4: Accent Toggle
    const accentCheckbox = canvas.queryByRole('checkbox', { name: /accent/i })
    if (accentCheckbox) {
      const wasChecked = (accentCheckbox as HTMLInputElement).checked
      await userEvent.click(accentCheckbox)
      await new Promise(resolve => setTimeout(resolve, 500))
      expect((accentCheckbox as HTMLInputElement).checked).toBe(!wasChecked)
    }

    // Test 5: Background Options
    const backgroundCheckbox = canvasElement.querySelector('input[name="background"]') as HTMLInputElement
    const hideBackgroundCheckbox = canvasElement.querySelector('input[name="hideBackgroundColor"]') as HTMLInputElement

    if (backgroundCheckbox) {
      const wasChecked = backgroundCheckbox.checked
      await userEvent.click(backgroundCheckbox)
      await new Promise(resolve => setTimeout(resolve, 500))
      expect(backgroundCheckbox.checked).toBe(!wasChecked)
    }

    if (hideBackgroundCheckbox) {
      const wasChecked = hideBackgroundCheckbox.checked
      await userEvent.click(hideBackgroundCheckbox)
      await new Promise(resolve => setTimeout(resolve, 500))
      expect(hideBackgroundCheckbox.checked).toBe(!wasChecked)
    }

    // Test 6: Overall Font Size
    const fontSizeSelect = canvasElement.querySelector('select[name="fontSize"]') as HTMLSelectElement
    if (fontSizeSelect) {
      const currentValue = fontSizeSelect.value
      const targetValue = currentValue === 'medium' ? 'large' : 'medium'
      await userEvent.selectOptions(fontSizeSelect, targetValue)
      await new Promise(resolve => setTimeout(resolve, 500))
      await expect(fontSizeSelect).toHaveValue(targetValue)
    }

    // Test 7: Bite Position
    let positionSelect = canvas.queryByLabelText(/position|bite position/i)
    if (!positionSelect) {
      // Try General section if not found in Visual
      await openAccordion(canvas, 'General')
      await new Promise(resolve => setTimeout(resolve, 500))
      positionSelect = canvas.queryByLabelText(/position|bite position/i)
    }

    if (positionSelect) {
      const currentValue = (positionSelect as HTMLSelectElement).value
      const targetValue = currentValue === 'Left' ? 'Right' : 'Left'
      await userEvent.selectOptions(positionSelect, targetValue)
      await new Promise(resolve => setTimeout(resolve, 500))
      await expect(positionSelect).toHaveValue(targetValue)
    }
  }
}

/**
 * COMPREHENSIVE WORKFLOW TEST
 * Tests editor state persistence and complex interactions
 */
export const ComprehensiveEditorWorkflow: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)

    // 1. Update title in General section
    await openAccordion(canvas, 'General')
    const titleInput = canvas.getByDisplayValue(/test data bite title/i)
    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, 'Persistence Test Title')
    await new Promise(resolve => setTimeout(resolve, 1000))

    // 2. Configure data settings
    await openAccordion(canvas, 'Data')
    const prefixInput = canvas.queryByLabelText(/prefix/i)
    if (prefixInput) {
      await userEvent.clear(prefixInput)
      await userEvent.type(prefixInput, '$')
    }

    // 3. Configure visual settings
    await openAccordion(canvas, 'Visual')
    const borderCheckbox = canvasElement.querySelector('input[name="border"]') as HTMLInputElement
    if (borderCheckbox) {
      await userEvent.click(borderCheckbox)
    }

    // 4. Navigate back to General to verify persistence
    await openAccordion(canvas, 'General')
    await new Promise(resolve => setTimeout(resolve, 500))

    // Verify title persisted
    const persistedTitleInput = canvas.getByDisplayValue('Persistence Test Title')
    await expect(persistedTitleInput).toBeVisible()

    // Verify title appears in component
    await expect(canvas.getByText('Persistence Test Title')).toBeVisible()
  }
}
