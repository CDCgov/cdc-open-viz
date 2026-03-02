// Preserves the OLD default values for properties changed in initial-state.js.
// When the backfill loop fills a missing property, it uses these values instead
// of the current defaults so that existing configs aren't visually affected.
//
// See backfillDefaults() in @cdc/core for the shared fill logic.
export const LEGACY_MAP_DEFAULTS: Record<string, Record<string, unknown>> = {
  legend: { style: 'circles', position: 'side', numberOfItems: 3, hideBorder: false }
}
