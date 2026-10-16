export type AlwaysRunCoverage = {
  version: string
  coverage: string
}

export type MigrationCharacterizationCase = {
  name: string
  input: string
  expected: string
  source: string
  startingVersion: string | null
  structures: string[]
  alwaysRunCoverage: AlwaysRunCoverage[]
}

const fixture = (
  name: string,
  source: string,
  startingVersion: string | null,
  structures: string[],
  alwaysRunCoverage: AlwaysRunCoverage[] = []
): MigrationCharacterizationCase => ({
  name,
  input: `${name}.json`,
  expected: `${name}.json`,
  source,
  startingVersion,
  structures,
  alwaysRunCoverage
})

export const migrationCharacterizationCases: MigrationCharacterizationCase[] = [
  fixture(
    'full-dash-test',
    'packages/dashboard/examples/full-dash-test.json',
    '4.24.3',
    ['dashboard', 'shared filters', 'charts', 'datasets', 'palettes'],
    []
  ),
  fixture(
    'default-single-state',
    'packages/map/examples/default-single-state.json',
    '4.24.7',
    ['map', 'single-state settings', 'legend', 'palette'],
    [
      { version: '4.25.1', coverage: 'Removes the legacy territoriesLabel map setting.' },
      { version: '4.25.3', coverage: 'Moves the legacy download flag to table.download.' },
      { version: '4.25.8', coverage: 'Renames statePicked and preserves legacy map legend behavior.' }
    ]
  ),
  fixture(
    'single-state-dashboard-filters',
    'packages/dashboard/examples/single-state-dashboard-filters.json',
    '4.24.9',
    ['dashboard', 'shared filters', 'single-state map', 'data table'],
    [{ version: '4.25.8', coverage: 'Renames state and filter-control selections inside a dashboard map.' }]
  ),
  fixture(
    'scatterplot-image-download',
    'packages/chart/src/_stories/_mock/scatterplot-image-download.json',
    '4.24.9',
    ['chart', 'filters', 'pivot table', 'downloads', 'palette'],
    [{ version: '4.24.10', coverage: 'Converts the legacy singular pivot value column.' }]
  ),
  fixture(
    'data-table-no-data',
    'packages/core/components/_stories/_mocks/DataTable/no-data.json',
    '4.24.10',
    ['dashboard', 'data table', 'no-data state'],
    [{ version: '4.24.11', coverage: 'Adds the color-migration marker.' }]
  ),
  fixture(
    'default-map',
    'packages/map/examples/default.json',
    '4.24.11',
    ['map', 'filters', 'legend', 'palette'],
    [
      { version: '4.25.1', coverage: 'Removes the legacy territoriesLabel map setting.' },
      { version: '4.25.3', coverage: 'Moves the legacy download flag to table.download.' },
      { version: '4.25.8', coverage: 'Renames statePicked and applies legacy legend compatibility.' }
    ]
  ),
  fixture(
    'dashboard-multi-dashboard-version-regression',
    'packages/dashboard/examples/dashboard-multi-dashboard-version-regression.json',
    '4.25.0',
    ['dashboard', 'multi-dashboard recursion', 'inherited versions'],
    []
  ),
  fixture(
    'explore-by-location',
    'packages/dashboard/src/_stories/_mock/api/explore-by-location.json',
    '4.25.1',
    ['dashboard', 'legacy row footnotes', 'nested charts', 'markup includes'],
    [
      { version: '4.25.4', coverage: 'Moves legacy row footnotes to visualization-level structures.' },
      { version: '4.25.10', coverage: 'Moves markup variables out of contentEditor.' }
    ]
  ),
  fixture(
    'dashboard-map',
    'packages/dashboard/examples/map.json',
    '4.25.4',
    ['dashboard', 'map', 'footnote-boundary configuration'],
    [{ version: '4.25.8', coverage: 'Migrates nested map state and no-data compatibility fields.' }]
  ),
  fixture(
    'special-classes',
    'packages/dashboard/examples/special-classes.json',
    '4.25.6',
    ['dashboard', 'charts', 'map', 'footnotes', 'tables', 'filters', 'palettes'],
    [{ version: '4.25.9', coverage: 'Normalizes chart/map palettes and map no-data messaging.' }]
  ),
  fixture(
    'no-data-markup',
    'packages/dashboard/examples/no-data-markup.json',
    '4.25.7',
    ['dashboard', 'markup include', 'markup variables', 'filters'],
    [{ version: '4.25.10', coverage: 'Moves markup variables out of contentEditor and enables them.' }]
  ),
  fixture(
    'pie-config',
    'packages/chart/src/_stories/_mock/pie_config.json',
    '4.25.9',
    ['pie chart', 'data format', 'palette'],
    [{ version: '4.26.8-1', coverage: 'Applies the one-time palette compatibility repair.' }]
  ),
  fixture(
    'forecast-combo-with-gaps',
    'packages/chart/src/_stories/_mock/forecast_combo_with_gaps.json',
    '4.25.10',
    ['chart', 'forecast series', 'palette', 'filters'],
    []
  ),
  fixture(
    'markup-axis-label',
    'packages/dashboard/examples/markup-axis-label.json',
    '4.25.11',
    ['dashboard', 'markup variables', 'axis labels'],
    [
      {
        version: '4.25.11',
        coverage: 'Documents the migration as an intentional no-op marker/runtime behavior release.'
      }
    ]
  ),
  fixture(
    'outbreak-map',
    'packages/map/src/_stories/_mock/outbreak-map_10_26_23.json',
    '4.26.8',
    ['modern map', 'legend', 'palette'],
    []
  ),
  fixture(
    'missing-filter-properties',
    'synthetic',
    '4.24.9',
    ['dashboard filters', 'visualization filters', 'shared filters'],
    [
      {
        version: '4.24.7',
        coverage: 'Creates a dashboard-filter visualization and row for legacy shared filters.'
      },
      { version: '4.24.9', coverage: 'Generates deterministic IDs when any visualization filter lacks one.' },
      { version: '4.24.10', coverage: 'Defines missing root filter styles and converts legacy multiSelect.' }
    ]
  ),
  fixture(
    'area-chart-and-download',
    'synthetic',
    '4.25.1',
    ['area chart', 'CSV download settings', 'inline suffix label'],
    [
      { version: '4.25.3', coverage: 'Converts regular area charts and moves the CSV download flag.' },
      { version: '4.25.4', coverage: 'Adds the unified chart-legend default.' },
      { version: '4.25.6', coverage: 'Moves a top-only suffix to the Y-axis inline label.' }
    ]
  ),
  fixture(
    'preliminary-series',
    'synthetic',
    '4.25.6',
    ['standalone chart', 'dashboard chart', 'preliminary series'],
    [{ version: '4.25.7', coverage: 'Converts legacy preliminary seriesKey values in both chart contexts.' }]
  ),
  fixture(
    'legacy-map-legend',
    'synthetic',
    '4.25.7',
    ['standalone map', 'dashboard map', 'legacy legend compatibility'],
    [
      {
        version: '4.25.8',
        coverage: 'Adds equalNumberOptIn=false and disables separateZero for opted-in legacy maps.'
      }
    ]
  ),
  fixture('versionless-chart', 'synthetic', null, ['chart', 'missing saved version', 'palette fallback'], []),
  fixture(
    'malformed-version-dashboard',
    'synthetic',
    'banana',
    ['dashboard', 'malformed saved version', 'nested chart'],
    []
  )
]
