import { useContext, useMemo, useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, within } from 'storybook/test'
import EditorContext from '@cdc/core/contexts/EditorContext'
import { openAccordion, performAndAssert, waitForEditor, waitForPresence } from '@cdc/core/helpers/testing'
import { stripConfig } from '@cdc/dashboard/src/helpers/formatConfigBeforeSave'
import CdcMap from '../CdcMap'
import { createNewMapConfig } from '../helpers/createNewMapConfig'
import { createDefaultDotDensityConfig } from '../helpers/dotDensityConfig'
import type { DotDensityConfig, MapConfig } from '../types/MapConfig'
import countyTopology from '../components/UsaMap/data/cb_2019_us_county_20m.json'
import { outbreakCounts, diseaseSeries } from './dotDensity/outbreakData'
import importableDensitySample from '../../examples/dot-density-outbreaks.json'

const fixture = createNewMapConfig({
  type: 'map',
  general: {
    type: 'data',
    geoType: 'us-county',
    title: 'Simulated outbreaks — editor authoring',
    showStateDropdown: true,
    showSidebar: false,
    allowMapZoom: true,
    countyCensusYear: '2019'
  },
  columns: {
    geo: { name: 'FIPS', label: 'County', tooltip: true, dataTable: true },
    primary: { name: 'Total', label: 'Total cases', tooltip: true, dataTable: true }
  },
  data: Object.entries(outbreakCounts).map(([FIPS, counts]) => ({
    FIPS,
    Total: counts.reduce((a, b) => a + b, 0),
    ...Object.fromEntries(diseaseSeries.map((series, index) => [series.id, counts[index]]))
  })),
  table: { label: 'County totals', expanded: false, forceDisplay: true },
  dotDensity: createDefaultDotDensityConfig()
} as unknown as MapConfig)

function EditorHarness({ config }: { config: MapConfig }) {
  const parent = useContext(EditorContext)
  const latest = useRef(config)
  const [loaded, setLoaded] = useState(config)
  const [generation, setGeneration] = useState(0)
  const [saved, setSaved] = useState('')
  const editor = useMemo(
    () => ({
      ...parent,
      setTempConfig: (next: MapConfig) => {
        latest.current = next
      }
    }),
    [parent]
  )
  return (
    <>
      <button
        type='button'
        onClick={() => {
          const next = JSON.parse(JSON.stringify(stripConfig(latest.current)))
          setSaved(JSON.stringify(next.dotDensity))
          setLoaded(next)
          setGeneration(value => value + 1)
        }}
      >
        Save and Reload Map
      </button>
      <output aria-label='Saved Dot Density Config'>{saved}</output>
      <EditorContext.Provider value={editor}>
        <CdcMap key={generation} config={loaded} isEditor navigationHandler={() => {}} setConfig={() => {}} />
      </EditorContext.Provider>
    </>
  )
}

const meta: Meta<typeof EditorHarness> = {
  title: 'Components/Templates/Map/Editor Tests/Dot Density',
  component: EditorHarness,
  args: { config: fixture },
  parameters: { layout: 'fullscreen' },
  beforeEach: () => {
    const original = globalThis.fetch
    globalThis.fetch = (input, init) => {
      const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
      if (url.startsWith('https://www.cdc.gov/TemplatePackage/contrib/data/county-topography/')) {
        return Promise.resolve(new Response(JSON.stringify(countyTopology), { status: 200 }))
      }
      return original(input, init)
    }
    return () => {
      globalThis.fetch = original
    }
  }
}
export default meta
type Story = StoryObj<typeof EditorHarness>

const readMap = (root: HTMLElement) => {
  const map = root.querySelector<HTMLCanvasElement>('canvas.county-map-canvas')
  let pixels = 0
  if (map?.width) {
    const data = map.getContext('2d')!.getImageData(0, 0, map.width, map.height).data
    for (let i = 0; i < data.length; i++) pixels = Math.imul(pixels ^ data[i], 16777619)
  }
  return { count: Number(map?.dataset.drawnDots || 0), signature: map?.dataset.positionSignature || '', pixels }
}

