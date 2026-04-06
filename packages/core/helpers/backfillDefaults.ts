type LegacyDefaults = Record<string, Record<string, unknown>>

/**
 * Backfills missing properties from `defaults` into `config` sections, respecting
 * legacy defaults so that existing configs aren't affected by new/changed defaults
 * in initial-state.js.
 *
 * For each top-level key in `defaults` that is a non-array object in `config`,
 * any property that is `undefined` in `config[key]` is filled:
 *   - If `legacyDefaults[key]` has an entry for the property, the legacy value is
 *     used. A legacy value of `undefined` means "don't backfill" (for brand-new
 *     properties that old configs should not receive).
 *   - Otherwise the current default value is used.
 *
 * Mutates `config` in place.
 */
export function backfillDefaults(
  config: Record<string, any>,
  defaults: Record<string, any>,
  legacyDefaults: LegacyDefaults = {}
): void {
  for (const key of Object.keys(defaults)) {
    if (config[key] && typeof config[key] === 'object' && !Array.isArray(config[key])) {
      for (const prop of Object.keys(defaults[key])) {
        if (config[key][prop] === undefined) {
          const inLegacy = legacyDefaults[key] && prop in legacyDefaults[key]
          const fillValue = inLegacy ? legacyDefaults[key][prop] : defaults[key][prop]
          if (fillValue !== undefined) {
            config[key][prop] = fillValue
          }
        }
      }
    }
  }
}
