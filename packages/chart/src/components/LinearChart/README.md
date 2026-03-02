# LinearChart

The main component for rendering linear visualizations (line charts, bar charts, area charts, etc.).

## File Structure

```
LinearChart/
├── README.md                    # This file
├── linearChart.constants.ts     # Shared constants and visualization type definitions
├── VisualizationRenderer.tsx    # Renders the appropriate chart type
├── utils/
│   └── tickFormatting.ts        # Consolidated tick formatting logic (useTickFormatters hook)
└── tests/
    ├── LinearChart.test.tsx     # Component tests
    └── mockConfigContext.ts     # Test utilities
```

## Main Component

**File:** `../LinearChart.tsx` (parent directory)

The main LinearChart component orchestrates all the sub-components and handles:
- Scale calculations (via `useScales` hook)
- Tooltip management
- Brush/zoom functionality
- Animation state
- Small multiples delegation

## Sub-Components

### VisualizationRenderer
**File:** `VisualizationRenderer.tsx`

A switch component that renders the appropriate visualization based on `visualizationType`:
- Area Chart (stacked)
- Bar Chart
- Line Chart
- Combo Chart
- Scatter Plot
- Box Plot
- Deviation Bar
- Bump Chart
- Forest Plot
- Paired Bar
- Spark Line
- Warming Stripes

### Tick Formatting
**File:** `utils/tickFormatting.ts`

The `useTickFormatters` hook provides consolidated tick formatting for both axes:
- `handleLeftTickFormatting` - Y-axis tick formatting
- `handleBottomTickFormatting` - X-axis tick formatting

Handles special cases:
- Logarithmic scales
- Forest plot data keys
- Date formatting
- Number abbreviation

## Constants
**File:** `linearChart.constants.ts`

```typescript
// Visualization type string constants
VISUALIZATION_TYPES

// Types that don't show grid lines
TYPES_WITHOUT_GRID: ['Spark Line', 'Forest Plot', 'Warming Stripes']

// Types excluded from standard line chart rendering
LINE_CHART_EXCLUDED_TYPES

// Types that show tooltip guide lines
TYPES_WITH_TOOLTIP_GUIDES
```

## Related Components

Axis components are in `../Axis/`:
- `LeftAxis` - Y-axis rendering
- `BottomAxis` - X-axis rendering
- `RightAxis` - Secondary Y-axis (dual-axis charts)
- `PairedBarAxis` - Specialized axis for paired bar charts

## Context Dependencies

LinearChart uses `ConfigContext` for:
- `config` - Full chart configuration
- `formatDate`, `formatNumber` - Formatting functions
- `parseDate` - Date parsing
- `transformedData` - Processed chart data
- `currentViewport` - Responsive breakpoint

## Testing

Run tests with:
```bash
vitest packages/chart/src/components/LinearChart/tests/
```

## Refactoring History

This component was refactored from 1,704 lines to ~845 lines by extracting:
1. Axis components to `../Axis/`
2. VisualizationRenderer to handle chart type switching
3. Tick formatting to `utils/tickFormatting.ts`
4. Constants to `linearChart.constants.ts`
