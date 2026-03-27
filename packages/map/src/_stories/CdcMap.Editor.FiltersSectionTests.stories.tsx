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

export const FiltersSectionTests: Story = {
  args: {
    ...DEFAULT_ARGS
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await waitForPresence('.map-container', canvasElement)

    await openAccordion(canvas, 'Filters')

    // ==========================================================================
    // TEST: Add Filter and configure it to filter by STATE
    // ==========================================================================
    const addFilterButton = canvas.getByRole('button', { name: /Add Filter/i })

    await performAndAssert(
      'Add Filter → Click button',
      () => {
        const filtersList = canvasElement.querySelector('.draggable-field-list')
        const collapsedFilters = filtersList?.querySelectorAll('.editor-field-item') || []
        return {
          hasFiltersList: Boolean(filtersList),
          hasCollapsedFilter: collapsedFilters.length > 0
        }
      },
      async () => {
        await userEvent.click(addFilterButton)
      },
      (before, after) => {
        // Should create filters list and add a collapsed filter
        return after.hasFiltersList && after.hasCollapsedFilter
      }
    )

    // Find and expand the collapsed filter (click the header expand button)
    const filtersList = canvasElement.querySelector('.draggable-field-list')
    const expandButton = filtersList?.querySelector('.editor-field-item__header button') as HTMLButtonElement
    await userEvent.click(expandButton)

    // Wait for the expanded filter content
    await waitForPresence('.draggable-field-list .editor-field-item__content', canvasElement)

    // Find the newly added filter section content
    const filterBlock = filtersList?.querySelector('.editor-field-item__content') as HTMLElement

    // ==========================================================================
    // TEST: Select STATE as the filter column
    // ==========================================================================
    const filterColumnSelect = Array.from(filterBlock?.querySelectorAll('select') || []).find(select => {
      const label = select.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Filter') && !labelSpan?.textContent?.includes('Style')
    }) as HTMLSelectElement

    const getDefaultValueState = () => {
      const updatedFilterBlock = filtersList?.querySelector('.editor-field-item__content') as HTMLElement
      const defaultValueSelect = Array.from(updatedFilterBlock?.querySelectorAll('select') || []).find(select => {
        const label = select.closest('label')
        const labelSpan = label?.querySelector('.edit-label')
        return labelSpan?.textContent?.includes('Filter Default Value')
      }) as HTMLSelectElement
      return {
        hasDefaultValueSelect: Boolean(defaultValueSelect),
        optionCount: defaultValueSelect?.options.length || 0
      }
    }

    await performAndAssert(
      'Filter Column → Select STATE',
      getDefaultValueState,
      async () => {
        await userEvent.selectOptions(filterColumnSelect, 'STATE')
      },
      (before, after) => {
        // Should populate the default value select with state options
        return after.hasDefaultValueSelect && after.optionCount > 0
      }
    )

    // ==========================================================================
    // TEST: Filter Intro Text
    // ==========================================================================
    const filterIntroTextarea = Array.from(canvasElement.querySelectorAll('textarea') || []).find(textarea => {
      const label = textarea.closest('label')
      return label?.textContent?.includes('Filter intro text')
    }) as HTMLTextAreaElement

    const getFilterIntroText = () => {
      const filtersSection = canvasElement.querySelector('.filters-section')
      const filterIntro = filtersSection?.querySelector('.filters-section__intro-text')
      return {
        introText: filterIntro?.textContent?.trim() || '',
        hasIntro: Boolean(filterIntro)
      }
    }

    await performAndAssert(
      'Filter Intro Text → Set custom text',
      getFilterIntroText,
      async () => {
        await userEvent.clear(filterIntroTextarea)
        await userEvent.type(filterIntroTextarea, 'Select a state to filter the map data.')
      },
      (before, after) => {
        return after.hasIntro && after.introText.includes('Select a state to filter the map data')
      }
    )

    // ==========================================================================
    // TEST: Select Alabama as the default filter value
    // ==========================================================================
    const updatedFilterBlock = filtersList?.querySelector('.editor-field-item__content') as HTMLElement
    const defaultValueSelect = Array.from(updatedFilterBlock?.querySelectorAll('select') || []).find(select => {
      const label = select.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Filter Default Value')
    }) as HTMLSelectElement

    await performAndAssert(
      'Filter Default Value → Select Alabama',
      () => {
        // Check the legend text labels - when filtered to one state, shows single value
        const legendContainer = canvasElement.querySelector('.legend-container')
        const textElements = Array.from(legendContainer?.querySelectorAll('text tspan') || [])
        const labels = textElements.map(el => el.textContent?.trim()).filter(t => t && t !== '')
        const labelText = labels.join(',')

        // Verify filter dropdown is rendered
        const vizContainer = canvasElement.querySelector('.cove-visualization')
        const filterSelect = Array.from(vizContainer?.querySelectorAll('select') || []).find(select => {
          const options = Array.from(select.options).map(opt => opt.value)
          return options.includes('Alabama')
        })

        return {
          labelCount: labels.length,
          labelText,
          hasFilterSelect: Boolean(filterSelect),
          selectedValue: filterSelect?.value || ''
        }
      },
      async () => {
        await userEvent.selectOptions(defaultValueSelect, 'Alabama')
      },
      (before, after) => {
        // After filtering to Alabama: should have filter dropdown, Alabama selected, and exactly 1 legend label
        // The legend shows a single value when only one state's data is displayed
        return after.hasFilterSelect && after.selectedValue === 'Alabama' && after.labelCount === 1
      }
    )

    // ==========================================================================
    // TEST: Filter Label
    // ==========================================================================
    const labelInput = Array.from(updatedFilterBlock?.querySelectorAll('input[type="text"]') || []).find(input => {
      const label = input.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Label') && !labelSpan?.textContent?.includes('Query')
    }) as HTMLInputElement

    await performAndAssert(
      'Filter Label → Set custom label',
      () => {
        const filtersSection = canvasElement.querySelector('.filters-section')
        const filterLabel = filtersSection?.querySelector('.form-group label')
        return {
          labelText: filterLabel?.textContent?.trim() || ''
        }
      },
      async () => {
        await userEvent.clear(labelInput)
        await userEvent.type(labelInput, 'Select State')
      },
      (before, after) => {
        return after.labelText.includes('Select State')
      }
    )
  }
}
