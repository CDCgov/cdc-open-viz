import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, within } from 'storybook/test'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered, performAndAssert, waitForPresence } from '@cdc/core/helpers/testing'
import CdcMap from '../CdcMap'
import type { MapConfig } from '../types/MapConfig'
import EqualNumberMap from './_mock/equal-number.json'

const longFormatStateData = [
  { STATE: 'AL', Year: 2021, Rate: 10 },
  { STATE: 'CA', Year: 2021, Rate: 30 },
  { STATE: 'NY', Year: 2021, Rate: 50 },
  { STATE: 'AL', Year: 2022, Rate: 20 },
  { STATE: 'CA', Year: 2022, Rate: 40 },
  { STATE: 'NY', Year: 2022, Rate: 60 },
  { STATE: 'AL', Year: 2023, Rate: 70 },
  { STATE: 'CA', Year: 2023, Rate: 80 },
  { STATE: 'NY', Year: 2023, Rate: 90 }
]

const baseConfig = editConfigKeys(EqualNumberMap, [
  { path: ['general', 'title'], value: 'State rates over time' },
  {
    path: ['general', 'subtext'],
    value: 'Use Play, Pause, Replay, or the time slider to explore state rates by year.'
  },
  { path: ['general', 'showSidebar'], value: false },
  { path: ['legend', 'numberOfItems'], value: 3 },
  { path: ['legend', 'position'], value: 'top' },
  { path: ['columns', 'primary', 'suffix'], value: '%' },
  {
    path: ['columns', 'Year'],
    value: { name: 'Year', label: 'Year', tooltip: true, dataTable: true }
  },
  { path: ['data'], value: longFormatStateData }
]) as MapConfig

const timePlaybackConfig = {
  ...baseConfig,
  timePlayback: {
    enabled: true,
    column: 'Year',
    secondsPerFrame: 1.5,
    order: 'ascending',
    customOrder: []
  }
} as MapConfig

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Time Playback',
  component: CdcMap,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Time playback for long-format U.S. state data. The latest year appears initially; playback begins at the earliest year and keeps the map, tooltips, table, and fixed legend synchronized.'
      }
    }
  }
}

type Story = StoryObj<typeof CdcMap>

export const StateRatesOverTime: Story = {
  args: {
    config: timePlaybackConfig,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Three ordered years are supplied for Alabama, California, and New York. Playback selects one complete state frame at a time.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const stateNames = ['Alabama', 'California', 'New York']
    for (const stateName of stateNames) {
      await waitForPresence(`g.geo-group[id="${stateName}"]`, canvasElement)
    }

    const canvas = within(canvasElement)
    const getPlaybackState = () => ({
      period: canvas.getByTestId('map-time-playback-period').textContent,
      action: canvas.getByRole('button', { name: /^(play|pause|replay)$/i }).textContent?.trim(),
      alabamaTooltip: canvasElement.querySelector('g.geo-group[id="Alabama"]')?.getAttribute('data-tooltip-html') || ''
    })

    expect(getPlaybackState()).toMatchObject({ period: '2023', action: 'Play' })
    expect(getPlaybackState().alabamaTooltip).toContain('Rate: 70%')
    expect(getPlaybackState().alabamaTooltip).toContain('Year: 2023')

    await performAndAssert(
      'Play starts at the earliest frame',
      getPlaybackState,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Play' })),
      (_before, after) =>
        after.period === '2021' &&
        after.action === 'Pause' &&
        after.alabamaTooltip.includes('Rate: 10%') &&
        after.alabamaTooltip.includes('Year: 2021')
    )

    await userEvent.click(canvas.getByRole('button', { name: 'Pause' }))
    const slider = canvas.getByRole('slider', { name: 'Time period' })
    await performAndAssert(
      'Scrubbing selects and pauses on a frame',
      getPlaybackState,
      async () => fireEvent.change(slider, { target: { value: '1' } }),
      (_before, after) =>
        after.period === '2022' &&
        after.action === 'Play' &&
        after.alabamaTooltip.includes('Rate: 20%') &&
        after.alabamaTooltip.includes('Year: 2022')
    )

    fireEvent.change(slider, { target: { value: '2' } })
    expect(canvas.getByRole('button', { name: 'Replay' })).toBeInTheDocument()

    await performAndAssert(
      'Replay returns to the earliest frame and resumes',
      getPlaybackState,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Replay' })),
      (_before, after) => after.period === '2021' && after.action === 'Pause'
    )
  }
}

export default meta
