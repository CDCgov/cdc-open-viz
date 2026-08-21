export type LegacyDefaults = Record<string, unknown>

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === 'object' && !Array.isArray(value)

/**
 * Merges a loaded config with current defaults while preserving legacy values
 * for missing top-level scalar and array properties.
 *
 * Precedence, from highest to lowest, is:
 *   1. explicitly loaded config
 *   2. top-level legacy defaults
 *   3. current defaults
 *
 * Plain-object legacy entries are reserved for backfillDefaults(), which fills
 * missing properties inside existing config sections.
 */
export function mergeConfigWithDefaults<TConfig extends Record<string, any>>(
  config: Partial<TConfig>,
  defaults: TConfig,
  legacyDefaults: LegacyDefaults = {}
): TConfig {
  const topLevelLegacyDefaults = Object.fromEntries(
    Object.entries(legacyDefaults).filter(([, value]) => !isPlainObject(value))
  )

  return { ...defaults, ...topLevelLegacyDefaults, ...config }
}

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
          const legacySection = legacyDefaults[key]
          const inLegacy = isPlainObject(legacySection) && prop in legacySection
          const fillValue = inLegacy ? legacySection[prop] : defaults[key][prop]
          if (fillValue !== undefined) {
            config[key][prop] = fillValue
          }
        }
      }
    }
  }
}
