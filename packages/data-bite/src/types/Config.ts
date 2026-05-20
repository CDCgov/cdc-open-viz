import { Version } from '@cdc/core/types/Version'
import { MarkupConfig } from '@cdc/core/types/MarkupVariable'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { TrendIndicatorConfig } from '@cdc/core/helpers/trendIndicator'
import { DataColorConfig } from '@cdc/core/helpers/dataColors'
import { ComponentStyles } from '@cdc/core/types/ComponentStyles'
import { SharedTp5VisualOptions } from '@cdc/core/types/SharedTp5VisualOptions'

export type Config = {
  type: string
  data: Object[]
  dataMetadata?: Record<string, string>
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
  /** @deprecated shadows have been removed from data bites */
  shadow: boolean
  visual: ComponentStyles &
    SharedTp5VisualOptions & {
      showTitle: boolean
      useWrap?: boolean
    }
  general: {
    isCompactStyle: boolean
  }
  trendIndicator?: TrendIndicatorConfig
  dataColors?: DataColorConfig
  version: Version
  locale: string
} & MarkupConfig
