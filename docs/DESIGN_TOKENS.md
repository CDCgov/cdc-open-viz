# Design Tokens Reference

This document is the single source of truth for all design tokens used in the CDC Open Viz monorepo. Design tokens are reusable values that define the visual design of components across all packages.

**All design tokens are CSS custom properties prefixed with `--cove-` for namespace isolation.**

---

## Table of Contents

1. [Color Tokens](#color-tokens)
2. [Spacing Tokens](#spacing-tokens)
3. [Typography Tokens](#typography-tokens)
4. [Breakpoint Tokens](#breakpoint-tokens)
5. [Shadow & Effects](#shadow--effects)
6. [Z-index System](#z-index-system)
7. [Transition Tokens](#transition-tokens)
8. [Semantic Tokens](#semantic-tokens)
9. [Using Design Tokens](#using-design-tokens)
10. [Adding New Tokens](#adding-new-tokens)
11. [Theming System](#theming-system)

---

## Color Tokens

### Base Colors

These are utility colors used throughout the design system for neutral elements.

| Token | Value | Use Case |
|-------|-------|----------|
| `--cove-baseColor` | `#333` | Default text color |
| `--cove-white` | `#fff` | Background, light elements |
| `--cove-silver` | `#eee` | Secondary background |
| `--cove-blue` | `#005eaa` | Primary brand color |
| `--cove-red` | `#d8000c` | Error/danger states |

### Neutral Gray Scale

Grayscale colors for borders, dividers, and disabled states.

| Token | Value | Use Case |
|-------|-------|----------|
| `--cove-lightestGray` | `#f2f2f2` | Light backgrounds, hover states |
| `--cove-gray2` | `#f5f5f5` | Alternative light background |
| `--cove-lightGray` | `#c7c7c7` | Borders, dividers |
| `--cove-mediumGray` | `#565656` | Secondary text, disabled buttons |
| `--cove-darkGray` | `#333` | Primary text (same as baseColor) |

### Cool Gray Scale (USWDS Aligned)

Government-standard gray colors for accessibility.

| Token | Value | Use Case |
|-------|-------|----------|
| `--cove-cool-gray-90` | `#1c1d1f` | Dark text, dark backgrounds |
| `--cove-cool-gray-50` | `#71767a` | Mid-tone text, borders |
| `--cove-cool-gray-30` | `#a9aeb1` | Light text, secondary borders |
| `--cove-cool-gray-10` | `#dfe1e2` | Very light borders, dividers |

### Default Theme (Blue)

The default color theme for components when no specific theme is applied.

| Token | Value | Description |
|-------|-------|-------------|
| `--cove-primary` | `#005eaa` | Primary action color (dark blue) |
| `--cove-secondary` | `#88c3ea` | Secondary action, hover states (light blue) |
| `--cove-tertiary` | `#c0e9ff` | Light backgrounds, disabled states (lighter blue) |
| `--cove-quaternary` | `#edf9ff` | Very light backgrounds, highlights (lightest blue) |

### Alternative Theme Colors

The system supports **11 color themes** that can be applied via the `theme` class (e.g., `class="theme-purple"`).

Each theme provides 4 color shades: primary, secondary, tertiary, quaternary.

#### Purple Theme
```css
--cove-purple-primary:    #712177
--cove-purple-secondary:  #b890bb
--cove-purple-tertiary:   #e3d3e4
--cove-purple-quaternary: #f7f2f7
```

#### Brown Theme
```css
--cove-brown-primary:    #705043
--cove-brown-secondary:  #ad907b
--cove-brown-tertiary:   #d7ccc8
--cove-brown-quaternary: #f2ebe8
```

#### Teal Theme
```css
--cove-teal-primary:    #00695c
--cove-teal-secondary:  #4ebaaa
--cove-teal-tertiary:   #ceece7
--cove-teal-quaternary: #ebf7f5
```

#### Pink Theme
```css
--cove-pink-primary:    #af4448
--cove-pink-secondary:  #e57373
--cove-pink-tertiary:   #ffc2c2
--cove-pink-quaternary: #ffe7e7
```

#### Orange Theme
```css
--cove-orange-primary:    #bb4d00
--cove-orange-secondary:  #ffad42
--cove-orange-tertiary:   #ffe97d
--cove-orange-quaternary: #fff4cf
```

#### Slate Theme
```css
--cove-slate-primary:    #29434e
--cove-slate-secondary:  #7e9ba5
--cove-slate-tertiary:   #b6c6d2
--cove-slate-quaternary: #e2e8ed
```

#### Indigo Theme
```css
--cove-indigo-primary:    #26418f
--cove-indigo-secondary:  #92a6dd
--cove-indigo-tertiary:   #dee8ff
--cove-indigo-quaternary: #f2f6ff
```

#### Cyan Theme
```css
--cove-cyan-primary:    #006778
--cove-cyan-secondary:  #65b0bd
--cove-cyan-tertiary:   #cce5e9
--cove-cyan-quaternary: #ebf5f6
```

#### Green Theme
```css
--cove-green-primary:    #4b830d
--cove-green-secondary:  #84bc49
--cove-green-tertiary:   #dcedc8
--cove-green-quaternary: #f1f8e9
```

#### Amber Theme
```css
--cove-amber-primary:    #fbab18
--cove-amber-secondary:  #ffd54f
--cove-amber-tertiary:   #ffecb3
--cove-amber-quaternary: #fff7e1
```

#### USWDS Blue Accent
```css
--cove-colors-blue-vivid-60: #005ea2  (alternative blue)
```

---

## Spacing Tokens

### Layout Spacing

| Token | Value | Use Case |
|-------|-------|----------|
| `--cove-editorWidth` | `350px` | Editor panel fixed width |
| `--cove-editorContentPadding` | `30px` | Padding inside editor panels |
| `--cove-space-between-legend-item-rows` | `1rem` | Vertical gap in legend items |
| `--cove-space-between-legend-item-columns` | `1.5rem` | Horizontal gap in legend items |

**Note**: Standard spacing (4px, 8px, 16px, etc.) uses `rem` units and should be calculated relative to base font size.

---

## Typography Tokens

### Font Families

| Token | Value | Use Case |
|-------|-------|----------|
| `--cove-app-font-main` | `'Nunito', sans-serif` | Body text, regular content |
| `--cove-app-font-secondary` | `'Poppins', sans-serif` | Headings, titles, emphasized text |

### Font Sizes

#### Component-Specific Sizes

| Token | Value | Use Case |
|-------|-------|----------|
| `--cove-legend-title-font-size` | `1rem` | Legend section titles |
| `--cove-legend-description-font-size` | `1rem` | Legend descriptions |
| `--cove-legend-item-font-size` | `0.889rem` | Individual legend items |
| `--cove-download-link-font-size` | `0.772rem` | Download links |
| `--cove-filter-select-font-size` | `0.833rem` | Select dropdowns in filters |
| `--cove-filter-label-font-size` | `0.889rem` | Filter control labels |
| `--cove-filter-buttons-font-size` | `0.889rem` | Filter action buttons |
| `--cove-superTitle-font-size` | `0.833rem` | Super-titles (small uppercase text) |
| `--cove-title-font-size` | `1.222rem` | Main component titles |
| `--cove-territory-label-font-size` | `0.809rem` | Map territory labels (desktop) |
| `--cove-territory-label-font-size-mobile` | `0.556rem` | Map territory labels (mobile) |

**Recommendation**: Use relative units (`em`, `rem`) for font sizes to maintain scalability.

---

## Breakpoint Tokens

Use for responsive design media queries. Follow **mobile-first** approach.

| Token | Value | Device | Use Case |
|-------|-------|--------|----------|
| `--cove-breakpoint-xs` | `480px` | Mobile | Extra small devices |
| `--cove-breakpoint-sm` | `768px` | Tablet | Small tablets |
| `--cove-breakpoint-md` | `960px` | Tablet+ | Medium tablets and larger |
| `--cove-breakpoint-lg` | `1170px` | Desktop | Larger desktops |
| `--cove-breakpoint-xl` | `1280px` | Desktop+ | Extra-large displays |

### Usage Example

```css
/* Mobile-first: base styles apply to all sizes */
.card {
  display: block;
  padding: 1rem;
}

/* Tablet and up: apply different layout */
@media (min-width: var(--cove-breakpoint-md)) {
  .card {
    display: flex;
    padding: 1.5rem;
  }
}

/* Desktop and up: adjust spacing */
@media (min-width: var(--cove-breakpoint-lg)) {
  .card {
    padding: 2rem;
  }
}
```

---

## Shadow & Effects

### Elevation Shadows

| Token | Value | Use Case |
|-------|-------|----------|
| `--cove-shadow-sm` | `rgba(0, 0, 0, 0.5) 0 1px 2px` | Subtle elevation |
| `--cove-shadow-md` | `0 2px 4px rgb(159 159 159 / 10%)` | Standard elevation |

### Tooltip Shadows

Directional shadows for tooltip positioning.

| Token | Use Case |
|-------|----------|
| `--cove-shadow-tooltip-top` | Tooltip above target |
| `--cove-shadow-tooltip-right` | Tooltip to the right |
| `--cove-shadow-tooltip-bottom` | Tooltip below target |
| `--cove-shadow-tooltip-left` | Tooltip to the left |

### Modal Shadow

| Token | Value | Use Case |
|-------|-------|----------|
| `--cove-shadow-modal` | `3px 3px 10px rgb(0 0 0 / 20%)` | Modal overlay elevation |

### Border Radius

| Token | Value | Use Case |
|-------|-------|----------|
| `--cove-radius-xs` | `2px` | Minimal rounding |
| `--cove-radius-sm` | `4px` | Small elements (buttons, inputs) |
| `--cove-radius-md` | `6px` | Standard rounding (cards, panels) |
| `--cove-radius-lg` | `8px` | Large elements (modals, sidebars) |
| `--cove-radius-pill` | `50%` | Fully rounded (circular buttons) |

---

## Z-index System

A layered z-index scale ensures proper stacking context without conflicts.

| Token | Value | Purpose |
|-------|-------|---------|
| `--cove-z-base` | `1` | Default stacking level |
| `--cove-z-above` | `2` | Slightly elevated elements |
| `--cove-z-dropdown` | `100` | Dropdown menus, popovers |
| `--cove-z-sticky` | `200` | Sticky headers, toolbars |
| `--cove-z-fixed` | `300` | Fixed navigation, fixed sidebars |
| `--cove-z-modal-backdrop` | `400` | Modal dark overlay |
| `--cove-z-modal` | `500` | Modal dialog boxes |
| `--cove-z-popover` | `600` | Popovers, floating panels |
| `--cove-z-tooltip` | `1000` | Tooltips, top-most elements |

**Never use arbitrary z-index values; always use these tokens to maintain consistent stacking hierarchy.**

---

## Transition Tokens

Define animation timing for consistency and performance.

| Token | Value | Use Case |
|-------|-------|----------|
| `--cove-transition-fast` | `0.1s all` | Quick feedback (hover, focus) |
| `--cove-transition-base` | `0.2s all` | Standard state changes |
| `--cove-transition-slow` | `0.3s all` | Longer animations (modals, sidebars) |
| `--cove-transition-spring` | `500ms cubic-bezier(0.16, 1, 0.3, 1)` | Spring easing (playful animations) |

### Usage Example

```css
.button {
  background-color: var(--cove-primary);
  transition: background-color var(--cove-transition-fast);
}

.button:hover {
  background-color: var(--cove-secondary);
}
```

---

## Semantic Tokens

Tokens with semantic meaning for states and interactions.

### State Colors

| Token | Value | Use Case |
|-------|-------|----------|
| `--cove-color-success` | `#44aa41` | Success messages, checkmarks |
| `--cove-color-success-hover` | `#4dbf4a` | Success state hover |
| `--cove-color-warn` | `#d73636` | Warning messages, caution icons |
| `--cove-color-warn-hover` | `#c22f2f` | Warning state hover |
| `--cove-color-muted` | `#a0a0a0` | Disabled, inactive, muted text |
| `--cove-color-muted-hover` | `#8c8c8c` | Muted state hover |
| `--cove-color-focus` | `rgb(0, 122, 153)` | Focus outline color (accessibility) |

### Usage Example

```css
.alert-success {
  background-color: var(--cove-quaternary); /* light theme color */
  border: 2px solid var(--cove-color-success);
  color: var(--cove-color-success);
}

.button:disabled {
  background-color: var(--cove-lightestGray);
  color: var(--cove-color-muted);
  cursor: not-allowed;
}

button:focus-visible {
  outline: 2px dashed var(--cove-color-focus);
  outline-offset: 3px;
}
```

---

## Using Design Tokens

### ✅ Correct Usage

Always use CSS custom properties for any design value:

```css
/* Colors */
.component {
  background-color: var(--cove-primary);
  border: 1px solid var(--cove-cool-gray-10);
  color: var(--cove-white);
}

/* Spacing */
.component {
  gap: var(--cove-space-between-legend-item-rows);
  padding: 1rem;
}

/* Typography */
.heading {
  font-family: var(--cove-app-font-secondary);
  font-size: var(--cove-title-font-size);
}

/* Responsive */
@media (min-width: var(--cove-breakpoint-md)) {
  .card {
    padding: 2rem;
  }
}

/* Shadows & Effects */
.card {
  border-radius: var(--cove-radius-md);
  box-shadow: var(--cove-shadow-md);
}

/* Z-index */
.modal {
  z-index: var(--cove-z-modal);
}

/* Transitions */
.button {
  transition: background-color var(--cove-transition-fast);
}
```

### ❌ Avoid

```css
/* Hardcoded values (bad) */
.component {
  background-color: #005eaa;  /* ❌ Should use --cove-primary */
  border: 1px solid #dfe1e2;  /* ❌ Should use --cove-cool-gray-10 */
  padding: 30px;              /* ❌ Should use rem units */
  z-index: 999;               /* ❌ Should use z-index tokens */
}
```

---

## Adding New Tokens

When you need a new design value (color, spacing, etc.):

### Step 1: Check if Token Already Exists

Search existing tokens in this document and the codebase. Many needs are already covered.

### Step 2: Define in Source File

Add to `packages/core/styles/themes/_color-definitions.scss` (or appropriate file):

```scss
// In the :root CSS custom properties section
:root {
  // Existing tokens...

  // New token
  --cove-new-token-name: value;
}
```

### Step 3: Update This Documentation

Add new token to appropriate section in `DESIGN_TOKENS.md` with:
- Token name
- Value
- Use case / description

### Step 4: Update Linting Rules (if needed)

Verify `.stylelintrc.json` still validates properly with the new token.

### Step 5: Communicate

Document in PR description why the new token is needed and what it replaces/improves.

---

## Theming System

### How Themes Work

1. **Component markup** includes theme class: `<div class="cove theme-purple">`
2. **CSS** uses primary/secondary/tertiary/quaternary tokens
3. **CSS variables** automatically map to selected theme colors
4. **Components** instantly reflect new theme without code changes

### Applying a Theme

```html
<!-- Default (Blue) theme -->
<div class="cdc-open-viz-module theme-blue">
  <!-- Uses --cove-primary, --cove-secondary, etc. -->
</div>

<!-- Purple theme -->
<div class="cdc-open-viz-module theme-purple">
  <!-- --cove-primary automatically maps to purple -->
</div>
```

### Theme Color Mapping

Each theme provides 4 shades for layering:

```css
/* Headers use primary */
.cove-component__header {
  background-color: var(--cove-primary);
  border-color: var(--cove-secondary);
}

/* Content area uses lighter shades */
.cove-component__content {
  background-color: var(--cove-quaternary); /* lightest */
  border-color: var(--cove-tertiary);       /* lighter */
}

/* Accents use secondary */
.cove-component__accent {
  background-color: var(--cove-secondary); /* medium */
}
```

### Creating a New Theme

To add a 12th theme (e.g., "mint"):

1. Add color definitions to `_color-definitions.scss`:
```scss
$mint-primary: #009999;
$mint-secondary: #33cccc;
// ... etc
```

2. Add to CSS variables and theme map
3. Add theme styling (if special rules needed)
4. Document in this file

---

## References

- [STYLING_GUIDELINES.md](./STYLING_GUIDELINES.md) — CSS coding standards
- [PALETTE_MIGRATION.md](./PALETTE_MIGRATION.md) — v1→v2 color migration
- [packages/core/styles/themes/_color-definitions.scss](../packages/core/styles/themes/_color-definitions.scss) — Source of truth file

---

## Questions?

- Check existing tokens first before creating new ones
- Reference components in the codebase for usage examples
- See Storybook for visual examples of themes and components
- Open an issue with the `styling` label for design system questions
