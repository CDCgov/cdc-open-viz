import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForEditor,
  waitForPresence
} from '@cdc/core/helpers/testing'
import CdcMap from '../CdcMap'
import { createNewMapConfig } from '../helpers/createNewMapConfig'
import numericFixture from './_mock/bubble-tabbed-numeric.json'

export default { title: 'Components/Templates/Map/Overlay Legends', component: CdcMap } as Meta<typeof CdcMap>
type Story = StoryObj<typeof CdcMap>
const config = createNewMapConfig({
  ...numericFixture,
  columns: { ...numericFixture.columns, geo: { name: 'State' }, primary: { name: 'Cases' } },
  data: numericFixture.data.map(row => ({ ...row, Cases: row.Tab === 'Earlier' ? 0 : row.Cases, Status: row.Tab })),
  legend: { ...numericFixture.legend, style: 'boxes', unified: true },
  map: {
    patterns: [
      { dataKey: 'Status', dataValue: 'Earlier', label: 'Earlier overlay', pattern: 'circles', size: 'medium' },
      { dataKey: 'Status', dataValue: 'Later', label: 'Later overlay', pattern: 'diagonalLines', size: 'medium' }
    ]
  }
} as any)

export const Filtered_Usage: Story = {
  args: { config, isEditor: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await assertVisualizationRendered(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Legend')
    expect(canvas.queryByRole('checkbox', { name: 'Hide unused pattern/bubble legends' })).not.toBeInTheDocument()
    const legend = () => canvasElement.querySelector('aside[aria-label="Legend"]')!
    const sizeKey = () => legend().querySelector('ul[aria-label="Bubble size legend items"]')?.textContent
    const beforeKey = sizeKey()
    const appearance = () =>
      Array.from(canvasElement.querySelectorAll('circle.bubble')).map(el => [
        el.getAttribute('r'),
        el.getAttribute('fill')
      ])
    const beforeAppearance = appearance()
    expect(legend().textContent).toContain('Later overlay')
    expect(legend().textContent).not.toContain('Earlier overlay')
    await performAndAssert(
      'Hide unused bubble legends in the earlier tab',
      () => sizeKey(),
      () => userEvent.click(canvas.getByRole('button', { name: 'Earlier', exact: true })),
      (_before, after) => !after
    )
    expect(legend().textContent).toContain('Earlier overlay')
    expect(legend().textContent).not.toContain('Later overlay')
    await performAndAssert(
      'Restore later overlay legends',
      () => sizeKey(),
      () => userEvent.click(canvas.getByRole('button', { name: 'Later', exact: true })),
      (_before, after) => after === beforeKey
    )
    expect(appearance()).toEqual(beforeAppearance)
    const buttons = within(legend()).getAllByRole('button', { name: /^Bubble legend item/ })
    await userEvent.click(buttons[0])
    expect(within(legend()).getAllByRole('button', { name: /^Bubble legend item/ })).toHaveLength(buttons.length)
    await userEvent.click(within(legend()).getByRole('button', { name: 'Show All' }))
    expect(sizeKey()).toBe(beforeKey)
  }
}

// Old saved values cannot opt out of automatic filtering.
export const Legacy_Setting_Ignored: Story = {
  ...Filtered_Usage,
  args: {
    config: { ...config, legend: { ...config.legend, hideUnusedPatternAndBubbleLegends: false } } as any,
    isEditor: true
  }
}

export const Shared_Later_Tile: Story = {
  args: {
    config: {
      ...config,
      filters: [],
      smallMultiples: { mode: true, tileColumn: 'Tab', tilesPerRowDesktop: 2, tilesPerRowMobile: 1 }
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const canvas = within(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    const legend = canvasElement.querySelector('aside[aria-label="Legend"]')!
    expect(legend.textContent).toContain('Earlier overlay')
    expect(legend.textContent).toContain('Later overlay')
    expect(within(legend).getByRole('list', { name: 'Bubble size legend items' })).toBeVisible()
    expect(within(legend).getByRole('list', { name: 'Bubble legend items' })).toBeVisible()
    expect(canvas.getByText('Later', { selector: '.tile-title' })).toBeVisible()
  }
}
