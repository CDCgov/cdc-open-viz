import type { Meta, StoryObj } from '@storybook/react-vite'
import { userEvent, within } from 'storybook/test'
import Chart from '../CdcChartComponent'
import pieChartExample from './_mock/pie_config.json'
import pieData from './_mock/pie_data.json'
import urlFilterExample from './_mock/url_filter.json'
import mockScatterPlot from './_mock/scatterplot_mock.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Editor',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Primary: Story = {
  args: {
    config: { ...pieChartExample, data: pieData, columns: { someCol: { name: 'females', showInViz: true } } },
    isEditor: true
  }
}

const sleep = ms => {
  return new Promise(r => setTimeout(r, ms))
}

export const Url_Filter: Story = {
  args: {
    config: urlFilterExample,
    isEditor: true
  }
}

export const ScatterPlot: Story = {
  args: {
    config: mockScatterPlot,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    // play is running before full rendering is complete so sleep function
    // is needed to delay the execution.
    // possible related bug: https://github.com/storybookjs/storybook/issues/18258
    await sleep(3000)
    const dateCategoryAccordion = await canvas.findByRole('button', { name: /Date\/Category Axis/i })
    user.click(dateCategoryAccordion)
    await sleep(1000)
    const minValueInput = await canvas.findByLabelText('min value')
    const maxValueInput = await canvas.findByLabelText('max value')
    await user.type(minValueInput, '0')
    await user.type(maxValueInput, '100')
    await sleep(1000)
    // Scroll to the top of the screen
    user.click(dateCategoryAccordion)
    await canvasElement.scrollTo(0, 0)
  }
}

export default meta
