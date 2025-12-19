# Data Bite Component - Complete Documentation

## Overview

The Data Bite component (`CdcDataBite`) is a React component from the CDC Open Visualization project that displays a single piece of data in a card format. It's designed to highlight key statistics and metrics in an easily digestible visual format.

**Package**: `@cdc/data-bite`
**Main Component**: `packages/data-bite/src/CdcDataBite.tsx`
**Entry Point**: `packages/data-bite/src/index.jsx`

---

## Component Architecture

### Main Component Structure

The `CdcDataBite` component uses:
- **React Hooks**: `useReducer`, `useEffect`, `useCallback`
- **State Management**: Custom reducer (`dataBiteReducer`) for managing component state
- **Context**: Provides config, updateConfig, loading, data, and editor state to child components
- **Responsive**: Uses `ResizeObserver` to track viewport changes (scaled 2x for responsive calculations)

### Key Dependencies

- `@cdc/core` - Core utilities, components, and helpers
- `resize-observer-polyfill` - For responsive behavior
- `html-react-parser` - For parsing HTML in content
- `chroma-js` - For color manipulation in CircleCallout

---

## Configuration Structure

### Config Type Definition

Located in `packages/data-bite/src/types/Config.ts`:

```typescript
{
  type: 'data-bite'
  data: Object[]                    // Array of data objects
  dataBite: string                 // Legacy field
  dataFunction: string            // Statistical function to apply
  dataColumn: string               // Column name to extract data from
  bitePosition: string             // Image/graphic position
  biteFontSize: number             // Font size for the data value (17-65px)
  fontSize: string                 // Overall font size: 'small' | 'medium' | 'large'
  biteBody: string                 // Main message/content text
  imageData: {
    display: string                // 'none' | 'static' | 'dynamic'
    url: string                    // Image URL
    alt: string                    // Alt text
    options: Object[]              // Dynamic image options
  }
  dataFormat: {
    roundToPlace: number           // Decimal places (0-99)
    commas: boolean                // Add thousand separators
    prefix: string                 // Text before value
    suffix: string                 // Text after value
    ignoreZeros?: boolean          // Ignore zero values in calculations
  }
  biteStyle: string                // Layout style (see Bite Styles section)
  filters: VizFilter[]             // Data filtering options
  subtext: string                  // Subtext/citation below content
  title: string                    // Component title
  theme: string                    // Color theme (see Themes section)
  shadow: boolean                  // Enable box shadow
  visual: {
    border: boolean                // Display border
    accent: boolean                // Use accent style
    background: boolean           // Use theme background color
    hideBackgroundColor: boolean   // Hide background color
    borderColorTheme: boolean     // Use theme color for border
    showTitle: boolean            // Show/hide title
  }
  general: {
    isCompactStyle: boolean        // Compact layout mode
  }
  markupVariables: []              // Markup variable definitions
  enableMarkupVariables: boolean   // Enable markup processing
  version: Version                 // Config version
}
```

### Default Configuration

Located in `packages/data-bite/src/data/initial-state.js`:

```javascript
{
  type: 'data-bite',
  data: [],
  dataBite: '',
  dataFunction: '',
  dataColumn: '',
  bitePosition: 'Left',
  biteFontSize: 24,
  fontSize: 'medium',
  biteBody: '',
  imageData: {
    display: 'none',
    url: '',
    alt: '',
    options: []
  },
  dataFormat: {
    roundToPlace: 0,
    commas: true,
    prefix: '',
    suffix: '%'
  },
  biteStyle: 'graphic',
  filters: [],
  subtext: '',
  title: '',
  theme: 'theme-blue',
  shadow: false,
  visual: {
    border: false,
    accent: false,
    background: false,
    hideBackgroundColor: false,
    borderColorTheme: false,
    showTitle: true
  },
  general: {
    isCompactStyle: false
  },
  markupVariables: [],
  enableMarkupVariables: false
}
```

---

## Bite Styles (Layout Options)

Defined in `packages/data-bite/src/constants.ts`:

1. **`graphic`** - Graphic (Circle Callout)
   - Displays data value in a circular SVG callout
   - Can be positioned at top or bottom
   - Uses `CircleCallout` component

