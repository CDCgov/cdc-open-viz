import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import usaStateGradientConfig from './_mock/usa-state-gradient.json'
import multiCountryConfig from './_mock/multi-country.json'
import countyPatternsConfig from './_mock/county-patterns.json'
import navigationConfig from './_mock/DEV-10148.json'
import { performAndAssert, waitForEditor, waitForPresence, openAccordion } from '@cdc/core/helpers/testing'
import { createVizFilter } from '@cdc/core/helpers/createVizFilter'
import { createNewMapConfig } from '../helpers/createNewMapConfig'

type Story = StoryObj<typeof CdcMap>

const mapMeta: Meta<typeof CdcMap> = {
  title: 'Regression Tests/Map Scripts/Filters',
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

const withDropdownFilter = <T extends { data: Array<Record<string, unknown>> }>(
  config: T,
  columnName: string,
  label: string,
  defaultValue: string,
  id: number
) => ({
  ...config,
  filterBehavior: 'Filter Change',
  filters: [
    createVizFilter({
      id,
      columnName,
      label,
      defaultValue,
      active: defaultValue,
      showDropdown: true,
      values: Array.from(new Set(config.data.map(row => String(row[columnName]))))
    })
  ]
})

const stateFilterConfig = withDropdownFilter(usaStateGradientConfig, 'Location', 'Location', 'Vehicle', 101)
const worldFilterConfig = withDropdownFilter(multiCountryConfig, 'Country', 'Country', 'France', 102)
const countyFilterConfig = withDropdownFilter(
  {
    ...countyPatternsConfig,
    table: { forceDisplay: true, expanded: true, collapsible: false, download: false }
  },
  'Coverage Type',
  'Coverage Type',
  'Medicaid',
  103
)

const geocodeFilterConfig = withDropdownFilter(
  createNewMapConfig({
    type: 'map',
    general: {
      type: 'us-geocode',
      geoType: 'us-county',
      title: 'Geocode Filter Test',
      showTitle: true,
      showSidebar: false,
      allowMapZoom: true
    },
    columns: {
      geo: { name: 'City', label: 'City', tooltip: true, dataTable: true },
      primary: { name: 'Value', label: 'Value', tooltip: true, dataTable: true },
      latitude: { name: 'Latitude' },
      longitude: { name: 'Longitude' }
    },
    visual: {
      cityStyle: 'circle',
      cityStyleLabel: 'Location',
      geoCodeCircleSize: 8,
      additionalCityStyles: []
    },
    data: [
      { City: 'Albuquerque', Latitude: 35.0844, Longitude: -106.6504, Value: 1 },
      { City: 'Boston', Latitude: 42.3601, Longitude: -71.0589, Value: 12 }
    ]
  }),
  'City',
  'City',
  'Boston',
  104
)

const runtimeFilter = (canvasElement: HTMLElement, label: string) =>
  within(canvasElement.querySelector('.cove-visualization__filters-section') as HTMLElement).getByRole('combobox', {
    name: `Filter by ${label}`
  }) as HTMLSelectElement

const stateTooltip = (canvasElement: HTMLElement, name: string) =>
  canvasElement.querySelector(`g[data-name="${name}"] > g.geo-group`)?.getAttribute('data-tooltip-html') || ''

const countryTooltip = (canvasElement: HTMLElement, code: string) =>
  canvasElement.querySelector(`path[data-country-code="${code}"]`)?.parentElement?.getAttribute('data-tooltip-html') ||
  ''

const canvasSignature = (canvas: HTMLCanvasElement) => {
  const pixels = canvas.getContext('2d')!.getImageData(0, 0, canvas.width, canvas.height).data
  let signature = 2166136261
  for (let index = 0; index < pixels.length; index += 1) {
    signature ^= pixels[index]
    signature = Math.imul(signature, 16777619)
  }
  return signature >>> 0
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

export const USStateFilters: Story = {
  name: 'U.S. State Filters',
  args: { isEditor: true, config: stateFilterConfig },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('g[data-name="Alabama"] > g.geo-group', canvasElement)
    await waitForPresence('.cove-visualization__filters-section', canvasElement)

    const filter = runtimeFilter(canvasElement, 'Location')
    await performAndAssert(
      'State filter changes mapped state values',
      () => ({
        active: filter.value,
        alabama: stateTooltip(canvasElement, 'Alabama'),
        alaska: stateTooltip(canvasElement, 'Alaska')
      }),
      async () => userEvent.selectOptions(filter, 'Work'),
      (before, after) =>
        before.active === 'Vehicle' &&
        before.alabama.includes('>130<') &&
        !before.alaska.includes('>40<') &&
        after.active === 'Work' &&
        !after.alabama.includes('>130<') &&
        after.alaska.includes('>40<')
    )
  }
}

export const WorldFilters: Story = {
  name: 'World Filters',
  args: { isEditor: true, config: worldFilterConfig },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('path[data-country-code="FRA"]', canvasElement)
    await waitForPresence('.cove-visualization__filters-section', canvasElement)

    const filter = runtimeFilter(canvasElement, 'Country')
    await performAndAssert(
      'World filter changes mapped country values',
      () => ({
        active: filter.value,
        france: countryTooltip(canvasElement, 'FRA'),
        germany: countryTooltip(canvasElement, 'DEU')
      }),
      async () => userEvent.selectOptions(filter, 'Germany'),
      (before, after) =>
        before.active === 'France' &&
        before.france.includes('Sample Data: 75.2%') &&
        !before.germany.includes('Sample Data: 82.1%') &&
        after.active === 'Germany' &&
        !after.france.includes('Sample Data: 75.2%') &&
        after.germany.includes('Sample Data: 82.1%')
    )
  }
}

