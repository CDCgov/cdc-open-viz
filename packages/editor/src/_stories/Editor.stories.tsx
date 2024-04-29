import { Meta, StoryObj } from '@storybook/react'
import CdcEditor from '../CdcEditor'
import StandAloneTableConfig from './_mock/standalone-table.json'
import BlankConfig from './_mock/blank-config.json'
import PivotFilterConfig from './_mock/pivot-filter.json'

const meta: Meta<typeof CdcEditor> = {
  title: 'Components/Pages/CdcEditor',
  component: CdcEditor
}
export default meta

type Story = StoryObj<typeof CdcEditor>

export const DefaultEditor: Story = {
  args: {
    config: BlankConfig
  }
}