2. **`split`** - Split Graphic and Message
   - Value takes 25% width, text takes 75%
   - Horizontal flex layout
   - Value centered, text on right

3. **`title`** - Value above Message
   - Value displayed above the message text
   - Vertical stack layout

4. **`body`** - Value before Message
   - Value inline at the start of the message text
   - Uses `data-bite-body` class

5. **`end`** - Value after Message
   - Value inline at the end of the message text
   - Uses `data-bite-body` class

6. **`gradient`** - Gradient
   - Special KPI-style layout
   - Uses `GradientBite` component (though currently uses `KPIComponent`)
   - Has separate styling in `kpi.scss`

---

## Image Positions

Defined in `packages/data-bite/src/constants.ts`:

- **`Left`** - Image/graphic on the left (33% width, margin-right: 1.5em)
- **`Right`** - Image/graphic on the right (33% width, margin-left: 1.5em, row-reverse layout)
- **`Top`** - Image/graphic above content (column layout)
- **`Bottom`** - Image/graphic below content (column layout)

---

## Data Functions

The component supports the following statistical functions (from `@cdc/core/helpers/constants`):

1. **Count** - Count of values (optionally ignoring zeros)
2. **Sum** - Sum of all values
3. **Mean (Average)** - Average of values (optionally ignoring zeros)
4. **Median** - Median value
5. **Max** - Maximum value
6. **Min** - Minimum value
7. **Mode** - Most frequent value(s)
8. **Range** - Min - Max range display

### Data Processing

- Filters data based on `filters` array (columnName/columnValue pairs)
- Extracts numerical values from specified `dataColumn`
- Applies precision rounding based on `roundToPlace`
- Formats with locale string (commas) if enabled
- Adds prefix/suffix if configured

---

## Themes

The component supports 11 color themes. Theme colors are applied to `.bite-value` elements:

- `theme-blue` - Uses `var(--primary)`
- `theme-purple` - Uses `var(--purple-primary)`
- `theme-amber` - Uses `var(--amber-primary)`
- `theme-orange` - Uses `var(--orange-primary)`
- `theme-brown` - Uses `var(--brown-primary)`
- `theme-teal` - Uses `var(--teal-primary)`
- `theme-pink` - Uses `var(--pink-primary)`
- `theme-slate` - Uses `var(--slate-primary)`
- `theme-indigo` - Uses `var(--indigo-primary)`
- `theme-cyan` - Uses `var(--cyan-primary)`
- `theme-green` - Uses `var(--green-primary)`

Theme definitions are in `@cdc/core/data/themes.js`.

---

## Styling Architecture

### Style Files

1. **`main.scss`** - Main entry point
   - Imports `bite.scss`
   - Defines tooltip styles
   - Wraps everything in `.cdc-open-viz-module.type-data-bite`

2. **`bite.scss`** - Core component styles (359 lines)
   - Theme color definitions (duplicated at module and `.bite` level)
   - Layout styles for all bite styles
   - Image position styles
   - Compact style overrides
   - Border and background styles

3. **`editor-panel.scss`** - Editor-specific styles
   - Sidebar spacing
   - Form input layouts
   - Accordion styles
   - Editor toggle button

4. **`kpi.scss`** - Gradient/KPI style specific
   - Gradient background
   - Label/value container layouts
   - Responsive breakpoints

### Key CSS Classes

#### Container Classes
- `.cdc-open-viz-module.type-data-bite` - Root module class
- `.cove-component__content` - Main content container
- `.bite` - Bite container
- `.bite-content-container` - Content wrapper
- `.bite-content` - Content area (flex container)

#### Content Classes
- `.bite-value` - The calculated data value (font-size: 2em, font-weight: 800)
- `.bite-text` - Main message text paragraph
- `.bite-subtext` - Subtext/citation (font-size: 0.9em, italic)
- `.bite-body` / `.data-bite-body` - Inline value in body/end styles
- `.bite-content__text-wrap` - Text wrapper (flex container)

#### Image Classes
- `.bite-image` - Image element (width: 100%, min-width: 100px, border-radius: 0.3em)
- `.callout` - Callout container (flex-shrink: 0)
- `.circle-callout` - Circle callout SVG wrapper

