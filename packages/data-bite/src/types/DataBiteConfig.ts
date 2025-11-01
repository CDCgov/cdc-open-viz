import { BaseVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { DataDescription } from '@cdc/core/types/DataDescription'
import { Runtime } from '@cdc/core/types/Runtime'

/**
 * Configuration interface for Data Bite visualizations.
 * Extends BaseVisualizationConfig with data-bite-specific properties.
 */
export interface DataBiteConfig extends BaseVisualizationConfig {
  // Override base properties to be more specific or required
  type: 'data-bite'
  data: Object[]
  filters: VizFilter[]

  // Data Bite specific properties
  dataBite: string
  dataFunction: string
  dataColumn: string
  dataUrl?: string
  dataDescription?: Partial<DataDescription>
  bitePosition: string
  biteFontSize: number
  fontSize: string
  biteBody: string
  imageData: {
    display: string
    url: string
    alt: string
    options: Object[]
  }
  dataFormat: {
    roundToPlace: number
    commas: boolean
    prefix: string
    suffix: string
    ignoreZeros?: boolean
  }
  biteStyle: string
  subtext: string
  theme: string
  shadow: boolean
  general: {
    isCompactStyle: boolean
  }

  // Optional properties used by editor and runtime
  runtime?: Runtime
}
