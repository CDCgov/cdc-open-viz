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

export type LEGEND_TOGGLE_MODES = 'highlight' | 'isolate'

export type ANALYTICS_EVENT_TYPES =
  | 'data_downloaded'
  | 'data_table_toggled' // expand/collapse
  | 'data_viewed'
  | `${COVE_VISUALIZATION_TYPES}_filter_reset`
  | `${COVE_VISUALIZATION_TYPES}_filter_applied`
  | `${COVE_VISUALIZATION_TYPES}_filter_changed`
  | `${COVE_VISUALIZATION_TYPES}_image_downloaded`
  | `${COVE_VISUALIZATION_TYPES}_legend_item_toggled--${LEGEND_TOGGLE_MODES}-mode`
  | `${COVE_VISUALIZATION_TYPES}_legend_reset`
  | `${COVE_VISUALIZATION_TYPES}_loaded`
  | `${COVE_VISUALIZATION_TYPES}_navigation_menu`
  | `${COVE_VISUALIZATION_TYPES}_panned`
  | `${COVE_VISUALIZATION_TYPES}_reset_zoom_level`
  | `${COVE_VISUALIZATION_TYPES}_zoomed_in`
  | `${COVE_VISUALIZATION_TYPES}_zoomed_out`
  | `${COVE_VISUALIZATION_TYPES}_hover_${string}`
  | `data_table_sort_by|${string}|${'asc' | 'desc' | 'undefined'}`
  | 'link_to_data_table_click'
