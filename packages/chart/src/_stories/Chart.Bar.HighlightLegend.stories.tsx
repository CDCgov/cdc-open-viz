import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, performAndAssert } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import highlightConfig from './_mock/bar-highlight-legend.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Legend/Highlighted Bars',
  component: Chart
}
export default meta
type Story = StoryObj<typeof Chart>

const makeStory = (
  orientation: 'vertical' | 'horizontal',
  behavior: 'isolate' | 'highlight',
  grouped = false
): Story => ({
  args: {
    isEditor: false,
    config: {
      ...highlightConfig,
      orientation,
      legend: { ...highlightConfig.legend, behavior },
      highlightedBarValues: grouped
        ? [
            ...highlightConfig.highlightedBarValues,
            { ...highlightConfig.highlightedBarValues[0], value: 'Non-Hispanic White' }
          ]
        : highlightConfig.highlightedBarValues
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await assertVisualizationRendered(canvasElement)
    const getBars = () => Array.from(canvasElement.querySelectorAll<SVGPathElement>('path[id^="barGroup"]'))
    const getBarState = () => ({
      visible: getBars()
        .filter(bar => getComputedStyle(bar).display !== 'none')
        .map(bar => bar.id),
      emphasized: getBars()
        .filter(bar => getComputedStyle(bar).display !== 'none' && Number(getComputedStyle(bar).opacity) === 1)
        .map(bar => bar.id)
    })
    const expectedIds = grouped ? ['barGroup1', 'barGroup4'] : ['barGroup1']
    const isSelected = (_before: unknown, after: ReturnType<typeof getBarState>) =>
      after.visible.length === (behavior === 'isolate' ? expectedIds.length : 5) &&
      JSON.stringify(after.emphasized) === JSON.stringify(expectedIds)

    await performAndAssert(
      'All five bars render initially',
      getBarState,
      async () => {},
      (_before, after) => after.visible.length === 5
    )

    // The regular series entry includes the outlined bar and is independently selectable.
    await userEvent.click(canvas.getByRole('button', { name: 'Age-adjusted rate' }))
    expect(canvas.getByRole('button', { name: 'Show All' })).toBeInTheDocument()
    expect(getBarState().visible).toHaveLength(5)
    await userEvent.click(canvas.getByRole('button', { name: 'Age-adjusted rate' }))

    await performAndAssert(
      'Select highlighted categories',
      getBarState,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Optional Legend Title' })),
      isSelected
    )
    expect(canvasElement.querySelector('#barGroup1')).toHaveAttribute('stroke', '#FFA500')

    await performAndAssert(
      'Toggle the highlight off with Enter',
      getBarState,
      async () => {
        canvas.getByRole('button', { name: 'Optional Legend Title' }).focus()
        await userEvent.keyboard('{Enter}')
      },
      (_before, after) => after.visible.length === 5 && after.emphasized.length === 5
    )

    await performAndAssert(
      'Select the highlight with Space',
      getBarState,
      async () => userEvent.keyboard(' '),
      isSelected
    )
    await performAndAssert(
      'Show All restores the bars',
      getBarState,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Show All' })),
      (_before, after) => after.visible.length === 5 && after.emphasized.length === 5
    )

    await userEvent.click(canvas.getByRole('button', { name: 'Optional Legend Title' }))
    await performAndAssert(
      'Selecting both entries restores all bars',
      getBarState,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Age-adjusted rate' })),
      (_before, after) => after.visible.length === 5 && after.emphasized.length === 5
    )
    expect(canvas.queryByRole('button', { name: 'Show All' })).not.toBeInTheDocument()
  }
})

export const VerticalIsolate = makeStory('vertical', 'isolate')
export const HorizontalIsolate = makeStory('horizontal', 'isolate')
export const VerticalHighlight = makeStory('vertical', 'highlight')
export const HorizontalHighlight = makeStory('horizontal', 'highlight')
export const VerticalGroupedHighlights = makeStory('vertical', 'isolate', true)
export const HorizontalGroupedHighlights = makeStory('horizontal', 'isolate', true)
