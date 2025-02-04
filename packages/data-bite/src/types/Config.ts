import { Version } from '@cdc/core/types/Version'

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
  filters: Object[]
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
  }
  general: {
    isCompactStyle: boolean
  }
  version: Version
}
