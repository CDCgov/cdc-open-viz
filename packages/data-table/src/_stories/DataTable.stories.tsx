import { Meta, StoryObj } from '@storybook/react'
import CdcDataTable from '../CdcDataTable'

import DataTableConfig from '../../examples/data-table-example.json'
import { editConfigKeys } from '../helpers/configHelpers'

const meta: Meta<typeof CdcDataTable> = {
  title: 'Components/Templates/DataTable',
  component: CdcDataTable
}

type Story = StoryObj<typeof CdcDataTable>

export const DataTable: Story = {
  args: {
    config: editConfigKeys(DataTableConfig, [{ path: ['filters'], value: [] }]),
    isEditor: false
  }
}
export const DataTable_Filters: Story = {
  args: {
    config: DataTableConfig,
    isEditor: false
  }
}

export default meta
