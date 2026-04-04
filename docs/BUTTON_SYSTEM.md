# Button System

This document describes the current shared button contract in COVE, how legacy button styles are being migrated, and which controls are still exceptions.

## Summary

The shared button primitive is:

- `@cdc/core/components/elements/Button`

New work should prefer the shared `Button` API over semantic Bootstrap-style class strings like `btn btn-primary`, `btn-danger`, `btn-link`, `btn-sm`, and `full-width`.

The goal is:

- semantic styling comes from props
- `className` is reserved for spacing and package-specific layout hooks
- legacy `.btn*` compatibility remains temporarily in `button.scss` so migration can happen incrementally

## Shared Button API

Current supported props for button styling:

- `variant`
  - `primary`
  - `editor-primary`
    - always full width; no `fullWidth` prop needed
    - adds top margin when it is not the first child in its container
  - themed primary variants
    - `theme-blue`
    - `theme-purple`
    - `theme-brown`
    - `theme-teal`
    - `theme-pink`
    - `theme-orange`
    - `theme-slate`
    - `theme-indigo`
    - `theme-cyan`
    - `theme-green`
    - `theme-amber`
    - intended for theme-colored apply/primary actions that should follow the current visualization theme
    - can also be combined with `secondary` for a theme-colored secondary treatment
  - `secondary`
  - `success`
  - `danger`
  - `warning`
  - `light`
  - `link`
  - `outline-warning`
- `size`
  - `sm`
- `fullWidth`
  - stretches to container width
- `loading`
  - existing loading treatment
- `disabled`
  - native button behavior

Existing non-visual props still matter:

- `type`
- `onClick`
- `style`
- `className`
- `role='loader'`
- `flexCenter`
- `active`

## Preferred Usage

Use props for semantics:

```tsx
<Button variant='primary'>Save</Button>
<Button variant='theme-cyan'>Apply</Button>
<Button variant='theme-cyan' secondary>Secondary Apply</Button>
<Button variant='danger'>Delete</Button>
<Button variant='link'>Clear Filters</Button>
<Button variant='light' size='sm'>Collapse</Button>
<Button variant='primary' fullWidth>Add Filter</Button>
```

Use `className` only for:

- spacing utilities like `mt-2`, `me-2`, `px-4`
- package-specific layout hooks like `row-menu__btn`, `btn-configure`, `save`
- non-semantic structural hooks that already have local CSS

For `variant='editor-primary'`, do not add spacing utilities just to create the standard top gap before the button.

Avoid using `className` for:

- `btn-primary`
- `btn-secondary`
- `btn-danger`
- `btn-warning`
- `btn-light`
- `btn-link`
- `btn-outline-warning`
- `btn-sm`
- `full-width`

## Migration Rules

When migrating an existing shared `Button` usage:

1. Move semantic classes into props.
2. Keep layout hooks in `className`.
3. Do not remove package-specific classes unless their local CSS has also been migrated.

Examples:

```tsx
<Button className='btn btn-primary full-width mt-2'>
```

becomes:

```tsx
<Button variant='primary' fullWidth className='mt-2'>
```

and

```tsx
<Button className='btn btn-danger border-0 ms-1'>
```

becomes:

```tsx
<Button variant='danger' className='border-0 ms-1'>
```

## Current Migration Status

Shared `Button` usages that were still expressing semantics through legacy `btn-*` classes have been migrated to props across:

- `core`
- `dashboard`
- `editor`
- `chart`
- `map`
- `data-bite`
- `waffle-chart`

The shared `Button` component now supports:

- `variant='link'` for former `btn-link` usage
- `size='sm'` for former `btn-sm` usage
- `fullWidth` for former `full-width` usage

## Remaining Exceptions

These are not all the same kind of problem and should not be force-migrated blindly.

### 1. Backward Compatibility In Shared Styles

`packages/core/components/elements/button.scss` still supports legacy class aliases such as:

- `.btn-secondary`
- `.btn-danger`
- `.btn-warning`
- `.btn-light`
- `.btn-link`
- `.btn-outline-warning`
- `.btn-sm`
- `.full-width`

These are compatibility bridges and can be removed only after the repo no longer depends on them.

### 2. Native Buttons With Custom Package Styling

Some controls are not generic action buttons and still use package-local styling or custom interaction patterns, for example:

- dashboard row menu buttons
- dashboard widget configure buttons
- data designer card-style buttons
- map geo selector tiles
- zoom controls
- legend item buttons
- modal close and icon-only controls

These need design decisions, not just prop migration.

### 3. Explicit Legacy Escape Hatch

`packages/core/components/PaletteSelector/DeveloperPaletteRollback.tsx` still uses a legacy outline warning class combination. That is currently the clearest example of a remaining shared `Button` call site that should eventually move to:

- `variant='outline-warning'`
- `size='sm'`

## Guardrails For Future Work

- Prefer `Button` over raw `<button>` for standard actions.
- Do not introduce new semantic `btn-*` classes on shared `Button` usages.
- If a control needs custom layout, keep the layout class and move only the semantic part into props.
- If a control is visually special enough that `variant`, `size`, and `fullWidth` are not enough, document it as an exception instead of encoding more semantics in `className`.

## Useful Search Patterns

To find shared button usages still depending on legacy semantic classes:

```sh
rg -n "<Button[^\\n>]*className=.*btn-(primary|secondary|danger|warning|light|link|outline-warning|sm)|<Button[^\\n>]*className=.*full-width" packages --glob '!**/dist/**' --glob '!**/node_modules/**' --glob '!**/_stories/**'
```

To find raw legacy button elements:

```sh
rg -n "className='btn|className=\"btn|className=\\{'btn|className=\\{\\'btn" packages --glob '!**/dist/**' --glob '!**/node_modules/**' --glob '!**/_stories/**' --glob '!**/devTemplate/**'
```

## Next Logical Cleanup

- convert remaining shared `Button` exceptions like `DeveloperPaletteRollback`
- decide which custom controls should become formal shared variants and which should stay package-specific
- remove compatibility selectors from `button.scss` only after the codebase no longer relies on them
