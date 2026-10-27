import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForEditor,
  waitForPresence
} from '@cdc/core/helpers/testing'
import EditorContext from '@cdc/core/contexts/EditorContext'
import CdcMap from '../CdcMap'
import { createNewMapConfig } from '../helpers/createNewMapConfig'
import numericFixture from './_mock/bubble-tabbed-numeric.json'

export default { title: 'Components/Templates/Map/Overlay Legends', component: CdcMap } as Meta<typeof CdcMap>
type Story = StoryObj<typeof CdcMap>
const label = 'Hide unused pattern/bubble legends'
const config = createNewMapConfig({
  ...numericFixture,
  columns: { ...numericFixture.columns, geo: { name: 'State' }, primary: { name: 'Cases' } },
  data: numericFixture.data.map(row => ({ ...row, Cases: row.Tab === 'Earlier' ? 0 : row.Cases, Status: row.Tab })),
  legend: { ...numericFixture.legend, style: 'boxes', unified: true, hideUnusedPatternAndBubbleLegends: true },
  map: {
    patterns: [
      { dataKey: 'Status', dataValue: 'Earlier', label: 'Earlier overlay', pattern: 'circles', size: 'medium' },
      { dataKey: 'Status', dataValue: 'Later', label: 'Later overlay', pattern: 'diagonalLines', size: 'medium' }
    ]
  }
} as any)

const Reloadable = ({ config }) => {
  const [saved, setSaved] = useState(config)
  const [loaded, setLoaded] = useState(config)
  const [revision, setRevision] = useState(0)
  return (
    <EditorContext.Provider value={{ setTempConfig: setSaved } as any}>
      <button
        onClick={() => {
          setLoaded(JSON.parse(JSON.stringify(saved)))
          setRevision(revision + 1)
        }}
      >
        Reload saved map
      </button>
      <output data-testid='saved-setting'>{String(saved.legend.hideUnusedPatternAndBubbleLegends)}</output>
      <CdcMap key={revision} config={loaded} isEditor />
    </EditorContext.Provider>
  )
}

export const Filtered_Usage_And_Save: Story = {
  args: { config, isEditor: true },
  render: args => <Reloadable config={args.config} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await assertVisualizationRendered(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Legend')
    const control = canvas.getByRole('checkbox', { name: label })
    expect(control).toBeChecked()
    const tooltipTarget = control.closest('.d-flex')!.querySelector('.cove-tooltip--target')!
    await performAndAssert(
      'Explain unused overlay legends in the tooltip',
      () => Boolean(canvas.queryByRole('tooltip')),
      () => userEvent.hover(tooltipTarget),
      (_before, after) => after
    )
    expect(
      await canvas.findByText(
        'Hide pattern and bubble legends when their overlays are unused in the current filtered view. Bubble sizes and colors stay consistent across filters.'
      )
    ).toBeVisible()
    await userEvent.unhover(tooltipTarget)
    expect(
      canvas.getByRole('checkbox', { name: 'Unified Legend', exact: true }).compareDocumentPosition(control) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
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
      'Disabling the setting preserves existing legends',
      () => sizeKey(),
      () => userEvent.click(control),
      (_before, after) => after === beforeKey
    )
    expect(legend().textContent).toContain('Later overlay')
    await userEvent.click(canvas.getByRole('button', { name: 'Reload saved map' }))
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Legend')
    expect(canvas.getByRole('checkbox', { name: label })).not.toBeChecked()
    expect(canvas.getByTestId('saved-setting').textContent).toBe('false')
    await userEvent.click(canvas.getByRole('checkbox', { name: label }))
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

export const Draft_Layer_Control: Story = {
  args: {
    config: createNewMapConfig({ ...numericFixture, bubble: { layers: [] }, map: { patterns: [] } } as any),
    isEditor: true
  },
  render: args => <Reloadable config={args.config} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Legend')
    expect(canvas.queryByRole('checkbox', { name: label })).not.toBeInTheDocument()
    await openAccordion(canvas, 'Bubble Layers')
    await userEvent.click(canvas.getByRole('button', { name: 'Add Bubble Layer' }))
    await openAccordion(canvas, 'Legend')
    expect(canvas.getByRole('checkbox', { name: label })).toBeChecked()
    await userEvent.click(canvas.getByRole('checkbox', { name: label }))
    await openAccordion(canvas, 'Bubble Layers')
    await userEvent.click(canvas.getByRole('button', { name: 'Layer 1', exact: true }))
    await userEvent.click(canvas.getByRole('button', { name: 'Remove Layer' }))
    await openAccordion(canvas, 'Legend')
    expect(canvas.queryByRole('checkbox', { name: label })).not.toBeInTheDocument()
    expect(canvas.getByTestId('saved-setting').textContent).toBe('false')
    await openAccordion(canvas, 'Bubble Layers')
    await userEvent.click(canvas.getByRole('button', { name: 'Add Bubble Layer' }))
    await openAccordion(canvas, 'Legend')
    expect(canvas.getByRole('checkbox', { name: label })).not.toBeChecked()
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
