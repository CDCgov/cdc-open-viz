import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import axisAlignStackedBar from './_mock/legend-axis-align-stacked-bar.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered, openAccordion, waitForEditor } from '@cdc/core/helpers/testing'
import { expect, waitFor, within } from 'storybook/test'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Legend/Axis Align',
  component: Chart,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof Chart>

const isolatedSeries = 'Sub-1 Rate'

const getConfig = (axisAlign: boolean) =>
  editConfigKeys(axisAlignStackedBar, [
    { path: ['title'], value: axisAlign ? 'Sub-1 values start at zero' : 'Sub-1 values keep stack offset' },
    { path: ['legend', 'axisAlign'], value: axisAlign },
    { path: ['legend', 'seriesHighlight'], value: [isolatedSeries] }
  ])

const getPathYValues = (path: SVGPathElement) => {
  const values = [...(path.getAttribute('d') || '').matchAll(/-?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?/gi)].map(match =>
    Number(match[0])
  )

  return values.filter((_value, index) => index % 2 === 1).filter(Number.isFinite)
}

const getVisibleBarBounds = (panel: Element) => {
  const bars = Array.from(panel.querySelectorAll<SVGPathElement>('.stack.vertical path')).filter(
    bar => getComputedStyle(bar).display !== 'none'
  )
  const bounds = bars
    .map(getPathYValues)
    .filter(yValues => yValues.length)
    .map(yValues => ({
      top: Math.min(...yValues),
      bottom: Math.max(...yValues)
    }))

  return {
    count: bounds.length,
    top: Math.min(...bounds.map(bound => bound.top)),
    bottom: Math.max(...bounds.map(bound => bound.bottom)),
    height: Math.max(...bounds.map(bound => bound.bottom)) - Math.min(...bounds.map(bound => bound.top))
  }
}

const panelStyle = {
  border: '1px solid #d9dfe7',
  borderRadius: 6,
  padding: 16,
  minWidth: 0,
  background: '#fff'
}

export const Stacked_Bar_Isolate_Comparison: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 16,
        padding: 16,
        background: '#f7f8fa'
      }}
    >
      <section style={panelStyle} data-axis-align='true'>
        <Chart config={getConfig(true)} isEditor={false} />
      </section>
      <section style={panelStyle} data-axis-align='false'>
        <Chart config={getConfig(false)} isEditor={false} />
      </section>
    </div>
  ),
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    await waitFor(() => {
      const alignedPanel = canvasElement.querySelector('[data-axis-align="true"]')
      const offsetPanel = canvasElement.querySelector('[data-axis-align="false"]')

      expect(alignedPanel).toBeTruthy()
      expect(offsetPanel).toBeTruthy()

      const alignedBarBounds = getVisibleBarBounds(alignedPanel!)
      const offsetBarBounds = getVisibleBarBounds(offsetPanel!)

      expect(alignedBarBounds.count).toBeGreaterThan(0)
      expect(offsetBarBounds.count).toBeGreaterThan(0)
      expect(alignedBarBounds.bottom).toBeGreaterThan(offsetBarBounds.bottom)
      expect(alignedBarBounds.height).toBeGreaterThanOrEqual(2.5)
    })
  }
}

export const Sub_One_Left_Axis_100_Editor: Story = {
  args: {
    config: getConfig(true),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await openAccordion(canvas, 'Legend')
    await assertVisualizationRendered(canvasElement)

    const axisAlignCheckbox = canvas.getByLabelText(/align to axis on isolate/i) as HTMLInputElement
    expect(axisAlignCheckbox).toBeChecked()
  }
}
