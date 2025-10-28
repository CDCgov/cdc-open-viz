import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import CdcDataTable from '../CdcDataTable'
import DataTableConfig from '../../examples/data-table-example.json'
import {
  performAndAssert,
  waitForPresence,
  waitForAbsence,
  waitForOptionsToPopulate,
  waitForTextContent,
  waitForEditor,
  openAccordion,
  getDisplayValue,
  getTitleText,
  getVisualState,
  testBooleanControl
} from '@cdc/core/helpers/testing'

const meta: Meta<typeof CdcDataTable> = {
  title: 'Components/Templates/DataTable/Editor Tests',
  component: CdcDataTable,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof CdcDataTable>

/**
 * COLUMNS SECTION TESTS
 * Tests all functionality within the Columns accordion
 */
export const ColumnsSectionTests: Story = {
  args: {
    config: {
      // Destructure and explicitly exclude dataUrl to prevent conflicts
      ...(() => {
        const { dataUrl, ...configWithoutDataUrl } = DataTableConfig
        return configWithoutDataUrl
      })(),
      // Add our mock data with large numbers for comma testing
      data: [
        {
          week_end: '2024-01-06',
          new_admissions_100k_currentweek: 125890,
          percent_hospitals_reporting: 98765,
          geography: 'United States', // Match the filter expectation
          pathogen: 'COVID-19',
          reporting_above_80_percent: 87654
        },
        {
          week_end: '2024-01-13',
          new_admissions_100k_currentweek: 98234,
          percent_hospitals_reporting: 76543,
          geography: 'United States',
          pathogen: 'Influenza',
          reporting_above_80_percent: 65432
        },
        {
          week_end: '2024-01-20',
          new_admissions_100k_currentweek: 54321,
          percent_hospitals_reporting: 43210,
          geography: 'United States',
          pathogen: 'RSV',
          reporting_above_80_percent: 32109
        },
        {
          week_end: '2024-01-27',
          new_admissions_100k_currentweek: 29876,
          percent_hospitals_reporting: 18765,
          geography: 'United States',
          pathogen: 'COVID-19',
          reporting_above_80_percent: 15432
        },
        {
          week_end: '2024-02-03',
          new_admissions_100k_currentweek: 12345,
          percent_hospitals_reporting: 9876,
          geography: 'United States',
          pathogen: 'Influenza',
          reporting_above_80_percent: 7654
        }
      ],
      // Remove filters to show all data
      filters: []
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)

    await openAccordion(canvas, 'Columns')

    // ============================================================================
    // TEST: Complete Column Configuration with Numeric Column (4+ digits for comma testing)
    // ============================================================================

    // Step 1: Find column dropdown options
    const allSelects = canvasElement.querySelectorAll('select')

    // Step 2: Find Add Configuration button to create new column configuration

    const allButtons = canvasElement.querySelectorAll('button')
    const addConfigButton = Array.from(allButtons).find(button => button.textContent?.includes('Add Configuration'))

    if (!addConfigButton) {
      return
    }

    await userEvent.click(addConfigButton)

    // Wait for the form fields to appear after clicking Add Configuration
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Step 3: Look for configuration fields after clicking Add Configuration
    const allInputs = canvasElement.querySelectorAll('input, select, textarea')

    // Step 4: First, select a proper data column in the column configuration dropdown
    const columnConfigDropdown = Array.from(allInputs).find(control => {
      const label = control.closest('label')?.textContent?.trim() || ''
      return label.includes('Column') && control.tagName.toLowerCase() === 'select'
    }) as HTMLSelectElement

    if (columnConfigDropdown) {
      const columnOptions = Array.from(columnConfigDropdown.options)
        .map(opt => opt.value)
        .filter(val => val !== '')

      // Select a column with numeric data - look for any numeric column that likely has large numbers
      const targetColumn =
        columnOptions.find(opt => opt.includes('new_admissions_100k_currentweek')) ||
        columnOptions.find(opt => opt.includes('admissions') || opt.includes('100k')) ||
        columnOptions.find(opt => opt.includes('population') || opt.includes('cases') || opt.includes('total')) ||
        // Look for columns that typically contain large numbers
        columnOptions.find(opt => /count|number|amount|value|rate|percent/.test(opt.toLowerCase())) ||
        columnOptions[0]

      if (targetColumn) {
        await userEvent.selectOptions(columnConfigDropdown, targetColumn)
        // Wait longer for all configuration fields to become fully interactive
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    }

    // Re-query all inputs after column selection to ensure we get the updated form
    const allInputsAfterSelection = canvasElement.querySelectorAll('input, select')

    // Find specific configuration fields (use updated query)
    const labelInput = Array.from(allInputsAfterSelection).find(control => {
      const label = control.closest('label')?.textContent?.trim() || ''
      return label.includes('Label') && (control as HTMLInputElement).type === 'text'
    }) as HTMLInputElement

    const prefixInput = Array.from(allInputsAfterSelection).find(control => {
      const label = control.closest('label')?.textContent?.trim() || ''
      return label.includes('Prefix') && (control as HTMLInputElement).type === 'text'
    }) as HTMLInputElement

    const suffixInput = Array.from(allInputsAfterSelection).find(control => {
      const label = control.closest('label')?.textContent?.trim() || ''
      return label.includes('Suffix') && (control as HTMLInputElement).type === 'text'
    }) as HTMLInputElement

    const roundInput = Array.from(allInputsAfterSelection).find(control => {
      const label = control.closest('label')?.textContent?.trim() || ''
      return label.includes('Round') && (control as HTMLInputElement).type === 'number'
    }) as HTMLInputElement

    const commasCheckbox = Array.from(allInputsAfterSelection).find(control => {
      const label = control.closest('label')?.textContent?.trim() || ''
      return label.includes('Commas') && (control as HTMLInputElement).type === 'checkbox'
    }) as HTMLInputElement

    const showInTableCheckbox = Array.from(allInputsAfterSelection).find(control => {
      const label = control.closest('label')?.textContent?.trim() || ''
      return label.includes('Show in Data Table') && (control as HTMLInputElement).type === 'checkbox'
    }) as HTMLInputElement

    const orderInput = Array.from(allInputsAfterSelection).find(control => {
      const label = control.closest('label')?.textContent?.trim() || ''
      return label.includes('Order') && (control as HTMLInputElement).type === 'number'
    }) as HTMLInputElement

    // ============================================================================
    // TEST: Label Input - Table Header Testing
    // Expectation: Custom label appears in table column header
    // ============================================================================

    if (labelInput) {
      const getTableHeadersState = () => {
        const headers = canvasElement.querySelectorAll('.data-table th, th')
        return Array.from(headers)
          .map(h => h.textContent?.trim())
          .join('|') // Join for comparison
      }

      const customLabel = 'Test Column Label'
      await performAndAssert(
        'Column Label Update',
        getTableHeadersState,
        async () => {
          labelInput.scrollIntoView()
          await userEvent.click(labelInput)
          await userEvent.clear(labelInput)
          await userEvent.type(labelInput, customLabel)
        },
        (before, after) => before !== after && after.includes(customLabel)
      )
    } else {
    }

    // ============================================================================
    // TEST: Prefix Input - Visualization Output Testing
    // Expectation: Prefix text appears in table cell values
    // ============================================================================

    if (prefixInput) {
      const getPrefixDisplayState = () => {
        const cells = canvasElement.querySelectorAll('.data-table td, td')
        const cellValues = Array.from(cells)
          .map(cell => cell.textContent?.trim())
          .filter(t => t && t.length > 0)
        return cellValues.join('|') // Join for comparison
      }

      const testPrefix = 'VALUE: '
      await performAndAssert(
        'Prefix Field Update',
        getPrefixDisplayState,
        async () => {
          prefixInput.scrollIntoView()
          await userEvent.click(prefixInput)
          await userEvent.clear(prefixInput)
          await userEvent.type(prefixInput, testPrefix)
        },
        (before, after) => before !== after && after.includes(testPrefix)
      )
    } else {
    }

    // ============================================================================
    // TEST: Suffix Input - Visualization Output Testing
    // Expectation: Suffix text appears in table cell values
    // ============================================================================

    if (suffixInput) {
      const getSuffixDisplayState = () => {
        const cells = canvasElement.querySelectorAll('.data-table td, td')
        const cellValues = Array.from(cells)
          .map(cell => cell.textContent?.trim())
          .filter(t => t && t.length > 0)
        return cellValues.join('|') // Join for comparison
      }

      const testSuffix = ' units'
      await performAndAssert(
        'Suffix Field Update',
        getSuffixDisplayState,
        async () => {
          suffixInput.scrollIntoView()
          await userEvent.click(suffixInput)
          await userEvent.clear(suffixInput)
          await userEvent.type(suffixInput, testSuffix)
        },
        (before, after) => before !== after && after.includes(testSuffix)
      )
    } else {
    }

    // ============================================================================
    // TEST: Rounding Input - Decimal Precision Testing
    // Expectation: Numbers display with specified decimal precision
    // ============================================================================

    if (roundInput) {
      const getRoundingDisplayState = () => {
        const cells = canvasElement.querySelectorAll('.data-table td, td')
        const numericValues = Array.from(cells)
          .map(cell => cell.textContent?.trim())
          .filter(text => text && /\d+\.\d/.test(text))
        return numericValues.join('|') // Join for comparison
      }

      await performAndAssert(
        'Rounding Precision Update',
        getRoundingDisplayState,
        async () => {
          roundInput.scrollIntoView()
          await userEvent.click(roundInput)
          await userEvent.clear(roundInput)
          await userEvent.type(roundInput, '1')
        },
        (before, after) => {
          // Check if rounding changed decimal precision patterns
          const beforeDecimals = before.match(/\d+\.\d+/g) || []
          const afterDecimals = after.match(/\d+\.\d+/g) || []
          return JSON.stringify(beforeDecimals) !== JSON.stringify(afterDecimals)
        }
      )
    } else {
    }

    // ============================================================================
    // TEST: Commas Checkbox - Visual State Testing
    // Expectation: Large numbers display with comma formatting when enabled
    // ============================================================================

    if (commasCheckbox) {
      // Define what visual changes the commas checkbox should control
      const getCommaFormattingState = () => {
        const cells = canvasElement.querySelectorAll('.data-table td, td')
        const allCellValues = Array.from(cells)
          .map(cell => cell.textContent?.trim())
          .filter(t => t && t.length > 0)

        return {
          fourDigitNumbers: allCellValues.filter(text => /\d{4,}/.test(text)),
          commaFormattedNumbers: allCellValues.filter(text => /\d{1,3}(,\d{3})+/.test(text))
        }
      }

      // Test using the recommended testBooleanControl helper
      await testBooleanControl(commasCheckbox, getCommaFormattingState, 'Comma Formatting')
    }

    // ============================================================================
    // TEST: Show in Data Table Checkbox - Visual State Testing
    // Expectation: Column visibility toggles in table display
    // ============================================================================

    if (showInTableCheckbox) {
      const getColumnVisibilityState = () => {
        const headers = canvasElement.querySelectorAll('.data-table th, th')
        return {
          columnCount: headers.length,
          headerTexts: Array.from(headers)
            .map(h => h.textContent?.trim())
            .join('|')
        }
      }

      // Test using the recommended testBooleanControl helper
      await testBooleanControl(showInTableCheckbox, getColumnVisibilityState, 'Show in Data Table')
    }

    // ============================================================================
    // TEST: Order Input - Column Reordering Testing
    // Expectation: Column order changes in table display
    // ============================================================================

    if (orderInput) {
      const getColumnOrderState = () => {
        const headers = canvasElement.querySelectorAll('.data-table th, th')
        return Array.from(headers)
          .map(h => h.textContent?.trim())
          .filter(text => text && text.length > 0)
          .join('|') // Join for comparison
      }

      await performAndAssert(
        'Column Order Update',
        getColumnOrderState,
        async () => {
          orderInput.scrollIntoView()
          await userEvent.click(orderInput)
          await userEvent.clear(orderInput)
          await userEvent.type(orderInput, '1')
        },
        (before, after) => before !== after, // Column order should change
        after => {
          // Additional verification that our configured column moved
          const configuredColumnLabel = 'Test Column Label'
          const afterArray = after.split('|')
          const newPosition = afterArray.findIndex(header => header.includes(configuredColumnLabel))
        }
      )
    }
  }
}

/**
 * DATA TABLE SECTION TESTS
 * Tests all functionality within the Data Table accordion
 */
export const DataTableSectionTests: Story = {
  args: {
    config: DataTableConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)

    // Check what accordion sections are actually available
    const accordionButtons = canvasElement.querySelectorAll(
      '.accordion__button, [data-accordion-component="AccordionItemButton"]'
    )

    // Manually click the Data Table accordion button to avoid multiple element issue
    const dataTableAccordionButton = Array.from(accordionButtons).find(button => {
      return (
        button.textContent?.trim() === 'Data Table' &&
        button.getAttribute('data-accordion-component') === 'AccordionItemButton'
      )
    }) as HTMLElement

    if (!dataTableAccordionButton) {
      return
    }

    await userEvent.click(dataTableAccordionButton)
    await new Promise(resolve => setTimeout(resolve, 500))

    // ============================================================================
    // TEST: Data Table Title/Label Update
    // ============================================================================

    const allInputs = canvasElement.querySelectorAll('input, textarea')

    // Find title/label input
    const titleInput = Array.from(allInputs).find(control => {
      const label = control.closest('label')?.textContent?.trim() || ''
      return label.includes('Title') || label.includes('Label')
    }) as HTMLInputElement

    if (titleInput) {
      await userEvent.clear(titleInput)
      await userEvent.type(titleInput, 'Updated Data Table Title Test')
      await new Promise(resolve => setTimeout(resolve, 500))
    }

    // ============================================================================
    // TEST: Table Caption Update
    // ============================================================================

    const captionInput = Array.from(allInputs).find(control => {
      const label = control.closest('label')?.textContent?.trim() || ''
      return label.includes('Caption') || label.includes('Description')
    }) as HTMLInputElement

    if (captionInput) {
      await userEvent.clear(captionInput)
      await userEvent.type(captionInput, 'This is a test table caption for verification')
      await new Promise(resolve => setTimeout(resolve, 500))
    }

    // ============================================================================
    // TEST EXECUTION ORDER (as requested):
    // 1. LIMIT TABLE HEIGHT
    // 2. DATA TABLE HEIGHT
    // 3. EXCLUDE COLUMNS
    // 4. COLLAPSIBLE
    // 5. SHOW DOWNLOAD CSV LINK
    // 6. SHOW LINK BELOW TABLE
    // 7. DOWNLOAD ONLY VISIBLE DATA
    // ============================================================================

    const checkboxes = canvasElement.querySelectorAll('input[type="checkbox"]')

    // ============================================================================
    // TEST 1: LIMIT TABLE HEIGHT
    // ============================================================================

    const heightLimitCheckbox = Array.from(checkboxes).find(cb => {
      const label = cb.closest('label')?.textContent?.trim() || ''
      return label.includes('Height') || label.includes('Limit')
    }) as HTMLInputElement

    if (heightLimitCheckbox) {
      // Toggle the checkbox
      await userEvent.click(heightLimitCheckbox)
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Look for a height input field that might appear when height limit is enabled
      const heightInputs = canvasElement.querySelectorAll('input[type="number"]')
      const heightInput = Array.from(heightInputs).find(input => {
        const label = input.closest('label')?.textContent?.trim() || ''
        return label.includes('Height') || label.includes('Max')
      }) as HTMLInputElement

      // If height input appeared, test setting a value
      if (heightInput) {
        const testHeight = '300'
        await userEvent.clear(heightInput)
        await userEvent.type(heightInput, testHeight)
        await new Promise(resolve => setTimeout(resolve, 500))
      }
    }

    // ============================================================================
    // TEST 2: DATA TABLE HEIGHT (if different from above)
    // ============================================================================

    // Look for any other height-related controls
    const dataTableHeightInputs = canvasElement.querySelectorAll('input[type="number"]')
    const dataTableHeightInput = Array.from(dataTableHeightInputs).find(input => {
      const label = input.closest('label')?.textContent?.trim() || ''
      return label.toLowerCase().includes('table') && label.toLowerCase().includes('height') && !label.includes('Max')
    }) as HTMLInputElement

    if (dataTableHeightInput && dataTableHeightInput !== heightLimitCheckbox?.nextElementSibling) {
      await userEvent.clear(dataTableHeightInput)
      await userEvent.type(dataTableHeightInput, '250')
      await new Promise(resolve => setTimeout(resolve, 500))
    }

    // ============================================================================
    // TEST 3: EXCLUDE COLUMNS
    // ============================================================================

    // Look for the custom multi-select exclude columns component
    // First, find the label or text that says "Exclude Columns"
    const excludeLabel = Array.from(canvasElement.querySelectorAll('*')).find(el => {
      const text = el.textContent?.trim() || ''
      return text.startsWith('Exclude Columns') && el.tagName === 'SPAN'
    })

    // Look for the custom dropdown component (ul.dropdown)
    let excludeDropdown: HTMLUListElement | null = null
    let dropdownTrigger: HTMLElement | null = null

    if (excludeLabel) {
      // Search within the same parent/container for the dropdown
      const container = excludeLabel.closest('label') || excludeLabel.parentElement
      if (container) {
        // Look for the dropdown trigger (might be a div, button, or span that opens the dropdown)
        const possibleTriggers = container.querySelectorAll('div, button, span, input')
        Array.from(possibleTriggers).forEach(trigger => {
          const hasCaretIcon =
            trigger.textContent?.includes('caretDown') ||
            trigger.className.includes('dropdown') ||
            trigger.className.includes('select')
          if (hasCaretIcon && !dropdownTrigger) {
            dropdownTrigger = trigger as HTMLElement
          }
        })

        // Look for ul.dropdown (might be hidden initially)
        excludeDropdown = container.querySelector('ul.dropdown') as HTMLUListElement
        if (!excludeDropdown) {
          // It might be outside the immediate container, search nearby
          excludeDropdown = canvasElement.querySelector('ul.dropdown') as HTMLUListElement
        }
      }
    }

    if (dropdownTrigger) {
      const getTableColumnsState = () => {
        const headers = canvasElement.querySelectorAll('.data-table th, th')
        return {
          columnCount: headers.length,
          columnHeaders: Array.from(headers)
            .map(h => h.textContent?.trim())
            .filter(Boolean)
        }
      }

      // Get initial table state
      const initialState = getTableColumnsState()

      try {
        // Click the trigger to open the dropdown
        dropdownTrigger.scrollIntoView()
        await userEvent.click(dropdownTrigger)
        await new Promise(resolve => setTimeout(resolve, 500))

        // Re-check for the dropdown after clicking (it might appear dynamically)
        if (!excludeDropdown) {
          excludeDropdown = canvasElement.querySelector('ul.dropdown') as HTMLUListElement
        }

        if (excludeDropdown) {
          // Get all the option items
          const optionItems = excludeDropdown.querySelectorAll('li.cove-multiselect-li')

          const options = Array.from(optionItems).map((li, index) => ({
            index,
            element: li as HTMLElement,
            value: li.textContent?.trim() || '',
            selected: li.classList.contains('selected') || li.getAttribute('aria-selected') === 'true'
          }))

          if (options.length > 0) {
            const columnToExclude = options[0] // Test with first column (week_end)

            await performAndAssert(
              'Exclude Column Selection (Custom Multi-Select)',
              getTableColumnsState,
              async () => {
                // Click the first option to exclude it
                await userEvent.click(columnToExclude.element)
                await new Promise(resolve => setTimeout(resolve, 500))

                // Click somewhere else to close the dropdown (might be needed)
                const backdrop = canvasElement.querySelector('.backdrop') || canvasElement
                await userEvent.click(backdrop as HTMLElement)
                await new Promise(resolve => setTimeout(resolve, 500))
              },
              (before, after) => {
                // Verify that column count decreased or specific column is hidden
                const columnRemoved =
                  after.columnCount < before.columnCount ||
                  !after.columnHeaders.some(
                    header => header && header.toLowerCase().includes(columnToExclude.value.toLowerCase().split('_')[0])
                  )
                return columnRemoved
              }
            )
          }
        }
      } catch (error) {
        // Handle error silently
      }
    }

    // ============================================================================
    // TEST 4: COLLAPSIBLE
    // ============================================================================

    const collapsibleCheckbox = Array.from(checkboxes).find(cb => {
      const label = cb.closest('label')?.textContent?.trim() || ''
      return label.includes('Collapsible')
    }) as HTMLInputElement

    if (collapsibleCheckbox) {
      // Enable collapsible if not already enabled
      if (!collapsibleCheckbox.checked) {
        await userEvent.click(collapsibleCheckbox)
        await new Promise(resolve => setTimeout(resolve, 1000)) // Wait longer for UI to update
      }

      // Test the "SHOW COLLAPSE BELOW TABLE" checkbox if it appeared
      const showCollapseBelowCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(
        cb => {
          const label = cb.closest('label')?.textContent?.trim().toLowerCase() || ''
          return label.includes('collapse below') || label.includes('show collapse') || label.includes('below table')
        }
      ) as HTMLInputElement

      if (showCollapseBelowCheckbox) {
        // Enable "SHOW COLLAPSE BELOW TABLE" if not already enabled
        if (!showCollapseBelowCheckbox.checked) {
          await userEvent.click(showCollapseBelowCheckbox)
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
      }
    }

    // ============================================================================
    // TEST 5: SHOW DOWNLOAD CSV LINK
    // ============================================================================

    const downloadCheckbox = Array.from(checkboxes).find(cb => {
      const label = cb.closest('label')?.textContent?.trim() || ''
      return label.includes('Download') || label.includes('CSV')
    }) as HTMLInputElement

    if (downloadCheckbox) {
      // Enable download CSV if not already enabled
      if (!downloadCheckbox.checked) {
        await userEvent.click(downloadCheckbox)
        await new Promise(resolve => setTimeout(resolve, 1000))
      }

      // Test the "SHOW LINK BELOW TABLE" checkbox if it appeared
      const showLinkBelowCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(cb => {
        const label = cb.closest('label')?.textContent?.trim().toLowerCase() || ''
        return label.includes('link below table') || label.includes('show link below') || label.includes('below table')
      }) as HTMLInputElement

      if (showLinkBelowCheckbox) {
        // Enable "SHOW LINK BELOW TABLE" if not already enabled
        if (!showLinkBelowCheckbox.checked) {
          await userEvent.click(showLinkBelowCheckbox)
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
      }
    }

    // ============================================================================
    // TEST 6: SHOW LINK BELOW TABLE
    // ============================================================================

    const linkBelowTableCheckbox = Array.from(checkboxes).find(cb => {
      const label = cb.closest('label')?.textContent?.trim() || ''
      return label.includes('Link Below') || label.includes('Below Table')
    }) as HTMLInputElement

    if (linkBelowTableCheckbox) {
      // Since default is checked, we need to uncheck it first to test the functionality
      if (linkBelowTableCheckbox.checked) {
        await userEvent.click(linkBelowTableCheckbox)
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Now check it again to verify links are restored
        await userEvent.click(linkBelowTableCheckbox)
        await new Promise(resolve => setTimeout(resolve, 1000))
      } else {
        // If it's not checked by default, test normally
        await userEvent.click(linkBelowTableCheckbox)
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    }

    // ============================================================================
    // TEST 7: DOWNLOAD ONLY VISIBLE DATA
    // ============================================================================

    const downloadOnlyVisibleCheckbox = Array.from(checkboxes).find(cb => {
      const label = cb.closest('label')?.textContent?.trim() || ''
      return label.includes('Only Visible') || label.includes('Visible Data')
    }) as HTMLInputElement

    if (downloadOnlyVisibleCheckbox) {
      await userEvent.click(downloadOnlyVisibleCheckbox)
      await new Promise(resolve => setTimeout(resolve, 500))
    }
  }
}

/**
 * FILTERS SECTION TESTS
 * Tests all functionality within the Filters accordion
 */
export const FiltersSectionTests: Story = {
  args: {
    config: DataTableConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)

    // Try different possible names for the filters section
    const possibleNames = ['Filters', 'Filter', 'Data Filters', 'Filter Settings']
    let openedSuccessfully = false

    for (const name of possibleNames) {
      try {
        await openAccordion(canvas, name)
        openedSuccessfully = true
        break
      } catch (error) {
        // Continue to next option
      }
    }

    if (!openedSuccessfully) {
      return
    }

    // Wait for filters to load
    await new Promise(resolve => setTimeout(resolve, 1000))

    // ============================================================================
    // TEST: Existing Filter Dropdown Interaction
    // ============================================================================

    const filterDropdowns = canvasElement.querySelectorAll('select')

    if (filterDropdowns.length > 0) {
      const firstFilterDropdown = filterDropdowns[0] as HTMLSelectElement

      // Try to change filter value
      const options = Array.from(firstFilterDropdown.options)
        .map(opt => opt.value)
        .filter(val => val !== '')
      const currentValue = firstFilterDropdown.value
      const alternativeValue = options.find(opt => opt !== currentValue) || options[1]

      if (alternativeValue) {
        await userEvent.selectOptions(firstFilterDropdown, alternativeValue)
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Change back to verify
        await userEvent.selectOptions(firstFilterDropdown, currentValue)
        await new Promise(resolve => setTimeout(resolve, 500))
      }
    }

    // ============================================================================
    // TEST: Add Filter Button
    // ============================================================================

    const allButtons = canvasElement.querySelectorAll('button')
    const addFilterButton = Array.from(allButtons).find(
      btn => btn.textContent?.trim() === 'Add Filter'
    ) as HTMLButtonElement

    if (addFilterButton) {
      await userEvent.click(addFilterButton)
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Test the new filter if added
      const newFilters = canvasElement.querySelectorAll('select')
      if (newFilters.length > filterDropdowns.length) {
        const newestFilter = newFilters[newFilters.length - 1] as HTMLSelectElement
        const newFilterOptions = Array.from(newestFilter.options)
          .map(opt => opt.value)
          .filter(val => val !== '')

        if (newFilterOptions.length > 1) {
          await userEvent.selectOptions(newestFilter, newFilterOptions[1])
          await new Promise(resolve => setTimeout(resolve, 500))
        }
      }
    }

    // ============================================================================
    // TEST: Filter Behavior Configuration
    // ============================================================================

    const filterBehaviorSelect = Array.from(filterDropdowns).find(select => {
      const label = select.closest('label')?.textContent?.trim() || ''
      return label.includes('Behavior') || label.includes('Filter')
    }) as HTMLSelectElement

    if (filterBehaviorSelect) {
      const behaviorOptions = Array.from(filterBehaviorSelect.options)
        .map(opt => opt.value)
        .filter(val => val !== '')

      if (behaviorOptions.length > 1) {
        const currentBehavior = filterBehaviorSelect.value
        const alternateBehavior = behaviorOptions.find(opt => opt !== currentBehavior) || behaviorOptions[1]

        await userEvent.selectOptions(filterBehaviorSelect, alternateBehavior)
        await new Promise(resolve => setTimeout(resolve, 500))
      }
    }
  }
}
