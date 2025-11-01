import { BaseVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import { Column } from '@cdc/core/types/Column'
import { FilterBehavior } from '@cdc/core/types/FilterBehavior'
import { Table } from '@cdc/core/types/Table'

type DataFormat = {
  abbreviated: boolean
  commas: boolean
  prefix: string
  roundTo: number
  suffix: string
}

/**
 * Configuration interface for Data Table visualizations.
 * Extends BaseVisualizationConfig with data-table-specific properties.
 */
export interface DataTableConfig extends BaseVisualizationConfig {
  // Override base properties to be more specific
  type: 'table'
  data: Object[] // Make data required for data tables

  // Data Table specific properties
  columns?: Record<string, Column>
  dataFormat?: DataFormat
  filterBehavior?: FilterBehavior
  filterIntro?: string
  table: Table
  visualizationType: 'Table'
}
