# Config Documentation Guide

Use this guide when auditing or updating package `CONFIG.md` files. The goal is to prove the docs match the current consumer-facing config contract, not just the TypeScript shape.

## Non-Negotiable Rules

- Document fields where they are owned.
- Package-owned top-level fields and nested objects belong in the package `CONFIG.md`.
- Truly shared authorable nested types belong in `packages/core/CONFIG.md`.
- Type location is not documentation ownership. A type can live in `@cdc/core` for import or legacy reasons while its fields remain package-owned.
- Shared legacy objects such as `general`, `table`, `columns`, and `visual` can contain package-owned fields. Document package-specific fields locally.
- Runtime-managed, editor-generated, migration, cache, and file-metadata fields do not belong in normal authorable field tables. Put them in `Fields You Can Ignore` when consumers may encounter them.
- It is acceptable to list the same ignore-only field in both core and a package doc when consumers are likely to see it in both places.
- Dashboard `SharedFilter` configs are dashboard-owned and distinct from core `VizFilter`. Core may document shared filter primitives; dashboard documents the full dashboard filter contract.
- Do not duplicate a full shared core field table in a package doc. Link to core, then document local defaults, constraints, or behavior only when useful.
- Do not add ignore-only fields just because they appear in local, branch-only, or in-progress config. They should represent supported saved configs, editor exports, legacy configs, or fields introduced by the current task.

## Evidence Standard

Do not report or make a config-doc change from one source alone unless that source is definitive and there is no conflicting evidence. A normal finding needs:

- the current doc claim,
- the source of truth for the expected behavior,
- evidence that the field affects supported consumer-facing config,
- the recommended classification: authorable, persisted/editor-authored, runtime-read compatibility, ignore-only, or unsupported.

When sources disagree, resolve them in this order:

1. Runtime readers and render behavior
2. Save/export cleanup, migrations, and legacy-config repair
3. Editor writers and authoring controls
4. Initial state and defaults
5. Type declarations
6. Examples, stories, fixtures, and tests

Type location does not decide ownership, and examples do not prove support by themselves. If runtime reads a field only for legacy compatibility, document the legacy behavior without presenting the field as the preferred authoring path.

## Finding Format

Use a consistent shape for audit notes so findings can be compared across packages:

| Item | Description |
| --- | --- |
| Package/file | The package and doc file being evaluated. |
| Current doc claim | The exact field, default, enum, requiredness, or classification currently documented. |
| Expected claim | The corrected wording or classification. |
| Evidence | Runtime reader, save/export path, migration, editor writer, initial state, type, or example evidence. |
| Consumer impact | Why a consumer would author, preserve, ignore, or be confused by the field. |
| Confidence | High, medium, or low, based on the strength and agreement of evidence. |
| Churn risk | Low, medium, or high. Mark high when the finding would reverse a recent config-doc classification or ownership decision. |

Keep a short rejected-findings list during larger audits. Record items that looked suspicious but were dropped because runtime contradicted types, examples were stale/local-only, a field was legacy compatibility rather than authorable config, or the issue would only churn stable minimal examples.

## Churn Control

Minimize explanatory churn. Do not rewrite notes, descriptions, examples, or section organization just to make wording more complete or stylistically different. Change surrounding prose only when it is inaccurate, consumer-impacting, inconsistent with the chosen source of truth, or needed to explain a field classification.

Before broad audits, review the last three commits that touched `CONFIG.md` files. Treat recent reclassifications as intentional unless runtime, save/export, or migration evidence clearly contradicts them. Do not report a candidate finding by default when it is only:

- a stale-looking minimal example version,
- a deprecated package that should not gain a normal authoring reference,
- a type/default/example-only field with no runtime or save/export support,
- an editor-written field that current runtime ignores,
- a field recently moved between core and package docs without new ownership evidence.

## Audit Cookbook

Use this workflow for each package in scope.

1. **Read The Existing Docs**
   - Read the package `CONFIG.md`.
   - Read `packages/core/CONFIG.md` for shared references.
   - Review the last three config-doc commits for recent ownership/classification changes.
   - Note fields that look package-specific but are documented in core.
   - Note core links that may point to sections that do not exist or should not be shared.

2. **Find The Config Surface**
   - Inspect package config type files.
   - Inspect defaults or initial state.
   - Inspect migrations and legacy-config handling.
   - Inspect runtime components and helpers that read config.
   - Inspect editor panels, constants, and save/export logic.
   - Inspect examples, README config blocks, fixtures, and tests.

3. **Build A Field Inventory**
   - List every field that can appear in supported configs.
   - Include nested fields under broad objects such as `general`, `table`, `columns`, `visual`, `filters`, and package-specific feature objects.
   - Record the source for each field: type, default state, migration, runtime reader, editor writer, example, or test.

