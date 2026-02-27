# PR Changes Against `dev`

This document summarizes the current branch diff against `dev` and highlights class-name changes that may impact custom CSS/JS targeting COVE DOM structure.

## Scope Summary

- Diff base: `dev...HEAD`
- Files changed: 109
- Insertions/Deletions: 1611 / 986
- Major themes:
  - Wrapper structure migration from legacy `cove-component__*` naming to `cove-visualization__*`
  - Title/header compatibility work (`__title` introduced, legacy `__header` retained)
  - Editor layout normalization (`isEditor` -> `is-editor`)
  - Dashboard equal-height behavior updated to support new wrapper chains
  - New Storybook comparison and dashboard equal-height demo stories

## Class Name Changes (Custom Targeting Guide)

Use this as the quick migration map for custom styles/scripts.

| Old class / selector | New class / selector | Notes |
|---|---|---|
| `.cove-component__content` | `.cove-visualization__body` | Primary content wrapper rename used across chart/map/data-bite/filtered-text/markup/waffle paths. |
| `.cove-component__content-wrap` | `.cove-visualization__body-wrap` | Wrapper rename for nested content containers. |
| `.cove-component__header` | `.cove-visualization__title` (+ `.cove-visualization__header` alias) | New semantic title class introduced; legacy header class remains for compatibility. |
| `.component__header` | `.cove-visualization__title` | Legacy helper class replaced in title class composition. |
| `.isEditor` | `.is-editor` | Normalized editor mode class naming. |
| `.component--isCompactStyle` | `.component--is-compact-style` | Utility class normalized to kebab-case. |
| `.bite--isCompactStyle` | `.bite--is-compact-style` | Utility class normalized to kebab-case. |
| `.component--has-borderColorTheme` | `.component--has-border-color-theme` | Utility class normalized to kebab-case. |
| `.component--hideBackgroundColor` | `.component--hide-background-color` | Utility class normalized to kebab-case. |

## New / Expanded Wrapper Classes

These classes are now part of the wrapper chain and may be useful for custom targeting:

- `.cove-visualization__outer`
- `.cove-visualization__inner`
- `.cove-visualization__body`
- `.cove-visualization__body-wrap`
- `.cove-visualization__title`

## Compatibility Notes

- Title compatibility is intentionally dual-class for now:
  - Modern/legacy title selectors support both `.cove-visualization__title` and `.cove-visualization__header`.
- Dashboard equal-height styles were updated to support both legacy and migrated wrapper paths.
  - If custom CSS relied on a strict child chain through `__content`, prefer targeting the new chain (`__outer`/`__inner`/`__body`).

## Key Files to Review

- `packages/core/components/Layout/components/Responsive.tsx`
- `packages/core/components/Layout/components/Visualization/visualizations.scss`
- `packages/core/helpers/useDataVizClasses.ts`
- `packages/core/components/ui/Title/index.tsx`
- `packages/core/components/ui/Title/title.styles.css`
- `packages/dashboard/src/scss/main.scss`
- `packages/dashboard/src/components/VisualizationRow.tsx`
- `packages/dashboard/src/_stories/Dashboard.stories.tsx`

## Suggested Action for Downstream Customization

If your app or embed layer overrides COVE styles, update selectors from `cove-component__*` to `cove-visualization__*` first, then validate editor-mode selectors using `.is-editor`.
