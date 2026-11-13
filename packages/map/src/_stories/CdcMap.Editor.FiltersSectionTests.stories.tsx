import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import usaStateGradientConfig from './_mock/usa-state-gradient.json'
import { performAndAssert, waitForEditor, waitForPresence, openAccordion } from '@cdc/core/helpers/testing'

type Story = StoryObj<typeof CdcMap>

const mapMeta: Meta<typeof CdcMap> = {
  title: 'Regression Tests/Map Scripts',
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

const FILTER_STYLES = [
  'combobox',
  'dropdown',
  'multi-select',
  'nested-dropdown',
  'pill',
  'tab',
  'tab-simple',
  'tab bar'
]

export const FiltersSectionTests: Story = {
  name: 'Filters Section Tests',
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
    const filtersAccordionButton = canvas
      .getAllByRole('button', { name: /^Filters$/i })
      .find(button => button.closest('[data-accordion-component="AccordionItem"], .accordion__item'))
    const filtersAccordion = filtersAccordionButton?.closest(
      '[data-accordion-component="AccordionItem"], .accordion__item'
    )
    expect(filtersAccordion).toBeTruthy()

    const addFilterButton = within(filtersAccordion as HTMLElement).getByRole('button', { name: /Add Filter/i })

    await performAndAssert(
      'Add Filter → Click button',
      () => {
        const filtersList = filtersAccordion?.querySelector('.grouped-list__items')
        const collapsedFilters = filtersList?.querySelectorAll('.series-item--chart') || []
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

    // Filter item starts expanded (preExpanded); find the visible filter panel content
    const filtersList = filtersAccordion?.querySelector('.grouped-list__items')

    const getFilterBlock = () => {
      return Array.from(filtersAccordion?.querySelectorAll('select') || [])
        .find(select => {
          const label = select.closest('label')
          const labelSpan = label?.querySelector('.edit-label')
          return labelSpan?.textContent?.includes('Filter Style')
        })
        ?.closest(
          '[data-accordion-component="AccordionPanel"], .series-item, .editor-field-item__content'
        ) as HTMLElement
    }

    await performAndAssert(
      'Wait for added filter panel to render',
      () => Boolean(getFilterBlock()),
      async () => {},
      (_before, after) => after
    )

    // Find the newly added filter section content
    const filterBlock = getFilterBlock()
    expect(filterBlock).toBeTruthy()

    // ==========================================================================
    // TEST: Select STATE as the filter column
    // ==========================================================================
    const filterColumnSelect = Array.from(filterBlock?.querySelectorAll('select') || []).find(select => {
      const label = select.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Filter') && !labelSpan?.textContent?.includes('Style')
    }) as HTMLSelectElement

    const getDefaultValueState = () => {
      const updatedFilterBlock = getFilterBlock()
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
    // TEST: Select Ohio as the default filter value
    // ==========================================================================
    const updatedFilterBlock = getFilterBlock()
    const defaultValueSelect = Array.from(updatedFilterBlock?.querySelectorAll('select') || []).find(select => {
      const label = select.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Filter Default Value')
    }) as HTMLSelectElement

    await performAndAssert(
      'Filter Default Value → Select Ohio',
      () => {
        // Check the legend text labels - when filtered to one state, shows that state's value
        const legendContainer = canvasElement.querySelector('.legend-container')
        const textElements = Array.from(legendContainer?.querySelectorAll('text tspan') || [])
        const labels = textElements.map(el => el.textContent?.trim()).filter(t => t && t !== '')
        const labelText = labels.join(',')

        // Verify the runtime filter dropdown is rendered in the visualization output
        const runtimeFiltersSection = canvasElement.querySelector('.cove-visualization__filters-section')
        const filterSelect = Array.from(runtimeFiltersSection?.querySelectorAll('select') || []).find(select => {
          const options = Array.from(select.options).map(opt => opt.value)
          return options.includes('Ohio')
        })

        return {
          labelCount: labels.length,
          labelText,
          hasFilterSelect: Boolean(filterSelect),
          selectedValue: filterSelect?.value || ''
        }
      },
      async () => {
        await userEvent.selectOptions(defaultValueSelect, 'Ohio')
      },
      (before, after) => {
        // After filtering to Ohio: should have runtime dropdown, Ohio selected, and Ohio's unique value in the legend
        return (
          after.hasFilterSelect &&
          after.selectedValue === 'Ohio' &&
          after.labelText !== before.labelText &&
          after.labelText.includes('88') &&
          !after.labelText.includes('130')
        )
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

    // ==========================================================================
    // TEST: Every filter style is available and renders its distinct control
    // ==========================================================================
    const getFilterStyleSelect = () => within(getFilterBlock()).getByLabelText('Filter Style') as HTMLSelectElement
    expect(Array.from(getFilterStyleSelect().options, option => option.value)).toEqual(FILTER_STYLES)

    const getRuntimeFilterStyle = () => {
      const runtimeFilter = canvasElement.querySelector<HTMLElement>(
        '.cove-visualization__filters-section .single-filters'
      )

      return {
        authoredStyle: getFilterStyleSelect().value,
        className: runtimeFilter?.className || '',
        hasCombobox: Boolean(runtimeFilter?.querySelector('.cove-combobox')),
        hasDropdown: Boolean(runtimeFilter?.querySelector('select')),
        hasMultiSelect: Boolean(runtimeFilter?.querySelector('.cove-multiselect')),
        hasPills: Boolean(runtimeFilter?.querySelector('button.pill')),
        hasTabs: Boolean(runtimeFilter?.querySelector('button.tab:not(.tab--simple)')),
        hasSimpleTabs: Boolean(runtimeFilter?.querySelector('.tab-simple-container button.tab--simple')),
        hasTabBar: Boolean(runtimeFilter?.querySelector('.single-filters__tab-bar button.button__tab-bar'))
      }
    }

    const renderedOrResponsiveDropdown = (state: ReturnType<typeof getRuntimeFilterStyle>, style: string) =>
      state.authoredStyle === style && state.className.includes('single-filters--dropdown') && state.hasDropdown

    const styleCases = [
      { style: 'combobox', rendered: (state: ReturnType<typeof getRuntimeFilterStyle>) => state.hasCombobox },
      { style: 'dropdown', rendered: (state: ReturnType<typeof getRuntimeFilterStyle>) => state.hasDropdown },
      { style: 'multi-select', rendered: (state: ReturnType<typeof getRuntimeFilterStyle>) => state.hasMultiSelect },
      {
        style: 'pill',
        rendered: (state: ReturnType<typeof getRuntimeFilterStyle>) =>
          state.hasPills || renderedOrResponsiveDropdown(state, 'pill')
      },
      {
        style: 'tab',
        rendered: (state: ReturnType<typeof getRuntimeFilterStyle>) =>
          state.hasTabs || renderedOrResponsiveDropdown(state, 'tab')
      },
      {
        style: 'tab-simple',
        rendered: (state: ReturnType<typeof getRuntimeFilterStyle>) =>
          state.className.includes('single-filters--tab-simple') && (state.hasSimpleTabs || state.hasDropdown)
      },
      {
        style: 'tab bar',
        rendered: (state: ReturnType<typeof getRuntimeFilterStyle>) =>
          state.hasTabBar || renderedOrResponsiveDropdown(state, 'tab bar')
      }
    ] as const

    for (const { style, rendered } of styleCases) {
      await performAndAssert(
        `Filter Style → ${style}`,
        getRuntimeFilterStyle,
        async () => userEvent.selectOptions(getFilterStyleSelect(), style),
        (_before, after) => rendered(after)
      )

      if (style === 'combobox') {
        expect(within(getFilterBlock()).getByLabelText(/^Description Field/)).toBeVisible()
      }
      if (style === 'multi-select') {
        expect(within(getFilterBlock()).getByLabelText(/^Select Limit/)).toBeVisible()
      }
    }

    const getNestedSelect = (labelText: string) =>
      Array.from(getFilterBlock().querySelectorAll('label'))
        .find(label => label.querySelector('.edit-label')?.textContent?.includes(labelText))
        ?.querySelector('select') as HTMLSelectElement
    await performAndAssert(
      'Filter Style → nested-dropdown editor',
      () => Boolean(getNestedSelect('Filter Grouping')),
      async () => userEvent.selectOptions(getFilterStyleSelect(), 'nested-dropdown'),
      (_before, after) => after
    )
    expect(getNestedSelect('Filter Grouping')).toHaveValue('STATE')
    const subgrouping = getNestedSelect('Filter SubGrouping')
    await performAndAssert(
      'Filter Style → nested-dropdown',
      () => Boolean(canvasElement.querySelector('.cove-visualization__filters-section .nested-dropdown')),
      async () => userEvent.selectOptions(subgrouping, 'Location'),
      (_before, after) => after
    )
    expect(getNestedSelect('Subgroup Description Field')).toBeEnabled()
    expect(within(getFilterBlock()).getByLabelText('Create query parameters')).toBeEnabled()
    expect(within(getFilterBlock()).getByLabelText('Display subgrouping only')).toBeEnabled()
  }
}
