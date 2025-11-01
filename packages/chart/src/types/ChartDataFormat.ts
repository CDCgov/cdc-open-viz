/**
 * Data formatting configuration for charts.
 * Controls how numeric and text data is displayed in charts including
 * prefixes, suffixes, rounding, and abbreviation settings for different axes.
 */
export type ChartDataFormat = {
  /** Whether to abbreviate numbers (e.g., 1000 -> 1K) */
  abbreviated: boolean
  /** Whether to abbreviate numbers on bottom axis */
  bottomAbbreviated: boolean
  /** Whether to add commas to bottom axis numbers */
  bottomCommas: boolean
  /** Text prefix for bottom axis numbers */
  bottomPrefix: string
  /** Number of decimal places for bottom axis */
  bottomRoundTo: number
  /** Text suffix for bottom axis numbers */
  bottomSuffix: string
  /** Whether to add commas to numbers */
  commas: boolean
  /** Text prefix for numbers */
  prefix: string
  /** Whether to add commas to right axis numbers */
  rightCommas: boolean
  /** Text prefix for right axis numbers */
  rightPrefix: string
  /** Number of decimal places for right axis */
  rightRoundTo: number
  /** Text suffix for right axis numbers */
  rightSuffix: string
  /** Number of decimal places to round to */
  roundTo: number
  /** Text suffix for numbers */
  suffix: string
  /** Whether to show percentages on pie charts */
  showPiePercent: boolean
}
