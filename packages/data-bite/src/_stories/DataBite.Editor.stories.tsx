import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect, spyOn } from 'storybook/test'
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

const ImagesSectionConfig = {
  ...DefaultConfig,
  biteStyle: 'title',
  bitePosition: 'Left',
  dataFormat: {
    ...DefaultConfig.dataFormat,
    commas: false
  },
  imageData: {
    display: 'none',
    url: '',
    alt: '',
    options: []
  }
}

const ImagesSectionIneligibleConfig = {
  ...ImagesSectionConfig,
  biteStyle: 'split'
}

const DataSectionConfig = {
  ...DefaultConfig,
  biteStyle: 'split',
  data: [
    { Primary: 1000, Secondary: 1200 },
    { Primary: 2000, Secondary: 2400 },
    { Primary: 0, Secondary: 0 }
  ],
  dataColumn: 'Primary',
  dataFunction: 'Mean (Average)',
  dataFormat: {
    prefix: '',
    suffix: '',
    roundToPlace: 2,
    commas: false,
    ignoreZeros: false
  }
}

const MarkupVariablesSectionConfig = {
  ...DefaultConfig,
  biteStyle: 'split',
  data: [
    { Category: 'Total', Value: 1234 },
    { Category: 'Other', Value: 5678 }
  ],
  dataColumn: 'Value',
  dataFunction: 'Pass Through',
  biteBody: 'Reported value: {{reported-value}}',
  enableMarkupVariables: false,
  markupVariables: [
    {
      name: 'Reported Value',
      tag: '{{reported-value}}',
      sourceType: 'column',
      columnName: 'Value',
      conditions: [],
      selectionMode: 'first'
    }
  ]
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
    await expect(canvas.getByRole('button', { name: 'Markup Variables' })).toBeVisible()

    const advancedOptionsToggle = canvasElement.querySelector('.advanced-toggle-link') as HTMLElement
    await expect(advancedOptionsToggle).toBeVisible()
    await userEvent.click(advancedOptionsToggle)
    const applyAdvancedConfigButton = canvas.getByRole('button', { name: 'Apply Configuration Changes' })
    await expect(applyAdvancedConfigButton).toBeVisible()
    await expect(canvas.getByRole('link', { name: /Get Help with Data Bite/ })).toBeVisible()

    const titleElement = canvasElement.querySelector('.cove-visualization__header') as HTMLElement
    await expect(titleElement).toBeVisible()
    await expect(titleElement).toHaveTextContent('Test Data Bite Title')
    await userEvent.dblClick(canvasElement.querySelector('#title_display') as HTMLElement)
    const advancedTitleInput = canvasElement.querySelector('#title_textarea') as HTMLTextAreaElement
    await userEvent.clear(advancedTitleInput)
    await userEvent.type(advancedTitleInput, 'Advanced Editor Title')
    await userEvent.keyboard('{Enter}')
    await performAndAssert(
      'Apply Advanced Editor Configuration',
      () => titleElement.textContent?.trim() || '',
      async () => await userEvent.click(applyAdvancedConfigButton),
      (before, after) => before === 'Test Data Bite Title' && after === 'Advanced Editor Title'
    )
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
    config: DataSectionConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Data')

    const dataColumnSelect = canvas.getByLabelText('Data Column')
    const isDataSectionVisible = () => {
      let element: HTMLElement | null = dataColumnSelect
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
      isDataSectionVisible,
      async () => {},
      (_before, after) => after
    )
    const getRenderedMetric = () => canvasElement.querySelector('.bite-value')?.textContent?.trim() || ''

    await performAndAssert(
      'Data Column Change',
      getRenderedMetric,
      async () => await userEvent.selectOptions(dataColumnSelect, 'Secondary'),
      (before, after) => before === '1000.00' && after === '1200.00'
    )

    const dataFunctionSelect = canvas.getByLabelText('Data Function')
    await performAndAssert(
      'Data Function Change',
      getRenderedMetric,
      async () => await userEvent.selectOptions(dataFunctionSelect, 'Sum'),
      (before, after) => before === '1200.00' && after === '3600.00'
    )

    const prefixInput = canvas.getByLabelText('Prefix')
    await performAndAssert(
      'Prefix Addition',
      getRenderedMetric,
      async () => await userEvent.type(prefixInput, '$'),
      (before, after) => before === '3600.00' && after === '$3600.00'
    )

    const suffixInput = canvas.getByLabelText('Suffix')
    await performAndAssert(
      'Suffix Addition',
      getRenderedMetric,
      async () => await userEvent.type(suffixInput, ' units'),
      (before, after) => before === '$3600.00' && after === '$3600.00 units'
    )

    const roundInput = canvas.getByLabelText('Round')
    await performAndAssert(
      'Round to Place Change',
      getRenderedMetric,
      async () => {
        await userEvent.clear(roundInput)
        await userEvent.type(roundInput, '0')
      },
      (before, after) => before === '$3600.00 units' && after === '$3600 units'
    )

    const commasCheckbox = canvas.getByLabelText('Add commas')
    await performAndAssert(
      'Commas Formatting',
      getRenderedMetric,
      async () => await userEvent.click(commasCheckbox),
      (before, after) => before === '$3600 units' && after === '$3,600 units'
    )

    await performAndAssert(
      'Prepare Mean for Ignore Zeros',
      getRenderedMetric,
      async () => await userEvent.selectOptions(dataFunctionSelect, 'Mean (Average)'),
      (before, after) => before === '$3,600 units' && after === '$1,200 units'
    )

    const ignoreZerosCheckbox = canvas.getByLabelText('Ignore Zeros')
    await performAndAssert(
      'Ignore Zeros Calculation',
      getRenderedMetric,
      async () => await userEvent.click(ignoreZerosCheckbox),
      (before, after) => before === '$1,200 units' && after === '$1,800 units'
    )
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

// ============================================================================
// TEST 9: Image Section Applicability
// Expectation: Styles outside title/body/graphic do not expose an Image accordion.
// ============================================================================
export const ImagesSectionApplicabilityTests: Story = {
  args: {
    config: ImagesSectionIneligibleConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await expect(canvas.queryByRole('button', { name: /^Images?$/ })).not.toBeInTheDocument()
  }
}

// ============================================================================
// TEST 10: Image Section Functionality
// Expectation: Static and dynamic image controls preserve rendered images and rule authoring behavior.
// ============================================================================
export const ImagesSectionTests: Story = {
  args: {
    config: ImagesSectionConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    const imageAccordionButton = canvas.getByRole('button', { name: /^Images?$/ })
    const imageDisplaySelect = canvas.getByLabelText('Image Display Type')
    const imagePositionSelect = canvas.getByLabelText('Image/Graphic Position')
    const imagePanel = imageDisplaySelect.closest('.cove-accordion__panel') as HTMLElement
    await expect(imagePanel).toBeTruthy()
    const isImageSectionVisible = () => {
      let element: HTMLElement | null = imageDisplaySelect
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
      'Open Image Accordion',
      isImageSectionVisible,
      async () => {
        if (!isImageSectionVisible()) {
          await userEvent.click(imageAccordionButton)
        }
      },
      (_before, after) => after
    )
    await expect(imageDisplaySelect).toBeVisible()
    await expect(imagePositionSelect).toBeVisible()
    await expect(canvas.queryByLabelText('Image URL')).not.toBeInTheDocument()
    await expect(canvas.queryByLabelText('Image URL (default)')).not.toBeInTheDocument()
    await expect(canvasElement.querySelector('.bite-image')).not.toBeInTheDocument()

    await performAndAssert(
      'Show Static Image Fields',
      () => ({
        url: Boolean(canvas.queryByLabelText('Image URL')),
        alt: Boolean(canvas.queryByLabelText('Alt Text'))
      }),
      async () => await userEvent.selectOptions(imageDisplaySelect, 'static'),
      (before, after) => !before.url && !before.alt && after.url && after.alt
    )

    const staticUrl = 'https://example.com/static-image.png'
    const staticAlt = 'Static image description'
    const staticUrlInput = canvas.getByLabelText('Image URL')
    await performAndAssert(
      'Static Image URL',
      () => canvasElement.querySelector('.bite-image')?.getAttribute('src') || '',
      async () => await userEvent.type(staticUrlInput, staticUrl),
      (_before, after) => after === staticUrl
    )

    const staticAltInput = canvas.getByLabelText('Alt Text')
    await performAndAssert(
      'Static Image Alt Text',
      () => canvasElement.querySelector('.bite-image')?.getAttribute('alt') || '',
      async () => await userEvent.type(staticAltInput, staticAlt),
      (_before, after) => after === staticAlt
    )

    await performAndAssert(
      'Static Image Position',
      () => ({
        left: Boolean(canvasElement.querySelector('.bite.bite-left')),
        bottom: Boolean(canvasElement.querySelector('.bite.bite-bottom'))
      }),
      async () => await userEvent.selectOptions(imagePositionSelect, 'Bottom'),
      (before, after) => before.left && !before.bottom && !after.left && after.bottom
    )

    await performAndAssert(
      'Show Dynamic Image Fields',
      () => ({
        defaultUrl: Boolean(canvas.queryByLabelText('Image URL (default)')),
        defaultAlt: Boolean(canvas.queryByLabelText('Alt Text (default)')),
        emptyMessage: Boolean(canvas.queryByText('There are currently no dynamic images.')),
        addButton: Boolean(canvas.queryByRole('button', { name: 'Add Dynamic Image' }))
      }),
      async () => await userEvent.selectOptions(imageDisplaySelect, 'dynamic'),
      (before, after) =>
        !before.defaultUrl &&
        !before.defaultAlt &&
        !before.emptyMessage &&
        !before.addButton &&
        after.defaultUrl &&
        after.defaultAlt &&
        after.emptyMessage &&
        after.addButton
    )

    const dynamicDefaultUrl = 'https://example.com/default-dynamic-image.png'
    const dynamicDefaultAlt = 'Default dynamic image description'
    const dynamicDefaultUrlInput = canvas.getByLabelText('Image URL (default)')
    await performAndAssert(
      'Dynamic Default Image URL',
      () => canvasElement.querySelector('.bite-image')?.getAttribute('src') || '',
      async () => {
        await userEvent.clear(dynamicDefaultUrlInput)
        await userEvent.type(dynamicDefaultUrlInput, dynamicDefaultUrl)
      },
      (before, after) => before === staticUrl && after === dynamicDefaultUrl
    )

    const dynamicDefaultAltInput = canvas.getByLabelText('Alt Text (default)')
    await performAndAssert(
      'Dynamic Default Image Alt Text',
      () => canvasElement.querySelector('.bite-image')?.getAttribute('alt') || '',
      async () => {
        await userEvent.clear(dynamicDefaultAltInput)
        await userEvent.type(dynamicDefaultAltInput, dynamicDefaultAlt)
      },
      (before, after) => before === staticAlt && after === dynamicDefaultAlt
    )

    await performAndAssert(
      'Add Dynamic Image',
      () => ({
        rows: imagePanel.querySelectorAll('fieldset.edit-block').length,
        emptyMessage: Boolean(canvas.queryByText('There are currently no dynamic images.'))
      }),
      async () => await userEvent.click(canvas.getByRole('button', { name: 'Add Dynamic Image' })),
      (before, after) => before.rows === 0 && before.emptyMessage && after.rows === 1 && !after.emptyMessage
    )

    const getDynamicImageFieldset = () => canvas.getByText('Image #1').closest('fieldset') as HTMLFieldSetElement
    const dynamicImageFieldset = getDynamicImageFieldset()
    await expect(dynamicImageFieldset).toBeTruthy()
    await performAndAssert(
      'Author First Dynamic Condition',
      () => ({
        operator: getDynamicImageFieldset().querySelectorAll('select')[0].value,
        threshold: (getDynamicImageFieldset().querySelectorAll('input[type="number"]')[0] as HTMLInputElement).value
      }),
      async () => {
        await userEvent.selectOptions(getDynamicImageFieldset().querySelectorAll('select')[0], '>')
        await userEvent.type(getDynamicImageFieldset().querySelectorAll('input[type="number"]')[0], '100')
      },
      (before, after) =>
        before.operator === '<' && before.threshold === '' && after.operator === '>' && after.threshold === '100'
    )

    const dynamicSource = 'https://example.com/matched-dynamic-image.png'
    const dynamicAlt = 'Matched dynamic image description'
    const dynamicTextInputs = dynamicImageFieldset.querySelectorAll('input[type="text"]')
    const dynamicSourceInput = dynamicTextInputs[0]
    const dynamicAltInput = dynamicTextInputs[1]
    await expect(dynamicTextInputs).toHaveLength(2)
    await performAndAssert(
      'Dynamic Image Source',
      () => canvasElement.querySelector('.bite-image')?.getAttribute('src') || '',
      async () => await userEvent.type(dynamicSourceInput, dynamicSource),
      (_before, after) => after === dynamicSource
    )
    await performAndAssert(
      'Dynamic Image Alt Text',
      () => canvasElement.querySelector('.bite-image')?.getAttribute('alt') || '',
      async () => await userEvent.type(dynamicAltInput, dynamicAlt),
      (before, after) => before === dynamicDefaultAlt && after === dynamicAlt
    )

    const thenAndSelect = getDynamicImageFieldset().querySelectorAll('select')[1]
    await performAndAssert(
      'Add Second Dynamic Condition',
      () => ({
        selects: getDynamicImageFieldset().querySelectorAll('select').length,
        thresholds: getDynamicImageFieldset().querySelectorAll('input[type="number"]').length,
        thenLabel: Boolean(getDynamicImageFieldset().querySelector('.accordion__panel-row.text-capitalize'))
      }),
      async () => await userEvent.selectOptions(thenAndSelect, 'and'),
      (before, after) =>
        before.selects === 2 &&
        before.thresholds === 1 &&
        !before.thenLabel &&
        after.selects === 3 &&
        after.thresholds === 2 &&
        after.thenLabel
    )

    await performAndAssert(
      'Author Second Dynamic Condition',
      () => ({
        operator: getDynamicImageFieldset().querySelectorAll('select')[2].value,
        threshold: (getDynamicImageFieldset().querySelectorAll('input[type="number"]')[1] as HTMLInputElement).value
      }),
      async () => {
        await userEvent.selectOptions(getDynamicImageFieldset().querySelectorAll('select')[2], '>')
        await userEvent.type(getDynamicImageFieldset().querySelectorAll('input[type="number"]')[1], '100')
      },
      (before, after) =>
        before.operator === '<' && before.threshold === '' && after.operator === '>' && after.threshold === '100'
    )

    const secondConditionModeSelect = getDynamicImageFieldset().querySelectorAll('select')[1]
    await expect(within(secondConditionModeSelect).getByRole('option', { name: 'Then' })).toHaveValue('then')
    await expect(within(secondConditionModeSelect).getByRole('option', { name: 'And' })).toHaveValue('and')
    await userEvent.selectOptions(secondConditionModeSelect, 'then')

    await performAndAssert(
      'Remove Dynamic Image',
      () => ({
        rows: imagePanel.querySelectorAll('fieldset.edit-block').length,
        emptyMessage: Boolean(canvas.queryByText('There are currently no dynamic images.')),
        source: canvasElement.querySelector('.bite-image')?.getAttribute('src') || '',
        alt: canvasElement.querySelector('.bite-image')?.getAttribute('alt') || ''
      }),
      async () => await userEvent.click(within(getDynamicImageFieldset()).getByRole('button', { name: 'Remove' })),
      (before, after) =>
        before.rows === 1 &&
        !before.emptyMessage &&
        before.source === dynamicSource &&
        before.alt === dynamicAlt &&
        after.rows === 0 &&
        after.emptyMessage &&
        after.source === dynamicDefaultUrl &&
        after.alt === dynamicDefaultAlt
    )
  }
}

// ============================================================================
// TEST 11: Markup Variables Section Functionality
// Expectation: Enablement, column conditions, formatting, and authoring controls remain wired to rendered content.
// ============================================================================
export const MarkupVariablesSectionTests: Story = {
  args: {
    config: MarkupVariablesSectionConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Markup Variables')

    const enableMarkupVariablesCheckbox = canvas.getByLabelText('Enable Markup Variables')
    const getRenderedMessage = () =>
      (canvasElement.querySelector('.bite-text')?.textContent?.trim() || '').replace(/\s+/g, ' ')
    await expect(canvas.queryByRole('button', { name: /Add Variable/ })).not.toBeInTheDocument()
    await performAndAssert(
      'Enable Markup Variables',
      getRenderedMessage,
      async () => await userEvent.click(enableMarkupVariablesCheckbox),
      (before, after) => before === 'Reported value: {{reported-value}}' && after === 'Reported value: 1234'
    )

    await expect(canvas.getByText(/Use variables in your content with/)).toBeVisible()
    const addVariableButton = canvas.getByRole('button', { name: /Add Variable/ })
    await expect(addVariableButton).toBeVisible()
    const reportedValueCard = canvas.getByText('Reported Value').closest('.variable-item') as HTMLElement
    await expect(reportedValueCard).toBeTruthy()
    await userEvent.click(within(reportedValueCard).getByRole('button', { name: 'Edit' }))

    await expect(within(reportedValueCard).getByRole('button', { name: 'Close' })).toBeVisible()
    await expect(within(reportedValueCard).getByRole('button', { name: 'Basic Settings' })).toBeVisible()
    await expect(within(reportedValueCard).getByRole('button', { name: 'Conditions' })).toBeVisible()
    await expect(within(reportedValueCard).getByRole('button', { name: 'Formatting Options' })).toBeVisible()
    await expect(within(reportedValueCard).getByRole('button', { name: 'Delete Variable' })).toBeVisible()
    await userEvent.click(within(reportedValueCard).getByRole('button', { name: 'Close' }))
    await expect(within(reportedValueCard).getByRole('button', { name: 'Edit' })).toBeVisible()
    await expect(within(reportedValueCard).queryByRole('button', { name: 'Basic Settings' })).not.toBeInTheDocument()
    await userEvent.click(within(reportedValueCard).getByRole('button', { name: 'Edit' }))
    await expect(within(reportedValueCard).getByRole('button', { name: 'Close' })).toBeVisible()

    await userEvent.click(within(reportedValueCard).getByRole('button', { name: 'Basic Settings' }))
    await expect(within(reportedValueCard).getByLabelText('Source')).toHaveValue('column')
    await expect(within(reportedValueCard).getByLabelText('Data Column')).toHaveValue('Value')
    const variableNameInput = within(reportedValueCard).getByLabelText('Variable Name')
    await expect(variableNameInput).toHaveValue('Reported Value')
    await expect(within(reportedValueCard).getByLabelText('Tag (auto-generated)')).toHaveValue('{{reported-value}}')

    await userEvent.click(within(reportedValueCard).getByRole('button', { name: 'Formatting Options' }))
    const addCommasCheckbox = within(reportedValueCard).getByLabelText('Format numbers with commas')
    await performAndAssert(
      'Format Markup Number with Commas',
      getRenderedMessage,
      async () => await userEvent.click(addCommasCheckbox),
      (before, after) => before === 'Reported value: 1234' && after === 'Reported value: 1,234'
    )

    const markupRoundInput = within(reportedValueCard).getByLabelText('Round to decimal point')
    await performAndAssert(
      'Round Markup Number',
      getRenderedMessage,
      async () => await userEvent.type(markupRoundInput, '2'),
      (before, after) => before === 'Reported value: 1,234' && after === 'Reported value: 1,234.00'
    )
    await expect(within(reportedValueCard).getByLabelText('Date Parse Format')).toBeVisible()
    await expect(within(reportedValueCard).getByLabelText('Date Display Format')).toBeVisible()
    await expect(within(reportedValueCard).getByLabelText('Hide section when value is null')).toBeVisible()

    await userEvent.click(within(reportedValueCard).getByRole('button', { name: 'Conditions' }))
    const displayAllRowsSelect = reportedValueCard.querySelector('select[name="selectionMode"]') as HTMLSelectElement
    await expect(displayAllRowsSelect).toBeTruthy()
    await expect(displayAllRowsSelect).toHaveValue('no')
    await expect(within(displayAllRowsSelect).getByRole('option', { name: 'Yes' })).toHaveValue('yes')
    await expect(within(displayAllRowsSelect).getByRole('option', { name: 'No' })).toHaveValue('no')

    await userEvent.click(within(reportedValueCard).getByRole('button', { name: /Add Condition/ }))
    const conditionColumnSelect = within(reportedValueCard).getByLabelText('Column')
    const conditionOperatorSelect = within(reportedValueCard).getByLabelText('Operator')
    await expect(conditionOperatorSelect).toHaveValue('is')
    await userEvent.selectOptions(conditionColumnSelect, 'Category')
    const conditionValueSelect = within(reportedValueCard).getByLabelText('Value')
    await performAndAssert(
      'Apply Markup Variable Condition',
      getRenderedMessage,
      async () => await userEvent.selectOptions(conditionValueSelect, 'Other'),
      (before, after) => before === 'Reported value:' && after === 'Reported value: 5,678.00'
    )
    await performAndAssert(
      'Change Markup Condition Operator',
      getRenderedMessage,
      async () => await userEvent.selectOptions(conditionOperatorSelect, 'is not'),
      (before, after) => before === 'Reported value: 5,678.00' && after === 'Reported value: 1,234.00'
    )
    await performAndAssert(
      'Restore Markup Condition Operator',
      getRenderedMessage,
      async () => await userEvent.selectOptions(conditionOperatorSelect, 'is'),
      (before, after) => before === 'Reported value: 1,234.00' && after === 'Reported value: 5,678.00'
    )
    await performAndAssert(
      'Remove Markup Variable Condition',
      getRenderedMessage,
      async () => await userEvent.click(within(reportedValueCard).getByRole('button', { name: 'Remove Condition' })),
      (before, after) => before === 'Reported value: 5,678.00' && after === 'Reported value: 1,234.00'
    )

    await userEvent.click(within(reportedValueCard).getByRole('button', { name: 'Basic Settings' }))
    await performAndAssert(
      'Update Markup Variable Name and Tag',
      getRenderedMessage,
      async () => {
        const currentVariableNameInput = within(reportedValueCard).getByLabelText('Variable Name')
        await userEvent.clear(currentVariableNameInput)
        await userEvent.type(currentVariableNameInput, 'Updated Value')
      },
      (before, after) => before === 'Reported value: 1,234.00' && after === 'Reported value: {{reported-value}}'
    )
    await expect(within(reportedValueCard).getByLabelText('Tag (auto-generated)')).toHaveValue('{{updated-value}}')

    await performAndAssert(
      'Add Markup Variable',
      () => canvasElement.querySelectorAll('.variable-item').length,
      async () => await userEvent.click(addVariableButton),
      (before, after) => before === 1 && after === 2
    )
    const unnamedVariableCard = canvas.getByText('Unnamed Variable').closest('.variable-item') as HTMLElement
    await expect(unnamedVariableCard).toBeTruthy()
    const confirmDelete = spyOn(window, 'confirm').mockReturnValue(true)
    await performAndAssert(
      'Delete Newly Added Markup Variable',
      () => canvasElement.querySelectorAll('.variable-item').length,
      async () => await userEvent.click(within(unnamedVariableCard).getByRole('button', { name: 'Delete Variable' })),
      (before, after) => before === 2 && after === 1
    )
    await expect(confirmDelete).toHaveBeenCalledWith('Are you sure you want to delete the variable "Unnamed Variable"?')
    confirmDelete.mockRestore()
    await expect(canvas.queryByText('Unnamed Variable')).not.toBeInTheDocument()
    await expect(canvas.getByText('Updated Value')).toBeVisible()
  }
}
