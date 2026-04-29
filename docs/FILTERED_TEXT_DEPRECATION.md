# Filtered Text Deprecation

This document tracks the two-phase deprecation of `@cdc/filtered-text` in favor of `@cdc/markup-include`.

- Phase 1 was implemented in `4.26.5`.
- Phase 2 is planned for `4.26.6`.

## Summary

Deprecation happens in two explicit phases.

Phase 1 is the operational deprecation phase. It makes `markup-include` the supported replacement, adds `selectionMode: 'first'` to markup variables, migrates legacy `filtered-text` configs to `markup-include`, removes `filtered-text` from new authoring surfaces, and intentionally surfaces remaining standalone/runtime migration issues during Phase 1 rather than delaying them to package deletion.

Phase 2 is a cleanup/removal phase. It deletes the legacy package and remaining runtime/editor references while preserving automatic config migration through the shared versioned migration pipeline.

Important implementation rule: do not implement Phase 1 and Phase 2 together. Phase 1 is the user-visible deprecation and migration phase; Phase 2 should be mostly removal and cleanup.

## Phase 1

### Markup Variable Enhancement

- Extend the shared `MarkupVariable` type in `@cdc/core` with `selectionMode?: 'all' | 'first'`.
- Keep the default unchanged: omitted `selectionMode` preserves current multi-match list behavior.
- Update `processMarkupVariables(...)` so column-based variables:
  - use existing dashboard/shared filtering behavior
  - apply variable `conditions`
  - then resolve output using `selectionMode`
- For `selectionMode: 'first'`, return the first matching row’s cell value only, with no list formatting or comma-joining.
- Do not change metadata or icon variable behavior in this phase.

### Markup Variable Editor Behavior

- Expose the new control only for column-based value variables.
- Place the control inside the existing `Conditions` accordion, not in `Basic Settings`.
- Treat it as a match-resolution choice that appears below the condition controls.
- Keep the current default behavior visible in authoring so comma-joined output still signals under-filtered variables.
- Use editor wording equivalent to `Display all matching rows` with an explicit way to switch to first-match behavior.

### Filtered-Text To Markup-Include Migration Contract

- Define migration as a pure config transformation in the shared migration/version pipeline, not in the legacy package.
- Migrate:
  - `type: 'filtered-text'` -> `type: 'markup-include'`
  - `visualizationType: 'filtered-text'` -> `visualizationType: 'markup-include'`
  - `title` -> `contentEditor.title`
  - `textColumn` -> one markup variable targeting that column
  - rendered body -> `contentEditor.inlineHTML` containing only that variable tag
  - local `filters[{ columnName, columnValue }]` -> markup-variable `conditions[{ columnName, isOrIsNotEqualTo: 'is', value }]`
  - variable processing -> `enableMarkupVariables: true`
  - first-row semantics -> `selectionMode: 'first'`
- Preserve `dataKey`, `dataDescription`, `formattedData`/`data`, `theme`, and shell `visual` settings where they map cleanly.
- Preserve dashboard/shared filters as-is; do not convert them into local markup-include widget filters.
- Do not preserve `filtered-text`’s buggy local filter loop behavior. Migration should produce correct combined condition matching.
- If `textColumn` is missing or unusable, migrate conservatively to `markup-include` with a clear inline fallback message rather than guessing.

### Runtime And Authoring Deprecation Behavior

- Remove `filtered-text` from all editor/dashboard creation surfaces so no new `filtered-text` visualizations can be authored.
- Remove `filtered-text` from picker/add-visualization flows and reject programmatic creation of new `filtered-text` configs.
- Keep legacy dashboard/runtime branches present during Phase 1 so old saved configs can still enter the system.
- Intentionally stop standalone `@cdc/filtered-text` from rendering once its config has been migrated to `markup-include`; show a clear migrated/deprecated message instead of silently handing off.
- Treat Phase 1 as the moment when remaining standalone `filtered-text` usage surfaces and must be migrated. This is deliberate so Phase 2 can be mostly file deletion.

### Documentation And Messaging

- Update shared config docs to describe `filtered-text` as a legacy saved-config format that migrates to `markup-include`.
- Update package/repo docs so new authored dynamic text points to `markup-include`, not `filtered-text`.
- Document `selectionMode: 'first'` as primarily introduced for filtered-text migration and single-row text resolution, while preserving default multi-match behavior for authoring visibility.

### Phase 1 Tests

