import { BaseVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import { Version } from '@cdc/core/types/Version'
import { MarkupConfig } from '@cdc/core/types/MarkupVariable'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { DataRow } from '@cdc/core/types/DataRow'

export interface DataBiteConfig extends BaseVisualizationConfig, MarkupConfig {
  type: 'data-bite'
  data: DataRow[]
  dataBite: string
  dataFunction: string
  dataColumn: string
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
  }
  biteStyle: string
  filters: VizFilter[]
  subtext: string
  title: string
  theme: string
  shadow: boolean
  visual: {
    border: boolean
    accent: boolean
    background: boolean
    hideBackgroundColor: boolean
    borderColorTheme: boolean
    showTitle: boolean
    whiteBackground: boolean
  }
  general: {
    isCompactStyle: boolean
  }
  version: Version
}
