import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import DataBite from '../CdcDataBite'
import DataColorsConfig from '../../examples/tp5-data-colors.json'
import DefaultConfig from '../../examples/default.json'
import TrendArrowConfig from '../../examples/trend-arrow.json'
import {
  performAndAssert,
  waitForPresence,
  waitForAbsence,
  waitForEditor,
  openAccordion,
  getDisplayValue
} from '@cdc/core/helpers/testing'

const meta: Meta<typeof DataBite> = {
  title: 'Components/Templates/Data Bite/Editor Tests',
  component: DataBite,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof DataBite>

const GeneralSectionConfig = {
  ...DefaultConfig,
  biteStyle: 'graphic',
  data: [{ Category: 'Total', Value: 1234, 'Report Date': '2026-01-15' }],
  dataFunction: 'Pass Through',
  title: 'Test Data Bite Title',
  biteBody: 'Test data bite body text',
  subtext: 'Test citation {{reportDate}}',
  locale: 'en-US',
  enableMarkupVariables: true,
  markupVariables: [
    {
      name: 'Report Date',
      tag: '{{reportDate}}',
      columnName: 'Report Date',
      conditions: [],
      dateParseFormat: '%Y-%m-%d',
      dateDisplayFormat: '%B %-d, %Y'
    }
  ]
}

const VisualSectionConfig = {
  ...DefaultConfig,
  biteStyle: 'split',
  biteFontSize: 36,
  fontSize: 'medium',
  visual: {
    ...DefaultConfig.visual,
    border: false
  }
}

const Tp5VisualSectionConfig = {
  ...DefaultConfig,
  biteStyle: 'tp5',
  visual: {
    ...DefaultConfig.visual,
    whiteBackground: false,
    useWrap: false
  }
}

// ============================================================================
// REFACTORED EDITOR TESTS FOLLOWING TESTING_BEST_PRACTICES.md
//
// Key Changes:
// - Removed defensive `if` statements that hide test failures
// - Use assertive queries (getBy*) instead of optional queries (queryBy*)
// - Replaced setTimeout with polling utilities for reliability
// - Focus on visualization output changes rather than control state
// - Proper fallback strategies for legitimate edge cases
// ============================================================================

// ============================================================================
// SHARED CONSTANTS AND UTILITIES - Now imported from @cdc/core/helpers/testing
// ============================================================================

// ============================================================================
// SECTION-SPECIFIC HELPERS
// ============================================================================

// ============================================================================
// TEST 1: Basic Editor Loading
// Expectation: Editor loads and becomes interactive with all accordion sections.
// ============================================================================
export const BasicEditorLoadingTests: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)

    // Verify all three main accordion sections are present
    // Use waitFor to give VisualSection time to render
    const generalButton = await canvas.findByRole('button', { name: /general/i })
    const dataButton = await canvas.findByRole('button', { name: /data/i })

    // Find Visual section accordion button
    const visualButton = await canvas.findByRole('button', { name: /visual/i }, { timeout: 5000 })

    await expect(generalButton).toBeVisible()
    await expect(dataButton).toBeVisible()
    await expect(visualButton).toBeVisible()
    await expect(canvas.queryByRole('button', { name: 'Data-Driven Colors' })).not.toBeInTheDocument()

    // Verify the data-bite component is rendered
    const titleElement = canvas.getByText(/test data bite title/i)
    await expect(titleElement).toBeVisible()
  }
}

