import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import CdcMap from '../CdcMap'
import minimalConfig from '../../examples/minimal-example.json'
import { assertVisualizationRendered, performAndAssert } from '@cdc/core/helpers/testing'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Filter Defaults',
  component: CdcMap
}

export default meta

export const SavedSelectionDiffersFromDefault: StoryObj<typeof CdcMap> = {
  args: {
    config: {
      ...minimalConfig,
      table: { forceDisplay: true, expanded: true, collapsible: false },
      filters: [
        {
          columnName: 'Period',
          label: 'Period',
          filterStyle: 'dropdown',
          showDropdown: true,
          active: '2025',
          defaultValue: '2024',
          values: ['2024', '2025']
        }
      ],
      data: [
        { 'FIPS Codes': 'Alabama', Rate: 10, Period: '2024' },
        { 'FIPS Codes': 'Alabama', Rate: 90, Period: '2025' }
      ]
    } as any
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await assertVisualizationRendered(canvasElement)
    const getRates = () => {
      const table = canvas.getByRole('table')
      return table.querySelector('tbody')?.textContent ?? ''
    }

    await waitFor(() => {
      expect(getRates()).toContain('10')
      expect(getRates()).not.toContain('90')
    })

    await performAndAssert(
      'Change the filter after loading its default',
      getRates,
      async () => {
        const filters = canvasElement.querySelector('.cove-visualization__filters-section') as HTMLElement
        await userEvent.selectOptions(within(filters).getByRole('combobox'), '2025')
      },
      (_before, after) => after.includes('90') && !after.includes('10')
    )
  }
}

export const QueryParameterOverridesDefault: StoryObj<typeof CdcMap> = {
  args: {
    config: {
      ...SavedSelectionDiffersFromDefault.args.config,
      filters: SavedSelectionDiffersFromDefault.args.config.filters.map(filter => ({
        ...filter,
        setByQueryParameter: 'map-test-period'
      }))
    }
  },
  beforeEach: () => {
    const originalUrl = window.location.href
    const url = new URL(originalUrl)
    url.searchParams.set('map-test-period', '2025')
    window.history.replaceState(null, '', url)
    return () => window.history.replaceState(null, '', originalUrl)
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await assertVisualizationRendered(canvasElement)
    await waitFor(() => {
      const rates = canvas.getByRole('table').querySelector('tbody')?.textContent
      expect(rates).toContain('90')
      expect(rates).not.toContain('10')
    })
  }
}
