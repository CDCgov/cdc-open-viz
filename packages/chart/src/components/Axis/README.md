# Axis Components

This folder contains extracted axis components from `LinearChart.tsx` to improve maintainability and reduce complexity.

## Components

### LeftAxis
**File:** `LeftAxis.tsx`

Renders the left (Y) axis for vertical charts. Handles:
- Tick formatting and positioning
- Labels above gridlines option
- Inline label (suffix) display
- Forest plot special rendering

**Props:**
- `yScale` - D3 scale for Y axis
- `xScale` - D3 scale for X axis
- `yMax`, `xMax` - Chart dimensions
- `yAxisWidth` - Width allocated for Y axis
- `numTicks` - Number of ticks to display
- `handleLeftTickFormatting` - Tick format function

### LeftAxisGridlines
**File:** `LeftAxisGridlines.tsx`

Renders horizontal gridlines separately from the axis itself. This separation allows gridlines to be drawn behind the visualization while the axis is drawn on top.

### BottomAxis
**File:** `BottomAxis.tsx`

Renders the bottom (X) axis. Handles:
- Date/time formatting
- Tick rotation for responsive layouts
- Manual step configuration
- Brush integration

**Props:**
- `xScale` - D3 scale for X axis
- `yMax` - Chart height
- `xTickCount` - Number of ticks
- `handleBottomTickFormatting` - Tick format function
- `useDateSpanMonths` - Date range calculation flag

### PairedBarAxis
**File:** `PairedBarAxis.tsx`

Specialized axis for Paired Bar charts with two mirrored AxisBottom components. Handles:
- Dual scale rendering (g1xScale, g2xScale)
- Responsive tick rotation
- Tick overlap detection

### RightAxis
**File:** `RightAxis.tsx`

Renders the right (Y) axis for dual-axis charts. Handles:
- Secondary Y scale
- Configurable tick/label colors
- Optional gridlines from right axis

### CategoricalYAxis
**File:** `Categorical.Axis.tsx`

Specialized Y axis for categorical data types.

## Constants
**File:** `axis.constants.ts`

Shared constants used across axis components.

## Usage

All components are exported from `index.ts`:

```tsx
import {
  LeftAxis,
  LeftAxisGridlines,
  BottomAxis,
  PairedBarAxis,
  RightAxis,
  CategoricalYAxis
} from './Axis'
```

## Architecture Notes

These components were extracted from `LinearChart.tsx` as part of a refactoring effort to:
1. Reduce the main component from 1,704 to ~845 lines
2. Improve testability through smaller, focused components
3. Enable reuse across different chart types
4. Simplify maintenance and debugging

Each component accesses the `ConfigContext` for chart configuration rather than receiving all config as props, keeping the prop interfaces focused on rendering-specific data.