// ============================================================================
// TEST 2: General Section Functionality
// Expectation: All General controls update the visualization output.
// ============================================================================
export const GeneralSectionTests: Story = {
  args: {
    config: GeneralSectionConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')

    const biteStyleSelect = canvas.getByLabelText('Data Bite Style') as HTMLSelectElement
    const isGeneralSectionVisible = () => {
      let element: HTMLElement | null = biteStyleSelect
      while (element) {
        const style = getComputedStyle(element)
        if (element.hidden || style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
          return false
        }
        element = element.parentElement
      }
      return true
    }
    await performAndAssert(
      'Open General Accordion',
      isGeneralSectionVisible,
      async () => {},
      (_before, after) => after
    )

    const getBiteStyleState = () => ({
      hasGraphic: Boolean(canvasElement.querySelector('.bite-content-container svg')),
      hasSplitValue: Boolean(canvasElement.querySelector('.bite-content-container > .bite-content .bite-value'))
    })
    await performAndAssert(
      'Bite Style Change',
      getBiteStyleState,
      async () => await userEvent.selectOptions(biteStyleSelect, 'split'),
      (before, after) => before.hasGraphic && !before.hasSplitValue && !after.hasGraphic && after.hasSplitValue
    )
    await performAndAssert(
      'Bite Style Restore',
      getBiteStyleState,
      async () => await userEvent.selectOptions(biteStyleSelect, 'graphic'),
      (before, after) => !before.hasGraphic && before.hasSplitValue && after.hasGraphic && !after.hasSplitValue
    )

    const titleInput = canvas.getByLabelText('Title')
    await performAndAssert(
      'Title Update',
      () => canvasElement.querySelector('.cove-visualization__header')?.textContent?.trim() || '',
      async () => {
        await userEvent.clear(titleInput)
        await userEvent.type(titleInput, 'Updated Data Bite Title')
      },
      (_before, after) => after === 'Updated Data Bite Title'
    )

    const showTitleCheckbox = canvas.getByLabelText('Show Title')
    await performAndAssert(
      'Hide Title',
      () => Boolean(canvasElement.querySelector('.cove-visualization__header')),
      async () => await userEvent.click(showTitleCheckbox),
      (before, after) => before && !after
    )
    await performAndAssert(
      'Restore Title',
      () => canvasElement.querySelector('.cove-visualization__header')?.textContent?.trim() || '',
      async () => await userEvent.click(showTitleCheckbox),
      (_before, after) => after === 'Updated Data Bite Title'
    )

    const bodyTextarea = canvas.getByLabelText(/Message/) as HTMLTextAreaElement
    await performAndAssert(
      'Message Update',
      () => canvasElement.querySelector('.bite-content-container .bite-text')?.textContent?.trim() || '',
      async () => {
        await userEvent.clear(bodyTextarea)
        await userEvent.type(bodyTextarea, 'Updated body text for E2E testing')
      },
      (_before, after) => after.includes('Updated body text for E2E testing')
    )

    const subtextInput = canvas.getByLabelText(/Subtext\/Citation/) as HTMLInputElement
    const getRenderedSubtext = () =>
      (canvasElement.querySelector('.bite-content-container .bite-subtext')?.textContent?.trim() || '').replace(
        /\s+/g,
        ' '
      )
    await performAndAssert(
      'Subtext Update',
      getRenderedSubtext,
      async () => {
        await userEvent.clear(subtextInput)
        await userEvent.click(subtextInput)
        await userEvent.paste('Updated citation {{reportDate}}')
      },
      (_before, after) => after === 'Updated citation January 15, 2026'
    )

    const localeSelect = canvas.getByLabelText(/Language for dates and numbers/) as HTMLSelectElement
    await performAndAssert(
      'Locale Update',
      getRenderedSubtext,
      async () => await userEvent.selectOptions(localeSelect, 'es-MX'),
      (before, after) => before === 'Updated citation January 15, 2026' && after === 'Updated citation enero 15, 2026'
    )
  }
}

