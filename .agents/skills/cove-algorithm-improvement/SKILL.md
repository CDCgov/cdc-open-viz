---
name: cove-algorithm-improvement
description: Analyze or improve CDC Open Viz algorithms for correctness, edge cases, complexity, and maintainability; use for requests about algorithm improvements, optimization, data-flow hardening, or choosing small/medium/large algorithmic fixes.
---

# Cove Algorithm Improvement

Use this skill to evaluate and improve algorithmic behavior in the CDC Open Viz monorepo. Focus on correctness, determinism, data-shape handling, complexity, and maintainability before cosmetic refactors or speculative micro-optimizations.

## Scope

Consider algorithms broadly: data normalization, filtering, sorting, grouping, aggregation, scale/domain calculation, legend generation, map layer preparation, migration transforms, URL/config parsing, editor-to-runtime derivation, memoized selectors, reducers, and rendering data pipelines.

Default to an improvement analysis or prioritized implementation menu. Make edits only when the user explicitly asks for implementation or when their wording clearly requests fixes.

When the user asks for algorithm improvements without naming a specific bug, classify options by size and recommend the best next option instead of producing an undifferentiated backlog.

## Required Context

Read these before assessing or editing algorithmic behavior:

- `AGENTS.md`
- `docs/PROJECT_OVERVIEW.md`
- `docs/PACKAGE_DEPENDENCIES.md`
- `docs/TESTING_BEST_PRACTICES.md`

Read targeted docs when the affected area appears in code, docs, or the user's request:

- `docs/MIGRATION_SYSTEM.md` for config migrations, saved-version transforms, or `coveUpdateWorker.ts`
- `docs/CONFIG_DOCUMENTATION_GUIDE.md` for config fields, defaults, examples, editor export, or `CONFIG.md`
- `docs/DASHBOARD_FILTERS_FLOW.md` and `docs/DASHBOARD_CONDITIONS.md` for dashboard filtering, shared filters, or condition evaluation
- `docs/BUBBLE_LAYERS.md` for map bubble layer transforms, legends, or bubble editor behavior
- `docs/CHART_Y_AXIS_DOMAIN.md` for chart domain, brush, bounds, rounding, or axis-label algorithms
- `docs/HEATMAP_EDITOR_FLOW.md`, `docs/PALETTE_MIGRATION.md`, `docs/MODERNIZATION_SYSTEM.md`, or other feature docs when those systems are in scope

## Algorithm Review Axes

Look for risks and opportunities across these dimensions:

- Correctness across empty, malformed, duplicate, missing, zero, null, negative, very large, and mixed-type data
- Editor/runtime parity: authored config should produce the same behavior in preview, saved output, embedded runtime, and dashboard children
- Complexity and repeated work on realistic dataset sizes, especially nested loops inside render paths, reducers, effects, and Storybook interactions
- Determinism: stable ordering, repeatable derived IDs, idempotent migrations, and no hidden mutation of inputs or defaults
- Numerical behavior: rounding, precision, domain padding, formatted zero values, string-number coercion, and NaN/Infinity handling
- State interactions: stale closures, memo dependency gaps, cross-dashboard contamination, queued filter application, and child visualization inheritance
- Package boundaries: avoid solving an algorithm problem by importing upward or sideways across package tiers
- Testability: prefer algorithms with small pure helpers and focused fixtures over logic that can only be tested through a broad UI path

## Improvement Sizing

Group recommendations into small, medium, and large options when the user asks what to improve or asks for algorithm enhancements.

- **Small**: One helper, reducer branch, selector, migration, or focused data transform. Low compatibility risk, usually 1-3 files plus targeted tests. Examples: strict numeric parsing, stable sort tie-breaker, null guard, removing input mutation, adding missing edge-case tests.
- **Medium**: One workflow or shared algorithm across a few packages. Moderate behavior or compatibility risk, often needs docs/config/test review. Examples: shared domain calculation helper, normalized filter application path, dashboard child-config transform hardening, reusable map/chart data derivation.
- **Large**: Cross-package architecture, public config semantics, migration strategy, rendering pipeline, or significant performance redesign. High review and regression surface. Examples: reworking dashboard filter propagation, replacing visualization data-loading flow, extracting a shared algorithm package, or changing saved-config migration semantics.

For each option include expected value, blast radius, evidence strength, compatibility/docs impact, and the targeted validation command.

## Option Selection Guardrails

Before recommending or implementing an algorithm improvement, compare at least two plausible options when the choice is non-obvious: leave as-is, add tests only, small targeted fix, shared helper extraction, or larger redesign.

Prefer the smallest option that:

- addresses a confirmed bug, a plausible release failure mode, or a measurable performance bottleneck
- preserves saved-config behavior unless an explicit migration/docs path is part of the change
- keeps runtime and editor behavior aligned
- respects `docs/PACKAGE_DEPENDENCIES.md` dependency tiers
- can be validated with targeted fixtures, unit tests, Storybook play tests, or a justified quick suite
- avoids caching, memoization, or broad abstraction until the underlying correctness contract is clear

Choose a larger option only when smaller options leave the core failure mode unresolved, duplicate drift-prone logic, or make future fixes materially harder. If evidence is thin, recommend an investigation spike or characterization test before implementation.

## Output

For audits or planning, return findings ordered by severity. Each finding should include:

- Package or area
- File references
- Algorithm involved
- Risk and user impact
- Evidence from code, tests, docs, or observed behavior
- Small / Medium / Large improvement candidates when relevant
- Recommended best option and why it beats the alternatives
- Suggested targeted test command

Keep speculative ideas separate from confirmed findings. If no serious algorithm risks are found, say that clearly and list residual test gaps or performance unknowns.

## Implementation Mode

When asked to implement:

- For UI-visible, editor-visible, runtime-visible, or dashboard-visible behavior, first create or update a narrowly scoped Storybook story that demonstrates the algorithm area needing the fix. Prefer an affected package's existing `_stories` patterns and shared testing helpers from `@cdc/core/helpers/testing` when a play assertion is useful.
- Make the story a reviewable reproduction or characterization of the current behavior, not the production fix. Keep the data fixture small and named around the edge case being demonstrated.
- After creating the Storybook story, pause before editing production algorithm code. Tell the developer the story path, what behavior it demonstrates, and the targeted Storybook command from `AGENTS.md` to run. Ask whether to continue with the fix, then wait for explicit confirmation.
- If a Storybook story is not a sensible way to demonstrate the algorithm issue, explain why before proceeding with the closest reviewable characterization artifact, such as a focused unit test or fixture.
- Start with characterization tests when current behavior is ambiguous or compatibility-sensitive.
- Prefer pure helper extraction only when it makes edge cases easier to test or removes real duplication.
- Preserve input objects and package defaults unless mutation is an intentional, documented contract.
- Update config docs when authorable config behavior, defaults, enum values, migrations, or saved output semantics change.
- Run targeted tests using the command shapes in `AGENTS.md`; use quick suites only when the change spans many areas.
