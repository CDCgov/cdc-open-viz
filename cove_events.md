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

## Data Specific Events

| EventType                                                          | EventAction         | EventLabel  |
| ------------------------------------------------------------------ | ------------------- | ----------- |
| `data_downloaded`                                                  | `See Event Actions` | `configUrl` |
| `data_table_toggled`                                               | `See Event Actions` | ..          |
| `data_viewed`                                                      | `See Event Actions` | ..          |
| `data_table_sort_by\|${string}\|${'asc' \| 'desc' \| 'undefined'}` | `See Event Actions` | ..          |
| `link_to_data_table_click`                                         | `See Event Actions` | ..          |
|                                                                    |                     |             |

## Visualization-Specific Events

| EventType                                       | EventAction         | EventLabel                                  |
| ----------------------------------------------- | ------------------- | ------------------------------------------- |
| `${viz_type}_filter_reset`                      | `See Event Actions` | `configUrl`                                 |
| `${viz_type}_filter_applied`                    | `See Event Actions` | `configUrl|filter_val_1,filter_val2`        |
| `${viz_type}_filter_changed`                    | `See Event Actions` | `configUrl|key_filterKey|value_filterValue` |
| `${viz_type}_image_downloaded`                  | `See Event Actions` | `configUrl`                                 |
| `${viz_type}_legend_item_toggled--${mode}-mode` | `See Event Actions` | `configUrl|legend-item-text`                |
| `${viz_type}_legend_reset`                      | `See Event Actions` | `configUrl`                                 |
| `${viz_type}_loaded`                            | `See Event Actions` | `configUrl`                                 |
| `${viz_type}_navigation_menu`                   | `See Event Actions` | `${configUrl}|${urlString}`                 |
| `${viz_type}_panned`                            | `See Event Actions` | `configUrl`                                 |
| `${viz_type}_reset_zoom_level`                  | `See Event Actions` | `configUrl`                                 |
| `${viz_type}_zoomed_in`                         | `See Event Actions` | `configUrl|zoom_level|zoom_location`        |
| `${viz_type}_zoomed_out`                        | `See Event Actions` | `configUrl|zoom_level|zoom_location`        |
|                                                 |                     |                                             |


## Legend Toggle Modes
- `highlight`
- `isolate`

## Usage Example

```typescript
publishAnalyticsEvent('data_downloaded', 'click', '/path/to/config.json')
```