// ============================================================================
// TEST 3: Data Section Functionality
// Expectation: All Data controls change the primary data value display.
// ============================================================================
export const DataSectionTests: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Data')

    // Get the current data value for comparison
    const getDataValue = () => canvasElement.querySelector('svg text, .bite-text')?.textContent?.trim() || ''

    // ============================================================================
    // TEST 1: Data Column Selection
    // Expectation: Changing data column updates the displayed value
    // ============================================================================
    const dataColumnSelect = canvasElement.querySelector('select[name="dataColumn"]') as HTMLSelectElement
    expect(dataColumnSelect).toBeTruthy()

    const currentColumn = dataColumnSelect.value
    const options = Array.from(dataColumnSelect.options)
      .map(opt => opt.value)
      .filter(val => val && val !== currentColumn)

    if (options.length > 0) {
      const targetColumn = options[0]
      await performAndAssert(
        'Data Column Change',
        getDataValue,
        async () => {
          await userEvent.selectOptions(dataColumnSelect, targetColumn)
        },
        (before, after) => after !== before
      )
    }

    // ============================================================================
    // TEST 2: Data Function Selection
    // Expectation: Changing data function (Mean, Sum, etc.) updates the displayed value
    // ============================================================================
    const dataFunctionSelect = canvasElement.querySelector('select[name="dataFunction"]') as HTMLSelectElement
    expect(dataFunctionSelect).toBeTruthy()

    const currentFunction = dataFunctionSelect.value
    const functionOptions = Array.from(dataFunctionSelect.options)
      .map(opt => opt.value)
      .filter(val => val && val !== currentFunction)

    if (functionOptions.length > 0) {
      const targetFunction = functionOptions[0]
      await performAndAssert(
        'Data Function Change',
        getDataValue,
        async () => {
          await userEvent.selectOptions(dataFunctionSelect, targetFunction)
        },
        (before, after) => after !== before
      )
    }

    // NOTE: Data Point Filters test moved to TEST 9 (final test) below

    // ============================================================================
    // TEST 3: Data Prefix Input
    // Expectation: Data value gets prefix (e.g., "$42" when prefix is "$")
    // ============================================================================
    const prefixInput = canvasElement.querySelector('input[name="dataFormat-null-prefix"]') as HTMLInputElement
    expect(prefixInput).toBeTruthy()

    await performAndAssert(
      'Prefix Addition',
      getDataValue,
      async () => {
        await userEvent.clear(prefixInput)
        await userEvent.type(prefixInput, '$')
        await userEvent.tab() // Trigger change event
      },
      (before, after) => after.startsWith('$') && after !== before
    )

    // ============================================================================
    // TEST 4: Data Suffix Input
    // Expectation: Data value gets suffix (e.g., "42%" when suffix is "%")
    // ============================================================================
    const suffixInput = canvasElement.querySelector('input[name="dataFormat-null-suffix"]') as HTMLInputElement
    expect(suffixInput).toBeTruthy()

    await performAndAssert(
      'Suffix Addition',
      getDataValue,
      async () => {
        await userEvent.clear(suffixInput)
        await userEvent.type(suffixInput, ' miles')
        await userEvent.tab() // Trigger change event
      },
      (before, after) => after.includes('miles') && after !== before
    )

    // ============================================================================
    // TEST 6: Round to Place Input
    // Expectation: Data value rounding changes (e.g., 42.345 → 42 when roundToPlace=0)
    // ============================================================================
    try {
      const roundInput = canvasElement.querySelector('input[name="dataFormat-null-roundToPlace"]') as HTMLInputElement
      expect(roundInput).toBeTruthy()

      await performAndAssert(
        'Round to Place Change',
        getDataValue,
        async () => {
          const currentValue = roundInput.value
          const newValue = currentValue === '0' ? '2' : '0'
          await userEvent.clear(roundInput)
          await userEvent.type(roundInput, newValue)
          await userEvent.tab() // Trigger change event
        },
        (before, after) => after !== before
      )
    } catch (error) {
      throw error
    }

    // ============================================================================
    // TEST 7: Commas Toggle (comprehensive boolean testing)
    // Expectation: Checkbox toggles in both directions regardless of visual impact
    // ============================================================================
    const commasCheckbox = canvasElement.querySelector('input[name="commas"]') as HTMLInputElement
    expect(commasCheckbox).toBeTruthy()

    // Test commas checkbox with visual validation (data value formatting may change)
    const getDataValueFormatting = () => {
      const dataElement = canvasElement.querySelector('.bite-data-value, .data-value, [class*="data"]')
      return {
        textContent: dataElement?.textContent || '',
        innerHTML: dataElement?.innerHTML || '',
        hasCommas: (dataElement?.textContent || '').includes(',')
      }
    }

    const commasInitialCheckboxState = commasCheckbox.checked
    const commasInitialVisualState = getDataValueFormatting()

    // First toggle: change to opposite state
    await userEvent.click(commasCheckbox)
    await new Promise(resolve => setTimeout(resolve, 100))
    const commasFirstToggleCheckboxState = commasCheckbox.checked
    const commasFirstToggleVisualState = getDataValueFormatting()

    // Verify checkbox changed (visual may or may not change depending on data)
    expect(commasFirstToggleCheckboxState).not.toBe(commasInitialCheckboxState)
    // Note: Visual change is optional for commas (depends on number size)

    // Second toggle: return to original state
    await userEvent.click(commasCheckbox)
    await new Promise(resolve => setTimeout(resolve, 100))
    const commasSecondToggleCheckboxState = commasCheckbox.checked
    const commasSecondToggleVisualState = getDataValueFormatting()

    // Verify checkbox and visual state returned to original
    expect(commasSecondToggleCheckboxState).toBe(commasInitialCheckboxState)
    expect(commasSecondToggleVisualState).toEqual(commasInitialVisualState)

    // ============================================================================
    // TEST 8: Ignore Zeros Toggle (comprehensive boolean testing)
    // Expectation: Checkbox toggles in both directions regardless of visual impact
    // ============================================================================
    const ignoreZerosCheckbox = canvasElement.querySelector('input[name="ignoreZeros"]') as HTMLInputElement
    expect(ignoreZerosCheckbox).toBeTruthy()

    // Test ignore zeros checkbox with visual validation (data calculation may change)
    const ignoreZerosInitialCheckboxState = ignoreZerosCheckbox.checked
    const ignoreZerosInitialVisualState = getDataValueFormatting()

    // First toggle: change to opposite state
    await userEvent.click(ignoreZerosCheckbox)
    await new Promise(resolve => setTimeout(resolve, 100))
    const ignoreZerosFirstToggleCheckboxState = ignoreZerosCheckbox.checked
    const ignoreZerosFirstToggleVisualState = getDataValueFormatting()

    // Verify checkbox changed (visual may or may not change depending on data)
    expect(ignoreZerosFirstToggleCheckboxState).not.toBe(ignoreZerosInitialCheckboxState)
    // Note: Visual change is optional for ignoreZeros (depends on whether zeros exist in data)

    // Second toggle: return to original state
    await userEvent.click(ignoreZerosCheckbox)
    await new Promise(resolve => setTimeout(resolve, 100))
    const ignoreZerosSecondToggleCheckboxState = ignoreZerosCheckbox.checked
    const ignoreZerosSecondToggleVisualState = getDataValueFormatting()

    // Verify checkbox and visual state returned to original
    expect(ignoreZerosSecondToggleCheckboxState).toBe(ignoreZerosInitialCheckboxState)
    expect(ignoreZerosSecondToggleVisualState).toEqual(ignoreZerosInitialVisualState)
  }
}

