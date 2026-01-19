/**
 * Configuration for preliminary data markers (suppression, effects, etc.)
 * Used to indicate data quality issues or special conditions in visualizations.
 */
export interface PreliminaryDataItem {
  column: string
  displayLegend: boolean
  displayTable: boolean
  displayTooltip: boolean
  iconCode: string
  label: string
  lineCode: string
  seriesKeys: string[]
  style: string
  symbol: string
  type: 'effect' | 'suppression'
  value: string
  hideBarSymbol: boolean
  hideLineStyle: boolean
  circleSize: number
  displayGray: boolean
}
