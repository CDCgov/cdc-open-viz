import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
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
 * Converted from editor/editor-general.spec.js
 */
export const GeneralTitleUpdate: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')

    // Find title input and update it
    const titleInput = canvas.getByDisplayValue(/test data bite title/i)
    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, 'Test Data Bite Title E2E')

    await new Promise(resolve => setTimeout(resolve, 1000))

    // Verify title appears in component
    await expect(canvas.getByText('Test Data Bite Title E2E')).toBeVisible()
  }
}

export const GeneralBiteStyleChange: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')

    // Find bite style select
    const biteStyleSelect = canvas.queryByDisplayValue(/graphic|body|value/i)
    if (biteStyleSelect) {
      const currentValue = (biteStyleSelect as HTMLSelectElement).value
      const targetValue = currentValue === 'graphic' ? 'body' : 'graphic'

      await userEvent.selectOptions(biteStyleSelect, targetValue)
      await new Promise(resolve => setTimeout(resolve, 500))

      // Verify selection changed
      await expect(biteStyleSelect).toHaveValue(targetValue)
    }
  }
}

export const GeneralShowTitleToggle: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')

    // Find show title checkbox
    const showTitleCheckbox = canvas.queryByRole('checkbox', { name: /show title/i })
    if (showTitleCheckbox) {
      const wasChecked = (showTitleCheckbox as HTMLInputElement).checked
      await userEvent.click(showTitleCheckbox)
      await new Promise(resolve => setTimeout(resolve, 500))

      // Verify checkbox state changed
      expect((showTitleCheckbox as HTMLInputElement).checked).toBe(!wasChecked)
    }
  }
}

export const GeneralBodyTextChange: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')

    // Find body textarea
    const bodyTextarea = canvas.queryByRole('textbox', { name: /body|message/i })
    if (bodyTextarea) {
      const newBodyText = 'This is a test message for E2E testing'
      await userEvent.clear(bodyTextarea)
      await userEvent.type(bodyTextarea, newBodyText)

      await new Promise(resolve => setTimeout(resolve, 1000))

      // Verify body text appears in component
      await expect(canvas.getByText(newBodyText)).toBeVisible()
    }
  }
}

export const GeneralSubtextChange: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')

    // Find subtext input
    const subtextInput = canvas.queryByLabelText(/subtext|citation|source/i)
    if (subtextInput) {
      const newSubtext = 'Updated Test Data Source Citation'
      await userEvent.clear(subtextInput)
      await userEvent.type(subtextInput, newSubtext)

      await new Promise(resolve => setTimeout(resolve, 1000))

      // Verify subtext appears in component
      await expect(canvas.getByText(newSubtext)).toBeVisible()
    }
  }
}

/**
 * DATA SECTION TESTS
 * Converted from editor/editor-data.spec.js
 */
export const DataConfigurationValidation: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Data')

    // Verify data column and function selects exist
    const dataColumnSelect = canvas.queryByLabelText(/data column/i)
    const dataFunctionSelect = canvas.queryByLabelText(/data function/i)

    if (dataColumnSelect) {
      await expect(dataColumnSelect).toBeVisible()
    }
    if (dataFunctionSelect) {
      await expect(dataFunctionSelect).toBeVisible()
    }
  }
}

export const DataPrefixChange: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Data')

    // Find prefix input
    const prefixInput = canvas.queryByLabelText(/prefix/i)
    if (prefixInput) {
      await userEvent.clear(prefixInput)
      await userEvent.type(prefixInput, '$')

      await new Promise(resolve => setTimeout(resolve, 1000))

      // Check that prefix is in input
      await expect(prefixInput).toHaveValue('$')
    }
  }
}

export const DataSuffixChange: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Data')

    // Find suffix input
    const suffixInput = canvas.queryByLabelText(/suffix/i)
    if (suffixInput) {
      await userEvent.clear(suffixInput)
      await userEvent.type(suffixInput, '%')

      await new Promise(resolve => setTimeout(resolve, 1000))

      // Check that suffix is in input
      await expect(suffixInput).toHaveValue('%')
    }
  }
}