// ============================================================================
// TEST 4: Data Point Filters Functionality
// Expectation: Filter controls preserve empty, configured, and removed states and update the displayed metric.
// ============================================================================
export const DataPointFiltersSectionTests: Story = {
  args: {
    configUrl: '/packages/data-bite/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Data')
    const addFilterButton = canvas.getByRole('button', { name: 'Add Filter' })
    const isFiltersSectionVisible = () => {
      let element: HTMLElement | null = addFilterButton
      while (element) {
        const style = getComputedStyle(element)
        if (element.hidden || style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
          return false
        }
        element = element.parentElement
      }
      return true
    }
    await performAndAssert(
      'Open Data Accordion for Filters',
      isFiltersSectionVisible,
      async () => {},
      (_before, after) => after
    )

    const initialDisplayValue = getDisplayValue(canvasElement)
    await expect(canvas.getByText('There are currently no filters.')).toBeVisible()
    await expect(canvas.queryByLabelText('Column Name')).not.toBeInTheDocument()
    await expect(canvas.queryByLabelText('Column Value')).not.toBeInTheDocument()

    await userEvent.click(addFilterButton)
    await expect(canvas.queryByText('There are currently no filters.')).not.toBeInTheDocument()
    const columnNameSelect = await canvas.findByLabelText('Column Name')
    const columnValueSelect = canvas.getByLabelText('Column Value') as HTMLSelectElement
    await expect(canvas.getByRole('button', { name: 'Remove' })).toBeVisible()

    await performAndAssert(
      'Choose Filter Column',
      () => Array.from(columnValueSelect.options).map(option => option.value),
      async () => await userEvent.selectOptions(columnNameSelect, 'Coverage Status'),
      (before, after) =>
        before.length === 1 &&
        after.includes('Insured') &&
        after.includes('Uninsured') &&
        after.indexOf('Insured') < after.indexOf('Uninsured')
    )

    await performAndAssert(
      'Choose Filter Value',
      () => getDisplayValue(canvasElement),
      async () => await userEvent.selectOptions(columnValueSelect, 'Uninsured'),
      (before, after) => before === initialDisplayValue && after !== before
    )

    await performAndAssert(
      'Remove Filter',
      () => getDisplayValue(canvasElement),
      async () => await userEvent.click(canvas.getByRole('button', { name: 'Remove' })),
      (before, after) => before !== initialDisplayValue && after === initialDisplayValue
    )
    await expect(canvas.getByText('There are currently no filters.')).toBeVisible()
    await expect(canvas.queryByLabelText('Column Name')).not.toBeInTheDocument()
    await expect(canvas.queryByLabelText('Column Value')).not.toBeInTheDocument()
  }
}

