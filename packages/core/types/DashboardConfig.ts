/**
 * Minimal dashboard configuration interface for chart components.
 * Contains only the properties that charts need to know about dashboards.
 */
export interface DashboardConfig {
  /** The type of visualization context, typically 'dashboard' when in dashboard mode */
  type?: string

  /** Dashboard-specific configuration */
  dashboard?: {
    /** Shared filters that apply across dashboard visualizations */
    sharedFilters?: any[]
  }
}
