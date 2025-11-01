/**
 * Map-specific table configuration
 * Controls the data table display associated with the map
 */
export type MapTable = {
  /** Label/title for the data table */
  label: string
  /** Whether table is expanded by default */
  expanded: boolean
  /** Whether to limit the height of the table */
  limitHeight: boolean
  /** Height value when limitHeight is true */
  height: string
  /** Caption text for the table */
  caption: string
  /** Whether to show download CSV button */
  showDownloadUrl: boolean
  /** Whether to show full geographic names in CSV export */
  showFullGeoNameInCSV: boolean
  /** Whether to force display of table even when data is minimal */
  forceDisplay: boolean
  /** Whether to allow downloading table data */
  download: boolean
  /** Label for the index column */
  indexLabel: string
  /** Minimum width for table cells */
  cellMinWidth: string
}
