/**
 * Pattern selection configuration for maps
 * Allows applying visual patterns to map regions based on data conditions
 */
export type PatternSelection = {
  /** Column name to check for pattern application */
  dataKey: string
  /** Value to match in the column */
  dataValue: string
  /** Type of pattern to apply */
  pattern: 'lines' | 'circles' | 'waves'
  /** Optional custom label for legend */
  label: string
  /** Size of pattern elements */
  size: 'small' | 'medium' | 'large'
  /** Color for the pattern */
  color: string
  /** Whether to perform contrast checking */
  contrastCheck: boolean
}
