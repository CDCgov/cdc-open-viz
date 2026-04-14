import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import usaStateGradientConfig from './_mock/usa-state-gradient.json'
import multiCountryConfig from './_mock/multi-country.json'
import wastewaterMapSmallMultiplesConfig from './_mock/small_multiples/wastewater-map-small-multiples.json'
import { performAndAssert, waitForEditor, waitForPresence, openAccordion } from '@cdc/core/helpers/testing'

type Story = StoryObj<typeof CdcMap>

const mapMeta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Editor Tests',
  component: CdcMap,
  parameters: {
    layout: 'fullscreen'
  }
}

export default mapMeta

const DEFAULT_ARGS = {
  isEditor: true,
  config: usaStateGradientConfig
}

export const DataTableSectionTests: Story = {
  args: {
    ...DEFAULT_ARGS
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await waitForPresence('.map-container', canvasElement)

    await openAccordion(canvas, 'Data Table')

    // ==========================================================================
    // TEST: Data Table Title
    // ==========================================================================
    const dataTableTitleInput = canvasElement.querySelector('#dataTableTitle') as HTMLInputElement

    await performAndAssert(
      'Data Table Title → Set custom title',
      () => {
        const dataTableHeading = canvasElement.querySelector('.data-table-heading')
        return {
          titleText: dataTableHeading?.textContent?.trim() || ''
        }
      },
      async () => {
        await userEvent.clear(dataTableTitleInput)
        await userEvent.type(dataTableTitleInput, 'State Population Data')
      },
      (before, after) => {
        return after.titleText.includes('State Population Data')
      }
    )

    // ==========================================================================
    // TEST: Wrap Data Table Columns
    // ==========================================================================
    // First expand the data table if it's collapsed
    const dataTableHeadingButton = canvasElement.querySelector('.data-table-heading') as HTMLElement
    const dataTableContainer = canvasElement.querySelector('.data-table-container')
    const isCollapsed = dataTableHeadingButton?.classList.contains('collapsed')
    if (isCollapsed) {
      await userEvent.click(dataTableHeadingButton)
      await new Promise(resolve => setTimeout(resolve, 200))
    }

    const wrapColumnsCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(checkbox => {
      const label = checkbox.closest('label')
      return label?.textContent?.includes('WRAP DATA TABLE COLUMNS')
    }) as HTMLInputElement

    await performAndAssert(
      'Wrap Columns → Toggle wrapping',
      () => {
        const dataTable = canvasElement.querySelector('.data-table')
        const firstCell = dataTable?.querySelector('tbody td')
        const whiteSpace = firstCell ? window.getComputedStyle(firstCell).whiteSpace : ''
        return {
          whiteSpace,
          hasCells: Boolean(firstCell)
        }
      },
      async () => {
        await userEvent.click(wrapColumnsCheckbox)
      },
      (before, after) => {
        // When wrap is enabled, white-space should be 'normal' or 'unset', not 'nowrap'
        return after.hasCells && before.whiteSpace === 'nowrap' && after.whiteSpace !== 'nowrap'
      }
    )

    // ==========================================================================
    // TEST: Show Data Table
    // ==========================================================================
    const showDataTableCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(
      checkbox => {
        const label = checkbox.closest('label')
        return label?.textContent?.includes('Show Data Table') && !label?.textContent?.includes('Non Geographic')
      }
    ) as HTMLInputElement

    await performAndAssert(
      'Show Data Table → Hide data table',
      () => {
        const dataTableContainer = canvasElement.querySelector('.data-table-container')
        const isVisible = dataTableContainer && window.getComputedStyle(dataTableContainer).display !== 'none'
        return {
          isVisible: Boolean(isVisible)
        }
      },
      async () => {
        await userEvent.click(showDataTableCheckbox)
      },
      (before, after) => {
        // Should hide the data table
        return before.isVisible && !after.isVisible
      }
    )

    // Toggle it back on for the next test
    await userEvent.click(showDataTableCheckbox)

    // ==========================================================================
    // TEST: Show Non Geographic Data
    // ==========================================================================
    const showNonGeoDataCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(
      checkbox => {
        const label = checkbox.closest('label')
        return label?.textContent?.includes('Show Non Geographic Data')
      }
    ) as HTMLInputElement

    await performAndAssert(
      'Show Non Geographic Data → Toggle visibility',
      () => {
        const dataTable = canvasElement.querySelector('.data-table')
        const rows = Array.from(dataTable?.querySelectorAll('tbody tr') || [])
        const rowCount = rows.length
        return {
          rowCount
        }
      },
      async () => {
        await userEvent.click(showNonGeoDataCheckbox)
      },
      (before, after) => {
        // Toggling non-geographic data should add rows to the table (overall data object)
        return after.rowCount > before.rowCount
      }
    )

    // ==========================================================================
    // TEST: Index Column Header
    // ==========================================================================
    const indexColumnHeaderInput = Array.from(canvasElement.querySelectorAll('input[type="text"]')).find(input => {
      const label = input.closest('label')
      return label?.textContent?.includes('Index Column Header')
    }) as HTMLInputElement

    await performAndAssert(
      'Index Column Header → Set custom header',
      () => {
        const dataTable = canvasElement.querySelector('.data-table')
        const firstHeader = dataTable?.querySelector('thead th')
        return {
          headerText: firstHeader?.textContent?.trim() || ''
        }
      },
      async () => {
        await userEvent.clear(indexColumnHeaderInput)
        await userEvent.type(indexColumnHeaderInput, 'State/Territory')
      },
      (before, after) => {
        return after.headerText.includes('State/Territory')
      }
    )

    // ==========================================================================
    // TEST: Screen Reader Description
    // ==========================================================================
    const screenReaderDescTextarea = Array.from(canvasElement.querySelectorAll('textarea')).find(textarea => {
      const label = textarea.closest('label')
      return label?.textContent?.includes('Screen Reader Description')
    }) as HTMLTextAreaElement

    await performAndAssert(
      'Screen Reader Description → Set custom description',
      () => {
        const dataTable = canvasElement.querySelector('.data-table')
        const caption = dataTable?.querySelector('caption')
        return {
          captionText: caption?.textContent?.trim() || ''
        }
      },
      async () => {
        await userEvent.clear(screenReaderDescTextarea)
        await userEvent.type(screenReaderDescTextarea, 'Table showing state population data by region')
      },
      (before, after) => {
        return after.captionText.includes('Table showing state population data')
      }
    )

    // ==========================================================================
    // TEST: Limit Table Height
    // ==========================================================================
    const limitHeightCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(checkbox => {
      const label = checkbox.closest('label')
      return label?.textContent?.includes('Limit Table Height')
    }) as HTMLInputElement

    await performAndAssert(
      'Limit Table Height → Enable height limit',
      () => {
        // Check if the "Data Table Height" input field appears (conditional rendering)
        const heightInput = Array.from(canvasElement.querySelectorAll('input[type="number"]')).find(input => {
          const label = input.closest('label')
          return label?.textContent?.includes('Data Table Height')
        })
        return {
          hasHeightInput: Boolean(heightInput)
        }
      },
      async () => {
        await userEvent.click(limitHeightCheckbox)
      },
      (before, after) => {
        // After enabling, the "Data Table Height" input field should appear
        return !before.hasHeightInput && after.hasHeightInput
      }
    )

    // ==========================================================================
    // TEST: Table Cell Min Width
    // ==========================================================================
    const cellMinWidthInput = Array.from(canvasElement.querySelectorAll('input[type="number"]')).find(input => {
      const label = input.closest('label')
      return label?.textContent?.includes('Table Cell Min Width')
    }) as HTMLInputElement

    await performAndAssert(
      'Table Cell Min Width → Set minimum width',
      () => {
        const dataTable = canvasElement.querySelector('.data-table')
        const firstCell = dataTable?.querySelector('thead th')
        const minWidth = firstCell ? window.getComputedStyle(firstCell).minWidth : ''
        return {
          minWidth
        }
      },
      async () => {
        await userEvent.clear(cellMinWidthInput)
        await userEvent.type(cellMinWidthInput, '150')
      },
      (before, after) => {
        // After setting min width to 150px, cells should have minWidth of 150px
        return before.minWidth !== after.minWidth && after.minWidth === '150px'
      }
    )

    // ==========================================================================
    // TEST: Show Download CSV Link
    // ==========================================================================
    const showDownloadCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(checkbox => {
      const label = checkbox.closest('label')
      return label?.textContent?.includes('Show Download CSV Link')
    }) as HTMLInputElement

    // First toggle it off, then back on
    await performAndAssert(
      'Show Download CSV Link → Toggle off',
      () => {
        const downloadLink = Array.from(canvasElement.querySelectorAll('a')).find(link =>
          link.textContent?.includes('Download Data')
        )
        return {
          hasDownloadLink: Boolean(downloadLink)
        }
      },
      async () => {
        await userEvent.click(showDownloadCheckbox)
      },
      (before, after) => {
        // After disabling, the download link should disappear
        return before.hasDownloadLink && !after.hasDownloadLink
      }
    )

    await performAndAssert(
      'Show Download CSV Link → Toggle back on',
      () => {
        const downloadLink = Array.from(canvasElement.querySelectorAll('a')).find(link =>
          link.textContent?.includes('Download Data')
        )
        return {
          hasDownloadLink: Boolean(downloadLink)
        }
      },
      async () => {
        await userEvent.click(showDownloadCheckbox)
      },
      (before, after) => {
        // After re-enabling, the download link should reappear
        return !before.hasDownloadLink && after.hasDownloadLink
      }
    )

    // ==========================================================================
    // TEST: Show Link Below Table
    // ==========================================================================
    const showLinkBelowCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(
      checkbox => {
        const label = checkbox.closest('label')
        return label?.textContent?.includes('Show Link Below Table')
      }
    ) as HTMLInputElement

    // First toggle it off (move link above), then back on (move link below)
    await performAndAssert(
      'Show Link Below Table → Toggle off (move above)',
      () => {
        const dataTableContainer = canvasElement.querySelector('.data-table-container')
        const downloadSection = canvasElement.querySelector('.download-links')
        // Check if download link is positioned after the data table
        const containerRect = dataTableContainer?.getBoundingClientRect()
        const downloadRect = downloadSection?.getBoundingClientRect()
        const isBelow = downloadRect && containerRect && downloadRect.top > containerRect.bottom
        return {
          isBelow: Boolean(isBelow)
        }
      },
      async () => {
        await userEvent.click(showLinkBelowCheckbox)
      },
      (before, after) => {
        // After disabling, download link should move above the table
        return before.isBelow && !after.isBelow
      }
    )

    await performAndAssert(
      'Show Link Below Table → Toggle back on (move below)',
      () => {
        const dataTableContainer = canvasElement.querySelector('.data-table-container')
        const downloadSection = canvasElement.querySelector('.download-links')
        const containerRect = dataTableContainer?.getBoundingClientRect()
        const downloadRect = downloadSection?.getBoundingClientRect()
        const isBelow = downloadRect && containerRect && downloadRect.top > containerRect.bottom
        return {
          isBelow: Boolean(isBelow)
        }
      },
      async () => {
        await userEvent.click(showLinkBelowCheckbox)
      },
      (before, after) => {
        // After re-enabling, download link should move back below the table
        return !before.isBelow && after.isBelow
      }
    )

    // ==========================================================================
    // TEST: Enable Image Download
    // ==========================================================================
    const enableImageDownloadCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(
      checkbox => {
        const label = checkbox.closest('label')
        return label?.textContent?.includes('Enable Image Download')
      }
    ) as HTMLInputElement

    await performAndAssert(
      'Enable Image Download → Enable button',
      () => {
        const downloadImgButton =
          Array.from(canvasElement.querySelectorAll('button')).find(
            btn => btn.textContent?.includes('Download Image') || btn.classList.contains('download-image')
          ) ||
          Array.from(canvasElement.querySelectorAll('a[role="button"]')).find(
            link => link.textContent?.includes('Download Map') && link.textContent?.includes('PNG')
          )
        return {
          hasDownloadImgButton: Boolean(downloadImgButton)
        }
      },
      async () => {
        await userEvent.click(enableImageDownloadCheckbox)
      },
      (before, after) => {
        // After enabling, the download image button should appear
        return !before.hasDownloadImgButton && after.hasDownloadImgButton
      }
    )
  }
}

// =================================================================================================
// Visual Section Tests
// =================================================================================================
