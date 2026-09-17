# Column Remap System

## Purpose

Data Import preserves authored visualization and dashboard configuration when replacement data renames columns. The editor compares the current and proposed schemas, asks the author for explicit one-to-one mappings, validates the complete operation, and commits the new data and remapped configuration together.

No mapping or schema snapshot is saved in published configuration. Existing configs are unchanged until an author explicitly replaces data.

## Recursive matching

The implementation is owned by `packages/editor/src/components/DataImport`. `helpers/columnRemap.ts` contains the pure schema, match, validation, and immutable-remap functions.

A referenced column is any exact string value or array string item in authored config. Object keys are not generally column references. Key matching and remapping are limited to Chart and Table `columns` maps when an entry uses its key as the source-column identity. Substrings and expression contents are not rewritten.

Chart and Table `columns` use a mixed compatibility contract. A non-empty `columns.<entry>.name` is the effective source column; otherwise the map key is the source column. Canonical entries commonly mirror the source in both places, while legacy or newly staged entries can use an opaque slot key such as `additionalColumn1` with the source only in `name`. Remapping updates `name` as an exact string reference and renames the map key only when `name` is empty or mirrors that key. Opaque slot keys are preserved. Map `columns` keys such as `geo` and `primary` are semantic roles and are never renamed; their nested `name` values can still be remapped.

Mappings are applied simultaneously against the original value for a pass. For example, `a -> b` and `b -> c` produces `b` and `c`; the new `b` is not processed a second time. The input config is never mutated.

A raw replacement target is not offered when it reuses a column name generated only by the old transformation. This prevents the generated-column pass from reprocessing a reference produced by the raw pass. If that generated column is already referenced, the replacement is blocked because the new raw column would mask its removal from the transformed schema.

## Excluded branches

The following property names stop recursion at any depth:

- `data`
- `formattedData`
- `originalFormattedData`
- `yAxisDomainData`
- `tableData`
- `dataMetadata`
- `runtime`
- `runtimeDataUrl`

Matches inside those branches do not contribute to the review count. The names remain eligible when they are entries in a recognized Chart/Table `columns` map, where they identify columns rather than payload branches. On commit, Data Import installs the new raw data and metadata, recomputes the selected dataset's `formattedData`, removes cached payloads from dashboard rows and child visualizations that consume the selected dataset, and discards runtime-only state.

## Two schema passes

1. The raw pass compares the union of keys across all old rows with the union across all new rows. Only referenced removed columns require mappings, and targets may only be newly added raw columns.
2. After the raw mappings become valid, Data Import immediately runs `DataTransform.developerStandardize` against the old and proposed data descriptions. It compares those transformed schemas and reveals an additional generated-column section in the same modal only when referenced generated columns were removed. Targets may only be newly generated columns.

Standalone chart previews may publish a temporary configuration whose `data` contains transformed rows. Data Import retains the last identifiable raw standalone dataset and uses that as the raw-schema baseline; temporary preview data is still used for the latest authored settings but never replaces the raw comparison source.

There is no separate review screen. The modal keeps both mapping sections visible, reports one live count of rewritten Chart/Table column-map keys and exact string values once the complete mapping is valid, and enables a single Apply button.

The UI prevents incomplete and reused mappings: Apply remains disabled until every source has a target, and a selected target is removed from the other dropdowns. Reserved JavaScript property names are not offered as targets. The pure validation helper still enforces these rules defensively for stale state and non-UI callers.

## Blocking rules

The operation is rejected without dispatching config when any of these conditions is found:

- a required source is unmapped;
- a target is not newly added or is reused by another source;
- a source or target is `__proto__`, `prototype`, or `constructor`;
- a renamed Chart/Table column-map key would overwrite another entry;
- a rename would introduce a duplicate string in an array;
- a removed raw column name also occurs as a literal value in the old data; or
- a newly added raw column reuses the name of a referenced generated column from the old transformed data; or
- for dashboards, a removed column also exists in another dataset or is identical to a stable dataset key.

Canceling, parse/fetch failure, or validation failure leaves both data and configuration untouched.

Structural and ambiguity errors explain how the author can recover. Conflicts that can be resolved in the modal ask the author to choose another target or remove the existing configuration. Blocking data and dashboard ambiguities ask the author to preserve the original column name, stage a same-schema data cleanup, or import a fully updated dashboard JSON configuration, as applicable.

## Dashboards

Dashboard dataset keys and dataset-reference values are never renamed. A remap walks the root dashboard and every `multiDashboards` authored config together. Because the walk is global, remapping is blocked when the removed raw or generated column exists in another dashboard dataset's freshly computed raw and transformed schemas, or equals any dataset key; that avoids changing an unrelated dataset's references or identity.

On success the selected dataset receives the new source details, data, metadata, and transformed data in the same `EDITOR_SET_CONFIG` dispatch as the remapped root and tab configs. Cached row and child-visualization payloads for that dataset are removed so normal loading paths derive them again.

## URL behavior

All explicit URL imports use a no-store fetch; CSV URLs also retain the existing cache-busting query parameter.

- With **Always load from URL** off, an explicit import/reimport compares the fetched replacement with saved inline data.
- With it on, an unchanged URL does not invoke remapping. A changed URL first fetches the current URL for the old schema and then compares it with the proposed URL. If the current URL cannot be fetched or parsed, the URL change is blocked.

Live URLs must keep a stable schema at the same address. Renaming columns behind an unchanged live URL is unsupported in v1; publishers should use a new or versioned URL when the schema changes.

## Vega exclusion

Vega configs bypass column remapping in v1. Vega field references can be embedded in expression strings, while this system only rewrites exact string references and eligible Chart/Table column-map keys. The existing Vega-specific data update path remains responsible for Vega imports.

## Tests and manual fixtures

The pure contract is covered by `packages/editor/src/components/DataImport/tests/columnRemap.test.ts`. Data Import interactions belong in `packages/editor/src/_stories/Editor.stories.tsx` and should assert the rendered visualization after applying a mapping.

Ignored local fixtures live under:

- `packages/chart/examples/private/column-changes`
- `packages/dashboard/examples/private/column-changes`

They are for manual authoring checks only; automated tests must not import them.
