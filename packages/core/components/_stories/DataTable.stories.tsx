import { Meta, StoryObj } from '@storybook/react-vite'

import DataTable from '../DataTable'
import './styles.scss'
import NoDataConfig from './_mocks/DataTable/no-data.json'
import Example_1 from './_mocks/dashboard_no_filter.json'
import CityStateExample from './_mocks/example-city-state.json'
import { displayGeoName } from '@cdc/map/src/helpers/displayGeoName'
import rowTypeData from './_mocks/row_type.json'
import { TableConfig } from '../DataTable/types/TableConfig'
import ConfigContext from '@cdc/map/src/context'

const meta: Meta<typeof DataTable> = {
  title: 'Components/Organisms/DataTable',
  component: DataTable
}

export default meta

type Story = StoryObj<typeof DataTable>

const datasetKey = 'dashboard_example_map.csv'

export const Primary: Story = {
  args: {
    config: Example_1,
    dataConfig: Example_1.datasets[datasetKey],
    rawData: Example_1.datasets[datasetKey].data,
    runtimeData: Example_1.datasets[datasetKey].data,
    expandDataTable: true,
    tableTitle: 'COVE DataTable',
    viewport: 'lg',
    tabbingId: datasetKey
  }
}

export const CityState: Story = {
  args: {
    config: CityStateExample,
    rawData: CityStateExample.data,
    runtimeData: CityStateExample.data,
    expandDataTable: true,
    tableTitle: 'CityStateExample DataTable',
    viewport: 'lg',
    tabbingId: '#asdf',
    columns: CityStateExample.columns,
    applyLegendToRow: () => ['#000'],
    displayGeoName
  },
  decorators: [
    Story => (
      <ConfigContext.Provider value={{ config: CityStateExample }}>
        <Story />
      </ConfigContext.Provider>
    )
  ]
}

export const Grouped: Story = {
  args: {
    config: { ...Example_1, table: { ...Example_1.table, groupBy: 'TimeZone' } },
    dataConfig: Example_1.datasets[datasetKey],
    rawData: Example_1.datasets[datasetKey].data,
    runtimeData: Example_1.datasets[datasetKey].data,
    expandDataTable: true,
    tableTitle: 'COVE DataTable',
    viewport: 'lg',
    tabbingId: datasetKey
  }
}

const noDataData = NoDataConfig.datasets['dev-8931-hide-markup-include.csv'].data
export const NoData: Story = {
  args: {
    config: NoDataConfig,
    dataConfig: { data: noDataData },
    rawData: noDataData,
    runtimeData: noDataData,
    expandDataTable: true,
    tableTitle: 'No Data Table',
    viewport: 'lg',
    tabbingId: '#asdf'
  }
}
export const RowType: Story = {
  args: {
    config: {
      dashboard: {
        theme: 'theme-blue',
        title: 'RowType'
      },
      title: 'RowType',
      dataUrl: '/examples/feature/__data__/ardi.json',
      animate: false,
      animateReplay: true,
      palette: 'qualitative-soft',
      aspectRatio: 1,
      dataFormat: {
        roundTo: 1,
        commas: false,
        prefix: '',
        suffix: ''
      },
      legend: {
        hide: false
      },
      table: {
        label: 'Data Table',
        expanded: true,
        show: true,
        customTableConfig: true
      }
    } as unknown as TableConfig,
    dataConfig: { data: rowTypeData },
    rawData: rowTypeData,
    runtimeData: rowTypeData,
    expandDataTable: true,
    tableTitle: 'DataTable',
    viewport: 'lg',
    tabbingId: '#asdf'
  }
}
