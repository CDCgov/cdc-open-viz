# Config Selectors

Typed selector functions and hooks for extracting memoizable slices of chart configuration.

## Purpose

These selectors help:
1. **Reduce coupling** - Components depend on specific config slices, not the entire config object
2. **Improve memoization** - Hooks use specific dependencies instead of the full config
3. **Enhance testability** - Selectors can be easily mocked in tests
4. **Document config usage** - Selectors serve as documentation for which config properties are used together

## Usage

### Direct Selectors

```typescript
import { selectAxisConfig, selectVisualizationConfig } from '../selectors'

// In a component
const axisConfig = selectAxisConfig(config)
// Returns: { xAxis, yAxis, runtime: { xAxis, yAxis, originalXAxis } }
```

### Hook Versions (Memoized)

```typescript
import { useAxisConfig, useVisualizationConfig } from '../selectors'

// In a component - automatically memoized
const axisConfig = useAxisConfig(config)
const vizConfig = useVisualizationConfig(config)
```

## Available Selectors

| Selector | Hook | Description |
|----------|------|-------------|
| `selectAxisConfig` | `useAxisConfig` | X/Y axis configuration |
| `selectVisualizationConfig` | `useVisualizationConfig` | Chart type and orientation |
| `selectDisplayConfig` | `useDisplayConfig` | Animation, debug flags |
| `selectTooltipConfig` | `useTooltipConfig` | Tooltip settings |
| `selectLegendConfig` | - | Legend position and visibility |
| `selectDataFormatConfig` | - | Number formatting options |
| `selectChartMessages` | - | UI message strings |
| `selectBrushConfig` | - | Brush/filter settings |
| `selectForestPlotConfig` | - | Forest plot specific options |
| `selectSmallMultiplesConfig` | - | Small multiples mode |

## Type Exports

Each selector has a corresponding type export:

```typescript
import type { AxisConfig, VisualizationConfig } from '../selectors'
```

## Adding New Selectors

1. Add the selector function that extracts config properties
2. Optionally add a hook version with proper dependencies
3. Export the type using `ReturnType<typeof selectXxx>`
4. Update this README

## Notes

- Selectors are created but integration into LinearChart is deferred
- Future work: gradually replace direct `config.x.y` accesses with selector usage
