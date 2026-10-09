import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, waitFor, within } from 'storybook/test'
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

const longFormatWorldData = [
  { Country: 'Brazil', Year: 2021, Rate: 15 },
  { Country: 'France', Year: 2021, Rate: 35 },
  { Country: 'Japan', Year: 2021, Rate: 55 },
  { Country: 'Brazil', Year: 2022, Rate: 25 },
  { Country: 'France', Year: 2022, Rate: 45 },
  { Country: 'Japan', Year: 2022, Rate: 65 },
  { Country: 'Brazil', Year: 2023, Rate: 75 },
  { Country: 'France', Year: 2023, Rate: 85 },
  { Country: 'Japan', Year: 2023, Rate: 95 }
]

const monthDayYearStateData = [
  { STATE: 'AL', Date: '06/30/2022', Rate: 20 },
  { STATE: 'CA', Date: '06/30/2022', Rate: 40 },
  { STATE: 'NY', Date: '06/30/2022', Rate: 60 },
  { STATE: 'AL', Date: '01/15/2021', Rate: 10 },
  { STATE: 'CA', Date: '01/15/2021', Rate: 30 },
  { STATE: 'NY', Date: '01/15/2021', Rate: 50 },
  { STATE: 'AL', Date: '12/01/2023', Rate: 70 },
  { STATE: 'CA', Date: '12/01/2023', Rate: 80 },
  { STATE: 'NY', Date: '12/01/2023', Rate: 90 }
]

