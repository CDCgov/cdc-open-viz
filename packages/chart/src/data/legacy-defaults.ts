// Preserves the OLD default values for properties changed in initial-state.js.
// When config preparation fills a missing property, it uses these values instead
// of the current defaults so that existing configs aren't visually affected.
//
// - Changed defaults: record the ORIGINAL value before any changes.
// - New properties:   set to `undefined` so they are not backfilled at all.
//
// See mergeConfigWithDefaults() and backfillDefaults() in @cdc/core for the shared logic.
export const LEGACY_CHART_DEFAULTS: Record<string, unknown> = {
  barThickness: 0.35,
  general: { useIntelligentLineChartLabels: undefined },
  yAxis: { hideAxis: false, hideTicks: false, gridLines: false, numTicks: '' },
  xAxis: { numTicks: '', dateDisplayFormat: undefined, viewportNumTicks: undefined },
  table: { expanded: true, dateDisplayFormat: '' },
  legend: { position: 'right' },
  dataFormat: { commas: false },
  tooltips: { dateDisplayFormat: '' },
  visual: { border: false, accent: false, background: false }
}
