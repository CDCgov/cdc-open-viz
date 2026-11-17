import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { assertVisualizationRendered, openAccordion, performAndAssert, waitForEditor } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import barChartEditorTest from './_mock/editor-tests/bar-chart-editor-test.json'
import pieConfig from './_mock/pie_config.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Editor Tests/Category Order',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

const sourceOrder = ['Alpha', 'Beta', 'Gamma']
const customOrder = ['Gamma', 'Alpha', 'Beta']
const categoryData = sourceOrder.map((category, index) => ({
  category,
  'White, non-Hispanic': index + 1
}))
const pieData = sourceOrder.map((category, index) => ({ category, value: index + 1 }))

const buildBarConfig = (categoryOrderType: 'data' | 'custom', categoryOrder: string[] = []) => ({
  ...barChartEditorTest,
  animate: false,
  data: categoryData,
  legend: { ...barChartEditorTest.legend, hide: true },
  table: { ...barChartEditorTest.table, show: false },
  xAxis: {
    ...barChartEditorTest.xAxis,
    dataKey: 'category',
    type: 'categorical',
    categoryOrderType,
    categoryOrder
  }
})

const getRenderedCategoryOrder = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll('svg text'))
    .filter(textElement => sourceOrder.includes(textElement.textContent?.trim() || ''))
    .sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left)
    .map(textElement => textElement.textContent?.trim())
    .join(', ')

export const CategoryOrderControls: Story = {
  args: {
    config: buildBarConfig('custom', customOrder),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openAccordion(canvas, 'Date/Category Axis')

    await waitFor(() => expect(getRenderedCategoryOrder(canvasElement)).toBe(customOrder.join(', ')))

    const categoryOrderSelect = canvas.getByLabelText('Category Order')
    await performAndAssert(
      'Data order restores the source category order in the chart',
      () => getRenderedCategoryOrder(canvasElement),
      async () => userEvent.selectOptions(categoryOrderSelect, 'data'),
      (before, after) => before === customOrder.join(', ') && after === sourceOrder.join(', ')
    )
  }
}

export const CustomOrderInitialization: Story = {
  args: {
    config: buildBarConfig('data'),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openAccordion(canvas, 'Date/Category Axis')

    await waitFor(() => expect(getRenderedCategoryOrder(canvasElement)).toBe(sourceOrder.join(', ')))

    const getCategoryOrderState = () => ({
      renderedOrder: getRenderedCategoryOrder(canvasElement),
      customOrder: Array.from(canvasElement.querySelectorAll('[data-rfd-draggable-id^="categoryOrder-"]'))
        .map(element => element.textContent?.trim())
        .join(', ')
    })

    await performAndAssert(
      'Custom order initializes the full source list without changing the rendered chart',
      getCategoryOrderState,
      async () => userEvent.selectOptions(canvas.getByLabelText('Category Order'), 'custom'),
      (before, after) =>
        before.renderedOrder === sourceOrder.join(', ') &&
        before.customOrder === '' &&
        after.renderedOrder === sourceOrder.join(', ') &&
        after.customOrder === sourceOrder.join(', ')
    )
  }
}

const getRenderedPieOrder = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll('svg g[class*="slice-"]'))
    .map(
      element =>
        Array.from(element.classList)
          .find(className => className.startsWith('slice-'))
          ?.slice(6) || ''
    )
    .filter(category => sourceOrder.includes(category))
    .join(', ')

export const PieSegmentOrderControls: Story = {
  args: {
    config: {
      ...pieConfig,
      animate: false,
      data: pieData,
      formattedData: pieData,
      legend: { ...pieConfig.legend, hide: true },
      table: { ...pieConfig.table, show: false },
      xAxis: {
        ...pieConfig.xAxis,
        dataKey: 'category',
        type: 'categorical',
        categoryOrderType: 'custom',
        categoryOrder: customOrder
      },
      yAxis: { ...pieConfig.yAxis, dataKey: 'value' }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    const segmentOrderSelect = canvas.getByLabelText('Segment Order')
    const segmentsPanel = segmentOrderSelect.closest('.accordion__panel')
    const segmentsButton = segmentsPanel?.parentElement?.querySelector<HTMLElement>('.accordion__button')
    expect(segmentsPanel).toBeTruthy()
    expect(segmentsButton).toBeTruthy()
    if (segmentsPanel?.hasAttribute('hidden')) {
      await userEvent.click(segmentsButton!)
    }

    await waitFor(() => expect(segmentOrderSelect).toBeVisible())
    expect(canvas.queryByLabelText('Category Order')).not.toBeInTheDocument()

    await waitFor(() => expect(getRenderedPieOrder(canvasElement)).toBe(customOrder.join(', ')))

    await performAndAssert(
      'Data order restores the source Pie slice order',
      () => getRenderedPieOrder(canvasElement),
      async () => userEvent.selectOptions(segmentOrderSelect, 'data'),
      (before, after) => before === customOrder.join(', ') && after === sourceOrder.join(', ')
    )
  }
}
