# Analytics Events Documentation

## Overview

This system tracks user interactions across various data visualization components in the COVE (Data Visualization) platform. Events are categorized by visualization type, user action, and specific interaction patterns.

## Visualization Types
The following visualization types are supported across various events
```.ts
export type COVE_VISUALIZATION_TYPES =
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

## Event Actions
```.ts
export type ANALYTICS_EVENT_ACTIONS =
  | 'click'
  | 'drag'
  | 'toggle'
  | 'none'
  | 'keydown'
  | 'load'
  | 'submit'
  | 'change'
  | 'unknown'
```

## Data Management Events

| EventType | EventAction | EventLabel | Description |
| --------- | ----------- | ---------- | ----------- |
| `data_downloaded` | `click` | `interactionLabel \|\| configUrl` | User downloads data from visualization |
| `data_viewed` | `click` | `interactionLabel` | User views data table or data content |
| `data_table_toggled` | `click` | `interactionLabel` | User expands/collapses data table |
| `link_to_data_table_click` | `click` | `interactionLabel\|#data-table-${dataKey}` | User clicks link to specific data table |

## Data Table Sorting Events

| EventType | EventAction | EventLabel | Description |
| --------- | ----------- | ---------- | ----------- |
| `data_table_sort_by\|${column}\|${sortOrder}` | `click` | `interactionLabel` | User sorts data table by column (asc/desc/undefined) |

## Visualization Load Events

| EventType | EventAction | EventLabel | Visualization Type | Description |
| --------- | ----------- | ---------- | ------------------ | ----------- |
| `map_loaded` | `load` | `interactionLabel` | `map` | Map visualization has loaded |
| `chart_loaded` | `load` | `interactionLabel` | `chart` | Chart visualization has loaded |
| `dashboard_loaded` | `load` | `interactionLabel` | `dashboard` | Dashboard has loaded |
| `markup-include_loaded` | `load` | `interactionLabel` | `markup-include` | Markup include component has loaded |
| `waffle-chart_loaded` | `load` | `interactionLabel` | `waffle-chart` | Waffle chart has loaded |
| `data-bite_loaded` | `load` | `interactionLabel` | `data-bite` | Data bite component has loaded |

## Map-Specific Events

| EventType | EventAction | EventLabel | Description |
| --------- | ----------- | ---------- | ----------- |
| `map_zoomed_in` | `click` | `${interactionLabel}\|${zoom}\|${coordinates}` | User zooms into map |
| `map_zoomed_out` | `click` | `${interactionLabel}\|${zoom}\|${coordinates}` | User zooms out of map |
| `map_reset_zoom_level` | `click` | `interactionLabel` | User resets map zoom to default |
| `map_panned` | `drag` | `interactionLabel` | User drags/pans the map |
| `map_navigation_menu` | `submit` | `${interactionLabel}\|${urlString}` | User navigates via map menu |

## Legend Events

| EventType | EventAction | EventLabel | Description |
| --------- | ----------- | ---------- | ----------- |
| `map_legend_item_toggled--isolate-mode` | `click` \| `keydown` | `${interactionLabel}\|${item.label}` | User toggles map legend item in isolate mode |
| `map_legend_reset` | `click` | `interactionLabel` | User resets map legend selections |
| `chart_legend_item_toggled--${legend.behavior}-mode` | `click` \| `keydown` | `${interactionLabel}\|${label.text}` | User toggles chart legend item |
| `chart_legend_reset` | `click` | `interactionLabel` | User resets chart legend selections |

## Filter Events

| EventType | EventAction | EventLabel | Description |
| --------- | ----------- | ---------- | ----------- |
| `${viz_type}_filter_changed` | `click` | `${interactionLabel}\|key_${columnName}\|value_${activeValue}` | User changes a filter value |
| `${viz_type}_filter_applied` | `click` | `${interactionLabel}\|${filters.map(f => f.active)}` | User applies filter selections |
| `${viz_type}_filter_reset` | `click` | `interactionLabel` | User resets all filters |
| `dashboard_filter_changed` | `change` | `${interactionLabel}\|key_${key}\|value_${value}` | Dashboard-specific filter change |

## Image Download Events

| EventType | EventAction | EventLabel | Description |
| --------- | ----------- | ---------- | ----------- |
| `${viz_type}_image_downloaded` | `click` | `interactionLabel` | User downloads visualization as image |


## Legend Toggle Modes
- `highlight`
- `isolate`

## Publisher Function

All events are published using the main function from `@cdc/core/helpers/metrics`:

```typescript
export const publishAnalyticsEvent = <T extends ANALYTICS_EVENT_TYPES>(
  eventType: T,
  eventAction: ANALYTICS_EVENT_ACTIONS = 'unknown',
  eventLabel: GetLabelForEvent<T>,
  visualizationType?: COVE_VISUALIZATION_TYPES,
  additionalDetails?: Object
) => {
  // Publishes to 'cove:analytics' event channel
  return publish('cove:analytics', {
    eventType,
    eventAction,
    eventLabel,
    component: visualizationType || 'unknown',
    version: getPackageVersion() || 'unknown',
    ...(additionalDetails || {})
  })
}
```

## Usage Examples

```typescript
// Simple data download event
publishAnalyticsEvent('data_downloaded', 'click', 'My Chart Configuration')

// Map zoom event with coordinates
publishAnalyticsEvent('map_zoomed_in', 'click', 'Map Config|3.5|40.7128,-74.0060')

// Filter change event
publishAnalyticsEvent('chart_filter_changed', 'click', 'Chart Config|key_category|value_health')

// Legend toggle in isolate mode
publishAnalyticsEvent('chart_legend_item_toggled--isolate-mode', 'click', 'Chart Config|Data Series 1')
```

## Event Label Patterns

Event labels follow these common patterns:

1. **Simple labels:** `interactionLabel` or `configUrl`
2. **Compound labels:** `${interactionLabel}|${additionalInfo}`
3. **Multi-value labels:** `${interactionLabel}|${value1}|${value2}`
4. **Filter labels:** `${interactionLabel}|key_${filterKey}|value_${filterValue}`
5. **Array labels:** `${interactionLabel}|${array.join(',')}`

## Template Event Types

Several event types use template literals with visualization types:

- `${viz_type}_filter_reset` - where `viz_type` can be any visualization type
- `${viz_type}_filter_applied` - applies to all visualization types
- `${viz_type}_filter_changed` - applies to all visualization types
- `${viz_type}_image_downloaded` - applies to all visualization types
- `${viz_type}_legend_item_toggled--${mode}-mode` - where `mode` is `highlight` or `isolate`
- `${viz_type}_legend_reset` - applies to visualizations with legends
- `${viz_type}_loaded` - fired when any visualization loads

## Notes

- The `interactionLabel` is typically derived from the configuration or component settings
- All events include visualization type, version, and additional metadata automatically
- Event actions follow standard user interaction patterns (click, drag, toggle, load, etc.)
- Legend toggle modes are either 'highlight' or 'isolate' based on legend behavior
