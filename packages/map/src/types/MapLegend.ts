/**
 * Map-specific legend configuration types
 */

/**
 * Individual legend shape item configuration
 * Defines conditional styling based on data column values
 */
export type LegendShapeItem = {
  /** Column to evaluate for this shape rule */
  column: string
  /** Unique key for this shape item */
  key: string
  /** Comparison operator for the condition */
  operator: '=' | '≠' | '<' | '>' | '<=' | '>='
  /** Shape to display when condition is met */
  shape: string
  /** Value to compare against */
  value: string
}

/**
 * Grouping configuration for legend shapes
 * Allows organizing multiple shape items under a single legend section
 */
export type LegendGrouping = {
  /** Title for this legend group */
  legendTitle: string
  /** Description text for this legend group */
  legendDescription: string
  /** Collection of shape items in this group */
  items: LegendShapeItem[]
}

/**
 * Map legend configuration
 * Controls the appearance and behavior of the map legend
 */
export type MapLegend = {
  /** Additional categories to display in legend */
  additionalCategories: any
  /** Order for category values */
  categoryValuesOrder: any
  /** General description for the legend */
  description: any
  /** Detailed descriptions for legend items */
  descriptions: {}
  /** Special classification items (e.g., no data, suppressed) */
  specialClasses: { key: any; label: any; value: any }[]
  /** Whether to use unified legend style */
  unified: boolean
  /** Whether to separate zero values in legend */
  separateZero: boolean
  /** Whether to display legend in single column */
  singleColumn: boolean
  /** Whether to display legend in single row */
  singleRow: boolean
  /** Whether legend items are vertically sorted */
  verticalSorted: boolean
  /** Whether to show special classes at the end of legend */
  showSpecialClassesLast: boolean
  /** Whether to use dynamic descriptions */
  dynamicDescription: boolean
  /** Type of legend display */
  type: string
  /** Number of items to display in legend */
  numberOfItems: number
  /** Position of legend relative to map */
  position: string
  /** Title text for legend */
  title: string
  /** Visual style for legend items */
  style: 'circles' | 'boxes' | 'gradient'
  /** Sub-style for gradient legends */
  subStyle: 'linear blocks' | 'smooth'
  /** Rotation angle for legend tick labels */
  tickRotation: string
  /** Whether to hide legend border */
  hideBorder: false
  /** Whether to use single column layout */
  singleColumnLegend: false
  /** Separator characters between legend items */
  separators?: string
}
