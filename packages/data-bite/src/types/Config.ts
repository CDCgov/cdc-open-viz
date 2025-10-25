import { Version } from '@cdc/core/types/Version'
import { MarkupConfig } from '@cdc/core/types/MarkupVariable'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { ComponentThemes } from '@cdc/core/types/ComponentThemes'
import { ComponentStyles } from '@cdc/core/types/ComponentStyles'

export type Config = {
  type: string
  data: Object[]
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
  shadow: boolean
  visual: ComponentStyles & {
    showTitle: boolean
  }
  general: {
    headerColor?: ComponentThemes
    isCompactStyle: boolean
  }
  version: Version
} & MarkupConfig
