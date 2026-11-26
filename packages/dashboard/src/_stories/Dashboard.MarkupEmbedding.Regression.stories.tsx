import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import Dashboard from '../CdcDashboard'
import Tp5Dashboard from './_mock/tp5-test.json'

const meta: Meta<typeof Dashboard> = {
  title: 'Regression Tests/Misc/Markup Include/Dashboard Embedding',
  component: Dashboard
}

export default meta
type Story = StoryObj<typeof Dashboard>

export const MISC005: Story = {
  name: 'MISC-005 — Markup Include Dashboard Embedding',
  args: { config: Tp5Dashboard, isEditor: false },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    expect(await within(canvasElement).findByText('TP5 Markup Include')).toBeVisible()
    expect(canvasElement.textContent).toContain('68.5%')
  }
}
