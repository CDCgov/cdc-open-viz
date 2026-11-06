import { useLayoutEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, openAccordion, performAndAssert, waitForEditor } from '@cdc/core/helpers/testing'
import CdcEditor from '../CdcEditor'
import baseConfig from '../../../chart/src/_stories/_mock/line_chart_dashed_dates.json'

const config = {
  ...baseConfig,
  animate: false,
  title: 'Line effect save and reload compatibility',
  dataFileName: 'line-effect-compatibility.json',
  dataFileSourceType: 'file',
  data: [
    { date: '2024-10-01', Value: '52', Status: 'final' },
    { date: '2025-01-01', Value: '57', Status: 'preliminary' },
    { date: '2025-04-01', Value: '54', Status: 'preliminary' }
  ]
}

// Reload only the JSON emitted by the production editor, with a fresh component tree.
const RoundTripEditor = args => {
  const [loaded, setLoaded] = useState({ config: args.config, revision: 0 })
  const [exported, setExported] = useState('')

  useLayoutEffect(() => {
    const captureConfig = (event: CustomEvent<string>) => setExported(event.detail)
    window.addEventListener('updateVizConfig', captureConfig)
    return () => window.removeEventListener('updateVizConfig', captureConfig)
  }, [])

  return (
    <>
      <button
        disabled={!exported}
        onClick={() => setLoaded(previous => ({ config: JSON.parse(exported), revision: previous.revision + 1 }))}
      >
        Reload exported configuration
      </button>
      <output data-testid='exported-config' hidden>
        {exported}
      </output>
      <div data-testid='editor-instance' data-revision={loaded.revision}>
        <CdcEditor {...args} key={loaded.revision} config={loaded.config} />
      </div>
    </>
  )
}

const readExportedConfig = (canvasElement: HTMLElement) =>
  JSON.parse(within(canvasElement).getByTestId('exported-config').textContent)

const getIncomingPath = (canvasElement: HTMLElement) =>
  canvasElement.querySelector<SVGPathElement>('.line-chart-group path.visx-linepath')

const assertRenderedLinePath = (path: SVGPathElement) => {
  const coordinates = (path.getAttribute('d')?.match(/-?\d*\.?\d+(?:e[+-]?\d+)?/gi) ?? []).map(Number)
  expect(coordinates.length).toBeGreaterThanOrEqual(4)
  expect(coordinates.every(Number.isFinite)).toBe(true)
  const points = Array.from(
    { length: Math.floor(coordinates.length / 2) },
    (_, index) => `${coordinates[index * 2]},${coordinates[index * 2 + 1]}`
  )
  expect(new Set(points).size).toBeGreaterThan(1)
}

const assertLineStyling = (canvasElement: HTMLElement, incomingDash: string) => {
  const incoming = getIncomingPath(canvasElement)
  expect(incoming).toHaveAttribute('stroke-dasharray', incomingDash)
  assertRenderedLinePath(incoming)
  const outgoing = canvasElement.querySelectorAll<SVGPathElement>('.line-chart-group path.visx-linepath')[1]
  expect(outgoing).toHaveAttribute('stroke-dasharray', '5 5')
  assertRenderedLinePath(outgoing)
}

const reloadExportedConfig = async (canvasElement: HTMLElement, expectedScope?: 'outgoing') => {
  const canvas = within(canvasElement)
  const saved = readExportedConfig(canvasElement)
  expect(saved).not.toHaveProperty('runtime')
  expect(saved).not.toHaveProperty('formattedData')
  expect(saved.data).toEqual(config.data)
  if (expectedScope) {
    expect(saved.preliminaryData[0]).toHaveProperty('lineEffectScope', expectedScope)
  } else {
    expect(saved.preliminaryData[0]).not.toHaveProperty('lineEffectScope')
  }

  const incomingDash = expectedScope === 'outgoing' ? '0' : '5 5'
  const originalPath = getIncomingPath(canvasElement).getAttribute('d')
  await userEvent.click(canvas.getByRole('button', { name: 'Reload exported configuration' }))
  expect(canvas.getByTestId('editor-instance')).toHaveAttribute('data-revision', '1')
  await waitForEditor(canvas)
  await assertVisualizationRendered(canvasElement)
  assertLineStyling(canvasElement, incomingDash)
  expect(getIncomingPath(canvasElement)).toHaveAttribute('d', originalPath)
}

