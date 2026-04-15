# Config Documentation Guide

This guide describes how to create package-level `CONFIG.md` files for COVE packages in a way that is exhaustive, readable, and consistent across the monorepo.

## Goals

Each package config document should:

- Stand alone for external consumers of that package.
- Document every supported package-owned field.
- Reference shared nested structures where those shared types live, instead of duplicating them in every package.
- Describe actual runtime behavior, not just the TypeScript shape.
- Be organized in a human-readable order that matches how users reason about the config.

## Ownership Rules

Document fields where they are owned.

| Field type | Where to document it |
| --- | --- |
| Package-owned top-level fields | The package’s `CONFIG.md` |
| Package-owned nested objects | The package’s `CONFIG.md` |
| Shared `@cdc/core` nested types | `packages/core/CONFIG.md` |
| Internal-only runtime/editor fields | Usually do not document field-by-field; mention them briefly in a package-level “Fields You Can Ignore” section when consumers may encounter them |
| Unsupported editor export artifacts | Usually do not document field-by-field; mention them briefly in a package-level “Fields You Can Ignore” section when consumers may encounter them |

## Standard File Structure

Each package `CONFIG.md` should follow this order:

1. Title and short description
2. One-sentence pointer to any shared `@cdc/core` config reference
3. Organization section that explains the doc order
4. Pointer to the package minimum working config
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

## How To Research a Package

When documenting a package, inspect these sources in this order:

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

## What To Verify For Every Package

Before writing the doc, verify all of the following:

- Which fields are truly required for a working consumer config.
- Which fields are defaulted automatically.
- Which fields are package-owned versus shared.
- Which nested types come from `@cdc/core`.
- Which enum values are actually supported in runtime/editor code.
- Which fields are deprecated but still accepted.
- Which fields are internal-only and should be marked as such.
- Whether example configs include editor export artifacts that should not be copied into consumer configs.

## Writing Guidance

When describing fields:

- Prefer “what this does” over “what this is called in code”.
- Call out when behavior depends on another field.
- Explain conditional relevance, such as “only meaningful for `tp5`”.
- Document legacy quirks honestly instead of hiding them.
- Use exact enum values from runtime constants.
- Keep descriptions short, but include the operational consequence of the field.

## Minimum Working Config

Every package should provide a minimum working config, but it does not need to be duplicated in every document.

That minimum config should:

- be copy-pasteable,
- render a working package instance,
- include only the fields that are practically necessary,
- avoid optional advanced features,
- rely on package defaults when it is safe to do so.

If a package supports multiple valid loading patterns, prefer the smallest inline-data example first.

The minimum config should include `version` so migration logic runs against an explicit saved config version.

Recommended placement:

- Put the copy-pasteable minimum config in the package `README.md`.
- Store the source of truth in `packages/<package>/examples/minimal-example.json`.
- In `CONFIG.md`, link to the README example rather than duplicating the full block again.
- The README minimum-config block is the only documentation copy that should be kept in sync with the source-of-truth JSON file.

## Recommended Minimal Example Workflow

To prevent documentation drift, use this pattern:

1. Create a source-of-truth JSON file at `packages/<package>/examples/minimal-example.json`.
2. Reuse that file in a Storybook smoke story.
3. Assert that the visualization renders and that at least one package-specific output is present.
4. Mirror that exact JSON in the package `README.md`.
5. Add a test that compares the JSON file to the fenced JSON block in the README.

This keeps the example:

- executable,
- documented,
- validated in Storybook,
- protected from doc drift.

## Cross-Package Linking

For shared config references, prefer a canonical repository URL to the shared document rather than a sibling relative path between package folders.

Why:

- npm package names are not resolvable as Markdown documentation links on their own,
- sibling relative links may not survive cleanly when a package is consumed outside the monorepo context,
- a canonical GitHub URL makes the target unambiguous for both repo readers and package consumers.

## Recommended Workflow For The Next Package

Use this checklist for each new package:

1. Identify the package-owned config type and default state.
2. Read the main runtime component to see how config is loaded, normalized, and consumed.
3. Read the editor panel to capture user-facing sections and enum values.
4. Scan examples and tests to catch real-world fields, legacy fields, and omissions from the type file.
5. Identify every shared nested type and either link to existing `packages/core/CONFIG.md` sections or add the missing shared documentation there first.
6. Draft the package `CONFIG.md` using the standard section order.
7. Create `examples/minimal-example.json` as the source of truth for the minimum config.
8. Put the minimum working config in the package `README.md` and point to it from `CONFIG.md`.
9. Add a smoke story and a sync test so the example stays executable and consistent.
10. Add a short “Fields You Can Ignore” section for internal, legacy, or editor-export fields that consumers may encounter.
11. Update the package `README.md` so it points consumers to the new config reference and includes a minimal getting-started example.
12. Do a final accuracy pass against runtime code before considering the doc complete.

## Recommended Scope For README Updates

When a package gains a `CONFIG.md`, its `README.md` should usually:

- keep installation instructions,
- show a minimal usage example,
- include a minimum working config copied from the package source-of-truth minimal JSON,
- link prominently to the package `CONFIG.md`,
- avoid sending consumers into editor internals or broad examples directories as the primary documentation path.

## When To Extend `packages/core/CONFIG.md`

Update the shared core config reference whenever a package doc needs to describe:

- shared theme tokens,
- shared version strings,
- shared data normalization metadata,
- shared markup variable structures,
- shared trend indicator structures,
- shared data-driven color structures,
- any other nested type reused across multiple packages.

## Maintenance Notes

A package `CONFIG.md` should be updated whenever:

- the package gains a new authorable field,
- enum values change,
- defaults change,
- migrations alter how old configs are interpreted,
- runtime behavior changes in a way that affects consumers.