// ============================================================================
// TEST 5: Trend Indicator Functionality
// Expectation: Trend controls preserve their conditional UI and rendered arrow behavior.
// ============================================================================
export const TrendIndicatorSectionTests: Story = {
  args: {
    config: TrendArrowConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    const trendModeSelect = canvas.getByLabelText('Trend Mode') as HTMLSelectElement
    const isTrendSectionVisible = () => {
      let element: HTMLElement | null = trendModeSelect
      while (element) {
        const style = getComputedStyle(element)
        if (element.hidden || style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
          return false
        }
        element = element.parentElement
      }
      return true
    }
    await performAndAssert(
      'Open Data Accordion',
      isTrendSectionVisible,
      async () => {
        if (!isTrendSectionVisible()) {
          await openAccordion(canvas, 'Data')
        }
      },
      (_before, after) => after
    )

    const dataFunctionSelect = canvas.getByLabelText('Data Function') as HTMLSelectElement
    const dataColumnSelect = canvas.getByLabelText('Data Column') as HTMLSelectElement
    const trendColumnSelect = canvas.getByLabelText(/Trend Column/) as HTMLSelectElement

    await expect(trendModeSelect).toHaveValue('numeric')
    await expect(dataFunctionSelect).toHaveValue('Mean (Average)')
    await expect(trendColumnSelect).toBeVisible()
    await expect(canvas.getByLabelText(/Threshold/)).toBeVisible()
    await expect(canvas.getByLabelText('Show indicator for no change')).toBeVisible()
    await waitForPresence('.cove-trend-arrow', canvasElement)

    const upLabelInput = canvas.getByLabelText('Up Label') as HTMLInputElement
    await performAndAssert(
      'Numeric Trend Label Update',
      () => canvasElement.querySelector('.cove-trend-arrow__label')?.textContent || '',
      async () => {
        await userEvent.clear(upLabelInput)
        await userEvent.type(upLabelInput, 'Increasing')
      },
      (_before, after) => after === 'Increasing'
    )

    await performAndAssert(
      'Trend Column Change Removes Arrow',
      () => Boolean(canvasElement.querySelector('.cove-trend-arrow')),
      async () => await userEvent.selectOptions(trendColumnSelect, 'Rate'),
      (before, after) => before && !after
    )
    await performAndAssert(
      'Trend Column Restore Shows Arrow',
      () => Boolean(canvasElement.querySelector('.cove-trend-arrow')),
      async () => await userEvent.selectOptions(trendColumnSelect, 'oldrate'),
      (before, after) => !before && after
    )

    await performAndAssert(
      'Numeric Down Arrow',
      () => Boolean(canvas.queryByRole('img', { name: 'Trend down' })),
      async () => {
        await userEvent.selectOptions(dataColumnSelect, 'oldrate')
        await userEvent.selectOptions(trendColumnSelect, 'Rate')
      },
      (_before, after) => after
    )
    const downLabelInput = canvas.getByLabelText('Down Label') as HTMLInputElement
    await performAndAssert(
      'Numeric Down Label Update',
      () => canvasElement.querySelector('.cove-trend-arrow__label')?.textContent || '',
      async () => {
        await userEvent.clear(downLabelInput)
        await userEvent.type(downLabelInput, 'Decreasing')
      },
      (_before, after) => after === 'Decreasing'
    )
    await userEvent.selectOptions(dataColumnSelect, 'Rate')
    await userEvent.selectOptions(trendColumnSelect, 'Rate')
    await waitForAbsence('.cove-trend-arrow', canvasElement)

    const showNoChangeCheckbox = canvas.getByLabelText('Show indicator for no change') as HTMLInputElement
    await performAndAssert(
      'Show No Change Arrow',
      () => Boolean(canvas.queryByRole('img', { name: 'Trend flat' })),
      async () => await userEvent.click(showNoChangeCheckbox),
      (_before, after) => after
    )
    const noChangeLabelInput = await canvas.findByLabelText('No Change Label')
    await performAndAssert(
      'No Change Label Update',
      () => canvasElement.querySelector('.cove-trend-arrow__label')?.textContent || '',
      async () => {
        await userEvent.clear(noChangeLabelInput)
        await userEvent.type(noChangeLabelInput, 'Stable')
      },
      (_before, after) => after === 'Stable'
    )
    await performAndAssert(
      'Hide No Change Arrow',
      () => Boolean(canvasElement.querySelector('.cove-trend-arrow')),
      async () => await userEvent.click(showNoChangeCheckbox),
      (before, after) => before && !after
    )
    await expect(canvas.queryByLabelText('No Change Label')).not.toBeInTheDocument()

    await userEvent.selectOptions(trendColumnSelect, 'oldrate')
    await waitForPresence('.cove-trend-arrow', canvasElement)
    const trendDescriptionInput = canvas.getByLabelText('Trend description') as HTMLInputElement
    await performAndAssert(
      'Trend Description Update',
      () => canvasElement.querySelector('.cdc-callout__trend-footer-label')?.textContent || '',
      async () => {
        await userEvent.clear(trendDescriptionInput)
        await userEvent.type(trendDescriptionInput, '(compared with prior period)')
      },
      (_before, after) => after === '(compared with prior period)'
    )

    const thresholdInput = canvas.getByLabelText(/Threshold/) as HTMLInputElement
    await performAndAssert(
      'Numeric Threshold Hides Arrow',
      () => Boolean(canvasElement.querySelector('.cove-trend-arrow')),
      async () => {
        await userEvent.clear(thresholdInput)
        await userEvent.type(thresholdInput, '1')
      },
      (before, after) => before && !after
    )

    await userEvent.selectOptions(trendModeSelect, '')
    await expect(canvas.queryByLabelText(/Trend Column/)).not.toBeInTheDocument()
    await expect(canvas.queryByLabelText(/Threshold/)).not.toBeInTheDocument()

    await userEvent.selectOptions(dataFunctionSelect, 'Pass Through')
    await userEvent.selectOptions(trendModeSelect, 'categorical')
    const categoricalTrendColumnSelect = await canvas.findByLabelText(/Trend Column/)
    await userEvent.selectOptions(categoricalTrendColumnSelect, 'oldrate')
    await expect(canvas.queryByLabelText(/Threshold/)).not.toBeInTheDocument()

    const sourceValueRow = Array.from(canvasElement.querySelectorAll('.cove-accordion__panel-row')).find(
      row => row.querySelector('.cove-accordion__panel-col')?.textContent?.trim() === '7'
    ) as HTMLElement
    await expect(sourceValueRow).toBeTruthy()
    await performAndAssert(
      'Categorical Arrow Mapping',
      () => canvasElement.querySelector('.cove-trend-arrow__label')?.textContent || '',
      async () => await userEvent.selectOptions(within(sourceValueRow).getByRole('combobox'), 'down'),
      (_before, after) => after === 'Decreasing'
    )

    const addMappingButton = canvas.getByRole('button', { name: 'Add Trend Mapping' })
    await userEvent.click(addMappingButton)
    const customMappingInput = await canvas.findByPlaceholderText('Enter value')
    await userEvent.type(customMappingInput, 'Custom trend')
    await userEvent.click(canvas.getByTitle('Remove mapping'))
    await waitForAbsence('input[placeholder="Enter value"]', canvasElement)

    await userEvent.selectOptions(dataFunctionSelect, 'Count')
    await userEvent.selectOptions(trendModeSelect, 'numeric')
    await expect(
      await canvas.findByText('Numeric mode only supports Sum, Mean (Average), Median, Min, and Max.')
    ).toBeVisible()
    await expect(canvas.queryByLabelText(/Trend Column/)).not.toBeInTheDocument()
  }
}

