// Preserves the OLD default values for properties changed in initial-state.js.
// When the backfill loop fills a missing property, it uses these values instead
// of the current defaults so that existing configs aren't visually affected.
//
// - Changed defaults: record the ORIGINAL value before any changes.
// - New properties:   set to `undefined` so they are not backfilled at all.
//
// See backfillDefaults() in @cdc/core for the shared fill logic.
export const LEGACY_CHART_DEFAULTS: Record<string, Record<string, unknown>> = {
  general: { useIntelligentLineChartLabels: undefined },
  yAxis: { hideAxis: false, hideTicks: false, gridLines: false, numTicks: '' },
  xAxis: { numTicks: '', dateDisplayFormat: undefined, viewportNumTicks: undefined },
  table: { expanded: true, dateDisplayFormat: '' },
  legend: { position: 'right' },
  dataFormat: { commas: false },
  tooltips: { dateDisplayFormat: '' }
}
