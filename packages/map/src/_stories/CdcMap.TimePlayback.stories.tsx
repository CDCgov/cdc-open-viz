import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, within } from 'storybook/test'
import EditorContext, { type EditorCTX } from '@cdc/core/contexts/EditorContext'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForEditor,
  waitForPresence
} from '@cdc/core/helpers/testing'
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
  { path: ['table', 'expanded'], value: true },
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

let capturedEditorTimePlayback: MapConfig['timePlayback']

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Time Playback',
  component: CdcMap,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Time playback for long-format U.S. state data. The latest year appears initially; playback begins at the earliest year, keeps map surfaces synchronized to the selected frame, and leaves every eligible frame available in the data table.'
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
          'Three ordered years are supplied for Alabama, California, and New York. Playback selects one complete state frame at a time while the table retains all nine state/year rows.'
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
      alabamaTooltip: canvasElement.querySelector('g.geo-group[id="Alabama"]')?.getAttribute('data-tooltip-html') || '',
      tablePeriods: Array.from(
        canvas
          .getByRole('table', { name: /data table showing data for the united states map figure/i })
          .querySelectorAll('tbody tr')
      ).map(row => row.textContent?.match(/202[1-3]/)?.[0]),
      tableLocations: Array.from(
        canvas
          .getByRole('table', { name: /data table showing data for the united states map figure/i })
          .querySelectorAll('tbody tr')
      ).map(row => row.querySelector('td')?.textContent?.trim()),
      activeTick: canvasElement.querySelector('.map-time-playback__tick[data-active="true"]')?.textContent,
      previousDisabled: (canvas.getByRole('button', { name: 'Previous' }) as HTMLButtonElement).disabled,
      nextDisabled: (canvas.getByRole('button', { name: 'Next' }) as HTMLButtonElement).disabled
    })

    expect(getPlaybackState()).toMatchObject({
      period: '2023',
      action: 'Play',
      tablePeriods: ['2021', '2021', '2021', '2022', '2022', '2022', '2023', '2023', '2023'],
      tableLocations: [
        'Alabama',
        'California',
        'New York',
        'Alabama',
        'California',
        'New York',
        'Alabama',
        'California',
        'New York'
      ],
      activeTick: '2023',
      previousDisabled: false,
      nextDisabled: true
    })
    expect(getPlaybackState().alabamaTooltip).toContain('Rate: 70%')
    expect(getPlaybackState().alabamaTooltip).toContain('Year: 2023')
    expect(canvasElement.querySelector('.map-container')?.previousElementSibling).toBe(
      canvasElement.querySelector('.map-time-playback__transport')
    )
    expect(canvasElement.querySelector('.map-container')?.nextElementSibling).toBe(
      canvasElement.querySelector('.map-time-playback__slider')
    )
    const transport = canvasElement.querySelector('.map-time-playback__transport') as HTMLElement
    const transportStep = canvasElement.querySelector('.map-time-playback__transport-step') as HTMLElement
    expect(getComputedStyle(transport).flexWrap).toBe('nowrap')
    expect(getComputedStyle(transport).marginBottom).toBe('24px')
    expect(transport.lastElementChild).toBe(transportStep)
    expect(getComputedStyle(canvas.getByTestId('map-time-playback-period')).overflowWrap).toBe('anywhere')
    expect(canvasElement.querySelectorAll('.map-time-playback__tick')).toHaveLength(longFormatStateData.length / 3)
    expect(
      Array.from(canvasElement.querySelectorAll('.map-time-playback__tick-label')).map(label => label.textContent)
    ).toEqual(['2021', '2022', '2023'])
    const sliderTrack = canvasElement.querySelector('.map-time-playback__slider-track') as HTMLElement
    const tickRail = canvasElement.querySelector('.map-time-playback__ticks') as HTMLElement
    expect(sliderTrack).toContainElement(canvas.getByRole('slider', { name: 'Time period' }))
    expect(sliderTrack).toContainElement(tickRail)
    expect(getComputedStyle(sliderTrack).getPropertyValue('--playback-slider-thumb-size').trim()).toBe('1rem')
    expect(getComputedStyle(tickRail).paddingLeft).toBe('8px')
    const firstTickStyle = getComputedStyle(canvasElement.querySelector('.map-time-playback__tick') as HTMLElement)
    expect(firstTickStyle.flexBasis).toBe('0px')
    expect(firstTickStyle.minWidth).toBe('0px')

    await performAndAssert(
      'Play starts at the earliest frame',
      getPlaybackState,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Play' })),
      (_before, after) =>
        after.period === '2021' &&
        after.action === 'Pause' &&
        after.activeTick === '2021' &&
        after.tablePeriods.join(',') === '2021,2021,2021,2022,2022,2022,2023,2023,2023' &&
        after.alabamaTooltip.includes('Rate: 10%') &&
        after.alabamaTooltip.includes('Year: 2021')
    )

    await performAndAssert(
      'Next selects one frame and pauses playback',
      getPlaybackState,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Next' })),
      (_before, after) =>
        after.period === '2022' &&
        after.action === 'Play' &&
        !after.previousDisabled &&
        !after.nextDisabled &&
        after.tablePeriods.join(',') === '2021,2021,2021,2022,2022,2022,2023,2023,2023'
    )

    await userEvent.click(canvas.getByRole('button', { name: 'Previous' }))
    expect(getPlaybackState()).toMatchObject({ period: '2021', previousDisabled: true, nextDisabled: false })
    const slider = canvas.getByRole('slider', { name: 'Time period' })
    await performAndAssert(
      'Scrubbing selects and pauses on a frame',
      getPlaybackState,
      async () => fireEvent.change(slider, { target: { value: '1' } }),
      (_before, after) =>
        after.period === '2022' &&
        after.action === 'Play' &&
        after.activeTick === '2022' &&
        after.tablePeriods.join(',') === '2021,2021,2021,2022,2022,2022,2023,2023,2023' &&
        after.alabamaTooltip.includes('Rate: 20%') &&
        after.alabamaTooltip.includes('Year: 2022')
    )

    fireEvent.change(slider, { target: { value: '2' } })
    expect(canvas.getByRole('button', { name: 'Replay' })).toBeInTheDocument()
    expect(getPlaybackState().nextDisabled).toBe(true)

    await performAndAssert(
      'Replay returns to the earliest frame and resumes',
      getPlaybackState,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Replay' })),
      (_before, after) => after.period === '2021' && after.action === 'Pause'
    )
  }
}