// ============================================================================
// TEST 6: Data-Driven Colors Functionality
// Expectation: Data color controls preserve conditional UI and rendered callout colors.
// ============================================================================
export const DataDrivenColorsSectionTests: Story = {
  args: {
    config: DataColorsConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    const colorColumnSelect = canvas.getByLabelText(/Color Column/) as HTMLSelectElement
    const isDataColorsSectionVisible = () => {
      let element: HTMLElement | null = colorColumnSelect
      while (element) {
        const style = getComputedStyle(element)
        if (element.hidden || style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
          return false
        }
        element = element.parentElement
      }
      return true
    }
    await performAndAssert(
      'Open Data-Driven Colors Accordion',
      isDataColorsSectionVisible,
      async () => {
        if (!isDataColorsSectionVisible()) {
          await openAccordion(canvas, 'Data-Driven Colors')
        }
      },
      (_before, after) => after
    )

    const callout = canvasElement.querySelector('.cdc-callout') as HTMLElement
    const getCalloutColorState = () => ({
      hasDataColorClass: callout.classList.contains('cdc-callout--data-color'),
      backgroundColor: getComputedStyle(callout).backgroundColor,
      textColor: getComputedStyle(callout).color
    })

    await expect(colorColumnSelect).toHaveValue('Status')
    await expect(canvas.getByRole('button', { name: 'Add Color Mapping' })).toBeVisible()
    await expect(callout).toHaveClass('cdc-callout--data-color')

    await performAndAssert(
      'Clear Color Column',
      getCalloutColorState,
      async () => await userEvent.selectOptions(colorColumnSelect, ''),
      (before, after) =>
        before.hasDataColorClass &&
        !after.hasDataColorClass &&
        before.backgroundColor !== after.backgroundColor &&
        before.textColor !== after.textColor
    )
    await expect(canvas.queryByRole('button', { name: 'Add Color Mapping' })).not.toBeInTheDocument()
    await expect(canvasElement.querySelectorAll('.cove-accordion__panel-row')).toHaveLength(0)

    await performAndAssert(
      'Restore Color Column',
      getCalloutColorState,
      async () => await userEvent.selectOptions(colorColumnSelect, 'Status'),
      (before, after) =>
        !before.hasDataColorClass &&
        after.hasDataColorClass &&
        before.backgroundColor !== after.backgroundColor &&
        before.textColor !== after.textColor
    )

    const mappingRows = Array.from(canvasElement.querySelectorAll('.cove-accordion__panel-row'))
    await expect(mappingRows.map(row => row.querySelector('.cove-accordion__panel-col')?.textContent?.trim())).toEqual([
      'Critical',
      'High',
      'Low',
      'Medium'
    ])
    const highRow = mappingRows.find(
      row => row.querySelector('.cove-accordion__panel-col')?.textContent?.trim() === 'High'
    ) as HTMLElement
    await expect(highRow).toBeTruthy()

    await userEvent.click(within(highRow).getByRole('button', { name: '#f45b53' }))
    await performAndAssert(
      'Change Active Data Color',
      getCalloutColorState,
      async () => await userEvent.click(canvas.getByRole('option', { name: '#a03169' })),
      (before, after) =>
        after.hasDataColorClass &&
        before.backgroundColor !== after.backgroundColor &&
        before.textColor !== after.textColor
    )

    await userEvent.click(within(highRow).getByRole('button', { name: '#a03169' }))
    await performAndAssert(
      'Remove Active Data Color',
      getCalloutColorState,
      async () => await userEvent.click(canvas.getByRole('option', { name: 'None' })),
      (before, after) =>
        before.hasDataColorClass &&
        !after.hasDataColorClass &&
        before.backgroundColor !== after.backgroundColor &&
        before.textColor !== after.textColor
    )

    await userEvent.click(within(highRow).getByRole('button', { name: 'Select color' }))
    await performAndAssert(
      'Restore Active Data Color',
      getCalloutColorState,
      async () => await userEvent.click(canvas.getByRole('option', { name: '#f45b53' })),
      (before, after) =>
        !before.hasDataColorClass &&
        after.hasDataColorClass &&
        before.backgroundColor !== after.backgroundColor &&
        before.textColor !== after.textColor
    )

    await userEvent.click(canvas.getByRole('button', { name: 'Add Color Mapping' }))
    const customMappingInput = await canvas.findByPlaceholderText('Enter value')
    await userEvent.type(customMappingInput, 'Custom status')
    await userEvent.click(canvas.getByTitle('Remove mapping'))
    await waitForAbsence('input[placeholder="Enter value"]', canvasElement)
  }
}

