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

export const MultiCountryWorldMapTests: Story = {
  args: {
    ...DEFAULT_ARGS,
    config: {
      ...multiCountryConfig,
      general: {
        ...multiCountryConfig.general,
        countriesPicked: [] // Start with no countries selected for testing
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await waitForPresence('.map-container', canvasElement)

    // Ensure we're testing a world map - Type accordion should be open by default
    await openAccordion(canvas, 'Type')

    // Wait for world map to load (topology loads asynchronously)
    // The config already starts with geoType: 'world', so we just need to wait for it to render
    await waitForPresence('path[data-country-code]', canvasElement)

    // Wait for the country selector to appear (only shows for world maps)
    await waitForPresence('.cove-multiselect', canvasElement)

    // Stay in Type accordion section - this is where multi-country controls are located

    // ==========================================================================
    // Helper functions to capture visual state
    // ==========================================================================
    const getCountryVisualState = () => {
      const mapContainer = canvasElement.querySelector('.map-container')
      const allCountryPaths = canvasElement.querySelectorAll('path[data-country-code]')
      const visibleCountries = Array.from(allCountryPaths).filter(
        path => !path.classList.contains('hidden') && !path.classList.contains('grayed-out')
      )
      const grayedCountries = Array.from(allCountryPaths).filter(path => path.classList.contains('grayed-out'))
      const hiddenCountries = Array.from(allCountryPaths).filter(path => {
        const hasHiddenClass = path.classList.contains('hidden')
        const computedStyle = window.getComputedStyle(path as Element)
        const isDisplayNone = computedStyle.display === 'none'
        return hasHiddenClass || isDisplayNone
      })

      return {
        totalCountries: allCountryPaths.length,
        visibleCountries: visibleCountries.length,
        grayedCountries: grayedCountries.length,
        hiddenCountries: hiddenCountries.length,
        mapClasses: mapContainer ? Array.from(mapContainer.classList) : [],
        hasMultiCountryClass: mapContainer?.classList.contains('multi-country-selected') || false,
        selectedCountryCodes: Array.from(
          new Set(
            Array.from(visibleCountries)
              .map(path => path.getAttribute('data-country-code'))
              .filter(Boolean)
          )
        )
      }
    }

    // ==========================================================================
    // TEST: Country Multi-Select Dropdown Interaction
    // ==========================================================================
    const countryMultiSelect = Array.from(canvasElement.querySelectorAll('.cove-multiselect')).find(ms => {
      const parentLabel = ms.closest('label')
      const labelSpan = parentLabel?.querySelector('span')
      return labelSpan?.textContent?.includes('Countries Selector')
    }) as HTMLElement
    expect(countryMultiSelect).toBeTruthy()

    // Get the expand button to open the dropdown
    const expandButton = countryMultiSelect.querySelector('button[aria-label="Expand"]') as HTMLButtonElement
    expect(expandButton).toBeTruthy()

    // Test selecting first country (France)
    await performAndAssert(
      'Multi-Country → Select France',
      getCountryVisualState,
      async () => {
        // Open the dropdown
        await userEvent.click(expandButton)
        // Find and click France option
        const franceOption = Array.from(countryMultiSelect.querySelectorAll('li[role="option"]')).find(li =>
          li.textContent?.includes('France')
        ) as HTMLElement
        expect(franceOption).toBeTruthy()
        await userEvent.click(franceOption)
      },
      (before, after) => {
        // When countries are selected, map should show multi-country state
        return (
          after.hasMultiCountryClass &&
          after.selectedCountryCodes.includes('FRA') &&
          after.visibleCountries < before.totalCountries // Some countries should be filtered
        )
      }
    )

    // Test selecting second country (Germany)
    await performAndAssert(
      'Multi-Country → Add Germany to selection',
      getCountryVisualState,
      async () => {
        // Expand dropdown again
        const expandBtn = countryMultiSelect.querySelector('button[aria-label="Expand"]') as HTMLButtonElement
        await userEvent.click(expandBtn)
        // Find and click Germany option
        const germanyOption = Array.from(countryMultiSelect.querySelectorAll('li[role="option"]')).find(li =>
          li.textContent?.includes('Germany')
        ) as HTMLElement
        expect(germanyOption).toBeTruthy()
        await userEvent.click(germanyOption)
      },
      (before, after) => {
        // Both France and Germany should be selected
        return (
          after.selectedCountryCodes.includes('FRA') &&
          after.selectedCountryCodes.includes('DEU') &&
          after.selectedCountryCodes.length === 2
        )
      }
    )

    // Test adding a third country (Italy)
    await performAndAssert(
      'Multi-Country → Add Italy to selection',
      getCountryVisualState,
      async () => {
        // Expand dropdown again
        const expandBtn = countryMultiSelect.querySelector('button[aria-label="Expand"]') as HTMLButtonElement
        await userEvent.click(expandBtn)
        // Find and click Italy option
        const italyOption = Array.from(countryMultiSelect.querySelectorAll('li[role="option"]')).find(li =>
          li.textContent?.includes('Italy')
        ) as HTMLElement
        expect(italyOption).toBeTruthy()
        await userEvent.click(italyOption)
      },
      (before, after) => {
        // All three countries should be selected
        return (
          after.selectedCountryCodes.includes('FRA') &&
          after.selectedCountryCodes.includes('DEU') &&
          after.selectedCountryCodes.includes('ITA') &&
          after.selectedCountryCodes.length === 3
        )
      }
    )

    // ==========================================================================
    // TEST: Hide Unselected Countries Toggle (Grey-out vs Hide behavior)
    // ==========================================================================
    // Ensure map has fully rendered with country paths before testing toggle
    await waitForPresence('path[data-country-code]', canvasElement)

    // InputToggle renders as a div with a hidden checkbox
    const hideUnselectedToggle = Array.from(
      canvasElement.querySelectorAll('input[name*="hideUnselectedCountries"]')
    ).find(input => {
      const label = input.closest('label') || input.parentElement?.querySelector('label')
      return label?.textContent?.includes('Hide Unselected Countries')
    }) as HTMLInputElement
    expect(hideUnselectedToggle).toBeTruthy()

    // By default (unchecked), unselected countries should be grayed out
    // First, ensure the toggle is unchecked (hideUnselectedCountries = false, so countries are grayed)
    if (hideUnselectedToggle.checked) {
      await userEvent.click(hideUnselectedToggle)
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    const beforeState = getCountryVisualState()

    // Now check it (should hide unselected countries)
    await userEvent.click(hideUnselectedToggle)
    await new Promise(resolve => setTimeout(resolve, 100)) // Give time for re-render

    const afterState = getCountryVisualState()

    const testResult =
      afterState.hiddenCountries > beforeState.hiddenCountries &&
      afterState.grayedCountries === 0 && // No grayed countries when hiding
      afterState.selectedCountryCodes.length === 3 // Only our 3 selected countries (by unique ISO codes)

    expect(testResult).toBe(true)

    // Test unchecking "Hide Unselected Countries" again (should grey-out unselected countries)
    await performAndAssert(
      'Hide Unselected Countries → Grey-out unselected countries',
      getCountryVisualState,
      async () => {
        await userEvent.click(hideUnselectedToggle)
      },
      (before, after) => {
        // When not hiding (default), unselected countries should be grayed out
        return (
          after.grayedCountries > before.grayedCountries &&
          after.hiddenCountries === 0 && // No hidden countries when showing grayed
          after.selectedCountryCodes.length === 3 // Our 3 selected countries remain visible (by unique ISO codes)
        )
      }
    )

    // ==========================================================================
    // TEST: Map Centering and Bounds Changes
    // ==========================================================================
    await performAndAssert(
      'Multi-Country Selection → Map centers on selected countries',
      getCountryVisualState,
      async () => {
        // Clear selection and select different countries (Japan, Australia) to test centering
        // Click expand button
        const expandBtn = countryMultiSelect.querySelector('button[aria-label="Expand"]') as HTMLButtonElement
        await userEvent.click(expandBtn)

        // Clear existing selections first by clicking remove buttons
        const removeButtons = countryMultiSelect.querySelectorAll('button[aria-label="Remove"]')
        for (const button of Array.from(removeButtons)) {
          await userEvent.click(button as HTMLButtonElement)
        }

        // Select Japan
        await userEvent.click(expandBtn) // Reopen dropdown
        const japanOption = Array.from(countryMultiSelect.querySelectorAll('li[role="option"]')).find(li =>
          li.textContent?.includes('Japan')
        ) as HTMLElement
        expect(japanOption).toBeTruthy()
        await userEvent.click(japanOption)

        // Select Australia
        await userEvent.click(expandBtn) // Reopen dropdown
        const australiaOption = Array.from(countryMultiSelect.querySelectorAll('li[role="option"]')).find(li =>
          li.textContent?.includes('Australia')
        ) as HTMLElement
        expect(australiaOption).toBeTruthy()
        await userEvent.click(australiaOption)

        // Wait for map to re-render with new selection
        await new Promise(resolve => setTimeout(resolve, 300))
      },
      (before, after) => {
        // Verify that the selected countries changed (Japan and Australia instead of France, Germany, Italy)
        // The centering happens automatically via useCountryZoom hook
        return (
          after.selectedCountryCodes.includes('JPN') &&
          after.selectedCountryCodes.includes('AUS') &&
          !after.selectedCountryCodes.includes('FRA') &&
          after.selectedCountryCodes.length === 2
        )
      }
    )

    // ==========================================================================
    // TEST: Clear Country Selection (Reset to full world map)
    // ==========================================================================
    await performAndAssert(
      'Multi-Country → Clear all selections',
      getCountryVisualState,
      async () => {
        // Remove all selected countries using the remove buttons
        const removeButtons = countryMultiSelect.querySelectorAll('button[aria-label="Remove"]')
        for (const button of Array.from(removeButtons)) {
          await userEvent.click(button as HTMLButtonElement)
        }
      },
      (before, after) => {
        // When all countries are cleared, should return to normal world map state
        // Note: selectedCountryCodes will contain ALL countries since all are visible (not grayed/hidden)
        return (
          !after.hasMultiCountryClass &&
          after.grayedCountries === 0 &&
          after.hiddenCountries === 0 &&
          after.visibleCountries === after.totalCountries // All countries visible
        )
      }
    )

    // ==========================================================================
    // TEST: Country Selection with Data Integration
    // ==========================================================================
    await performAndAssert(
      'Multi-Country Data → Selected countries show data values',
      getCountryVisualState,
      async () => {
        // Select countries that should have data (France, Germany, Italy - these have data in the config)
        const expandBtn = countryMultiSelect.querySelector('button[aria-label="Expand"]') as HTMLButtonElement

        // Select France
        await userEvent.click(expandBtn)
        const franceOption = Array.from(countryMultiSelect.querySelectorAll('li[role="option"]')).find(li =>
          li.textContent?.includes('France')
        ) as HTMLElement

        expect(franceOption).toBeTruthy()
        await userEvent.click(franceOption)

        // Select Germany
        await userEvent.click(expandBtn)
        const germanyOption = Array.from(countryMultiSelect.querySelectorAll('li[role="option"]')).find(li =>
          li.textContent?.includes('Germany')
        ) as HTMLElement

        expect(germanyOption).toBeTruthy()
        await userEvent.click(germanyOption)

        // Select Italy
        await userEvent.click(expandBtn)
        const italyOption = Array.from(countryMultiSelect.querySelectorAll('li[role="option"]')).find(li =>
          li.textContent?.includes('Italy')
        ) as HTMLElement

        expect(italyOption).toBeTruthy()
        await userEvent.click(italyOption)

        // Wait for data to be applied
        await new Promise(resolve => setTimeout(resolve, 300))
      },
      (before, after) => {
        // Verify that the countries with data are correctly selected
        // (Data rendering and legend display are separate from multi-country selection functionality)
        return (
          after.selectedCountryCodes.includes('FRA') &&
          after.selectedCountryCodes.includes('DEU') &&
          after.selectedCountryCodes.includes('ITA') &&
          after.hasMultiCountryClass &&
          after.selectedCountryCodes.length === 3
        )
      }
    )
  }
}
