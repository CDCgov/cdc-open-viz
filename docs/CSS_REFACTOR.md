# CSS Architecture Refactor (DEV-12277)

## Overview

This branch refactors the `@cdc/core` style system across four incremental phases:

1. Flatten the `v2/` directory structure into `styles/`
2. Consolidate the dual-variable system into a single source of truth
3. Co-locate component styles next to their React components
4. Dissolve legacy v1 root files

The goal is a styles directory where every file has a clear owner, import paths are self-documenting, and the monolithic `cove-main.scss` is a minimal orchestrator rather than a kitchen sink.

---

## Phase 1 — Flatten `v2/` into `styles/`

**Problem:** The `v2/` prefix leaked into import paths across the monorepo (e.g. `@cdc/core/styles/v2/utils/breakpoints`), making the path meaningless and coupling consumers to an internal versioning scheme.

**Changes:**
- `styles/v2/utils/` → `styles/utils/`
- `styles/v2/themes/` → `styles/themes/`
- `styles/v2/base/` → `styles/base/`
- `styles/v2/layout/` → `styles/layout/`
- `styles/v2/components/` → `styles/components/`
- Updated all `@import` paths in `cove-main.scss`, cross-package imports in `@cdc/chart`, `@cdc/map`, `@cdc/waffle-chart`
- Deleted the now-empty `v2/` directory

**Risk:** Low — pure path renames, zero behavior change.

---

## Phase 2 — Consolidate the dual-variable system

**Problem:** Variables were split across three files with overlapping concerns:
- `styles/_variables.scss` — v1 SCSS vars
- `styles/utils/_variables.scss` — v2 breakpoint values
- `styles/_global-variables.scss` — CSS custom properties

**Changes:**
- Merged `styles/_variables.scss` into `styles/utils/_properties.scss`
- Moved `_global-variables.scss` content into `styles/utils/_properties.scss`
- Updated `cove-main.scss` imports
- Deleted both root-level variable files

**Risk:** Low — renames with a pre-merge audit for duplicate/conflicting variable names.

---

## Phase 3 — Co-locate component styles

**Problem:** Styles in `styles/components/` were disconnected from the React components that used them, making it hard to find what styles applied to a given component and easy to leave orphaned CSS behind.

**Changes — moved to co-located paths:**

| Old path | New path |
|---|---|
| `styles/components/accordion.scss` | `components/ui/accordion.scss` |
| `styles/components/button.scss` | `components/elements/button.scss` |
| `styles/components/card.scss` | `components/elements/card.css` |
| `styles/components/modal.scss` | `components/ui/modal.scss` |
| `styles/components/overlay.scss` | `components/ui/overlay.scss` |
| `styles/components/icon.scss` | `components/ui/icon.scss` |
| `styles/components/loadspin.scss` | `components/ui/loadspin.scss` |
| `styles/components/input/_input.scss` | `components/inputs/_input.scss` |
| `styles/components/input/_input-group.scss` | `components/inputs/_input-group.scss` |
| `styles/components/input/_input-check-radio.scss` | `components/inputs/_input-check-radio.scss` |
| `styles/components/input/_input-slider.scss` | `components/inputs/_input-slider.scss` |
| `styles/components/editor.scss` | `components/EditorPanel/editor.scss` |
| `styles/components/data-designer.scss` | `components/managers/data-designer.scss` |
| `styles/components/tooltip.scss` | `components/ui/tooltip.scss` |

Each consuming `.tsx`/`.jsx` file was updated to import via relative path. The now-empty `styles/components/` directory was removed.

**Risk:** Medium — required finding every import of each file. Build verified per component move.

---

## Phase 4 — Dissolve legacy v1 root files

**Problem:** Several root-level files in `styles/` were monolithic v1 holdovers with no clear structural home after phases 1–3.

### 4.1 — Remove dead `$theme` map from `base.scss`

The `$theme` SCSS map (lines 32–99) was declared inside `.cdc-open-viz-module {}` but never used there — the actual theme loop lives in `themes/_color-definitions.scss`. Removed the map and the unused `@use 'sass:string'` declaration.

The Bootstrap-compat margin/padding/font shim classes (`.me-*`, `.ms-*`, `.pe-*`, `.ps-*`, `.fw-bold`) were extracted from `base.scss` into `layout/_component.scss` scoped under `.cdc-open-viz-module`. These are required for Chronic pages still on TP4 where Bootstrap 5 classes aren't defined.

### 4.2 — Enable `base/_reset.scss`, restore scoped module reset

`base/_reset.scss` (the modern Piccalilli-style global reset) was previously commented out with a TODO. It is now enabled in `base/index.scss`.