// ============================================================================
// TEST 7: Non-TP5 Visual Section Functionality
// Expectation: DataBite sizing controls and shared border integration change rendered output.
// ============================================================================
export const VisualSectionTests: Story = {
  args: {
    config: VisualSectionConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')

    const biteFontSizeInput = canvas.getByLabelText('Bite Font Size')
    await performAndAssert(
      'Bite Font Size Change',
      () => (canvasElement.querySelector('.bite-value') as HTMLElement).style.fontSize,
      async () => {
        await userEvent.clear(biteFontSizeInput)
        await userEvent.type(biteFontSizeInput, '42')
      },
      (before, after) => before === '36px' && after === '42px'
    )

    const overallFontSizeSelect = canvas.getByLabelText('Overall Font Size')
    await performAndAssert(
      'Overall Font Size Change',
      () => ({
        medium: canvasElement.querySelector('.cove-visualization.type-data-bite')?.classList.contains('font-medium'),
        large: canvasElement.querySelector('.cove-visualization.type-data-bite')?.classList.contains('font-large')
      }),
      async () => await userEvent.selectOptions(overallFontSizeSelect, 'large'),
      (before, after) => before.medium && !before.large && !after.medium && after.large
    )

    const displayBorderCheckbox = canvas.getByLabelText('Display Border')
    await performAndAssert(
      'Shared Display Border Integration',
      () => canvasElement.querySelector('.cove-visualization__body')?.classList.contains('no-borders') ?? false,
      async () => await userEvent.click(displayBorderCheckbox),
      (before, after) => !before && after
    )
  }
}