export const TimePlaybackEditorControls: Story = {
  args: {
    config: timePlaybackConfig,
    isEditor: true
  },
  decorators: [
    Story => (
      <EditorContext.Provider
        value={
          {
            setTempConfig: (config: MapConfig) => {
              capturedEditorTimePlayback = config.timePlayback
            }
          } as unknown as EditorCTX
        }
      >
        <Story />
      </EditorContext.Provider>
    )
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await waitForPresence('.map-time-playback__transport', canvasElement)
    await openAccordion(canvas, 'Time Playback')

    const showSliderCheckbox = canvas.getByLabelText('Show Time Slider')
    const getSliderState = () => ({
      hasSlider: Boolean(canvasElement.querySelector('.map-time-playback__slider input[type="range"]')),
      hasTransport: Boolean(canvas.getByRole('button', { name: /^(play|pause|replay)$/i })),
      period: canvas.getByTestId('map-time-playback-period').textContent
    })

    expect(getSliderState()).toEqual({ hasSlider: true, hasTransport: true, period: '2023' })
    expect(capturedEditorTimePlayback).not.toHaveProperty('showSlider')

    const secondsPerStep = canvas.getByLabelText(/Seconds Per Step/) as HTMLInputElement
    const durationControl = secondsPerStep.closest('label') as HTMLLabelElement
    const durationBounds = durationControl.getBoundingClientRect()
    const sliderBounds = secondsPerStep.getBoundingClientRect()
    expect(Math.abs(sliderBounds.width - durationBounds.width)).toBeLessThanOrEqual(1)
    expect(sliderBounds.left).toBeGreaterThanOrEqual(durationBounds.left - 1)
    expect(sliderBounds.right).toBeLessThanOrEqual(durationBounds.right + 1)
    await performAndAssert(
      'Changing timing preserves an omitted showSlider field',
      () => ({
        secondsPerFrame: capturedEditorTimePlayback?.secondsPerFrame,
        hasShowSlider: Object.prototype.hasOwnProperty.call(capturedEditorTimePlayback, 'showSlider')
      }),
      async () => fireEvent.change(secondsPerStep, { target: { value: '1' } }),
      (_before, after) => after.secondsPerFrame === 1 && !after.hasShowSlider
    )

    await performAndAssert(
      'Show Time Slider hides the slider without hiding playback context',
      getSliderState,
      async () => userEvent.click(showSliderCheckbox),
      (before, after) =>
        before.hasSlider &&
        !after.hasSlider &&
        after.hasTransport &&
        after.period === before.period &&
        capturedEditorTimePlayback?.showSlider === false
    )

    await performAndAssert(
      'Show Time Slider restores the slider',
      getSliderState,
      async () => userEvent.click(showSliderCheckbox),
      (before, after) =>
        !before.hasSlider &&
        after.hasSlider &&
        after.hasTransport &&
        after.period === before.period &&
        capturedEditorTimePlayback?.showSlider === true
    )
  }
}

export default meta
