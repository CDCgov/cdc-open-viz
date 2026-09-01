import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import WaffleChart from '../CdcWaffleChart'
import { performAndAssert, waitForEditor, openAccordion } from '@cdc/core/helpers/testing'
import TestConfig from '../../tests/fixtures/test-config.json'

const htmlTitle = 'Waffle <em>Chart</em> Title <strong>Test</strong><sup> 40</sup>'

const meta: Meta<typeof WaffleChart> = {
  title: 'Components/Templates/WaffleChart/Editor Tests',
  component: WaffleChart,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof WaffleChart>

export const GeneralSectionHTMLTitleTests: Story = {
  args: {
    config: {
      ...TestConfig,
      title: 'Waffle Chart Title Test'
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')

    const titleInput = canvas.getByDisplayValue('Waffle Chart Title Test')
    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, htmlTitle)

    await performAndAssert(
      'HTML Title Update',
      () => canvasElement.querySelector('.cove-visualization__header h2')?.innerHTML.trimEnd() || '',
      async () => {},
      (_, after) => after === 'Waffle <em>Chart</em> Title <strong>Test</strong><sup> 40</sup>'
    )

    const chartTitleHeader = canvasElement.querySelector('.cove-visualization__header h2')
    expect(chartTitleHeader).toBeTruthy()
    expect(chartTitleHeader?.textContent?.trimEnd()).toBe('Waffle Chart Title Test 40')
    expect(chartTitleHeader?.querySelector('em')?.textContent).toBe('Chart')
    expect(chartTitleHeader?.querySelector('strong')?.textContent).toBe('Test')
    expect(chartTitleHeader?.querySelector('sup')?.textContent).toBe(' 40')
  }
}
