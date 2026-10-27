import { migrationCharacterizationCases } from '../migration-characterization/cases'
import type { EffectiveConfigKind } from './adapters'

export type EffectiveConfigCase = {
  name: string
  input: string
  expected: string
  source: string
  kind?: EffectiveConfigKind
  coverage: string[]
}

const reusedCases: EffectiveConfigCase[] = migrationCharacterizationCases.map(testCase => ({
  name: testCase.name,
  input: `../migration-characterization/inputs/${testCase.input}`,
  expected: `expected/${testCase.expected}`,
  source: testCase.source,
  coverage: ['shared migration-characterization input', ...testCase.structures]
}))

const targeted = (
  name: string,
  source: string,
  coverage: string[],
  kind?: EffectiveConfigKind,
  input = `inputs/${name}.json`
): EffectiveConfigCase => ({
  name,
  input,
  expected: `expected/${name}.json`,
  source,
  kind,
  coverage
})

export const effectiveConfigCases: EffectiveConfigCase[] = [
  ...reusedCases,
  targeted('sparse-current-chart', 'synthetic boundary fixture', ['sparse current chart', 'missing nested sections']),
  targeted('sparse-current-map', 'synthetic boundary fixture', ['sparse current map', 'missing nested sections']),
  targeted('sparse-current-dashboard', 'synthetic boundary fixture', ['sparse current dashboard']),
  targeted('falsey-and-array-chart', 'synthetic boundary fixture', [
    'false',
    'zero',
    'empty string',
    'null',
    'empty arrays',
    'populated arrays'
  ]),
  targeted(
    'horizontal-bar',
    'packages/chart/src/_stories/_mock/horizontal_bar.json',
    ['horizontal bar'],
    undefined,
    '../../../../../chart/src/_stories/_mock/horizontal_bar.json'
  ),
  targeted('heatmap', 'synthetic boundary fixture', ['HeatMap', 'missing nested axis properties']),
  targeted('horizon', 'synthetic boundary fixture', ['Horizon Chart', 'layer-derived palette count']),
  targeted('modern-line', 'synthetic boundary fixture', ['current modern chart', 'modern palette']),
  targeted('forecasting', 'synthetic boundary fixture based on packages/chart/examples/feature/forecasting', [
    'Forecasting',
    'categorical-to-date axis repair'
  ]),
  targeted('box-plot', 'synthetic boundary fixture based on packages/chart/examples/feature/boxplot', [
    'Box Plot',
    'axis label placement repair'
  ]),
  targeted('bump-chart', 'synthetic boundary fixture based on packages/dashboard/src/_stories/_mock/bump-chart.json', [
    'Bump Chart',
    'date-time axis repair'
  ]),
  targeted('deviation-bar', 'synthetic boundary fixture based on packages/chart/examples/feature/deviation', [
    'Deviation Bar'
  ]),
  targeted('paired-bar', 'synthetic boundary fixture based on packages/chart/examples/feature/paired-bar', ['Paired Bar']),
  targeted('forest-plot', 'synthetic boundary fixture based on packages/chart/examples/feature/forest-plot', [
    'Forest Plot'
  ]),
  targeted('forest-plot-column-repair', 'synthetic Forest Plot compatibility boundary', [
    'Forest Plot column repair',
    'vertical table index label',
    'radius scaling column'
  ]),
  targeted('lollipop-style-sync', 'synthetic bar compatibility boundary', ['lollipop bar-style synchronization']),
  targeted('minimum-bar-height', 'synthetic bar compatibility boundary', ['minimum bar height']),
  targeted('empty-chart-table-label', 'synthetic chart compatibility boundary', ['empty chart table label']),
  targeted('heatmap-legacy-smooth-legend', 'synthetic HeatMap compatibility boundary', [
    'HeatMap',
    'legacy smooth legend'
  ]),
  targeted('dashboard-conditions-without-ids', 'synthetic dashboard compatibility boundary', [
    'dashboard conditions without IDs',
    'generated condition IDs'
  ]),
  targeted('map-string-special-classes', 'synthetic boundary based on packages/map/examples/default-world.json', [
    'map string-valued specialClasses'
  ]),
  targeted('old-data-bite-missing-4265-fields', 'synthetic pre-4.26.5 standalone data bite', [
    'standalone old data bite',
    '4.26.5 missing biteStyle'
  ]),
  targeted('old-waffle-missing-4265-fields', 'synthetic pre-4.26.5 standalone waffle', [
    'standalone old waffle',
    '4.26.5 missing visualizationType'
  ]),
  targeted('chart-absent-y-axis', 'synthetic pre-4.26.5 chart boundary', [
    'entirely absent yAxis',
    '4.26.5 yAxis creation'
  ]),
  targeted('bubble-map-partial', 'synthetic boundary fixture', ['bubble map', 'partial nested structures']),
  targeted('county-map-partial', 'synthetic boundary fixture', ['county map', 'partial nested structures']),
  targeted('mixed-dashboard', 'synthetic boundary fixture', [
    'dashboard',
    'chart',
    'map',
    'data bite',
    'waffle',
    'markup include',
    'table'
  ]),
  targeted('sparse-multi-dashboard', 'synthetic boundary fixture', ['multi-dashboard', 'sparse child dashboards']),
  targeted(
    'standalone-data-bite',
    'packages/data-bite/examples/minimal-example.json',
    ['standalone data bite'],
    undefined,
    '../../../../../data-bite/examples/minimal-example.json'
  ),
  targeted(
    'standalone-waffle',
    'packages/waffle-chart/examples/minimal-example.json',
    ['standalone waffle'],
    undefined,
    '../../../../../waffle-chart/examples/minimal-example.json'
  ),
  targeted(
    'standalone-markup-include',
    'packages/markup-include/examples/minimal-example.json',
    ['standalone markup include'],
    undefined,
    '../../../../../markup-include/examples/minimal-example.json'
  ),
  targeted(
    'standalone-data-table',
    'packages/data-table/examples/minimal-example.json',
    ['standalone data table'],
    undefined,
    '../../../../../data-table/examples/minimal-example.json'
  )
]