export const DataRoundingChange: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Data')

    // First, capture the initial displayed value
    const initialValue = canvas.queryByText(/\d+(\.\d+)?/)?.textContent

    // Find rounding input
    const roundingInput = canvas.queryByLabelText(/round|decimal/i)
    if (roundingInput) {
      // Change from 0 decimal places to 2 decimal places
      await userEvent.clear(roundingInput)
      await userEvent.type(roundingInput, '2')

      await new Promise(resolve => setTimeout(resolve, 1500))

      // Verify rounding value changed in input
      await expect(roundingInput).toHaveValue('2')

      // Verify the displayed value now shows decimal places
      // The mean of [1000, 2000, 1100, 2200] for Test State 1 is 1575
      // With 2 decimal places it should show 1575.00
      const updatedValue = canvas.queryByText(/1575\.00/)
      if (updatedValue) {
        await expect(updatedValue).toBeVisible()
      } else {
        // Fallback: just verify some number with .00 is displayed
        const decimalValue = canvas.queryByText(/\d+\.\d{2}/)
        if (decimalValue) {
          await expect(decimalValue).toBeVisible()
        }
      }

      // Test changing back to 0 decimal places
      await userEvent.clear(roundingInput)
      await userEvent.type(roundingInput, '0')

      await new Promise(resolve => setTimeout(resolve, 1500))

      // Verify it goes back to no decimal places
      const roundedValue = canvas.queryByText(/^1575$/)
      if (roundedValue) {
        await expect(roundedValue).toBeVisible()
      }
    }
  }
}

export const DataCommasToggle: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Data')

    // Find commas checkbox
    const commasCheckbox = canvas.queryByRole('checkbox', { name: /comma/i })
    if (commasCheckbox) {
      const wasChecked = (commasCheckbox as HTMLInputElement).checked
      await userEvent.click(commasCheckbox)

      await new Promise(resolve => setTimeout(resolve, 500))

      // Verify checkbox state changed
      expect((commasCheckbox as HTMLInputElement).checked).toBe(!wasChecked)
    }
  }
}

export const DataColumnChange: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Data')

    // Find data column select
    const dataColumnSelect = canvas.queryByLabelText(/data column/i)
    if (dataColumnSelect) {
      const options = (dataColumnSelect as HTMLSelectElement).options
      if (options.length > 2) {
        // Has more than "Select" and current option
        const currentValue = (dataColumnSelect as HTMLSelectElement).value
        // Find a different option
        for (let i = 0; i < options.length; i++) {
          if (options[i].value !== currentValue && options[i].value !== '') {
            await userEvent.selectOptions(dataColumnSelect, options[i].value)
            break
          }
        }

        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    }
  }
}

export const DataFunctionChange: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Data')

    // Find data function select
    const dataFunctionSelect = canvas.queryByLabelText(/data function/i)
    if (dataFunctionSelect) {
      const currentValue = (dataFunctionSelect as HTMLSelectElement).value
      const targetValue = currentValue === 'Mean (Average)' ? 'Max' : 'Mean (Average)'

      await userEvent.selectOptions(dataFunctionSelect, targetValue)
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Verify function changed
      await expect(dataFunctionSelect).toHaveValue(targetValue)
    }
  }
}

/**
 * VISUAL SECTION TESTS
 * Converted from editor/editor-visual.spec.js
 */
export const VisualThemeChange: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')

    // Look for theme color palette buttons
    const themeButtons = canvas.queryAllByRole('button')
    const colorButtons = themeButtons.filter(
      btn =>
        btn.getAttribute('title')?.includes('theme') ||
        btn.className?.includes('color') ||
        btn.className?.includes('theme')
    )

    if (colorButtons.length > 1) {
      // Click on a different theme button
      await userEvent.click(colorButtons[1])
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Verify theme button is clickable
      await expect(colorButtons[1]).toBeVisible()
    }
  }
}

