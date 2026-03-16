# Visualization Wrappers

This document describes the current wrapper contract for visualization packages.

## Summary

There are now two shared wrapper primitives in `@cdc/core/components/Layout`:

- `VisualizationContainer`: the outer visualization shell
- `VisualizationContent`: the inner content shell

Packages should use these instead of assembling `cove-visualization__*` wrapper classes by hand.

## Outer Shell

Use `VisualizationContainer` for the top-level visualization wrapper.

It is responsible for:

- the root `.cove-visualization` element
- type and theme classes
- viewport classes
- editor state classes
- `data-download-id`
- optional editor panel placement
- optional `Responsive` wrapping

### Props to Know

- `config`: provides type/theme/showEditorPanel context for wrapper classes
- `currentViewport`: applies viewport class names to the root shell
- `imageId`: maps to `data-download-id`
- `editorPanel`: optional editor panel slot
- `renderResponsive`: set to `false` only when the package already controls its own responsive/editor wrapping

### Current Special Case

- `dashboard` uses `renderResponsive={false}` because its runtime/editor body structure is more specialized than the standalone visualization packages.

## Inner Shell

Use `VisualizationContent` for the standard inner visualization structure.

Default shape:

```text
.cove-visualization__inner
  header?
  .cove-visualization__body
    .cove-visualization__message-section?
    .cove-visualization__body-wrap
      children
    .cove-visualization__subtext-section?
  footer?
```

### Preferred Mode

Prefer the default nested shape whenever the package does not need compatibility with an existing DOM/class structure.

## Current Package Shapes

- All standalone visualization packages use the same nested `VisualizationContent` shape:
  `__inner` -> `__body` -> `__body-wrap`
- Shared wrapper spacing should come from the core layout styles. Package styles should not override the default
  `.cove-visualization__body` padding unless a package has a documented compatibility requirement.

- `dashboard`
  Uses `VisualizationContainer` as the outer shell, but keeps its specialized runtime/editor body composition

## Guidance For New Work

- New visualization packages should start with `VisualizationContainer` and default `VisualizationContent`
- Do not assemble `cove-visualization__inner`, `__body`, or `__body-wrap` directly in package code unless you are first confirming the shared helpers cannot express the needed structure
- If you touch an existing package and find wrapper drift, preserve the canonical nested shape rather than introducing wrapper exceptions

## Guardrails

Wrapper guardrails currently live in:

- `packages/core/components/Layout/components/VisualizationContainer.test.tsx`
- `packages/core/components/Layout/components/VisualizationContent.test.tsx`
- `packages/core/helpers/tests/visualizationWrapperUsage.test.ts`
- `packages/dashboard/src/test/CdcDashboardComponent.test.tsx`

These tests verify:

- root shell behavior
- the canonical inner wrapper shape
- representative dashboard behavior
- source-level adoption across visualization entrypoints
