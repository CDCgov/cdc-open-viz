import { Version } from '@cdc/core/types/Version'
import { MarkupConfig } from '@cdc/core/types/MarkupVariable'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { TrendIndicatorConfig } from '@cdc/core/helpers/trendIndicator'
import { DataColorConfig } from '@cdc/core/helpers/dataColors'

export type Config = {
  type: string
  data: Object[]
  dataMetadata?: Record<string, string>
  dataBite: string
  dataFunction: string
  dataColumn: string
  bitePosition: 'Left' | 'Right' | 'Top' | 'Bottom'
  biteFontSize: number
  fontSize: 'small' | 'medium' | 'large' | 'x-large'
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
  biteStyle: 'graphic' | 'split' | 'title' | 'body' | 'end' | 'gradient' | 'tp5'
  filters: VizFilter[]
  subtext: string
  title: string
  theme: string
  /** @deprecated shadows have been removed from data bites */
  shadow: boolean
  visual: {
    border: boolean
    accent: boolean
    background: boolean
    hideBackgroundColor: boolean
    borderColorTheme: boolean
    showTitle: boolean
    whiteBackground: boolean
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
