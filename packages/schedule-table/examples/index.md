# Schedule Table Examples

This directory contains example configurations for the `@cdc/schedule-table` component.

## Available Examples

### vaccine-schedule.json

A comprehensive example of an adult immunization schedule demonstrating:

- **Matrix Configuration**: Maps vaccines (rows) to age groups (columns) with color-coded recommendations
- **Multiple Recommendation Categories**:
  - Recommended (yellow/amber)
  - Risk-based (purple)
  - Shared clinical decision (blue)
  - No guidance (gray)
- **Custom Symbols**: Each recommendation category has a unique symbol (■, ●, ▲)
- **Display Text**: Shows specific dosing information in cells
- **External Notes Links**: Links to CDC vaccine information pages
- **Legend**: Top-positioned legend explaining recommendation categories
- **Footnotes**: Additional context and guidance notes
- **Sticky Headers**: Enables sticky column headers for easier navigation

**Data Structure**: Long-format data with one row per vaccine-age group combination

**Use Case**: Ideal for creating vaccine schedules, screening guidelines, or any age-based recommendation matrix

## Usage

Import the example configuration in your application:

```javascript
import exampleConfig from '@cdc/schedule-table/examples/vaccine-schedule.json'
import CdcScheduleTable from '@cdc/schedule-table'

function App() {
  return <CdcScheduleTable config={exampleConfig} />
}
```

Or reference it via URL:

```javascript
<CdcScheduleTable configUrl="/path/to/vaccine-schedule.json" />
```

## Configuration Keys

All examples follow the schedule table configuration schema defined in `src/types/Config.ts`:

- `type`: Always "schedule-table"
- `title`: Table title
- `matrix`: Defines how data maps to rows/columns/values
- `columnOrder`: Array defining column order (left to right)
- `recommendations`: Array of recommendation categories with colors and labels
- `table`: Table display settings (legend, sticky headers, etc.)
- `data`: Long-format data array
- `footnotes`: Optional array of footnotes
- `general`: Optional general display settings

## Creating New Examples

When adding new examples to this directory:

1. Use descriptive filenames (e.g., `pediatric-schedule.json`, `screening-guidelines.json`)
2. Include all required configuration keys
3. Ensure data is in long format (one row per matrix cell)
4. Define all recommendation categories used in the data
5. Update this index with a description of your example