The root `_reset.scss` was deleted, but its content was not redundant — it carried the `.cdc-open-viz-module`-scoped element reset (50+ HTML elements normalized for `margin`, `padding`, `border`, `font-family`, `font-weight`, `vertical-align`) plus the module's own base typography (`font-family`, `font-size`, `font-weight`, `line-height`, `text-rendering`). These were restored directly into the `.cdc-open-viz-module {}` block in `base.scss` so host-page styles cannot bleed into visualizations.

> **Note:** `base/_reset.scss` is the reset for the `.cove` class path. The scoped reset in `base.scss` is for the legacy `.cdc-open-viz-module` path. Both must coexist during the migration period.

### 4.3 — Move `_accessibility.scss` → `utils/_accessibility.scss`

Focus-visible outline styles (`dashed 2px rgb(0,122,153)`) moved to `utils/` where they belong alongside other cross-cutting utilities. Added to `utils/index.scss` so all packages get them via the standard import chain. Updated direct imports in `@cdc/map` and `@cdc/waffle-chart`.

### 4.4 — Co-locate `loading.scss` and `waiting.scss`

| Old path | New path | Updated import in |
|---|---|---|
| `styles/loading.scss` | `components/loading.scss` | `components/Loading.jsx` |
| `styles/waiting.scss` | `components/waiting.scss` | `components/Waiting.tsx` |

The `@import 'utils/mixins'` inside `waiting.scss` was updated to the correct relative path `../styles/utils/mixins` after the move.

### 4.5 — Co-locate `filters.scss`

`styles/filters.scss` moved to `components/Filters/filters.scss`. The `@import 'utils/breakpoints'` inside was updated to `../../styles/utils/breakpoints`. An `import './filters.scss'` was added to `Filters.tsx` and the old `@import 'filters'` was removed from `base.scss`.

### 4.6 — Absorb `_common-components.css`

This raw CSS file contained three unrelated rule groups:

- `.loader` / `.loader::before` — a text-based spinner using `\21BB` (↻). **Dead code** — no component renders a `.loader` class. Deleted without replacement.
- `.warning-icon` — SVG warning icon positioning for accordion panel headers. Moved to `components/EditorPanel/editor.scss`.
- `.checkbox-group` — Checkbox alignment rules for visual editor panels. Moved to `components/EditorPanel/editor.scss`.

All packages that use these editor styles already import `editor.scss` directly (`@cdc/waffle-chart`, `@cdc/data-bite`, `@cdc/map`, `@cdc/chart`), so no cross-package import changes were needed.

Removed `@import '_common-components'` from both `cove-main.scss` and `editor.scss`. File deleted.

### 4.7 — Simplify `cove-main.scss`

Removed the duplicate `@import 'themes/color-definitions'` — `themes/_color-definitions.scss` is already compiled via `main.scss → @import 'themes' → themes/index.scss`. Including it twice produced duplicate CSS output.

**Before (7 lines):**
```scss
@import 'utils/breakpoints';
@import 'base';
@import 'heading-colors';
@import 'themes/color-definitions'; // duplicate
@import '_common-components';       // now deleted
@import '../components/ui/tooltip';
@import 'main';
```

**After (5 lines):**
```scss
@import 'utils/breakpoints';
@import 'base';
@import 'heading-colors';
@import '../components/ui/tooltip';
@import 'main';
```

---

## Stylelint

Added Stylelint configuration (`.stylelintrc.json`) and a GitHub Actions workflow (`.github/workflows/stylelint.yml`) to enforce CSS/SCSS consistency across the monorepo. Applied automated fixes to all existing CSS files to bring them into compliance.

---

## File inventory — net change

| Category | Before | After |
|---|---|---|
| Root-level `styles/` files | 15+ | 6 (`base.scss`, `cove-main.scss`, `main.scss`, `heading-colors.scss`, `_global.scss`, `_button-section.scss`, `_series-list.scss`) |
| `styles/v2/` directory | Exists | Deleted |
| `styles/components/` directory | Exists | Deleted |
| Co-located component styles | 0 | 20+ |
| Duplicate CSS output | `themes/color-definitions` compiled twice | Once |
| Dead CSS | `$theme` map, `.loader` class | Removed |

---

## Import path reference

Cross-package imports that changed:

| Old | New |
|---|---|
| `@cdc/core/styles/v2/utils/breakpoints` | `@cdc/core/styles/utils/breakpoints` |
| `@cdc/core/styles/accessibility` | `@cdc/core/styles/utils/accessibility` |
| `@cdc/core/styles/v2/themes/color-definitions` | `@cdc/core/styles/themes/color-definitions` |
