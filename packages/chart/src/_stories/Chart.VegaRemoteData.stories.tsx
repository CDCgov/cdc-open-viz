import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import Chart from '../CdcChart'
import config from '../../examples/vega-remote.json'
import remoteDataUrl from '../../examples/__data__/vega-remote-data.json?url'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Vega Remote Data',
  component: Chart
}

export default meta

type Story = StoryObj<typeof Chart>

export const ProcessesFetchedData: Story = {
  args: {
    config: { ...config, dataUrl: remoteDataUrl } as any,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const table = await within(canvasElement).findByRole('table', { name: /data table showing data for the chart/i })
    expect(within(table).getByRole('columnheader', { name: 'Alpha' })).toBeVisible()
    expect(within(table).getByRole('gridcell', { name: '20' })).toBeVisible()
    expect(within(table).getByRole('columnheader', { name: 'Beta' })).toBeVisible()
    expect(within(table).getByRole('gridcell', { name: '40' })).toBeVisible()
  }
}