#### Position Classes
- `.bite-left` - Image on left
- `.bite-right` - Image on right (row-reverse)
- `.bite-top` - Image on top (column layout)
- `.bite-bottom` - Image on bottom (column layout)

#### Style Classes
- `.bite__style--graphic` - Graphic style
- `.bite__style--end` - End style
- `.bite__style--split` - Split style
- `.bite--isCompactStyle` - Compact mode

#### Visual Classes
- `.shadow` - Box shadow (rgba(0, 0, 0, 0.2) 0 3px 10px)
- `.no-borders` - Remove borders
- `.component--hide-background-color` - Transparent background
- `.component--hide-background-color` - Applied to bite-content-container

#### Theme Classes
- `.theme-{color}` - Applied to module and `.bite` element

### Layout Structure

```
.cdc-open-viz-module.type-data-bite
  └── .cove-component__content
      ├── .bite-header (Title component)
      └── .bite.{position-class}
          └── .bite-content-container.{content-classes}
              ├── CircleCallout (if graphic style)
              ├── .bite-image (if image enabled)
              └── .bite-content
                  ├── .bite-value (if title/split style)
                  └── .bite-content__text-wrap
                      ├── .bite-text
                      │   └── .bite-value.data-bite-body (if body style)
                      ├── .bite-value.data-bite-body (if end style)
                      └── .bite-subtext
```

### Key Style Properties

#### Bite Container
- `position: relative`
- `overflow: hidden`
- `border-top: none`
- `border-bottom-left-radius: 3px`
- `border-bottom-right-radius: 3px`

#### Content Container
- `display: flex`
- `padding: 1em !important`
- `justify-content: space-between`
- `background: var(--lightestGray)` (unless hidden)
- `border: 1px solid var(--lightGray)` (unless no-borders)

#### Bite Value
- `font-size: 2em` (base, overridden by inline style from `biteFontSize`)
- `font-weight: 800`
- `line-height: 1.25em`
- Color: Theme primary color

#### Bite Text
- `margin-bottom: 15px`
- `color: #222`

#### Bite Subtext
- `font-size: 0.9em`
- `font-style: italic`
- `flex-basis: 100%`
- `width: 100%`
- `align-self: flex-end`

#### Image Styles
- `width: 100%`
- `min-width: 100px`
- `align-self: center`
- `border-radius: 0.3em`

#### Split Style Specific
- `.bite-value`: `flex-basis: 25%`, `align-self: center`, `text-align: center`
- `.bite-content__text-wrap`: `flex: 75% !important`

#### Compact Style
- Aligns content center
- Removes bottom margin from `.bite-text`

---

## Components

### CircleCallout

**Location**: `packages/data-bite/src/components/CircleCallout.jsx`

SVG-based circular callout displaying the data value.

**Props**:
- `text` - The data value to display
- `theme` - Theme name (default: 'theme-blue')
- `dataFormat` - Formatting config (not currently used)
- `biteFontSize` - Font size for text

**Structure**:
- SVG viewBox: `0 0 100 100`
- Outer ring: Theme primary color
- Inner ring: Darkened theme primary (chroma darken 0.5)
- Text: White, centered, uses `biteFontSize`

**Styling**:
- Class: `.circle-callout.callout`
- In top/bottom positions: `margin: 0 auto`, `max-width: 75%`

### GradientBite / KPIComponent

**Location**: `packages/data-bite/src/components/GradientBite.jsx`

Currently exports `KPIComponent` (may be legacy naming).

**Props**:
- `label` - Title text
- `value` - Data value

**Structure**:
- `.kpi-container` - Outer container
- `.kpi-content` - Gradient background container
- `.label-container` - Label section (left)
- `.value-container` - Value section (right)

**Styling** (from `kpi.scss`):
- Border-radius: 10px
- Border: 1px solid rgba(0, 0, 0, 0.25)
- Box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
- Height: 70px
- Gradient: `linear-gradient(90deg, rgba(8, 132, 136, 1) 19%, rgba(255, 255, 255, 1) 74%)`
- Label: White, 18px (responsive)
- Value: Brown, 24px (responsive)

### EditorPanel

