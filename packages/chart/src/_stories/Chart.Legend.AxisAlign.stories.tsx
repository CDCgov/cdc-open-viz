import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import axisAlignStackedBar from './_mock/legend-axis-align-stacked-bar.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Legend/Axis Align',
  component: Chart,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof Chart>

const isolatedSeries = 'Program B'

const getConfig = (axisAlign: boolean) =>
  editConfigKeys(axisAlignStackedBar, [
    { path: ['title'], value: `axisAlign: ${axisAlign}` },
    { path: ['legend', 'axisAlign'], value: axisAlign },
    { path: ['legend', 'seriesHighlight'], value: [isolatedSeries] }
  ])

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
  }
}
