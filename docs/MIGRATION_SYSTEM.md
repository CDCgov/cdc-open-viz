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
2. Capture the config's initial version.
3. Iterate through the ordered migration list.
4. Run each migration when either:
   - `versionNeedsUpdate(initialVersion, migrationVersion)` is `true`, or
   - the migration is marked `alwaysRun`.
5. Recurse into `multiDashboards`, passing the parent's initial version down.
6. Stamp the root config with the latest migration version.
7. Restore stripped data arrays.

Important detail: migration eligibility is always based on the original starting version for that config, not on the version written by earlier migrations in the same pass.

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

## `alwaysRun` Migrations

Some migrations in `coveUpdateWorker.ts` are flagged with a third tuple value of `true`.

Example:

```ts
['4.25.10', update_4_25_10, true]
```

These migrations run regardless of the saved starting version.

This pattern exists for migrations that behave more like safe normalization or repair steps than one-time version bumps. In practice, this means the migration system is not purely "run everything newer than the saved version." It is "run everything newer than the saved version, plus any migrations explicitly marked safe to always apply."

When adding `alwaysRun`, be confident that the migration is:

- idempotent, or
- intentionally safe to reapply to already-updated configs.

## Suffixed Follow-Up Migrations

Suffixed migration versions exist so a follow-up repair can be inserted after an already-shipped patch version without inventing a fake higher patch number.

Example:

- `4.26.4`
- `4.26.4-1`

This allows the system to distinguish between:

- configs that still need the original `4.26.4` migration,
- configs already stamped `4.26.4` that need the follow-up repair,
- configs already stamped `4.26.4-1` that should not rerun the repair.

When adding a suffixed migration:

1. Create the new migration file in `packages/core/helpers/ver`, such as `4.26.4-1.ts`.
2. Import it in `coveUpdateWorker.ts`.
3. Insert it immediately after the base version it follows.
4. Add tests covering:
   - base version to suffixed version,
   - already suffixed configs,
   - ordering against the next patch version.

## Multi-Dashboard Behavior

`coveUpdateWorker()` recursively processes `multiDashboards`, but it passes the parent config's initial version into each child dashboard.

That means child dashboard migration decisions are based on the parent dashboard's starting version, not on any nested child version field.

After processing, child dashboard `version` fields are removed again so the version remains a root-level concern for multi-dashboard configs.

This behavior is important when debugging nested dashboard migrations. If a child appears to skip or run a migration unexpectedly, inspect the parent's starting version first.

## Final Version Stamping

After all applicable migrations run, `coveUpdateWorker()` always stamps the root config with the last version listed in the migration array.

Today that means the saved version becomes the final entry in the `versions` list, currently `4.26.4-1`.

This is true even if the original config started with an invalid version string and had to fall back to `0.0.0` for ordering.

## Testing Guidance

The most relevant tests live in:

- `packages/core/helpers/ver/tests/versionNeedsUpdate.test.ts`
- `packages/core/helpers/ver/tests/coveUpdateWorker.test.ts`

When changing migration behavior, prefer tests that cover:

- plain three-part versions,
- suffixed versions,
- malformed versions,
- `alwaysRun` behavior,
- multi-dashboard recursion.

If you are adding a migration with non-obvious behavior, add a targeted test that proves the exact before/after state rather than relying only on version assertions.