**Location**: `packages/data-bite/src/components/EditorPanel.jsx`

Configuration panel for editing data bite properties.

**Sections**:
1. **General**
   - Bite Style selector
   - Title input
   - Show Title checkbox
   - Message textarea
   - Subtext/Citation input

2. **Data**
   - Data Column selector
   - Data Function selector
   - Number Formatting (prefix, suffix, round)
   - Add commas checkbox
   - Ignore Zeros checkbox
   - Data Point Filters (add/remove filters)

3. **Visual**
   - Bite Font Size (17-65)
   - Overall Font Size (small/medium/large)
   - Display Border checkbox
   - Use Border Color Theme checkbox
   - Use Accent Style checkbox
   - Use Theme Background Color checkbox
   - Hide Background Color checkbox
   - Theme selector

4. **Image** (if style supports images)
   - Image Display Type (none/static/dynamic)
   - Image/Graphic Position
   - Static: URL and Alt Text
   - Dynamic: Multiple conditional images with operators/thresholds

5. **Markup Variables**
   - Enable/configure markup variables

6. **Advanced Editor**
   - JSON editor for advanced configuration

---

## Image Handling

### Static Images
- Single image URL and alt text
- Displayed based on `bitePosition`

### Dynamic Images
- Multiple image options based on data value
- Each option has:
  - `source` - Image URL
  - `alt` - Alt text
  - `arguments` - Array of conditions
    - `operator` - Comparison operator (<, >, <=, >=, =, ≠)
    - `threshold` - Numeric threshold value
  - `secondArgument` - Boolean for compound conditions

**Logic**:
- Calculates data value (without prefix/suffix)
- Evaluates conditions in order
- First matching condition's image is used
- Supports single or compound conditions (AND)

---

## Data Processing

### Filtering
Filters are applied before data calculation:
```javascript
filters.map(filter => {
  if (filter.columnName && filter.columnValue) {
    filteredData = filteredData.filter(e =>
      e[filter.columnName] === filter.columnValue
    )
  }
})
```

### Value Extraction
- Extracts values from `dataColumn`
- Converts to numbers using `numberFromString` helper
- Filters out non-numeric values

### Formatting
1. **Precision**: `toFixed(roundToPlace)` if roundToPlace >= 0
2. **Locale String**: `toLocaleString('en-US')` if commas enabled
3. **Prefix/Suffix**: Added if `includePrefixSuffix` is true

---

## Responsive Behavior

- Uses `ResizeObserver` to track container size
- Viewport calculation: `getViewport(entry.contentRect.width * 2)`
- Note: Width is doubled because data bites are usually small
- Viewport affects classes via `useDataVizClasses` hook

---

## Markup Variables

Supports dynamic content via markup variables:
- Processed in `biteBody` and `subtext`
- Uses `processMarkupVariables` helper
- Supports `{{variable-name}}` syntax
- Can reference data columns and apply filters

---

## Editor Integration

### Editor Mode
- `isEditor` prop enables editor panel
- Editor panel slides in from left
- Config changes propagate to parent via `setParentConfig`
- Shows confirmation screen if required fields missing

### Required Fields
- `dataColumn` - Must be selected
- `dataFunction` - Must be selected

### Error Handling
- Shows error screen if `config.runtime.editorErrorMessage` is set
- Shows confirmation screen if required fields missing

---

## Integration Points

### Dashboard
- Used in `packages/dashboard/src/components/VisualizationRow.tsx`
- Used in `packages/dashboard/src/components/DashboardEditors.tsx`
- Widget type: `'data-bite'`

### Editor
- Preview component in `packages/editor/src/components/ConfigureTab.tsx`
- Available in visualization chooser

### Core Dependencies
- `@cdc/core/components/Loading`
- `@cdc/core/components/ui/Title`
- `@cdc/core/components/Layout`
- `@cdc/core/helpers/*` - Various utilities

---

## Events

Publishes `cove_loaded` event when:
- Component first mounts (`loadConfigHasRun: true`)
- Config is loaded and container is ready (`config: config`)

---

## Testing

### Test Files
- `packages/data-bite/src/test/CdcDataBite.test.jsx`
- Storybook stories:
  - `packages/data-bite/src/_stories/DataBite.stories.tsx`
  - `packages/data-bite/src/_stories/DataBite.Editor.stories.tsx`

