# AI Agent Instructions

This file helps AI coding assistants understand how to work with this repository. Use it as an index to these sections:

- [Context Documents](#context-documents): Deep guidance for specific systems and workflows.
- [Testing Commands](#testing-commands): Required testing strategy plus targeted/quick/full test commands.

## Context Documents

Before working on a specific area, read the relevant context document from the `docs/` directory:

| Document                         | When to Use                                                                                                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/TESTING_BEST_PRACTICES.md` | Writing or reviewing editor interaction tests. Covers the `performAndAssert` pattern, testing helpers, and common pitfalls to avoid.                                            |
| `docs/DASHBOARD_FILTERS_FLOW.md` | Working on dashboard filtering, data flow, or filter-related bugs. Contains flow diagrams, data transformation pipelines, and refactoring notes.                                |
| `docs/PACKAGE_DEPENDENCIES.md`   | Adding imports between packages or understanding the monorepo architecture. Explains the allowed dependency hierarchy (core → visualizations → orchestrators).                  |
| `docs/PALETTE_MIGRATION.md`      | Working with color palettes or the palette selection system. Covers the v1 → v2 migration, helper functions, and configuration structure.                                       |
| `docs/COVE_EVENTS.md`            | Adding analytics events or working with the metrics system. Documents the event format, available event types, and usage patterns.                                              |
| `docs/VISUALIZATION_WRAPPERS.md` | Working on visualization wrapper structure, shell layout, or wrapper consistency. Covers `VisualizationContainer`, `VisualizationContent`, compatibility modes, and guardrails. |

### Creating New Context Documents

When you complete work on a substantial feature or complex system, **prompt the user** to consider creating a new context document if:

- The feature involves non-obvious data flow or state management
- There are important patterns or conventions that future developers should follow
- The implementation has gotchas, edge cases, or decisions that aren't self-evident from the code
- Multiple files or packages interact in ways that would take time to rediscover

Suggest a document name and brief outline. Context documents are not user documentation—they're notes for developers (human or AI) who will work on this area again.

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
