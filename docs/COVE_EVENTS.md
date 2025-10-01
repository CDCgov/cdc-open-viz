# COVE Analytics/Metrics Events Documentation

## Overview

The COVE (CDC Open Visualization Environment) analytics system tracks user interactions across data visualization components. Events are automatically formatted and published to provide insights into user behavior and system usage.

## Event Format

All events use a standardized pipe-delimited format:

```
APP|VIZTYPE_VIZSUBTYPE|VIZ_TITLE|EVENT_TYPE|EVENT_ACTION|SPECIFICS
```

**Example Output:**
```
cove|map_us-county|Population Map|map_zoomed_in|click|zoom_level: 1.5, location: 40.71,-74.01
```

## Function Usage

Import and use the analytics function:

```typescript
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'

publishAnalyticsEvent({
  vizType: 'map',           // Required: Visualization type
  eventType: 'map_ready',   // Required: Event being tracked
  eventAction: 'load',      // Optional: User action (default: 'unknown')
  eventLabel: configUrl,    // Optional: Typically config URL
  vizTitle: config?.title,  // Optional: Visualization title
  specifics: 'additional details' // Optional: Extra context
})
```

## Parameters

| Parameter | Required | Type | Default | Description |
|-----------|----------|------|---------|-------------|
| `vizType` | ✓ | `COVE_VISUALIZATION_TYPES` | - | Visualization type |
| `eventType` | ✓ | `ANALYTICS_EVENT_TYPES` | - | Specific event |
| `eventAction` | | `ANALYTICS_EVENT_ACTIONS` | `'unknown'` | User action type |
| `app` | | `string` | `'cove'` | Application name |
| `vizSubType` | | `string` | - | Visualization subtype |
| `vizTitle` | | `string` | `'unknown'` | Visualization title |
| `eventLabel` | | `string` | - | Event label (config URL) |
| `specifics` | | `string` | `'no details'` | Additional context |
| `version` | | `string` | package.json | Package version |

## Event Types Reference

### Visualization Lifecycle
```
// When visualizations finish loading
cove|{vizType}|{title}|{vizType}_ready|load|no details

// Examples:
cove|map|Population Map|map_ready|load|no details
cove|chart|Sales Chart|chart_ready|load|no details
cove|dashboard|Health Dashboard|dashboard_ready|load|no details
cove|data-bite|Key Metric|data-bite_ready|load|no details
```

### Data Management
```
// User downloads data
cove|{vizType}|{title}|data_downloaded|click|no details

// User views data
cove|{vizType}|{title}|data_viewed|click|no details

// User toggles data table
cove|{vizType}|{title}|expand_collapse_toggled|click|no details

// User clicks external data link
cove|{vizType}|{title}|clicked_data_link_to_view|click|no details

// User clicks data table link
cove|{vizType}|{title}|link_to_data_table_click|click|no details
```

### Data Tables
```
// User sorts table column
cove|{vizType}|{title}|data_table_sort|click|column: population, order: asc
```

### Filters
```
// Filter value changed
cove|{vizType}|{title}|{vizType}_filter_changed|change|key: state, value: california

// Filters applied
cove|{vizType}|{title}|{vizType}_filter_applied|click|california,2023,health

// All filters reset
cove|{vizType}|{title}|{vizType}_filter_reset|click|no details

// Examples:
cove|map|Population Map|map_filter_changed|change|key: year, value: 2023
cove|chart|Sales Chart|chart_filter_applied|click|Q1,Q2,Q3
cove|dashboard|Health Dashboard|dashboard_filter_reset|click|no details
```

### Map Interactions
```
// User zooms in
cove|map_us-state|Population Map|map_zoomed_in|click|zoom_level: 1.5, location: 40.71,-74.01

// User zooms out
cove|map_us-state|Population Map|map_zoomed_out|click|zoom_level: 0.8, location: 40.71,-74.01

// User resets zoom
cove|map|Population Map|map_reset_zoom_level|click|no details

// User pans/drags map
cove|map|Population Map|map_panned|drag|no details

// User hovers over location
cove|map|State Map|map_hover|hover|location: california

// User navigates via menu
cove|map|State Map|map_navigation_menu|submit|no details
```