### Test Config
- `packages/data-bite/tests/fixtures/test-config.json`

---

## Key Implementation Details

### State Management
- Uses `useReducer` with `dataBiteReducer`
- State includes: `config`, `loading`, `currentViewport`, `coveLoadedHasRan`, `container`

### Config Loading
- Supports `config` prop or `configUrl` prop
- Fetches remote data if `dataUrl` is provided
- Applies `coveUpdateWorker` for version migration
- Merges with defaults

### Conditional Rendering
- `showBite`: `dataColumn && dataFunction` must be set
- Different layouts based on `biteStyle`
- Image rendering based on `imageData.display` and `biteStyle`
- Gradient style uses separate wrapper

### Performance
- `DataImage` component wrapped in `useCallback`
- `CircleCallout` uses memoization via React
- Editor panel uses `memo()` wrapper

---

## Style Customization Points

### For Style Changes

1. **Theme Colors**: Modify `bite.scss` theme definitions (lines 2-66, 160-224)
2. **Layout Styles**: Modify `.bite-content-container` and `.bite-content` in `bite.scss`
3. **Value Styling**: Modify `.bite-value` (lines 248-252 in bite.scss)
4. **Text Styling**: Modify `.bite-text` and `.bite-subtext` (lines 258-269)
5. **Image Styling**: Modify `.bite-image` (lines 231-236)
6. **Position Layouts**: Modify `.bite-left`, `.bite-right`, `.bite-top`, `.bite-bottom` (lines 277-328)
7. **Split Style**: Modify `.bite__style--split` section (lines 105-117)
8. **Compact Style**: Modify `.bite--isCompactStyle` sections (lines 120-129, 343-352)
9. **Container Background**: Modify `.cove-component__content` (lines 360-368)
10. **Shadow**: Modify `.shadow` class (lines 84-86)

### CSS Variables Used
- `--primary` (and theme variants)
- `--lightestGray`
- `--lightGray`

---

## File Structure

```
packages/data-bite/
├── src/
│   ├── CdcDataBite.tsx          # Main component
│   ├── index.jsx                # Entry point
│   ├── types/
│   │   └── Config.ts            # TypeScript config type
│   ├── data/
│   │   └── initial-state.js     # Default configuration
│   ├── store/
│   │   └── db.reducer.ts        # State reducer
│   ├── components/
│   │   ├── CircleCallout.jsx   # Circular callout component
│   │   ├── GradientBite.jsx     # KPI/gradient component
│   │   └── EditorPanel.jsx      # Configuration panel
│   ├── scss/
│   │   ├── main.scss            # Main stylesheet
│   │   ├── bite.scss            # Core component styles
│   │   ├── editor-panel.scss    # Editor styles
│   │   └── kpi.scss             # Gradient/KPI styles
│   ├── constants.ts             # Constants (styles, positions)
│   ├── context.tsx              # React context
│   └── _stories/                # Storybook stories
├── examples/
│   └── example-config.json      # Example configuration
├── tests/
│   └── fixtures/                # Test fixtures
└── README.md                    # Package README
```

---

## Notes for Style Refactoring

1. **Theme Color Duplication**: Theme color definitions appear twice in `bite.scss` (module level and `.bite` level) - consider consolidating
2. **TODO Comment**: Line 68-70 in `bite.scss` mentions removing header reference colors after v2 refactor
3. **GradientBite vs KPIComponent**: Component exports `KPIComponent` but is named `GradientBite` - naming inconsistency
4. **Responsive Scaling**: Viewport calculation doubles width - ensure this is intentional
5. **Inline Styles**: `biteFontSize` is applied as inline style - consider CSS custom properties
6. **Hardcoded Values**: Some hardcoded colors (#222, rgba values) - consider CSS variables

---

## Summary

The Data Bite component is a flexible, configurable visualization component for displaying single data points. It supports multiple layout styles, themes, image positioning, and data functions. The styling is primarily contained in SCSS files with theme-based color application. Key areas for style changes include the bite.scss file for layout and visual styles, and the component structure allows for extensive customization through configuration.

