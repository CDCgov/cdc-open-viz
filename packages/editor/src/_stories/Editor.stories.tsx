import { Meta, StoryObj } from '@storybook/react'
import Dev9346Config_1 from './_mock/dev-9346-bug.json'
import CdcEditor from '../CdcEditor'

const meta: Meta<typeof CdcEditor> = {
  title: 'Components/Pages/CdcEditor',
  component: CdcEditor
}
export default meta

type Story = StoryObj<typeof CdcEditor>

export const Dev_9346_Bug: Story = {
  args: {
    config: Dev9346Config_1,
    isEditor: true
  }
}

export const DefaultEditor: Story = {
  args: {
    config: {}
  }
}