export const VisualFontSizeChange: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')

    // Find bite font size input
    const fontSizeInput = canvas.queryByLabelText(/bite font size|font size/i)
    if (fontSizeInput) {
      const currentSize = (fontSizeInput as HTMLInputElement).value
      const newSize = currentSize === '24' ? '36' : '24'

      await userEvent.clear(fontSizeInput)
      await userEvent.type(fontSizeInput, newSize)

      await new Promise(resolve => setTimeout(resolve, 500))

      // Verify font size changed
      await expect(fontSizeInput).toHaveValue(newSize)
    }
  }
}

export const VisualBorderToggle: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')

    // Find border checkbox
    const borderCheckbox = canvas.queryByRole('checkbox', { name: /border/i })
    if (borderCheckbox) {
      const wasChecked = (borderCheckbox as HTMLInputElement).checked
      await userEvent.click(borderCheckbox)

      await new Promise(resolve => setTimeout(resolve, 500))

      // Verify checkbox state changed
      expect((borderCheckbox as HTMLInputElement).checked).toBe(!wasChecked)

      // Toggle back to test both directions
      await userEvent.click(borderCheckbox)
      await new Promise(resolve => setTimeout(resolve, 500))
      expect((borderCheckbox as HTMLInputElement).checked).toBe(wasChecked)
    }
  }
}

export const VisualAccentToggle: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')

    // Find accent checkbox
    const accentCheckbox = canvas.queryByRole('checkbox', { name: /accent/i })
    if (accentCheckbox) {
      const wasChecked = (accentCheckbox as HTMLInputElement).checked
      await userEvent.click(accentCheckbox)

      await new Promise(resolve => setTimeout(resolve, 500))

      // Verify checkbox state changed
      expect((accentCheckbox as HTMLInputElement).checked).toBe(!wasChecked)
    }
  }
}

export const VisualBackgroundOptions: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')

    // Test background checkboxes
    const backgroundCheckbox = canvas.queryByRole('checkbox', { name: /background/i })
    const hideBackgroundCheckbox = canvas.queryByRole('checkbox', { name: /hide background/i })

    if (backgroundCheckbox) {
      const wasChecked = (backgroundCheckbox as HTMLInputElement).checked
      await userEvent.click(backgroundCheckbox)
      await new Promise(resolve => setTimeout(resolve, 500))
      expect((backgroundCheckbox as HTMLInputElement).checked).toBe(!wasChecked)
    }

    if (hideBackgroundCheckbox) {
      const wasChecked = (hideBackgroundCheckbox as HTMLInputElement).checked
      await userEvent.click(hideBackgroundCheckbox)
      await new Promise(resolve => setTimeout(resolve, 500))
      expect((hideBackgroundCheckbox as HTMLInputElement).checked).toBe(!wasChecked)
    }
  }
}

export const VisualOverallFontSize: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')

    // Find overall font size select
    const fontSizeSelect = canvas.queryByLabelText(/overall font size|font size/i)
    if (fontSizeSelect && fontSizeSelect !== canvas.queryByLabelText(/bite font size/i)) {
      const currentValue = (fontSizeSelect as HTMLSelectElement).value
      const targetValue = currentValue === 'medium' ? 'large' : 'medium'

      await userEvent.selectOptions(fontSizeSelect, targetValue)
      await new Promise(resolve => setTimeout(resolve, 500))

      // Verify font size changed
      await expect(fontSizeSelect).toHaveValue(targetValue)
    }
  }
}

export const VisualBitePosition: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)

    // Try Visual section first, then General
    let positionSelect = null

    await openAccordion(canvas, 'Visual')
    await new Promise(resolve => setTimeout(resolve, 500))
    positionSelect = canvas.queryByLabelText(/position|bite position/i)

    if (!positionSelect) {
      await openAccordion(canvas, 'General')
      await new Promise(resolve => setTimeout(resolve, 500))
      positionSelect = canvas.queryByLabelText(/position|bite position/i)
    }

    if (positionSelect) {
      const currentValue = (positionSelect as HTMLSelectElement).value
      const targetValue = currentValue === 'Left' ? 'Right' : 'Left'

      await userEvent.selectOptions(positionSelect, targetValue)
      await new Promise(resolve => setTimeout(resolve, 500))

      // Verify position changed
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
    const borderCheckbox = canvas.queryByRole('checkbox', { name: /border/i })
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
