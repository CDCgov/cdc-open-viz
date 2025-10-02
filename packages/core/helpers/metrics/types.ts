export type COVE_VISUALIZATION_TYPES =
  | 'map'
  | 'chart'
  | 'data-table'
  | 'table'
  | 'markup-include'
  | 'waffle-chart'
  | 'dashboard'
  | 'filtered-text'
  | 'table-filter'
  | 'data-bite'
  | 'navigation'
  | 'unknown'

export type ANALYTICS_EVENT_ACTIONS =
  | 'click'
  | 'drag'
  | 'toggle'
  | 'none'
  | 'keydown'
  | 'keyboard'
  | 'load'
  | 'submit'
  | 'change'
  | 'hover'
  | 'unknown'

export type LEGEND_TOGGLE_MODES = 'highlight' | 'isolate'

/**
 * Type-safe specifics for different event types
 * The specifics field should contain structured key-value pairs formatted as strings
 * Format: "key1: value1, key2: value2"
 */
export type EventSpecifics = {
  // Map events
  map_hover: `location: ${string}`
  zoom_in: `zoom_level: ${number}` | `location: ${string}` | `zoom_level: ${number}, location: ${string}`
  zoom_out: `zoom_level: ${number}` | `location: ${string}` | `zoom_level: ${number}, location: ${string}`

  // Legend events
  map_legend_item_toggled: `mode: ${LEGEND_TOGGLE_MODES}` | `mode: ${LEGEND_TOGGLE_MODES}, item: ${string}`
  chart_legend_item_toggled: `mode: ${LEGEND_TOGGLE_MODES}` | `mode: ${LEGEND_TOGGLE_MODES}, item: ${string}`

  // Table events
  data_table_sort: `column: ${string}, order: ${'asc' | 'desc' | 'none'}`

  // Filter events
  dashboard_filter_changed: `key: ${string}, value: ${string}`

  // Generic fallback for any event
  [key: string]: string
}

export type ANALYTICS_EVENT_TYPES =
  // Data actions
  | 'data_downloaded'
  | 'expand_collapse_toggled' // alternative name for data_table_toggled
  | 'data_table_sort'
  | 'data_viewed'
  | 'clicked_data_link_to_view'
  | 'link_to_data_table_click'

  // Filter events
  | `${COVE_VISUALIZATION_TYPES}_filter_reset`
  | `${COVE_VISUALIZATION_TYPES}_filter_applied`
  | `${COVE_VISUALIZATION_TYPES}_filter_changed`

  // Legend events
  | `${COVE_VISUALIZATION_TYPES}_legend_item_toggled` // simplified with specifics for mode
  | `${COVE_VISUALIZATION_TYPES}_legend_reset`

  // Map-specific events
  | `${COVE_VISUALIZATION_TYPES}_hover` // simplified with specifics for location
  | `${COVE_VISUALIZATION_TYPES}_panned`
  | `${COVE_VISUALIZATION_TYPES}_reset_zoom_level`
  | `zoom_in` // simplified with specifics for zoom level and location
  | `zoom_out` // simplified with specifics for zoom level and location
  | `${COVE_VISUALIZATION_TYPES}_navigation_menu`

  // Image/export events
  | 'image_download' // generic image download event