const meta: Meta<typeof CdcEditor> = {
  title: 'Components/Pages/CdcEditor/Line Effect Compatibility',
  component: CdcEditor,
  render: args => <RoundTripEditor {...args} />
}

export default meta
type Story = StoryObj<typeof CdcEditor>

export const ExistingRuleRoundTrip: Story = {
  args: { config },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    assertLineStyling(canvasElement, '5 5')
    await openAccordion(canvas, 'Data Series')
    const effect = within(
      canvasElement.querySelector<HTMLElement>('[data-rfd-draggable-id="preliminaryData-0"] .accordion')
    )
    await openAccordion(effect, 'Effect Data 1')
    await performAndAssert(
      'Export an edited existing rule without changing its compatibility mode',
      () => readExportedConfig(canvasElement).preliminaryData[0].label,
      async () => {
        const label = effect.getByLabelText('Label', { exact: true })
        await userEvent.clear(label)
        await userEvent.type(label, 'Saved preliminary')
      },
      (before, after) => before !== after && after === 'Saved preliminary',
      () => assertLineStyling(canvasElement, '5 5')
    )
    await reloadExportedConfig(canvasElement)
    expect(canvas.getByText('Saved preliminary', { selector: '.legend-preliminary *' })).toBeVisible()
  }
}

export const NewRuleRoundTrip: Story = {
  args: { config: { ...config, preliminaryData: [] } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openAccordion(canvas, 'Data Series')
    await userEvent.click(canvas.getByRole('button', { name: 'Add Special Line' }))
    const effect = within(
      canvasElement.querySelector<HTMLElement>('[data-rfd-draggable-id="preliminaryData-0"] .accordion')
    )
    await openAccordion(effect, 'Effect Data 1')
    await userEvent.click(effect.getByRole('button', { name: 'Expand', exact: true }))
    await userEvent.click(within(effect.getByRole('list')).getByRole('option', { name: 'Value', exact: true }))
    await userEvent.selectOptions(effect.getByLabelText('COLUMN WITH CONFIGURATION VALUE'), 'Status')
    await userEvent.type(effect.getByLabelText(/VALUE TO TRIGGER/), 'preliminary')
    await performAndAssert(
      'Export a newly configured outgoing-only rule',
      () => readExportedConfig(canvasElement).preliminaryData[0].style,
      () => userEvent.selectOptions(effect.getByLabelText('Style', { exact: true }), 'Dashed Small'),
      (before, after) => before !== after && after === 'Dashed Small',
      () => assertLineStyling(canvasElement, '0')
    )
    await reloadExportedConfig(canvasElement, 'outgoing')
  }
}

const scopeSwitchRoundTrip = (initialScope?: 'outgoing', nextScope?: 'outgoing'): Story => ({
  args: {
    config: {
      ...config,
      preliminaryData: config.preliminaryData.map(rule => ({ ...rule, lineEffectScope: initialScope }))
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    assertLineStyling(canvasElement, initialScope === 'outgoing' ? '0' : '5 5')
    await openAccordion(canvas, 'Data Series')
    const effect = within(
      canvasElement.querySelector<HTMLElement>('[data-rfd-draggable-id="preliminaryData-0"] .accordion')
    )
    await openAccordion(effect, 'Effect Data 1')
    expect(effect.getByLabelText('Apply style to')).toHaveValue(initialScope ?? '')
    const incomingDash = nextScope === 'outgoing' ? '0' : '5 5'
    await performAndAssert(
      'Changing the segment selection updates the chart and survives export and reload',
      () => getIncomingPath(canvasElement)?.getAttribute('stroke-dasharray'),
      () => userEvent.selectOptions(effect.getByLabelText('Apply style to'), nextScope ?? ''),
      (before, after) => before !== after && after === incomingDash,
      () => assertLineStyling(canvasElement, incomingDash)
    )
    await reloadExportedConfig(canvasElement, nextScope)
  }
})

export const SwitchToOutgoingRoundTrip: Story = scopeSwitchRoundTrip(undefined, 'outgoing')
export const SwitchToBothRoundTrip: Story = scopeSwitchRoundTrip('outgoing')