export const CountyFilters: Story = {
  name: 'County Filters',
  args: { isEditor: true, config: countyFilterConfig },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    const mapCanvas = (await waitForPresence(
      'canvas.county-map-canvas:not(.d-none)',
      canvasElement
    )) as HTMLCanvasElement
    await waitForPresence('.cove-visualization__filters-section', canvasElement)

    const filter = runtimeFilter(canvasElement, 'Coverage Type')
    await performAndAssert(
      'County filter changes mapped county values',
      () => {
        const rows = Array.from(canvas.queryByRole('table')?.querySelectorAll('tbody tr') || []).map(
          row => row.textContent || ''
        )
        return {
          active: filter.value,
          signature: canvasSignature(mapCanvas),
          sanFrancisco: rows.find(row => row.includes('San Francisco')) || '',
          fresno: rows.find(row => row.includes('Fresno')) || ''
        }
      },
      async () => userEvent.selectOptions(filter, 'Private'),
      (before, after) =>
        before.active === 'Medicaid' &&
        before.sanFrancisco.includes('82.5') &&
        before.fresno === '' &&
        after.active === 'Private' &&
        before.signature !== after.signature &&
        after.sanFrancisco === '' &&
        after.fresno.includes('68.3')
    )

    await openAccordion(canvas, 'Filters')
    const showStateDropdown = canvas.getByLabelText('Show State Dropdown')
    await performAndAssert(
      'County state dropdown appears in the runtime map',
      () => {
        const runtimeFilters = canvasElement.querySelector<HTMLElement>('.cove-visualization__filters-section')
        return runtimeFilters
          ? Boolean(within(runtimeFilters).queryByRole('combobox', { name: /Select Location/ }))
          : false
      },
      async () => userEvent.click(showStateDropdown),
      (before, after) => !before && after
    )
  }
}

export const GeocodeFilters: Story = {
  name: 'Geocode Filters',
  args: { isEditor: true, config: geocodeFilterConfig },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    const mapCanvas = (await waitForPresence(
      'canvas.county-map-canvas:not(.d-none)',
      canvasElement
    )) as HTMLCanvasElement
    await waitForPresence('.cove-visualization__filters-section', canvasElement)

    const filter = runtimeFilter(canvasElement, 'City')
    await performAndAssert(
      'Geocode filter redraws the active marker',
      () => ({ active: filter.value, signature: canvasSignature(mapCanvas) }),
      async () => userEvent.selectOptions(filter, 'Albuquerque'),
      (before, after) =>
        before.active === 'Boston' && after.active === 'Albuquerque' && before.signature !== after.signature
    )
  }
}

export const NavigationHidesFilters: Story = {
  name: 'Navigation Hides Filters',
  args: { isEditor: true, config: navigationConfig },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('.map-container', canvasElement)

    expect(canvas.queryByRole('button', { name: /^Filters$/i })).not.toBeInTheDocument()
    expect(canvasElement.querySelector('.cove-visualization__filters-section')).not.toBeInTheDocument()
  }
}
