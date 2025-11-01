import { BaseVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import { Series } from '@cdc/core/types/Series'
import { Runtime } from '@cdc/core/types/Runtime'
import { DataSet } from '@cdc/core/types/DataSet'
import { ConfigRow } from './ConfigRow'
import { Table } from '@cdc/core/types/Table'
import { Dashboard } from './Dashboard'

/**
 * Configuration interface for Dashboard visualizations.
 *
 * Dashboards are composite visualizations that contain multiple individual
 * visualizations (charts, maps, data bites, etc.) arranged in a responsive
 * grid layout with shared filtering capabilities.
 *
 * @extends BaseVisualizationConfig
 */
export interface DashboardConfig extends BaseVisualizationConfig {
  // Override base properties to be more specific
  /** Dashboard visualization type identifier */
  type: 'dashboard'

  // Dashboard-specific properties
  /** Dashboard-level configuration including shared filters and layout settings */
  dashboard: Dashboard

  /** Configuration for confidence intervals used across visualizations */
  confidenceKeys: Record<string, any>

  /**
   * Collection of individual visualizations contained within the dashboard.
   * Each visualization is keyed by a unique identifier and contains its own configuration.
   * Using any type to avoid circular dependency issues during migration.
   */
  visualizations: Record<string, any>

  /** Series configuration for chart-based visualizations within the dashboard */
  series: Series

  /**
   * Data sources available to dashboard visualizations.
   * Each dataset is keyed by name and contains data loading configuration.
   */
  datasets: Record<string, DataSet>

  /** Table display and formatting configuration for tabular data views */
  table: Table

  /**
   * Layout configuration defining the responsive grid structure.
   * Each row contains columns that house individual visualizations.
   */
  rows: ConfigRow[]

  /** Runtime state and configuration for dynamic dashboard behavior */
  runtime: Runtime

  /** Whether to show the download image button in the dashboard toolbar */
  downloadImageButton: boolean

  /** Whether to show the download PDF button in the dashboard toolbar */
  downloadPdfButton: boolean
}
