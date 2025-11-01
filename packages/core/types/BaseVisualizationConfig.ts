import { VizFilter } from './VizFilter'
import { FilterBehavior } from './FilterBehavior'
import Footnotes from './Footnotes'
import { Version } from './Version'
import { DataDescription } from './DataDescription'

type SankeyLink = {
  depth: number
  height: number
  id: string
  index: number
  layer: number
  sourceLinks: SankeyLink[]
  targetLinks: SankeyLink[]
  value: number
  x0: number
  x1: number
  y0: number
  y1: number
}

type StoryNode = {
  StoryNode: string
  segmentTextAfter: string
  segmentTextBefore: string
}

/** Data object that may contain tableData property for complex visualizations like Sankey */
interface SankeyDataFormat {
  [index: number]: {
    tooltips?: Object[]
    tooltipData?: Object[]
    tableData?: Object[]
    links?: {
      source: string // These are strings, not SankeyLink objects
      target: string
      value: number
    }[]
    storyNodeText?: StoryNode[]
  }
}

/**
 * Base configuration interface for all COVE visualizations.
 * Contains properties shared across all visualization types.
 *
 * All visualization configs should extend this base interface.
 *
 * Note: Visual styling properties are NOT included in the base.
 * Visualizations that need visual styling should explicitly declare
 * a `visual` property with their package-specific Visual type.
 */
export interface BaseVisualizationConfig {
  /** The type of visualization (e.g., 'chart', 'map', 'data-bite', 'table', etc.) */
  type: string
  /** Version information for the visualization config */
  version?: Version
  /** Optional data array for the visualization */
  data?: Object[] | SankeyDataFormat
  /** Optional filters applied to the visualization */
  filters?: VizFilter[]
  /** Optional unique identifier for the visualization */
  uid?: string | number
  /** Optional URL to load data from */
  dataUrl?: string
  /** Optional title for the visualization */
  title?: string
  /** Optional flag to show/hide the title */
  showTitle?: boolean
  /** Optional data description configuration */
  dataDescription?: Partial<DataDescription>
  /** Optional flag to show/hide the editor panel */
  showEditorPanel?: boolean

  // Common properties used across visualizations
  /** Data key for identifying dataset */
  dataKey?: string
  /** Formatted data - can be array or object depending on visualization type */
  formattedData?: Object[] | Record<string, any>
  /** Visualization type (specific subtype like 'Bar', 'Line', etc.) */
  visualizationType?: string
  /** Filter behavior configuration */
  filterBehavior?: FilterBehavior | string
  /** Footnotes configuration */
  footnotes?: Footnotes
  /** Theme */
  theme?: string
}