export const AuthorAndReload: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Type')
    await userEvent.selectOptions(canvas.getByLabelText(/Map Type/i, { selector: 'select' }), 'dot-density')
    await userEvent.click(canvas.getByRole('button', { name: /Count Column/ }))
    expect(canvas.getByRole('button', { name: 'Add Count Series' })).toHaveFocus()
    await userEvent.click(canvas.getByRole('button', { name: 'Add Count Series' }))
    await userEvent.selectOptions(canvas.getByLabelText('Count column 1'), 'measles')
    await waitForPresence('canvas[data-drawn-dots]', canvasElement)
    await performAndAssert(
      'Authored value per dot changes the Canvas dot count',
      () => readMap(canvasElement),
      async () => {
        const input = canvas.getByLabelText('Value per dot')
        await userEvent.clear(input)
        await userEvent.type(input, '5')
      },
      (_, after) => after.count === 101
    )
    await userEvent.click(canvas.getByRole('button', { name: 'Add Count Series' }))
    await performAndAssert(
      'A second authored count series adds its own dots',
      () => readMap(canvasElement),
      async () => userEvent.selectOptions(canvas.getByLabelText('Count column 2'), 'salmonellosis'),
      (_, after) => after.count === 331
    )
    await performAndAssert(
      'Changing a series color changes the rendered Canvas',
      () => readMap(canvasElement),
      async () => {
        fireEvent.change(canvas.getByLabelText('Series color 1'), { target: { value: '#008000' } })
      },
      (before, after) => after.pixels !== before.pixels && after.count === before.count
    )
    await performAndAssert(
      'Series labels reach the runtime legend',
      () => Boolean(canvas.queryByRole('checkbox', { name: 'Measles cases' })),
      async () => userEvent.type(canvas.getByLabelText('Series label 1'), 'Measles cases'),
      (_, after) => after
    )
    const beforeReload = readMap(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Save and Reload Map' }))
    await waitForEditor(canvas)
    await performAndAssert(
      'Saved JSON reloads the layer without changing positions or count',
      () => readMap(canvasElement),
      async () => {},
      (_, after) => after.count === beforeReload.count && after.signature === beforeReload.signature
    )
    await openAccordion(canvas, 'Type')
    expect(canvas.getByLabelText(/Map Type/i, { selector: 'select' })).toHaveValue('dot-density')
    const saved = JSON.parse(canvas.getByLabelText('Saved Dot Density Config').textContent!) as DotDensityConfig
    expect(saved.enabled).toBe(true)
    expect(saved.dotValue).toBe(5)
    expect(saved.series[0]).toMatchObject({ column: 'measles', label: 'Measles cases', color: '#008000' })
    expect(saved.series[1].column).toBe('salmonellosis')
    expect(new Set(saved.series.map(series => series.id)).size).toBe(2)
    expect(saved).not.toHaveProperty('hiddenSeries')
    await performAndAssert(
      'Runtime legend toggles hide only the chosen series',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByRole('checkbox', { name: 'Measles cases' })),
      (before, after) => after.count === 230 && after.signature === before.signature
    )
  }
}

export const EditSettings: Story = {
  args: {
    config: {
      ...fixture,
      dotDensity: {
        ...createDefaultDotDensityConfig(),
        enabled: true,
        dotValue: 5,
        series: [{ id: 'measles-series', column: 'measles', label: 'Measles', color: '#0072B2' }]
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="101"]', canvasElement)
    await openAccordion(canvas, 'Dot Density')
    await performAndAssert(
      'Changing radius redraws dots at stable positions',
      () => readMap(canvasElement),
      async () => {
        const input = canvas.getByLabelText('Dot radius')
        await userEvent.clear(input)
        await userEvent.type(input, '3')
      },
      (before, after) => after.pixels !== before.pixels && after.signature === before.signature
    )
    await performAndAssert(
      'Changing seed changes positions but preserves represented counts',
      () => readMap(canvasElement),
      async () => {
        const input = canvas.getByLabelText('Placement seed')
        await userEvent.clear(input)
        await userEvent.type(input, '123')
      },
      (before, after) => after.signature !== before.signature && after.count === before.count
    )
    await performAndAssert(
      'Unit text appears in the rendered legend',
      () => Boolean(canvas.queryByText(/1 dot = 5 infections/)),
      async () => {
        const input = canvas.getByLabelText('Unit label')
        await userEvent.clear(input)
        await userEvent.type(input, 'infections')
      },
      (_, after) => after
    )
    await performAndAssert(
      'Legend title reaches the rendered legend',
      () => Boolean(canvas.queryByText('Outbreak density')),
      async () => {
        const input = canvas.getByLabelText('Dot Density Legend Title')
        await userEvent.clear(input)
        await userEvent.type(input, 'Outbreak density')
      },
      (_, after) => after
    )
    await performAndAssert(
      'Legend visibility affects the rendered legend',
      () => Boolean(canvas.queryByRole('checkbox', { name: 'Measles' })),
      async () => userEvent.click(canvas.getByRole('checkbox', { name: 'Show Dot Density Legend' })),
      (before, after) => before && !after
    )
    const beforeSwitch = readMap(canvasElement)
    await openAccordion(canvas, 'Type')
    await performAndAssert(
      'Selecting Data removes the density layer',
      () => Boolean(canvasElement.querySelector('canvas[data-drawn-dots]')),
      async () => userEvent.selectOptions(canvas.getByLabelText(/Map Type/i, { selector: 'select' }), 'data'),
      (before, after) => before && !after
    )
    expect(canvas.queryByRole('button', { name: 'Dot Density', exact: true })).toBeNull()
    await performAndAssert(
      'Selecting Dot Density restores the same dots and placement',
      () => readMap(canvasElement),
      async () => userEvent.selectOptions(canvas.getByLabelText(/Map Type/i, { selector: 'select' }), 'dot-density'),
      (_, after) => after.count === beforeSwitch.count && after.signature === beforeSwitch.signature
    )
    await openAccordion(canvas, 'Dot Density')
    expect(canvas.getByLabelText('Dot radius')).toHaveValue(3)
    expect(canvas.getByLabelText('Placement seed')).toHaveValue(123)
    expect(canvas.getByLabelText('Unit label')).toHaveValue('infections')
    expect(canvas.getByLabelText('Dot Density Legend Title')).toHaveValue('Outbreak density')
    await performAndAssert(
      'Removing the last series reveals the count-column authoring requirement',
      () => Boolean(canvasElement.querySelector('canvas[data-drawn-dots]')),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Remove Count Series 1' })),
      (before, after) => before && !after
    )
    expect(canvas.getByRole('button', { name: /Count Column/ })).toBeVisible()
  }
}

export const NeutralDensityMap: Story = {
  args: {
    config: {
      ...fixture,
      columns: { ...fixture.columns, primary: { ...fixture.columns.primary, name: '' } },
      dotDensity: {
        ...createDefaultDotDensityConfig(),
        enabled: true,
        dotValue: 5,
        series: [{ id: 'measles-series', column: 'measles', label: 'Measles', color: '#0072B2' }]
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="101"]', canvasElement)
    expect(canvas.queryByRole('button', { name: 'Data Column' })).toBeNull()
    await userEvent.click(canvas.getByRole('button', { name: /County totals/ }))
    expect(canvas.getByRole('columnheader', { name: /Measles/ })).toBeVisible()
  }
}

export const MultipleDiseases: Story = {
  args: {
    config: {
      ...fixture,
      columns: { ...fixture.columns, primary: { ...fixture.columns.primary, name: '' } },
      dotDensity: {
        ...createDefaultDotDensityConfig(),
        enabled: true,
        dotValue: 5,
        legend: { show: true, title: 'Simulated outbreaks' },
        series: diseaseSeries.map(disease => ({
          id: `outbreak-${disease.id}`,
          column: disease.id,
          label: disease.label,
          color: disease.color
        }))
      }
    }
  }
}

export const ImportableSample: Story = {
  args: { config: importableDensitySample as unknown as MapConfig },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="560"]', canvasElement)
    await openAccordion(canvas, 'Type')
    expect(canvas.getByLabelText(/Map Type/i, { selector: 'select' })).toHaveValue('dot-density')
    await openAccordion(canvas, 'Dot Density')
    expect(canvas.getByLabelText('Value per dot')).toHaveValue(5)
    expect(canvas.getByLabelText('Count column 1')).toHaveValue('Measles')
    expect(canvas.getByLabelText('Count column 2')).toHaveValue('Salmonellosis')
    expect(canvas.getByLabelText('Count column 3')).toHaveValue('Pertussis')
    await userEvent.selectOptions(canvas.getByRole('combobox', { name: /Select Location/ }), '04')
  }
}

