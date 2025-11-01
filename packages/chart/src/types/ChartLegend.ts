import { Legend as CoreLegend } from '@cdc/core/types/Legend'
import { Label } from './Label'

/**
 * Chart-specific legend configuration.
 * Extends the core Legend type with chart-specific properties for
 * advanced legend functionality including patterns, shapes, and ordering.
 */
export type ChartLegend = CoreLegend & {
  /** Series keys to highlight in the legend */
  seriesHighlight: string[]
  /** Whether to use a unified legend style across series */
  unified: boolean
  /** Whether to hide the suppression information link */
  hideSuppressionLink: boolean
  /** Visual style for legend items */
  style: 'circles' | 'boxes' | 'gradient' | 'lines'
  /** Sub-style for gradient legends */
  subStyle: 'linear blocks' | 'smooth'
  /** Whether legend items have shapes */
  hasShape: boolean
  /** Ordering method for legend items */
  order: 'dataColumn' | 'asc' | 'desc'
  /** Custom ordered values for legend */
  orderedValues: Label[]
  /** Rotation angle for legend ticks */
  tickRotation: string
  /** Border hiding configuration */
  hideBorder: {
    /** Hide side borders */
    side: boolean
    /** Hide top/bottom borders */
    topBottom: boolean
  }
  /** Group legend items by this property */
  groupBy: string
  /** Separator characters between legend items */
  separators?: string
  /** Pattern configurations for legend items */
  patterns?: {
    [key: string]: {
      /** Display label for the pattern */
      label?: string
      /** Color for the pattern */
      color?: string
      /** Shape for the pattern */
      shape?: string
      /** Data key to match for applying pattern */
      dataKey?: string
      /** Data value to match for applying pattern */
      dataValue?: string
      /** Whether to perform contrast checking */
      contrastCheck?: boolean
      /** Size of the pattern */
      patternSize?: number
    }
  }
}
