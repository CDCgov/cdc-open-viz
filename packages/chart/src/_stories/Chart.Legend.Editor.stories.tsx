import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, openAccordion, performAndAssert, waitForEditor } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import barChartEditorTest from './_mock/editor-tests/bar-chart-editor-test.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Editor Tests/Legend',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

const config = {
  ...barChartEditorTest,
  series: [
    { ...barChartEditorTest.series[0] },
    {
      ...barChartEditorTest.series[0],
      dataKey: 'Black, non-Hispanic'
    }
  ],
  legend: {
    ...barChartEditorTest.legend,
    position: 'right',
    style: 'boxes',
    singleRow: false,
    hideBorder: {
      side: false,
      topBottom: true
    }
  }
}

const getLegend = (canvasElement: HTMLElement) =>
  canvasElement.querySelector<HTMLElement>('[role="region"][aria-label="legend"]')

export const StandardLegendSection: Story = {
  name: 'Standard Legend Section',
  args: {
    config,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Legend')
    await assertVisualizationRendered(canvasElement)

    const position = canvas.getByLabelText('Position') as HTMLSelectElement
    const style = canvas.getByLabelText(/legend style/i) as HTMLSelectElement
    const hideBox = canvas.getByLabelText(/hide legend box/i) as HTMLInputElement
    const title = canvas.getByLabelText('Title') as HTMLInputElement
    const description = canvas.getByLabelText('Legend Description') as HTMLTextAreaElement
    const hideLegend = canvasElement.querySelector('input[name="hide"]') as HTMLInputElement
    expect(hideLegend).toBeTruthy()
    await performAndAssert(
      'Position moves the rendered legend from right to left',
      () => ({
        right: Boolean(canvasElement.querySelector('.legend-container.right')),
        left: Boolean(canvasElement.querySelector('.legend-container.left'))
      }),
      () => userEvent.selectOptions(position, 'left'),
      (before, after) => before.right && !before.left && !after.right && after.left
    )

    await performAndAssert(
      'Position moves the rendered legend from left to bottom',
      () => ({
        left: Boolean(canvasElement.querySelector('.legend-container.left')),
        bottom: Boolean(canvasElement.querySelector('.legend-container.bottom'))
      }),
      () => userEvent.selectOptions(position, 'bottom'),
      (before, after) => before.left && !before.bottom && !after.left && after.bottom
    )

    await performAndAssert(
      'Position moves the rendered legend from bottom to top',
      () => ({
        bottom: Boolean(canvasElement.querySelector('.legend-container.bottom')),
        top: Boolean(canvasElement.querySelector('.legend-container.top'))
      }),
      () => userEvent.selectOptions(position, 'top'),
      (before, after) => before.bottom && !before.top && !after.bottom && after.top
    )

    await performAndAssert(
      'Legend Style updates rendered marker shape',
      () => {
        const marker = getLegend(canvasElement)?.querySelector<HTMLElement>('span.legend-item')
        return marker ? getComputedStyle(marker).borderRadius : ''
      },
      () => userEvent.selectOptions(style, 'circles'),
      (before, after) => before !== after && after.includes('50%')
    )

    const groupBy = canvas.getByLabelText(/legend group by/i) as HTMLSelectElement
    await performAndAssert(
      'Legend Group By creates rendered groups',
      () => canvasElement.querySelectorAll('.legend-group.group-label').length,
      () => userEvent.selectOptions(groupBy, 'Category'),
      (before, after) => before === 0 && after > 0
    )

    await performAndAssert(
      'Clearing Legend Group By restores the standard rendered legend',
      () => ({
        groups: canvasElement.querySelectorAll('.legend-group.group-label').length,
        items: getLegend(canvasElement)?.querySelectorAll('span.legend-item').length || 0
      }),
      () => userEvent.selectOptions(groupBy, ''),
      (before, after) => before.groups > 0 && after.groups === 0 && after.items > 0
    )

    await performAndAssert(
      'Hide Legend Box updates rendered border classes',
      () => ({
        borderless: getLegend(canvasElement)?.classList.contains('border-0') || false,
        padded: getLegend(canvasElement)?.classList.contains('p-3') || false
      }),
      () => userEvent.click(hideBox),
      (before, after) => before.borderless && !before.padded && !after.borderless && after.padded
    )

    await performAndAssert(
      'Title updates rendered legend heading',
      () => getLegend(canvasElement)?.querySelector('h3')?.textContent?.trim() || '',
      async () => {
        await userEvent.clear(title)
        await userEvent.type(title, 'Updated legend title')
      },
      (_before, after) => after === 'Updated legend title'
    )

    await performAndAssert(
      'Legend Description updates rendered prose',
      () => getLegend(canvasElement)?.querySelector('p')?.textContent?.trim() || '',
      async () => {
        await userEvent.clear(description)
        await userEvent.type(description, 'Updated legend description')
      },
      (_before, after) => after === 'Updated legend description'
    )

    await performAndAssert(
      'Hide Legend removes the rendered legend',
      () => Boolean(getLegend(canvasElement)),
      () => userEvent.click(hideLegend),
      (before, after) => before && !after
    )

    expect(canvas.getByRole('button', { name: 'Legend' })).toBeInTheDocument()
  }
}
