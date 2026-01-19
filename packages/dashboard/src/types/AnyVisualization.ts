import { ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import { MapConfig } from '@cdc/map/src/types/MapConfig'
import { DataTableConfig } from '@cdc/data-table/src/types/DataTableConfig'
import { DataBiteConfig } from '@cdc/data-bite/src/types/DataBiteConfig'
import { WaffleChartConfig } from '@cdc/waffle-chart/src/types/WaffleChartConfig'
import { MarkupIncludeConfig } from '@cdc/core/types/MarkupInclude'
import { FilteredTextConfig } from '@cdc/filtered-text/src/types/FilteredTextConfig'
import { DashboardFilters } from './DashboardFilters'
import { Visualization } from '@cdc/core/types/Visualization'

/**
 * Union type representing any visualization configuration.
 * Use this when you need to handle multiple visualization types.
 * Prefer specific config types when you know the visualization type.
 *
 * This type lives in the dashboard package to avoid circular dependencies,
 * since it imports from all visualization packages.
 */
export type AnyVisualization =
  | ChartConfig
  | MapConfig
  | DataTableConfig
  | DataBiteConfig
  | WaffleChartConfig
  | MarkupIncludeConfig
  | FilteredTextConfig
  | DashboardFilters
  | Visualization // Keep deprecated type for backwards compatibility during migration
