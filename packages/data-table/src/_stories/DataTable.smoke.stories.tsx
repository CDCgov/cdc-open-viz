import { Meta, StoryObj } from '@storybook/react-vite'
import CdcDataTable from '../CdcDataTable'

import DataTableConfig from '../../examples/data-table-example.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const smokeTestData = [
  {
    week_end: '2025-10-04',
    new_admissions_100k_currentweek: '0.29',
    percent_hospitals_reporting: '90.88',
    geography: 'United States',
    pathogen: 'Influenza',
    reporting_above_80_percent: 'True'
  },
  {
    week_end: '2025-10-11',
    new_admissions_100k_currentweek: '0.3',
    percent_hospitals_reporting: '92.22',
    geography: 'United States',
    pathogen: 'Influenza',
    reporting_above_80_percent: 'True'
  },
  {
    week_end: '2025-10-18',
    new_admissions_100k_currentweek: '0.33',
    percent_hospitals_reporting: '92.14',
    geography: 'United States',
    pathogen: 'Influenza',
    reporting_above_80_percent: 'True'
  },
  {
    week_end: '2025-10-25',
    new_admissions_100k_currentweek: '0.35',
    percent_hospitals_reporting: '91.84',
    geography: 'United States',
    pathogen: 'Influenza',
    reporting_above_80_percent: 'True'
  },
  {
    week_end: '2025-11-01',
    new_admissions_100k_currentweek: '0.4',
    percent_hospitals_reporting: '92.03',
    geography: 'United States',
    pathogen: 'Influenza',
    reporting_above_80_percent: 'True'
  },
  {
    week_end: '2024-11-09',
    new_admissions_100k_currentweek: '0.46',
    percent_hospitals_reporting: '96.24',
    geography: 'California',
    pathogen: 'Influenza',
    reporting_above_80_percent: 'True'
  },
  {
    week_end: '2024-11-16',
    new_admissions_100k_currentweek: '0.83',
    percent_hospitals_reporting: '96.74',
    geography: 'California',
    pathogen: 'Influenza',
    reporting_above_80_percent: 'True'
  },
  {
    week_end: '2024-11-23',
    new_admissions_100k_currentweek: '1.35',
    percent_hospitals_reporting: '97.24',
    geography: 'California',
    pathogen: 'Influenza',
    reporting_above_80_percent: 'True'
  },
  {
    week_end: '2024-11-30',
    new_admissions_100k_currentweek: '1.82',
    percent_hospitals_reporting: '96.49',
    geography: 'California',
    pathogen: 'Influenza',
    reporting_above_80_percent: 'True'
  },
  {
    week_end: '2024-12-07',
    new_admissions_100k_currentweek: '2.9',
    percent_hospitals_reporting: '96.99',
    geography: 'California',
    pathogen: 'Influenza',
    reporting_above_80_percent: 'True'
  }
]

const smokeTestGeographies = ['United States', 'California']
const smokeTestConfig = {
  ...DataTableConfig,
  data: smokeTestData,
  dataUrl: undefined
}
const smokeTestFilterConfig = {
  ...smokeTestConfig,
  filters: DataTableConfig.filters?.length
    ? [
        {
          ...DataTableConfig.filters[0],
          values: smokeTestGeographies,
          orderedValues: smokeTestGeographies,
          active: smokeTestGeographies[0]
        }
      ]
    : []
}

const meta: Meta<typeof CdcDataTable> = {
  title: 'Components/Templates/DataTable',
  component: CdcDataTable
}

type Story = StoryObj<typeof CdcDataTable>

export const DataTable: Story = {
  args: {
    config: { ...smokeTestConfig, filters: [] },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
export const DataTable_Filters: Story = {
  args: {
    config: smokeTestFilterConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export default meta