4. **Classify Each Field**
   - **Authorable package field:** document in the package `CONFIG.md`.
   - **Authorable shared field:** document in core and link from packages.
   - **Package-specific field inside shared-looking object:** document in the package.
   - **Persisted/editor-authored field:** document as supported only when consumers may intentionally preserve or edit it outside the editor; otherwise list it in `Fields You Can Ignore`.
   - **Runtime-read compatibility field:** document only if consumers need to understand legacy behavior; otherwise list it as ignore-only and point to the current field.
   - **Runtime/editor/migration/cache/file metadata:** move to `Fields You Can Ignore`.
   - **Legacy but still accepted:** document only if consumers need to understand it; otherwise list as ignore-only and point to the current field.
   - **Unsupported artifact:** omit unless consumers commonly encounter it, then list as ignore-only.

5. **Compare Docs To Reality**
   - Find missing authorable fields.
   - Find documented fields that are no longer supported.
   - Find wrong defaults, requiredness, enum values, or conditional behavior.
   - Find shared docs duplicated in package docs.
   - Find package-owned fields incorrectly documented in core.
   - Find runtime/editor fields incorrectly documented as authorable.
   - Find fields documented from stale types even though runtime, migrations, or editor output prove a different contract.

6. **Update Docs**
   - Keep package docs focused on the fields consumers author or need to understand.
   - Move package-specific material out of core.
   - Move ignore-only material out of normal tables.
   - Link shared structures to core with canonical GitHub URLs.
   - Keep descriptions short and behavior-focused.
   - Leave already-correct notes and surrounding prose alone unless changing them prevents consumer confusion.

7. **Verify**
   - Check Markdown tables for consistent columns.
   - Run `git diff --check`.
   - Search for broken or stale core anchors.
   - Search for removed package-specific core sections still linked from package docs.
   - If README examples changed, verify their sync tests or update the matching minimal example.

## What Triggers A Docs Review

Review config docs when a change affects:

- authorable fields,
- defaults or initial state,
- enum values,
- migrations or legacy handling,
- editor-exported fields consumers may encounter,
- runtime behavior that changes how a documented field is interpreted,
- shared helpers that change a documented nested type.

Most routine updates should touch `CONFIG.md` only. Do not update minimal examples unless the true minimum working config changes.

## Package `CONFIG.md` Shape

Use this order unless a package has a strong reason to differ:

1. Title and short description
2. Shared core reference
3. Organization
4. Minimum working config pointer
5. Identity and data source
6. Core calculation or data-mapping sections
7. Copy/content sections
8. Layout/visual sections
9. Feature-specific sections
10. Fields You Can Ignore

## Field Table Format

Use these columns for field tables:

| Column | Purpose |
| --- | --- |
| `Field` | Exact config path |
| `Type` | Runtime-facing type |
| `Required` | Whether consumers must author it |
| `Default` | Actual value or behavior when omitted |
| `Description` | What the field does |
| `Allowed values / Notes` | Enums, constraints, caveats, and conditional behavior |

Use two-column behavior tables for package-specific behavior summaries:

| Column | Purpose |
| --- | --- |
| `Behavior` | Runtime concern |
| `Details` | What the package actually does |

## Writing Rules

- Prefer “what this does” over “what this is called in code.”
- Explain conditional relevance, such as “only meaningful for `tp5`.”
- Use exact enum values from runtime/editor constants.
- Document legacy quirks honestly and point to the current field to author.
- Keep descriptions concise.
- Do not describe runtime/editor fields as consumer authoring options.
- Prefer clarifying version guidance over changing stable example versions. Do not report a stale-looking example version unless it affects migration, rendering, or the true minimum working config.

## Core Reference Rules

Update `packages/core/CONFIG.md` only for nested config that is authorable and reused across multiple packages, such as:

- theme tokens,
- version strings,
- data normalization and dataset-loading metadata,
- shared visualization-local filter primitives,
- shared table/download structures,
- shared legend, annotation, column, and visual shell structures,
- markup variable structures,
- trend indicator structures,
- data-driven color structures.

Do not expand core just because a package imports a type from core.

## Linking Rules

For shared references, prefer canonical GitHub URLs to `packages/core/CONFIG.md` anchors. They work for repo readers and package consumers.

Use local paths when pointing to files inside the same package, such as README examples or package examples.

## Minimum Example Rules

Every documented package should have a source-of-truth example at `packages/<package>/examples/minimal-example.json`.

The example should:

- render a working package instance,
- include only practically necessary fields,
- avoid optional advanced features,
- include `version`,
- stay stable over time.

Do not change example versions during routine docs maintenance unless the task explicitly includes a version update.

Update the minimal example only when:

- the true minimum config changes,
- the current example no longer renders,
- the current example is no longer a good minimal integration example.

When the minimal example changes, keep the README example and sync test aligned.