- Add unit tests for `processMarkupVariables(...)` covering:
  - default multi-match behavior unchanged
  - `selectionMode: 'first'` returns only the first matching row
  - `selectionMode: 'first'` works with dashboard filtering and variable `conditions`
  - empty-match behavior remains predictable
- Add markup variable editor tests confirming:
  - the new control lives in the `Conditions` area
  - default UI state preserves current behavior
  - selecting first-match updates the variable config correctly
- Add migration tests covering:
  - basic `filtered-text` config with only `textColumn`
  - `filtered-text` config with one or more local filters
  - dashboard-backed `filtered-text` configs preserving `dataKey` and shared-filter behavior
  - migrated configs using `selectionMode: 'first'`
  - migrated configs not inheriting the old broken multi-filter loop semantics
  - conservative migration when `textColumn` is missing
- Add authoring-surface tests confirming:
  - `filtered-text` no longer appears in creation surfaces
  - programmatic creation of new `filtered-text` configs is rejected
- Add runtime tests confirming:
  - legacy dashboard widgets still pass through the system during Phase 1
  - standalone `@cdc/filtered-text` shows the migrated/deprecated message after config migration
- Add one comparison fixture/story showing original `filtered-text` and migrated `markup-include` behavior for a representative single-row case.

## Phase 2

### Preconditions

- Phase 2 is a later follow-up and must not be bundled into the Phase 1 implementation.
- Only begin once Phase 1 has shipped and the shared migration pipeline is the accepted upgrade path for all supported config entrypoints.
- Assume the operational breaking point for standalone `filtered-text` already happened in Phase 1 by design.

### Removal Work

- Delete the `@cdc/filtered-text` package and its tests, examples, and package metadata.
- Remove remaining imports/usages of `CdcFilteredText` from dashboard, editor, stories, and runtime code.
- Remove legacy rendering/editing branches for `type === 'filtered-text'`.
- Remove temporary Phase 1 migrated/deprecated-message behavior along with the package.
- Remove stale helper/test references, wrapper behavior, and styling hooks that exist only for `filtered-text`.
- Remove `filtered-text` from shared registries such as labels, icons, picker metadata, and type maps where Phase 2 intends full retirement.

### Long-Term Compatibility Stance

- Keep the `4.26.5` migration logic alive in the shared versioned migration pipeline after package deletion.
- Treat that migration as the sole supported path for old `filtered-text` configs.
- Ensure the migration code does not import from or depend on the `filtered-text` package.
- After Phase 2, the supported legacy path is:
  1. config enters the shared migration pipeline
  2. config upgrades to `markup-include`
  3. normal `markup-include` rendering proceeds
- If a `filtered-text` config somehow bypasses migration and reaches runtime after Phase 2, fail clearly as unsupported legacy config rather than attempting fallback rendering.

### Documentation Cleanup

- Remove docs that present `filtered-text` as a supported component/package.
- Keep only narrow migration-oriented references where needed, phrased as `legacy saved configs are upgraded automatically`.
- Update repo/package descriptions so `filtered-text` is no longer listed as an active supported visualization package.

### Phase 2 Tests

- Verify legacy `filtered-text` configs still upgrade to `markup-include` through `coveUpdateWorker` after package removal.
- Verify migrated configs still carry `selectionMode: 'first'` and converted local filter `conditions`.
- Verify a representative old dashboard config renders through `markup-include` after migration with no dependency on the deleted package.
- Remove or update tests that import `@cdc/filtered-text`.
- Add checks confirming no remaining dashboard/editor/runtime branches reference `filtered-text`.
- Add checks confirming no creation surfaces, helper factories, shared registries, docs, or package listings expose `filtered-text` as available.
- Add one regression test proving a legacy saved config still loads successfully after package deletion because migration happens before render.

## Assumptions

- `selectionMode` belongs on the shared `MarkupVariable` model, with default behavior unchanged.
- Concatenated multi-match output remains the default because it helps authors detect under-filtered variables; `first` is an explicit opt-in and is applied automatically for migrated `filtered-text`.
- The editor control for this feature lives in the `Conditions` area for column variables, not in `Basic Settings`.
- Phase 1 intentionally surfaces standalone/runtime migration issues rather than preserving full standalone compatibility through package deletion.
- Phase 2 is a cleanup/removal pass only; it should not redesign the Phase 1 migration contract or revisit the `selectionMode` behavior.
- The shared migration pipeline is expected to run before runtime rendering for supported legacy config entrypoints after Phase 2.