const baseConfig = editConfigKeys(EqualNumberMap, [
  { path: ['general', 'title'], value: 'State rates over time' },
  {
    path: ['general', 'subtext'],
    value: 'State rates are shown for each available period.'
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

const worldTimePlaybackConfig = editConfigKeys(timePlaybackConfig, [
  { path: ['general', 'title'], value: 'Country rates over time' },
  {
    path: ['general', 'subtext'],
    value: 'World choropleths use the same time playback controls and behavior as U.S. state maps.'
  },
  { path: ['general', 'geoType'], value: 'world' },
  { path: ['columns', 'geo', 'name'], value: 'Country' },
  { path: ['columns', 'geo', 'label'], value: 'Country' },
  { path: ['data'], value: longFormatWorldData }
]) as MapConfig

const worldAliasDuplicateConfig = editConfigKeys(worldTimePlaybackConfig, [
  {
    path: ['data'],
    value: [
      { Country: 'USA', Year: 2022, Rate: 10 },
      { Country: 'United States', Year: 2022, Rate: 20 },
      { Country: 'USA', Year: 2023, Rate: 30 },
      { Country: 'France', Year: 2022, Rate: 40 },
      { Country: 'France', Year: 2023, Rate: 50 }
    ]
  }
]) as MapConfig

const monthDayYearConfig = editConfigKeys(baseConfig, [
  { path: ['general', 'title'], value: 'State rates by date' },
  {
    path: ['general', 'subtext'],
    value: 'Month/day/year values are ordered chronologically instead of by source-row order.'
  },
  {
    path: ['columns', 'Date'],
    value: { name: 'Date', label: 'Date', tooltip: true, dataTable: true }
  },
  { path: ['data'], value: monthDayYearStateData },
  {
    path: ['timePlayback'],
    value: {
      enabled: true,
      column: 'Date',
      secondsPerFrame: 1.5,
      order: 'ascending',
      customOrder: []
    }
  }
]) as MapConfig

const reverseCustomConfig = editConfigKeys(timePlaybackConfig, [
  { path: ['timePlayback', 'order'], value: 'custom' },
  { path: ['timePlayback', 'customOrder'], value: [2023, 2022, 2021] },
  { path: ['timePlayback', 'secondsPerFrame'], value: 0.5 },
  { path: ['table', 'expanded'], value: false }
]) as MapConfig

let capturedEditorTimePlayback: MapConfig['timePlayback']

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Time Playback',
  component: CdcMap,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Time playback for long-format U.S. state and world data. The latest year appears initially; playback begins at the earliest year, keeps map surfaces synchronized to the selected frame, and leaves every eligible frame available in the data table.'
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
    const playback = canvasElement.querySelector('.map-time-playback') as HTMLElement
    expect(canvasElement.querySelector('.map-container')?.previousElementSibling).toBe(playback)
    expect(playback.querySelector('.map-time-playback__note')).toHaveTextContent(
      'Use play, pause, replay, or the slider to interact with the map.'
    )
    const transport = canvasElement.querySelector('.map-time-playback__controls') as HTMLElement
    const transportStep = canvasElement.querySelector('.map-time-playback__transport-step') as HTMLElement
    const playbackControl = canvasElement.querySelector('.map-time-playback__playback') as HTMLElement
    const rootFontSize = Number.parseFloat(getComputedStyle(canvasElement.ownerDocument.documentElement).fontSize)
    expect(getComputedStyle(transport).flexWrap).toBe('nowrap')
    expect(Number.parseFloat(getComputedStyle(playback).marginBottom)).toBeCloseTo(rootFontSize * 1.5)
    expect(Array.from(transport.children).map(element => element.className)).toEqual([
      'map-time-playback__playback',
      'map-time-playback__period',
      'map-time-playback__slider',
      'map-time-playback__transport-step'
    ])
    expect(transport.lastElementChild).toBe(transportStep)
    expect(playbackControl.getBoundingClientRect().right).toBeLessThanOrEqual(
      canvas.getByTestId('map-time-playback-period').getBoundingClientRect().left
    )
    expect(getComputedStyle(canvas.getByTestId('map-time-playback-period')).overflowWrap).toBe('anywhere')
    expect(canvasElement.querySelectorAll('.map-time-playback__tick')).toHaveLength(longFormatStateData.length / 3)
    expect(
      Array.from(canvasElement.querySelectorAll('.map-time-playback__tick-label')).map(label => label.textContent)
    ).toEqual(['2021', '2022', '2023'])
    const sliderTrack = canvasElement.querySelector('.map-time-playback__slider-track') as HTMLElement
    const sliderContainer = canvasElement.querySelector('.map-time-playback__slider') as HTMLElement
    const tickRail = canvasElement.querySelector('.map-time-playback__ticks') as HTMLElement
    expect(sliderTrack).toContainElement(canvas.getByRole('slider', { name: 'Time period' }))
    expect(sliderTrack).toContainElement(tickRail)
    expect(canvas.getByTestId('map-time-playback-period').getBoundingClientRect().right).toBeLessThanOrEqual(
      sliderContainer.getBoundingClientRect().left
    )
    expect(sliderContainer.getBoundingClientRect().right).toBeLessThanOrEqual(
      transportStep.getBoundingClientRect().left
    )
    expect(sliderTrack.getBoundingClientRect().left - sliderContainer.getBoundingClientRect().left).toBeCloseTo(
      rootFontSize,
      0
    )
    expect(sliderContainer.getBoundingClientRect().right - sliderTrack.getBoundingClientRect().right).toBeCloseTo(
      rootFontSize,
      0
    )
    expect(getComputedStyle(sliderTrack).getPropertyValue('--playback-slider-thumb-size').trim()).toBe('1rem')
    expect(Number.parseFloat(getComputedStyle(tickRail).paddingLeft)).toBeCloseTo(rootFontSize / 2)
    expect(Number.parseFloat(getComputedStyle(tickRail).paddingRight)).toBeCloseTo(rootFontSize / 2)
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

export const WorldRatesOverTime: Story = {
  args: {
    config: worldTimePlaybackConfig,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Three ordered years are supplied for Brazil, France, and Japan. The world map reuses the state-map playback pipeline while the table retains all nine country/year rows.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    for (const countryClass of ['brazil', 'france', 'japan']) {
      await waitForPresence(`g.geo-group.${countryClass}[data-tooltip-html]`, canvasElement)
    }

    const canvas = within(canvasElement)
    const table = canvas.getByRole('table', { name: /data table showing data for the world map figure/i })
    const getPlaybackState = () => ({
      period: canvas.getByTestId('map-time-playback-period').textContent,
      action: canvas.getByRole('button', { name: /^(play|pause|replay)$/i }).textContent?.trim(),
      franceTooltip: canvasElement.querySelector('g.geo-group.france')?.getAttribute('data-tooltip-html') || '',
      franceFill: (canvasElement.querySelector('g.geo-group.france') as SVGElement | null)?.style.fill || '',
      tablePeriods: Array.from(table.querySelectorAll('tbody tr')).map(row => row.textContent?.match(/202[1-3]/)?.[0]),
      tableLocations: Array.from(table.querySelectorAll('tbody tr')).map(row =>
        row.querySelector('td')?.textContent?.trim()
      )
    })

    expect(getPlaybackState()).toMatchObject({
      period: '2023',
      action: 'Play',
      tablePeriods: ['2021', '2021', '2021', '2022', '2022', '2022', '2023', '2023', '2023'],
      tableLocations: ['Brazil', 'France', 'Japan', 'Brazil', 'France', 'Japan', 'Brazil', 'France', 'Japan']
    })
    expect(getPlaybackState().franceTooltip).toContain('Rate: 85%')
    expect(getPlaybackState().franceTooltip).toContain('Year: 2023')
    const latestFranceFill = getPlaybackState().franceFill
    expect(latestFranceFill).not.toBe('')
    const playback = canvasElement.querySelector('.map-time-playback') as HTMLElement
    expect(canvasElement.querySelector('.map-container')?.previousElementSibling).toBe(playback)
    const transport = canvasElement.querySelector('.map-time-playback__controls') as HTMLElement
    const note = playback.querySelector('.map-time-playback__note') as HTMLElement
    expect(transport.nextElementSibling).toBe(note)
    expect(note).toHaveTextContent('Use play, pause, replay, or the slider to interact with the map.')
    const transportStep = canvasElement.querySelector('.map-time-playback__transport-step') as HTMLElement
    expect(Array.from(transportStep.querySelectorAll('button')).map(button => button.textContent?.trim())).toEqual([
      'Previous',
      'Next'
    ])
    const playbackControl = canvasElement.querySelector('.map-time-playback__playback') as HTMLElement
    const rootFontSize = Number.parseFloat(getComputedStyle(canvasElement.ownerDocument.documentElement).fontSize)
    expect(getComputedStyle(transport).flexWrap).toBe('nowrap')
    expect(Number.parseFloat(getComputedStyle(playback).marginBottom)).toBeCloseTo(rootFontSize * 1.5)
    expect(Array.from(transport.children).map(element => element.className)).toEqual([
      'map-time-playback__playback',
      'map-time-playback__period',
      'map-time-playback__slider',
      'map-time-playback__transport-step'
    ])
    expect(transport.lastElementChild).toBe(transportStep)
    expect(playbackControl.getBoundingClientRect().right).toBeLessThanOrEqual(
      canvas.getByTestId('map-time-playback-period').getBoundingClientRect().left
    )
    expect(getComputedStyle(canvas.getByTestId('map-time-playback-period')).overflowWrap).toBe('anywhere')
    expect(canvasElement.querySelectorAll('.map-time-playback__tick')).toHaveLength(longFormatWorldData.length / 3)
    expect(
      Array.from(canvasElement.querySelectorAll('.map-time-playback__tick-label')).map(label => label.textContent)
    ).toEqual(['2021', '2022', '2023'])
    const sliderTrack = canvasElement.querySelector('.map-time-playback__slider-track') as HTMLElement
    const sliderContainer = canvasElement.querySelector('.map-time-playback__slider') as HTMLElement
    const tickRail = canvasElement.querySelector('.map-time-playback__ticks') as HTMLElement
    expect(sliderTrack).toContainElement(canvas.getByRole('slider', { name: 'Time period' }))
    expect(sliderTrack).toContainElement(tickRail)
    expect(canvas.getByTestId('map-time-playback-period').getBoundingClientRect().right).toBeLessThanOrEqual(
      sliderContainer.getBoundingClientRect().left
    )
    expect(sliderContainer.getBoundingClientRect().right).toBeLessThanOrEqual(
      transportStep.getBoundingClientRect().left
    )
    expect(sliderTrack.getBoundingClientRect().left - sliderContainer.getBoundingClientRect().left).toBeCloseTo(
      rootFontSize,
      0
    )
    expect(sliderContainer.getBoundingClientRect().right - sliderTrack.getBoundingClientRect().right).toBeCloseTo(
      rootFontSize,
      0
    )
    expect(getComputedStyle(sliderTrack).getPropertyValue('--playback-slider-thumb-size').trim()).toBe('1rem')
    expect(Number.parseFloat(getComputedStyle(tickRail).paddingLeft)).toBeCloseTo(rootFontSize / 2)
    expect(Number.parseFloat(getComputedStyle(tickRail).paddingRight)).toBeCloseTo(rootFontSize / 2)
    const firstTickStyle = getComputedStyle(canvasElement.querySelector('.map-time-playback__tick') as HTMLElement)
    expect(firstTickStyle.flexBasis).toBe('0px')
    expect(firstTickStyle.minWidth).toBe('0px')

    await performAndAssert(
      'World playback starts at the earliest frame',
      getPlaybackState,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Play' })),
      (_before, after) =>
        after.period === '2021' &&
        after.action === 'Pause' &&
        after.franceTooltip.includes('Rate: 35%') &&
        after.franceFill !== latestFranceFill &&
        after.tablePeriods.join(',') === '2021,2021,2021,2022,2022,2022,2023,2023,2023'
    )

    await performAndAssert(
      'World Next selects one frame and pauses playback',
      getPlaybackState,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Next' })),
      (_before, after) => after.period === '2022' && after.action === 'Play'
    )
    await performAndAssert(
      'World Previous selects the prior frame',
      getPlaybackState,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Previous' })),
      (_before, after) => after.period === '2021' && after.action === 'Play'
    )

    await performAndAssert(
      'World playback slider selects a frame',
      getPlaybackState,
      async () => fireEvent.change(canvas.getByRole('slider', { name: 'Time period' }), { target: { value: '2' } }),
      (_before, after) =>
        after.period === '2023' &&
        after.action === 'Replay' &&
        after.franceTooltip.includes('Rate: 85%') &&
        after.tablePeriods.join(',') === '2021,2021,2021,2022,2022,2022,2023,2023,2023'
    )
  }
}

export const MobileTransport: Story = {
  args: {
    config: editConfigKeys(timePlaybackConfig, [{ path: ['table', 'expanded'], value: false }]) as MapConfig,
    isEditor: false
  },
  decorators: [
    Story => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    )
  ],
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const transport = await waitForPresence('.map-time-playback__controls--mobile', canvasElement)
    const slider = canvasElement.querySelector('.map-time-playback__slider') as HTMLElement
    const playback = canvasElement.querySelector('.map-time-playback__playback') as HTMLElement
    const current = canvasElement.querySelector('.map-time-playback__period') as HTMLElement
    const step = canvasElement.querySelector('.map-time-playback__transport-step') as HTMLElement

    expect(getComputedStyle(transport).display).toBe('grid')
    await waitFor(() =>
      expect(Array.from(transport.children).map(element => element.className)).toEqual([
        'map-time-playback__playback',
        'map-time-playback__transport-step',
        'map-time-playback__period',
        'map-time-playback__slider'
      ])
    )
    expect(Math.abs(step.getBoundingClientRect().top - playback.getBoundingClientRect().top)).toBeLessThanOrEqual(1)
    expect(step.getBoundingClientRect().left).toBeGreaterThanOrEqual(playback.getBoundingClientRect().right)
    expect(step.getBoundingClientRect().right).toBeLessThanOrEqual(transport.getBoundingClientRect().right + 1)
    expect(current.getBoundingClientRect().top).toBeGreaterThanOrEqual(playback.getBoundingClientRect().bottom)
    expect(current.getBoundingClientRect().top).toBeGreaterThanOrEqual(step.getBoundingClientRect().bottom)
    expect(slider.getBoundingClientRect().width).toBeCloseTo(transport.getBoundingClientRect().width, 0)
    expect(slider.getBoundingClientRect().top).toBeGreaterThanOrEqual(current.getBoundingClientRect().bottom)
    expect(Number.parseFloat(getComputedStyle(transport).rowGap)).toBeGreaterThan(0)
  }
}

export const ReverseCustomOrder: Story = {
  args: {
    config: reverseCustomConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const canvas = within(canvasElement)
    const getState = () => ({
      period: canvas.getByTestId('map-time-playback-period').textContent,
      action: canvas.getByRole('button', { name: /^(play|pause|replay)$/i }).textContent?.trim(),
      ticks: Array.from(canvasElement.querySelectorAll('.map-time-playback__tick-label')).map(
        label => label.textContent
      )
    })

    expect(getState()).toEqual({ period: '2023', action: 'Play', ticks: ['2023', '2022', '2021'] })

    await performAndAssert(
      'Reverse custom playback advances in authored order',
      getState,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Play' })),
      (_before, after) => after.period === '2022' && after.action === 'Pause'
    )
    await performAndAssert(
      'Next advances from 2022 to 2021 and pauses',
      getState,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Next' })),
      (_before, after) => after.period === '2021' && after.action === 'Replay'
    )
  }
}

export const MonthDayYearDates: Story = {
  name: 'Date Format: m/d/Y',
  args: {
    config: monthDayYearConfig,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Playback frames use m/d/Y strings supplied out of order. The map sorts them chronologically and initially selects the latest date.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const canvas = within(canvasElement)
    expect(canvas.getByTestId('map-time-playback-period')).toHaveTextContent('12/01/2023')
    expect(
      Array.from(canvasElement.querySelectorAll('.map-time-playback__tick-label')).map(label => label.textContent)
    ).toEqual(['01/15/2021', '06/30/2022', '12/01/2023'])

    await userEvent.click(canvas.getByRole('button', { name: 'Previous' }))
    expect(canvas.getByTestId('map-time-playback-period')).toHaveTextContent('06/30/2022')
  }
}

export const PreviousNextButtonsHidden: Story = {
  args: {
    config: editConfigKeys(timePlaybackConfig, [
      { path: ['timePlayback', 'showPreviousNextButtons'], value: false },
      { path: ['table', 'expanded'], value: false }
    ]) as MapConfig,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Previous and Next are hidden through timePlayback.showPreviousNextButtons while Play, the current frame, and the slider remain available.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const canvas = within(canvasElement)
    expect(canvas.queryByRole('button', { name: 'Previous' })).not.toBeInTheDocument()
    expect(canvas.queryByRole('button', { name: 'Next' })).not.toBeInTheDocument()
    expect(canvas.getByRole('button', { name: 'Play' })).toBeInTheDocument()
    expect(canvas.getByTestId('map-time-playback-period')).toHaveTextContent('2023')
    expect(canvas.getByRole('slider', { name: 'Time period' })).toBeInTheDocument()
  }
}

export const PlaybackNoteHidden: Story = {
  args: {
    config: editConfigKeys(timePlaybackConfig, [
      { path: ['timePlayback', 'note'], value: '' },
      { path: ['table', 'expanded'], value: false }
    ]) as MapConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    expect(canvasElement.querySelector('.map-time-playback__note')).not.toBeInTheDocument()
    expect(canvasElement.querySelector('.subtext')).toHaveTextContent(
      'State rates are shown for each available period.'
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
    await waitForPresence('.map-time-playback__controls', canvasElement)

    const enableTimePlaybackCheckbox = canvas.getByLabelText('Enable Time Playback')
    const typeAccordion = enableTimePlaybackCheckbox.closest('.accordion__item')
    expect(typeAccordion).not.toBeNull()
    expect(within(typeAccordion as HTMLElement).getByRole('button', { name: 'Type' })).toBeInTheDocument()
    expect(enableTimePlaybackCheckbox).toBeChecked()
    expect(canvas.getByRole('button', { name: 'Time Playback' })).toBeInTheDocument()

    await openAccordion(canvas, 'Time Playback')

    expect(canvas.queryByLabelText('Show Time Slider')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Show Previous/Next Buttons')).not.toBeInTheDocument()
    const getSliderState = () => ({
      hasSlider: Boolean(canvasElement.querySelector('.map-time-playback__slider input[type="range"]')),
      hasTransport: Boolean(canvas.getByRole('button', { name: /^(play|pause|replay)$/i })),
      hasPrevious: Boolean(canvas.queryByRole('button', { name: 'Previous' })),
      hasNext: Boolean(canvas.queryByRole('button', { name: 'Next' })),
      period: canvas.getByTestId('map-time-playback-period').textContent
    })

    expect(getSliderState()).toEqual({
      hasSlider: true,
      hasTransport: true,
      hasPrevious: true,
      hasNext: true,
      period: '2023'
    })
    expect(capturedEditorTimePlayback).not.toHaveProperty('showSlider')
    expect(capturedEditorTimePlayback).not.toHaveProperty('showPreviousNextButtons')
    expect(capturedEditorTimePlayback).not.toHaveProperty('note')

    const secondsPerStep = canvas.getByLabelText(/Seconds Per Step/) as HTMLInputElement
    const durationControl = secondsPerStep.closest('label') as HTMLLabelElement
    const durationBounds = durationControl.getBoundingClientRect()
    const sliderBounds = secondsPerStep.getBoundingClientRect()
    expect(Math.abs(sliderBounds.width - durationBounds.width)).toBeLessThanOrEqual(1)
    expect(sliderBounds.left).toBeGreaterThanOrEqual(durationBounds.left - 1)
    expect(sliderBounds.right).toBeLessThanOrEqual(durationBounds.right + 1)
    await performAndAssert(
      'Changing timing preserves omitted visibility fields',
      () => ({
        secondsPerFrame: capturedEditorTimePlayback?.secondsPerFrame,
        hasShowSlider: Object.prototype.hasOwnProperty.call(capturedEditorTimePlayback, 'showSlider'),
        hasShowPreviousNextButtons: Object.prototype.hasOwnProperty.call(
          capturedEditorTimePlayback,
          'showPreviousNextButtons'
        ),
        hasNote: Object.prototype.hasOwnProperty.call(capturedEditorTimePlayback, 'note')
      }),
      async () => fireEvent.change(secondsPerStep, { target: { value: '1' } }),
      (_before, after) =>
        after.secondsPerFrame === 1 && !after.hasShowSlider && !after.hasShowPreviousNextButtons && !after.hasNote
    )

    const playbackNote = canvas.getByLabelText('Playback Note')
    await performAndAssert(
      'Editing the playback note updates its own map guidance',
      () => ({
        note: canvasElement.querySelector('.map-time-playback__note')?.textContent?.trim(),
        subtext: canvasElement.querySelector('.subtext')?.textContent?.trim(),
        savedNote: capturedEditorTimePlayback?.note
      }),
      async () => {
        await userEvent.clear(playbackNote)
        await userEvent.type(playbackNote, 'Choose a frame to compare state rates.')
      },
      (before, after) =>
        before.note === 'Use play, pause, replay, or the slider to interact with the map.' &&
        after.note === 'Choose a frame to compare state rates.' &&
        after.savedNote === 'Choose a frame to compare state rates.' &&
        after.subtext === before.subtext
    )

    await openAccordion(canvas, 'Type')
    await performAndAssert(
      'Disabling playback hides its settings accordion',
      () => ({
        enabled: capturedEditorTimePlayback?.enabled,
        hasPlaybackAccordion: Boolean(canvas.queryByRole('button', { name: 'Time Playback' })),
        hasTransport: Boolean(canvas.queryByRole('button', { name: /^(play|pause|replay)$/i })),
        isChecked: (canvas.getByLabelText('Enable Time Playback') as HTMLInputElement).checked
      }),
      async () => userEvent.click(canvas.getByLabelText('Enable Time Playback')),
      (before, after) =>
        before.enabled === true &&
        before.hasPlaybackAccordion &&
        before.hasTransport &&
        before.isChecked &&
        after.enabled === false &&
        !after.hasPlaybackAccordion &&
        !after.hasTransport &&
        !after.isChecked
    )

    await performAndAssert(
      'Re-enabling playback restores its settings and preferences',
      () => ({
        enabled: capturedEditorTimePlayback?.enabled,
        hasPlaybackAccordion: Boolean(canvas.queryByRole('button', { name: 'Time Playback' })),
        showSlider: capturedEditorTimePlayback?.showSlider,
        showPreviousNextButtons: capturedEditorTimePlayback?.showPreviousNextButtons
      }),
      async () => userEvent.click(canvas.getByLabelText('Enable Time Playback')),
      (before, after) =>
        before.enabled === false &&
        after.enabled === true &&
        after.hasPlaybackAccordion &&
        after.showSlider === undefined &&
        after.showPreviousNextButtons === undefined
    )
  }
}

export const WorldTimePlaybackEditorControls: Story = {
  args: {
    config: worldTimePlaybackConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await waitForPresence('.map-time-playback__transport', canvasElement)

    expect(canvas.getByLabelText('Enable Time Playback')).toBeChecked()
    await openAccordion(canvas, 'Type')
    await performAndAssert(
      'World playback can be disabled from the editor',
      () => Boolean(canvasElement.querySelector('.map-time-playback__transport')),
      async () => userEvent.click(canvas.getByLabelText('Enable Time Playback')),
      (before, after) => before && !after
    )
    await performAndAssert(
      'World playback can be re-enabled from the editor',
      () => Boolean(canvasElement.querySelector('.map-time-playback__transport')),
      async () => userEvent.click(canvas.getByLabelText('Enable Time Playback')),
      (before, after) => !before && after
    )
  }
}

export const InvalidWorldAliasDuplicates: Story = {
  args: {
    config: worldAliasDuplicateConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    expect(canvas.queryByRole('button', { name: /^(play|pause|replay)$/i })).not.toBeInTheDocument()

    await openAccordion(canvas, 'Time Playback')
    expect(canvas.getByText(/Each geography can appear only once in each time step/)).toBeInTheDocument()
  }
}

export default meta
