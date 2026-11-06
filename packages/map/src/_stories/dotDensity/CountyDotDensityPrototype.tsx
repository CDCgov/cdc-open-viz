import { useMemo, useState } from 'react'
import { feature } from 'topojson-client'
import type { FeatureCollection } from 'geojson'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import CdcMap from '../../CdcMap'
import type { MapConfig } from '../../types/MapConfig'
import { CountyDotDensityContext } from '../../context/CountyDotDensityContext'
import countyTopology from '../../components/UsaMap/data/cb_2019_us_county_20m.json'
import CountyPatterns from '../_mock/county-patterns.json'
import { diseaseSeries, outbreakCounts } from './outbreakData'
import OutbreakLegend from './OutbreakLegend'

const populationSeries = [{ id: 'population', label: 'People', color: '#005ea8' }]
const allCounties = (
  feature(countyTopology as any, countyTopology.objects.counties as any) as unknown as FeatureCollection
).features
const geographyLabels = { '04': 'Arizona', '06': 'California', all: 'United States' }

export type CountyDotDensityProps = {
  geography: keyof typeof geographyLabels
  dotValue: number
  dotRadius: number
  seed: number
  empty?: boolean
  dataset?: 'population' | 'outbreaks'
}

/** The prototype now renders CdcMap itself; only fixtures and experimental layer controls live here. */
export default function CountyDotDensityPrototype({
  geography,
  dotValue,
  dotRadius,
  seed,
  empty = false,
  dataset = 'population'
}: CountyDotDensityProps) {
  const [hiddenSeries, setHiddenSeries] = useState<string[]>([])
  const series = dataset === 'outbreaks' ? diseaseSeries : populationSeries
  const rows = useMemo<(Record<string, string | number> & { FIPS: string })[]>(
    () =>
      empty
        ? []
        : allCounties.flatMap(county => {
            const id = String(county.id)
            if (geography !== 'all' && !id.startsWith(geography)) return []
            const counts = outbreakCounts[id]
            if (dataset === 'outbreaks' && !counts) return []
            const totals = dataset === 'outbreaks' ? counts : [1000 + ((Number(id) * 7919) % 149000)]
            return [{ FIPS: id, ...Object.fromEntries(series.map((category, index) => [category.id, totals[index]])) }]
          }),
    [empty, geography, dataset, series]
  )
  const settings = useMemo(
    () => ({ dotValue, seed, series: series.map(category => ({ ...category, column: category.id })) }),
    [dotValue, seed, series]
  )
  const layer = useMemo(
    () => ({ settings, radius: dotRadius, hiddenSeries, initialStateCode: geography === 'all' ? '' : geography }),
    [settings, dotRadius, hiddenSeries, geography]
  )
  const config = useMemo(() => {
    const result = cloneConfig(CountyPatterns) as unknown as MapConfig & {
      general: MapConfig['general'] & { countyCensusYear: string }
    }
    result.general = {
      ...result.general,
      title: dataset === 'outbreaks' ? 'Simulated disease outbreaks' : 'County dot density prototype',
      subtext: `Synthetic county totals · ${geographyLabels[geography]} · Bundled 2019 county boundaries`,
      showSidebar: false,
      showStateDropdown: true,
      showNeighboringStates: false,
      showDownloadImgButton: false,
      showDownloadPdfButton: false,
      countyCensusYear: '2019'
    }
    result.map = { ...result.map, patterns: [], layers: [] }
    result.data = rows
    result.filters = []
    result.columns = {
      geo: { name: 'FIPS', label: 'County', tooltip: true, dataTable: true },
      primary: { name: '', tooltip: false, dataTable: false },
      ...Object.fromEntries(
        series.map((category, index) => [
          `additionalColumn${index + 1}`,
          {
            name: category.id,
            label: `${category.label}${dataset === 'outbreaks' ? ' cases' : ''}`,
            tooltip: true,
            dataTable: true,
            prefix: '',
            suffix: '',
            roundToPlace: 0
          }
        ])
      )
    } as MapConfig['columns']
    result.table = {
      ...result.table,
      label: 'County totals',
      expanded: false,
      caption:
        dataset === 'outbreaks'
          ? 'Invented case counts for one shared simulated reporting period.'
          : 'Synthetic population counts for prototype evaluation.'
    }
    return result
  }, [rows, dataset, geography, series])
  const unit = dataset === 'outbreaks' ? (dotValue === 1 ? 'case' : 'cases') : dotValue === 1 ? 'person' : 'people'
  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: 24 }}>
      {dataset === 'outbreaks' && (
        <p>Invented case counts for a shared simulated reporting period. This is not current outbreak surveillance.</p>
      )}
      <p>
        <strong>
          1 dot = {dotValue.toLocaleString()} {unit}.
        </strong>{' '}
        Dots show an approximate distribution within each county, not individual locations. Whole dots only: remainders
        below one dot per county{dataset === 'outbreaks' ? ' and disease' : ''} are not displayed.
      </p>
      {rows.length === 0 && <p>No data to display.</p>}
      {dataset === 'outbreaks' && (
        <OutbreakLegend
          series={series}
          totals={series.map(category => rows.reduce((sum, row) => sum + Number(row[category.id]), 0))}
          hiddenSeries={hiddenSeries}
          onToggle={id =>
            setHiddenSeries(previous =>
              previous.includes(id) ? previous.filter(value => value !== id) : [...previous, id]
            )
          }
        />
      )}
      <CountyDotDensityContext.Provider value={layer}>
        <CdcMap config={config} navigationHandler={() => {}} setConfig={() => {}} />
      </CountyDotDensityContext.Provider>
    </main>
  )
}