### Legend Interactions
```
// User toggles legend item
cove|{vizType}|{title}|{vizType}_legend_item_toggled|click|mode: highlight, item: Population

// User resets legend
cove|{vizType}|{title}|{vizType}_legend_reset|click|no details

// Examples:
cove|map|Population Map|map_legend_item_toggled|click|mode: isolate, item: High Risk
cove|chart|Sales Chart|chart_legend_item_toggled|keydown|mode: highlight, item: Q1 Sales
cove|chart|Revenue Chart|chart_legend_reset|click|no details
```

### Chart Interactions
```
// User hovers over chart data
cove|chart_line|Revenue Chart|chart_hover|hover|series: Q1 Revenue
cove|chart_bar|Sales Chart|chart_hover|hover|series: Regional Sales
```

### Image Downloads
```
// User downloads visualization image
cove|map|Population Map|image_download|click|no details
cove|chart|Sales Chart|image_download|click|no details
```

## Supported Types

### Visualization Types
```typescript
type COVE_VISUALIZATION_TYPES =
  | 'map'
  | 'chart'
  | 'data-table'
  | 'markup-include'
  | 'waffle-chart'
  | 'dashboard'
  | 'filtered-text'
  | 'table-filter'
  | 'data-bite'
  | 'unknown'
```

### Event Actions
```typescript
type ANALYTICS_EVENT_ACTIONS =
  | 'click'
  | 'drag'
  | 'hover'
  | 'load'
  | 'change'
  | 'submit'
  | 'keydown'
  | 'toggle'
  | 'none'
  | 'unknown'
```

## Common Usage Patterns

### Visualization Ready
```typescript
publishAnalyticsEvent({
  vizType: 'chart',
  eventType: 'chart_ready',
  eventAction: 'load',
  eventLabel: interactionLabel,
  vizTitle: config?.title
})
```

### Filter Changes
```typescript
publishAnalyticsEvent({
  vizType: 'dashboard',
  eventType: 'dashboard_filter_changed',
  eventAction: 'change',
  eventLabel: interactionLabel,
  vizTitle: config?.title,
  specifics: `key: ${filterKey}, value: ${filterValue}`
})
```

### Map Zoom
```typescript
publishAnalyticsEvent({
  vizType: 'map',
  vizSubType: 'us-state',
  eventType: 'map_zoomed_in',
  eventAction: 'click',
  eventLabel: interactionLabel,
  vizTitle: config?.title,
  specifics: `zoom_level: ${zoomLevel}, location: ${coordinates}`
})
```

### Legend Toggle
```typescript
publishAnalyticsEvent({
  vizType: 'chart',
  eventType: 'chart_legend_item_toggled',
  eventAction: 'click',
  eventLabel: interactionLabel,
  vizTitle: config?.title,
  specifics: `mode: ${legendMode}, item: ${itemText}`
})
```

### Data Table Sort
```typescript
publishAnalyticsEvent({
  vizType: 'chart',
  eventType: 'data_table_sort',
  eventAction: 'click',
  eventLabel: interactionLabel,
  vizTitle: config?.title,
  specifics: `column: ${columnName}, order: ${sortOrder}`
})
```

## Output Examples

```
cove|map_us-county|Population Map|map_ready|load|no details
cove|dashboard|Health Dashboard|dashboard_filter_changed|change|key: state, value: california
cove|chart_bar|Sales Chart|chart_legend_item_toggled|click|mode: highlight, item: Q1 Sales
cove|map|State Map|map_hover|hover|location: california
cove|chart|Population Chart|data_table_sort|click|column: population, order: asc
```

## Implementation Notes

- Events are published to the `cove:analytics` channel via the `publish` function
- The `interactionLabel` parameter typically contains the configuration URL path
- Location names in map events are sanitized (special characters replaced with underscores)
- All events automatically include visualization metadata like title and package version
- Use `specifics` for structured additional context following the pattern: `key: value, key2: value2`


