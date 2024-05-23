import { Meta, StoryObj } from '@storybook/react'
import CdcEditor from '../CdcEditor'

const meta: Meta<typeof CdcEditor> = {
  title: 'Components/Pages/CdcEditor',
  component: CdcEditor
}
export default meta

type Story = StoryObj<typeof CdcEditor>

export const DefaultEditor: Story = {
  args: {
    config: {}
  }
}