export const CountyOnlyDiscovery: Story = {
  args: {
    config: {
      ...fixture,
      dotDensity: {
        ...createDefaultDotDensityConfig(),
        enabled: true,
        dotValue: 5,
        series: [{ id: 'retained-measles', column: 'measles', label: 'Measles', color: '#0072B2' }]
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="101"]', canvasElement)
    const initial = readMap(canvasElement)
    await openAccordion(canvas, 'Type')
    const subtype = () => canvas.getByLabelText(/Geography Subtype/i)
    const mapType = () => canvas.getByLabelText(/Map Type/i, { selector: 'select' })
    await performAndAssert(
      'State geography suspends county density',
      () => Boolean(canvasElement.querySelector('canvas[data-drawn-dots]')),
      async () => userEvent.selectOptions(subtype(), 'us'),
      (before, after) => before && !after
    )
    expect(within(mapType()).queryByRole('option', { name: 'Dot Density' })).toBeNull()
    expect(canvas.queryByRole('button', { name: 'Dot Density', exact: true })).toBeNull()
    await performAndAssert(
      'Returning to county geography restores retained density',
      () => readMap(canvasElement),
      async () => userEvent.selectOptions(subtype(), 'us-county'),
      (_, after) => after.count === initial.count && after.signature === initial.signature
    )
    expect(mapType()).toHaveValue('dot-density')
    await performAndAssert(
      'Geocode disables density rendering',
      () => Boolean(canvasElement.querySelector('canvas[data-drawn-dots]')),
      async () => userEvent.selectOptions(mapType(), 'us-geocode'),
      (before, after) => before && !after
    )
    expect(canvas.queryByRole('button', { name: 'Dot Density', exact: true })).toBeNull()
    await performAndAssert(
      'Selecting Dot Density from Geocode restores the authored layer',
      () => readMap(canvasElement),
      async () => userEvent.selectOptions(mapType(), 'dot-density'),
      (_, after) => after.count === initial.count && after.signature === initial.signature
    )
    await userEvent.click(canvas.getByRole('button', { name: 'Save and Reload Map' }))
    await waitForEditor(canvas)
    const saved = JSON.parse(canvas.getByLabelText('Saved Dot Density Config').textContent!)
    expect(saved.series).toEqual([{ id: 'retained-measles', column: 'measles', label: 'Measles', color: '#0072B2' }])
  }
}
