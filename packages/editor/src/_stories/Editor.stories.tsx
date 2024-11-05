import { Meta, StoryObj } from '@storybook/react'
import CdcEditor from '../CdcEditor'
import { within, userEvent } from '@storybook/testing-library'

const sleep = ms => {
  return new Promise(r => setTimeout(r, ms))
}

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

export const PreviewTable: Story = {
  args: {},
  parameters: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    await sleep(1000)
    const mapButton = canvas.getByText('United States (State- or County-Level)')
    await user.click(mapButton)
    const sampleData = canvas.getByText('United States: County Sample Data')
    await user.click(sampleData)
  }
}
