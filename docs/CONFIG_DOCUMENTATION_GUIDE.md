# Config Documentation Guide

This guide describes how to maintain and create package-level `CONFIG.md` files in a way that stays accurate as the monorepo evolves.

## Goals

Each package config document should:

- stand alone for external consumers of that package,
- document every supported package-owned field,
- link shared nested structures to `packages/core/CONFIG.md` instead of duplicating them,
- describe actual runtime behavior, not just TypeScript shape,
- stay current when config behavior changes.

## Maintenance First

Config documentation must be reviewed whenever a change affects consumer-facing configuration behavior.

Typical triggers:

- a new authorable field is added,
- a supported enum value changes,
- a default changes,
- runtime logic changes how a field is interpreted,
- migrations change how legacy configs are read,
- editor exports start including a new field that consumers are likely to encounter.

Most maintenance updates should be `CONFIG.md` updates only.

Existing packages already have a source-of-truth minimum example at `packages/<package>/examples/minimal-example.json`, but you usually will not need to touch it. See `Minimum Example Maintenance` at the end of this document for the cases where it should change.

## Ownership Rules

Document fields where they are owned.

| Field type | Where to document it |
| --- | --- |
| Package-owned top-level fields | The package’s `CONFIG.md` |
| Package-owned nested objects | The package’s `CONFIG.md` |
| Shared `@cdc/core` nested types | `packages/core/CONFIG.md` |
| Internal-only runtime/editor fields | Usually do not document field-by-field; mention them briefly in a package-level `Fields You Can Ignore` section when consumers may encounter them |
| Unsupported editor export artifacts | Usually do not document field-by-field; mention them briefly in a package-level `Fields You Can Ignore` section when consumers may encounter them |

## When To Update `packages/core/CONFIG.md`

Update the shared core config reference whenever a package doc needs to describe:

- shared theme tokens,
- shared version strings,
- shared data normalization metadata,
- shared dataset-loading metadata,
- shared filter structures,
- shared table/download structures,
- shared axis/series/legend/annotation/region structures,
- shared markup variable structures,
- shared trend indicator structures,
- shared data-driven color structures,
- any other nested type reused across multiple packages.

## Standard File Structure

Each package `CONFIG.md` should follow this order:

1. Title and short description
2. One-sentence pointer to any shared `@cdc/core` config reference
3. Organization section that explains the doc order
4. Pointer to the package README example
5. Identity and data source
6. Core calculation or data-mapping sections
7. Copy/content sections
8. Layout/visual sections
9. Feature-specific enhancement sections
10. Fields You Can Ignore

That order is preferred over alphabetical order because it helps consumers build an accurate mental model faster.

## Table Format

For field tables, use these columns unless there is a strong reason not to:

| Column | Purpose |
| --- | --- |
| `Field` | Exact config path |
| `Type` | Runtime-facing type, not just internal type aliases |
| `Required` | Whether the field must be authored explicitly |
| `Default` | Actual default when omitted |
| `Description` | What the field does |
| `Allowed values / Notes` | Enums, constraints, caveats, and behavior notes |

For behavior summaries, use a two-column table:

| Column | Purpose |
| --- | --- |
| `Behavior` | Runtime concern |
| `Details` | How the package actually behaves |

## How To Research A Package

When documenting or updating a package, inspect these sources in this order:

1. The package config type files.
2. The package defaults or initial state.
3. The main runtime component that loads and renders the config.
4. The editor panel, if one exists.
5. Example configs and tests.
6. Shared `@cdc/core` helpers used by the package.

This sequence matters because type files alone are usually incomplete. Runtime code often reveals:

- supported fields missing from the package type,
- fields that are legacy but still accepted,
- editor-only fields that should not be documented as part of the public contract,
- defaults or migrations applied at load time,
- enum values that only appear in UI constants.

## What To Verify Before Updating Docs

Before writing or revising docs, verify all of the following:

- which fields are truly required for a working consumer config,
- which fields are defaulted automatically,
- which fields are package-owned versus shared,
- which nested types come from `@cdc/core`,
- which enum values are actually supported in runtime/editor code,
- which fields are deprecated but still accepted,
- which fields are internal-only and should be marked as such,
- whether example configs include editor export artifacts that should not be copied into consumer configs.

## Writing Guidance

When describing fields:

- prefer “what this does” over “what this is called in code”,
- call out when behavior depends on another field,
- explain conditional relevance, such as “only meaningful for `tp5`”,
- document legacy quirks honestly instead of hiding them,
- use exact enum values from runtime constants,
- keep descriptions short, but include the operational consequence of the field.

## Cross-Package Linking

For shared config references, prefer a canonical repository URL to the shared document rather than a sibling relative path between package folders.

Why:

- npm package names are not resolvable as Markdown documentation links on their own,
- sibling relative links may not survive cleanly when a package is consumed outside the monorepo context,
- a canonical GitHub URL makes the target unambiguous for both repo readers and package consumers.

## Creating Docs For A New Package

Use this checklist when a package gets config docs for the first time:

1. Identify the package-owned config type and default state.
2. Read the main runtime component to see how config is loaded, normalized, and consumed.
3. Read the editor panel to capture user-facing sections and enum values.
4. Scan examples and tests to catch real-world fields, legacy fields, and omissions from the type file.
5. Identify every shared nested type and either link to existing `packages/core/CONFIG.md` sections or add the missing shared documentation there first.
6. Draft the package `CONFIG.md` using the standard section order.
7. Create `examples/minimal-example.json` as the source of truth for the minimum example.
8. Add a single copy-pasteable README example that mirrors that JSON.
9. Mark that README example with `README_EXAMPLE_CONFIG_START` and `README_EXAMPLE_CONFIG_END`.
10. Add a sync test so the README example stays aligned with `minimal-example.json`.
11. Reuse the minimal example in a smoke story when practical.
12. Add a short `Fields You Can Ignore` section for internal, legacy, or editor-export fields that consumers may encounter.
13. Do a final accuracy pass against runtime code before considering the doc complete.

## Minimum Example Maintenance

Every documented package should have a source-of-truth example at `packages/<package>/examples/minimal-example.json`.

That example should:

- render a working package instance,
- include only the fields that are practically necessary,
- avoid optional advanced features,
- include `version`,
- remain stable over time.

Minimal examples should change rarely.

Do not change the example `version` string during routine config-doc maintenance unless the work explicitly includes a human-requested version update. Treat the example version as a separately managed value, even if package metadata or other repo files suggest a different version.

Do update the minimal example when:

- the true minimum working config changes,
- the current example no longer renders correctly,
- the current example is no longer a good canonical minimal integration example.

Do not update the minimal example just because:

- a new optional field was added,
- a new feature was documented,
- a package gained an advanced configuration mode that is not part of the minimum path.

When you do need to update the minimal example, keep the README example and its sync test aligned with it:

- `packages/<package>/README.md` should contain a single copy-pasteable JavaScript `const config = { ... }` example
- that example should be marked with `README_EXAMPLE_CONFIG_START` and `README_EXAMPLE_CONFIG_END`
- the package test should compare the README example to `examples/minimal-example.json`
- the minimal example can also be reused in a smoke story when practical
