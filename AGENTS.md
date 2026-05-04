# AI Agent Instructions

This file helps AI coding assistants understand how to work with this repository. Use it as an index to these sections:

- [Testing Commands](#testing-commands): Required testing strategy plus targeted/quick/full test commands.
- [Branch Comparison](#branch-comparison): Default base branch for feature diffs.
- [Context Documents](#context-documents): Deep guidance for specific systems and workflows.
- [Config Documentation Maintenance](#config-documentation-maintenance): Rules for keeping package `CONFIG.md` files and shared config docs up to date.

## Branch Comparison

Feature branches usually branch from `dev`; compare against `dev` by default when determining what a feature contains.

## Testing Commands

Use repo-local script commands for consistency (`yarn ...`) and avoid relying on a globally installed `lerna`.

### Required Test Strategy

- Default to targeted tests for the files/components you changed.
- If changes span many areas, run quick suites.
- Do not run full suites unless the user explicitly asks for them.

### Targeted Tests (Default)

For unit targeting, include the extra `--` after `yarn test-unit` so Yarn 1 forwards flags to Lerna.

- Unit tests for one package/file:
  - `yarn test-unit:quick -- --scope @cdc/<package-name> -- src/.../<file>.test.<js|jsx|ts|tsx>`
  - Example: `yarn test-unit:quick -- --scope @cdc/dashboard -- src/test/CdcDashboardComponent.test.tsx`
- Storybook tests for one story file:
  - `yarn test-storybook:quick packages/.../_stories/<file>.stories.<js|jsx|ts|tsx>`
  - Example: `yarn test-storybook:quick packages/chart/src/_stories/ChartEditor.stories.tsx`

### Quick Suites (For Broad Changes)

- Unit quick mode (bypasses standalone build checks by setting `COVE_QUICK_TESTS=1`):
  - `yarn test-unit:quick`
- Storybook quick mode (sets `COVE_QUICK_TESTS=1` and excludes files matching `*.smoke.stories.<js|jsx|ts|tsx>`):
  - `yarn test-storybook:quick`

### Full Suites (Opt-In Only)

Run full suites only when the user explicitly requests them:

- `yarn test-unit`
- `yarn test-storybook`

## Context Documents

Before working on a specific area, read the relevant context document from the `docs/` directory:

| Document                             | When to Use                                                                                                                                                                      |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/FILTERED_TEXT_DEPRECATION.md`  | Working on the `filtered-text` deprecation. Phase 1 was implemented in `4.26.5`; Phase 2 is planned for `4.26.6`. Covers the two-phase rollout, migration contract, and cleanup/removal expectations. |
| `docs/TESTING_BEST_PRACTICES.md`     | Writing or reviewing editor interaction tests. Covers the `performAndAssert` pattern, testing helpers, and common pitfalls to avoid.                                             |
| `docs/CONFIG_DOCUMENTATION_GUIDE.md` | Maintaining or creating package `CONFIG.md` files. Covers maintenance triggers, ownership rules, README example workflow, shared `@cdc/core` references, and new-package setup.  |
| `docs/DASHBOARD_CONDITIONS.md`     | Working on dashboard-condition visibility logic. Covers condition config, target scoping, precomputed condition data, unresolved-vs-empty behavior, and v1 exclusions. |
| `docs/DASHBOARD_FILTERS_FLOW.md`     | Working on dashboard filtering, data flow, or filter-related bugs. Contains flow diagrams, data transformation pipelines, and refactoring notes.                                 |
| `docs/PACKAGE_DEPENDENCIES.md`       | Adding imports between packages or understanding the monorepo architecture. Explains the allowed dependency hierarchy (core → visualizations → orchestrators).                   |
| `docs/MIGRATION_SYSTEM.md`           | Working on shared config migrations, version ordering, suffixed follow-up migrations, or malformed saved-version fallback behavior. Explains the `coveUpdateWorker` flow and migration rules. |
| `docs/PALETTE_MIGRATION.md`          | Working with color palettes or the palette selection system. Covers the v1 → v2 migration, helper functions, and configuration structure.                                        |
| `docs/Y_AXIS_PADDING.md`             | Working on Y-axis padding, inline labels, top Y-axis titles, or editor padding controls. Covers legacy manual padding, auto-padding modes, pass behavior, and editor visibility. |
| `docs/COVE_EVENTS.md`                | Adding analytics events or working with the metrics system. Documents the event format, available event types, and usage patterns.                                               |
| `docs/VISUALIZATION_WRAPPERS.md`     | Working on visualization wrapper structure, shell layout, or wrapper consistency. Covers `VisualizationContainer`, `VisualizationContent`, compatibility modes, and guardrails.  |
| `docs/BUTTON_SYSTEM.md`              | Working on shared buttons, legacy `.btn` migration, or button styling consistency. Covers the `Button` prop API, migration rules, compatibility aliases, and current exceptions. |

### Creating New Context Documents

When you complete work on a substantial feature or complex system, **prompt the user** to consider creating a new context document if:

- The feature involves non-obvious data flow or state management
- There are important patterns or conventions that future developers should follow
- The implementation has gotchas, edge cases, or decisions that aren't self-evident from the code
- Multiple files or packages interact in ways that would take time to rediscover

Suggest a document name and brief outline. Context documents are not user documentation—they're notes for developers (human or AI) who will work on this area again.

## Config Documentation Maintenance

When a change affects consumer-facing configuration, you must review the relevant config documentation as part of the same change.

For full guidance, see [docs/CONFIG_DOCUMENTATION_GUIDE.md](./docs/CONFIG_DOCUMENTATION_GUIDE.md).

This applies when you change:

- authorable config fields,
- package defaults or initial state,
- supported enum values,
- migrations or legacy-config handling,
- editor-exported config that consumers are likely to encounter,
- runtime behavior that changes how a documented field is interpreted.