// ============================================================================
// TEST 8: TP5 Visual Section Functionality
// Expectation: Shared white-background and DataBite wrapping controls change rendered layout.
// ============================================================================
export const Tp5VisualSectionTests: Story = {
  args: {
    config: Tp5VisualSectionConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')

    const whiteBackgroundCheckbox = canvas.getByLabelText('Use White Background Style')
    await performAndAssert(
      'Shared TP5 White Background Integration',
      () => ({
        whiteBackground: canvasElement
          .querySelector('.cove-visualization__body')
          ?.classList.contains('white-background-style'),
        hasFlag: Boolean(canvasElement.querySelector('.cdc-callout__flag'))
      }),
      async () => await userEvent.click(whiteBackgroundCheckbox),
      (before, after) => !before.whiteBackground && before.hasFlag && after.whiteBackground && !after.hasFlag
    )

    const valueAboveMessageCheckbox = canvas.getByLabelText('Value Above Message')
    await performAndAssert(
      'Value Above Message Layout',
      () => ({
        useWrap: canvasElement.querySelector('.cove-visualization__body')?.classList.contains('use-wrap'),
        contentRight: canvasElement
          .querySelector('.cdc-callout__body')
          ?.classList.contains('cdc-callout__body--content-right'),
        contentBelow: canvasElement
          .querySelector('.cdc-callout__body')
          ?.classList.contains('cdc-callout__body--content-below')
      }),
      async () => await userEvent.click(valueAboveMessageCheckbox),
      (before, after) =>
        !before.useWrap &&
        before.contentRight &&
        !before.contentBelow &&
        after.useWrap &&
        !after.contentRight &&
        after.contentBelow
    )
  }
}
