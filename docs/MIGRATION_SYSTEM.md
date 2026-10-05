# Config Migration System

This document explains how the shared config migration system in `packages/core` decides which migrations to run, how suffixed migration versions work, and how malformed saved config versions are handled.

Use this doc when:

- adding a new migration in `packages/core/helpers/ver`,
- changing migration ordering rules,
- debugging why a config did or did not run a specific migration,
- reviewing how dashboard sub-configs inherit migration version decisions.

## Main Entry Point

The shared migration pipeline starts in `packages/core/helpers/coveUpdateWorker.ts`.

High-level flow:

1. Strip large data arrays from the config for performance.
2. Capture the config's initial version and an untouched snapshot of the stripped starting config.
3. Iterate through the ordered migration list.
4. Run each migration only when `versionNeedsUpdate(startingVersion, migrationVersion)` is `true`.
5. Recurse into `multiDashboards`, using each child's saved version and falling back to the parent's initial version when absent.
6. Stamp the root config with the latest migration version.
7. Restore stripped data arrays.

Important detail: migration eligibility is always based on the original saved version, not on versions written by earlier migrations in the same pass. Each eligible migration therefore runs once at its ordered position, and a config already saved at or after that position does not rerun it.

Migration functions may also inspect the untouched starting snapshot when a compatibility decision must be based on the raw saved shape rather than values produced by earlier migrations. The evolving `config` remains the source and destination for ordinary migration work; `startingConfig` is only for distinctions such as absent versus authored-empty sections.

The worker passes migration-only invocation facts through a context object:

```ts
type CoveMigrationContext = Readonly<{
  startingConfig: Config
  isMultiDashboardChild: boolean
}>

type CoveMigration = (config: Config, context?: CoveMigrationContext) => Config
```

The original saved version remains an internal worker concern for migration eligibility and multi-dashboard version fallback. A migration that must inspect the entry version reads `context.startingConfig.version`; it is not passed as a separate argument.

Treat `startingConfig` as immutable. Never return it, use it as the base for a migration result, or use it for current defaults, runtime state, or convenience. Every migration in one worker invocation receives the same snapshot, while each recursively processed multi-dashboard child receives its own snapshot.

After migration, each package applies its current defaults with `applyConfigDefaults()`. Defaults must not be applied before `coveUpdateWorker()`: migrations own historical compatibility, while default hydration owns only the current effective shape.

## Version Ordering Rules

Migration version comparison is implemented in `packages/core/helpers/ver/compareMigrationVersions.ts` and consumed by `packages/core/helpers/ver/versionNeedsUpdate.ts`.

Supported migration version formats:

- `major.minor.patch`
- `major.minor.patch-suffix`

Examples:

- `4.26.4`
- `4.26.4-1`
- `4.26.4-2`

Ordering rules:

- Major version compares first.
- Then minor.
- Then patch.
- Then numeric suffix.
- A missing suffix is treated as `0`.

That means:

- `4.26.4` and `4.26.4-0` are treated as equal.
- `4.26.4-1` runs after `4.26.4`.
- `4.26.4-9` still runs before `4.26.5`.

## Which Migration To Edit

Migration versions follow the COVE release version format. The leading `4` does not carry meaning for migration choice. The middle number maps to the year, so `26` means `2026`. The next number maps to the monthly release in that year. Suffixed versions such as `4.26.4-1` are follow-up migrations after that monthly release.

Do not guess whether to update an existing migration or add a new one. Ask the user which they want, then make the change in `packages/core/helpers/ver` and `packages/core/helpers/coveUpdateWorker.ts` accordingly.

## Malformed Saved Versions

Saved configs in the wild may contain invalid non-empty version strings such as:

- `banana`
- `4.26`
- `4.x.1`

Current behavior is to treat malformed saved versions as `0.0.0` for migration ordering.

This is implemented in `parseMigrationVersion()` inside `packages/core/helpers/ver/compareMigrationVersions.ts`.

Why this fallback exists:

- Older logic did not reject malformed versions cleanly.
- Some previously saved configs may still carry invalid version strings.
- Treating them as `0.0.0` runs the full migration chain instead of failing hard or partially migrating.

This fallback applies only to malformed version parsing for migration comparison. Empty or missing versions are handled separately by `versionNeedsUpdate()` and are also treated as needing migration.

## Suffixed Follow-Up Migrations

Suffixed migration versions exist so a follow-up repair can be inserted after an already-shipped patch version without inventing a fake higher patch number.

Example:

- `4.26.4`
- `4.26.4-1`

This allows the system to place a one-time repair at the schema-guarantee boundary where later migrations can rely on it. It also distinguishes between:

- configs that still need the original `4.26.4` migration,
- configs already stamped `4.26.4` that need the follow-up repair,
- configs already stamped `4.26.4-1` that should not rerun the repair.

When adding a suffixed migration:

1. Create the new migration file in `packages/core/helpers/ver`, such as `4.26.4-1.ts`.
2. Import it in `coveUpdateWorker.ts`.
3. Insert it immediately after the base version it follows.
4. Keep any later migration that relies on the repaired schema after the suffix.
5. Add tests covering:
   - base version to suffixed version,
   - already suffixed configs,
   - ordering against the next patch version.

## Multi-Dashboard Behavior

`coveUpdateWorker()` recursively processes `multiDashboards`. Each child uses its own saved version when present and falls back to the parent's initial version only when the child has never been versioned.

Sparse multi-dashboard roots temporarily receive missing neutral `dashboard`, `rows`, and `visualizations` collections so historical single-dashboard migrations can run safely. The worker records collection presence before adding this compatibility scaffolding and removes only collections that were absent on entry; the synthetic collections are never exposed through `startingConfig`.

The recursive call also identifies the config as a multi-dashboard child. Migrations can use that context to avoid applying root-only transformations, such as conversion of legacy single-dashboard filters.

After processing, each migrated child is stamped with the current version, just like other migrated roots.

This behavior is important when debugging nested dashboard migrations. If a child appears to skip or run a migration unexpectedly, inspect the child's saved version first, then the parent's starting version used as its fallback.

## Final Version Stamping

After all applicable migrations run, `coveUpdateWorker()` always stamps the root config with the last version listed in the migration array.

This is true even if the original config started with an invalid version string and had to fall back to `0.0.0` for ordering.

## Testing Guidance

The most relevant tests live in:

- `packages/core/helpers/ver/tests/versionNeedsUpdate.test.ts`
- `packages/core/helpers/ver/tests/coveUpdateWorker.test.ts`

When changing migration behavior, prefer tests that cover:

- plain three-part versions,
- suffixed versions,
- malformed versions,
- strict one-time migration eligibility,
- multi-dashboard recursion.

If you are adding a migration with non-obvious behavior, add a targeted test that proves the exact before/after state rather than relying only on version assertions.

**Never assert on `result.version` from `coveUpdateWorker` in migration tests.** `coveUpdateWorker` always stamps the final config with the last version in its migration array, so a version assertion will break as soon as any subsequent migration is added — with no relation to the behavior being tested. Assert on the config fields the migration actually changed instead.
