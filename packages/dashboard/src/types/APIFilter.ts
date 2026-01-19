type subGroupValues = Partial<Record<'subgroupValueSelector' | 'subgroupTextSelector', string>>

/**
 * Legacy properties that may exist in older configs during migration.
 * These are no longer used but need to be typed for migration code.
 */
type LegacyAPIFilterProperties = {
  /** @deprecated Removed in 4.24.7 - use dashboard-level filterBehavior instead */
  autoLoad?: boolean
  /** @deprecated Removed in 4.24.7 - use filter-level defaultValue instead */
  defaultValue?: string
}

export type APIFilter = Record<'apiEndpoint' | 'valueSelector' | 'textSelector', string> &
  subGroupValues &
  LegacyAPIFilterProperties
