import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, performAndAssert, waitForPresence } from '@cdc/core/helpers/testing'
import CdcMap from '../CdcMap'
import numericFixture from './_mock/bubble-tabbed-numeric.json'
import categoryFixture from './_mock/bubble-tabbed-category.json'

export default { title: 'Components/Templates/Map/Bubble Sizing', component: CdcMap } as Meta<typeof CdcMap>
type Story = StoryObj<typeof CdcMap>

const tabbedStory = (fixture: typeof numericFixture, reversed = false): Story => ({
  args: { config: { ...fixture, data: reversed ? [...fixture.data].reverse() : fixture.data }, isEditor: true },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    const canvas = within(canvasElement)
    const sizeLegend = () => canvasElement.querySelector('ul[aria-label="Bubble size legend items"]')
    const labels = () => Array.from(sizeLegend()?.querySelectorAll('li') ?? []).map(item => item.textContent?.trim())
    const expectedLabels =
      fixture.bubble.layers[0].sizeType === 'category' ? ['1-10', '11-50', '51-100'] : ['10', '50', '100']
    expect(labels()).toEqual(expectedLabels)
    expect(canvasElement.querySelector('circle.bubble[data-tooltip-html*="Alabama"]')).toHaveAttribute('r', '20')
    const legendRadiusRatios = () => {
      const radii = Array.from(sizeLegend()?.querySelectorAll('circle') ?? []).map(marker =>
        Number(marker.getAttribute('r'))
      )
      return radii.map(radius => radius / Math.max(...radii))
    }
    const ratiosBefore = legendRadiusRatios()
    await performAndAssert(
      'Earlier tab uses the same size domain',
      () => canvasElement.querySelectorAll('circle.bubble').length,
      () => userEvent.click(canvas.getByRole('button', { name: 'Earlier', exact: true })),
      (_before, after) => after === 1
    )
    legendRadiusRatios().forEach((ratio, index) => expect(ratio).toBeCloseTo(ratiosBefore[index]))
    expect(labels()).toEqual(expectedLabels)
    const earlierBubble = canvasElement.querySelector('circle.bubble')
    expect(Number(earlierBubble?.getAttribute('r'))).toBeCloseTo(
      fixture.bubble.layers[0].sizeType === 'category' ? 4 : 4 + (9 / 99) * 16
    )
    await performAndAssert(
      'Later tab keeps its maximum radius',
      () => canvasElement.querySelectorAll('circle.bubble').length,
      () => userEvent.click(canvas.getByRole('button', { name: 'Later', exact: true })),
      (_before, after) => after === 2
    )
    expect(canvasElement.querySelector('circle.bubble[data-tooltip-html*="Alabama"]')).toHaveAttribute('r', '20')
  }
})

export const Numeric_Tabs = tabbedStory(numericFixture)
export const Numeric_Tabs_Reversed = tabbedStory(numericFixture, true)
export const Categorical_Tabs = tabbedStory(categoryFixture)
export const Categorical_Tabs_Reversed = tabbedStory(categoryFixture, true)

const singleItemStory = (label: string): Story => ({
  args: {
    isEditor: true,
    config: {
      ...categoryFixture,
      legend: {
        ...categoryFixture.legend,
        style: 'gradient',
        position: 'top',
        hideUnusedPatternAndBubbleLegends: false
      },
      data: categoryFixture.data.map(row => ({
        ...row,
        'Size Category': row.Tab === 'Earlier' && row.State === 'California' ? '1' : '0'
      })),
      bubble: {
        layers: [
          {
            ...categoryFixture.bubble.layers[0],
            minBubbleSize: 14,
            maxBubbleSize: 14,
            columns: { geo: { name: 'State' }, primary: { name: '' }, size: { name: 'Size Category' } },
            legend: { show: false, size: { show: true, title: '', singleItemLabel: label } }
          }
        ]
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const canvas = within(canvasElement)
    const selector = '.bubble-size-legend--single-item-label'
    await waitForPresence(selector, canvasElement)
    const list = canvasElement.querySelector(selector)!
    const text = list.querySelector('span')!
    expect(text.textContent).toBe(label)
    expect(getComputedStyle(text).fontSize).toBe(getComputedStyle(list).fontSize)
    expect(getComputedStyle(list.querySelector('li')!).whiteSpace).toBe('normal')
    // The saved active tab has no markers, but retains the shared legend.
    expect(canvasElement.querySelectorAll('circle.bubble')).toHaveLength(0)
    await performAndAssert(
      'Single-item label survives filtering to a year with a marker',
      () => canvasElement.querySelectorAll('circle.bubble').length,
      () => userEvent.click(canvas.getByRole('button', { name: 'Earlier', exact: true })),
      (_before, after) => after === 1
    )
    expect(canvasElement.querySelector(selector)?.textContent).toBe(label)
  }
})

export const Single_Item_Label = singleItemStory('Cases in the last 4 weeks')
export const Single_Item_Long_Label = singleItemStory(
  'Locations reporting cases in the last four weeks, including cases still under investigation'
)
