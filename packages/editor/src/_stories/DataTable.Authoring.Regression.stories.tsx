import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, waitForEditor, waitForPresence } from '@cdc/core/helpers/testing'
import CdcEditor from '../CdcEditor'

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Misc/Data Table/Authoring',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>

const TABLE_CSV = `State,Cases,Rate
Alabama,12,3.1
Alaska,8,2.4
Arizona,19,4.6`

export const MISC001: Story = {
  name: 'MISC-001 — Data Table Empty-Editor Workflow',
  args: { config: {} },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await user.click(await canvas.findByRole('button', { name: 'Data Table' }))
    await user.click(canvas.getByText('2. Import Data'))
    const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
    expect(upload).toBeTruthy()
    await user.upload(upload!, new File([TABLE_CSV], 'data-table-regression.csv', { type: 'text/csv' }))

    expect(await canvas.findByText('Data Preview')).toBeVisible()
    await user.click(canvas.getByRole('button', { name: /^Vertical/ }))
    await user.click(canvas.getByRole('button', { name: 'No', exact: true }))
    await user.click(await canvas.findByRole('button', { name: 'Configure your visualization' }))
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.cove-visualization.type-table, table', canvasElement)
    expect(canvas.getByText('Alabama')).toBeVisible()
    expect(canvas.getByText('19')).toBeVisible()
  }
}
