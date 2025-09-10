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
  | 'hover'
  | 'unknown'
```

## Data Management Events

| EventType | EventAction | EventLabel | Description |
| --------- | ----------- | ---------- | ----------- |
| `data_downloaded` | `click` | `interactionLabel \|\| configUrl` | User downloads data from visualization |
| `data_viewed` | `click` | `interactionLabel` | User views data table or data content |
| `data_table_toggled` | `click` | `interactionLabel` | User expands/collapses data table |
| `link_to_data_table_click\|#data-table-${dataKey}` | `click` | `interactionLabel` | User clicks link to specific data table |

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
| `map_zoomed_in\|zoom_level_${zoom_level}\|${coordinates}` | `click` | `interactionLabel` | User zooms into map |
| `map_zoomed_out\|zoom_level_${zoom_level}\|${coordinates}` | `click` | `interactionLabel` | User zooms out of map |
| `map_reset_zoom_level` | `click` | `interactionLabel` | User resets map zoom to default |
| `map_panned` | `drag` | `interactionLabel` | User drags/pans the map |
| `map_navigation_menu\|${urlString}` | `submit` | `interactionLabel` | User navigates via map menu |

## Legend Events

| EventType | EventAction | EventLabel | Description |
| --------- | ----------- | ---------- | ----------- |
| `map_legend_item_toggled\|isolate-mode\|${item.label}` | `click` \| `keydown` | `interactionLabel` | User toggles map legend item in isolate mode |
| `map_legend_reset` | `click` | `interactionLabel` | User resets map legend selections |
| `chart_legend_item_toggled\|${legend.behavior}-mode\|${label.text}` | `click` \| `keydown` | `interactionLabel` | User toggles chart legend item |
| `chart_legend_reset` | `click` | `interactionLabel` | User resets chart legend selections |

## Filter Events

| EventType | EventAction | EventLabel | Description |
| --------- | ----------- | ---------- | ----------- |
| `${viz_type}_filter_changed\|key_${columnName}\|value_${activeValue}` | `click` | `interactionLabel` | User changes a filter value |
| `${viz_type}_filter_applied` | `click` | `${interactionLabel}\|${filters.map(f => f.active)}` | User applies filter selections |
| `${viz_type}_filter_reset` | `click` | `interactionLabel` | User resets all filters |
| `dashboard_filter_changed\|key_${key}\|value_${value}` | `change` | `interactionLabel` | Dashboard-specific filter change |

## Chart Interaction Events

| EventType | EventAction | EventLabel | Description |
| --------- | ----------- | ---------- | ----------- |
| `chart_hover_${series_name}` | `hover` | `interactionLabel` | User hovers over chart data series (pie chart, line chart, scatter plot) |

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
publishAnalyticsEvent('data_downloaded', 'click', 'My Chart Configuration', undefined, { title: 'Chart Title' })

// Map zoom event with coordinates
publishAnalyticsEvent('map_zoomed_in|zoom_level_3|40.7128,-74.0060', 'click', 'Map Config', 'map', { title: 'Population Map' })

// Filter change event
publishAnalyticsEvent('chart_filter_changed|key_category|value_health', 'click', 'Chart Config', 'chart', { title: 'Health Chart' })

// Dashboard filter change event
publishAnalyticsEvent('dashboard_filter_changed|key_region|value_west', 'change', 'Dashboard Config', 'dashboard', { title: 'Regional Dashboard' })

// Map legend toggle in isolate mode
publishAnalyticsEvent('map_legend_item_toggled|isolate-mode|Population', 'click', 'Map Config', 'map', { title: 'Population Map' })

// Chart legend toggle in highlight mode  
publishAnalyticsEvent('chart_legend_item_toggled|highlight-mode|Data Series 1', 'click', 'Chart Config', 'chart', { title: 'Chart Title' })

// Chart hover event
publishAnalyticsEvent('chart_hover_health_data', 'hover', 'Chart Config', 'chart', { title: 'Health Chart', series: 'Health Data' })

// Data table sorting
publishAnalyticsEvent('data_table_sort_by|population|asc', 'click', 'Chart Config', 'chart', { title: 'Population Chart' })

// Link to data table click
publishAnalyticsEvent('link_to_data_table_click|#data-table-health_data', 'click', 'Dashboard Config', 'dashboard', { title: 'Health Dashboard' })

// Map navigation menu
publishAnalyticsEvent('map_navigation_menu|https://example.com/state/california', 'submit', 'Map Config', 'map', { title: 'State Map' })
```

## Event Label Patterns

Event labels follow these common patterns:

1. **Simple labels:** `interactionLabel` or `configUrl`
2. **Compound labels:** `${interactionLabel}|${additionalInfo}`
3. **Multi-value labels:** `${interactionLabel}|${value1}|${value2}`
4. **Filter labels:** Event type includes filter data: `${viz_type}_filter_changed|key_${filterKey}|value_${filterValue}`
5. **Array labels:** `${interactionLabel}|${array.join(',')}`
6. **Zoom event labels:** Event type includes zoom data: `map_zoomed_in|zoom_level_${level}|${coordinates}`
7. **Data table link labels:** Event type includes anchor: `link_to_data_table_click|#data-table-${dataKey}`
8. **Legend toggle labels:** Event type includes mode and item: `map_legend_item_toggled|isolate-mode|${item.label}`, `chart_legend_item_toggled|highlight-mode|${label.text}`
9. **Navigation menu labels:** Event type includes URL: `map_navigation_menu|${urlString}`

## Template Event Types

Several event types use template literals with visualization types:

- `${viz_type}_filter_reset` - where `viz_type` can be any visualization type
- `${viz_type}_filter_applied` - applies to all visualization types
- `${viz_type}_filter_changed` - applies to all visualization types
- `${viz_type}_image_downloaded` - applies to all visualization types
- `${viz_type}_legend_item_toggled|${mode}-mode|${item_label}` - where `mode` is `highlight` or `isolate`, and item_label is the legend item text
- `${viz_type}_legend_reset` - applies to visualizations with legends
- `${viz_type}_loaded` - fired when any visualization loads
- `${viz_type}_hover_${series_name}` - fired when user hovers over chart data series

## Performance Considerations

Hover events are tracked to understand user interaction patterns but should be used thoughtfully:

- **Chart Hover Events**: Only fire when hovering over a new series (not on every mouse movement)
- **Event Throttling**: Hover events include basic throttling to prevent excessive analytics traffic
- **Metadata**: All events include contextual metadata like `title` and `series` information for better analysis

## Notes

- The `interactionLabel` is derived from the config url path
- All events include visualization type, version, and additional metadata automatically (including `title` when available)
- Event actions follow standard user interaction patterns (click, drag, toggle, load, hover, etc.)
- Legend toggle modes are either 'highlight' or 'isolate' based on legend behavior
- Hover events are automatically generated for chart series interactions and include series metadata
- Event labels use pipe (`|`) separation for compound values (e.g., `config|key_filter|value_health`)
