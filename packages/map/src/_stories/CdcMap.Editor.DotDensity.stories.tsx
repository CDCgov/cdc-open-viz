import { useContext, useMemo, useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, within } from 'storybook/test'
import EditorContext from '@cdc/core/contexts/EditorContext'
import { openAccordion, performAndAssert, waitForEditor, waitForPresence } from '@cdc/core/helpers/testing'
import { stripConfig } from '@cdc/dashboard/src/helpers/formatConfigBeforeSave'
import CdcMap from '../CdcMap'
import { createNewMapConfig } from '../helpers/createNewMapConfig'
import { createDefaultDotDensityConfig } from '../helpers/dotDensityConfig'
import { mapColorPalettes } from '@cdc/core/data/colorPalettes'
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
    showSidebar: true,
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
  const [savedPalette, setSavedPalette] = useState('')
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
          setSavedPalette(JSON.stringify(next.general.palette))
          setLoaded(next)
          setGeneration(value => value + 1)
        }}
      >
        Save and Reload Map
      </button>
      <output aria-label='Saved Dot Density Config'>{saved}</output>
      <output aria-label='Saved Map Palette'>{savedPalette}</output>
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
  parameters: { layout: 'fullscreen', coveDeveloperMode: 'true' },
  beforeEach: ({ parameters }) => {
    const originalUrl = window.location.href
    const url = new URL(originalUrl)
    if (parameters.coveDeveloperMode === 'absent') url.searchParams.delete('isCoveDeveloper')
    else url.searchParams.set('isCoveDeveloper', parameters.coveDeveloperMode)
    window.history.replaceState({}, '', url)
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
      window.history.replaceState({}, '', originalUrl)
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
    await performAndAssert(
      'Required-field navigation focuses Add Count Series',
      () => canvasElement.ownerDocument.activeElement === canvas.queryByRole('button', { name: 'Add Count Series' }),
      async () => userEvent.click(canvas.getByRole('button', { name: /Count Column/ })),
      (_, after) => after
    )
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
    expect(canvas.queryByLabelText('Series color 1')).toBeNull()
    await openAccordion(canvas, 'Visual')
    await performAndAssert(
      'Selecting an available palette changes rendered dots without moving them',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByTitle('qualitative_standard')),
      (before, after) =>
        after.pixels !== before.pixels && after.count === before.count && after.signature === before.signature
    )
    await openAccordion(canvas, 'Dot Density')
    await performAndAssert(
      'Series labels reach the runtime legend',
      () => Boolean(canvas.queryByRole('button', { name: 'Measles cases' })),
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
      (_, after) =>
        after.count === beforeReload.count &&
        after.signature === beforeReload.signature &&
        after.pixels === beforeReload.pixels
    )
    await openAccordion(canvas, 'Type')
    expect(canvas.getByLabelText(/Map Type/i, { selector: 'select' })).toHaveValue('dot-density')
    const saved = JSON.parse(canvas.getByLabelText('Saved Dot Density Config').textContent!) as DotDensityConfig
    expect(saved.enabled).toBe(true)
    expect(saved.dotValue).toBe(5)
    expect(saved.series[0]).toMatchObject({ column: 'measles', label: 'Measles cases' })
    expect(saved.series[0]).not.toHaveProperty('color')
    expect(JSON.parse(canvas.getByLabelText('Saved Map Palette').textContent!)).toMatchObject({
      name: 'qualitative_standard'
    })
    expect(saved.series[1].column).toBe('salmonellosis')
    expect(new Set(saved.series.map(series => series.id)).size).toBe(2)
    expect(saved).not.toHaveProperty('hiddenSeries')
    await performAndAssert(
      'Runtime legend selection isolates the chosen series',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Measles cases' })),
      (before, after) => after.count === 101 && after.signature === before.signature
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
    await openAccordion(canvas, 'Legend')
    await performAndAssert(
      'Legend title reaches the rendered legend',
      () => Boolean(canvas.queryByText('Outbreak density')),
      async () => {
        const input = canvas.getByLabelText('Legend Title')
        await userEvent.clear(input)
        await userEvent.type(input, 'Outbreak density')
      },
      (_, after) => after
    )
    await performAndAssert(
      'Legend visibility affects the rendered legend',
      () => Boolean(canvas.queryByRole('button', { name: 'Measles' })),
      async () => userEvent.click(canvas.getByRole('checkbox', { name: 'Show Legend' })),
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
    expect(canvas.queryByRole('button', { name: 'Dot Density' })).toBeNull()
    await performAndAssert(
      'Selecting Dot Density restores the same dots and placement',
      () => readMap(canvasElement),
      async () => userEvent.selectOptions(canvas.getByLabelText(/Map Type/i, { selector: 'select' }), 'dot-density'),
      (_, after) => after.count === beforeSwitch.count && after.signature === beforeSwitch.signature
    )
    await openAccordion(canvas, 'Dot Density')
    expect(canvas.getByLabelText('Dot radius')).toHaveValue(3)
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
    expect(canvas.queryByText(/visible dots/)).toBeNull()
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
    expect(canvas.queryByRole('button', { name: 'Dot Density' })).toBeNull()
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
    expect(canvas.queryByRole('button', { name: 'Dot Density' })).toBeNull()
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

export const SharedLegendControls: Story = {
  args: {
    config: {
      ...fixture,
      columns: { ...fixture.columns, primary: { ...fixture.columns.primary, name: '' } },
      dotDensity: {
        ...createDefaultDotDensityConfig(),
        enabled: true,
        dotValue: 5,
        series: [{ id: 'shared-measles', column: 'measles', label: 'Measles', color: '#0072B2' }]
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="101"]', canvasElement)
    await openAccordion(canvas, 'Legend')
    const legend = () => canvas.getByRole('region', { name: 'Legend' })
    expect(within(legend()).queryByText(/1 dot =/)).toBeNull()
    expect(canvas.queryByLabelText('Legend Type')).toBeNull()
    expect(canvas.queryByLabelText('Number of Items')).toBeNull()
    await performAndAssert(
      'Shared legend title labels a density-only map',
      () => within(legend()).queryByRole('heading', { name: 'Disease outbreaks' }) !== null,
      async () => {
        await userEvent.clear(canvas.getByLabelText('Legend Title'))
        await userEvent.type(canvas.getByLabelText('Legend Title'), 'Disease outbreaks')
      },
      (_, after) => after
    )
    await performAndAssert(
      'Shared legend description supplies the density explanation',
      () => within(legend()).queryByText('Synthetic county counts') !== null,
      async () => userEvent.type(canvas.getByLabelText('Legend Description'), 'Synthetic county counts'),
      (_, after) => after
    )
    await performAndAssert(
      'Shared position control moves the density legend',
      () => legend().classList.contains('bottom'),
      async () => userEvent.selectOptions(canvas.getByLabelText('Legend Position'), 'bottom'),
      (_, after) => after
    )
    await performAndAssert(
      'Shared single-row layout applies to density series',
      () => canvas.getByRole('list', { name: 'Dot density legend items' }).classList.contains('single-row'),
      async () => userEvent.click(canvas.getByRole('checkbox', { name: 'Single Row Legend' })),
      (_, after) => after
    )
    await performAndAssert(
      'Shared shape control changes density swatches',
      () =>
        canvas.getByRole('list', { name: 'Dot density legend items' }).querySelector<HTMLElement>('.legend-item')?.style
          .borderRadius === '0px',
      async () => userEvent.selectOptions(canvas.getByLabelText(/Legend Style/i, { selector: 'select' }), 'boxes'),
      (_, after) => after
    )
    await performAndAssert(
      'Shared border control applies to the density legend',
      () => legend().classList.contains('no-border'),
      async () => userEvent.click(canvas.getByRole('checkbox', { name: /Hide Legend Box/ })),
      (before, after) => before && !after
    )
    const before = readMap(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Measles' }))
    expect(readMap(canvasElement).count).toBe(before.count)
    expect(canvas.getByRole('button', { name: 'Measles' })).toHaveAttribute('aria-pressed', 'true')
    expect(canvas.queryByRole('button', { name: 'Show All' })).toBeNull()
    await performAndAssert(
      'Shared Show Legend hides the entire legend without changing density',
      () => canvas.queryByRole('region', { name: 'Legend' }) !== null,
      async () => userEvent.click(canvas.getByRole('checkbox', { name: 'Show Legend' })),
      (before, after) => before && !after
    )
    expect(readMap(canvasElement).count).toBe(101)
    await performAndAssert(
      'Shared Show Legend restores the density key',
      () => canvas.queryByRole('region', { name: 'Legend' }) !== null,
      async () => userEvent.click(canvas.getByRole('checkbox', { name: 'Show Legend' })),
      (_, after) => after
    )
    await userEvent.click(canvas.getByRole('button', { name: 'Save and Reload Map' }))
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="101"]', canvasElement)
    expect(within(legend()).getByRole('heading', { name: 'Disease outbreaks' })).toBeVisible()
    expect(within(legend()).getByText('Synthetic county counts')).toBeVisible()
    expect(legend()).toHaveClass('bottom')
    expect(canvas.getByRole('list', { name: 'Dot density legend items' })).toHaveClass('single-row')
    expect(legend()).not.toHaveClass('no-border')
    expect(JSON.parse(canvas.getByLabelText('Saved Dot Density Config').textContent!)).not.toHaveProperty('legend')
  }
}

export const SparseCountData: Story = {
  args: {
    config: {
      ...fixture,
      columns: { ...fixture.columns, primary: { ...fixture.columns.primary, name: '' } },
      data: [{ FIPS: '04001' }, { FIPS: '04013', Cases: 33 }],
      dotDensity: {
        ...createDefaultDotDensityConfig(),
        enabled: true,
        dotValue: 1.1,
        series: [{ id: 'sparse-cases', column: 'Cases', label: 'Cases', color: '#0072B2' }]
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="30"]', canvasElement)
    expect(canvas.getByText('1 missing or invalid count values omitted.')).toBeVisible()
    expect(canvas.queryByRole('button', { name: /Count Column/ })).toBeNull()
    await openAccordion(canvas, 'Dot Density')
    const column = canvas.getByLabelText('Count column 1')
    expect(within(column).getByRole('option', { name: 'Cases' })).toHaveValue('Cases')
    expect(within(column).queryByRole('option', { name: /missing/ })).toBeNull()
    await userEvent.click(canvas.getByRole('button', { name: 'Save and Reload Map' }))
    await waitForPresence('canvas[data-drawn-dots="30"]', canvasElement)
  }
}

export const FocusMissingMappedSeries: Story = {
  args: {
    config: {
      ...fixture,
      dotDensity: {
        ...createDefaultDotDensityConfig(),
        enabled: true,
        series: [
          { id: 'blank-draft', column: '', label: '', color: '#0072B2' },
          { id: 'missing-count', column: 'DeletedColumn', label: 'Cases', color: '#D55E00' }
        ]
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await performAndAssert(
      'Required-field navigation focuses the missing mapped series ahead of a blank draft',
      () => canvasElement.ownerDocument.activeElement === canvas.getByLabelText('Count column 2'),
      async () => userEvent.click(canvas.getByRole('button', { name: /Count Column/ })),
      (_, after) => after
    )
    await userEvent.selectOptions(canvas.getByLabelText('Count column 2'), 'measles')
    await waitForPresence('canvas[data-drawn-dots]', canvasElement)
    expect(canvas.queryByRole('button', { name: /Count Column/ })).toBeNull()
    expect(canvas.getByLabelText('Count column 1')).toHaveValue('')
  }
}

const assertDensityAuthoringHidden = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement)
  await waitForEditor(canvas)
  await waitForPresence('canvas[data-drawn-dots="560"]', canvasElement)
  await openAccordion(canvas, 'Type')
  const mapType = canvas.getByLabelText(/Map Type/i, { selector: 'select' })
  expect(within(mapType).queryByRole('option', { name: 'Dot Density' })).toBeNull()
  expect(mapType).toHaveValue('data')
  expect(canvas.queryByRole('button', { name: 'Dot Density' })).toBeNull()
  expect(canvas.queryByText(/Select "Dot Density"/)).toBeNull()
}

export const HiddenWithoutDeveloperFlag: Story = {
  args: { config: importableDensitySample as unknown as MapConfig },
  parameters: { coveDeveloperMode: 'absent' },
  play: assertDensityAuthoringHidden
}

export const HiddenWithDeveloperFlagFalse: Story = {
  args: { config: importableDensitySample as unknown as MapConfig },
  parameters: { coveDeveloperMode: 'false' },
  play: assertDensityAuthoringHidden
}

export const IsolateDensityCategory: Story = {
  ...MultipleDiseases,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="560"]', canvasElement)
    const original = readMap(canvasElement)
    await performAndAssert(
      'Selecting Measles isolates its dots',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Measles', exact: true })),
      (_, after) => after.count === 101 && after.signature === original.signature
    )
    expect(canvas.getByRole('button', { name: 'Measles', exact: true })).toHaveAttribute('aria-pressed', 'true')
    expect(canvas.getByRole('button', { name: 'Salmonellosis', exact: true })).toHaveAttribute('aria-pressed', 'false')
    await performAndAssert(
      'Selecting Salmonellosis switches isolation',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Salmonellosis', exact: true })),
      (_, after) => after.count === 230 && after.signature === original.signature
    )
    await performAndAssert(
      'Repeated category selection restores all dots',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Salmonellosis', exact: true })),
      (_, after) => after.count === original.count
    )
    await userEvent.click(canvas.getByRole('button', { name: 'Pertussis', exact: true }))
    await performAndAssert(
      'Show All clears isolation',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Show All', exact: true })),
      (_, after) => after.count === original.count
    )
  }
}

export const AdvancedPlacementSeed: Story = {
  ...EditSettings,
  args: {
    config: {
      ...fixture,
      general: { ...fixture.general, showSidebar: false },
      dotDensity: {
        ...createDefaultDotDensityConfig(),
        enabled: true,
        dotValue: 5,
        seed: 123,
        series: [{ id: 'advanced-measles', column: 'measles', label: 'Measles' }]
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="101"]', canvasElement)
    await openAccordion(canvas, 'Dot Density')
    expect(canvas.queryByLabelText('Placement seed')).toBeNull()
    expect(canvas.queryByText('Advanced', { selector: 'summary' })).toBeNull()
    await userEvent.click(canvas.getByText('Advanced Options', { exact: true }))
    const editor = await waitForPresence('.advanced-json-editor', canvasElement)
    expect(within(editor).getByText('seed', { exact: true })).toBeVisible()
    expect(within(editor).getByText('123', { exact: true })).toBeVisible()
    expect(canvas.queryByRole('button', { name: 'Measles', exact: true })).toBeNull()
    await performAndAssert(
      'Advanced Options applies the seed without changing counts or legend visibility',
      () => readMap(canvasElement),
      async () => {
        await userEvent.dblClick(within(editor).getByText('123', { exact: true }))
        const input = within(editor).getByDisplayValue('123')
        await userEvent.clear(input)
        await userEvent.type(input, '456{Enter}')
        await userEvent.click(canvas.getByRole('button', { name: 'Apply Configuration Changes' }))
      },
      (before, after) => after.signature !== before.signature && after.count === before.count
    )
    expect(canvas.queryByRole('button', { name: 'Measles', exact: true })).toBeNull()
    const applied = readMap(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Save and Reload Map' }))
    const saved = JSON.parse(canvas.getByLabelText('Saved Dot Density Config').textContent!)
    expect(saved.seed).toBe(456)
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="101"]', canvasElement)
    expect(readMap(canvasElement).signature).toBe(applied.signature)
    await userEvent.click(canvas.getByText('Advanced Options', { exact: true }))
    const reloaded = await waitForPresence('.advanced-json-editor', canvasElement)
    expect(within(reloaded).getByText('seed', { exact: true })).toBeVisible()
    expect(within(reloaded).getByText('456', { exact: true })).toBeVisible()
  }
}

export const PaletteColorsMatchDensityLegend: Story = {
  ...MultipleDiseases,
  args: {
    config: {
      ...MultipleDiseases.args!.config,
      dotDensity: {
        ...MultipleDiseases.args!.config.dotDensity!,
        // New palette-driven series omit the legacy per-series color override.
        series: diseaseSeries.map(disease => ({
          id: `outbreak-${disease.id}`,
          column: disease.id,
          label: disease.label
        }))
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="560"]', canvasElement)
    const original = readMap(canvasElement)
    await userEvent.selectOptions(canvas.getByRole('combobox', { name: /Select Location/ }), '04')
    await openAccordion(canvas, 'Visual')
    await performAndAssert(
      'Selected catalog palette redraws density colors',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByTitle('qualitative_standard')),
      (before, after) =>
        after.pixels !== before.pixels && after.signature === original.signature && after.count === original.count
    )
    const assertColors = (colors: string[]) => {
      const map = canvasElement.querySelector<HTMLCanvasElement>('canvas.county-map-canvas')!
      const pixels = map.getContext('2d')!.getImageData(0, 0, map.width, map.height).data
      for (const [index, label] of ['Measles', 'Salmonellosis', 'Pertussis'].entries()) {
        const rgb = [1, 3, 5].map(offset => parseInt(colors[index].slice(offset, offset + 2), 16))
        const color = `rgb(${rgb.join(', ')})`
        const button = canvas.getByRole('button', { name: label, exact: true })
        expect(button.querySelector<HTMLElement>('.legend-item')!.style.backgroundColor).toBe(color)
        let matches = 0
        for (let i = 0; i < pixels.length; i += 4)
          if (rgb.every((value, channel) => pixels[i + channel] === value)) matches++
        expect(matches).toBeGreaterThan(0)
      }
    }
    const colors = [0, 4, 6].map(index => mapColorPalettes.v2.qualitative_standard[index])
    assertColors(colors)
    await performAndAssert(
      'Palette reverse changes dots and matching swatches',
      () => readMap(canvasElement),
      async () =>
        userEvent.click(
          canvasElement.querySelector<HTMLInputElement>('input[name="general-palette-isReversed"]')!.parentElement!
        ),
      (before, after) =>
        after.pixels !== before.pixels && after.signature === original.signature && after.count === original.count
    )
    assertColors([...colors].reverse())
    await userEvent.click(canvas.getByRole('button', { name: 'Measles', exact: true }))
    await performAndAssert(
      'Changing palettes preserves category isolation',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByTitle('sequential_orangereverse')),
      (before, after) => after.count === 101 && after.signature === before.signature && after.pixels !== before.pixels
    )
    expect(canvas.getByRole('button', { name: 'Measles', exact: true })).toHaveAttribute('aria-pressed', 'true')
  }
}
